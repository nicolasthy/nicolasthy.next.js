(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4K3U":function(n,t,e){"use strict";e.r(t),e.d(t,"__N_SSG",(function(){return s}));var r=e("q1tI"),o=e.n(r),i=e("jy8j"),a=o.a.createElement,s=!0;t.default=function(n){var t=n.posts;return a(o.a.Fragment,null,a(i.a,{posts:t}))}},"52dC":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return e("4K3U")}])},AtI2:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var r={primary:"#9B5DE5",secondary:"#CFF7B9",light:"#F7F7FF",dark:"#191716"},o={sansSerif:'"Poppins", sans-serif',serif:'"Lora", serif'}},YFqc:function(n,t,e){n.exports=e("cTJO")},cTJO:function(n,t,e){"use strict";var r=e("/GRZ"),o=e("i2R6"),i=e("48fX"),a=e("tCBg"),s=e("T0f4");function u(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=s(n);if(t){var o=s(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return a(this,e)}}var c=e("AroE"),f=e("7KCV");t.__esModule=!0,t.default=void 0;var l,p=f(e("q1tI")),h=e("QmWs"),d=e("g/15"),v=c(e("nOHt")),g=e("elyg");function m(n){return n&&"object"===typeof n?(0,d.formatWithValidation)(n):n}var y=new Map,b=window.IntersectionObserver,w={};function k(){return l||(b?l=new b((function(n){n.forEach((function(n){if(y.has(n.target)){var t=y.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(l.unobserve(n.target),y.delete(n.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(n){i(e,n);var t=u(e);function e(n){var o;return r(this,e),(o=t.call(this,n)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(n){var t=null,e=null,r=null;return function(o,i){if(r&&o===t&&i===e)return r;var a=n(o,i);return t=o,e=i,r=a,a}}((function(n,t){return{href:(0,g.addBasePath)(m(n)),as:t?(0,g.addBasePath)(m(t)):t}})),o.linkClicked=function(n){var t=n.currentTarget,e=t.nodeName,r=t.target;if("A"!==e||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,s=i.as;if(function(n){var t=(0,h.parse)(n,!1,!0),e=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===e.protocol&&t.host===e.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),s=s?(0,h.resolve)(u,s):a,n.preventDefault();var c=o.props.scroll;null==c&&(c=s.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,s,{shallow:o.props.shallow}).then((function(n){n&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==n.prefetch,o}return o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),e=t.href,r=t.as,o=(0,h.resolve)(n,e);return[o,r?(0,h.resolve)(n,r):o]}},{key:"handleRef",value:function(n){var t=this;this.p&&b&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,t){var e=k();return e?(e.observe(n),y.set(n,t),function(){try{e.unobserve(n)}catch(t){console.error(t)}y.delete(n)}):function(){}}(n,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],n).catch((function(n){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var n=this,t=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){n.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),n.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||n.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),e}(p.Component);t.default=x},jy8j:function(n,t,e){"use strict";e.d(t,"a",(function(){return k}));var r=e("q1tI"),o=e.n(r),i=e("YFqc"),a=e.n(i),s=e("yLiY"),u=e.n(s),c=e("wLTh"),f=e("h4VS"),l=e("5D9J"),p=e("AtI2");function h(){var n=Object(f.a)(["\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 5px 20px;\n  font-family: ",";\n  background: ",";\n  border-radius: 50px;\n  color: #f7f7ff;\n"]);return h=function(){return n},n}function d(){var n=Object(f.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 0 0;\n"]);return d=function(){return n},n}function v(){var n=Object(f.a)(["\n  list-style: none;\n  padding: 0;\n  cursor: pointer;\n\n  > li {\n    background: ",";\n    box-shadow: ",";\n    border-radius: 25px;\n    margin: 30px 0;\n    padding: 30px 30px;\n    transition: background 0.2s linear, box-shadow 0.2s linear;\n\n    &:hover {\n      background: ",";\n      box-shadow: ",";\n    }\n\n    h3 {\n      margin: 0;\n      color: ",";\n      font-weight: 500;\n    }\n\n    p {\n      &:first-of-type {\n        font-size: 12px;\n        margin: 0 0 5px;\n        opacity: 0.7;\n      }\n\n      color: ",";\n      margin: 0;\n    }\n  }\n"]);return v=function(){return n},n}var g={html:{background:"#00BBF9"},css:{background:"#00F5D4"},javascript:{background:"#FEE020"},ruby:{background:"#F15BB5"}},m=l.a.ul(v(),(function(n){return n.theme.posts.item}),(function(n){return n.theme.posts.itemShadow}),(function(n){return n.theme.posts.itemHover}),(function(n){return n.theme.posts.itemHoverShadow}),(function(n){return n.theme.posts.itemTitleColor}),(function(n){return n.theme.textLight})),y=l.a.ul(d()),b=l.a.li(h(),p.b.sansSerif,(function(n){var t=n.tag;return g[t].background})),w=o.a.createElement,k=function(n){var t=n.posts,e=Object(c.b)(),r=u()().publicRuntimeConfig.linkPrefix;return w(m,{theme:e},t.map((function(n){return w(o.a.Fragment,{key:n.slug},w(a.a,{href:"/posts/".concat(n.slug),as:"".concat(r,"/posts/").concat(n.slug),passHref:!0},w("li",null,w("h3",null,n.data.title),w("p",null,w("time",null,new Date(n.data.created_at).toLocaleDateString("en",{month:"long",day:"numeric"})),w("small",null," - "),w("span",null,n.readingTime," min read ",w("small",null,"\u2615\ufe0f"))),w("p",null,n.excerpt),w(y,null,n.data.tags&&n.data.tags.map((function(n,t){return w(b,{key:t,tag:n},n)}))))))})))}},yLiY:function(n,t,e){"use strict";var r;t.__esModule=!0,t.setConfig=function(n){r=n},t.default=void 0;t.default=function(){return r}}},[["52dC",0,1,3,2]]]);