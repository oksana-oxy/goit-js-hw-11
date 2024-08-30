import{S as c,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(o){return fetch(`https://pixabay.com/api/?key=45706921-daf09135eb1f07c679e77f1a2&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{iziToast.error({position:"topRight",message:`${r}`})})}function m(o){const s=new c(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),a=document.querySelector(".gallery");let r=o.hits.map(e=>`<li class="gallery-card">
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
</li>    `).join("");a.innerHTML=r,s.refresh()}function d(){const o=document.querySelector(".gallery");o.innerHTML=""}const f=document.querySelector(".gallery-form"),p=document.querySelector(".input-for-gallery"),i=document.querySelector(".loader");f.addEventListener("submit",g);function g(o){o.preventDefault(),d(),i.classList.remove("hiden");let s=p.value.trim();if(s===""){l.error({position:"topRight",message:"Please fill the input"}),i.classList.add("hiden");return}u(`${s}`).then(async a=>{if(a.total===0){l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hiden");return}else i.classList.add("hiden"),m(a)})}
//# sourceMappingURL=index.js.map
