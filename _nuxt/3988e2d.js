(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{392:function(t,e,n){"use strict";n.r(e);n(25),n(60),n(13);var o={name:"Instagram",mounted:function(){var t,e=this.$config.instagramAccessToken;fetch("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(e)).then((function(e){return t=e.clone(),e.json()})).then((function(data){var t=data.data.filter((function(t){return"CAROUSEL_ALBUM"===t.media_type||"IMAGE"===t.media_type}));this.posts=t.slice(0,4)}),(function(e){console.log("Error parsing JSON from response:",e,t),t.text().then((function(t){console.log("Received the following instead of valid JSON:",t)}))}))},data:function(){return{posts:[]}}},r=n(33),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full bg-black pb-20"},[e("div",{staticClass:"container mx-auto px-8 py-8 bg-white"},[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},t._l(t.posts,(function(t,n){return e("div",{key:n},[e("a",{attrs:{href:t.permalink,target:"_blank",rel:"noopener noreferrer"}},[e("img",{staticClass:"w-full h-full object-cover rounded",attrs:{src:t.media_url,alt:t.caption,title:t.caption}})])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);