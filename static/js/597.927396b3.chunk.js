"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{3597:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),c=r(7757),u=r.n(c),s=r(2791),o=r(7689),i=r(6795),p=(r(5462),r(1022)),f=r(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],l=r[1];return(0,s.useEffect)((function(){if(e){var t=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.y)(t);case 3:r=e.sent,l(r.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i.Am.error("Smthg went wrong, we re so sorry.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();t(e)}}),[e]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Cast"}),c.length>0?(0,f.jsx)("ul",{children:c.map((function(e){var t=e.id,r=e.name,n=e.character,a=e.profile_path;return(0,f.jsxs)("li",{children:[a?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:r}):(0,f.jsx)("img",{src:"/src/components/not-found.jpg",alt:r}),(0,f.jsx)("p",{children:r}),(0,f.jsx)("p",{children:n})]},t)}))}):(0,f.jsx)("p",{children:"We didn't have any result"})]})}},1022:function(e,t,r){r.d(t,{Y5:function(){return i},bI:function(){return o},oO:function(){return f},wr:function(){return s},y:function(){return p}});var n=r(5861),a=r(7757),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";u.Z.defaults.params={api_key:"adda9a4c76497ae7ac6c1263f748732e"};var s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/search/movie?query=".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.927396b3.chunk.js.map