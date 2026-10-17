// 모바일 메뉴 토글, 자리표시 링크는 이동하지 않음
const t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false)}});
document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
