!function(){"use strict";const e=document.querySelectorAll("form"),t="loading...",c="alles ok!",o="Etwas schief gegangen";e.forEach((e=>{var n;(n=e).addEventListener("submit",(e=>{e.preventDefault();let i=document.createElement("div");i.classList.add("status"),i.textContent=t,n.appendChild(i);const r=new FormData(n),a=JSON.stringify(Object.fromEntries(r.entries()));s("http://localhost:3000/requests",a).then((e=>{console.log(e),i.textContent=c,i.remove()})).catch((()=>{i.textContent=o})).finally((()=>{n.reset()}))}))}));const s=async(e,t)=>{let c=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await c.json()};let n=document.querySelectorAll(".promo__item"),i=document.querySelector(".promo__items");function r(){n.forEach((e=>{e.classList.remove("promo__item_active")}))}function a(e=0){n[e].classList.add("promo__item_active")}const l=document.querySelectorAll("[data-modal]"),_=document.querySelector("[data-close]"),d=document.querySelector(".modal");function u(){d.style.display="none",document.body.style.overflow=""}function m(){d.style.display="block",document.body.style.overflow="hidden"}window.addEventListener("DOMContentLoaded",(function(){(function(){class e{constructor(e,t,c,o,s,n,...i){this.src=e,this.alt=t,this.descr=c,this.name=o,this.stelle=s,this.classes=i,this.parent=document.querySelector(n)}render(){const e=document.createElement("div");e.innerHTML=`\n            <div class="client__box">\n                <img src=${this.src} alt=${this.alt} class="client__img">\n                <div class="client__text">\n                    <div class="client__descr">${this.descr}</div>\n                    <div class="client__name">\n                        <div class="client__name-1">${this.name}</div>\n                        <div class="client__name-2">${this.stelle}</div>\n                    </div>\n                </div>\n            </div>\n            `,this.parent.append(e)}}(async function(e){let t=await fetch("http://localhost:3000/clients");return await t.json()})().then((t=>{t.forEach((({src:t,alt:c,descr:o,name:s,stelle:n})=>{new e(t,c,o,s,n,".client__wrapper").render()}))}))})(),function(e){const t=document.querySelectorAll(e),c="loading...",o="alles ok!",s="Etwas schief gegangen";t.forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();let i=document.createElement("div");i.classList.add("status"),i.textContent=c,t.appendChild(i);const r=new FormData(t),a=JSON.stringify(Object.fromEntries(r.entries()));n("http://localhost:3000/requests",a).then((e=>{console.log(e),i.textContent=o,i.remove()})).catch((()=>{i.textContent=s})).finally((()=>{t.reset()}))}))}));const n=async(e,t)=>{let c=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await c.json()}}("#firstform"),function(e,t,c,o,s,n){const i=document.querySelector(e),r=document.querySelectorAll(t),a=document.querySelector(c),l=document.querySelector(o),_=document.querySelector(s),d=document.getElementById(n);function u(){a.style.display="none",_.style.display="none",d.style.zIndex="50",mobileMenuOpen=!1}i.addEventListener("click",(function(){a.style.display="block",_.style.display="block",d.style.zIndex="0",mobileMenuOpen=!0})),l.addEventListener("click",u),a.addEventListener("click",(e=>{const c=e.target;c&&c.classList.contains(t)&&r.forEach((e=>{c===e&&u()}))}))}(".promo__hambuger",".promo__hamItem",".promo__hamMenu",".promo__close",".promo__overlay","promo"),a(),r(),i.addEventListener("click",(function(e){const t=e.target;t&&t.classList.contains("promo__item")&&n.forEach(((e,c)=>{t===e&&(r(),a(c))}))})),l.forEach((e=>{e.addEventListener("click",m)})),_.addEventListener("click",u),d.addEventListener("click",(e=>{e.target===d&&u()})),function(){let e=document.querySelector(".price__wrapper"),t=document.querySelectorAll(".price__box"),c=document.querySelectorAll(".price__box__title"),o=document.querySelectorAll(".price__box__sum"),s=document.querySelectorAll(".price__box__per_month"),n=document.querySelectorAll(".price__box__line-1"),i=document.querySelectorAll(".price__box__line-2"),r=document.querySelectorAll(".price__box__line-3"),a=document.querySelectorAll(".price__box__text-1"),l=document.querySelectorAll(".price__box__text-2"),_=document.querySelectorAll(".price__box__text-3");function d(){t.forEach((e=>{e.classList.remove("price__box_active")})),c.forEach((e=>{e.classList.remove("price__box__title_active")})),o.forEach((e=>{e.classList.remove("price__box__sum_active")})),s.forEach((e=>{e.classList.remove("price__box__per_month_active")})),n.forEach((e=>{e.classList.remove("price__box__line-1_active")})),i.forEach((e=>{e.classList.remove("price__box__line-2_active")})),r.forEach((e=>{e.classList.remove("price__box__line-3_active")})),a.forEach((e=>{e.classList.remove("price__box__text-1_active")})),l.forEach((e=>{e.classList.remove("price__box__text-2_active")})),_.forEach((e=>{e.classList.remove("price__box__text-3_active")}))}function u(e=1){t[e].classList.add("price__box_active"),c[e].classList.add("price__box__title_active"),o[e].classList.add("price__box__sum_active"),s[e].classList.add("price__box__per_month_active"),n[e].classList.add("price__box__line-1_active"),i[e].classList.add("price__box__line-2_active"),r[e].classList.add("price__box__line-3_active"),a[e].classList.add("price__box__text-1_active"),l[e].classList.add("price__box__text-2_active"),_[e].classList.add("price__box__text-3_active")}d(),u(),e.addEventListener("click",(function(e){const c=e.target;c&&c.classList.contains("price__box")&&t.forEach(((e,t)=>{c===e&&(d(),u(t))}))}))}(),function(){const e=document.querySelectorAll(".request__photo"),t=document.querySelectorAll(".request__pointe"),c=document.querySelector(".request__pointBox");function o(){e.forEach((e=>{e.classList.remove("request__photo_active"),e.classList.add("request__photo")})),t.forEach((e=>{e.classList.remove("request__pointe_active"),e.classList.add("request__pointe")}))}function s(c=0){e[c].classList.remove("request__photo"),e[c].classList.add("request__photo_active"),t[c].classList.remove("request__pointe"),t[c].classList.add("request__pointe_active")}o(),s(),c.addEventListener("click",(function(e){const c=e.target;c&&c.classList.contains("request__pointe")&&t.forEach(((e,t)=>{c===e&&(o(),s(t))}))}))}()}))}();
//# sourceMappingURL=bundle.js.map