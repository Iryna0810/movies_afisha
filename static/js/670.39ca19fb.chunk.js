"use strict";(self.webpackChunkmovies_afisha=self.webpackChunkmovies_afisha||[]).push([[670],{854:function(e,t,r){var n=r(402),a=r(184);t.Z=function(){return(0,a.jsx)(n.VL,{visible:!0,height:"280",width:"280",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]})}},670:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(439),a=r(791),i=r(854),c=r(243),s=function(e){var t=new URLSearchParams({api_key:"2bcb7fdd81c3309c5e646690433e3287"});try{return c.Z.get("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/reviews?").concat(t))}catch(r){throw new Error(r.message)}},o=(r(724),r(184)),u=function(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),r=t[0],c=t[1],u=(0,a.useState)(!1),l=(0,n.Z)(u,2),h=l[0],f=l[1],d=(0,a.useState)(""),v=(0,n.Z)(d,2),p=v[0],w=v[1],g=(0,a.useState)(""),m=(0,n.Z)(g,2),x=m[0],S=m[1];return(0,a.useEffect)((function(){!function(){var e=JSON.parse(window.localStorage.getItem("movieIdKey"));e&&S(e)}(),f(!0),x&&s(x).then((function(e){var t=e.data;c(t.results)})).catch((function(e){return w(e)})).finally((function(){f(!1)}))}),[x]),(0,o.jsxs)("div",{children:[h&&(0,o.jsx)(i.Z,{}),p&&(0,o.jsx)("div",{children:"Something went wrong. Try again later"}),(0,o.jsx)("ul",{children:x&&r.map((function(e){var t=e.author,r=e.content;return(0,o.jsxs)("div",{className:"FilmGallery",children:[(0,o.jsxs)("h3",{children:["Author: ",t]}),(0,o.jsxs)("p",{children:["Review: ",r]})]},t)}))})]})}},724:function(){}}]);
//# sourceMappingURL=670.39ca19fb.chunk.js.map