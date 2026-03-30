(function(){
  var KEY = 'broadway_auth';
  var HASH = '15a9a52d';
  function simpleHash(s){
    for(var h=0,i=0;i<s.length;i++) h=((h<<5)-h)+s.charCodeAt(i), h|=0;
    return (h>>>0).toString(16).slice(0,8);
  }
  if(sessionStorage.getItem(KEY)===HASH) return;
  document.documentElement.style.display='none';
  var pwd = prompt('Enter access code:');
  if(pwd && simpleHash(pwd.toLowerCase().trim())===HASH){
    sessionStorage.setItem(KEY, HASH);
    document.documentElement.style.display='';
  } else {
    document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Inter,sans-serif;color:#5f6774;font-size:1.1rem">Access denied.</div>';
    document.documentElement.style.display='';
  }
})();
