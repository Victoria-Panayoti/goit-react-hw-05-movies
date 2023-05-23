"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[36],{1454:function(n,e,t){t.d(e,{a:function(){return i}});var r,a=t(8402),o=t(168),u=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),c=t(184),i=function(){return(0,c.jsx)(u,{children:(0,c.jsx)(a.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},3654:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a,o=t(168),u=t(6444),c=u.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),i=t(1087),s=(0,u.ZP)(i.Link)(a||(a=(0,o.Z)(["\n  display: block;\n  transition: all 0.3s ease-in-out;\n  &:hover,\n  &:focus {\ncolor: #b60c75;\ntransform: scale(1.1);\n  }\n"]))),l=t(184),p=function(n){var e=n.movies,t=n.location;return(0,l.jsx)(c,{children:e.map((function(n){var e=n.id,r=n.title;return(0,l.jsx)("li",{children:(0,l.jsx)(s,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})}},4036:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,o,u=t(5861),c=t(9439),i=t(7757),s=t.n(i),l=t(1087),p=t(7689),f=t(2791),d=t(6795),v=(t(5462),t(1022)),h=t(1454),m=t(168),x=t(6444),b=x.ZP.form(r||(r=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #e7dfdf;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 16px;\n"]))),g=x.ZP.input(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  font: inherit;\n  font-size: 16px;\n  border-radius: 4px;\n  outline: none;\n  padding: 4px 12px;\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),Z=x.ZP.button(o||(o=(0,m.Z)(["\n  display: inline-block;\n  font: inherit;\n  cursor: pointer;\n  background-color: #cbb8b8;\n  color:#622162;\n  padding: 4px 12px;\n  border-radius: 4px;\n  outline: none;\n  transition: all 0.3s ease-in-out;\n  &:hover {\n    background-color: #622162;\n    color: #cbb8b8;\n  }\n"]))),w=t(184),k=function(n){var e=n.onSubmit,t=(0,f.useState)(""),r=(0,c.Z)(t,2),a=r[0],o=r[1];return(0,w.jsxs)(b,{onSubmit:function(n){if(n.preventDefault(),o(a.toLowerCase().trim()),""===a)return d.Am.warn("input value can not be empty");e(a),o("")},children:[(0,w.jsx)(g,{name:"search",type:"text",value:a,placeholder:"Search movies",required:!0,autoFocus:!0,autoComplete:"off",onChange:function(n){o(n.currentTarget.value)}}),(0,w.jsx)(Z,{type:"submit",children:"Search"})]})},y=t(3654),j=function(){var n=(0,l.useSearchParams)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)([]),o=(0,c.Z)(a,2),i=o[0],m=o[1],x=(0,f.useState)(!1),b=(0,c.Z)(x,2),g=b[0],Z=b[1],j=(0,p.TH)();(0,f.useEffect)((function(){var n,e=null!==(n=t.get("query"))&&void 0!==n?n:"";if(e){Z(!0);var r=function(){var n=(0,u.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.bI)(e);case 3:if(0!==(t=n.sent).results){n.next=6;break}return n.abrupt("return");case 6:m(t.results),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),d.Am.error("Smthg went wrong, we re so sorry."),m([]);case 13:return n.prev=13,Z(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,9,13,16]])})));return function(){return n.apply(this,arguments)}}();r()}}),[t]);return(0,w.jsxs)("div",{children:[(0,w.jsx)(k,{onSubmit:function(n){r({query:n})}}),g&&(0,w.jsx)(h.a,{}),(0,w.jsx)(y.Z,{movies:i,location:j})]})}},1022:function(n,e,t){t.d(e,{Y5:function(){return s},bI:function(){return i},oO:function(){return p},wr:function(){return c},y:function(){return l}});var r=t(5861),a=t(7757),o=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";u.Z.defaults.params={api_key:"adda9a4c76497ae7ac6c1263f748732e"};var c=function(){var n=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/search/movie?query=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("/movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=36.4f25437d.chunk.js.map