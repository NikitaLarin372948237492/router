(function(){"use strict";var e={1555:function(e,n,t){var r=t(9242),i=t(3396);const o=(0,i.Uk)("Home"),a=(0,i.Uk)(" | "),s=(0,i.Uk)("Man"),c=(0,i.Uk)(" | "),u=(0,i.Uk)("Woman"),l=(0,i.Uk)("| "),d=(0,i.Uk)("Kids"),m=(0,i.Uk)("| "),p=(0,i.Uk)("About");function f(e,n){const t=(0,i.up)("router-link"),r=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(t,{to:"/",class:"firstLink"},{default:(0,i.w5)((()=>[o])),_:1}),a,(0,i.Wm)(t,{to:"/man",class:"secondLink"},{default:(0,i.w5)((()=>[s])),_:1}),c,(0,i.Wm)(t,{to:"/woman",class:"secondLink"},{default:(0,i.w5)((()=>[u])),_:1}),l,(0,i.Wm)(t,{to:"/kids",class:"secondLink"},{default:(0,i.w5)((()=>[d])),_:1}),m,(0,i.Wm)(t,{to:"/about",class:"secondLink"},{default:(0,i.w5)((()=>[p])),_:1})]),(0,i.Wm)(r)],64)}var g=t(89);const h={},v=(0,g.Z)(h,[["render",f]]);var _=v,b=t(2483),k=t(7139);const w=(0,i._)("head",null,[(0,i._)("title",null,"shop")],-1),y={class:"home"},C={class:"header"},j=(0,i._)("div",{class:"wrap"},[(0,i._)("h1",{class:"site-title"},"SHOP")],-1),D={class:"cart-value-style"},A={key:0,class:"cart"},O={key:0},S=["onClick"],W={class:"grid-container"},L=["src"],T=["onClick"],E=["src"],F=["onClick"],U=["src"],I=["onClick"],K=(0,i._)("div",{class:"footer"},[(0,i._)("div",{class:"wrap"},"shop 2021")],-1);function B(e,n,t,r,o,a){return(0,i.wg)(),(0,i.iD)(i.HY,null,[w,(0,i._)("body",null,[(0,i._)("div",y,[(0,i._)("div",C,[j,(0,i._)("p",D,(0,k.zw)(o.store.cartValue),1),(0,i._)("img",{class:"cart-style",src:"/img/shoppingCart.png",onClick:n[0]||(n[0]=e=>o.funcs.openCloseCart())}),o.store.isCartOpen?((0,i.wg)(),(0,i.iD)("div",A,[o.store.isCartEmpty?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("ul",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.store.cartItems,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},[(0,i.Uk)((0,k.zw)(e.name)+" "+(0,k.zw)(e.price)+"$ ",1),(0,i._)("a",{onClick:e=>o.funcs.deleteCartItem(n)},"delete",8,S)])))),128))])),(0,i._)("p",null,"Total: "+(0,k.zw)(o.store.cartSum)+"$",1)])):(0,i.kq)("",!0)]),(0,i._)("div",W,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.clothes.man,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"grid-item",key:n},[(0,i._)("img",{class:"image",src:e.src},null,8,L),(0,i._)("p",null,(0,k.zw)(e.name),1),(0,i._)("p",null,(0,k.zw)(e.price),1),(0,i._)("button",{class:"add-to-card",onClick:e=>o.funcs.addCartItem(n,"man")},"Buy",8,T)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.clothes.woman,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"grid-item",key:n},[(0,i._)("img",{class:"image",src:e.src},null,8,E),(0,i._)("p",null,(0,k.zw)(e.name),1),(0,i._)("p",null,(0,k.zw)(e.price),1),(0,i._)("button",{class:"add-to-card",onClick:e=>o.funcs.addCartItem(n,"woman")},"Buy",8,F)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.clothes.kids,((e,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"grid-item",key:n},[(0,i._)("img",{class:"image",src:e.src},null,8,U),(0,i._)("p",null,(0,k.zw)(e.name),1),(0,i._)("p",null,(0,k.zw)(e.price),1),(0,i._)("button",{class:"add-to-card",onClick:e=>o.funcs.addCartItem(n,"kids")},"Buy",8,I)])))),128))]),K])])],64)}var H=t(7625),q=t(3751),z=t(1618),M={name:"HomeView",components:{},data(){return{store:H.h,funcs:q,clothes:z}},watch:{},methods:{}};const N=(0,g.Z)(M,[["render",B]]);var P=N;const X=[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,9441))},{path:"/man",name:"man",component:()=>t.e(443).then(t.bind(t,4177))},{path:"/woman",name:"woman",component:()=>t.e(443).then(t.bind(t,2081))},{path:"/kids",name:"kids",component:()=>t.e(443).then(t.bind(t,3494))}],x=(0,b.p7)({history:(0,b.r5)(),routes:X});var Y=x;(0,r.ri)(_).use(Y).mount("#app")},3751:function(e,n,t){t.r(n),t.d(n,{addCartItem:function(){return o},deleteCartItem:function(){return a},openCloseCart:function(){return s}});var r=t(7625),i=t(1618);function o(e,n){let t;t={name:i[n][e].name,price:i[n][e].price},r.h.cartItems.push(t),r.h.cartSum+=t.price,r.h.isCartEmpty=!1,r.h.cartValue++}function a(e){r.h.cartSum-=r.h.cartItems[e].price,r.h.cartItems.splice(e,1),r.h.cartValue--}function s(){r.h.isCartOpen=!r.h.isCartOpen}},7625:function(e,n,t){t.d(n,{h:function(){return i}});var r=t(4870);const i=(0,r.qj)({cartItems:[],isCartEmpty:!0,cartSum:0,isCartOpen:!1,cartValue:0})},1618:function(e){e.exports=JSON.parse('{"man":[{"prodid":"1","name":"T-shirt Tommy Man","price":179,"src":"/img/AW22-BLM04R_55X_F1.jpg"},{"prodid":"2","name":"jeans Levi\'s Man","price":169,"src":"/img/07d0c5147b4f46c9bb5268ea06cf.jpg"},{"prodid":"3","name":"jeans Levi\'s Man","price":159,"src":"/img/2eb8a93fb75b5207b141e711647c.jpg"},{"prodid":"4","name":"jeans Levi\'s Man","price":149,"src":"/img/AW22-SJM02L_55J_F1.jpg"}],"woman":[{"prodid":"1","name":"Shirt quess Woman","price":139,"src":"/img/AW22-KDD04H_65A_F1.jpg"},{"prodid":"2","name":"Blouse Tommy Woman","price":129,"src":"/img/AW22-BLD02H_01X_F1.jpg"},{"prodid":"3","name":"Dress quess Woman","price":119,"src":"/img/AW22-SUD0I3_80X_F1.jpg"},{"prodid":"4","name":"T-shirt Calvin Klein Jeans Woman","price":109,"src":"/img/AW22-TSD14C_88X_F1.jpg"}],"kids":[{"prodid":"1","name":"Dress quess Kids","price":99,"src":"/img/AW22-KDB004_50X_F1.jpg"},{"prodid":"2","name":"Dress quess Kids","price":89,"src":"/img/AW22-SUG02R_03X_F1.jpg"},{"prodid":"3","name":"Dress quess Kids","price":79,"src":"/img/AW22-SUG01A_55X_F1.jpg"},{"prodid":"4","name":"Sweater Benetton Kids","price":69,"src":"/img/AW22-BLG03O_48X_F1.jpg"}]}')}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,r,i,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.af3f05bb.js"}}(),function(){t.miniCssF=function(e){return"css/about.9fbfd745.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="router:";t.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+o),s.src=r),e[r]=[i];var m=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)t();else{var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=o,i.href=n,document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var i=t[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===n))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===n)return i}},r=function(r){return new Promise((function(i,o){var a=t.miniCssF(r),s=t.p+a;if(n(a,s))return i();e(r,s,i,o)}))},i={143:0};t.f.miniCss=function(e,n){var t={443:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=r(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(t,r){i=e[n]=[t,r]}));r.push(i[2]=o);var a=t.p+t.u(n),s=new Error,c=function(r){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var i,o,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var l=c(t)}for(n&&n(r);u<a.length;u++)o=a[u],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},r=self["webpackChunkrouter"]=self["webpackChunkrouter"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(1555)}));r=t.O(r)})();
//# sourceMappingURL=app.1bbf19d5.js.map