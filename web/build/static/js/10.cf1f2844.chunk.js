(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[10],{65:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c(61),n=c(6),l=c(1),r=c(62),b=[{name:"MYK",className:"style-faculty",bgColor:"bg-myk",bg:"blue"},{name:"KPS",className:"style-faculty",bgColor:"bg-kps"},{name:"MRS",className:"style-faculty",bgColor:"bg-mrs"},{name:"MAS",className:"style-faculty",bgColor:"bg-mas"},{name:"RSS",className:"style-faculty",bgColor:"bg-rss"},{name:"NMS",className:"style-faculty",bgColor:"bg-nms"},{name:"HDS",className:"style-faculty",bgColor:"bg-hds"},{name:"MNM",className:"style-faculty",bgColor:"bg-mnm"},{name:"SJ",className:"style-faculty",bgColor:"bg-sj"},{name:"AJ",className:"style-faculty",bgColor:"bg-aj"},{name:"DMPS",className:"style-faculty",bgColor:"bg-dmps"},{name:"PSJ",className:"style-faculty",bgColor:"bg-psj"},{name:"YBS",className:"style-faculty",bgColor:"bg-ybs"},{name:"AKS",className:"style-faculty",bgColor:"bg-aks"},{name:"AMS",className:"style-faculty",bgColor:"bg-ams"}],i=[{id:Object(r.v4)(),batchname:"A1"},{id:Object(r.v4)(),batchname:"A2"},{id:Object(r.v4)(),batchname:"CRASH E"},{id:Object(r.v4)(),batchname:"CRASH H"},{id:Object(r.v4)(),batchname:"ONLINE"},{id:Object(r.v4)(),batchname:"A14"},{id:Object(r.v4)(),batchname:"JEE EX"},{id:Object(r.v4)(),batchname:"JEE12"}],o=[{id:Object(r.v4)(),classtime:"08:30-09:45 AM"},{id:Object(r.v4)(),classtime:"09:50-11:05 AM"},{id:Object(r.v4)(),classtime:"11:20-12:35 PM"},{id:Object(r.v4)(),classtime:"12:40-01:55 PM"},{id:Object(r.v4)(),classtime:"02:00-03:15 PM"},{id:Object(r.v4)(),classtime:"03:20-04:35 PM"},{id:Object(r.v4)(),classtime:"04:50-06:05 PM"},{id:Object(r.v4)(),classtime:"06:15-07:30 PM"}],j=(c(65),c(72)),m=(c(66),c(69)),u=c.n(m),d=c(5);t.default=function(){var e=Object(l.useState)(0),t=Object(n.a)(e,2),c=t[0],r=t[1],m=Object(l.useState)(null),O=Object(n.a)(m,2),h=O[0],f=O[1],v=Object(l.useState)({}),y=Object(n.a)(v,2),g=y[0],N=y[1],S=Object(l.useState)(!1),x=Object(n.a)(S,2),C=x[0],p=x[1],M=Object(l.useState)({}),k=Object(n.a)(M,2),E=k[0],A=k[1],D=Object(l.useState)({}),P=Object(n.a)(D,2),J=P[0],L=P[1],R=Object(l.useState)({}),H=Object(n.a)(R,2),w=H[0],F=H[1],T=Object(l.useState)(null),W=Object(n.a)(T,2),K=W[0],I=W[1],U=Object(l.useRef)(null),Y=Object(l.useRef)(),_=function(e,t,c,a){E&&E.teacher||A({teacher:c,className:a})};Object(l.useEffect)((function(){var e=document.querySelector(".table-style");if(e){var t=e.offsetWidth;r(t)}}),[]),Object(l.useEffect)((function(){C&&(alert("Two same teachers found in the same row"),p(!1),setTimeout((function(){N({})}),3e3))}),[C]);var q=function(e,t){if(h){var c,n=w[h],l=w[t];F(Object(s.a)(Object(s.a)({},w),{},(c={},Object(a.a)(c,h,l),Object(a.a)(c,t,n),c))),f(null)}else{var r=w;w[t]=E,F(Object(s.a)({},r)),A({});var b=J;b[E.teacher]?b[E.teacher]+=1:b[E.teacher]=1,L(Object(s.a)({},b)),function(e){var t=e.split("_")[0],c=[];for(var a in w)a.startsWith(t)&&c.push({key:a,teacher:w[a].teacher});var s=c.reduce((function(e,t){return e[t.teacher]?e[t.teacher].push(t.key):e[t.teacher]=[t.key],e}),{}),n=Object.values(s).filter((function(e){return e.length>1})).flat();!Object.keys(g).includes(e)&&n.includes(e)&&(p(!0),N(n.reduce((function(e,t){return e[t]=!0,e}),{})))}(t)}};Object(l.useEffect)((function(){C&&p(!1)}),[C]);var B=function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("each-block"));)t=t.parentNode;if(t&&""!==t.innerHTML.trim())return!1;e.preventDefault()};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"bg-container",children:[Object(d.jsx)("h1",{className:"heading-style",children:"CLASS SCHEDULE"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{ref:U,children:Object(d.jsx)("table",{className:"table-style",children:Object(d.jsxs)("tbody",{children:[Object(d.jsx)("div",{className:"for-time",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"F-style time-style",children:"Time"}),i.map((function(e){return Object(d.jsx)("td",{className:"F-style batch-style",children:e.batchname})}))]})}),Object(d.jsx)("tr",{children:o.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("td",{className:"F-style time-style",children:e.classtime}),i.map((function(t){var c,a,n,l=e.id+"_"+t.id;return Object(d.jsx)("td",{draggable:!0,onDragOver:B,onDrop:function(e){return q(0,l)},onDragStart:function(e){return w[l]&&function(e,t){f(t)}(0,l)},id:l,className:"each-block ".concat(g[l]?"blink":""),children:w[l]&&Object(d.jsxs)("div",{className:"teacname-cross-style ".concat(null===(c=w[l])||void 0===c?void 0:c.className," "),children:[Object(d.jsx)("div",{className:"teacher-name",children:null===(a=w[l])||void 0===a?void 0:a.teacher}),Object(d.jsx)("div",{className:"cross-btn-container",children:null!==(n=w[l])&&void 0!==n&&n.teacher?Object(d.jsx)("button",{className:"cross-style",onClick:function(){return function(e){var t=w;F(Object(s.a)({},t)),A({});var c=J;c[w[e].teacher]-=1,delete w[e].teacher,delete w[e].className,L(c)}(l)},children:Object(d.jsx)(j.a,{})}):""})]})},l)}))]})}))})]})})}),Object(d.jsx)("button",{onClick:function(){u()(U.current).then((function(e){var t=e.toDataURL();I(t)})).catch((function(e){console.error(e)}))},children:"Convert to Image"}),K&&Object(d.jsx)("img",{src:K,alt:"table"})]}),Object(d.jsx)("div",{className:"teacher-container",style:{maxWidth:c},children:b.map((function(e,t){var a=e.name,s=e.bgColor,n=e.className;return Object(d.jsxs)("div",{style:{maxWidth:c},className:"teacher-item  ".concat(s," ").concat(n),draggable:!0,onDragStart:function(e){return c=t,void(Y.current=c);var c},onDragEnter:function(e){return _(0,0,a,s)},children:[Object(d.jsx)("h3",{children:a}),J[a]>0&&Object(d.jsx)("span",{className:"counter-item ".concat(s),draggable:!1,children:J[a]})]},a)}))})]})})}}}]);
//# sourceMappingURL=10.cf1f2844.chunk.js.map