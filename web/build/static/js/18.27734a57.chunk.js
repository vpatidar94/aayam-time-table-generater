(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[18],{96:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(1),c=n(6);t.default=function(){var e=Object(a.useState)({x:0,y:0}),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(a.useState)({x:0,y:0}),i=Object(r.a)(o,2),d=i[0],u=i[1],v=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=v.current,t=function(e){e.dataTransfer.setData("text/plain",e.target.id)},r=function(e){e.preventDefault()},a=function(e){e.preventDefault();var t=e.dataTransfer.getData("text"),n=document.getElementById(t);e.target.appendChild(n)};e.addEventListener("dragstart",t),e.addEventListener("dragover",r),e.addEventListener("drop",a);var c=function(e){u({x:e.touches[0].clientX-n.x,y:e.touches[0].clientY-n.y})},o=function(e){e.preventDefault(),s({x:e.touches[0].clientX-d.x,y:e.touches[0].clientY-d.y})},i=function(){u(n)};return e.addEventListener("touchstart",c),e.addEventListener("touchmove",o),e.addEventListener("touchend",i),function(){e.removeEventListener("dragstart",t),e.removeEventListener("dragover",r),e.removeEventListener("drop",a),e.removeEventListener("touchstart",c),e.removeEventListener("touchmove",o),e.removeEventListener("touchend",i)}}),[d,n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"draggable",ref:v,draggable:!0,style:{transform:"translate(".concat(n.x,"px, ").concat(n.y,"px)"),touchAction:"none"},children:"Drag Me"}),Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"HEY"})})]})}}}]);
//# sourceMappingURL=18.27734a57.chunk.js.map