(function(t){function e(e){for(var a,r,s=e[0],l=e[1],u=e[2],c=0,f=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-4671f6ee":"dbfef2b5","chunk-178faf56":"d7692bba","chunk-564aad30":"43dcd5b6","chunk-d15a9970":"aaf1b64b","chunk-ff3b9466":"9ce64338"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-4671f6ee":1,"chunk-178faf56":1,"chunk-564aad30":1,"chunk-d15a9970":1,"chunk-ff3b9466":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-4671f6ee":"102a6a5e","chunk-178faf56":"ff75c75b","chunk-564aad30":"bef08415","chunk-d15a9970":"b26c4a65","chunk-ff3b9466":"4ba14ed7"}[t]+".css",o=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===a||c===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],c=u.getAttribute("data-href");if(c===a||c===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(t);var f=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1e7a":function(t,e,n){},2894:function(t,e,n){"use strict";n("be9a")},4789:function(t,e,n){"use strict";n("a977")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("header",[n("Nav")],1),n("v-main",[n("router-view")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("v-app-bar",{staticClass:"nav",attrs:{app:""}},[n("v-app-bar-nav-icon",{staticClass:"is-sp",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("div",{staticClass:"is-pc pc-nav"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/skill"}},[t._v("Skill")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/works"}},[t._v("Works")]),n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)],1),n("v-navigation-drawer",{staticClass:"sp-nav",attrs:{absolute:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",[n("v-list-item-title",[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1)],1),n("v-list-item",[n("v-list-item-title",[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)],1),n("v-list-item",[n("v-list-item-title",[n("router-link",{staticClass:"nav-link",attrs:{to:"/skill"}},[t._v("Skill")])],1)],1),n("v-list-item",[n("v-list-item-title",[n("router-link",{staticClass:"nav-link",attrs:{to:"/works"}},[t._v("Works")])],1)],1),n("v-list-item",[n("v-list-item-title",[n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)],1)],1)],1)],1)],1)},s=[],l={name:"Nav",data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},u=l,c=(n("d79f"),n("2877")),f=n("6544"),p=n.n(f),d=n("40dc"),v=n("5bc1"),m=n("8860"),h=n("da13"),b=n("1baa"),k=n("5d23"),g=n("f774"),y=Object(c["a"])(u,i,s,!1,null,null,null),w=y.exports;p()(y,{VAppBar:d["a"],VAppBarNavIcon:v["a"],VList:m["a"],VListItem:h["a"],VListItemGroup:b["a"],VListItemTitle:k["a"],VNavigationDrawer:g["a"]});var C={name:"App",components:{Nav:w},data:function(){return{}}},_=C,x=(n("bb46"),n("7496")),A=n("f6c4"),P=Object(c["a"])(_,r,o,!1,null,"4788fea3",null),O=P.exports;p()(P,{VApp:x["a"],VMain:A["a"]});n("d3b7");var j=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{id:"home"}},[n("div",{staticClass:"home-box"},[n("h1",{staticClass:"home-title"},[n("HomeAnime")],1)])])},S=[],N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"TextAnime1"},[t._l(t.text,(function(e,a){return n("p",{key:"first-"+a,staticClass:"item",style:{animationDelay:100*a+"ms"},domProps:{textContent:t._s(e)}})})),n("br",{staticClass:"is-sp"}),t._l(t.text2,(function(e,a){return n("p",{key:"second-"+a,staticClass:"item",style:{animationDelay:100*a+"ms"},domProps:{textContent:t._s(e)}})}))],2)},T=[],L={name:"HelloAnime",data:function(){return{text:"Kana's ",text2:"Portfolio"}}},V=L,H=(n("4789"),Object(c["a"])(V,N,T,!1,null,"4b187f1c",null)),B=H.exports,D={name:"Home",components:{HomeAnime:B}},I=D,M=(n("2894"),Object(c["a"])(I,E,S,!1,null,"665f5ae4",null)),$=M.exports;a["a"].use(j["a"]);var F=[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:function(){return Promise.all([n.e("chunk-4671f6ee"),n.e("chunk-178faf56")]).then(n.bind(null,"f820"))}},{path:"/skill",name:"Skill",component:function(){return Promise.all([n.e("chunk-4671f6ee"),n.e("chunk-d15a9970")]).then(n.bind(null,"3c2d"))}},{path:"/works",name:"Works",component:function(){return Promise.all([n.e("chunk-4671f6ee"),n.e("chunk-ff3b9466")]).then(n.bind(null,"1822"))}},{path:"/contact",name:"Contact",component:function(){return Promise.all([n.e("chunk-4671f6ee"),n.e("chunk-564aad30")]).then(n.bind(null,"b8fa"))}}],W=new j["a"]({mode:"history",base:"",routes:F,scrollBehavior:function(){return{x:0,y:0}}}),q=W,J=n("2f62");a["a"].use(J["a"]);var K=new J["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=(n("15f5"),n("f309"));a["a"].use(G["a"]);var U=new G["a"]({theme:{themes:{light:{github:"#211F1F",twitter:"#1DA1F2"}}}});n("6418"),a["a"].config.productionTip=!1,new a["a"]({router:q,store:K,vuetify:U,render:function(t){return t(O)}}).$mount("#app")},6418:function(t,e,n){},a3ee:function(t,e,n){},a977:function(t,e,n){},bb46:function(t,e,n){"use strict";n("1e7a")},be9a:function(t,e,n){},d79f:function(t,e,n){"use strict";n("a3ee")}});
//# sourceMappingURL=app.88f44668.js.map