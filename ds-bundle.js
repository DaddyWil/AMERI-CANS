/* @ds-bundle: {"format":4,"namespace":"AMERICANSDesignSystem_8f13fa","components":[{"name":"BulletList","sourcePath":"components/document/BulletList.jsx"},{"name":"Callout","sourcePath":"components/document/Callout.jsx"},{"name":"Checklist","sourcePath":"components/document/Checklist.jsx"},{"name":"DocFooter","sourcePath":"components/document/DocFooter.jsx"},{"name":"DocTable","sourcePath":"components/document/DocTable.jsx"},{"name":"FormTable","sourcePath":"components/document/FormTable.jsx"},{"name":"Heading","sourcePath":"components/document/Heading.jsx"},{"name":"NeedFlag","sourcePath":"components/document/NeedFlag.jsx"},{"name":"StepBlock","sourcePath":"components/document/StepBlock.jsx"},{"name":"StepList","sourcePath":"components/document/StepList.jsx"},{"name":"TitleBlock","sourcePath":"components/document/TitleBlock.jsx"},{"name":"Badge","sourcePath":"components/tool/Badge.jsx"},{"name":"Button","sourcePath":"components/tool/Button.jsx"},{"name":"Checkbox","sourcePath":"components/tool/Checkbox.jsx"},{"name":"Input","sourcePath":"components/tool/Input.jsx"},{"name":"ResultPanel","sourcePath":"components/tool/ResultPanel.jsx"},{"name":"Select","sourcePath":"components/tool/Select.jsx"},{"name":"ToolHeader","sourcePath":"components/tool/ToolHeader.jsx"}],"sourceHashes":{"components/document/BulletList.jsx":"e73dfff171d8","components/document/Callout.jsx":"bf8ac74b71d4","components/document/Checklist.jsx":"d372ec6b70ac","components/document/DocFooter.jsx":"51df62a9fd79","components/document/DocTable.jsx":"7926c18f4a11","components/document/FormTable.jsx":"0ac18d1cd60c","components/document/Heading.jsx":"56f543b14315","components/document/NeedFlag.jsx":"ca97d64dcb8a","components/document/StepBlock.jsx":"6210994de9a9","components/document/StepList.jsx":"14902c90eac7","components/document/TitleBlock.jsx":"894b0b2bde8c","components/tool/Badge.jsx":"eb92ba18875a","components/tool/Button.jsx":"dc6a9551a2e5","components/tool/Checkbox.jsx":"e48884acf337","components/tool/Input.jsx":"fe7fe8aa2c6e","components/tool/ResultPanel.jsx":"73688f9dceb4","components/tool/Select.jsx":"dcd80430aab8","components/tool/ToolHeader.jsx":"ad0033c8fda8","ui_kits/field_tool/InstallPricing.jsx":"17ee16f53b2f","ui_kits/field_tool/UnitCalculator.jsx":"0258b5c4bbca","ui_kits/internal_doc/ChecklistForm.jsx":"7132a53105e7","ui_kits/internal_doc/LetterPage.jsx":"740461788ea8","ui_kits/internal_doc/SiteAnnex.jsx":"3f8d9f50fd2d","ui_kits/internal_doc/SopPage.jsx":"9e10fbb35ba1","ui_kits/proposal/OnePager.jsx":"fa2ae3501838","ui_kits/proposal/ProposalPage.jsx":"cb1cb6b69898"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AMERICANSDesignSystem_8f13fa = window.AMERICANSDesignSystem_8f13fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/document/BulletList.jsx
try { (() => {
/** Bulleted list with the binder's round bullet. Optional bold lead per item via {lead, text} objects. */
function BulletList({
  items = [],
  fontSize = 'var(--fs-body)',
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '0 0 var(--para-gap)',
      paddingLeft: '18pt',
      listStyleType: 'disc',
      fontSize,
      lineHeight: 'var(--lh-body)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      margin: '0 0 2pt'
    }
  }, it && typeof it === 'object' && !React.isValidElement(it) && it.lead != null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, it.lead, /[.:]$/.test(it.lead) ? ' ' : ': '), it.text) : it)));
}
Object.assign(__ds_scope, { BulletList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/BulletList.jsx", error: String((e && e.message) || e) }); }

// components/document/Callout.jsx
try { (() => {
/** Callout: 3pt navy left bar on Light fill, no other borders. Bold navy lead sentence, then body. variant "alert" is red. */
function Callout({
  variant = 'note',
  label,
  children,
  style
}) {
  const alert = variant === 'alert';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `var(--callout-bar) solid ${alert ? 'var(--ac-red)' : 'var(--border-callout-bar)'}`,
      background: alert ? 'var(--surface-alert)' : 'var(--surface-callout)',
      padding: '4.5pt 6pt',
      margin: '4pt 0 8pt',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: alert ? 'var(--ac-red)' : 'var(--text-heading)'
    }
  }, label, /[.:]$/.test(label) ? ' ' : '. '), children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Callout.jsx", error: String((e && e.message) || e) }); }

// components/document/Checklist.jsx
try { (() => {
/** Printable checklist: square check boxes, optional initials/date columns. */
function Checklist({
  items = [],
  columns = ['Item'],
  showInitials = false,
  showDate = false,
  checked = [],
  style
}) {
  const cell = {
    padding: 'var(--cell-pad-y) var(--cell-pad-x)',
    border: 'var(--rule-thin) solid var(--border-rule)',
    fontSize: 'var(--fs-table)',
    lineHeight: 'var(--lh-table)',
    verticalAlign: 'top'
  };
  const head = {
    ...cell,
    background: 'var(--surface-table-header)',
    color: 'var(--text-heading)',
    fontWeight: 'var(--fw-bold)',
    textAlign: 'left'
  };
  const box = on => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '9pt',
      height: '9pt',
      border: '0.75pt solid var(--ac-navy)',
      verticalAlign: '-1pt',
      textAlign: 'center',
      lineHeight: '8pt',
      fontSize: '8pt',
      fontWeight: 700,
      color: 'var(--ac-navy)'
    }
  }, on ? 'X' : '');
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      fontFamily: 'var(--font-body)',
      margin: '0 0 var(--para-gap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: '18pt'
    }
  }), /*#__PURE__*/React.createElement("col", null), showInitials && /*#__PURE__*/React.createElement("col", {
    style: {
      width: '0.7in'
    }
  }), showDate && /*#__PURE__*/React.createElement("col", {
    style: {
      width: '0.9in'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: head
  }), /*#__PURE__*/React.createElement("th", {
    style: head
  }, columns[0]), showInitials && /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Initials"), showDate && /*#__PURE__*/React.createElement("th", {
    style: head
  }, "Date"))), /*#__PURE__*/React.createElement("tbody", null, items.map((it, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'center'
    }
  }, box(checked.includes(i))), /*#__PURE__*/React.createElement("td", {
    style: cell
  }, it), showInitials && /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      background: 'var(--surface-input)'
    }
  }), showDate && /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      background: 'var(--surface-input)'
    }
  })))));
}
Object.assign(__ds_scope, { Checklist });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Checklist.jsx", error: String((e && e.message) || e) }); }

// components/document/DocFooter.jsx
try { (() => {
/** Page footer, 6.5pt gray: "AMERI-CANS Operations Manual | <program> | <code> | <version> | Controlled Document | Internal Use Only" left, "Page x of y" right. */
function DocFooter({
  manual = 'AMERI-CANS Operations Manual',
  program = '24/7 Continuous Custodial',
  code,
  version,
  controlled = true,
  classification = 'Internal Use Only',
  page,
  pages,
  style
}) {
  const parts = [manual, program, code, version, controlled ? 'Controlled Document' : null, classification].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '12pt',
      fontSize: 'var(--fs-footer)',
      color: 'var(--text-caption)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, parts.join('  |  ')), page != null && /*#__PURE__*/React.createElement("div", null, "Page ", page, pages != null ? ` of ${pages}` : ''));
}
Object.assign(__ds_scope, { DocFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocFooter.jsx", error: String((e && e.message) || e) }); }

// components/document/DocTable.jsx
try { (() => {
/** Content table: 0.5pt Rule borders all round, Light-fill bold navy header row, optional Light-fill bold navy label column (control tables), 9pt. */
function DocTable({
  columns = [],
  rows = [],
  labelColumn = false,
  widths,
  caption,
  fontSize = 'var(--fs-table)',
  style
}) {
  const cell = {
    padding: 'var(--cell-pad-y) var(--cell-pad-x)',
    border: 'var(--rule-thin) solid var(--border-rule)',
    verticalAlign: 'top',
    textAlign: 'left',
    fontSize,
    lineHeight: 'var(--lh-table)'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      fontFamily: 'var(--font-body)',
      margin: '0 0 var(--para-gap)',
      ...style
    }
  }, widths && /*#__PURE__*/React.createElement("colgroup", null, widths.map((w, i) => /*#__PURE__*/React.createElement("col", {
    key: i,
    style: {
      width: w
    }
  }))), caption && /*#__PURE__*/React.createElement("caption", {
    style: {
      captionSide: 'top',
      textAlign: 'left',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)',
      padding: '0 0 2pt'
    }
  }, caption), columns.length > 0 && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      background: 'var(--surface-table-header)',
      color: 'var(--text-heading)',
      fontWeight: 'var(--fw-bold)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((v, ci) => {
    const isLabel = labelColumn && ci === 0;
    return /*#__PURE__*/React.createElement("td", {
      key: ci,
      style: {
        ...cell,
        ...(isLabel ? {
          background: 'var(--surface-label-cell)',
          color: 'var(--text-label)',
          fontWeight: 'var(--fw-bold)'
        } : null)
      }
    }, v);
  })))));
}
Object.assign(__ds_scope, { DocTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/DocTable.jsx", error: String((e && e.message) || e) }); }

// components/document/FormTable.jsx
try { (() => {
/** Form table: pale label cells on the left, sky-tinted input cells on the right (the only editable areas). */
function FormTable({
  fields = [],
  labelWidth = '32%',
  columns = 1,
  style
}) {
  const cell = {
    padding: 'var(--cell-pad-y) var(--cell-pad-x)',
    border: 'var(--rule-thin) solid var(--border-rule)',
    fontSize: 'var(--fs-table)',
    lineHeight: 'var(--lh-table)',
    verticalAlign: 'top'
  };
  const rows = [];
  for (let i = 0; i < fields.length; i += columns) rows.push(fields.slice(i, i + columns));
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      fontFamily: 'var(--font-body)',
      margin: '0 0 var(--para-gap)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, rows[0] && rows[0].flatMap((_, i) => [/*#__PURE__*/React.createElement("col", {
    key: `l${i}`,
    style: {
      width: labelWidth
    }
  }), /*#__PURE__*/React.createElement("col", {
    key: `v${i}`
  })])), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, r.map((f, ci) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: ci
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      background: 'var(--surface-form-label)',
      color: 'var(--text-form-label)',
      fontWeight: 'var(--fw-bold)'
    }
  }, f.label), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      background: 'var(--surface-input)',
      minHeight: '14pt',
      height: f.lines ? `${f.lines * 12 + 6}pt` : undefined,
      color: 'var(--text-body)'
    }
  }, f.value)))))));
}
Object.assign(__ds_scope, { FormTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/FormTable.jsx", error: String((e && e.message) || e) }); }

// components/document/Heading.jsx
try { (() => {
/** Section heading. level 1: uppercase bold navy 12pt with thin sky rule; 2: bold denim 10.5pt; 3: bold navy 10pt. */
function Heading({
  level = 1,
  children,
  number,
  style
}) {
  const base = {
    fontFamily: 'var(--font-heading)',
    fontWeight: 'var(--fw-bold)',
    margin: 0,
    lineHeight: 'var(--lh-tight)'
  };
  const byLevel = {
    1: {
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-heading)',
      textTransform: 'var(--tt-heading)',
      letterSpacing: 'var(--ls-heading)',
      borderBottom: 'var(--rule-heading) solid var(--border-heading-rule)',
      paddingBottom: '2pt',
      marginTop: 'var(--h1-gap-top)',
      marginBottom: 'var(--h1-gap-bottom)'
    },
    2: {
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-subhead)',
      marginTop: 'var(--h2-gap-top)',
      marginBottom: 'var(--h2-gap-bottom)'
    },
    3: {
      fontSize: 'var(--fs-h3)',
      color: 'var(--text-heading)',
      marginTop: 'var(--h3-gap-top)',
      marginBottom: 'var(--h3-gap-bottom)'
    }
  };
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      ...base,
      ...(byLevel[level] || byLevel[3]),
      ...style
    }
  }, number != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      minWidth: '2.2em'
    }
  }, number), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/Heading.jsx", error: String((e && e.message) || e) }); }

// components/document/NeedFlag.jsx
try { (() => {
/** Red bold [NEED] flag marking missing information. Never guess; flag it. */
function NeedFlag({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-alert)',
      fontWeight: 'var(--fw-bold)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, "[NEED", children ? `: ${children}` : '', "]");
}
Object.assign(__ds_scope, { NeedFlag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/NeedFlag.jsx", error: String((e && e.message) || e) }); }

// components/document/StepBlock.jsx
try { (() => {
/** Procedure step: "Step N: Title" (bold navy 10pt), "Responsibility: Execution, X | Review, Y" (gray), then bullets. */
function StepBlock({
  number,
  title,
  responsibility,
  items = [],
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      margin: '0 0 6pt',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)',
      fontSize: 'var(--fs-h3)',
      marginTop: 'var(--h3-gap-top)',
      marginBottom: '1pt',
      lineHeight: 'var(--lh-tight)'
    }
  }, number != null ? `Step ${number}: ` : '', title), responsibility && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-table)',
      color: 'var(--text-caption)',
      marginBottom: '2pt'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, "Responsibility: "), responsibility), items.length > 0 && /*#__PURE__*/React.createElement(__ds_scope.BulletList, {
    items: items,
    style: {
      marginBottom: 0
    }
  }), children);
}
Object.assign(__ds_scope, { StepBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/StepBlock.jsx", error: String((e && e.message) || e) }); }

// components/document/StepList.jsx
try { (() => {
/** Numbered procedure steps. Body 10pt, tight spacing. */
function StepList({
  steps = [],
  start = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    start: start,
    style: {
      margin: '0 0 var(--para-gap)',
      paddingLeft: '18pt',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      margin: '0 0 2pt'
    }
  }, s)));
}
Object.assign(__ds_scope, { StepList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/StepList.jsx", error: String((e && e.message) || e) }); }

// components/document/TitleBlock.jsx
try { (() => {
/** Binder cover block (page 1). Logo left in a 1.875in column; right: program line, binder line, uppercase title (15pt), code (denim), descriptor (gray). No borders. Then the Purpose paragraph. */
function TitleBlock({
  program = '24/7 CONTINUOUS CUSTODIAL OPERATIONS',
  binder = 'MASTER PROGRAM BINDER',
  title,
  code,
  descriptor,
  purpose,
  logoSrc = 'assets/logo-stacked.png',
  style
}) {
  const line = {
    fontWeight: 'var(--fw-bold)',
    color: 'var(--text-heading)',
    fontSize: 'var(--fs-program)',
    lineHeight: 'var(--lh-cover)',
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '0.9in',
      marginBottom: '6pt'
    }
  }, logoSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--cover-logo-col)',
      flex: 'none',
      paddingRight: '4.5pt'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AMERI-CANS",
    style: {
      width: '1.6in',
      height: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '3pt 4.5pt'
    }
  }, program && /*#__PURE__*/React.createElement("div", {
    style: line
  }, program), binder && /*#__PURE__*/React.createElement("div", {
    style: {
      ...line,
      marginBottom: '3pt'
    }
  }, binder), /*#__PURE__*/React.createElement("div", {
    style: {
      ...line,
      fontSize: 'var(--fs-title)',
      marginBottom: '2pt'
    }
  }, title), code && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-subhead)',
      fontSize: 'var(--fs-program)',
      lineHeight: 'var(--lh-cover)',
      marginBottom: '2pt'
    }
  }, code), descriptor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-descriptor)',
      color: 'var(--text-caption)',
      lineHeight: 'var(--lh-body)'
    }
  }, descriptor))), purpose && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6pt',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, "Purpose: "), purpose));
}
Object.assign(__ds_scope, { TitleBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/document/TitleBlock.jsx", error: String((e && e.message) || e) }); }

// components/tool/Badge.jsx
try { (() => {
/** Small status label. Square, bold, uppercase. tone: navy | denim | sky | alert | gray | outline. */
function Badge({
  tone = 'navy',
  children,
  style
}) {
  const t = {
    navy: {
      background: 'var(--ac-navy)',
      color: '#fff',
      border: '1px solid var(--ac-navy)'
    },
    denim: {
      background: 'var(--ac-denim)',
      color: '#fff',
      border: '1px solid var(--ac-denim)'
    },
    sky: {
      background: 'var(--ac-light)',
      color: 'var(--ac-navy)',
      border: '1px solid var(--ac-sky)'
    },
    alert: {
      background: 'var(--ac-red-pale)',
      color: 'var(--ac-red)',
      border: '1px solid var(--ac-red)'
    },
    gray: {
      background: 'var(--ac-pale)',
      color: 'var(--ac-gray)',
      border: '1px solid var(--ac-rule)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ac-navy)',
      border: '1px solid var(--ac-navy)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: '11px',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: 1,
      padding: '4px 6px',
      whiteSpace: 'nowrap',
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/Badge.jsx", error: String((e && e.message) || e) }); }

// components/tool/Button.jsx
try { (() => {
/** Square-cornered button for phone tools. primary navy fill, secondary sky outline, ghost text only. 44px min tap height. */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [pressed, setPressed] = React.useState(false);
  const h = size === 'sm' ? '36px' : size === 'lg' ? '52px' : 'var(--tap-min)';
  const fs = size === 'sm' ? '14px' : size === 'lg' ? '17px' : '15px';
  const v = {
    primary: {
      background: pressed ? 'var(--ac-deep-sea)' : 'var(--ac-navy)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--ac-navy)'
    },
    secondary: {
      background: pressed ? 'var(--ac-light)' : 'var(--ac-white)',
      color: 'var(--ac-navy)',
      border: '1px solid var(--ac-sky)'
    },
    ghost: {
      background: pressed ? 'var(--ac-pale)' : 'transparent',
      color: 'var(--ac-denim)',
      border: '1px solid transparent'
    },
    alert: {
      background: pressed ? '#9E1E15' : 'var(--ac-red)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--ac-red)'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onPointerDown: () => setPressed(true),
    onPointerUp: () => setPressed(false),
    onPointerLeave: () => setPressed(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      fontWeight: 'var(--fw-bold)',
      minHeight: h,
      padding: '0 16px',
      borderRadius: 0,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : undefined,
      textTransform: variant === 'primary' || variant === 'alert' ? 'uppercase' : 'none',
      letterSpacing: variant === 'primary' || variant === 'alert' ? '0.02em' : 0,
      lineHeight: 1.2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      WebkitTapHighlightColor: 'transparent',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/Button.jsx", error: String((e && e.message) || e) }); }

// components/tool/Checkbox.jsx
try { (() => {
/** Square check box with label, 44px row. type "radio" renders a round-free square radio (same look, single-select). */
function Checkbox({
  label,
  checked = false,
  onChange,
  type = 'checkbox',
  name,
  disabled = false,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      minHeight: 'var(--tap-min)',
      padding: '10px 0',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-body)',
      opacity: disabled ? 0.45 : 1,
      borderBottom: '1px solid var(--border-rule)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      flex: 'none',
      width: '22px',
      height: '22px',
      marginTop: '1px',
      border: `2px solid ${checked ? 'var(--ac-navy)' : 'var(--ac-sky)'}`,
      background: checked ? 'var(--ac-navy)' : 'var(--ac-white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }), checked && (type === 'radio' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: '8px',
      height: '8px',
      background: 'var(--ac-white)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '11px',
      borderRight: '2.5px solid #fff',
      borderBottom: '2.5px solid #fff',
      transform: 'translateY(-1px) rotate(45deg)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-screen-body)',
      color: 'var(--text-body)',
      lineHeight: 1.35
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--text-caption)',
      marginTop: '2px'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/tool/Input.jsx
try { (() => {
/** Labeled text/number input for phone tools. Sky-tinted field, denim label above, optional unit suffix and help text. */
function Input({
  label,
  value,
  onChange,
  type = 'text',
  inputMode,
  placeholder,
  unit,
  help,
  error,
  disabled = false,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || (label ? 'in-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-screen-label)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-label)',
      marginBottom: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      border: `1px solid ${error ? 'var(--ac-red)' : focus ? 'var(--ac-navy)' : 'var(--ac-sky)'}`,
      background: disabled ? 'var(--ac-pale)' : 'var(--surface-input)',
      minHeight: 'var(--tap-min)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: uid,
    type: type,
    inputMode: inputMode || (type === 'number' ? 'decimal' : undefined),
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: 'none',
      background: 'transparent',
      padding: '0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-screen-input)',
      color: 'var(--text-body)',
      borderRadius: 0
    }
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      fontSize: 'var(--fs-screen-label)',
      color: 'var(--text-caption)',
      borderLeft: '1px solid var(--border-rule)'
    }
  }, unit)), (error || help) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '4px',
      fontSize: 'var(--fs-screen-caption)',
      color: error ? 'var(--ac-red)' : 'var(--text-caption)',
      fontWeight: error ? 'var(--fw-bold)' : 400
    }
  }, error || help));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/Input.jsx", error: String((e && e.message) || e) }); }

// components/tool/ResultPanel.jsx
try { (() => {
/** Result panel for calculators: label, large navy value, optional unit and note. Light fill, navy left bar. */
function ResultPanel({
  label,
  value,
  unit,
  note,
  tone = 'navy',
  style
}) {
  const alert = tone === 'alert';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: `4px solid ${alert ? 'var(--ac-red)' : 'var(--ac-navy)'}`,
      background: alert ? 'var(--ac-red-pale)' : 'var(--ac-light)',
      padding: '12px 16px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-screen-label)',
      fontWeight: 'var(--fw-bold)',
      color: alert ? 'var(--ac-red)' : 'var(--text-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px',
      marginTop: '2px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-screen-result)',
      fontWeight: 'var(--fw-bold)',
      color: alert ? 'var(--ac-red)' : 'var(--ac-navy)',
      lineHeight: 1.1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-screen-body)',
      color: 'var(--text-caption)'
    }
  }, unit)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--text-caption)',
      marginTop: '4px',
      lineHeight: 1.35
    }
  }, note));
}
Object.assign(__ds_scope, { ResultPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/ResultPanel.jsx", error: String((e && e.message) || e) }); }

// components/tool/Select.jsx
try { (() => {
/** Native select styled to match Input: sky-tinted, 44px, denim label. */
function Select({
  label,
  value,
  onChange,
  options = [],
  help,
  disabled = false,
  id,
  style
}) {
  const uid = id || (label ? 'sel-' + label.replace(/\W+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      display: 'block',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--fs-screen-label)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-label)',
      marginBottom: '4px'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: uid,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      minHeight: 'var(--tap-min)',
      appearance: 'none',
      WebkitAppearance: 'none',
      border: '1px solid var(--ac-sky)',
      background: disabled ? 'var(--ac-pale)' : 'var(--surface-input)',
      padding: '0 36px 0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-screen-input)',
      color: 'var(--text-body)',
      borderRadius: 0,
      outline: 'none'
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      width: '8px',
      height: '8px',
      borderRight: '2px solid var(--ac-navy)',
      borderBottom: '2px solid var(--ac-navy)',
      transform: 'translateY(-70%) rotate(45deg)',
      pointerEvents: 'none'
    }
  })), help && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '4px',
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--text-caption)'
    }
  }, help));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/Select.jsx", error: String((e && e.message) || e) }); }

// components/tool/ToolHeader.jsx
try { (() => {
/** Navy header bar for single-file HTML tools: horizontal logo left, tool name, optional right slot. */
function ToolHeader({
  title,
  subtitle,
  logoSrc = 'assets/logo-horizontal.png',
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--ac-navy)',
      color: '#fff',
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, logoSrc && /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fff',
      padding: '4px 6px',
      display: 'flex',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AMERI-CANS",
    style: {
      height: '18px',
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-screen-label)',
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--ac-rule)',
      lineHeight: 1.2,
      marginTop: '2px'
    }
  }, subtitle)), right && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, right));
}
Object.assign(__ds_scope, { ToolHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tool/ToolHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_tool/InstallPricing.jsx
try { (() => {
// Recreation of uploads/AMERI-CANS_Install_Materials_Pricing.html. Values copied from that file's CSS.
const T = {
  navy: '#012B4E',
  red: '#B72319',
  denim: '#3E6883',
  sky: '#5D8FAF',
  tint: '#E9F1F7',
  ink: '#0E1F31',
  muted: '#5B6B7A',
  line: '#D6DFE7',
  lineStrong: '#B9C7D3',
  input: '#F2F6FA',
  secFill: '#F8FAFC'
};
const CATALOG = [['3 in PVC DWV', '3 in PVC DWV S40 pipe (10 ft sticks)', 'P40PM10', 1.73371, 'ft', 165], ['3 in PVC DWV', '3 in PVC DWV 90 ell', 'PDWV9M', 6.293, 'ea', 5], ['3 in PVC DWV', '3x3x3 PVC DWV san tee', 'PDWVSTM', 9.173, 'ea', 10], ['3 in PVC DWV', '3 in PVC DWV coupling', 'PDWVCM', 3.053, 'ea', 18], ['2 in PVC DWV', '2 in PVC DWV S40 pipe (10 ft sticks)', 'P40PK10', 0.87787, 'ft', 85], ['2 in PVC DWV', '2x2x2 PVC DWV san tee', 'PDWVSTK', 3.485, 'ea', 7], ['2 in PVC DWV', '2 in PVC DWV 90 ell', 'PDWV9K', 2.141, 'ea', 10], ['1 in PEX-B', '1 in PEX-B pipe', 'PEXBG20WH', 0.914, 'ft', 108], ['1 in PEX-B', '1 in Oetiker PEX SS crimp', 'PEXBCLAMPG', 0.54, 'ea', 13], ['Fernco couplers', '3 in plastic to plastic Fernco coupler', 'F105633', 6.99, 'ea', 4]];
const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
const lbl = {
  display: 'block',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '.05em',
  textTransform: 'uppercase',
  color: T.denim,
  marginBottom: '4px'
};
const inp = {
  width: '100%',
  background: T.input,
  border: `1px solid ${T.lineStrong}`,
  borderRadius: '4px',
  padding: '7px 9px',
  minHeight: '38px',
  fontSize: '15px',
  font: 'inherit',
  color: T.ink
};
const btn = {
  border: `1px solid ${T.lineStrong}`,
  background: '#fff',
  color: T.navy,
  borderRadius: '4px',
  padding: '8px 14px',
  fontWeight: 700,
  fontSize: '13px',
  minHeight: '38px',
  font: 'inherit',
  cursor: 'pointer'
};
const rowCols = 'minmax(200px,2.2fr) 1fr .8fr .7fr .5fr .9fr 30px';
function Field({
  label,
  value,
  placeholder,
  type = 'text'
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    defaultValue: value,
    placeholder: placeholder,
    "aria-label": label,
    style: inp
  }));
}
function InstallPricing() {
  const [qty, setQty] = React.useState(() => CATALOG.map(() => 0));
  const [labor, setLabor] = React.useState([{
    label: 'Day 1',
    rate: 75,
    hours: 0
  }]);
  const [tax, setTax] = React.useState(0);
  const [markup, setMarkup] = React.useState(0);
  const lines = CATALOG.map((c, i) => c[3] * qty[i]);
  const materials = lines.reduce((a, b) => a + b, 0);
  const hours = labor.reduce((a, l) => a + l.hours, 0),
    laborTotal = labor.reduce((a, l) => a + l.rate * l.hours, 0);
  const taxAmt = materials * tax / 100,
    sub = materials + taxAmt + laborTotal,
    mk = sub * markup / 100;
  const secs = [...new Set(CATALOG.map(c => c[0]))];
  const hdr = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: T.denim
  };
  const qInp = {
    ...inp,
    minHeight: '34px',
    padding: '5px 8px',
    fontSize: '14px'
  };
  const quiet = {
    ...qInp,
    background: 'transparent',
    borderColor: 'transparent'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      color: T.ink,
      fontFamily: 'Arial, Helvetica, "Liberation Sans", sans-serif',
      fontSize: '15px',
      lineHeight: 1.45,
      borderTop: `4px solid ${T.navy}`,
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '18px 20px 40px'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      paddingBottom: '14px',
      borderBottom: `1px solid ${T.line}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "AMERI-CANS",
    style: {
      height: '38px',
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      color: T.navy,
      fontSize: '22px',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, "Install Materials Pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: T.muted
    }
  }, "Bill of materials and labor for a trailer waste and water hookup, at supplier quote pricing."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.4fr 1fr .8fr',
      gap: '10px 14px',
      padding: '14px 0',
      borderBottom: `1px solid ${T.line}`
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Job",
    placeholder: "Customer, site, or unit"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Price source",
    value: "Ferguson Quote B602952 (02/23/26)"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Prepared by",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Date",
    type: "date",
    value: "2026-09-12"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '8px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: T.navy,
      fontSize: '15px',
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "Materials"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: T.muted
    }
  }, "Enter quantities. Prices and descriptions are editable; items with no item number were priced outside the quote.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${T.line}`,
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: rowCols,
      gap: '6px',
      padding: '6px 10px',
      background: T.tint,
      borderBottom: `1px solid ${T.line}`
    }
  }, ['Description', 'Item number', 'Unit price', 'Qty', 'Unit', 'Line total', ''].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...hdr,
      textAlign: i === 2 || i === 3 || i === 5 ? 'right' : i === 4 ? 'center' : 'left'
    }
  }, h))), secs.map(sec => {
    const secTotal = CATALOG.reduce((a, c, i) => a + (c[0] === sec ? lines[i] : 0), 0);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: sec
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        gap: '6px',
        alignItems: 'center',
        padding: '7px 10px',
        background: T.secFill,
        borderBottom: `1px solid ${T.line}`
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        color: T.navy,
        fontSize: '13px',
        letterSpacing: '.03em',
        textTransform: 'uppercase'
      }
    }, sec), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        color: T.muted,
        fontVariantNumeric: 'tabular-nums'
      }
    }, money.format(secTotal)), /*#__PURE__*/React.createElement("button", {
      style: {
        ...btn,
        padding: '4px 10px',
        minHeight: '28px',
        fontSize: '12px'
      }
    }, "+ Item")), CATALOG.map((c, i) => c[0] === sec && /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: rowCols,
        gap: '6px',
        alignItems: 'center',
        padding: '5px 10px',
        borderBottom: `1px solid ${T.line}`
      }
    }, /*#__PURE__*/React.createElement("input", {
      style: quiet,
      defaultValue: c[1],
      "aria-label": "Description"
    }), /*#__PURE__*/React.createElement("input", {
      style: quiet,
      defaultValue: c[2],
      "aria-label": "Item number"
    }), /*#__PURE__*/React.createElement("input", {
      style: qInp,
      type: "number",
      defaultValue: Math.round(c[3] * 100000) / 100000,
      "aria-label": "Unit price"
    }), /*#__PURE__*/React.createElement("input", {
      style: qInp,
      type: "number",
      value: qty[i] || '',
      placeholder: "0",
      onChange: e => setQty(q => q.map((v, k) => k === i ? parseFloat(e.target.value) || 0 : v)),
      "aria-label": "Quantity"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: T.muted,
        textAlign: 'center',
        textTransform: 'uppercase'
      }
    }, c[4]), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontVariantNumeric: 'tabular-nums',
        fontSize: '14px',
        color: lines[i] ? T.navy : T.muted,
        fontWeight: lines[i] ? 700 : 400
      }
    }, money.format(lines[i])), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Remove item",
      style: {
        width: '30px',
        height: '30px',
        border: '1px solid transparent',
        background: 'transparent',
        borderRadius: '4px',
        color: T.muted,
        fontSize: '16px',
        lineHeight: 1,
        padding: 0,
        cursor: 'pointer'
      }
    }, "\xD7"))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => {
      setQty(CATALOG.map(c => c[5]));
      setLabor([['Day 1', 75, 8], ['Day 2', 75, 6.5], ['Day 3', 75, 7.5]].map(([label, rate, hours]) => ({
        label,
        rate,
        hours
      })));
    }
  }, "Load 11-plex quantities"), /*#__PURE__*/React.createElement("button", {
    style: btn,
    onClick: () => {
      setQty(CATALOG.map(() => 0));
      setLabor(l => l.map(x => ({
        ...x,
        hours: 0
      })));
    }
  }, "Clear quantities"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: T.navy,
      fontSize: '15px',
      letterSpacing: '.02em',
      textTransform: 'uppercase'
    }
  }, "Labor"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: T.muted
    }
  }, "One line per day or per tech.")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${T.line}`,
      borderRadius: '4px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(200px,2.2fr) .9fr .8fr .9fr 30px',
      gap: '6px',
      padding: '6px 10px',
      background: T.tint,
      borderBottom: `1px solid ${T.line}`
    }
  }, ['Label', 'Rate $/hr', 'Hours', 'Line total', ''].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      ...hdr,
      textAlign: i ? 'right' : 'left'
    }
  }, h))), labor.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(200px,2.2fr) .9fr .8fr .9fr 30px',
      gap: '6px',
      alignItems: 'center',
      padding: '5px 10px',
      borderBottom: i < labor.length - 1 ? `1px solid ${T.line}` : 0
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: quiet,
    defaultValue: l.label,
    "aria-label": "Label"
  }), /*#__PURE__*/React.createElement("input", {
    style: qInp,
    type: "number",
    value: l.rate,
    onChange: e => setLabor(a => a.map((x, k) => k === i ? {
      ...x,
      rate: parseFloat(e.target.value) || 0
    } : x)),
    "aria-label": "Rate"
  }), /*#__PURE__*/React.createElement("input", {
    style: qInp,
    type: "number",
    value: l.hours || '',
    placeholder: "0",
    onChange: e => setLabor(a => a.map((x, k) => k === i ? {
      ...x,
      hours: parseFloat(e.target.value) || 0
    } : x)),
    "aria-label": "Hours"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontVariantNumeric: 'tabular-nums',
      fontSize: '14px',
      color: T.navy,
      fontWeight: 700
    }
  }, money.format(l.rate * l.hours)), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      padding: '4px 10px',
      minHeight: '28px',
      fontSize: '12px'
    },
    onClick: () => setLabor(a => [...a, {
      label: `Day ${a.length + 1}`,
      rate: 75,
      hours: 0
    }])
  }, "+ Add labor line"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: '20px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: lbl
  }, "Notes"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inp,
      minHeight: '96px',
      resize: 'vertical'
    },
    placeholder: "Assumptions, substitutions, items to verify",
    "aria-label": "Notes"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      border: `1px solid ${T.line}`,
      borderRadius: '4px',
      padding: '12px 14px',
      display: 'grid',
      gap: '6px',
      fontSize: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Materials"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: T.navy,
      fontVariantNumeric: 'tabular-nums'
    }
  }, money.format(materials))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Labor ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: T.muted,
      fontSize: '12px'
    }
  }, "(", hours, " hr)")), /*#__PURE__*/React.createElement("b", {
    style: {
      color: T.navy
    }
  }, money.format(laborTotal))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 84px 96px',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Sales tax on materials, %"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...inp,
      minHeight: '32px',
      padding: '4px 8px',
      fontSize: '13px'
    },
    type: "number",
    value: tax,
    onChange: e => setTax(parseFloat(e.target.value) || 0),
    "aria-label": "Sales tax percent"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      color: T.navy
    }
  }, money.format(taxAmt))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 84px 96px',
      gap: '8px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Markup, %"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...inp,
      minHeight: '32px',
      padding: '4px 8px',
      fontSize: '13px'
    },
    type: "number",
    value: markup,
    onChange: e => setMarkup(parseFloat(e.target.value) || 0),
    "aria-label": "Markup percent"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      color: T.navy
    }
  }, money.format(mk))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: `2px solid ${T.navy}`,
      paddingTop: '8px',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: T.navy,
      fontSize: '24px',
      fontWeight: 800,
      letterSpacing: '-.01em'
    }
  }, money.format(sub + mk))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn
  }, "Copy summary"), /*#__PURE__*/React.createElement("button", {
    style: btn
  }, "Print view"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn,
      background: T.red,
      borderColor: T.red,
      color: '#fff'
    }
  }, "Print / save PDF")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '18px',
      fontSize: '12px',
      color: T.muted,
      lineHeight: 1.6,
      maxWidth: '90ch'
    }
  }, "General version of the 11-plex materials pricing worksheet. Unit prices are the Ferguson quote of 02/23/26 (per-100 \"C\" pricing converted to per foot). Threaded adapters are priced as male (SxM). Labor rate is the tech cost used on that job, not a billing rate.")));
}
Object.assign(window, {
  InstallPricing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_tool/InstallPricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/field_tool/UnitCalculator.jsx
try { (() => {
const {
  ToolHeader,
  Input,
  Select,
  Button,
  ResultPanel,
  Badge,
  Checkbox
} = window.AMERICANSDesignSystem_8f13fa;
// OSHA 1926.51(c) Table D-1: <=20 workers 1 toilet; 21-200 one seat + one urinal per 40; >200 one seat + one urinal per 40 up to 200 then per 50.
function oshaMin(n) {
  if (!n || n <= 0) return 0;
  if (n <= 20) return 1;
  if (n <= 200) return Math.ceil(n / 40);
  return 5 + Math.ceil((n - 200) / 50);
}
function UnitCalculator() {
  const [workers, setWorkers] = React.useState('');
  const [freq, setFreq] = React.useState('2x weekly');
  const [ada, setAda] = React.useState(true);
  const [wash, setWash] = React.useState(true);
  const [done, setDone] = React.useState(false);
  const n = parseInt(workers, 10) || 0;
  const min = oshaMin(n);
  const factor = freq === '1x weekly' ? 1.5 : freq === '3x weekly' ? 0.85 : 1;
  const rec = n ? Math.max(min, Math.ceil(min * factor)) : 0;
  const adaN = ada && rec ? Math.max(1, Math.ceil(rec * 0.05)) : 0;
  const washN = wash && rec ? Math.ceil(rec / 2) : 0;
  const err = done && !n ? 'Enter a headcount' : '';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--screen-max-width)',
      margin: '0 auto',
      minHeight: '100%',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(ToolHeader, {
    logoSrc: "../../assets/logo-horizontal.png",
    title: "Unit Count Calculator",
    subtitle: "OSHA 1926.51(c) minimums",
    right: /*#__PURE__*/React.createElement(Badge, {
      tone: "sky"
    }, "v1.0")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Peak workers on site",
    type: "number",
    value: workers,
    onChange: e => setWorkers(e.target.value),
    unit: "workers",
    help: "Largest daily headcount during the phase",
    error: err
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Service frequency",
    value: freq,
    onChange: e => setFreq(e.target.value),
    options: ['1x weekly', '2x weekly', '3x weekly']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include ADA unit",
    description: "5% of units, minimum 1",
    checked: ada,
    onChange: e => setAda(e.target.checked)
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Include hand wash stations",
    description: "1 per 2 restroom units",
    checked: wash,
    onChange: e => setWash(e.target.checked)
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setDone(true)
  }, "Calculate"), done && n > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(ResultPanel, {
    label: "Recommended units",
    value: rec,
    unit: "restroom units",
    note: `OSHA minimum ${min} for ${n} workers at ${freq}`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(ResultPanel, {
    label: "ADA",
    value: adaN,
    unit: "units"
  }), /*#__PURE__*/React.createElement(ResultPanel, {
    label: "Hand wash",
    value: washN,
    unit: "stations"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--text-caption)',
      lineHeight: 1.4
    }
  }, "Minimums assume a 40-hour week. Sites with women on crew, remote clusters, or long walking distances need more units. Confirm with the site super.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    onClick: () => {
      setWorkers('');
      setDone(false);
    }
  }, "Reset"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid var(--border-rule)',
      fontSize: 'var(--fs-screen-caption)',
      color: 'var(--text-caption)'
    }
  }, "Field Tool | TOOL-CALC-001 | v1.0 | Internal Use Only"));
}
Object.assign(window, {
  UnitCalculator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/field_tool/UnitCalculator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal_doc/ChecklistForm.jsx
try { (() => {
const {
  Heading,
  DocTable,
  FormTable,
  Checklist,
  Callout
} = window.AMERICANSDesignSystem_8f13fa;
const ccF = {
  code: 'CC-F',
  version: 'V.1.09122026'
};
const cell = {
  padding: '3pt 5pt',
  border: '0.5pt solid var(--ac-rule)',
  fontSize: 'var(--fs-table)',
  verticalAlign: 'top'
};
function QcForm() {
  const items = ['Photo log: one sent entry per stall, BEFORE and AFTER, maintenance answered, signed', 'Bowls scrubbed and free of soil (Full); free of visible soil (Pass)', 'Fixtures: sink, faucet, mirror, counter, dispensers, toilet and urinal exteriors clean', 'Walls, inside of door, baseboards clean (Full); marks removed (Pass)', 'Floor swept and mopped; dry', 'Stock: soap, towels, paper above half', 'Trash: fresh liner, can in place, nothing on floor', 'Odor: none', 'Nothing left behind: no product, tools, rags, signs in the stall', 'Exterior: handles, latches, rails wiped; walls spot clean; signage and ID label', 'Steps and landings clear; no mud at entrances; no trip hazard', 'Mats clean, dry, flat; pulled mats racked', 'No trash within ten feet; no bag left outside', 'Water and power confirmed or logged', 'Issues found are in Connecteam with photos; OOS locked and signed', 'Doors closed, not locked, unless OOS'];
  const box = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '9pt',
      height: '9pt',
      border: '0.75pt solid var(--ac-navy)',
      verticalAlign: '-1pt'
    }
  });
  return /*#__PURE__*/React.createElement(LetterPage, {
    footer: ccF,
    page: 12,
    pages: 28
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    style: {
      marginTop: 0
    }
  }, "CC-F08: QC Inspection Form"), /*#__PURE__*/React.createElement(P, null, "One per inspection. Mark each item Pass, Fix (corrected now), or Fail (redo). Correct with the technician present."), /*#__PURE__*/React.createElement(FormTable, {
    columns: 3,
    labelWidth: "18%",
    fields: [{
      label: 'Date / time'
    }, {
      label: 'Unit ID'
    }, {
      label: 'Window # and type',
      value: 'Full / Pass'
    }, {
      label: 'Van'
    }, {
      label: 'Technician(s)'
    }, {
      label: 'Inspector'
    }]
  }), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      margin: '6pt 0'
    }
  }, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '0.45in'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '0.45in'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '0.45in'
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: '1.6in'
    }
  })), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ['Item', 'Pass', 'Fix', 'Fail', 'Note'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      ...cell,
      background: 'var(--ac-light)',
      color: 'var(--ac-navy)',
      textAlign: h === 'Item' || h === 'Note' ? 'left' : 'center'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, items.map((it, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    style: cell
  }, it), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'center'
    }
  }, box), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'center'
    }
  }, box), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      textAlign: 'center'
    }
  }, box), /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      background: 'var(--surface-input)'
    }
  }))))), /*#__PURE__*/React.createElement(SigLine, null, "Items inspected: ____   Passed: ____   Corrected on the spot:  Y / N   Retraining needed:  Y / N   Item(s): ______________"), /*#__PURE__*/React.createElement(SigLine, null, "Technician initials: ______        Inspector initials: ______"), /*#__PURE__*/React.createElement(FormRef, null, "CC-F08. CC-17 Sections 2 and 6; pass standards in CC-07 Section 7, CC-08 Section 6, CC-09 Section 7, CC-10 Section 7"));
}
function FieldCard() {
  const col = rows => rows.map((r, i) => typeof r === 'string' && /^\d\. /.test(r) ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontWeight: 700,
      color: 'var(--ac-navy)',
      background: 'var(--ac-light)',
      padding: '2pt 4pt',
      marginTop: i ? '4pt' : 0,
      fontSize: 'var(--fs-table)'
    }
  }, r) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: '4pt',
      padding: '1.5pt 4pt',
      fontSize: 'var(--fs-table)',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: '8pt',
      height: '8pt',
      border: '0.75pt solid var(--ac-navy)',
      marginTop: '1.5pt'
    }
  }), /*#__PURE__*/React.createElement("span", null, r)));
  const left = ['1. ARRIVAL AND WALK-AROUND (VAN LEAD)', 'Park clear of doors and traffic; hazards on', 'Full circle: leaks, waste and water connections, power cord, skirting, steps, rails, doors, lights, signage, ground, trash within 10 ft', 'One sink 3 seconds, one flush: water and pump confirmed', 'Breaker panel by eye only', 'Issues logged in Connecteam with photo, now', 'No water or no power: stop, log, call the Shift Manager, next unit', '2. STALL SPLIT', 'Stalls assigned by number; caddies loaded; gloves on', 'Each tech: photo log open, site, unit, stall, BEFORE photo', '3. STALLS (CC-08, 29 STEPS)', 'Every assigned stall, every step, in order', 'AFTER photo, maintenance Y/N, sign, save, send', 'Finished early: next unassigned stall, then Step 4', '5-Foot Walkback on every stall'];
  const right = ['4. MATS', 'Pull mats; lay clean dry spares flat, edges down', 'Rinse pulled mats downhill or at the van; sanitize; rack upright', 'Runoff away from entrances; torn mats logged and replaced', '5. EXTERIOR, STEPS, LANDINGS', 'Door handles, latches, push plates, handrails wiped', 'Steps and landings swept and wiped; thresholds and tracks clear', 'Mud sprayed off at entrances', 'Walls spot cleaned; signage and ID label; graffiti removed and photographed', 'Trash within 10 ft picked up; exterior lights checked', '6. TRASH', 'Bags tied, straight into the van container; never on the landing', '7. CLOSE (VAN LEAD)', 'Count entries: one AFTER photo per stall, all sent', 'Nothing left behind; doors closed, not locked; OOS locked and signed', 'Unit-level issues logged; unit complete with time on the plan; over 10 min late: radio'];
  return /*#__PURE__*/React.createElement(LetterPage, {
    footer: cc07,
    page: 6,
    pages: 6
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    style: {
      marginTop: 0
    }
  }, "CC-F16: Maid Service Field Card (unit level)"), /*#__PURE__*/React.createElement(P, {
    style: {
      fontWeight: 700,
      color: 'var(--ac-navy)'
    }
  }, "Full Service  |  One technician per stall (CC-08 inside the stall)  |  Van Lead runs the unit"), /*#__PURE__*/React.createElement(P, {
    style: {
      fontSize: 'var(--fs-table)',
      textTransform: 'uppercase',
      fontWeight: 700
    }
  }, "One card per unit per Full Service window. Photo log is the record; this card is the pace."), /*#__PURE__*/React.createElement(FormTable, {
    columns: 3,
    labelWidth: "16%",
    fields: [{
      label: 'Date'
    }, {
      label: 'Unit ID'
    }, {
      label: 'Window #',
      value: '___ of 6'
    }, {
      label: 'Van Lead'
    }, {
      label: 'Techs'
    }, {
      label: 'Arrive / Depart',
      value: '______  /  ______'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 8pt',
      border: '0.5pt solid var(--ac-rule)',
      padding: '4pt',
      margin: '6pt 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, col(left)), /*#__PURE__*/React.createElement("div", null, col(right))), /*#__PURE__*/React.createElement(Callout, {
    label: "Stalls, never steps"
  }, "TARGETS: 8-stall 29 min at 4 techs, 45 at 2; MK IV 35 / 55. REPORT ON DISCOVERY: log it, photo it, then clean. NOTHING STAYS ON THE UNIT."), /*#__PURE__*/React.createElement(SigLine, null, "Van Lead initials: ________        Shift Manager QC initials: ________        Pass  /  Fix"), /*#__PURE__*/React.createElement(FormRef, null, "CC-07 Maid Service, Unit-Level Procedure, V.1.09122026, field card CC-F16. Stall steps and photos in CC-08; unit pass standard in CC-07 Section 7."));
}
Object.assign(window, {
  QcForm,
  FieldCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal_doc/ChecklistForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal_doc/LetterPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Letter page shell matching the binder: 0.75in top/left/right, 0.625in bottom, footer at the bottom margin. Kit helper.
const {
  DocFooter
} = window.AMERICANSDesignSystem_8f13fa;
function LetterPage({
  children,
  footer,
  page,
  pages
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '8.5in',
      minHeight: '11in',
      background: '#fff',
      border: '1px solid var(--ac-rule)',
      padding: '0.75in 0.75in 0.625in',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(DocFooter, _extends({}, footer, {
    page: page,
    pages: pages,
    style: {
      marginTop: '10pt'
    }
  })));
}
function P({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--para-gap)',
      ...style
    }
  }, children);
}
function HeaderLine({
  children = 'AMERI-CANS Operations Manual Version 1  |  Controlled Document  |  Internal Use Only'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)',
      margin: '2pt 0 8pt',
      whiteSpace: 'pre'
    }
  }, children);
}
function SigLine({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-table)',
      margin: '6pt 0',
      whiteSpace: 'pre-wrap'
    }
  }, children);
}
function FormRef({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-caption)',
      margin: '2pt 0 10pt'
    }
  }, children);
}
Object.assign(window, {
  LetterPage,
  P,
  HeaderLine,
  SigLine,
  FormRef
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal_doc/LetterPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal_doc/SiteAnnex.jsx
try { (() => {
const {
  TitleBlock,
  Heading,
  DocTable,
  NeedFlag,
  BulletList
} = window.AMERICANSDesignSystem_8f13fa;
function SiteAnnex() {
  const N = t => /*#__PURE__*/React.createElement(NeedFlag, null, t);
  return /*#__PURE__*/React.createElement(LetterPage, {
    footer: {
      code: 'SA-01',
      version: 'V.1.09122026'
    },
    page: 1,
    pages: 9
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    logoSrc: "../../assets/logo-stacked.png",
    binder: "SITE ANNEX",
    title: "Site Annex: RSE Project",
    code: "SA-01",
    descriptor: "Site instance 01 of the master program; known values filled, the rest flagged [NEED]",
    purpose: "Carry every site-specific value for the RSE project that the CC master SOPs point to, so that the crews run the master procedures with this site's clock, units, contacts, rules, and staffing. Values below are pre-filled from the customer proposal (July 27, 2026), the 24/7 operations overview prepared for the customer, and the decisions recorded during the binder build; every unknown is a red [NEED] listed in Section 12."
  }), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['20%', '80%'],
    rows: [['Document', 'Site Annex, RSE Project (continuous custodial, 24/7)'], ['Number', 'SA-01, Site Annex to the AMERI-CANS 24/7 Continuous Custodial Operations Master Program Binder'], ['Version', 'V.1.09122026 (Version 1, issued 09/12/2026)'], ['Owner', 'Assistant Operations Manager for the site Area of Responsibility (AOR)'], ['Prepared by', 'W. Hans, Assistant Operations Manager'], ['Approval', 'Interim approval: Assistant Operations Manager, W. Hans, 09/12/2026. Operations Manager approval: pending.'], ['Customer agreement', 'AMERI-CANS Custodial Infrastructure Proposal, RSE Project, July 27, 2026 (agreed); 24/7 Custodial Operations overview prepared for W.G. Yates, July 27, 2026 (customer-facing)'], ['Applies to', 'Everyone assigned to this site. Where a CC SOP says "see Site Annex," the value here governs. The annex never lowers a CC standard; it may raise one.']]
  }), /*#__PURE__*/React.createElement(HeaderLine, null), /*#__PURE__*/React.createElement(Heading, {
    level: 3
  }, "How to use this document"), /*#__PURE__*/React.createElement(BulletList, {
    items: [{
      lead: 'Everyone',
      text: 'Sections 2, 4, 7, and 11 are the pages you need on day one: who to call, the clock, the site rules, the emergency information.'
    }, {
      lead: 'Shift Managers (CTL)',
      text: 'Sections 3, 5, 6, 8, and 9 are the values you plan with: the register, the placement, the step, the par levels, the on-call roster.'
    }, {
      lead: 'AOM',
      text: 'Section 12 is the open items register. Every red [NEED] is listed there with an owner and two ways to close it.'
    }]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "1. Site configuration (CC-F01)"), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['34%', '66%'],
    rows: [['Site name', 'RSE Project'], ['Customer (contracting entity)', /*#__PURE__*/React.createElement(React.Fragment, null, N('confirm the contracting entity'), " (the 24/7 overview was prepared for W.G. Yates; the proposal is addressed to the RSE project)")], ['Project name', 'RSE'], ['Site address', N('site address')], ['Gate and check-in location', N('gate and check-in location')], ['Customer agreement reference and date', 'Custodial Infrastructure Proposal, July 27, 2026'], ['Coverage: active days and hours', '24/7 whenever the site is active, subject to the RSE working calendar; seven days a week'], ['Touches per stall per day', '6 per stall per day (proposal)'], ['Response standard', '30 minutes to diagnose, repair, or communicate an action plan (proposal); on scene within 30 minutes for maintenance emergencies (overview)'], ['Branch supporting the site', 'Burkburnett, TX'], ['Growth step in force and date', 'Step 1 (8 day technicians across 2 vans at 4; night 2 technicians on 1 van plus the Night Shift Manager), from 09/12/2026'], ['Touch placement in force', 'Placement A: Full in Windows 1 and 2, Pass in Windows 3 to 6']]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "2. Contacts (CC-F02)"), /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, "2.1 Emergency"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Role', 'Name', 'Phone / email', 'Notes'],
    widths: ['26%', '22%', '24%', '28%'],
    rows: [['Life safety', '911', '911', ''], ['Site security', N('number'), '', ''], ['Customer after-hours contact', N('name and number'), '', 'Also the night channel for action plans, Section 9']]
  }));
}
Object.assign(window, {
  SiteAnnex
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal_doc/SiteAnnex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/internal_doc/SopPage.jsx
try { (() => {
const {
  TitleBlock,
  Heading,
  DocTable,
  Callout,
  NeedFlag,
  BulletList,
  StepBlock
} = window.AMERICANSDesignSystem_8f13fa;
const cc07 = {
  code: 'CC-07',
  version: 'V.1.09122026'
};
function SopPage() {
  return /*#__PURE__*/React.createElement(LetterPage, {
    footer: cc07,
    page: 1,
    pages: 6
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    logoSrc: "../../assets/logo-stacked.png",
    title: "Maid Service, Unit-Level Procedure",
    code: "CC-07",
    descriptor: "The Full Service at unit level for every restroom trailer and MARK IV, one technician per stall",
    purpose: "Define the Full Service (Maid Service) at the unit level: what a van team does from the moment it parks at a restroom trailer or MARK IV until it drives away, with every stall cleaned to the 29-step stall procedure in CC-08 by one technician per stall, and the exterior, steps, mats, trash, and close done to one standard on every unit type. This document supersedes the two-person Tech A and Tech B split of the Maid Service SOP V.1.09032026; teams now split stalls, not steps."
  }), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['20%', '80%'],
    rows: [['Document', 'Maid Service, Unit-Level Procedure'], ['Number', 'CC-07, AMERI-CANS 24/7 Continuous Custodial Operations (Master Program Binder)'], ['Version', 'V.1.09122026 (Version 1, issued 09/12/2026)'], ['Owner', 'Assistant Operations Manager for the site Area of Responsibility (AOR)'], ['Prepared by', 'W. Hans, Assistant Operations Manager'], ['Approval', /*#__PURE__*/React.createElement(React.Fragment, null, "Interim approval: Assistant Operations Manager, W. Hans, 09/12/2026. Operations Manager approval: ", /*#__PURE__*/React.createElement(NeedFlag, null), " pending the next Operations Manual revision.")], ['Supersedes', 'SOP, RSE Continuous Custodial, Maid Service (8-Stall Exterior-Door Restroom Trailer), V.1.09032026, including its Appendix A field card and the proposed Appendix B. Retired on issue of this document.'], ['Applies to', 'Every AMERI-CANS person assigned to a 24/7 continuous custodial site: Custodial Service Technicians, Custodial Technician Team Leads (Shift Managers), Maintenance Technicians and Dispatch, the Field Service Lead, and the Assistant Operations Manager'], ['Related documents', 'CC-08 (the stall procedure this document wraps); CC-09 (Touch Pass); CC-06 (windows and rotation); CC-12 (issues found on the walk-around); CC-14 (products); CC-16 (van load, mat water); CC-F16 Maid Service Field Card'], ['Site values', 'This SOP is site-agnostic. Every site-specific value (clock times, unit count, names, phone numbers, customer rules) lives in the Site Annex (SA-xx). Where this SOP says "see Site Annex," the annex value governs.']]
  }), /*#__PURE__*/React.createElement(HeaderLine, null), /*#__PURE__*/React.createElement(Heading, {
    level: 3
  }, "How to use this document"), /*#__PURE__*/React.createElement(BulletList, {
    items: [{
      lead: 'Technicians',
      text: 'Section 4 is the unit sequence. Inside each stall you run CC-08; this document is everything around the stalls. CC-F16 is the card on the van.'
    }, {
      lead: 'Van Leads',
      text: 'Section 4 Steps 1, 2, and 7 are yours: the walk-around, the stall split, and the close. Section 5 is the time you pace against.'
    }, {
      lead: 'Shift Managers (CTL)',
      text: 'Section 6 is the unit pass standard for your inspections behind the vans.'
    }]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "1. Scope"), /*#__PURE__*/React.createElement(BulletList, {
    items: [{
      lead: 'In',
      text: 'every restroom trailer (2, 4, 8, or other stall count, exterior-door or interior-corridor) and every MARK IV on the unit register, on every Full Service window.'
    }, {
      lead: 'Out',
      text: 'portable toilets and hand-wash stations (CC-10); the Touch Pass (CC-09); the Thursday deep clean (CC-11); waste pumping and freshwater fills (service route); repairs beyond CC-12 first actions.'
    }, {
      lead: 'Inside the stall',
      text: 'CC-08 governs. Where this document and CC-08 overlap at the stall door, CC-08 wins.'
    }]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "2. Roles on the unit"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Role', 'On every unit'],
    widths: ['22%', '78%'],
    rows: [['Van Lead', 'Parks, starts the unit on the plan, runs the walk-around, splits the stalls, watches the pace, runs the close, logs unit-level issues, calls the unit complete.'], ['Technicians', 'Each owns the stalls assigned, BEFORE photo to AFTER photo, per CC-08. Then the shared unit work in Steps 4 to 6 as the Van Lead assigns it.'], ['Shift Manager', 'Inspects behind the van to CC-17; corrects with the technician present.']]
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "Stalls, never steps"
  }, "On an eight-stall unit two technicians take four stalls each and four technicians take two each, fixed by stall number for the lap. A technician does not restock a stall someone else is cleaning or mop behind them. One person is answerable for one stall, and the photo log says who."));
}
function SopProcedurePage() {
  return /*#__PURE__*/React.createElement(LetterPage, {
    footer: cc07,
    page: 2,
    pages: 6
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    style: {
      marginTop: 0
    }
  }, "4. Procedure: one unit, arrival to departure"), /*#__PURE__*/React.createElement(P, null, "Full Service. One technician per stall (CC-08). Van Lead runs the unit. Steps 1, 2, and 7 are the Van Lead's. Steps 4 to 6 run in parallel with the stalls as technicians finish their stalls; on a two-person van they run after the stalls."), /*#__PURE__*/React.createElement(StepBlock, {
    number: 1,
    title: "Arrival and walk-around",
    responsibility: "Execution, Van Lead | Review, Shift Manager",
    items: ['Park where the van blocks neither the unit doors nor site traffic; hazards on, nose out. Note the arrival time against the plan target.', 'Open one stall, run one sink for three seconds, and flush one toilet: water and pump confirmed. Look at the breaker panel by eye only.', 'Anything found is logged in Connecteam now with a photo (CC-12), before the stalls start. No water or no power: stop the Full Service on this unit, log it, call the Shift Manager, and move to the next unit.']
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 2,
    title: "Stall split and start",
    responsibility: "Execution, Van Lead",
    items: ['Assign stalls by number from the plan. Technicians confirm their caddies are loaded and gloves are on.', 'Each technician opens the Daily Stall Photo Log, enters site, unit (system), and stall, and takes the BEFORE photo. From here CC-08 governs inside the stall.']
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 3,
    title: "Stalls: the 29 steps (CC-08)",
    responsibility: "Execution, Each technician on own stalls | Review, CTL",
    items: ['Every assigned stall, every step, in order, BEFORE photo first and AFTER photo last. A technician who finishes early takes the next unassigned stall from the Van Lead, then moves to Step 4.']
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 4,
    title: "Mats",
    responsibility: "Execution, Technician assigned by the Van Lead",
    items: ['Pull every entrance and landing mat. Swap in a clean, dry spare from the van and lay it flat, edges down, on a dry landing.', 'Take the pulled mats to the dry, downhill side of the unit or to the van. Rinse with the van tank, spray with mat sanitizer per the label, and stand them upright in the van rack to dry.', 'Torn, curling, or missing mats are logged and replaced from the spares.']
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 5,
    title: "Exterior, steps, and landings",
    responsibility: "Execution, Technician assigned by the Van Lead",
    items: ['Wipe every exterior door handle, latch, and push plate with surface cleaner. Wipe handrails their full length.', 'Spot clean the exterior walls at hand height, the signage, and the ID label. Graffiti: remove with the approved product, photo before and after, log it.', 'Pick up trash within ten feet of the unit. Check that exterior lights work at night and log any that do not.']
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 6,
    title: "Trash to the van",
    responsibility: "Execution, Each technician for own stalls",
    items: ["Pulled bags go straight into the van's trash container, tied. Bags are never set beside the unit, on the steps, or on the landing, even for a minute."]
  }), /*#__PURE__*/React.createElement(StepBlock, {
    number: 7,
    title: "Close",
    responsibility: "Execution, Van Lead | Review, Shift Manager",
    items: ['Count the photo log entries: one AFTER photo per stall, all sent. A stall without an entry is not done.', 'Nothing left behind; doors closed, not locked; OOS locked and signed. Unit-level issues logged; unit complete with time on the plan; over 10 min late: radio.']
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "5. Time standard"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Unit', 'Technicians', 'Target', 'Radio if over'],
    widths: ['34%', '22%', '22%', '22%'],
    rows: [['8-stall trailer', '4', '29 min', '39 min'], ['8-stall trailer', '2', '45 min', '55 min'], ['MARK IV', '4 / 2', '35 / 55 min', '+10 min']],
    caption: "Targets from CC-F16. Site-specific targets, if any, are in the Site Annex."
  }));
}
Object.assign(window, {
  SopPage,
  SopProcedurePage,
  cc07
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/internal_doc/SopPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal/OnePager.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  TitleBlock,
  Heading,
  DocTable,
  Callout,
  DocFooter
} = window.AMERICANSDesignSystem_8f13fa;
function Page({
  children,
  footer,
  page,
  pages
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '8.5in',
      minHeight: '11in',
      background: '#fff',
      border: '1px solid var(--ac-rule)',
      padding: '0.75in',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(DocFooter, _extends({}, footer, {
    page: page,
    pages: pages,
    style: {
      marginTop: '12pt'
    }
  })));
}
function P({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--para-gap)'
    }
  }, children);
}
const propFooter = {
  program: 'Customer Proposal',
  code: 'PRO-2026-031',
  version: 'V.1.09122026',
  controlled: false,
  classification: 'Prepared for the customer'
};
function OnePager() {
  return /*#__PURE__*/React.createElement(Page, {
    footer: propFooter,
    page: 1,
    pages: 1
  }, /*#__PURE__*/React.createElement(TitleBlock, {
    logoSrc: "../../assets/logo-stacked.png",
    program: "AMERI-CANS",
    binder: "",
    title: "Portable Sanitation for Mission Critical Sites",
    code: "Capabilities one-pager",
    descriptor: "Restroom units, hand wash stations, and restroom trailers with scheduled service. Manassas, VA and Burkburnett, TX."
  }), /*#__PURE__*/React.createElement(Callout, {
    label: "Summary"
  }, "Clean, stocked, level units on every service day, with a written service record for each visit. Twice-weekly service is standard; daily service is available for high-headcount phases."), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "What we provide"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Equipment', 'Use', 'Standard service'],
    widths: ['30%', '40%', '30%'],
    rows: [['Standard restroom unit', 'General crew use, 1 per 40 workers', '2x weekly pump, charge, clean, restock'], ['ADA restroom unit', 'Accessible unit, required on most sites', '2x weekly, same as standard'], ['Hand wash station', 'Two-sink, foot pump, 20 gal fresh water', '2x weekly refill and restock'], ['Restroom trailer', 'Office and supervisor use, flushing, climate controlled', 'Per contract; weekly minimum']]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "How service works"), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['26%', '74%'],
    rows: [['Scheduling', 'Fixed service days per site. Same-day response for blocked or damaged units reported before 14:00.'], ['Site access', 'Drivers carry site badges, follow your gate hours, PPE rules, and exclusion zones. A site annex is written for every site before the first delivery.'], ['Records', 'Every service is logged by unit. Monthly service reports are available on request.'], ['Compliance', 'Unit counts follow OSHA 1926.51(c). Waste is disposed at permitted facilities; dump tickets are retained.']]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "Coverage"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Branch', 'Service area'],
    widths: ['30%', '70%'],
    rows: [['Manassas, VA', 'Northern Virginia, DC, and suburban Maryland data center and infrastructure corridors'], ['Burkburnett, TX', 'North Texas and southern Oklahoma']]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1
  }, "Next step"), /*#__PURE__*/React.createElement(P, null, "Send the site address, expected peak headcount, and start date. We return a unit count, service schedule, and pricing within one business day."), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['26%', '74%'],
    rows: [['Contact', 'AMERI-CANS, Manassas VA office'], ['Phone', '(703) 555-0100'], ['Email', 'service@ameri-cans.example']]
  }));
}
Object.assign(window, {
  OnePager,
  Page,
  P,
  propFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal/OnePager.jsx", error: String((e && e.message) || e) }); }

// ui_kits/proposal/ProposalPage.jsx
try { (() => {
const {
  TitleBlock,
  Heading,
  DocTable,
  Callout
} = window.AMERICANSDesignSystem_8f13fa;
function ProposalPage() {
  return /*#__PURE__*/React.createElement(Page, {
    footer: propFooter,
    page: 2,
    pages: 3
  }, /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    number: "2."
  }, "Scope of service"), /*#__PURE__*/React.createElement(P, null, "Turner Construction, Dulles Data Center Phase 2, Ashburn VA. Peak headcount 320 workers across two buildings. Service begins on the mobilization date and runs through substantial completion."), /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, "2.1 Equipment schedule"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Phase', 'Headcount', 'Standard', 'ADA', 'Hand wash', 'Trailer'],
    widths: ['28%', '14%', '14%', '12%', '16%', '16%'],
    rows: [['Mobilization (mo 1 to 2)', '80', '4', '1', '2', '1'], ['Structure (mo 3 to 8)', '320', '8', '2', '4', '1'], ['Fit-out (mo 9 to 14)', '200', '5', '1', '3', '1'], ['Closeout (mo 15)', '40', '2', '1', '1', '1']],
    caption: "Counts meet OSHA 1926.51(c) Table D-1 at each phase headcount."
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 2
  }, "2.2 Service schedule"), /*#__PURE__*/React.createElement(DocTable, {
    labelColumn: true,
    widths: ['26%', '74%'],
    rows: [['Service days', 'Tuesday and Friday, 05:30 to 08:00 arrival'], ['Daily option', 'Available during Structure phase at the rate in section 3'], ['Trailer', 'Weekly pump and clean; fresh water fill; consumables restocked'], ['Relocation', 'Units moved on request within 48 hours; no charge for first two moves per unit']]
  }), /*#__PURE__*/React.createElement(Heading, {
    level: 1,
    number: "3."
  }, "Pricing"), /*#__PURE__*/React.createElement(DocTable, {
    columns: ['Item', 'Unit', 'Monthly rate', 'Notes'],
    widths: ['34%', '14%', '20%', '32%'],
    rows: [['Standard unit, 2x weekly', 'each', '$185', 'Includes consumables'], ['ADA unit, 2x weekly', 'each', '$245', 'Includes consumables'], ['Hand wash station, 2x weekly', 'each', '$120', 'Includes soap and towels'], ['Restroom trailer, weekly', 'each', '$2,400', 'Delivery and setup billed once'], ['Delivery and pickup', 'per trip', '$95', 'Waived on initial mobilization']]
  }), /*#__PURE__*/React.createElement(Callout, null, "Rates hold for 12 months from the date of this proposal. Waste disposal fees are included. Damage from site equipment is billed at cost."));
}
Object.assign(window, {
  ProposalPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/proposal/ProposalPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BulletList = __ds_scope.BulletList;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Checklist = __ds_scope.Checklist;

__ds_ns.DocFooter = __ds_scope.DocFooter;

__ds_ns.DocTable = __ds_scope.DocTable;

__ds_ns.FormTable = __ds_scope.FormTable;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.NeedFlag = __ds_scope.NeedFlag;

__ds_ns.StepBlock = __ds_scope.StepBlock;

__ds_ns.StepList = __ds_scope.StepList;

__ds_ns.TitleBlock = __ds_scope.TitleBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ResultPanel = __ds_scope.ResultPanel;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.ToolHeader = __ds_scope.ToolHeader;

})();
