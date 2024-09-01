import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(a){return fetch(`https://pixabay.com/api/?key=45706921-daf09135eb1f07c679e77f1a2&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>{iziToast.error({position:"topRight",message:`${e}`})})}const m=new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function d(a){const s=document.querySelector(".gallery");let o=a.hits.map(e=>`<li class="gallery-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-img"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="wrapper">
    <ul class="img-content-wrapper">
      <li class="text-info">
        Likes<span class="number">${e.likes}</span>
      </li>
      <li class="text-info">
        Views<span class="number">${e.views}</span>
      </li>
      <li class="text-info">
        Comments<span class="number">${e.comments}</span>
      </li>
      <li class="text-info">
        Downloads<span class="number">${e.downloads}</span>
      </li>
    </ul>
  </div>
</li>    `).join("");s.innerHTML=o,m.refresh()}function f(){const a=document.querySelector(".gallery");a.innerHTML=""}const p=document.querySelector(".gallery-form"),g=document.querySelector(".input-for-gallery"),i=document.querySelector(".loader");p.addEventListener("submit",y);function y(a){a.preventDefault(),f(),i.classList.remove("hiden");let s=g.value.trim();if(s===""){l.error({position:"topRight",message:"Please fill the input"}),i.classList.add("hiden");return}u(`${s}`).then(o=>{if(o.total===0){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hiden");return}else i.classList.add("hiden"),d(o)}).catch(o=>{console.log(o)})}
//# sourceMappingURL=index.js.map
