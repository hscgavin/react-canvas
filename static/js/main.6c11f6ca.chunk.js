(this["webpackJsonpreact-canvas"]=this["webpackJsonpreact-canvas"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(5),s=n.n(o),i=(n(12),n(6)),u=n.n(i),f=n(4),d=n(3),l=n.n(d),p=n.p+"static/media/Chrome.ff28adc5.png",v=n.p+"static/media/Drawing.cf473191.png",h=[p,n.p+"static/media/Terminal.3a5a3216.png",v],j=function(e){var t=Object(c.useState)(76),n=Object(f.a)(t,1)[0],a=Object(c.useState)({height:n}),o=Object(f.a)(a,1)[0],s=Object(c.useRef)(null),i=Object(c.useCallback)((function(e,t){var n="top"===t?e.offsetTop:e.offsetLeft;return null===e.offsetParent?n:n+i(e.offsetParent,t)}),[]),u=Object(c.useCallback)((function(e){var t=e.clientX,r=e.clientY;if(s.current)for(var c=s.current.childNodes,a=0;a<c.length;a++){var o=c[a],u=o.offsetLeft+n/2-t,f=o.offsetTop+i(s.current,"top")+o.offsetHeight/2-r,d=1-Math.sqrt(u*u+f*f)/(c.length*n);d<.5&&(d=.5),o.width=2*n*d}}),[n,i]),d=Object(c.useCallback)((function(){if(s.current)for(var e=s.current.childNodes,t=0;t<e.length;t++){e[t].width=n}}),[n]);return Object(c.useEffect)((function(){if(s.current){var e=s.current;return e.addEventListener("mouseleave",d),e.addEventListener("mousemove",u),function(){e.removeEventListener("mouseleave",d),e.removeEventListener("mousemove",u)}}}),[u,d]),Object(r.jsx)("div",{className:l.a.dockerWrapper,children:Object(r.jsx)("div",{ref:s,style:o,className:l.a.docker,children:h.map((function(e,t){return Object(r.jsx)("img",{src:e,alt:e,width:n},t+e)}))})})};var b=function(){return Object(r.jsx)("div",{className:u.a.App,children:Object(r.jsx)(j,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),m()},3:function(e,t,n){e.exports={dockerWrapper:"Docker_dockerWrapper__E6hlT",docker:"Docker_docker__WZH4m"}},6:function(e,t,n){e.exports={App:"App_App__16ZpL"}}},[[13,1,2]]]);
//# sourceMappingURL=main.6c11f6ca.chunk.js.map