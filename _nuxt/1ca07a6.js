(window.webpackJsonp=window.webpackJsonp||[]).push([[24,4,7,8,10,12,13,14,18,21],{306:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("6942e492",content,!0,{sourceMap:!1})},307:function(t,e,o){"use strict";o.r(e);var r={name:"Nav",data:function(){return{showMenu:!1,showNavbar:!0,lastScrollPosition:0}},mounted:function(){document.addEventListener("click",this.handleDocumentClick)},beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentClick)},methods:{handleDocumentClick:function(t){this.$refs.menu.contains(event.target)||(this.showMenu=!1)},onScroll:function(){var t=window.scrollY||document.documentElement.scrollTop;t<0||Math.abs(t-this.lastScrollPosition)<60||(this.showNavbar=t<this.lastScrollPosition,this.lastScrollPosition=t)}}},n=(o(311),o(39)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"flex flex-1 flex-col sticky top-0 z-50 bg-black p-5 items-center md:items-start min-h-[8rem] navbar",class:{"navbar--hidden":!t.showNavbar}},[e("div",{staticClass:"flex w-full h-2 border-b border-white border-solid mb-4"}),t._v(" "),e("div",{staticClass:"flex container mx-auto justify-between pb-10 md:pb-14 pl-3"},[e("div",{staticClass:"flex-1 grid grid-cols-3 h-6 text-white"},[e("div",{staticClass:"pt-4"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"invisible xl:visible w-48 h-auto ml-8",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo 2"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-center pt-2"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"visible xl:invisible w-48 h-auto",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-end"},[e("div",{ref:"menu",staticClass:"flex flex-col visible xl:hidden w-34"},[e("div",{staticClass:"flex justify-end w-30"},[e("button",{staticClass:"border border-solid rounded-none border-white border-opacity-75 bg-black text-white hover:bg-gray-200 hover:border-gray-400 hover:text-black py-3 md:p-4 ml-4 h-12 md:h-16",on:{click:function(e){t.showMenu=!t.showMenu}}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("title",[t._v("Menu")]),t._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}})])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"xl:hidden w-30 ml-4 text-sm tracking-bit"},[e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")]),t._v(" "),e("a",{staticClass:"flex justify-center px-2 py-2 bg-black text-black border-b-2 border-black text-center align-middle",attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-black",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"hidden xl:flex text-sm tracking-bit pt-7"},[e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")])],1),t._v(" "),e("div",{staticClass:"w-10 ml-2 font-avenir color-corvid"},[e("a",{attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-cover",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1)]),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(310).default,Nav:o(307).default})},308:function(t,e,o){t.exports=o.p+"img/logo-plan-de-recuperacion.6bd5608.png"},309:function(t,e,o){t.exports=o.p+"img/logo_conselleria-sanidad_whitebackround.63cd238.png"},310:function(t,e,o){"use strict";o.r(e);var r=o(39),component=Object(r.a)({},undefined,undefined,!1,null,null,null);e.default=component.exports},311:function(t,e,o){"use strict";o(306)},312:function(t,e,o){var r=o(76)((function(i){return i[1]}));r.push([t.i,".navbar{transform:translateZ(0);transition:all .3s ease-out}.navbar.navbar--hidden{transform:translate3d(0,-100%,0)}",""]),r.locals={},t.exports=r},313:function(t,e,o){t.exports=o.p+"img/logo-EU.07db362.png"},314:function(t,e,o){t.exports=o.p+"img/Logo-Conselleria-innovacion.712cd08.png"},315:function(t,e,o){t.exports=o.p+"img/logo-garantia-juvenil.b0a2ce6.png"},316:function(t,e,o){t.exports=o.p+"img/logo-avi.f319ac1.png"},317:function(t,e,o){"use strict";o.r(e);var r={name:"Footer",data:function(){return{images:[{src:o(309),alt:"Generalitat Valenciana. Conselleria de Sanitat. Universal i Salut Pública",width:"100%",height:"auto"},{src:o(313),alt:"Unión Europea. Fondo Europeo de Desarrollo Regional. Una manera de hacer Europa",width:"50%",height:"auto"},{src:o(314),alt:"Generalitat Valenciana. Conselleria de Innovación, Universidades, Ciencia y Sociedad Digital",width:"100%",height:"auto"},{src:o(308),alt:"Plan de Recuperación, Transformación y Resilencia",width:"100%",height:"auto"},{src:o(315),alt:"Estrategia de emprendimento y empleo joven",width:"80%",height:"auto"},{src:o(316),alt:"AVI. Agència Valenciana de la Innovació",width:"80%",height:"auto"}]}}},n=o(39),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-col bg-white pt-20"},[e("div",{staticClass:"md:mx-auto md:w-3/4 xl:mx-auto bg-white pl-4 pr-4 sm:pl-0 sm:pr-0"},[e("div",{staticClass:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 pb-10 justify-items-center"},t._l(t.images,(function(image,t){return e("div",{key:t,staticClass:"h-4/5 mx-auto"},[e("img",{staticClass:"w-full h-full object-scale-down",attrs:{src:image.src,alt:image.alt,width:image.width,height:image.height}})])})),0)]),t._v(" "),e("div",{staticClass:"w-full bg-black h-20"})])}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("285a10a3",content,!0,{sourceMap:!1})},323:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("170c21e0",content,!0,{sourceMap:!1})},328:function(t,e,o){t.exports=o.p+"img/BTE_banner_1.c47384e.jpg"},329:function(t,e,o){"use strict";o(322)},330:function(t,e,o){var r=o(76)((function(i){return i[1]}));r.push([t.i,".carousel-container-mobile[data-v-fe0a0872]{height:600px}.slick-slide img[data-v-fe0a0872]{margin:auto;max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}",""]),r.locals={},t.exports=r},331:function(t,e,o){"use strict";o(323)},332:function(t,e,o){var r=o(76)((function(i){return i[1]}));r.push([t.i,"form{display:flex;flex-direction:column;margin:0 auto;width:100%}label{font-weight:700}input,textarea{border:1px solid gray;border-radius:5px;font-size:18px;margin-bottom:20px;padding:10px}button{background-color:blue;border:none;border-radius:5px;color:#fff;cursor:pointer;padding:10px 20px}",""]),r.locals={},t.exports=r},344:function(t,e,o){"use strict";o.r(e);var r={mounted:function(){window.addEventListener("scroll",(function(){var t=document.getElementById("parallax-text"),e=document.getElementById("parallax-image"),o=window.pageYOffset;t.style.transform="translateY(".concat(.1*o,"px)"),e.style.transform="translateY(".concat(.9*o,"px)")}))}},n=o(39),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("div",{staticClass:"absolute inset-0 bg-center bg-cover",style:"background-image: url('".concat(o(328),"'); z-index: -1;"),attrs:{id:"parallax-image"}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full min-h-screen flex items-center justify-center",attrs:{id:"parallax-text"}},[e("div",{staticClass:"flex flex-col text-center text-white justify-center"},[e("h1",{staticClass:"flex font-futura text-4xl md:text-6xl md:font-semibold md:tracking-mid text-white pl-5 pr-5 leading-snug pb-10"},[e("div",{staticClass:"leading-tight"},[t._v("BIOMEDICAL & TISSUE"),e("br"),t._v("ENGINEERING LABORATORY")])]),t._v(" "),e("h2",{staticClass:"font-futura text-3xl md:text-4xl md:font-semibold md:tracking-mid text-white text-opacity-70 text-center"},[t._v("ESCOBEDO-LUCEA LAB")])])])}],!1,null,null,null);e.default=component.exports},345:function(t,e,o){"use strict";o.r(e);var r={name:"About",components:{},methods:{},data:function(){return{}}},n=o(39),component=Object(n.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"about"}},[e("div",{staticClass:"w-full flex flex-col bg-black pt-16 pb-8"},[e("div",{staticClass:"container mx-auto w-2/3"},[e("div",{staticClass:"flex flex-col text-center text-white"},[e("h2",{staticClass:"font-futura text-4xl font-semibold md:text-5xl pb-10"},[t._v("ABOUT BTELab")]),t._v(" "),e("p",{staticClass:"w-full pb-5 text-justify"}),e("div",{staticClass:"font-avenir leading-loose pb-7 md:w-2/3 mx-auto text-justify"},[t._v("\n                    The BTELab is a multidisciplinary team based at the Research Foundation of the General Hospital in\n                    Valencia,\n                    Spain. Created in 2020 and directed by Carmen Escobedo-Lucea, it is focused on research and\n                    development\n                    in\n                    the field of Biomedical and Tissue Engineering.\n                ")]),t._v(" "),e("div",{staticClass:"font-avenir leading-loose text-justify md:w-2/3 mx-auto"},[t._v("\n                    We seek to find new solutions to medical problems through the use of technologies within our areas\n                    of\n                    interest such as 3D printing and 3D bioprinting, organ-on-a-chip (OOC) or cell sheet, among others.\n                ")]),t._v(" "),e("p")])])])])}],!1,null,null,null);e.default=component.exports},346:function(t,e,o){"use strict";o.r(e);var r=o(337),n=(o(339),{name:"HospitalBanner",components:{Slick:r.a},data:function(){return{slickOptions:{prevArrow:null,nextArrow:null,autoplay:!0,slidesToShow:1,autoplaySpeed:1100,adaptiveHeight:!0,dots:!1,speed:1100,cssEase:"ease",rtl:!0}}}}),l=(o(329),o(39)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-black pb-10"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"carousel-container container overflow-hidden"},[e("slick",{ref:"slick",staticClass:"relative",attrs:{options:t.slickOptions,dir:"rtl"}},[e("nuxt-img",{staticStyle:{"object-fit":"scale-down"},attrs:{format:"webp",src:"/hospital1600px.png",alt:"Hospital General Universitario de Valencia",fetchpriority:"low",width:"980",height:"auto",quality:"100"}}),t._v(" "),e("nuxt-img",{staticStyle:{"object-fit":"scale-down"},attrs:{format:"webp",src:"/fotogrupo-actu.png",alt:"BTE Lab team photo",fetchpriority:"low",width:"980",height:"auto",quality:"100"}}),t._v(" "),e("nuxt-img",{staticStyle:{"object-fit":"scale-down"},attrs:{format:"webp",src:"/valencia1600px.png",alt:"Science Museum in Valencia",fetchpriority:"low",width:"980",height:"auto",quality:"100"}})],1)],1)])])}),[],!1,null,"fe0a0872",null);e.default=component.exports},347:function(t,e,o){"use strict";o.r(e);var r={name:"ResearchMain",components:{},methods:{},data:function(){return{}}},n=o(39),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full mx-auto md:px-20 bg-black text-white text-center pb-16"},[e("h2",{staticClass:"flex-1 w-full font-futura text-4xl md:text-5xl font-semibold tracking-mid pb-10 md:pb-12"},[t._v("RESEARCH")]),t._v(" "),e("div",{staticClass:"flex"},[e("div",{staticClass:"flex-1 flex xl:flex-row flex-col"},[e("div",{staticClass:"flex-1 flex flex-col"},[t._m(0),t._v(" "),e("div",{staticClass:"w-full text-center h-20 pb-36 md:pb-0"},[e("router-link",{staticClass:"font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0",attrs:{to:"/research",title:"Microfabrication and Organ-on-a-Chip"}},[t._v("\n                        More\n                    ")])],1)]),t._v(" "),e("div",{staticClass:"flex-1 flex flex-col"},[t._m(1),t._v(" "),e("div",{staticClass:"w-full text-center h-20 pb-36 md:pb-0"},[e("router-link",{staticClass:"font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0",attrs:{to:"/research#bioprinting",title:"3D Bioprinting and Additive Manufacturing"}},[t._v("\n                        More\n                    ")])],1)]),t._v(" "),e("div",{staticClass:"flex-1 flex flex-col"},[e("h4",{staticClass:"font-futura text-2xl font-semibold h-20 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10"},[t._v("STEM CELL\n                    BIOLOGY AND TISSUE ENGINEERING")]),t._v(" "),e("div",{staticClass:"w-full text-center h-20 pb-36 md:pb-0"},[e("router-link",{staticClass:"font-avenir inline-block text-sm px-12 py-4 leading-none border text-white border-white hover:text-black hover:bg-greygreen hover:border-black hover:no-underline transition-all duration-200 ease-in-out mt-4 lg:mt-0",attrs:{to:"/research#stem-cell",title:"Stem Cell Biology and Tissue Engineering"}},[t._v("\n                        More\n                    ")])],1)])])])])}),[function(){var t=this,e=t._self._c;return e("h4",{staticClass:"font-futura text-2xl font-semibold h-20 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10"},[t._v("\n                    MICROFABRICATION AND"),e("br"),t._v("ORGAN-ON-A-CHIP")])},function(){var t=this,e=t._self._c;return e("h4",{staticClass:"font-futura text-2xl font-semibold h-28 xl:h-36 pl-10 pr-10 pb-4 xl:pb-10"},[t._v("3D\n                    BIOPRINTING,"),e("br"),t._v("ADDITIVE"),e("br"),t._v("MANUFACTURING AND "),e("br"),t._v("XR TECHNOLOGIES")])}],!1,null,null,null);e.default=component.exports},348:function(t,e,o){"use strict";o.r(e);o(34),o(46);var r={name:"ContactForm",data:function(){return{form:{name:"",email:"",phone:"",address:"",subject:"",message:""}}},methods:{submitForm:function(){if(this.form.name&&this.form.email&&this.form.subject&&this.form.message){var t="mailto:btelabvalencia@gmail.com?subject=".concat(encodeURIComponent(this.form.subject),"&body=From%3A%20").concat(encodeURIComponent(this.form.name),"%20%28").concat(encodeURIComponent(this.form.email),"%29%0D%0A%0D%0A").concat(encodeURIComponent(this.form.message),"%29%0D%0A%0D%0A").concat(encodeURIComponent(this.form.phone),"%29%0D%0A%0D%0A").concat(encodeURIComponent(this.form.address));window.location.href=t}else alert("Please fill all required fields")}}},n=(o(331),o(39)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"contact"}},[e("div",{staticClass:"w-full flex flex-col bg-white pt-36 pb-20"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-4"},[e("div",{staticClass:"p4 text-center md:pr-16"},[e("h2",{staticClass:"font-futura text-3xl md:text-5xl font-semibold pb-10 md:pb-12 tracking-tight justify-center antialiased"},[t._v("\n                        Contact us\n                    ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"flex justify-center pr-10 lg:pr-0"},[e("div",{staticClass:"w-8 ml-2 text-gray-500"},[e("a",{staticClass:"hover:text-gray-700",attrs:{title:"Follow us on LinkedIn",href:"https://www.linkedin.com/company/btelab",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"}})])])]),t._v(" "),e("div",{staticClass:"w-8 ml-2 text-gray-500"},[e("a",{staticClass:"hover:text-gray-700",attrs:{title:"Follow us on Twitter",href:"https://www.twitter.com/bte_lab",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244 0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312 1.9 1.9 0 0 0 .853-.033 1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526 5.376 5.376 0 0 0 3.897 1.977 1.891 1.891 0 0 1 3.222-1.725 3.797 3.797 0 0 0 1.2-.459 1.9 1.9 0 0 1-.831 1.047 3.799 3.799 0 0 0 1.086-.299 3.834 3.834 0 0 1-.943.979z"}})])])]),t._v(" "),e("div",{staticClass:"w-8 ml-2 text-gray-500"},[e("a",{staticClass:"hover:text-gray-700",attrs:{title:"Follow us on Instagram",href:"https://www.instagram.com/bte_lab",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"}})])])]),t._v(" "),e("div",{staticClass:"w-8 ml-2 text-gray-500"},[e("a",{staticClass:"hover:text-gray-700",attrs:{title:"Follow us on Github",href:"https://www.github.com/btelab",target:"_blank"}},[e("svg",{staticClass:"fill-current",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08 0-.443-.156-.856-.527-1.197-.622-.571-1.671-.268-2.862-.268zM8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908.657.406.657.908c.001.502-.293.91-.657.91zm3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908.001.502-.293.91-.656.91zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.876 13.539c-.172 0-.514 0-.876.002-.362-.002-.704-.002-.876-.002-.76 0-3.772-.059-3.772-3.689 0-.834.286-1.445.755-1.955-.074-.184-.078-1.232.32-2.236 0 0 .916.1 2.301 1.051.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051.398 1.004.395 2.053.32 2.236.469.51.755 1.121.755 1.955-.001 3.632-3.013 3.69-3.773 3.69z"}})])])])])]),t._v(" "),e("form",{attrs:{onsubmit:t.submitForm}},[e("div",{staticClass:"grid grid-cols-2 gap-4 md:pl-16 pt-24 md:pt-0"},[e("div",{staticClass:"col-span-2 md:col-span-1"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Name *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"mt-0 pb-0 font-avenir font-normal text-sm block w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{type:"text",placeholder:"Enter your name",required:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Email *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"mt-0 pb-0 font-avenir font-normal text-sm block w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{type:"email",placeholder:"Enter your email",required:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Phone")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.phone,expression:"form.phone"}],staticClass:"mt-0 pb-0 font-avenir font-normal text-sm block w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{type:"text",placeholder:"Enter your phone"},domProps:{value:t.form.phone},on:{input:function(e){e.target.composing||t.$set(t.form,"phone",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2 md:col-span-1"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"mt-0 pb-0 block font-normal font-avenir text-sm w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{type:"text",placeholder:"Enter your address"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Subject *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.subject,expression:"form.subject"}],staticClass:"mt-0 pb-0 block font-avenir font-normal text-sm w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{type:"text",placeholder:"Enter your subject",required:""},domProps:{value:t.form.subject},on:{input:function(e){e.target.composing||t.$set(t.form,"subject",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2"},[e("label",{staticClass:"block"},[e("span",{staticClass:"font-avenir text-black antialiased font-thin"},[t._v("Message *")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"mt-0 pb-0 block font-avenir font-normal text-sm w-full px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black focus:border-2",attrs:{name:"message",placeholder:"Enter your message here",cols:"40",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-span-2"},[e("button",{staticClass:"w-full font-avenir text-sm bg-black text-white font-thin py-2 px-4 rounded mt-4",attrs:{type:"submit"},on:{click:t.submitForm}},[t._v("Submit")])])])])])])])])}),[function(){var t=this._self._c;return t("p",{staticClass:"font-avenir text-sm tracking-bit antialiased mb-8 font-thin"},[t("a",{attrs:{href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[this._v("Av. de les Tres Creus, 2,\n                            46014\n                            València,\n                            Valencia, Spain")])])},function(){var t=this._self._c;return t("p",{staticClass:"font-avenir text-sm tracking-bit antialiased mb-8 font-thin"},[t("a",{attrs:{href:"mailto:example@btelab@fihguv.es font-thin"}},[this._v("btelab@fihguv.es")])])},function(){var t=this._self._c;return t("p",{staticClass:"font-avenir text-sm tracking-bit antialiased mb-8 font-thin"},[t("a",{attrs:{href:"tel:+963131893"}},[this._v("963 131\n                            893")])])}],!1,null,null,null);e.default=component.exports},349:function(t,e,o){"use strict";o.r(e);var r=o(39),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"h-auto w-full flex justify-center items-center bg-white"},[t("div",{staticClass:"container"},[t("iframe",{staticStyle:{border:"0","max-width":"100%",width:"100%"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.037173726494!2d-0.40829610000000005!3d39.468488900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f74e1b1b461%3A0xb39d8ea7de8387f5!2sConsorcio%20Hospital%20General%20Universitario%20de%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1706009019260!5m2!1ses!2ses",width:"1300",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])])}],!1,null,null,null);e.default=component.exports},390:function(t,e,o){"use strict";o.r(e);var r=o(1).a.extend({}),n=o(39),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"flex flex-col w-full bg-back"},[e("Nav"),t._v(" "),e("MainBanner"),t._v(" "),e("About"),t._v(" "),e("HospitalBanner"),t._v(" "),e("ResearchMain"),t._v(" "),e("ContactForm"),t._v(" "),e("Map"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(307).default,MainBanner:o(344).default,About:o(345).default,HospitalBanner:o(346).default,ResearchMain:o(347).default,ContactForm:o(348).default,Map:o(349).default,Footer:o(317).default})}}]);