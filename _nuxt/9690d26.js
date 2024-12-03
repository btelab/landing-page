(window.webpackJsonp=window.webpackJsonp||[]).push([[23,6,8,14,21],{305:function(t,e,o){var content=o(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(75).default)("6942e492",content,!0,{sourceMap:!1})},306:function(t,e,o){"use strict";o.r(e);var r={name:"Nav",data:function(){return{showMenu:!1,showNavbar:!0,lastScrollPosition:0}},mounted:function(){document.addEventListener("click",this.handleDocumentClick)},beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentClick)},methods:{handleDocumentClick:function(t){this.$refs.menu.contains(event.target)||(this.showMenu=!1)},onScroll:function(){var t=window.scrollY||document.documentElement.scrollTop;t<0||Math.abs(t-this.lastScrollPosition)<60||(this.showNavbar=t<this.lastScrollPosition,this.lastScrollPosition=t)}}},n=(o(310),o(33)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"flex flex-1 flex-col sticky top-0 z-50 bg-black p-5 items-center md:items-start min-h-[8rem] navbar",class:{"navbar--hidden":!t.showNavbar}},[e("div",{staticClass:"flex w-full h-2 border-b border-white border-solid mb-4"}),t._v(" "),e("div",{staticClass:"flex container mx-auto justify-between pb-10 md:pb-14 pl-3"},[e("div",{staticClass:"flex-1 grid grid-cols-3 h-6 text-white"},[e("div",{staticClass:"pt-4"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"invisible xl:visible w-48 h-auto ml-8",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo 2"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-center pt-2"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"visible xl:invisible w-48 h-auto",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-end"},[e("div",{ref:"menu",staticClass:"flex flex-col visible xl:hidden w-34"},[e("div",{staticClass:"flex justify-end w-30"},[e("button",{staticClass:"border border-solid rounded-none border-white border-opacity-75 bg-black text-white hover:bg-gray-200 hover:border-gray-400 hover:text-black py-3 md:p-4 ml-4 h-12 md:h-16",on:{click:function(e){t.showMenu=!t.showMenu}}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("title",[t._v("Menu")]),t._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}})])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"xl:hidden w-30 ml-4 text-sm tracking-bit"},[e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")]),t._v(" "),e("a",{staticClass:"flex justify-center px-2 py-2 bg-black text-black border-b-2 border-black text-center align-middle",attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-black",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"hidden xl:flex text-sm tracking-bit pt-7"},[e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")])],1),t._v(" "),e("div",{staticClass:"w-10 ml-2 font-avenir color-corvid"},[e("a",{attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-cover",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1)]),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(309).default,Nav:o(306).default})},307:function(t,e,o){t.exports=o.p+"img/logo-plan-de-recuperacion.6bd5608.png"},308:function(t,e,o){t.exports=o.p+"img/logo_conselleria-sanidad_whitebackround.63cd238.png"},309:function(t,e,o){"use strict";o.r(e);var r=o(33),component=Object(r.a)({},undefined,undefined,!1,null,null,null);e.default=component.exports},310:function(t,e,o){"use strict";o(305)},311:function(t,e,o){var r=o(74)((function(i){return i[1]}));r.push([t.i,".navbar{transform:translateZ(0);transition:all .3s ease-out}.navbar.navbar--hidden{transform:translate3d(0,-100%,0)}",""]),r.locals={},t.exports=r},312:function(t,e,o){t.exports=o.p+"img/logo-EU.07db362.png"},313:function(t,e,o){t.exports=o.p+"img/Logo-Conselleria-innovacion.712cd08.png"},314:function(t,e,o){t.exports=o.p+"img/logo-garantia-juvenil.b0a2ce6.png"},315:function(t,e,o){t.exports=o.p+"img/logo-avi.f319ac1.png"},316:function(t,e,o){"use strict";o.r(e);var r={name:"Footer",data:function(){return{images:[{src:o(308),alt:"Generalitat Valenciana. Conselleria de Sanitat. Universal i Salut Pública",width:"100%",height:"auto"},{src:o(312),alt:"Unión Europea. Fondo Europeo de Desarrollo Regional. Una manera de hacer Europa",width:"50%",height:"auto"},{src:o(313),alt:"Generalitat Valenciana. Conselleria de Innovación, Universidades, Ciencia y Sociedad Digital",width:"100%",height:"auto"},{src:o(307),alt:"Plan de Recuperación, Transformación y Resilencia",width:"100%",height:"auto"},{src:o(314),alt:"Estrategia de emprendimento y empleo joven",width:"80%",height:"auto"},{src:o(315),alt:"AVI. Agència Valenciana de la Innovació",width:"80%",height:"auto"}]}}},n=o(33),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-col bg-white pt-20"},[e("div",{staticClass:"md:mx-auto md:w-3/4 xl:mx-auto bg-white pl-4 pr-4 sm:pl-0 sm:pr-0"},[e("div",{staticClass:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 pb-10 justify-items-center"},t._l(t.images,(function(image,t){return e("div",{key:t,staticClass:"h-4/5 mx-auto"},[e("img",{staticClass:"w-full h-full object-scale-down",attrs:{src:image.src,alt:image.alt,width:image.width,height:image.height}})])})),0)]),t._v(" "),e("div",{staticClass:"w-full bg-black h-20"})])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,o){"use strict";o.r(e);var r=o(318),n=o.n(r);for(var l in r)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},318:function(t,e){},332:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));var r=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col bg-white"},[e("div",{staticClass:"flex flex-col container mx-auto pt-8 pb-8"},[e("h1",{staticClass:"w-full flex justify-center text-6xl pb-4 font-raleway"},[t._v("Blog")])]),t._v(" "),e("iframe",{attrs:{src:"https://widgets.sociablekit.com/linkedin-page-posts/iframe/25351207",width:"100%",height:"1000"}})])}]},333:function(t,e,o){"use strict";o.r(e);var r=o(332),n=o(317);for(var l in n)["default"].indexOf(l)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(l);var c=o(33),component=Object(c.a)(n.default,r.a,r.b,!1,null,null,null);e.default=component.exports},384:function(t,e,o){"use strict";o.r(e);var r=o(1).a.extend({}),n=o(33),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col w-full bg-back"},[e("Nav"),t._v(" "),e("Blog"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(306).default,Blog:o(333).default,Footer:o(316).default})}}]);