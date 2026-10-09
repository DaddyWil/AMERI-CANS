(function () {
  'use strict';
  // Shared password gate for williamhans.app internal tools. The password itself is never stored here:
  // CFG.check is a known tag encrypted with the key derived from the password (PBKDF2-SHA256 -> AES-256-GCM).
  var CFG = { salt: 'lrQcIxM1NjNcM+9jhZ0Vsw==', iterations: 250000, check: { iv: 'iZYTfmpN+t4kfVre', ct: 'v2D32c/2RfAG99OaC8nT92C0SBUtsj9eJtM=' }, store: 'ac-gate-key', tag: 'AMERI-CANS' };
  var subtle = (typeof crypto !== 'undefined' && crypto.subtle) ? crypto.subtle : null;
  function toBytes(b64) { var bin = atob(b64), u = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i); return u; }
  function toB64(u8) { var s = ''; for (var i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); }
  function deriveKey(password) {
    return subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']).then(function (base) {
      return subtle.deriveKey({ name: 'PBKDF2', salt: toBytes(CFG.salt), iterations: CFG.iterations, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, true, ['encrypt', 'decrypt']);
    });
  }
  function importKey(raw) { return subtle.importKey('raw', toBytes(raw), 'AES-GCM', true, ['encrypt', 'decrypt']); }
  function decrypt(key, iv, ct) { return subtle.decrypt({ name: 'AES-GCM', iv: toBytes(iv) }, key, toBytes(ct)).then(function (pt) { return new TextDecoder().decode(pt); }); }
  function encrypt(key, text) { var iv = crypto.getRandomValues(new Uint8Array(12)); return subtle.encrypt({ name: 'AES-GCM', iv: iv }, key, new TextEncoder().encode(text)).then(function (ct) { return { iv: toB64(iv), ct: toB64(new Uint8Array(ct)) }; }); }
  function verify(key) { return decrypt(key, CFG.check.iv, CFG.check.ct).then(function (t) { return t === CFG.tag; }, function () { return false; }); }
  function stash(key, remember) { return subtle.exportKey('raw', key).then(function (raw) { var b = toB64(new Uint8Array(raw)); try { lock(); (remember ? localStorage : sessionStorage).setItem(CFG.store, b); } catch (e) {} }); }
  function unlock(password, remember) { return deriveKey(password).then(function (key) { return verify(key).then(function (ok) { if (!ok) return null; return stash(key, remember).then(function () { return key; }); }); }); }
  function hasCached() { try { return !!(localStorage.getItem(CFG.store) || sessionStorage.getItem(CFG.store)); } catch (e) { return false; } }
  function cachedKey() {
    var raw = null; try { raw = localStorage.getItem(CFG.store) || sessionStorage.getItem(CFG.store); } catch (e) {}
    if (!raw || !subtle) return Promise.resolve(null);
    return importKey(raw).then(function (key) { return verify(key).then(function (ok) { if (!ok) lock(); return ok ? key : null; }); }, function () { lock(); return null; });
  }
  function lock() { try { localStorage.removeItem(CFG.store); sessionStorage.removeItem(CFG.store); } catch (e) {} }
  var api = { config: CFG, supported: !!subtle, deriveKey: deriveKey, importKey: importKey, decrypt: decrypt, encrypt: encrypt, verify: verify, unlock: unlock, cachedKey: cachedKey, hasCached: hasCached, lock: lock, toB64: toB64, toBytes: toBytes };
  if (typeof window !== 'undefined') window.ACGate = api;
  if (typeof globalThis !== 'undefined') globalThis.ACGate = api;
})();
