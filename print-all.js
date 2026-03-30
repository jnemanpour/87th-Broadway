function printAll(){
  var pages=['index.html','comps.html','grants.html','contacts.html','scenarios.html'];
  var titles=['Parcel Map','Commercial Comps','Grants & Incentives','Contacts & Outreach','Development Scenarios'];
  var win=window.open('','_blank');
  win.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>87th &amp; Broadway — Full Report</title>');
  win.document.write('<link rel="stylesheet" href="style.css"/>');
  win.document.write('<style>');
  win.document.write('body{background:#fff!important}');
  win.document.write('.page-section{page-break-before:always;padding-top:20px}');
  win.document.write('.page-section:first-child{page-break-before:avoid}');
  win.document.write('.section-divider{font-size:1.1rem;font-weight:800;color:#1a1d23;border-bottom:3px solid #1a1d23;padding-bottom:8px;margin-bottom:16px}');
  win.document.write('.print-btn,.print-btns,nav.tabs,.calc-panel,#map,.filter-bar{display:none!important}');
  win.document.write('@media print{*{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}');
  win.document.write('.page-section{page-break-before:always}.page-section:first-child{page-break-before:avoid}}');
  win.document.write('</style></head><body>');
  win.document.write('<header><h1>87th &amp; Broadway — Acquisition Research</h1>');
  win.document.write('<p>Kleinman Trust &middot; 12 Parcels &middot; $4.8M Proposal &middot; ~90,291 sf land &middot; The Neman Group</p></header>');

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
        // Remove map div and interactive elements
        var mapEl=div.querySelector('#map');if(mapEl)mapEl.remove();
        var calcs=div.querySelectorAll('.calc-panel,.filter-bar');
        calcs.forEach(function(c){c.remove()});
        win.document.body.appendChild(div);
      }
      loaded++;
      if(loaded===pages.length){
        // Sort sections by data-idx
        var body=win.document.body;
        var sections=[].slice.call(body.querySelectorAll('.page-section'));
        sections.sort(function(a,b){return a.getAttribute('data-idx')-b.getAttribute('data-idx')});
        sections.forEach(function(s){body.appendChild(s)});
        setTimeout(function(){win.print()},500);
      }
    });
  });
}
