"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(A,n,r){r.r(n),r.d(n,{default:function(){return E}});var e,t,c,a=r(5861),s=r(9439),u=r(7757),o=r.n(u),i=r(2791),p=r(7689),l=r(6795),f=(r(5462),r(1022)),d=r(8025),x=r(168),v=r(6444),g=v.ZP.ul(e||(e=(0,x.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),Q=v.ZP.li(t||(t=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  gap: 4px;\n  width: 120px;\n  border-radius: 4px;\n  background-color: #e7dfdf;\n"]))),k=v.ZP.img(c||(c=(0,x.Z)(["\n  display: block;\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),w=r(184),E=function(){var A=(0,p.UO)().movieId,n=(0,i.useState)([]),r=(0,s.Z)(n,2),e=r[0],t=r[1];return(0,i.useEffect)((function(){if(A){var n=function(){var A=(0,a.Z)(o().mark((function A(n){var r;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,f.y)(n);case 3:r=A.sent,t(r.cast),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),l.Am.error("Smthg went wrong, we re so sorry.");case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(n){return A.apply(this,arguments)}}();n(A)}}),[A]),(0,w.jsxs)("div",{children:[(0,w.jsx)("h2",{children:"Cast"}),e.length>0?(0,w.jsx)(g,{children:e.map((function(A){var n=A.id,r=A.name,e=A.character,t=A.profile_path;return(0,w.jsxs)(Q,{children:[t?(0,w.jsx)(k,{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:r}):(0,w.jsx)(k,{src:d,alt:r}),(0,w.jsx)("p",{children:r}),(0,w.jsxs)("p",{children:["Character: ",e]})]},n)}))}):(0,w.jsx)("p",{children:"We didn't have any result"})]})}},1022:function(A,n,r){r.d(n,{Y5:function(){return o},bI:function(){return u},oO:function(){return p},wr:function(){return s},y:function(){return i}});var e=r(5861),t=r(7757),c=r.n(t),a=r(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3";a.Z.defaults.params={api_key:"adda9a4c76497ae7ac6c1263f748732e"};var s=function(){var A=(0,e.Z)(c().mark((function A(){var n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("trending/movie/day");case 3:return n=A.sent,A.abrupt("return",n.data);case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}(),u=function(){var A=(0,e.Z)(c().mark((function A(n){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/search/movie?query=".concat(n));case 3:return r=A.sent,A.abrupt("return",r.data);case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(n){return A.apply(this,arguments)}}(),o=function(){var A=(0,e.Z)(c().mark((function A(n){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(n));case 3:return r=A.sent,A.abrupt("return",r.data);case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(n){return A.apply(this,arguments)}}(),i=function(){var A=(0,e.Z)(c().mark((function A(n){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(n,"/credits"));case 3:return r=A.sent,A.abrupt("return",r.data);case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,e.Z)(c().mark((function A(n){var r;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(n,"/reviews"));case 3:return r=A.sent,A.abrupt("return",r.data);case 7:A.prev=7,A.t0=A.catch(0),console.log(A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(n){return A.apply(this,arguments)}}()},8025:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIAOkA2AMBIgACEQEDEQH/xAAvAAEAAgIDAQAAAAAAAAAAAAAABgcFCAIDBAEBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAC/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNxpJGNyJ9AAAAAAAAAAKOJRX03tMo7N2sKPwmxfwrmx6fxBe4AAAAAAAAK06IPsUGAwZN+nXKRF4+LXjEGcmMwmNVxZGumxcAAAAAAAMXlIoV3d9V2oa7WLANgrIXgYDgzL2hAdhF122J192CSkrZr+UyysAAAAAADEZcUndeu2xRr5eVEQyznK/T6V9t3UmjE7Ba77EFJ2rRmxQAAAAAAABWPltfX4x15wS2jF9uQGP6sqPNXnOHkptAAAAAAAAAAKshew/wAKby0yw5D43dedKstQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADz8T1OHWd750HocRyfPOelhu4ybE9hkni7T0AAAAAYnLcSIdc0+kK7ZdyIT65V9Iv4pmMV9yoj3nlIhXvkwieYyfIAAA//xAA0EAABBAEDAQUHAgYDAAAAAAAEAQIDBQYABxIRExQWFzAQFSEiN0BVICMkJTJCVHAxUVL/2gAIAQEAAQwA/wBkddE3NQHyaXYjQKmZ4fy4rfC6EuKgxWoJZCyL9r11lG5dRRPkGGb301Idzc0+dXvDDC2WF/rPuJHv8n8a4dO8m9TdlhnIr6+3kY5YdzsL+ZHvMDxXcunvVjFKTuZqfZLrOM5LML8O48qvlxDbQCnRhlo1CT0T9CprcPB6FQCruKWMCfbrcV/axUtzP1RPsdy8qWjqEGFk6GbbYelQA2yMi/j/AGSTQxN6yyMYnfQ/8uDUUsMrOUUjHpZ2oVSDMYbOkUD3Xm5l7xZ1GrM025A8PwvphuBO2mVre06iFydTPXXQzfGm5cj3fOEiausno6FIVtDkhVN0MF/LS6OUncXNXjCFvYB5LL+eTQMhO3eZJAUTJKDfZMuW3cSHm9wq8NPxOav7njxDHsVOWiU8F7lxvb8gfr3Zncaa0MRei7LAIgducqfNrcMaMvcSqDn6rF5V4X/gz6Dp8UwoYs5iINH5vYv2/DsTOEiW25eRc2Q9gA3arDURqKIQq7fQMC3FtRIOqQ63qARQ6g7h0fSGuPpqstXcl9bOuvhC/wCmtoeHhgn/AL1m/wBT6P2bm2KHZfBWlErCDVUK5hc9lVgoDW4DITj2en0HbLJBrCfqfe+zeDgmMw6wXl4QoOvr34ffqOzFRvJdlj2vBtwnO+Os3+p9Hq0sw6kGY06dI4MgJs8vtLO5DqpFgqd0BKaljrgKBkU+22N2T7InKLZj2S6wn6n3ns3pOSMCnCRfnoRO40dUKreK+suq1Vw3cuaB/wAgnXW5b5q3OKqyfA9YsrzInJTY3k9YQqfdWipgIQQsckbF5u0PLn4UZ2nnmN+CfrzzG/BP1tnJJZ53a2UcSpEurJUzLcuGBnxD+w3QxSW5qo7AVnUvC9wQJsfn98GJETNJeblXrY40fBWV2J0AAcQsNWMrPcVL+JD06kof7agPTqSh/tqA9e4qX8SHqAQURnCCCKFu42Xspa1QRZf5htfir6erU8tnQv7BU1uJt68aQi6qIusG2+WY7NXi1DIogSv0ddZluLX0MTxQ3MJsMLws+4sEyTIub9J9nlm19ZcueXXK0IuK63Jwv9o0R5QoO9NU9jUMqCWL5t4hw69TdG71VcbU7nUkyq+53IzH9kER4ouKbX1lO5hVgrDC/tVRrvguj8Yxqxe95VKG93l1hXLr7ig0FjGOAK14lKFE/wDp+Df9nK7UBMM6ktYupjRRlXtpkZpsjV+LXN1KRDBG+aV6JGjmO/4dphcKkyDo79xXa5t/9JpF084KIlgskqdv7/q+EjllnY5LqsSRze9JyddVrWQufLKzUtqBFJPG+dO0Zag8Q+JTU0GeMXC6YaVJGeldAPOA7KNkT3k41PMpEjHDtmnxkkrvTyGBdo/Gp3ySy8B2KVjna98jhgEjinxouftUY4WDUVGSw6AtGCQofSllTGS8Rmq7F5ZZXySsDYgVYyAJwz1VrSoDHngzQxDuinrDVDnRvd5Zfddkr+E8QREE+PWEzI+ssPWOmNElnlgN7xoTHCR1Ak94r1qYjR2FIRFAz1U9iexNLpPQT9X/xAA6EAACAQIDAgkJCAMAAAAAAAABAgMAEQQSITFREBMiQEFhYnFzFCAyQlKRk7PRMGNwcnSBodJQksH/2gAIAQEADT8A/Ekbc8gBr89HYFkB5uu1VNo4+p2o9o4aK3cOW9boYwv8vmrvFbpkBpe2cRF7jZ1ptisbxynsNzR34qWaLUux9SOtuuscJ85NT0Ryn+9NZMNiXPujfmWMBVT0xRja9YpPgxnh2XY2F68RfrW9SCL1GLk76w794i+sprAR7B6c6Vg7Kx6ZYvUfmOEYtvHFQGw97cEt8i5GdjbcqA1+mm/pSIeKcg2SJBq+Xe5rwKdOWUBtLG49LJvDUjHIMrPkXeQgN5GqActcjI/5mzAE8GLYN1cViTY+5uYQ4SV1PWBpRljgHcgz8EseDifueQ1+okpgBJLLIXJtsUXr2+KqC6Z7X4qP/sjVbVjO9RJjIkHZSUcCyyQfs656lwkTt3ka/b+RtXlknBfA/OPBhBFnbxBnd6g0eTaQnbb1pWqRpo+8wjOj8F8d84cHlkdeRr9vLhZVXvI0pJo5viLwXwPzjUYuSf4UdZqNEVzEmYqiiwL9qk+9upf2jU2cwhxldjN6UnBfHfOHA80k57o1qHCxKw6wNeYYtigOwCPEHMnAkWGlXtmFyStRPePDIwJX6saT79btXt8ZFevHWvHWnixEj9jj3BUcGEcITtGSA535jhASV6XhrARDOz7Zk6GG9qwx/aH6yGoktmkiV2brYkV4KV4KV4KV4KVe+VFCisSpC22wodr1jACFO1IhsHMmJefDgXMW90pPUJ0nPtB/O9gG6RdbmncTRRSCxlPqs25OaNqU2wyGk2FwZV+Ilb4Skq14FdBmKRLT9KXiX4j0uoFrQxnm59cxLnrvehscRDP/ALfihDKYmvpqACbUInlN/YT0jRFx3UilmbcoFyaIv+1JGrndZiRp16eY8bOsYuWKp02HRSWur4aZH5QJ0VkBPokmhGX0DFbBc5s1rXy62BqTNYSQSIQBpchlBVbnaahEZkQAsw402SwUEksRoBWLLCEdLFQSRvBAU3oMyZ11AKmzAH7MMGAkJCAjYTZWvbdTySs8liMwZFCg2GzMtTw4xGOrcX5QBly3XXLUkBVckrgQkx5MgUKAVqXAPBe2Y5iLDTLyQDrT3IliJLxjignEjRbx1FkHk0RYxEAtc+iNRe6mp8OEEjFi8BAIKJyRdWJ1NxRWXJAlykJd4zZOSNoQ3oYySeMRuUCqZM6rpbQdIqLNxjPIyvygVsAEI0rEyyGdXZ1GVhlAVlFxlpMKYYyZXQklMrM6CM6v36CuWAjySMMPmYMChIvIBbY1qdACmIsuc52ZizRoCDroahkUtFZSioA4yISub1taadpEEUjOLMb2OZE2f4H/xAAXEQADAQAAAAAAAAAAAAAAAAABEWAw/9oACAECAQE/AI1bm2//xAAVEQEBAAAAAAAAAAAAAAAAAABgAf/aAAgBAwEBPwA5G3//2Q=="}}]);
//# sourceMappingURL=736.b8d1da49.chunk.js.map