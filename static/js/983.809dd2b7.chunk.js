"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{5130:function(e,t,n){n(2791);var r=n(7689),c=n(1087),a=n(184);t.Z=function(e){var t=e.movies,n=(0,r.TH)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title;return(0,a.jsx)("li",{children:(0,a.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})})}},3983:function(e,t,n){n.r(t);var r=n(9439),c=n(2791),a=n(4234),u=n(5130),o=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,c.useEffect)((function(){a.Z.fetchTrending(s)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(u.Z,{movies:n})]})}},4234:function(e,t,n){var r=n(5861),c=n(7757),a=n.n(c),u=n(3263),o="e31c232cf532b70b960b6c4d5d67c018",s="https://api.themoviedb.org/3/",i=function(){var e=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",t(n.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.cast));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(t,"&page=1&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",n(r.data.results));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),h={fetchTrending:i,fetchMovieById:p,fetchMovieCastById:v,fetchMovieReviewsById:f,fetchMovieByQuery:l};t.Z=h}}]);
//# sourceMappingURL=983.809dd2b7.chunk.js.map