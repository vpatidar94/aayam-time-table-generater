(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[8],{50:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return a})),c.d(e,"c",(function(){return u}));c(56);var r=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"},{FacultyID:3054,Faculty:"NPS",subject:"Chemistry"}],a=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:3078,Batch:"JEE adv",CourseID:13},{BatchID:3079,Batch:"JEE XL",CourseID:1025}],u=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},51:function(t,e,c){"use strict";c.d(e,"a",(function(){return u}));var r=c(8);function a(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}function u(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?a(Object(c),!0).forEach((function(e){Object(r.a)(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},53:function(t,e){var c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(c){var r=new Uint8Array(16);t.exports=function(){return c(r),r}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},54:function(t,e){for(var c=[],r=0;r<256;++r)c[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,a=c;return[a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]]].join("")}},56:function(t,e,c){var r=c(62),a=c(63),u=a;u.v1=r,u.v4=a,t.exports=u},57:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var r=c(8),a=c(51),u=c(7),n=c(5),s=c(9),o=c(1),i=(c(50),c(29)),l=(c(57),c(6));e.default=function(t){var e=t.showModal,c=t.setShowModal,h=t.batchList;Object(o.useEffect)((function(){if(e){var t=function(){var t=Object(s.a)(Object(n.a)().mark((function t(){var e,c;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,d(c),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]);var y=Object(o.useState)(h),b=Object(u.a)(y,2),j=(b[0],b[1]),D=Object(o.useState)({}),f=Object(u.a)(D,2),I=f[0],d=f[1],m=Object(o.useState)({}),p=Object(u.a)(m,2),v=p[0],O=p[1],B=Object(o.useState)(""),F=Object(u.a)(B,2),C=F[0],x=F[1],M=Object(o.useState)(!1),P=Object(u.a)(M,2),S=P[0],g=P[1],T=I.Object,L=(void 0===T?{}:T).Batch,w=void 0===L?[]:L,A=function(t){var e=t.target,c=e.name,u=e.checked;O(Object(a.a)(Object(a.a)({},v),{},Object(r.a)({},c,u)))},_=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(i.x,{isOpen:e,toggle:_,style:{maxWidth:"320px"},children:[Object(l.jsx)(i.A,{toggle:_,children:"Select Batches from the list"}),Object(l.jsxs)(i.y,{children:[C,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:w.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-batch-style",children:[Object(l.jsx)("input",{type:"checkbox",name:t.BatchID,checked:v[t.BatchID]||!1,onChange:A,className:"addbatch-checkbox-style"}),t.Batch]})},t.BatchID)}))})})]}),Object(l.jsxs)(i.z,{children:[Object(l.jsx)(i.e,{color:"primary",onClick:function(){var t=h,e=function(e){if(v[e]){var c=w.find((function(t){return t.BatchID===parseInt(e)}));c&&!t.find((function(t){return t.BatchID===c.BatchID}))&&t.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in v)e(c);j(t),S||(x(Object(l.jsx)(i.H,{color:"success",fade:!1,children:"Batches added successfully"})),setTimeout((function(){g(!1),x("")}),3e3))},children:"Add"})," ",Object(l.jsx)(i.e,{color:"secondary",onClick:_,children:"Close"})]})]})})}},62:function(t,e,c){var r,a,u=c(53),n=c(54),s=0,o=0;t.exports=function(t,e,c){var i=e&&c||0,l=e||[],h=(t=t||{}).node||r,y=void 0!==t.clockseq?t.clockseq:a;if(null==h||null==y){var b=u();null==h&&(h=r=[1|b[0],b[1],b[2],b[3],b[4],b[5]]),null==y&&(y=a=16383&(b[6]<<8|b[7]))}var j=void 0!==t.msecs?t.msecs:(new Date).getTime(),D=void 0!==t.nsecs?t.nsecs:o+1,f=j-s+(D-o)/1e4;if(f<0&&void 0===t.clockseq&&(y=y+1&16383),(f<0||j>s)&&void 0===t.nsecs&&(D=0),D>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=j,o=D,a=y;var I=(1e4*(268435455&(j+=122192928e5))+D)%4294967296;l[i++]=I>>>24&255,l[i++]=I>>>16&255,l[i++]=I>>>8&255,l[i++]=255&I;var d=j/4294967296*1e4&268435455;l[i++]=d>>>8&255,l[i++]=255&d,l[i++]=d>>>24&15|16,l[i++]=d>>>16&255,l[i++]=y>>>8|128,l[i++]=255&y;for(var m=0;m<6;++m)l[i+m]=h[m];return e||n(l)}},63:function(t,e,c){var r=c(53),a=c(54);t.exports=function(t,e,c){var u=e&&c||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var n=(t=t||{}).random||(t.rng||r)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e)for(var s=0;s<16;++s)e[u+s]=n[s];return e||a(n)}}}]);
//# sourceMappingURL=8.4bd57f43.chunk.js.map