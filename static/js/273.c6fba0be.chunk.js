"use strict";(self.webpackChunkaston_project=self.webpackChunkaston_project||[]).push([[273],{1163:(e,a,t)=>{t.d(a,{i:()=>L});var s=t(7689),i=t(1694),n=t.n(i),o=t(6809),r=t(3828),l=t(8951),c=t(4371);const d="MovieCard_movieCard__VPJIl",v="MovieCard_lightCard__VMIbE",_="MovieCard_movieCard_info__2Woee",g="MovieCard_moviePoster__Ul4WQ",m="MovieCard_movieInfo_name__H19ae",u="MovieCard_movieInfo_description__StlM7",p="MovieCard_movieInfo_btn__gD-WT";var h=t(184);const C=e=>{let{movieData:a}=e;const t=(0,o.u)(v),{isAuth:i}=(0,c.a)(),C=(0,s.s0)(),b=()=>C("/movie/".concat(a.imdbID)),{isFavorite:j,toggleIsFavorite:f,isLoading:x}=(0,l.s)(a.imdbID);return(0,h.jsxs)("div",{className:n()(d,t),children:[(0,h.jsx)("img",{className:g,src:a.Poster,onClick:b}),(0,h.jsxs)("div",{className:n()(_),children:[(0,h.jsx)("h2",{className:n()(m,t),onClick:b,children:a.Title}),(0,h.jsxs)("p",{className:u,children:[(0,h.jsx)("b",{children:"\u0413\u043e\u0434:"})," ",a.Year]}),(0,h.jsx)("div",{className:p,children:i&&(0,h.jsx)(r._,{handleClick:f,isActive:j,isLoading:x})})]})]})};var b=t(1087),j=t(6048),f=t.n(j);const x="Pagination_wrapper__SMduL",N="Pagination_button__PRU9J",w="Pagination_active__HFgty",I="Pagination_disabled__GNrqk",k=e=>{let{totalPages:a,page:t}=e;const[s,i]=(0,b.lr)();return(0,h.jsx)(f(),{onPageChange:e=>{let{selected:a}=e;const t=String(a+1)||"1";s.set("page",t),i(s)},pageRangeDisplayed:5,pageCount:a,forcePage:t-1,renderOnZeroPageCount:null,previousLabel:"\u041d\u0430\u0437\u0430\u0434",nextLabel:"\u0412\u043f\u0435\u0440\u0435\u0434",containerClassName:x,pageClassName:N,breakClassName:N,previousClassName:N,nextClassName:N,activeLinkClassName:w,disabledLinkClassName:I})},P="MovieCards_cardsBlock__-wLI4",L=e=>{let{moviesData:a,totalResults:t,page:s}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:P,children:a&&a.map((e=>(0,h.jsx)(C,{movieData:e},e.imdbID))).reverse()}),t&&s&&(0,h.jsx)(k,{page:s,totalPages:t/10})]})}},3828:(e,a,t)=>{t.d(a,{_:()=>g});var s,i=t(2791);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},n.apply(this,arguments)}function o(e,a){let{title:t,titleId:o,...r}=e;return i.createElement("svg",n({height:32,viewBox:"0 0 24 24",fill:"",width:32,xmlns:"http://www.w3.org/2000/svg",ref:a,"aria-labelledby":o},r),t?i.createElement("title",{id:o},t):null,s||(s=i.createElement("path",{d:"M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"})))}const r=i.forwardRef(o);t.p;var l=t(5654);const c="FavoriteButton_favBtn__00mzt",d="FavoriteButton_favoriteIcon__GsBoh",v="FavoriteButton_favoriteIcon__active__48bqv";var _=t(184);const g=e=>(0,_.jsx)("div",{className:c,children:e.isLoading?(0,_.jsx)(l.a,{}):(0,_.jsx)(r,{onClick:e.handleClick,className:e.isActive?v:d})})},8951:(e,a,t)=>{t.d(a,{s:()=>o});var s=t(2791),i=t(6579),n=t(4084);const o=e=>{const[a,t]=(0,s.useState)(!1),o=(0,i.T)(),r=(0,i.C)((a=>a.favoritesReducer.favorites.some((a=>a.imdbID===e))));return{isFavorite:r,toggleIsFavorite:async()=>{t(!0),r?await o((0,n.wy)(e)):await o((0,n.wF)(e)),t(!1)},isLoading:a}}},7273:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var s=t(1087),i=t(5048),n=t(1163),o=t(713),r=t(5912),l=t(5070),c=t(184);const d=()=>{const[e]=(0,s.lr)(),a=Number(e.get("page"))||1,{data:t,isLoading:d,isFetching:v}=(0,o.U9)(a),_=(0,i.v9)(l.eb);return d||_||v?(0,c.jsx)(r.p,{}):t&&(0,c.jsx)(n.i,{moviesData:t.Search,totalResults:Number(t.totalResults),page:a})}}}]);
//# sourceMappingURL=273.c6fba0be.chunk.js.map