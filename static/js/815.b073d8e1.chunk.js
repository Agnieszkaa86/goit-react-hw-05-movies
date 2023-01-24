"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[815],{815:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r,c,a,s=t(439),o=t(791),i=t(689),u=t(234),l=t(87),p=t(168),d=t(444),v=d.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n"]))),h=d.ZP.div(c||(c=(0,p.Z)(["\n  margin-left 25px\n  "]))),f=t(975),x=t(184),g=function(e){var n=e.movie,t=(0,i.TH)(),r=n.title,c=n.overview,a=n.vote_average,s=n.genres,u=n.poster_path;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(v,{children:[(0,x.jsxs)("div",{children:[!u&&(0,x.jsx)("img",{src:"https://placehold.co/500x750",alt:"just placeholder"}),u&&(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u),alt:"".concat(r," movie poster")})]}),(0,x.jsxs)(h,{children:[(0,x.jsx)("h1",{children:r}),(0,x.jsxs)("p",{children:["User Score: ",(10*a).toFixed(0),"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:c}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("p",{children:null===s||void 0===s?void 0:s.map((function(e){return e.name+", "}))})]})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"cast",state:t.state,children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(l.rU,{to:"reviews",state:t.state,children:"Reviews"})})]}),(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(f.Z,{}),children:(0,x.jsx)(i.j3,{})})]})]})},m=t(61),j=d.ZP.button(a||(a=(0,p.Z)(["\n  margin-bottom: 25px;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;\n  box-sizing: border-box;\n  color: #121212;\n  cursor: pointer;\n  display: inline-flex;\n  flex: 1 1 auto;\n  font-family: Inter, sans-serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  justify-content: center;\n  outline: none;\n  padding: 0.5rem 0.5rem;\n  text-align: center;\n  text-decoration: none;\n  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  &:hover {\n    box-shadow: #FF0000 0 0 0 3px, transparent 0 0 0 0;\n  }\n"]))),b=function(){var e,n,t=(0,i.s0)(),r=(0,i.TH)(),c=(0,o.useState)({}),a=(0,s.Z)(c,2),l=a[0],p=a[1],d=(0,i.UO)().movieId,v=null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,o.useEffect)((function(){u.Z.fetchMovieById(d,p)}),[d]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(j,{onClick:function(){t(v,{replace:!0})},children:[(0,x.jsx)(m.PjY,{})," Go back"]}),(0,x.jsx)(g,{movie:l})]})}},234:function(e,n,t){var r=t(861),c=t(757),a=t.n(c),s=t(263),o="e31c232cf532b70b960b6c4d5d67c018",i="https://api.themoviedb.org/3/",u=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",n(t.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",t(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(n,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",t(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),h={fetchTrending:u,fetchMovieById:l,fetchMovieCastById:p,fetchMovieReviewsById:d,fetchMovieByQuery:v};n.Z=h}}]);
//# sourceMappingURL=815.b073d8e1.chunk.js.map