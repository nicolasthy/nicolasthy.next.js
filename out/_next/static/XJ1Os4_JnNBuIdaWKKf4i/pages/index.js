(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{RXBc:function(n,t,r){"use strict";r.r(t);var e=r("ln6h"),a=r.n(e),o=r("rt45"),i=r("q1tI"),c=r.n(i),s=r("qKvR"),u=r("5D9J"),l=r("wLTh"),p=r("YFqc"),f=r.n(p),d=r("jy8j"),b=r("qMHi");c.a.createElement;function g(){var n=Object(o.a)(['\n  display: flex;\n  font-family: "Poppins", sans-serif;\n\n  a {\n    text-decoration: none;\n    color: ',";\n  }\n\n  svg {\n    margin-left: 15px;\n    opacity: 0.3;\n    transform: translateX(0) scale(0.9);\n    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  }\n\n  &:hover {\n    a {\n      color: ",";\n    }\n    svg {\n      transform: translateX(10px) scale(1);\n    }\n  }\n"]);return g=function(){return n},n}function m(){var n=Object(o.a)(["\n          display: flex;\n          align-items: center;\n\n          h2 {\n            margin-right: 25px;\n          }\n        "]);return m=function(){return n},n}var h=function(n){var t=Object(l.b)();return Object(s.c)(c.a.Fragment,null,Object(s.c)("div",{css:Object(s.b)(m())},Object(s.c)("h2",null,"Writings"),Object(s.c)(v,{theme:t},Object(s.c)(f.a,{href:"/posts",as:"posts"},Object(s.c)("a",null,Object(s.c)("span",null,"View all"),Object(s.c)("svg",{width:"19",height:"12",xmlns:"http://www.w3.org/2000/svg"}," ",Object(s.c)("g",{stroke:"currentColor",strokeWidth:"2",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}," ",Object(s.c)("path",{d:"M1 6h16.429M12.429 1l5 5-5 5"})," ")," "))))),Object(s.c)(d.a,{posts:n.posts}))};h.getInitialProps=function(){var n;return a.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.b)(3),t.abrupt("return",{posts:n});case 2:case"end":return t.stop()}}))};var v=u.a.div(g(),(function(n){return n.theme.textLight}),(function(n){return n.theme.text}));t.default=h},jy8j:function(n,t,r){"use strict";var e=r("q1tI"),a=r.n(e),o=r("YFqc"),i=r.n(o),c=r("wLTh"),s=r("rt45"),u=r("5D9J"),l=r("AtI2");function p(){var n=Object(s.a)(["\n  text-transform: uppercase;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 5px 20px;\n  font-family: ",";\n  background: ",";\n  border-radius: 50px;\n  color: #f7f7ff;\n"]);return p=function(){return n},n}function f(){var n=Object(s.a)(["\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 15px 0 0 0;\n"]);return f=function(){return n},n}function d(){var n=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n  cursor: pointer;\n\n  > li {\n    background: ",";\n    box-shadow: ",";\n    border-radius: 25px;\n    margin: 20px 0;\n    padding: 25px 25px;\n    transition: background 0.2s linear, box-shadow 0.2s linear;\n\n    &:hover {\n      background: ",";\n      box-shadow: ",";\n    }\n\n    h3 {\n      margin: 0;\n      color: ",";\n      font-weight: 500;\n    }\n\n    p {\n      &:first-of-type {\n        margin: 0 0 5px;\n        opacity: 0.7;\n      }\n\n      color: ",";\n      margin: 0;\n    }\n  }\n"]);return d=function(){return n},n}var b={html:{background:"rgba(1, 55, 162, 1)",border:"rgba(1, 55, 162, 1)"},css:{background:"rgba(1, 55, 162, 1)",border:"rgba(1, 55, 162, 1)"},javascript:{background:"rgba(248, 179, 25, 1)",border:"rgba(248, 179, 25, 1)"},ruby:{background:"rgba(255, 49, 91, 1)",border:"rgba(255, 49, 91, 1)"}},g=u.a.ul(d(),(function(n){return n.theme.posts.item}),(function(n){return n.theme.posts.itemShadow}),(function(n){return n.theme.posts.itemHover}),(function(n){return n.theme.posts.itemHoverShadow}),(function(n){return n.theme.posts.itemTitleColor}),(function(n){return n.theme.textLight})),m=u.a.ul(f()),h=u.a.li(p(),l.b.sansSerif,(function(n){var t=n.tag;return b[t].background}));r.d(t,"a",(function(){return w}));var v=a.a.createElement,w=function(n){var t=n.posts,r=Object(c.b)();return v(g,{theme:r},(console.log(t),t.map((function(n){return v(a.a.Fragment,{key:n.slug},v(i.a,{href:"/posts/[slug]",as:"/posts/".concat(n.slug)},v("li",null,v("h3",null,n.data.title),v("p",null,v("time",null,new Date(n.data.created_at).toLocaleDateString("en",{month:"long",day:"numeric"})),v("small",null," - "),v("span",null,n.readingTime," min read ",v("small",null,"\u2615\ufe0f"))),v("p",null,n.excerpt),v(m,null,n.data.tags&&n.data.tags.map((function(n,t){return v(h,{key:t,tag:n},n)}))))))}))))}},vlRD:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RXBc")}])}},[["vlRD",1,0]]]);