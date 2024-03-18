(()=>{(()=>{"use strict";var a={};a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})();var Y={};const i=(e,t=document)=>{if(!(t instanceof Element||t instanceof Document||t instanceof DocumentFragment))throw new Error("Error: element is not instance of Element or Document");const r=t.querySelector(e);if(!r)throw new Error(`Error: element with selector ${e} was not found`);return r};function p(e){return typeof e=="string"}function f(e){if(!p(e))throw new Error("this value type is not string")}function E(e){if(!(e instanceof Object&&"apiKey"in e&&typeof e.apiKey=="string"))throw new Error("value type is not 'Options'")}const w={OK:200,BadRequest:400,Unauthorized:401,NotFound:404,TooManyRequests:429,ServerError:500};var T=Object.defineProperty,h=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))S.call(t,r)&&l(e,r,t[r]);if(h)for(var r of h(t))O.call(t,r)&&l(e,r,t[r]);return e},_=(e,t,r)=>(l(e,typeof t!="symbol"?t+"":t,r),r);class A{constructor(t,r){_(this,"baseLink"),_(this,"options"),f(t),this.baseLink=t,E(r),this.options=r}getResp({endpoint:t,options:r={}},n=()=>{console.error("No callback for GET response")}){this.load("GET",t,n,r)}errorHandler(t){if(!t.ok)throw(t.status===w.NotFound||t.status===w.Unauthorized)&&console.log(`Sorry, but there is ${t.status} error: ${t.statusText}`),Error(t.statusText);return t}makeUrl(t,r){const n=m(m({},this.options),t);let s=`${this.baseLink}${r}?`;return Object.keys(n).forEach(o=>{const u=n[o];u&&(s+=`${o}=${u}&`)}),s.slice(0,-1)}load(t,r,n,s={}){fetch(this.makeUrl(s,r),{method:t}).then(o=>this.errorHandler(o)).then(o=>o.json()).then(o=>n(o)).catch(o=>console.error(o))}}const P=A;class N extends P{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"24d9ad5e911443b5af5f8177bbd553bd"})}}const v=N;function I(e){return new URLSearchParams(window.location.search).get(e)}function L(e,t){const r=new URL(window.location.href);r.searchParams.delete(e,t),t&&r.searchParams.set(e,t),window.history.pushState("","",r)}class R extends v{getSources(t){super.getResp({endpoint:"sources"},t)}getNews(t,r){if(!(t.target instanceof HTMLElement))throw new Error("target is not htmlElement!");let{target:n}=t;if(!(t.currentTarget instanceof HTMLElement))throw new Error("CurrentTarget is not htmlElement!");const s=t.currentTarget;for(;n!==s;){if(n.classList.contains("source__item")){const o=n.getAttribute("data-source-id");f(o),s.getAttribute("data-source")!==o&&(L("sources",o),s.setAttribute("data-source",o),super.getResp({endpoint:"everything",options:{sources:o}},r));return}if(!(n.parentNode instanceof HTMLElement))throw new Error("No parentNode for target");n=n.parentNode}}}const x=R,C=a.p+"images/7e4d1290de7bf4f538b2.avif";function j(e){return e%2!==0}const d=10;class ${draw(t){const r=t.length>=d?t.filter((o,u)=>u<d):t,n=document.createDocumentFragment(),s=i("#newsItemTemp");if(!(s instanceof HTMLTemplateElement))throw Error("newsItemTemp is not template");r.forEach((o,u)=>{const c=s.content.cloneNode(!0);j(u)&&i(".news__item",c).classList.add("alt"),i(".news__meta-photo",c).style.backgroundImage=`url(${o.urlToImage||C})`,i(".news__meta-author",c).textContent=o.author||o.source.name,i(".news__meta-date",c).textContent=o.publishedAt.slice(0,d).split("-").reverse().join("-"),i(".news__description-title",c).textContent=o.title,i(".news__description-source",c).textContent=o.source.name,i(".news__description-content",c).textContent=o.description,i(".news__read-more a",c).setAttribute("href",o.url),n.append(c)}),i(".news").innerHTML="",i(".news").appendChild(n)}}const F=$;class H{draw(t){const r=document.createDocumentFragment(),n=i("#sourceItemTemp");if(!(n instanceof HTMLTemplateElement))throw Error("sourceItemTemp is not template");t.forEach(s=>{const o=n.content.cloneNode(!0);i(".source__item-name",o).textContent=s.name,i(".source__item",o).setAttribute("data-source-id",s.id),r.append(o)}),i(".sources").append(r)}}const M=H;var U=Object.defineProperty,V=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t,r)=>(V(e,typeof t!="symbol"?t+"":t,r),r);class D{constructor(){g(this,"news"),g(this,"sources"),this.news=new F,this.sources=new M}drawNews(t){var r;const n=(r=t==null?void 0:t.articles)!=null?r:[];this.news.draw(n)}drawSources(t){var r;const n=(r=t==null?void 0:t.sources)!=null?r:[];this.sources.draw(n)}}const J=null;function b(e){const t=["author","title","description","url","urlToImage","publishedAt","content"];return e instanceof Object&&"source"in e&&e.source instanceof Object&&"id"in e.source&&p(e.source.id)&&"name"in e.source&&p(e.source.name)&&t.every(r=>r in e&&p(r))}function Z(e){if(!b(e))throw new Error("Value is not Article")}function q(e){return e instanceof Object&&"status"in e&&e.status==="ok"&&"totalResults"in e&&typeof e.totalResults=="number"&&"articles"in e&&Array.isArray(e.articles)&&e.articles.every(b)}function B(e){if(!q(e))throw new Error("value type is not 'EverythingResponse'")}function K(e){const t=["id","name","description","url","category","language","country"];return e instanceof Object&&t.every(r=>r in e&&p(r))}function z(e){return e instanceof Object&&"status"in e&&e.status==="ok"&&"sources"in e&&Array.isArray(e.sources)&&e.sources.every(K)}function G(e){if(!z(e))throw new Error("value type is not 'SourceResponse'")}var Q=Object.defineProperty,k=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r)=>(k(e,typeof t!="symbol"?t+"":t,r),r);class W{constructor(){y(this,"controller"),y(this,"view"),this.controller=new x,this.view=new D}start(){const t=i(".sources");i(".source-button").addEventListener("click",()=>{t.classList.toggle("open")}),t.addEventListener("click",n=>(t.classList.remove("open"),this.controller.getNews(n,s=>{B(s),this.view.drawNews(s)}))),this.controller.getSources(n=>{G(n),this.view.drawSources(n);const s=I("sources");s&&i(`.source__item[data-source-id=${s}]`).click()})}}const X=W;new X().start()})();})();