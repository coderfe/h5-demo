(this["webpackJsonph5-demo"]=this["webpackJsonph5-demo"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);for(var n=a(0),c=a.n(n),l=a(10),s=a.n(l),i=a(11),r=a(1),m=a(7),o=a(3),u=a(6),v=a(8),d=(a(19),function(e){var t=e.movie;return c.a.createElement("div",{className:"MovieSetItem"},c.a.createElement(u.a,{during:1800},c.a.createElement("span",{className:"MovieTime"},t.time),c.a.createElement("span",{className:"MovieType"},t.type),c.a.createElement("span",{className:"MoviePrice"},"$",t.price)))}),p=(a(20),function(e){return c.a.createElement("div",{className:"Tag"},e.label)}),E=["plot","moonlight"],y=[{time:"18:00",type:"3D",price:9.9,key:0},{time:"20:00",type:"3D",price:9.9,key:1},{time:"22:20",type:"3D",price:9.9,key:2},{time:"23:50",type:"3D",price:9.9,key:3}],b=[24,25,26,62,63,38,34],N={},f=0;f<64;f++)N[f]={id:f,status:b.includes(f)?"selected":"available"};var h={mass:5,tension:2e3,friction:200};var g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(!1),b=Object(o.a)(s,2),f=b[0],g=b[1],j=Object(n.useState)(0),M=Object(o.a)(j,2),O=M[0],k=M[1],S=Object(n.useState)(0),x=Object(o.a)(S,2),w=x[0],A=x[1],D=Object(n.useState)(N),T=Object(o.a)(D,2),C=T[0],I=T[1],z=Object(v.b)(y.length,{config:h,opacity:f?1:0,x:f?0:30,from:{opacity:0,x:30,height:0}}),B=function(){console.log(1)};return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Movie"},c.a.createElement("h1",{className:"MovieName"},"Moonlight"),c.a.createElement("p",{className:"MovieDuration"},"1hr 50min"),c.a.createElement("div",null,E.map((function(e){return c.a.createElement(p,{key:e,label:e})}))),c.a.createElement("h2",{style:{marginTop:"48px"}},"Sorylint"),c.a.createElement("p",{style:{textAlign:"justify",lineHeight:1.2}},"The film was announced in October 2014 as Avengers: Infinity War \u2013 Part 2, but Marvel later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later....")),c.a.createElement("div",{className:"MovieAction ".concat(a?"active":"")},c.a.createElement("div",{className:"MovieActionBuyNow"},c.a.createElement(u.a,{onClick:function(){l(!a),g((function(e){return!e}))}},"buy now")),c.a.createElement("div",{className:"MovieSet"},z.map((function(e,t){var a=e.x,n=(e.height,Object(i.a)(e,["x","height"]));return c.a.createElement(v.a.div,{key:y[t].key,style:Object(m.a)({},n,{transform:a.interpolate((function(e){return"translate3d(0,".concat(e,"px,0)")}))}),onClick:B},c.a.createElement(d,{movie:y[t]}))})))),c.a.createElement("div",{hidden:!0,className:"MovieDetail"},c.a.createElement("div",{className:"title"},"Moonlight",c.a.createElement("p",{className:"subtitle"},"18:00 - 20:00")),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"seats"},Object.keys(C).map((function(e){var t=C[e];return c.a.createElement("div",{onClick:function(){return function(e){var t=C[e];if("selected"!==t.status){var a="your"===t.status?"available":"your";I(Object(m.a)({},C,Object(r.a)({},e,{target:t,status:a}))),"available"===t.status?(k(O+1),A(w+9.9)):(k(O-1),A(w-9.9))}}(e)},className:"seat ".concat(t.status),key:e})}))),c.a.createElement("div",{className:"desc"},c.a.createElement("div",null,c.a.createElement("div",{className:"seat selected"}),c.a.createElement("p",{className:"seat-desc"},"Selected")),c.a.createElement("div",null,c.a.createElement("div",{className:"seat available"}),c.a.createElement("p",{className:"seat-desc"},"Available")),c.a.createElement("div",null,c.a.createElement("div",{className:"seat your"}),c.a.createElement("p",{className:"seat-desc"},"Your seat"))),c.a.createElement("div",{className:"total"},c.a.createElement("span",{style:{fontSize:"16px"}},O," seats"),c.a.createElement("span",{style:{fontSize:"24px"}},"$",w.toFixed(2)))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.03ca8e92.chunk.js.map