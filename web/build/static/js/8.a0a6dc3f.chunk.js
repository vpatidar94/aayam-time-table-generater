(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[8],{50:function(t,e,c){"use strict";c.d(e,"b",(function(){return r})),c.d(e,"a",(function(){return a})),c.d(e,"c",(function(){return n}));c(53);var r=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"}],a=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3079,Batch:"JEE XL",CourseID:1025},{BatchID:3078,Batch:"JEE adv",CourseID:13}],n=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},51:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var r=c(8);function a(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,r)}return c}function n(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?a(Object(c),!0).forEach((function(e){Object(r.a)(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}},53:function(t,e,c){var r=c(62),a=c(63),n=a;n.v1=r,n.v4=a,t.exports=n},54:function(t,e){var c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(c){var r=new Uint8Array(16);t.exports=function(){return c(r),r}}else{var a=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0===(3&e)&&(t=4294967296*Math.random()),a[e]=t>>>((3&e)<<3)&255;return a}}},55:function(t,e){for(var c=[],r=0;r<256;++r)c[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,a=c;return[a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],"-",a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]],a[t[r++]]].join("")}},57:function(t,e,c){},61:function(t,e,c){"use strict";c.r(e);var r=c(8),a=c(51),n=c(7),u=c(5),o=c(9),s=c(1),i=c(50),l=c(29),h=(c(57),c(6));e.default=function(t){var e=t.showModal,c=t.setShowModal,y=t.batchList;console.log(",,bb",i.a),Object(s.useEffect)((function(){if(e){var t=function(){var t=Object(o.a)(Object(u.a)().mark((function t(){var e,c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return e=t.sent,t.next=6,e.json();case 6:c=t.sent,m(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("Error fetching API data:",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();t()}}),[e]);var b=Object(s.useState)(y),D=Object(n.a)(b,2),f=(D[0],D[1]),j=Object(s.useState)({}),I=Object(n.a)(j,2),d=I[0],m=I[1],p=Object(s.useState)({}),v=Object(n.a)(p,2),B=v[0],F=v[1],O=d.Object,C=(void 0===O?{}:O).Batch,g=void 0===C?[]:C,x=function(t){var e=t.target,c=e.name,n=e.checked;F(Object(a.a)(Object(a.a)({},B),{},Object(r.a)({},c,n)))},M=function(){c(!1)};return Object(h.jsx)("div",{children:Object(h.jsxs)(l.x,{isOpen:e,toggle:M,style:{maxWidth:"320px"},children:[Object(h.jsx)(l.A,{toggle:M,children:"Select Batches from the list"}),Object(h.jsx)(l.y,{children:Object(h.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(h.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:g.map((function(t){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"add-batch-style",children:[Object(h.jsx)("input",{type:"checkbox",name:t.BatchID,checked:B[t.BatchID]||!1,onChange:x,className:"addbatch-checkbox-style"}),t.Batch]})},t.BatchID)}))})})}),Object(h.jsxs)(l.z,{children:[Object(h.jsx)(l.e,{color:"primary",onClick:function(){var t=y,e=function(e){if(B[e]){var c=g.find((function(t){return t.BatchID===parseInt(e)}));c&&!t.find((function(t){return t.BatchID===c.BatchID}))&&t.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in B)e(c);console.log(t),f(t),alert("batches added successfully")},children:"Add"})," ",Object(h.jsx)(l.e,{color:"secondary",onClick:M,children:"Close"})]})]})})}},62:function(t,e,c){var r,a,n=c(54),u=c(55),o=0,s=0;t.exports=function(t,e,c){var i=e&&c||0,l=e||[],h=(t=t||{}).node||r,y=void 0!==t.clockseq?t.clockseq:a;if(null==h||null==y){var b=n();null==h&&(h=r=[1|b[0],b[1],b[2],b[3],b[4],b[5]]),null==y&&(y=a=16383&(b[6]<<8|b[7]))}var D=void 0!==t.msecs?t.msecs:(new Date).getTime(),f=void 0!==t.nsecs?t.nsecs:s+1,j=D-o+(f-s)/1e4;if(j<0&&void 0===t.clockseq&&(y=y+1&16383),(j<0||D>o)&&void 0===t.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=D,s=f,a=y;var I=(1e4*(268435455&(D+=122192928e5))+f)%4294967296;l[i++]=I>>>24&255,l[i++]=I>>>16&255,l[i++]=I>>>8&255,l[i++]=255&I;var d=D/4294967296*1e4&268435455;l[i++]=d>>>8&255,l[i++]=255&d,l[i++]=d>>>24&15|16,l[i++]=d>>>16&255,l[i++]=y>>>8|128,l[i++]=255&y;for(var m=0;m<6;++m)l[i+m]=h[m];return e||u(l)}},63:function(t,e,c){var r=c(54),a=c(55);t.exports=function(t,e,c){var n=e&&c||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var u=(t=t||{}).random||(t.rng||r)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,e)for(var o=0;o<16;++o)e[n+o]=u[o];return e||a(u)}}}]);
//# sourceMappingURL=8.a0a6dc3f.chunk.js.map