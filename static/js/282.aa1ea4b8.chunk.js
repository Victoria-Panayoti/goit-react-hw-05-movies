"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[282],{282:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),u=r(757),c=r.n(u),o=r(87),s=r(689),i=r(791),p=r(22),f=r(184),l=function(e){var t=e.onSubmit,r=(0,i.useState)(""),n=(0,a.Z)(r,2),u=n[0],c=n[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(u.toLowerCase().trim()),t(u),c("")},children:[(0,f.jsx)("input",{name:"search",type:"text",value:u,placeholder:"Search movies",required:!0,autoFocus:!0,autoComplete:"off",onChange:function(e){c(e.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},v=function(e){var t=e.movies,r=e.location;return(0,f.jsx)("ul",{children:t.map((function(e){var t=e.id,n=e.title;return(0,f.jsx)("li",{children:(0,f.jsx)(o.Link,{to:"/movies/".concat(t),state:{from:r},children:n})},t)}))})},h=function(){var e=(0,o.useSearchParams)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,i.useState)([]),m=(0,a.Z)(h,2),d=m[0],x=m[1],w=(0,s.TH)();(0,i.useEffect)((function(){var e,t=null!==(e=r.get("query"))&&void 0!==e?e:"",a=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.bI)(t);case 3:r=e.sent,x(r.results),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),x([]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();a()}),[r]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{onSubmit:function(e){u({query:e})}}),(0,f.jsx)(v,{movies:d,location:w})]})}},22:function(e,t,r){r.d(t,{Y5:function(){return i},bI:function(){return s},oO:function(){return f},wr:function(){return o},y:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";c.Z.defaults.params={api_key:"adda9a4c76497ae7ac6c1263f748732e"};var o=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/movie/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?query=".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=282.aa1ea4b8.chunk.js.map