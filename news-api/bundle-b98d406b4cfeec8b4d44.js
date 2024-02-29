(()=>{(()=>{"use strict";var a={};a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(e){if(typeof window=="object")return window}}(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})();var W={};const s=(e,t=document)=>{if(!(t instanceof Element||t instanceof Document||t instanceof DocumentFragment))throw new Error("Error: element is not instance of Element or Document");const r=t.querySelector(e);if(!r)throw new Error(`Error: element with selector ${e} was not found`);return r};function p(e){return typeof e=="string"}function d(e){if(!p(e))throw new Error("this value type is not string")}function E(e){if(!(e instanceof Object&&"apiKey"in e&&typeof e.apiKey=="string"))throw new Error("value type is not 'Options'")}const w={OK:200,BadRequest:400,Unauthorized:401,NotFound:404,TooManyRequests:429,ServerError:500};var T=Object.defineProperty,h=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&l(e,r,t[r]);if(h)for(var r of h(t))A.call(t,r)&&l(e,r,t[r]);return e},_=(e,t,r)=>(l(e,typeof t!="symbol"?t+"":t,r),r);class S{constructor(t,r){_(this,"baseLink"),_(this,"options"),d(t),this.baseLink=t,E(r),this.options=r}getResp({endpoint:t,options:r={}},n=()=>{console.error("No callback for GET response")}){this.load("GET",t,n,r)}errorHandler(t){if(!t.ok)throw(t.status===w.NotFound||t.status===w.Unauthorized)&&console.log(`Sorry, but there is ${t.status} error: ${t.statusText}`),Error(t.statusText);return t}makeUrl(t,r){const n=m(m({},this.options),t);let i=`${this.baseLink}${r}?`;return Object.keys(n).forEach(o=>{const u=n[o];u&&(i+=`${o}=${u}&`)}),i.slice(0,-1)}load(t,r,n,i={}){fetch(this.makeUrl(i,r),{method:t}).then(o=>this.errorHandler(o)).then(o=>o.json()).then(o=>n(o)).catch(o=>console.error(o))}}const v=S;class N extends v{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"24d9ad5e911443b5af5f8177bbd553bd"})}}const I=N;class L extends I{getSources(t){super.getResp({endpoint:"sources"},t)}getNews(t,r){if(!(t.target instanceof HTMLElement))throw new Error("target is not htmlElement!");let{target:n}=t;if(!(t.currentTarget instanceof HTMLElement))throw new Error("CurrentTarget is not htmlElement!");const i=t.currentTarget;for(;n!==i;){if(n.classList.contains("source__item")){const o=n.getAttribute("data-source-id");d(o),i.getAttribute("data-source")!==o&&(i.setAttribute("data-source",o),super.getResp({endpoint:"everything",options:{sources:o}},r));return}if(!(n.parentNode instanceof HTMLElement))throw new Error("No parentNode for target");n=n.parentNode}}}const P=L,x=a.p+"images/7e4d1290de7bf4f538b2.avif";function C(e){return e%2!==0}const f=10;class R{draw(t){const r=t.length>=f?t.filter((o,u)=>u<f):t,n=document.createDocumentFragment(),i=s("#newsItemTemp");if(!(i instanceof HTMLTemplateElement))throw Error("newsItemTemp is not template");r.forEach((o,u)=>{const c=i.content.cloneNode(!0);C(u)&&s(".news__item",c).classList.add("alt"),s(".news__meta-photo",c).style.backgroundImage=`url(${o.urlToImage||x})`,s(".news__meta-author",c).textContent=o.author||o.source.name,s(".news__meta-date",c).textContent=o.publishedAt.slice(0,f).split("-").reverse().join("-"),s(".news__description-title",c).textContent=o.title,s(".news__description-source",c).textContent=o.source.name,s(".news__description-content",c).textContent=o.description,s(".news__read-more a",c).setAttribute("href",o.url),n.append(c)}),s(".news").innerHTML="",s(".news").appendChild(n)}}const j=R;class ${draw(t){const r=document.createDocumentFragment(),n=s("#sourceItemTemp");if(!(n instanceof HTMLTemplateElement))throw Error("sourceItemTemp is not template");t.forEach(i=>{const o=n.content.cloneNode(!0);s(".source__item-name",o).textContent=i.name,s(".source__item",o).setAttribute("data-source-id",i.id),r.append(o)}),s(".sources").append(r)}}const F=$;var H=Object.defineProperty,M=(e,t,r)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t,r)=>(M(e,typeof t!="symbol"?t+"":t,r),r);class V{constructor(){g(this,"news"),g(this,"sources"),this.news=new j,this.sources=new F}drawNews(t){var r;const n=(r=t==null?void 0:t.articles)!=null?r:[];this.news.draw(n)}drawSources(t){var r;const n=(r=t==null?void 0:t.sources)!=null?r:[];this.sources.draw(n)}}const X=null;function b(e){const t=["author","title","description","url","urlToImage","publishedAt","content"];return e instanceof Object&&"source"in e&&e.source instanceof Object&&"id"in e.source&&p(e.source.id)&&"name"in e.source&&p(e.source.name)&&t.every(r=>r in e&&p(r))}function Y(e){if(!b(e))throw new Error("Value is not Article")}function U(e){return e instanceof Object&&"status"in e&&e.status==="ok"&&"totalResults"in e&&typeof e.totalResults=="number"&&"articles"in e&&Array.isArray(e.articles)&&e.articles.every(b)}function D(e){if(!U(e))throw new Error("value type is not 'EverythingResponse'")}function q(e){const t=["id","name","description","url","category","language","country"];return e instanceof Object&&t.every(r=>r in e&&p(r))}function K(e){return e instanceof Object&&"status"in e&&e.status==="ok"&&"sources"in e&&Array.isArray(e.sources)&&e.sources.every(q)}function z(e){if(!K(e))throw new Error("value type is not 'SourceResponse'")}var B=Object.defineProperty,G=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r)=>(G(e,typeof t!="symbol"?t+"":t,r),r);class Q{constructor(){y(this,"controller"),y(this,"view"),this.controller=new P,this.view=new V}start(){const t=s(".sources");s(".source-button").addEventListener("click",()=>{t.classList.toggle("open")}),t.addEventListener("click",n=>(t.classList.remove("open"),this.controller.getNews(n,i=>{D(i),this.view.drawNews(i)}))),this.controller.getSources(n=>{z(n),this.view.drawSources(n)})}}const k=Q;new k().start()})();})();
