"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[353],{930:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var i=t(152),r=t(791),s=t(504),a=t(871),c=t(635),o="MovieDetailsView_movie_container__46P73",l="MovieDetailsView_photo_container__zP4OP",u="MovieDetailsView_poster__4o6ze",h="MovieDetailsView_back_btn__qBLFU",d=t(184),p=(0,r.lazy)((function(){return t.e(81).then(t.bind(t,459))})),v=(0,r.lazy)((function(){return t.e(176).then(t.bind(t,669))}));function f(){var e=(0,a.TH)().pathname,n=(0,a.UO)().movieId,t=(0,r.useState)(null),f=(0,i.Z)(t,2),x=f[0],m=f[1],j=(0,a.s0)();return(0,r.useEffect)((function(){c.Y5(n).then(m)}),[n]),x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:h,onClick:function(){var e=window.sessionStorage.getItem("prevRoute");j(null!==e&&void 0!==e?e:"/")},children:"\u2190 Go back"}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500"+x.poster_path,alt:x.title})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:x.title}),(0,d.jsxs)("p",{children:["User score: ",x.vote_average]}),(0,d.jsx)("h4",{children:"Overview"}),(0,d.jsx)("p",{children:x.overview}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("p",{children:x.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information:"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:e.split("/").slice(0,3).join("/")+"/cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:e.split("/").slice(0,3).join("/")+"/reviews",children:"Reviews"})})]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(d.Fragment,{children:"loading..."}),children:(0,d.jsxs)(a.Z5,{children:[(0,d.jsx)(a.AW,{path:"cast",element:(0,d.jsx)(p,{})}),(0,d.jsx)(a.AW,{path:"reviews",element:(0,d.jsx)(v,{})})]})})]})}},635:function(e,n,t){t.d(n,{Ai:function(){return p},Hx:function(){return d},Tg:function(){return l},Y5:function(){return u},xc:function(){return h}});var i=t(861),r=t(757),s=t.n(r),a="12e65dbf8f6231388c10338e98f45dbb";function c(){return o.apply(this,arguments)}function o(){return o=(0,i.Z)(s().mark((function e(){var n,t,i,r=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(n,t);case 4:if(!(i=e.sent).ok){e.next=11;break}return e.next=8,i.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function l(){return c("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a))}function u(e){return c("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=en-US"))}function h(e){return c("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=en-US"))}function d(e){return c("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US"))}function p(e){return c("\n  https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=movie-details-view.c5fdf914.chunk.js.map