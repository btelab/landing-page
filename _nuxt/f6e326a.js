(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{345:function(t,e,n){"use strict";n.r(e);n(15),n(22),n(51);var r={name:"Instagram",mounted:function(){var t=this,e=this.$config.instagramAccessToken;fetch("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(e)).then((function(t){return t.json()})).then((function(data){var e=data.data.filter((function(t){return"CAROUSEL_ALBUM"===t.media_type||"IMAGE"===t.media_type}));t.posts=e.slice(0,4)}))},data:function(){return{posts:[]}}},c=n(32),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full bg-black pb-20"},[n("div",{staticClass:"container mx-auto px-8 py-8 bg-white"},[n("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},t._l(t.posts,(function(t,e){return n("div",{key:e},[n("a",{attrs:{href:t.permalink,target:"_blank",rel:"noopener noreferrer"}},[n("img",{staticClass:"w-full h-full object-cover rounded",attrs:{src:t.media_url,alt:t.caption,title:t.caption}})])])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);