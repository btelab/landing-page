(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,14,20,21],{306:function(t,e,o){var content=o(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("6942e492",content,!0,{sourceMap:!1})},307:function(t,e,o){"use strict";o.r(e);var n={name:"Nav",data:function(){return{showMenu:!1,showNavbar:!0,lastScrollPosition:0}},mounted:function(){document.addEventListener("click",this.handleDocumentClick)},beforeDestroy:function(){document.removeEventListener("click",this.handleDocumentClick)},methods:{handleDocumentClick:function(t){this.$refs.menu.contains(event.target)||(this.showMenu=!1)},onScroll:function(){var t=window.scrollY||document.documentElement.scrollTop;t<0||Math.abs(t-this.lastScrollPosition)<60||(this.showNavbar=t<this.lastScrollPosition,this.lastScrollPosition=t)}}},l=(o(311),o(39)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"flex flex-1 flex-col sticky top-0 z-50 bg-black p-5 items-center md:items-start min-h-[8rem] navbar",class:{"navbar--hidden":!t.showNavbar}},[e("div",{staticClass:"flex w-full h-2 border-b border-white border-solid mb-4"}),t._v(" "),e("div",{staticClass:"flex container mx-auto justify-between pb-10 md:pb-14 pl-3"},[e("div",{staticClass:"flex-1 grid grid-cols-3 h-6 text-white"},[e("div",{staticClass:"pt-4"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"invisible xl:visible w-48 h-auto ml-8",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo 2"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-center pt-2"},[e("nuxt-link",{attrs:{to:"".concat(t.$router.options.base),title:"Escobedo Lucea Biomaterial and Tissue Engineering Lab",target:"_self"}},[e("nuxt-img",{staticClass:"visible xl:invisible w-48 h-auto",attrs:{format:"webp",src:"/logo_blanco.png",alt:"Escobedo Lucea Biomaterial and Tissue Engineering Lab logo"}})],1)],1),t._v(" "),e("div",{staticClass:"flex flex-row justify-self-end"},[e("div",{ref:"menu",staticClass:"flex flex-col visible xl:hidden w-34"},[e("div",{staticClass:"flex justify-end w-30"},[e("button",{staticClass:"border border-solid rounded-none border-white border-opacity-75 bg-black text-white hover:bg-gray-200 hover:border-gray-400 hover:text-black py-3 md:p-4 ml-4 h-12 md:h-16",on:{click:function(e){t.showMenu=!t.showMenu}}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("title",[t._v("Menu")]),t._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}})])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"xl:hidden w-30 ml-4 text-sm tracking-bit"},[e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")]),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")]),t._v(" "),e("a",{staticClass:"flex justify-center px-2 py-2 bg-black text-black border-b-2 border-black text-center align-middle",attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-black",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1),t._v(" "),e("nuxt-link",{staticClass:"font-avenir text-sm block px-2 py-2 bg-white text-black border-b-2 border-black text-center hover:bg-black hover:text-white hover:border-white hover:border-2",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"hidden xl:flex text-sm tracking-bit pt-7"},[e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base),title:"Home"}},[t._v("Home")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#about"),title:"About Section"}},[t._v("About")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"research"),title:"Research Section"}},[t._v("Research")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"team"),title:"Team Section"}},[t._v("Team")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"projects"),title:"Projects Section"}},[t._v("Projects")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"publications"),title:"Publications Section"}},[t._v("Publications")])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"blog"),title:"News Section"}},[t._v("News")])],1),t._v(" "),e("div",{staticClass:"w-10 ml-2 font-avenir color-corvid"},[e("a",{attrs:{title:"Google Maps Link",href:"https://maps.app.goo.gl/qB5t25Asfi2NTxdw6",target:"_blank"}},[e("nuxt-img",{staticClass:"w-6 h-6 bg-cover",attrs:{format:"webp",src:"/map.webp",alt:"Google Map Link",fetchpriority:"high"}})],1)]),t._v(" "),e("div",[e("nuxt-link",{staticClass:"mx-2.5 font-avenir color-corvid",attrs:{to:"".concat(t.$router.options.base,"#contact"),title:"Contact Section"}},[t._v("Contact")])],1)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:o(310).default,Nav:o(307).default})},308:function(t,e,o){t.exports=o.p+"img/logo-plan-de-recuperacion.6bd5608.png"},309:function(t,e,o){t.exports=o.p+"img/logo_conselleria-sanidad_whitebackround.63cd238.png"},310:function(t,e,o){"use strict";o.r(e);var n=o(39),component=Object(n.a)({},undefined,undefined,!1,null,null,null);e.default=component.exports},311:function(t,e,o){"use strict";o(306)},312:function(t,e,o){var n=o(76)((function(i){return i[1]}));n.push([t.i,".navbar{transform:translateZ(0);transition:all .3s ease-out}.navbar.navbar--hidden{transform:translate3d(0,-100%,0)}",""]),n.locals={},t.exports=n},313:function(t,e,o){t.exports=o.p+"img/logo-EU.07db362.png"},314:function(t,e,o){t.exports=o.p+"img/Logo-Conselleria-innovacion.712cd08.png"},315:function(t,e,o){t.exports=o.p+"img/logo-garantia-juvenil.b0a2ce6.png"},316:function(t,e,o){t.exports=o.p+"img/logo-avi.f319ac1.png"},317:function(t,e,o){"use strict";o.r(e);var n={name:"Footer",data:function(){return{images:[{src:o(309),alt:"Generalitat Valenciana. Conselleria de Sanitat. Universal i Salut Pública",width:"100%",height:"auto"},{src:o(313),alt:"Unión Europea. Fondo Europeo de Desarrollo Regional. Una manera de hacer Europa",width:"50%",height:"auto"},{src:o(314),alt:"Generalitat Valenciana. Conselleria de Innovación, Universidades, Ciencia y Sociedad Digital",width:"100%",height:"auto"},{src:o(308),alt:"Plan de Recuperación, Transformación y Resilencia",width:"100%",height:"auto"},{src:o(315),alt:"Estrategia de emprendimento y empleo joven",width:"80%",height:"auto"},{src:o(316),alt:"AVI. Agència Valenciana de la Innovació",width:"80%",height:"auto"}]}}},l=o(39),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full flex flex-col bg-white pt-20"},[e("div",{staticClass:"md:mx-auto md:w-3/4 xl:mx-auto bg-white pl-4 pr-4 sm:pl-0 sm:pr-0"},[e("div",{staticClass:"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 pb-10 justify-items-center"},t._l(t.images,(function(image,t){return e("div",{key:t,staticClass:"h-4/5 mx-auto"},[e("img",{staticClass:"w-full h-full object-scale-down",attrs:{src:image.src,alt:image.alt,width:image.width,height:image.height}})])})),0)]),t._v(" "),e("div",{staticClass:"w-full bg-black h-20"})])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,o){"use strict";var n=o(3),l=o(324);n({target:"String",proto:!0,forced:o(325)("link")},{link:function(t){return l(this,"a","href",t)}})},321:function(t,e,o){var content=o(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(77).default)("46edbbe1",content,!0,{sourceMap:!1})},324:function(t,e,o){"use strict";var n=o(5),l=o(28),r=o(16),c=/"/g,d=n("".replace);t.exports=function(t,e,o,n){var v=r(l(t)),m="<"+e;return""!==o&&(m+=" "+o+'="'+d(r(n),c,"&quot;")+'"'),m+">"+v+"</"+e+">"}},325:function(t,e,o){"use strict";var n=o(4);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},326:function(t,e,o){"use strict";o(321)},327:function(t,e,o){var n=o(76)((function(i){return i[1]}));n.push([t.i,".relative:hover img{transform:scale(1.05)}@media (max-width:640px){.relative{height:auto;left:0;max-width:100%}}",""]),n.locals={},t.exports=n},343:function(t,e,o){"use strict";o.r(e);o(34),o(320);var n="/ICON-MALE.png",l={name:"Team",data:function(){return{team:[{name:"Carmen Escobedo Lucea",title:"PhD, Biologist",position:"PI BTELab",url:"/CARMEN.jpg",link:"https://cvn.fecyt.es/0000-0002-5642-0536"},{name:"Andrés Sanz García",title:"PhD",position:"Engineer Senior Researcher",url:"/ANDRES.jpg",link:"https://cvn.fecyt.es/0000-0003-0413-4965"},{name:"Néstor Villalba Rojas",title:"MSC Biotechnology",position:"Lab Manager",url:"/NESTOR.jpg",link:"https://www.linkedin.com/in/nestorvillalbarojas"},{name:"Neus Alemany Ortolá",title:"MSC Biotechnology",position:"Lab Technician",url:"/NEUS.jpg",link:"https://www.linkedin.com/in/neusalemanyortola"},{name:"Cristina Andrés Carbonell",title:"Anatomy & Pathology",position:"Lab Technician",url:"/CRISTINA.jpg",link:""},{name:"Raquel Burgos Ríos",title:"Anatomy & Pathology",position:"Lab Technician",url:"/RAQUEL.jpg",link:"https://www.linkedin.com/in/raquel-burgos-r%C3%ADos-2065b8212/"}],PhDCandidates:[{name:"Armando González",title:"MSC",position:"PhD candidate",url:"/ARMANDO.jpg",link:"https://www.linkedin.com/in/armando-gonzález-muñoz-a8b1b6165"},{name:"Julia González Cantó",title:"MSC",position:"PhD candidate",url:"/JULIAGONZALEZ.jpg",link:"https://www.linkedin.com/in/julia-gonzález-cantó-b1a29b228"},{name:"Pepo García Moreno",title:"MD",position:"PhD candidate",url:"/PEPOGARCIA.jpg",link:"https://www.linkedin.com/in/pepo-garcía-moreno-0ba032248"},{name:"Jose Luis de Pablo Franco",title:"MSC",position:"PhD candidate",url:"/JOSELUIS.jpg",link:"https://reproduccionart.com/jose-luis-de-pablo/"},{name:"Daniel Sánchez García",title:"MSC",position:"PhD candidate",url:"/DANIEL.jpg",link:"https://www.linkedin.com/in/ing-mecanico-daniel-sanchez-garcia/"}],graduates:[{name:"Sara Mirabet Torres",title:"MSC",position:"Biologist",url:"/SARA.jpg",link:"https://www.linkedin.com/in/saramirabettorres"},{name:"Alejandro López Cuquerella",title:"MSC",position:"Biomedical Engineer",url:"/ALEX.jpg",link:"https://www.linkedin.com/in/alejandro-lópez-cuquerella"},{name:"Andrea Sánchez Villena",title:"MSC",position:"Industrial Design Engineer",url:"/ANDREA.jpg",link:"https://www.linkedin.com/in/andrea-sánchez-villena-035606156"},{name:"Francesca Flore",title:"MSC",position:"Biomedical Engineer",url:"/FRANCESCA.jpg",link:"https://www.linkedin.com/in/francesca-flore-46a01a90"},{name:"Anuar Gimenez El Amrani",title:"",position:"Mechanical and Electrical Engineer",url:"/ANUAR.jpg",link:"https://www.linkedin.com/in/anuargimenez"},{name:"Alfonso García Sanz",title:"MSC",position:"Industrial Engineer",url:"/ALFONSO.jpg",link:"https://www.linkedin.com/in/alfonsogarciasanz/"},{name:"Guillem Cerdà Martí",title:"",position:"Videogames Developer",url:"/GUILLEM.jpg",link:"https://www.linkedin.com/in/guillem-cerd%C3%A0-mart%C3%AD/"},{name:"Borja Goméz Colmenar",title:"MSC",position:"Electronics and Automation Engineer",url:n,link:"https://www.linkedin.com/in/borja-gómez-colmenar-3078b111a"}],collaborators:[{name:"Vicente Mirabet",title:"PhD",position:"Biologist",url:"/VICENTEMIRABET.jpg",link:"https://www.linkedin.com/in/vicente-mirabet-41790662"},{name:"David Peris Puchol",title:" M.D.Ph.D.",position:"Biotechnologist and Orthopedic Surgeon",url:n,link:"https://www.linkedin.com/in/david-peris-puchol-4710272a"},{name:"Isabel Moreno",title:"MD Ph.D",position:"Plastic Surgeon",url:"/ICON-FEMALE.png",link:"https://www.linkedin.com/in/isabel-moreno-gallent-02182342"}],previousMembers:[{name:"Matteo Perra",title:"PhD",position:"Pharmacy Postdoctoral Researcher",url:"/MATTEO.jpg",link:"https://www.linkedin.com/in/matteo-perra-b3a457241"},{name:"Andrea Martínez Vela",title:"MSC",position:"Chemist",url:"/ANDREA-MARTINEZ.jpg",link:"https://www.linkedin.com/in/andrea-martínez-vela-66251b167"}]}},methods:{handleClick:function(t,image){t.preventDefault(),image.link.length&&window.open(image.link,"_blank")}}},r=(o(326),o(39)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"team"}},[e("div",{staticClass:"w-full flex flex-col bg-black pt-14 pb-28"},[e("div",{staticClass:"mx-auto md:w-4/5 px-4 md:px-0"},[t._m(0),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"},t._l(t.team,(function(image,o){return e("div",{key:o,staticClass:"relative"},[e("a",{attrs:{href:image.link,title:image.name},on:{click:function(e){return e.preventDefault(),t.handleClick(e,image)}}},[e("nuxt-img",{staticClass:"w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110",attrs:{format:"webp",src:image.url,alt:image.name,fetchpriority:"high"}}),t._v(" "),e("div",{staticClass:"absolute bottom-10 left-4 inset-0 flex items-end justify-left"},[e("div",{staticClass:"bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black"},[e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.name))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.title))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.position))])])])],1)])})),0)]),t._v(" "),e("div",{staticClass:"mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16"},[t._m(1),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"},t._l(t.PhDCandidates,(function(image,o){return e("div",{key:o,staticClass:"relative"},[e("a",{attrs:{href:image.link,title:image.name},on:{click:function(e){return e.preventDefault(),t.handleClick(e,image)}}},[e("nuxt-img",{staticClass:"w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110",attrs:{format:"webp",src:image.url,alt:image.name,fetchpriority:"high"}}),t._v(" "),e("div",{staticClass:"absolute bottom-10 left-4 inset-0 flex items-end justify-left"},[e("div",{staticClass:"bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black"},[e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.name))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.title))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.position))])])])],1)])})),0)]),t._v(" "),e("div",{staticClass:"mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16"},[t._m(2),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"},t._l(t.graduates,(function(image,o){return e("div",{key:o,staticClass:"relative"},[e("a",{attrs:{href:image.link,title:image.name},on:{click:function(e){return e.preventDefault(),t.handleClick(e,image)}}},[e("nuxt-img",{staticClass:"w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110",attrs:{format:"webp",src:image.url,alt:image.name,fetchpriority:"high"}}),t._v(" "),e("div",{staticClass:"absolute bottom-10 left-4 inset-0 flex items-end justify-left"},[e("div",{staticClass:"bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black"},[e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.name))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.title))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.position))])])])],1)])})),0)]),t._v(" "),e("div",{staticClass:"mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16"},[t._m(3),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"},t._l(t.collaborators,(function(image,o){return e("div",{key:o,staticClass:"relative"},[e("a",{attrs:{href:image.link,title:image.name},on:{click:function(e){return e.preventDefault(),t.handleClick(e,image)}}},[e("nuxt-img",{staticClass:"w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110",attrs:{format:"webp",src:image.url,alt:image.name,fetchpriority:"high"}}),t._v(" "),e("div",{staticClass:"absolute bottom-10 left-4 inset-0 flex items-end justify-left"},[e("div",{staticClass:"bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black"},[e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.name))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.title))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.position))])])])],1)])})),0)]),t._v(" "),e("div",{staticClass:"mx-auto md:w-4/5 px-4 md:px-0 pt-10 md:pt-16"},[t._m(4),t._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"},t._l(t.previousMembers,(function(image,o){return e("div",{key:o,staticClass:"relative"},[e("a",{attrs:{href:image.link,title:image.name},on:{click:function(e){return e.preventDefault(),t.handleClick(e,image)}}},[e("nuxt-img",{staticClass:"w-full h-auto object-cover rounded-lg transition-transform duration-500 transform-gpu hover:scale-110",attrs:{format:"webp",src:image.url,alt:image.name,fetchpriority:"high"}}),t._v(" "),e("div",{staticClass:"absolute bottom-10 left-4 inset-0 flex items-end justify-left"},[e("div",{staticClass:"bg-gray-900 bg-opacity-50 p-4 rounded-lg text-xl text-black"},[e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.name))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.title))]),t._v(" "),e("p",{staticClass:"text-gray-100"},[t._v(t._s(image.position))])])])],1)])})),0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col text-center text-white"},[t("h2",{staticClass:"font-futura text-4xl md:text-5xl font-semibold pb-16 tracking-mid"},[this._v("TEAM")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col text-center text-white"},[t("h2",{staticClass:"font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid"},[this._v("PhD Candidates")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col text-center text-white"},[t("h2",{staticClass:"font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid"},[this._v("Graduates")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col text-center text-white"},[t("h2",{staticClass:"font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid"},[this._v("Collaborators")])])},function(){var t=this._self._c;return t("div",{staticClass:"flex flex-col text-center text-white"},[t("h2",{staticClass:"font-futura text-3xl md:text-4xl font-semibold pb-10 tracking-mid"},[this._v("Previous Members")])])}],!1,null,null,null);e.default=component.exports},389:function(t,e,o){"use strict";o.r(e);var n={name:"team"},l=o(39),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col w-full bg-back"},[e("Nav"),t._v(" "),e("Team"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:o(307).default,Team:o(343).default,Footer:o(317).default})}}]);