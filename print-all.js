function printAll(){
  var pages=['index.html','comps.html','grants.html','contacts.html','scenarios.html'];
  var titles=['Parcel Map','Commercial Comps','Grants & Incentives','Contacts & Outreach','Development Scenarios'];
  var win=window.open('','_blank');
  var css=[
    // Base
    'body{background:#fff;font-family:Inter,system-ui,sans-serif;max-width:100%;padding:0 20px;margin:0;color:#1a1d23}',
    'header{padding:16px 0;border-bottom:3px solid #1a1d23;margin-bottom:0}',
    'header h1{font-size:1.4rem;margin:0}',
    'header p{font-size:.78rem;color:#5f6774;margin:4px 0 0}',
    // Sections — no forced page breaks
    '.page-section{padding-top:20px;border-top:3px solid #1a1d23;margin-top:20px}',
    '.page-section:first-child{border-top:none;margin-top:0;padding-top:14px}',
    '.section-divider{font-size:1.15rem;font-weight:800;color:#1a1d23;margin-bottom:12px}',
    // Hide interactive elements
    '.print-btn,.print-btns,nav.tabs,.calc-panel,#map,.filter-bar,.negotiation,.tag-filters,script{display:none!important}',
    // Tables
    '.table-wrap{box-shadow:none;border:1px solid #ccc;border-radius:4px;margin-bottom:12px;overflow:hidden}',
    'table{width:100%;border-collapse:collapse;font-size:.74rem}',
    'thead th{background:#1a1d23;color:#fff;padding:6px 8px;font-size:.64rem;font-weight:600;text-transform:uppercase;letter-spacing:.03em;text-align:left}',
    'td{padding:5px 8px;border-bottom:1px solid #e8e8e8;font-size:.72rem;vertical-align:top}',
    'tfoot td{font-weight:700;border-top:2px solid #ccc}',
    '.mono{font-family:"JetBrains Mono",monospace}',
    // Status badges
    '.b{display:inline-block;padding:1px 6px;border-radius:3px;font-size:.62rem;font-weight:600}',
    '.owned{background:#dbeafe;color:#2563eb}',
    '.vacant{background:#dcfce7;color:#16a34a}',
    '.improved{background:#fef3c7;color:#d97706}',
    '.potential{background:#f3e8ff;color:#7c3aed}',
    // Metric rows — preserve grid
    '.metric-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:10px}',
    '.metric{background:#f8f9fa;border:1px solid #e2e5ea;border-radius:6px;padding:10px 12px}',
    '.metric .label{font-size:.6rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:#8b919d}',
    '.metric .value{font-size:.95rem;font-weight:800;margin-top:2px}',
    '.metric .sub{font-size:.65rem;color:#5f6774;margin-top:2px}',
    // Section titles
    '.section-title{font-size:.88rem;font-weight:800;margin:16px 0 8px;color:#1a1d23}',
    // Scenario panels
    '.scenario-panel{border:1px solid #ccc;border-radius:8px;margin-bottom:12px;overflow:hidden}',
    '.scenario-header{padding:10px 14px;border-bottom:1px solid #e2e5ea;display:flex;justify-content:space-between;align-items:center}',
    '.scenario-header h3{font-size:.88rem;font-weight:800;margin:0}',
    '.roi-badge{font-size:.82rem;font-weight:800;color:#059669}',
    '.scenario-body{padding:14px 16px}',
    // Pro forma grids — MUST preserve 2-column layout
    '.pro-forma{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}',
    '.pf-section{background:#f8f9fa;border:1px solid #e2e5ea;border-radius:6px;padding:10px 12px}',
    '.pf-section h5{font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#8b919d;margin:0 0 6px}',
    '.pf-line{display:flex;justify-content:space-between;font-size:.7rem;padding:2px 0;border-bottom:1px solid #f0f1f3}',
    '.pf-line:last-child{border-bottom:none}',
    '.pf-line.total{font-weight:700;border-top:2px solid #e2e5ea;padding-top:4px;margin-top:3px;font-size:.74rem}',
    '.pf-line .amt{font-family:"JetBrains Mono",monospace;font-weight:600;white-space:nowrap;margin-left:8px}',
    // ROI grid
    '.roi-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:10px}',
    '.roi-card{text-align:center;background:#f8f9fa;border:1px solid #e2e5ea;border-radius:6px;padding:8px 6px}',
    '.roi-card .roi-label{font-size:.55rem;font-weight:600;text-transform:uppercase;letter-spacing:.04em;color:#8b919d}',
    '.roi-card .roi-val{font-size:.92rem;font-weight:800;margin-top:1px}',
    '.roi-card .roi-sub{font-size:.55rem;color:#5f6774;margin-top:1px}',
    // Funding stack
    '.funding-stack{margin-top:8px}',
    '.stack-bar{display:flex;height:24px;border-radius:4px;overflow:hidden;margin-bottom:4px}',
    '.stack-bar div{display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:700;color:#fff}',
    '.stack-legend{display:flex;flex-wrap:wrap;gap:8px;font-size:.62rem}',
    '.stack-legend span{display:flex;align-items:center;gap:3px}',
    '.stack-legend .dot{width:7px;height:7px;border-radius:50%;display:inline-block}',
    // Zone cards
    '.zone-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px}',
    '.zone-card{background:#fff;border:1px solid #e2e5ea;border-radius:6px;padding:10px 12px}',
    '.zone-card h4{font-size:.76rem;font-weight:700;margin:0 0 4px;display:flex;align-items:center;gap:4px}',
    '.zone-dot{width:8px;height:8px;border-radius:50%;display:inline-block}',
    '.zone-a .zone-dot{background:#2563eb}',
    '.zone-b .zone-dot{background:#059669}',
    '.zone-c .zone-dot{background:#7c3aed}',
    '.zone-card .zone-stats{font-size:.66rem;color:#5f6774;line-height:1.5}',
    '.zone-card .zone-stats strong{color:#1a1d23}',
    // Amenity cards
    '.amenity-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px}',
    '.amenity-card{background:#fff;border:1px solid #e2e5ea;border-radius:6px;padding:10px 12px}',
    '.amenity-card h5{font-size:.72rem;font-weight:700;margin:0 0 3px}',
    '.amenity-card .amenity-detail{font-size:.64rem;color:#5f6774;line-height:1.4}',
    // Compare table
    '.compare-table{width:100%;border-collapse:collapse;font-size:.7rem}',
    '.compare-table th{background:#1a1d23;color:#fff;padding:6px 8px;font-size:.6rem;font-weight:600;text-transform:uppercase;text-align:center}',
    '.compare-table th:first-child{text-align:left}',
    '.compare-table td{padding:6px 8px;text-align:center;border-bottom:1px solid #e8e8e8}',
    '.compare-table td:first-child{text-align:left;font-weight:600}',
    '.compare-table .best{color:#059669;font-weight:800}',
    '.compare-table .worst{color:#dc2626}',
    // Grant cards
    '.grant-card{background:#fff;border:1px solid #e2e5ea;border-radius:6px;padding:10px 14px;margin-bottom:8px;box-shadow:none}',
    '.grant-card h4{font-size:.78rem;font-weight:700;margin:0 0 2px}',
    '.grant-card .amount{font-size:.88rem;font-weight:800;color:#059669;margin-top:4px}',
    '.grant-card .deadline{font-size:.66rem;color:#dc2626;font-weight:600;margin-top:2px}',
    // Tags
    '.tag{display:inline-block;padding:1px 6px;border-radius:3px;font-size:.58rem;font-weight:600}',
    '.tag-dev{background:#dbeafe;color:#2563eb}',
    '.tag-sold{background:#dcfce7;color:#16a34a}',
    '.tag-pending{background:#fef3c7;color:#d97706}',
    // Reference section
    '.ref-section{border:1px solid #e2e5ea;border-radius:6px;padding:12px 16px;box-shadow:none}',
    '.ref-section h4{font-size:.78rem;font-weight:700;margin:10px 0 4px}',
    '.ref-section h4:first-child{margin-top:0}',
    '.ref-list{list-style:none;padding:0;margin:0}',
    '.ref-list li{font-size:.66rem;padding:2px 0;border-bottom:1px solid #f0f1f3}',
    '.ref-list li:last-child{border-bottom:none}',
    '.ref-list a{color:#2563eb;text-decoration:none}',
    // Contact count
    '.contact-count{display:none}',
    // S4 phase grid
    '.scenario-body [style*="grid-template-columns"]{display:grid!important}',
    // Print media
    '@media print{',
    '*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important}',
    'body{font-size:8pt!important;padding:0!important}',
    'header{padding:8px 0!important}',
    'header h1{font-size:12pt!important}',
    '.page-section{padding-top:12px;margin-top:12px}',
    '.section-divider{font-size:10pt!important}',
    '.table-wrap,.scenario-panel,.grant-card,.metric-row,.zone-cards,.amenity-grid{page-break-inside:avoid}',
    '.pro-forma{page-break-inside:avoid}',
    '.roi-grid{page-break-inside:avoid}',
    'table{font-size:6.5pt!important}',
    'th{padding:3px 5px!important;font-size:5.5pt!important}',
    'td{padding:3px 5px!important;font-size:6.5pt!important}',
    '}'
  ].join('\n');

  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>87th &amp; Broadway — Full Report</title>');
  win.document.write('<style>'+css+'</style>');
  win.document.write('</head><body>');
  win.document.write('<header><h1>87th &amp; Broadway — Acquisition Research</h1>');
  win.document.write('<p>Kleinman Trust &middot; 12 Parcels &middot; $4.8M Proposal &middot; ~90,291 sf land &middot; The Neman Group &middot; Full Report</p></header>');

  var loaded=0;
  pages.forEach(function(page,i){
    fetch(page).then(function(r){return r.text()}).then(function(html){
      var doc=new DOMParser().parseFromString(html,'text/html');
      var main=doc.querySelector('main');
      if(main){
        var div=win.document.createElement('div');
        div.className='page-section';
        div.setAttribute('data-idx',i);
        var h=win.document.createElement('div');
        h.className='section-divider';
        h.textContent=titles[i];
        div.appendChild(h);
        div.innerHTML+=main.innerHTML;
        // Remove interactive/empty elements
        var remove=div.querySelectorAll('#map,.calc-panel,.filter-bar,.negotiation,.print-btn,.print-btns,.tag-filters,script');
        remove.forEach(function(el){el.remove()});
        win.document.body.appendChild(div);
      }
      loaded++;
      if(loaded===pages.length){
        var body=win.document.body;
        var sections=[].slice.call(body.querySelectorAll('.page-section'));
        sections.sort(function(a,b){return a.getAttribute('data-idx')-b.getAttribute('data-idx')});
        sections.forEach(function(s){body.appendChild(s)});
        setTimeout(function(){win.print()},700);
      }
    });
  });
}
