(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[5],{50:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return r}));c(56);var a=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"},{FacultyID:3054,Faculty:"NPS",subject:"Chemistry"},{FacultyID:3055,Faculty:"SKS",subject:"Maths"}],n=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:3078,Batch:"JEE adv",CourseID:13},{BatchID:3079,Batch:"JEE XL",CourseID:1025}],r=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var a="https://api.aayamcareerinstitute.co.in/api",n={UPLOAD_FILE:a+"/UploadFilesAttachment",GET_UPLOAD_FILE_URL:a+"/GetFiles",GET_SAVE_TIMETABLE_URL:a+"/AddUpdateTimeTable",GET_ALL_TT:a+"/GetTimeTable",GET_EDIT_TT:a+"/GetTimeTableByDate",REMOVE_TT:a+"/DeleteTimeTable"}},57:function(e,t,c){},58:function(e,t,c){"use strict";var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),u=c(1),o=(c(50),c(29)),l=(c(59),c(6));t.a=function(e){var t=e.showModal,c=e.setShowModal,d=e.teacherList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var b=Object(u.useState)(d),h=Object(r.a)(b,2),j=(h[0],h[1]),f=Object(u.useState)({}),p=Object(r.a)(f,2),O=p[0],v=p[1],m=Object(u.useState)({}),y=Object(r.a)(m,2),D=y[0],I=y[1],x=Object(u.useState)(""),F=Object(r.a)(x,2),g=F[0],T=F[1],L=Object(u.useState)(!1),B=Object(r.a)(L,2),w=B[0],S=B[1],C=O.Object,_=void 0===C?{}:C,E=(_.Batch,_.FacultyList),A=void 0===E?[]:E,N=_.UserList,k=void 0===N?[]:N,M={};k.forEach((function(e){M[e.UserID]=e.UserName}));var P=function(e){var t=e.target,c=t.name,r=t.checked;I(Object(n.a)(Object(n.a)({},D),{},Object(a.a)({},c,r)))},U=A.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{Faculty:M[e.FacultyID]||e.Faculty})})),G=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(o.x,{isOpen:t,toggle:G,style:{maxWidth:"320px"},children:[Object(l.jsx)(o.A,{toggle:G,children:"Select Teachers from the list"}),Object(l.jsxs)(o.y,{children:[g,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:U.map((function(e){var t=e.FacultyID,c=(e.bgColor,e.className,k.find((function(e){return e.UserID===t}))),a=c?c.UserName:e.Faculty;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-faculty-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.FacultyID,checked:D[e.FacultyID]||!1,onChange:P,className:"addfaculty-checkbox-style"}),a]})},e.FacultyID)}))})})]}),Object(l.jsxs)(o.z,{children:[Object(l.jsx)(o.e,{color:"primary",onClick:function(){var e=d,t=function(t){if(D[t]){var c=U.find((function(e){return e.FacultyID===parseInt(t)}));if(c){var a=k.find((function(e){return e.UserID===c.FacultyID})),n=a?a.UserName:c.Faculty;e.some((function(e){return e.FacultyID===c.FacultyID}))||e.push({FacultyID:c.FacultyID,Faculty:n})}}};for(var c in D)t(c);j(e),w||(T(Object(l.jsx)(o.H,{color:"success",fade:!1,children:"Teachers added successfully"})),setTimeout((function(){S(!1),T("")}),3e3))},children:"Add"})," ",Object(l.jsx)(o.e,{color:"secondary",onClick:G,children:"Close"})]})]})})}},59:function(e,t,c){},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),u=Object(r.a)((function e(){Object(s.a)(this,e),this.getTtList=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i.a.GET_ALL_TT,{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),this.getEditTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.GET_EDIT_TT,{method:"POST",headers:c,body:JSON.stringify({FromDate:t.replaceAll("-","/")})});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.addUpdateTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.GET_SAVE_TIMETABLE_URL,{method:"POST",headers:c,body:JSON.stringify(t)});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.removeTtById=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.REMOVE_TT,{method:"POST",headers:c,body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}))},61:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),u=c(1),o=(c(50),c(29)),l=(c(57),c(6));t.default=function(e){var t=e.showModal,c=e.setShowModal,d=e.batchList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var b=Object(u.useState)(d),h=Object(r.a)(b,2),j=(h[0],h[1]),f=Object(u.useState)({}),p=Object(r.a)(f,2),O=p[0],v=p[1],m=Object(u.useState)({}),y=Object(r.a)(m,2),D=y[0],I=y[1],x=Object(u.useState)(""),F=Object(r.a)(x,2),g=F[0],T=F[1],L=Object(u.useState)(!1),B=Object(r.a)(L,2),w=B[0],S=B[1],C=O.Object,_=(void 0===C?{}:C).Batch,E=void 0===_?[]:_,A=function(e){var t=e.target,c=t.name,r=t.checked;I(Object(n.a)(Object(n.a)({},D),{},Object(a.a)({},c,r)))},N=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(o.x,{isOpen:t,toggle:N,style:{maxWidth:"320px"},children:[Object(l.jsx)(o.A,{toggle:N,children:"Select Batches from the list"}),Object(l.jsxs)(o.y,{children:[g,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:E.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-batch-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.BatchID,checked:D[e.BatchID]||!1,onChange:A,className:"addbatch-checkbox-style"}),e.Batch]})},e.BatchID)}))})})]}),Object(l.jsxs)(o.z,{children:[Object(l.jsx)(o.e,{color:"primary",onClick:function(){var e=d,t=function(t){if(D[t]){var c=E.find((function(e){return e.BatchID===parseInt(t)}));c&&!e.find((function(e){return e.BatchID===c.BatchID}))&&e.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in D)t(c);j(e),w||(T(Object(l.jsx)(o.H,{color:"success",fade:!1,children:"Batches added successfully"})),setTimeout((function(){S(!1),T("")}),3e3))},children:"Add"})," ",Object(l.jsx)(o.e,{color:"secondary",onClick:N,children:"Close"})]})]})})}},64:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),u=Object(r.a)((function e(){Object(s.a)(this,e),this.getWattsappApi=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n,r){var s,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("cel",n),console.log("file",r),e.next=7,fetch("https://ziper.io/api/send.php?"+new URLSearchParams({number:n,type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:r,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 7:return s=e.sent,e.next=10,s.json();case 10:return i=e.sent,e.abrupt("return",i);case 14:throw e.prev=14,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,c,a,n){return e.apply(this,arguments)}}(),this.getWattsappGroupApiTeachers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",n),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919977116612-1595572006@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return r=e.sent,e.next=9,r.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.getWattsappGroupApiOthers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",n),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919826362001-1628170376@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return r=e.sent,e.next=9,r.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.uplaodFile=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new FormData).append("file",t,t.name),e.next=5,fetch(i.a.UPLOAD_FILE,{method:"POST",body:c});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.getUploadedFile=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i.a.GET_UPLOAD_FILE_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))}))},72:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var a=["#D4E6F1","#E8DAEF","#008080","#808000","#C39BD3","#76D7C4","#3498DB","#358b79","#847f86","rgb(251, 235, 9)","#CA6F1E","#CCCCFF","#F4D03F","rgb(199, 185, 84)","#979A9A","#F0B27A","rgb(117, 98, 179)","#CD5C5C","#40E0D0","#DAF7A6","#CECCA9","#808000","#FADBD8","green","yellow","white","red","pink"]},81:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(10),r=c(51),s=c(9),i=c(7),u=c(71),o=c.n(u),l=c(1),d=c(73),b=c(4),h=c(29),j=c(60),f=c(64),p=c(72),O=c(61),v=c(50),m=c(58),y=(c(81),c(6));t.default=function(){var e=Object(b.p)(),t=e.fromDateEdit;e.timeTableId;Object(l.useEffect)((function(){Ae(),Ne()}),[]);var c=Object(l.useState)(null),u=Object(i.a)(c,2),D=u[0],I=u[1],x=Object(l.useState)({}),F=Object(i.a)(x,2),g=F[0],T=F[1],L=Object(l.useState)([]),B=Object(i.a)(L,2),w=B[0],S=B[1],C=Object(l.useState)({}),_=Object(i.a)(C,2),E=_[0],A=_[1],N=Object(l.useState)({}),k=Object(i.a)(N,2),M=k[0],P=k[1],U=Object(l.useState)({}),G=Object(i.a)(U,2),R=G[0],H=G[1],J=Object(l.useState)(!1),W=Object(i.a)(J,2),z=W[0],V=W[1],K=Object(l.useState)(null),X=Object(i.a)(K,2),Y=X[0],q=X[1],Q=Object(l.useState)(!1),Z=Object(i.a)(Q,2),$=Z[0],ee=Z[1],te=Object(l.useState)(!1),ce=Object(i.a)(te,2),ae=ce[0],ne=ce[1],re=Object(l.useState)(""),se=Object(i.a)(re,2),ie=se[0],ue=se[1],oe=Object(l.useState)(""),le=Object(i.a)(oe,2),de=le[0],be=le[1],he=Object(l.useState)(""),je=Object(i.a)(he,2),fe=je[0],pe=je[1],Oe=Object(l.useState)(!1),ve=Object(i.a)(Oe,2),me=ve[0],ye=ve[1],De=Object(l.useState)([]),Ie=Object(i.a)(De,2),xe=Ie[0],Fe=Ie[1],ge=Object(l.useState)([]),Te=Object(i.a)(ge,2),Le=Te[0],Be=Te[1],we=Object(l.useState)(!1),Se=Object(i.a)(we,2),Ce=Se[0],_e=Se[1],Ee=Object(l.useRef)(null),Ae=function(){var e=[];v.b.forEach((function(t,c){t.color=p.a[c],e.push(t)})),Be([].concat(e))},Ne=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new j.a).getEditTt(t);case 2:if((c=e.sent).IsSuccessful){e.next=6;break}return pe(Object(y.jsx)(h.H,{color:"danger",fade:!1,children:"Something went wrong"})),e.abrupt("return");case 6:I(Object(r.a)({},c.Object)),ue(c.Object.FromDate),be(c.Object.ToDate),Me(c.Object),S(Object(n.a)(c.Object.LectureList)),ke(c),_e(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(e){var t,c,a=E;(null===(t=e.Object.LectureList)||void 0===t?void 0:t.length)>0&&(null===(c=e.Object.LectureList)||void 0===c||c.forEach((function(t){var c,n;if(null!==t&&void 0!==t&&null!==(c=t.Batch)&&void 0!==c&&c.BatchID&&null!==t&&void 0!==t&&null!==(n=t.Lecture)&&void 0!==n&&n.LectureName&&null!==t&&void 0!==t&&t.FacultyID){var s,i,u,o,l,d=v.c.find((function(e){var c;return e.Lecture===(null===t||void 0===t||null===(c=t.Lecture)||void 0===c?void 0:c.LectureName)})),b=v.b.find((function(e){return e.FacultyID===t.FacultyID}));if(null!==d&&void 0!==d&&d.LectureID&&null!==b&&void 0!==b&&b.FacultyID&&(null===e||void 0===e||null===(s=e.Object)||void 0===s||null===(i=s.BatchID)||void 0===i?void 0:i.indexOf(null===t||void 0===t||null===(u=t.Batch)||void 0===u?void 0:u.BatchID))>=0&&(null===e||void 0===e||null===(o=e.Object)||void 0===o||null===(l=o.LectureID)||void 0===l?void 0:l.indexOf(null===d||void 0===d?void 0:d.LectureID))>=0){var h,j=d.LectureID+"_"+(null===t||void 0===t||null===(h=t.Batch)||void 0===h?void 0:h.BatchID);E[j]||(a[j]=b,A(Object(r.a)({},a)),Ue(d,null===t||void 0===t?void 0:t.Batch,b),Ge(b))}}})))},Me=function(e){if(e){var t,c=null===e||void 0===e||null===(t=e.Batch)||void 0===t?void 0:t.filter((function(t){var c;return(null===(c=e.BatchID)||void 0===c?void 0:c.indexOf(t.BatchID))>=0}));Fe(Object(n.a)(c))}},Pe=function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("each-block"));)t=t.parentNode;if(t&&""!==t.innerText.trim())return!1;e.preventDefault()},Ue=function(e,t,c){var a=w,r={ID:"0",TimeTableID:"0",LectureName:""};r.Batch=t,r.Lecture=e,r.Subject=c.subject,r.FacultyID=c.FacultyID,r.IsActive=!0,r.CreatedByUserID="1",r.CreatedOnDate="02/05/2023",a.push(r),S(Object(n.a)(a))},Ge=function(e){var t=M;t[e.FacultyID]?t[e.FacultyID]+=1:t[e.FacultyID]=1,P(Object(r.a)({},t))},Re=function(e,t,c){var a=g;if(Y){var n=Y.lecture.LectureID+"_"+Y.batch.BatchID;a=E[n],He(Y.lecture.LectureID,Y.batch.BatchID,E[n].FacultyID)}var s=E,i=t.LectureID+"_"+c.BatchID;E[i]=a,A(Object(r.a)({},s)),Ue(t,c,a),Ge(a),function(e,t){var c=e+"_"+t,a=R;a[c]?a[c]+=1:a[c]=1,H(Object(r.a)({},a)),a[c]>1&&(V(!0),setTimeout((function(){V(!1)}),3e3))}(t.LectureID,a.FacultyID),T({}),q(null)},He=function(e,t,c){var a=E;delete a[e+"_"+t],A(Object(r.a)({},a));var s=w,i=null===s||void 0===s?void 0:s.findIndex((function(c){var a,n;return(null===(a=c.Batch)||void 0===a?void 0:a.BatchID)===t&&(null===(n=c.Lecture)||void 0===n?void 0:n.LectureID)===e}));i>=0&&(s.splice(i,1),S(Object(n.a)(s)));var u=M;u[c]-=1,u[c]<=0&&delete u[c],P(u);var o=R,l=e+"_"+c;o[l]>1?o[l]-=1:delete o[l],H(o)},Je=function(e){if(!e)return"";var t=e.split("/");return"".concat(t[2],"-").concat(t[1],"-").concat(t[0])},We=function(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return(e=("000"+e.toString(36)).slice(-3))+(t=("000"+t.toString(36)).slice(-3))},ze=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,n,r,s,i,u,l,d,b,j,p,O;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o()(Ee.current);case 2:for(t=e.sent,c=t.toDataURL(),n=atob(c.split(",")[1]),r=c.split(",")[0].split(":")[1].split(";")[0],s=new Uint8Array(n.length),i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return u=new Blob([s],{type:r}),l=We(),d=new File([u],l+".jpg"),b=l+".jpg",e.next=14,(new f.a).uplaodFile(d);case 14:if("Success"!==e.sent){e.next=35;break}return e.next=18,(new f.a).getUploadedFile();case 18:if(p=e.sent,!((null===(j=p.Object)||void 0===j?void 0:j.length)>0)){e.next=35;break}return O=p.Object.reverse().find((function(e){var t;return(null===(t=e.Title)||void 0===t?void 0:t.indexOf(l))>=0})),e.prev=21,e.next=24,(new f.a).getWattsappGroupApiOthers(O.LongURL,"time table",b);case 24:e.next=28;break;case 26:e.prev=26,e.t0=e.catch(21);case 28:return e.prev=28,e.next=31,(new f.a).getWattsappGroupApiTeachers(O.LongURL,"time table",b);case 31:e.next=35;break;case 33:e.prev=33,e.t1=e.catch(28);case 35:me||(pe(Object(y.jsx)(h.H,{color:"success",fade:!1,children:"Time table image sent successfully"})),setTimeout((function(){ye(!1),pe("")}),3e3));case 37:case"end":return e.stop()}}),e,null,[[21,26],[28,33]])})));return function(){return e.apply(this,arguments)}}(),Ve=function(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])},Ke=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=xe.map((function(e){return e.BatchID})),e.next=3,(new j.a).removeTtById(D.TimeTableID);case 3:return c={TimeTableID:0,Description:"time table save",DateType:de?"multiple":"single",FromDate:ie,ToDate:de,ShiftID:D.ShiftID,SessionID:D.SessionID,Session:D.Session,BatchID:t,LectureID:D.LectureID,IsActive:!0,CreatedByUserID:D.CreatedByUserID,CreatedOnDate:new Date,LectureList:w},e.next=6,(new j.a).addUpdateTt(c);case 6:"Success"===(n=e.sent)?me||(pe(Object(y.jsx)(h.H,{color:"success",fade:!1,children:"time table saved successfully"})),setTimeout((function(){ye(!1),pe("")}),3e3)):me||(pe(Object(y.jsx)(h.H,{color:"danger",fade:!1,children:null!==(r=null===n||void 0===n?void 0:n.ExceptionMessage)&&void 0!==r?r:"An error has occurred."})),setTimeout((function(){ye(!1),pe("")}),3e3));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Ce?Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"bg-container",children:[fe,z?Object(y.jsx)(h.a,{color:"warning",children:"Two same teachers found in the same row"}):Object(y.jsx)(y.Fragment,{}),Object(y.jsx)("h1",{className:"heading-style",children:"CLASS SCHEDULE"}),Object(y.jsxs)("div",{className:"button-group added-style",children:[Object(y.jsx)(h.e,{className:"btn ",color:"info",onClick:function(){ee(!0)},children:"Add Batches"}),$&&Object(y.jsx)(O.default,{showModal:$,setShowModal:ee,batchList:xe}),Object(y.jsx)(h.e,{className:"btn",color:"info",onClick:function(){ne(!0)},children:"Add Teachers"}),ae&&Object(y.jsx)(m.a,{showModal:ae,setShowModal:ne,teacherList:Le}),Object(y.jsx)(h.e,{className:"btn",color:"info",onClick:Ke,children:"Save"}),Object(y.jsx)(h.e,{className:"btn",color:"info",onClick:ze,children:"Post"}),Object(y.jsx)(h.e,{className:"btn",color:"info",onClick:function(e){var t=E;delete t[e],A({stateTeacherAssignment:t})},children:"Clear ALL"})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{ref:Ee,children:[Object(y.jsx)("br",{}),Object(y.jsx)(h.q,{children:Object(y.jsxs)("div",{className:"time-table-date-style",children:[Object(y.jsxs)(h.r,{className:"label-date-allignment",children:[Object(y.jsx)("p",{className:"date-label-style",children:"From:"}),Object(y.jsx)(h.t,{id:"fromDate",name:"fromDate",type:"date",defaultValue:Je(ie),onChange:function(e){!function(e){var t=e.target.value;ue(Ve(t))}(e)},className:"input-size"})]}),Object(y.jsxs)(h.r,{className:"label-date-allignment",children:[Object(y.jsx)("p",{className:"date-label-style",children:"To:"}),Object(y.jsx)(h.t,{id:"toDate",name:"toDate",type:"date",defaultValue:Je(de),onChange:function(e){!function(e){var t=e.target.value;be(Ve(t))}(e)},className:"input-size"})]})]})}),Object(y.jsx)("table",{className:"table-style",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("div",{className:"for-time",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"F-style time-style",children:"Time"}),xe&&xe.map((function(e){return Object(y.jsxs)("td",{className:"F-style batch-style",children:[e.Batch,Object(y.jsx)("button",{className:"delete-style",onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this batch?")){var t=xe.filter((function(t){return t.BatchID!==e}));Fe(t)}}(e.BatchID)},children:Object(y.jsx)(d.a,{})})]},e.BatchID)}))]})}),Object(y.jsx)("tr",{children:v.c.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("td",{className:"F-style time-style",children:[e.Time_From,"-",e.Time_To]}),xe&&xe.map((function(t){var c,a,n,r,s,i,u,o,l=e.LectureID+"_"+t.BatchID;return Object(y.jsx)("td",{draggable:!0,onDragOver:Pe,onDrop:function(c){return Re(0,e,t)},onDragStart:function(c){q({lecture:e,batch:t})},id:l,className:"each-block ".concat((u=e.LectureID,o=null!==(c=null===(a=E[l])||void 0===a?void 0:a.FacultyID)&&void 0!==c?c:null,u&&o&&R[u+"_"+o]>1?"blink":"")),style:{backgroundColor:null===(n=E[l])||void 0===n?void 0:n.color},children:Object(y.jsxs)("div",{className:"teacname-cross-style ".concat(null===(r=E[l])||void 0===r?void 0:r.className," "),children:[Object(y.jsx)("div",{className:"teacher-name",children:null===(s=E[l])||void 0===s?void 0:s.Faculty}),Object(y.jsx)("div",{className:"cross-btn-container",children:null!==(i=E[l])&&void 0!==i&&i.Faculty?Object(y.jsx)("button",{className:"cross-style",onClick:function(){return He(e.LectureID,t.BatchID,E[l].FacultyID)},children:Object(y.jsx)(d.a,{})}):Object(y.jsx)(y.Fragment,{})})]})},l)}))]})}))})]})})]})}),Object(y.jsx)("div",{className:"teacher-container",children:Le.map((function(e,t){var c=e.FacultyID,a=e.Faculty;return e.color=p.a[t],Object(y.jsxs)("div",{style:{backgroundColor:e.color},className:"teacher-item",draggable:!0,onDragStart:function(t){T(e)},onDragEnd:function(e){T({})},children:[Object(y.jsx)("h3",{children:a}),M[c]>0&&Object(y.jsx)("span",{className:"counter-item ",draggable:!1,children:M[c]}),Object(y.jsx)("button",{className:"delete-style",onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this Faculty?")){var t=Le.filter((function(t){return t.FacultyID!==e}));Be(t)}}(e.FacultyID)},children:Object(y.jsx)(d.a,{})})]},c)}))})]})}):Object(y.jsx)("div",{})})}}}]);
//# sourceMappingURL=5.f38b712d.chunk.js.map