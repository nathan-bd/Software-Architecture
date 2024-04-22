(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[i])))?r.splice(i--,1):(n=!1,o<c&&(c=o));if(n){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({24:"12d15646",37:"c02cb361",48:"a94703ab",56:"081160fe",61:"1f391b9e",76:"1784514a",98:"a7bd4aaa",134:"393be207",250:"ba1ec04a",305:"aa4fb9af",386:"cb4a581c",401:"17896441",581:"935f2afb",626:"a96694f6",634:"c4f5d8e4",647:"5e95c892",691:"b051cf6e",704:"9eeaf306",814:"245ccf08",912:"309cc898",954:"555cf117"}[e]||e)+"."+{24:"7d0ce087",37:"db7b2b30",48:"9e5ea28c",56:"033c1014",61:"89b05968",76:"48116821",98:"60b64103",134:"c69c45b3",237:"03b55a75",250:"7101bf8c",305:"ea2afa41",386:"e7c04452",401:"c88ece26",581:"1f30bd9f",626:"7374a40a",634:"1ee51cbd",647:"941f258c",674:"e6821528",691:"2a655d17",704:"3fcf41aa",814:"0181dd37",912:"abe2d40b",954:"1f03648d"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="software-architecture:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var b=d[u];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==o+r){n=b;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),i&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/Software-Architecture/",f.gca=function(e){return e={17896441:"401","12d15646":"24",c02cb361:"37",a94703ab:"48","081160fe":"56","1f391b9e":"61","1784514a":"76",a7bd4aaa:"98","393be207":"134",ba1ec04a:"250",aa4fb9af:"305",cb4a581c:"386","935f2afb":"581",a96694f6:"626",c4f5d8e4:"634","5e95c892":"647",b051cf6e:"691","9eeaf306":"704","245ccf08":"814","309cc898":"912","555cf117":"954"}[e]||e,f.p+f.u(e)},(()=>{var e={354:0,869:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],i=r[2],d=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(i)var u=i(f)}for(t&&t(r);d<c.length;d++)o=c[d],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(u)},r=self.webpackChunksoftware_architecture=self.webpackChunksoftware_architecture||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();