(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{56:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(29),i=s.n(c),r=s(8),o=s(2),l=s(17),j=s.n(l),m=s(30),d=s(11),u=s(12),b=s(14),h=s(13),p=s(31),v=s.n(p),O=(s(56),s(1));var x=function(e){var t=e.id,s=e.year,a=e.title,n=e.summary,c=e.poster,i=e.genres;return Object(O.jsx)(r.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:c,genres:i}},children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:c,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:a}),Object(O.jsx)("h5",{className:"movie__year",children:s}),Object(O.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__summary",children:[n.slice(0,150),"..."]})]})]})})},_=(s(63),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(j.a.mark((function t(){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));s(64);var g=function(e){return console.log(e),Object(O.jsx)("div",{className:"about__container",children:"About this page : I built this page as I like to watch movies."})},f=(s(65),function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){if(this.props.location.state){var e=this.props.location.state,t=e.title,s=e.year,a=e.summary,n=e.poster,c=e.genres;return Object(O.jsx)("section",{className:"details__container",children:Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("div",{className:"details__left",children:Object(O.jsx)("img",{src:n,alt:t,title:t})}),Object(O.jsxs)("div",{className:"details_right",children:[Object(O.jsx)("p",{className:"detail_title",children:t}),Object(O.jsx)("p",{className:"detail_year",children:s}),Object(O.jsx)("ul",{className:"detail__genres",children:c.map((function(e,t){return Object(O.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(O.jsx)("p",{className:"detail__summary",children:a})]})]})})}return null}}]),s}(n.a.Component));s(66);var y=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(r.b,{to:"/",children:"Home"}),Object(O.jsx)(r.b,{to:"/about",children:"About"})]})};s(67);var N=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(O.jsx)(o.a,{path:"/about",component:g}),Object(O.jsx)(o.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.894ee8a2.chunk.js.map