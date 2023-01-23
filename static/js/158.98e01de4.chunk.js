"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[158],{5130:function(e,n,t){t(2791);var r=t(7689),a=t(1087),c=t(184);n.Z=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})})}},7158:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c=t(9439),o=t(5130),i=t(2791),s=t(1087),u=t(7689),l=t(4234),p=t(168),v=t(6444),f=v.ZP.button(r||(r=(0,p.Z)(["\n  margin-left: 5px;\n  align-items: center;\n  background-color: #e9e9e9;\n  border-radius: 3px;\n  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;\n  box-sizing: border-box;\n  color: #121212;\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle; \n  vertical-align: text-bottom;\n  flex: 1 1 auto;\n  font-family: Inter, sans-serif;\n  font-size: 1rem;\n  font-weight: 700;\n  justify-content: center;\n  line-height: 1;\n  outline: none;\n  padding: 1.1rem 1.2rem;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;\n  white-space: nowrap;\n  border: 0.2;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    box-shadow: #121212 0 0 0 2px, transparent 0 0 0 0;\n  }\n"]))),d=v.ZP.input(a||(a=(0,p.Z)(["\n  font-size: 2rem;\n  border-radius: 3px;\n  padding: 0.4rem 0.5rem;\n  vertical-align: middle; \n  vertical-align: text-bottom;\n\n"]))),h=t(184),m=function(){var e=(0,i.useState)([]),n=(0,c.Z)(e,2),t=n[0],r=n[1],a=(0,s.lr)(),p=(0,c.Z)(a,2),v=p[0],m=p[1],x=v.get("query");(0,i.useEffect)((function(){null!==x?l.Z.fetchMovieByQuery(x,r):r([])}),[x]);var g=(0,u.UO)();return(0,h.jsxs)(h.Fragment,{children:[!g.movieId&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.currentTarget,t=n.elements.query.value;""!==t&&(m({query:t}),n.reset())},children:[(0,h.jsx)(d,{type:"text",name:"query"}),(0,h.jsx)(f,{type:"submit",children:"Search Movies"})]}),(0,h.jsx)(o.Z,{movies:t})]}),g.movieId&&(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.j3,{})})]})}},4234:function(e,n,t){var r=t(5861),a=t(7757),c=t.n(a),o=t(3263),i="e31c232cf532b70b960b6c4d5d67c018",s="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",n(t.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(s,"search/movie?api_key=").concat(i,"&query=").concat(n,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",t(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),d={fetchTrending:u,fetchMovieById:l,fetchMovieCastById:p,fetchMovieReviewsById:v,fetchMovieByQuery:f};n.Z=d}}]);
//# sourceMappingURL=158.98e01de4.chunk.js.map