(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4K3U":function(n,t,e){"use strict";e.r(t);var r=e("o0o1"),o=e.n(r),a=e("HaE+"),i=e("q1tI"),s=e.n(i),u=e("jy8j"),c=e("qMHi"),f=s.a.createElement,l=function(n){return f(s.a.Fragment,null,f(u.a,{posts:n.posts}))};l.getInitialProps=Object(a.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Object(c.b)(),n.abrupt("return",{posts:t});case 2:case"end":return n.stop()}}),n)}))),t.default=l},"52dC":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return e("4K3U")}])},AtI2:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o}));var r={primary:"#9B5DE5",secondary:"#CFF7B9",light:"#F7F7FF",dark:"#191716"},o={sansSerif:'"Poppins", sans-serif',serif:'"Lora", serif'}},YFqc:function(n,t,e){n.exports=e("cTJO")},cTJO:function(n,t,e){"use strict";var r=e("/GRZ"),o=e("i2R6"),a=e("48fX"),i=e("tCBg"),s=e("T0f4");function u(n){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=s(n);if(t){var o=s(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return i(this,e)}}var c=e("AroE"),f=e("7KCV");t.__esModule=!0,t.default=void 0;var l,p=f(e("q1tI")),h=e("QmWs"),d=e("g/15"),v=c(e("nOHt")),g=e("elyg");function m(n){return n&&"object"===typeof n?(0,d.formatWithValidation)(n):n}var y=new Map,b=window.IntersectionObserver,w={};function k(){return l||(b?l=new b((function(n){n.forEach((function(n){if(y.has(n.target)){var t=y.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(l.unobserve(n.target),y.delete(n.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(n){a(e,n);var t=u(e);function e(n){var o;return r(this,e),(o=t.call(this,n)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(n){var t=null,e=null,r=null;return function(o,a){if(r&&o===t&&a===e)return r;var i=n(o,a);return t=o,e=a,r=i,i}}((function(n,t){return{href:(0,g.addBasePath)(m(n)),as:t?(0,g.addBasePath)(m(t)):t}})),o.linkClicked=function(n){var t=n.currentTarget,e=t.nodeName,r=t.target;if("A"!==e||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,s=a.as;if(function(n){var t=(0,h.parse)(n,!1,!0),e=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===e.protocol&&t.host===e.host}(i)){var u=window.location.pathname;i=(0,h.resolve)(u,i),s=s?(0,h.resolve)(u,s):i,n.preventDefault();var c=o.props.scroll;null==c&&(c=s.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](i,s,{shallow:o.props.shallow}).then((function(n){n&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==n.prefetch,o}return o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var n=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),e=t.href,r=t.as,o=(0,h.resolve)(n,e);return[o,r?(0,h.resolve)(n,r):o]}},{key:"handleRef",value:function(n){var t=this;this.p&&b&&n&&n.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(n,t){var e=k();return e?(e.observe(n),y.set(n,t),function(){try{e.unobserve(n)}catch(t){console.error(t)}y.delete(n)}):function(){}}(n,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(n){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],n).catch((function(n){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var n=this,t=this.props.children,e=this.formatUrls(this.props.href,this.props.as),r=e.href,o=e.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){n.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),n.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||n.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),e}(p.Component);t.default=x},jy8j:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e("q1tI"),o=e.n(r),a=e("YFqc"),i=e.n(a),s=e("wLTh"),u=e("h4VS"),c=e("5D9J"),f=e("AtI2");function l(){var n=Object(u.a)(["\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 5px 20px;\n  font-family: ",";\n  background: ",";\n  border-radius: 50px;\n  color: #f7f7ff;\n"]);return l=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 0 0;\n"]);return p=function(){return n},n}function h(){var n=Object(u.a)(["\n  list-style: none;\n  padding: 0;\n  cursor: pointer;\n\n  > li {\n    background: ",";\n    box-shadow: ",";\n    border-radius: 25px;\n    margin: 30px 0;\n    padding: 30px 30px;\n    transition: background 0.2s linear, box-shadow 0.2s linear;\n\n    &:hover {\n      background: ",";\n      box-shadow: ",";\n    }\n\n    h3 {\n      margin: 0;\n      color: ",";\n      font-weight: 500;\n    }\n\n    p {\n      &:first-of-type {\n        font-size: 12px;\n        margin: 0 0 5px;\n        opacity: 0.7;\n      }\n\n      color: ",";\n      margin: 0;\n    }\n  }\n"]);return h=function(){return n},n}var d={html:{background:"#00BBF9"},css:{background:"#00F5D4"},javascript:{background:"#FEE020"},ruby:{background:"#F15BB5"}},v=c.a.ul(h(),(function(n){return n.theme.posts.item}),(function(n){return n.theme.posts.itemShadow}),(function(n){return n.theme.posts.itemHover}),(function(n){return n.theme.posts.itemHoverShadow}),(function(n){return n.theme.posts.itemTitleColor}),(function(n){return n.theme.textLight})),g=c.a.ul(p()),m=c.a.li(l(),f.b.sansSerif,(function(n){var t=n.tag;return d[t].background})),y=o.a.createElement,b=function(n){var t=n.posts,e=Object(s.b)();return y(v,{theme:e},t.map((function(n){return y(o.a.Fragment,{key:n.slug},y(i.a,{href:"/posts/[slug]",as:"".concat("/nicolasthy.next.js","/posts/").concat(n.slug)},y("li",null,y("h3",null,n.data.title),y("p",null,y("time",null,new Date(n.data.created_at).toLocaleDateString("en",{month:"long",day:"numeric"})),y("small",null," - "),y("span",null,n.readingTime," min read ",y("small",null,"\u2615\ufe0f"))),y("p",null,n.excerpt),y(g,null,n.data.tags&&n.data.tags.map((function(n,t){return y(m,{key:t,tag:n},n)}))))))})))}}},[["52dC",0,2,6,1,3,4,5]]]);