(function(t){function e(e){for(var i,o,s=e[0],u=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",[n("h1",[t._v("HAPI Art")]),n("p",{staticClass:"App--p"},[t._v("It’s not everyday you can visit the Havard Art Museum. Here’s a peak inside.")]),n("Nav",{attrs:{photoDisabled:t.isPhotoDisabled,paintingDisabled:t.isPaintingDisabled},on:{"update-view":t.updateView}})],1),t.viewPaintings?n("Art",{key:t.paintings[t.currentImage].id,attrs:{art:t.paintings[t.currentImage],prevDisabled:t.isPrevDisabled,nextDisabled:t.isNextDisabled},on:{"move-prev":t.moveToPrevImg,"move-next":t.moveToNextImg}}):t.viewPhotos?n("Art",{key:t.photos[t.currentImage].id,attrs:{art:t.photos[t.currentImage],prevDisabled:t.isPrevDisabled,nextDisabled:t.isNextDisabled},on:{"move-prev":t.moveToPrevImg,"move-next":t.moveToNextImg}}):t._e()],1)},a=[],o=n("75fc"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Art"},[n("h3",[t._v(t._s(t.art.title))]),n("div",{staticClass:"Art--div--flex"},[n("button",{attrs:{disabled:t.prevDisabled},on:{click:function(e){return t.$emit("move-prev")}}},[n("i",{staticClass:"fas fa-arrow-circle-left"})]),t.art.imagecount?n("img",{attrs:{src:t.art.images[0].baseimageurl,alt:t.art.title}}):t._e(),n("button",{attrs:{disabled:t.nextDisabled},on:{click:function(e){return t.$emit("move-next")}}},[n("i",{staticClass:"fas fa-arrow-circle-right"})])]),t._l(t.art.people,function(e){return n("div",[n("p",{staticClass:"App--p--margin"},[t._v("People:")]),n("p",{attrs:{person:e}},[t._v(t._s(e.displayname))])])}),n("p",{staticClass:"App--p--margin"},[t._v("Credit:")]),n("p",[t._v(t._s(t.art.creditline))])],2)},u=[],c={name:"Art",props:{art:Object,prevDisabled:Boolean,nextDisabled:Boolean}},l=c,p=(n("dfb3"),n("2877")),f=Object(p["a"])(l,s,u,!1,null,"bc2d22e6",null),d=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{attrs:{disabled:t.paintingDisabled},on:{click:function(e){return t.$emit("update-view")}}},[t._v("Paintings")]),n("button",{attrs:{disabled:t.photoDisabled},on:{click:function(e){return t.$emit("update-view")}}},[t._v("Photographs")])])},h=[],g={name:"Nav",props:{photoDisabled:Boolean,paintingDisabled:Boolean}},m=g,b=(n("7a7d"),Object(p["a"])(m,v,h,!1,null,"4f4a5a39",null)),P=b.exports,w={name:"app",components:{Art:d,Nav:P},data:function(){return{paintings:[],photos:[],error:"",currentImage:0,viewPhotos:!1,viewPaintings:!1}},computed:{isPrevDisabled:function(){return 0===this.currentImage},isNextDisabled:function(){var t;return t=!0===this.viewPaintings?this.paintings.length:this.photos.length,this.currentImage===t-1},isPhotoDisabled:function(){return!0===this.viewPhotos},isPaintingDisabled:function(){return!0===this.viewPaintings}},methods:{moveToNextImg:function(){this.currentImage+=1},moveToPrevImg:function(){this.currentImage-=1},updateView:function(){this.currentImage=0,this.viewPhotos=!this.viewPhotos,this.viewPaintings=!this.viewPaintings},getPhotos:function(){var t=this,e="https://api.harvardartmuseums.org/object?apikey=40d780c0-5f9d-11e9-b98a-f7e6d7d68189&classification=Photographs&size=50";fetch(e).then(function(t){return t.json()}).then(function(e){var n=t.filterByImageUrl(e.records);return t.filterByImages(n)}).then(function(e){return t.photos=[].concat(Object(o["a"])(t.photos),Object(o["a"])(e))}).catch(function(e){return t.error=e.message})},filterByImageUrl:function(t){return t.filter(function(t){return null!==t.primaryimageurl})},filterByImages:function(t){return t.filter(function(t){return t.images})}},created:function(){var t=this,e="https://api.harvardartmuseums.org/object?apikey=40d780c0-5f9d-11e9-b98a-f7e6d7d68189&classification=Paintings&size=30";fetch(e).then(function(t){return t.json()}).then(function(e){var n=t.filterByImageUrl(e.records);return t.filterByImages(n)}).then(function(e){return t.paintings=[].concat(Object(o["a"])(t.paintings),Object(o["a"])(e))}).then(function(){t.viewPaintings=!t.viewPaintings,t.getPhotos()}).catch(function(e){return t.error=e.message})}},y=w,_=(n("034f"),Object(p["a"])(y,r,a,!1,null,null,null)),D=_.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(D)}}).$mount("#app")},"64a9":function(t,e,n){},"71d8":function(t,e,n){},"7a7d":function(t,e,n){"use strict";var i=n("71d8"),r=n.n(i);r.a},a56b:function(t,e,n){},dfb3:function(t,e,n){"use strict";var i=n("a56b"),r=n.n(i);r.a}});
//# sourceMappingURL=app.7919bf38.js.map