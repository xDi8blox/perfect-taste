(function(){
  var d=document.querySelector('.drawer'),b=document.querySelector('.burger');
  function t(o){d.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';}
  if(b){b.addEventListener('click',function(){t(true)});d.addEventListener('click',function(e){if(e.target===d||e.target.closest('.close')||e.target.tagName==='A')t(false)});}
  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
  document.querySelectorAll('.reveal').forEach(function(el){io?io.observe(el):el.classList.add('in')});
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  document.querySelectorAll('form.enq').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
    var fd=new FormData(f),lines=["Hello Perfect Taste, I'd like to enquire."];
    fd.forEach(function(v,k){if(v)lines.push(k+': '+v)});
    window.open('https://wa.me/2349039428049?text='+encodeURIComponent(lines.join('\n')),'_blank');});});
  var figs=[].slice.call(document.querySelectorAll('.gallery figure'));
  var lb=document.querySelector('.lightbox');if(!lb)return;
  var li=lb.querySelector('img'),lp=lb.querySelector('p'),cur=0;
  function vis(){return figs.filter(function(f){return f.style.display!=='none'})}
  function show(i){var v=vis();cur=(i+v.length)%v.length;var f=v[cur];li.src=f.dataset.full;li.alt=f.querySelector('img').alt;lp.textContent=f.querySelector('figcaption').textContent;lb.classList.add('open')}
  figs.forEach(function(f){f.addEventListener('click',function(){show(vis().indexOf(f))})});
  lb.querySelector('.x').onclick=function(){lb.classList.remove('open')};
  lb.querySelector('.prev').onclick=function(e){e.stopPropagation();show(cur-1)};
  lb.querySelector('.next').onclick=function(e){e.stopPropagation();show(cur+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
})();
