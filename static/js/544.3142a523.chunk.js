"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{1454:function(n,e,t){t.d(e,{a:function(){return o}});var r,a=t(8402),c=t(168),u=t(6444).ZP.div(r||(r=(0,c.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),s=t(184),o=function(){return(0,s.jsx)(u,{children:(0,s.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},9544:function(n,e,t){t.r(e);var r=t(5861),a=t(9439),c=t(7757),u=t.n(c),s=t(2791),o=t(7689),i=t(6795),p=(t(5462),t(1022)),f=t(1454),l=t(7398),v=t(184);e.default=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],d=(0,s.useState)(!1),h=(0,a.Z)(d,2),m=h[0],x=h[1],w=(0,o.TH)();return(0,s.useEffect)((function(){x(!0);var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.wr)();case 3:e=n.sent,c(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i.Am.error("Smthg went wrong, we re so sorry.");case 10:return n.prev=10,x(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsx)("div",{children:m?(0,v.jsx)(f.a,{}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Trending today"}),t&&(0,v.jsx)(l.v,{children:t.map((function(n){var e=n.id,t=n.original_title;return(0,v.jsx)("li",{children:(0,v.jsx)(l.F,{to:"movies/".concat(e),state:{from:w},children:t})},e)}))})]})})}},7398:function(n,e,t){t.d(e,{F:function(){return i},v:function(){return o}});var r,a,c=t(168),u=t(6444),s=t(1087),o=u.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),i=(0,u.ZP)(s.Link)(a||(a=(0,c.Z)(["\n  display: block;\n  transition: all 0.3s ease-in-out;\n  &:hover,\n  &:focus {\ncolor: #b60c75;\ntransform: scale(1.1);\n  }\n"])))},1022:function(n,e,t){t.d(e,{Y5:function(){return i},bI:function(){return o},oO:function(){return f},wr:function(){return s},y:function(){return p}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";u.Z.defaults.params={api_key:"adda9a4c76497ae7ac6c1263f748732e"};var s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie?query=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.3142a523.chunk.js.map