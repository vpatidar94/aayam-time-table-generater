(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[5],{50:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return r}));c(56);var a=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"},{FacultyID:3054,Faculty:"NPS",subject:"Chemistry"},{FacultyID:3055,Faculty:"SKS",subject:"Maths"}],n=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:3078,Batch:"JEE adv",CourseID:13},{BatchID:3079,Batch:"JEE XL",CourseID:1025}],r=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var a="https://api.aayamcareerinstitute.co.in/api",n={UPLOAD_FILE:a+"/UploadFilesAttachment",GET_UPLOAD_FILE_URL:a+"/GetFiles",GET_SAVE_TIMETABLE_URL:a+"/AddUpdateTimeTable",GET_ALL_TT:a+"/GetTimeTable",GET_EDIT_TT:a+"/GetTimeTableByDate",REMOVE_TT:a+"/DeleteTimeTable"}},57:function(e,t,c){},58:function(e,t,c){"use strict";var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),o=c(1),u=(c(50),c(29)),l=(c(59),c(6));t.a=function(e){var t=e.showModal,c=e.setShowModal,d=e.teacherList;Object(o.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var j=Object(o.useState)(d),b=Object(r.a)(j,2),h=(b[0],b[1]),f=Object(o.useState)({}),O=Object(r.a)(f,2),p=O[0],v=O[1],m=Object(o.useState)({}),D=Object(r.a)(m,2),y=D[0],x=D[1],I=Object(o.useState)(""),F=Object(r.a)(I,2),g=F[0],T=F[1],L=Object(o.useState)(!1),B=Object(r.a)(L,2),w=B[0],S=B[1],C=p.Object,A=void 0===C?{}:C,_=(A.Batch,A.FacultyList),k=void 0===_?[]:_,E=A.UserList,N=void 0===E?[]:E,M={};N.forEach((function(e){M[e.UserID]=e.UserName}));var P=function(e){var t=e.target,c=t.name,r=t.checked;x(Object(n.a)(Object(n.a)({},y),{},Object(a.a)({},c,r)))},U=k.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{Faculty:M[e.FacultyID]||e.Faculty})})),G=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(u.A,{isOpen:t,toggle:G,centered:!0,children:[Object(l.jsx)(u.D,{toggle:G,children:"Select Teachers from the list"}),Object(l.jsxs)(u.B,{children:[g,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:U.map((function(e){var t=e.FacultyID,c=(e.bgColor,e.className,N.find((function(e){return e.UserID===t}))),a=c?c.UserName:e.Faculty;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-faculty-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.FacultyID,checked:y[e.FacultyID]||!1,onChange:P,className:"addfaculty-checkbox-style"}),a]})},e.FacultyID)}))})})]}),Object(l.jsxs)(u.C,{children:[Object(l.jsx)(u.e,{color:"primary",onClick:function(){var e=d,t=function(t){if(y[t]){var c=U.find((function(e){return e.FacultyID===parseInt(t)}));if(c){var a=N.find((function(e){return e.UserID===c.FacultyID})),n=a?a.UserName:c.Faculty;e.some((function(e){return e.FacultyID===c.FacultyID}))||e.push({FacultyID:c.FacultyID,Faculty:n})}}};for(var c in y)t(c);h(e),w||(T(Object(l.jsx)(u.K,{color:"success",fade:!1,children:"Teachers added successfully"})),setTimeout((function(){S(!1),T("")}),3e3)),G()},children:"Add"})," ",Object(l.jsx)(u.e,{color:"secondary",onClick:G,children:"Close"})]})]})})}},59:function(e,t,c){},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),o=Object(r.a)((function e(){Object(s.a)(this,e),this.getTtList=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i.a.GET_ALL_TT,{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),this.getEditTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.GET_EDIT_TT,{method:"POST",headers:c,body:JSON.stringify({FromDate:t.replaceAll("-","/")})});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.addUpdateTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.GET_SAVE_TIMETABLE_URL,{method:"POST",headers:c,body:JSON.stringify(t)});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.removeTtById=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(i.a.REMOVE_TT,{method:"POST",headers:c,body:t});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}))},61:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),o=c(1),u=(c(50),c(29)),l=(c(57),c(6));t.default=function(e){var t=e.showModal,c=e.setShowModal,d=e.batchList;Object(o.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,v(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var j=Object(o.useState)(d),b=Object(r.a)(j,2),h=(b[0],b[1]),f=Object(o.useState)({}),O=Object(r.a)(f,2),p=O[0],v=O[1],m=Object(o.useState)({}),D=Object(r.a)(m,2),y=D[0],x=D[1],I=Object(o.useState)(""),F=Object(r.a)(I,2),g=F[0],T=F[1],L=Object(o.useState)(!1),B=Object(r.a)(L,2),w=B[0],S=B[1],C=p.Object,A=(void 0===C?{}:C).Batch,_=void 0===A?[]:A,k=function(e){var t=e.target,c=t.name,r=t.checked;x(Object(n.a)(Object(n.a)({},y),{},Object(a.a)({},c,r)))},E=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(u.A,{centered:!0,isOpen:t,toggle:E,children:[Object(l.jsx)(u.D,{toggle:E,children:"Select Batches from the list"}),Object(l.jsxs)(u.B,{children:[g,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:_.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-batch-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.BatchID,checked:y[e.BatchID]||!1,onChange:k,className:"addbatch-checkbox-style"}),e.Batch]})},e.BatchID)}))})})]}),Object(l.jsxs)(u.C,{children:[Object(l.jsx)(u.e,{color:"primary",onClick:function(){var e=d,t=function(t){if(y[t]){var c=_.find((function(e){return e.BatchID===parseInt(t)}));c&&!e.find((function(e){return e.BatchID===c.BatchID}))&&e.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in y)t(c);h(e),w||(T(Object(l.jsx)(u.K,{color:"success",fade:!1,children:"Batches added successfully"})),setTimeout((function(){S(!1),T("")}),3e3)),E()},children:"Add"})," ",Object(l.jsx)(u.e,{color:"secondary",onClick:E,children:"Close"})]})]})})}},64:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),o=Object(r.a)((function e(){Object(s.a)(this,e),this.getWattsappApi=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n,r){var s,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("cel",n),console.log("file",r),e.next=7,fetch("https://ziper.io/api/send.php?"+new URLSearchParams({number:n,type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:r,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 7:return s=e.sent,e.next=10,s.json();case 10:return i=e.sent,e.abrupt("return",i);case 14:throw e.prev=14,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,c,a,n){return e.apply(this,arguments)}}(),this.getWattsappGroupApiTeachers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",n),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919977116612-1595572006@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return r=e.sent,e.next=9,r.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.getWattsappGroupApiOthers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",n),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919826362001-1628170376@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return r=e.sent,e.next=9,r.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.uplaodFile=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new FormData).append("file",t,t.name),e.next=5,fetch(i.a.UPLOAD_FILE,{method:"POST",body:c});case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.getUploadedFile=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(i.a.GET_UPLOAD_FILE_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))}))},72:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var a=["#D4E6F1","#E8DAEF","#008080","#808000","#C39BD3","#76D7C4","#3498DB","#358b79","#847f86","rgb(251, 235, 9)","#CA6F1E","#CCCCFF","#F4D03F","rgb(199, 185, 84)","#979A9A","#F0B27A","rgb(117, 98, 179)","#CD5C5C","#40E0D0","#DAF7A6","#CECCA9","#808000","#FADBD8","green","yellow","white","red","pink"]},81:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(10),r=c(51),s=c(9),i=c(7),o=c(71),u=c.n(o),l=c(1),d=c(73),j=c(4),b=c(29),h=c(60),f=c(64),O=c(72),p=c(61),v=c(50),m=c(58),D=(c(81),c(6));t.default=function(){var e=Object(j.p)(),t=e.fromDateEdit;e.timeTableId;Object(l.useEffect)((function(){ke(),Ee()}),[]);var c=Object(l.useState)(null),o=Object(i.a)(c,2),y=o[0],x=o[1],I=Object(l.useState)({}),F=Object(i.a)(I,2),g=F[0],T=F[1],L=Object(l.useState)([]),B=Object(i.a)(L,2),w=B[0],S=B[1],C=Object(l.useState)({}),A=Object(i.a)(C,2),_=A[0],k=A[1],E=Object(l.useState)({}),N=Object(i.a)(E,2),M=N[0],P=N[1],U=Object(l.useState)({}),G=Object(i.a)(U,2),R=G[0],J=G[1],H=Object(l.useState)(!1),K=Object(i.a)(H,2),W=K[0],V=K[1],q=Object(l.useState)(null),z=Object(i.a)(q,2),X=z[0],Y=z[1],Q=Object(l.useState)(!1),Z=Object(i.a)(Q,2),$=Z[0],ee=Z[1],te=Object(l.useState)(!1),ce=Object(i.a)(te,2),ae=ce[0],ne=ce[1],re=Object(l.useState)(""),se=Object(i.a)(re,2),ie=se[0],oe=se[1],ue=Object(l.useState)(""),le=Object(i.a)(ue,2),de=le[0],je=le[1],be=Object(l.useState)(""),he=Object(i.a)(be,2),fe=he[0],Oe=he[1],pe=Object(l.useState)(!1),ve=Object(i.a)(pe,2),me=ve[0],De=ve[1],ye=Object(l.useState)([]),xe=Object(i.a)(ye,2),Ie=xe[0],Fe=xe[1],ge=Object(l.useState)([]),Te=Object(i.a)(ge,2),Le=Te[0],Be=Te[1],we=Object(l.useState)(!1),Se=Object(i.a)(we,2),Ce=Se[0],Ae=Se[1],_e=Object(l.useRef)(null),ke=function(){var e=[];v.b.forEach((function(t,c){t.color=O.a[c],e.push(t)})),Be([].concat(e))},Ee=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new h.a).getEditTt(t);case 2:if((c=e.sent).IsSuccessful){e.next=6;break}return Oe(Object(D.jsx)(b.K,{color:"danger",fade:!1,children:"Something went wrong"})),e.abrupt("return");case 6:x(Object(r.a)({},c.Object)),oe(c.Object.FromDate),je(c.Object.ToDate),Pe(c.Object),S(Object(n.a)(c.Object.LectureList)),Ne(c),Ae(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(e){var t,c,a=_;(null===(t=e.Object.LectureList)||void 0===t?void 0:t.length)>0&&(null===(c=e.Object.LectureList)||void 0===c||c.forEach((function(t){var c,n;if(null!==t&&void 0!==t&&null!==(c=t.Batch)&&void 0!==c&&c.BatchID&&null!==t&&void 0!==t&&null!==(n=t.Lecture)&&void 0!==n&&n.LectureName&&null!==t&&void 0!==t&&t.FacultyID){var s,i,o,u,l,d=v.c.find((function(e){var c;return e.Lecture===(null===t||void 0===t||null===(c=t.Lecture)||void 0===c?void 0:c.LectureName)})),j=v.b.find((function(e){return e.FacultyID===t.FacultyID}));if(null!==d&&void 0!==d&&d.LectureID&&null!==j&&void 0!==j&&j.FacultyID&&(null===e||void 0===e||null===(s=e.Object)||void 0===s||null===(i=s.BatchID)||void 0===i?void 0:i.indexOf(null===t||void 0===t||null===(o=t.Batch)||void 0===o?void 0:o.BatchID))>=0&&(null===e||void 0===e||null===(u=e.Object)||void 0===u||null===(l=u.LectureID)||void 0===l?void 0:l.indexOf(null===d||void 0===d?void 0:d.LectureID))>=0){var b,h=d.LectureID+"_"+(null===t||void 0===t||null===(b=t.Batch)||void 0===b?void 0:b.BatchID);_[h]||(a[h]=j,k(Object(r.a)({},a)),Ge(d,null===t||void 0===t?void 0:t.Batch,j),Re(d.LectureID,j.FacultyID))}}})));Me()},Me=function(){var e={};Object.keys(R).forEach((function(t){var c=t.split("_")[1];e[c]?e[c]+=1:e[c]=1})),P(Object(r.a)({},e))},Pe=function(e){if(e){var t,c=null===e||void 0===e||null===(t=e.Batch)||void 0===t?void 0:t.filter((function(t){var c;return(null===(c=e.BatchID)||void 0===c?void 0:c.indexOf(t.BatchID))>=0}));Fe(Object(n.a)(c))}},Ue=function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("each-block"));)t=t.parentNode;if(t&&""!==t.innerText.trim())return!1;e.preventDefault()},Ge=function(e,t,c){var a=w,r={ID:"0",TimeTableID:"0",LectureName:""};r.Batch=t,r.Lecture=e,r.Subject=c.subject,r.FacultyID=c.FacultyID,r.IsActive=!0,r.CreatedByUserID="1",r.CreatedOnDate="02/05/2023",a.push(r),S(Object(n.a)(a))},Re=function(e,t){var c=e+"_"+t,a=R;!a[c]||a[c]<1?a[c]=1:a[c]+=1,J(Object(r.a)({},a)),a[c]>1&&(V(!0),setTimeout((function(){V(!1)}),3e3))},Je=function(e,t,c){var a=g;if(X){var n=X.lecture.LectureID+"_"+X.batch.BatchID;a=_[n],He(X.lecture.LectureID,X.batch.BatchID,_[n].FacultyID)}var s=_,i=t.LectureID+"_"+c.BatchID;_[i]=a,k(Object(r.a)({},s)),Ge(t,c,a),Re(t.LectureID,a.FacultyID),function(e,t){var c=M;if(!c[e.FacultyID])return c[e.FacultyID]=1,void P(Object(r.a)({},c));var a=t+"_"+e.FacultyID;R&&R[a]&&R[a]>1||(c[e.FacultyID]+=1,P(Object(r.a)({},c)))}(a,t.LectureID),T({}),Y(null)},He=function(e,t,c){var a=_;delete a[e+"_"+t],k(Object(r.a)({},a));var s=w,i=null===s||void 0===s?void 0:s.findIndex((function(c){var a,n;return(null===(a=c.Batch)||void 0===a?void 0:a.BatchID)===t&&(null===(n=c.Lecture)||void 0===n?void 0:n.LectureID)===e}));i>=0&&(s.splice(i,1),S(Object(n.a)(s)));var o=R,u=e+"_"+c;o[u]>1?o[u]-=1:delete o[u],J(o);var l=e+"_"+c;if(!(R&&R[l]&&R[l]>=1)){var d=M;d[c]-=1,d[c]<=0&&delete d[c],P(d)}},Ke=function(e){if(!e)return"";var t=e.split("/");return"".concat(t[2],"-").concat(t[1],"-").concat(t[0])},We=function(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return(e=("000"+e.toString(36)).slice(-3))+(t=("000"+t.toString(36)).slice(-3))},Ve=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,n,r,s,i,o,l,d,j,h,O,p;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()(_e.current);case 2:for(t=e.sent,c=t.toDataURL(),n=atob(c.split(",")[1]),r=c.split(",")[0].split(":")[1].split(";")[0],s=new Uint8Array(n.length),i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return o=new Blob([s],{type:r}),l=We(),d=new File([o],l+".jpg"),j=l+".jpg",e.next=14,(new f.a).uplaodFile(d);case 14:if("Success"!==e.sent){e.next=35;break}return e.next=18,(new f.a).getUploadedFile();case 18:if(O=e.sent,!((null===(h=O.Object)||void 0===h?void 0:h.length)>0)){e.next=35;break}return p=O.Object.reverse().find((function(e){var t;return(null===(t=e.Title)||void 0===t?void 0:t.indexOf(l))>=0})),e.prev=21,e.next=24,(new f.a).getWattsappGroupApiOthers(p.LongURL,"time table",j);case 24:e.next=28;break;case 26:e.prev=26,e.t0=e.catch(21);case 28:return e.prev=28,e.next=31,(new f.a).getWattsappGroupApiTeachers(p.LongURL,"time table",j);case 31:e.next=35;break;case 33:e.prev=33,e.t1=e.catch(28);case 35:me||(Oe(Object(D.jsx)(b.K,{color:"success",fade:!1,children:"Time table image sent successfully"})),setTimeout((function(){De(!1),Oe("")}),3e3));case 37:case"end":return e.stop()}}),e,null,[[21,26],[28,33]])})));return function(){return e.apply(this,arguments)}}(),qe=function(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])},ze=function(){ee(!0)},Xe=function(){ne(!0)},Ye=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ie.map((function(e){return e.BatchID})),e.next=3,(new h.a).removeTtById(y.TimeTableID);case 3:return c={TimeTableID:0,Description:"time table save",DateType:de?"multiple":"single",FromDate:ie,ToDate:de,ShiftID:y.ShiftID,SessionID:y.SessionID,Session:y.Session,BatchID:t,LectureID:y.LectureID,IsActive:!0,CreatedByUserID:y.CreatedByUserID,CreatedOnDate:new Date,LectureList:w},e.next=6,(new h.a).addUpdateTt(c);case 6:"Success"===(n=e.sent)?me||(Oe(Object(D.jsx)(b.K,{color:"success",fade:!1,children:"time table saved successfully"})),setTimeout((function(){De(!1),Oe("")}),3e3)):me||(Oe(Object(D.jsx)(b.K,{color:"danger",fade:!1,children:null!==(r=null===n||void 0===n?void 0:n.ExceptionMessage)&&void 0!==r?r:"An error has occurred."})),setTimeout((function(){De(!1),Oe("")}),3e3));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Qe=function(e){var t=_;delete t[e],k({stateTeacherAssignment:t})};return Object(D.jsx)(D.Fragment,{children:Ce?Object(D.jsx)("div",{children:Object(D.jsxs)("div",{className:"bg-container",children:[Object(D.jsx)(b.H,{children:Object(D.jsxs)(b.n,{children:[fe,W?Object(D.jsx)(b.a,{color:"warning",children:"Two same teachers found in the same row"}):Object(D.jsx)(D.Fragment,{})]})}),Object(D.jsx)(b.H,{children:Object(D.jsx)(b.n,{children:Object(D.jsx)(b.t,{children:Object(D.jsx)("div",{children:Object(D.jsxs)(b.H,{children:[Object(D.jsxs)("div",{className:"col-sm-12 col-md-3 label-date-allignment",children:[Object(D.jsxs)("span",{className:"date-label-style",children:["From",Object(D.jsx)("span",{style:{color:"red"},children:"*"}),":\xa0\xa0"]}),Object(D.jsx)(b.w,{id:"fromDate",name:"fromDate",type:"date",defaultValue:Ke(ie),onChange:function(e){!function(e){var t=e.target.value;oe(qe(t))}(e)},className:"input-size"})]}),Object(D.jsxs)("div",{className:"col-sm-12 col-md-3 label-date-allignment",children:[Object(D.jsx)("span",{className:"date-label-style",children:"To:\xa0\xa0"}),Object(D.jsx)(b.w,{id:"toDate",name:"toDate",type:"date",defaultValue:Ke(de),onChange:function(e){!function(e){var t=e.target.value;je(qe(t))}(e)},className:"input-size"})]}),Object(D.jsxs)("div",{className:"d-lg-none",children:[Object(D.jsx)("br",{}),Object(D.jsxs)("div",{className:"button-group",children:[Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Ye,disabled:""===ie,children:"Save"}),Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Ve,children:"Post"}),Object(D.jsx)(b.f,{children:Object(D.jsxs)(b.L,{children:[Object(D.jsx)(b.s,{color:"info",caret:!0,children:"More Actions"}),Object(D.jsxs)(b.r,{children:[Object(D.jsx)(b.q,{onClick:ze,children:"Add Batches"}),Object(D.jsx)(b.q,{divider:!0}),Object(D.jsx)(b.q,{onClick:Xe,children:"Add Teachers"}),Object(D.jsx)(b.q,{divider:!0}),Object(D.jsx)(b.q,{onClick:Qe,children:"Clear ALL"})]})]})})]}),Object(D.jsx)("br",{})]}),Object(D.jsx)("div",{className:"d-none d-md-block col-md-6",children:Object(D.jsxs)("div",{className:"button-group",children:[Object(D.jsx)(b.e,{className:"btn ",color:"info",onClick:ze,children:"Add Batches"}),Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Xe,children:"Add Teachers"}),Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Ye,disabled:""===ie,children:"Save"}),Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Ve,children:"Post"}),Object(D.jsx)(b.e,{className:"btn",color:"info",onClick:Qe,children:"Clear ALL"})]})})]})})})})}),Object(D.jsx)(b.H,{children:Object(D.jsx)(b.n,{children:Object(D.jsxs)("div",{children:[$&&Object(D.jsx)(p.default,{showModal:$,setShowModal:ee,batchList:Ie}),ae&&Object(D.jsx)(m.a,{showModal:ae,setShowModal:ne,teacherList:Le}),Object(D.jsx)("div",{ref:_e,className:"table-container",children:Object(D.jsx)("table",{className:"table-style",children:Object(D.jsxs)("tbody",{children:[Object(D.jsx)("div",{className:"for-time",children:Object(D.jsxs)("tr",{children:[Object(D.jsx)("td",{className:"F-style time-style",children:"Time"}),Ie&&Ie.map((function(e){return Object(D.jsxs)("td",{className:"F-style batch-style",children:[e.Batch,Object(D.jsx)("button",{className:"delete-style",onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this batch?")){var t=Ie.filter((function(t){return t.BatchID!==e}));Fe(t)}}(e.BatchID)},children:Object(D.jsx)(d.a,{})})]},e.BatchID)}))]})}),Object(D.jsx)("tr",{children:v.c.map((function(e){return Object(D.jsxs)("div",{children:[Object(D.jsxs)("td",{className:"F-style time-style",children:[e.Time_From,"-",e.Time_To]}),Ie&&Ie.map((function(t){var c,a,n,r,s,i,o,u,l,j=e.LectureID+"_"+t.BatchID;return Object(D.jsx)("td",{draggable:!(null===(c=_[j])||void 0===c||!c.Faculty),onDragOver:Ue,onDrop:function(c){return Je(0,e,t)},onDragStart:function(c){Y({lecture:e,batch:t})},id:j,className:"each-block ".concat((u=e.LectureID,l=null!==(a=null===(n=_[j])||void 0===n?void 0:n.FacultyID)&&void 0!==a?a:null,u&&l&&R[u+"_"+l]>1?"blink":"")),style:{backgroundColor:null===(r=_[j])||void 0===r?void 0:r.color},children:Object(D.jsxs)("div",{className:"teacname-cross-style ".concat(null===(s=_[j])||void 0===s?void 0:s.className," "),children:[Object(D.jsx)("div",{className:"teacher-name",children:null===(i=_[j])||void 0===i?void 0:i.Faculty}),Object(D.jsx)("div",{className:"cross-btn-container",children:null!==(o=_[j])&&void 0!==o&&o.Faculty?Object(D.jsx)("button",{className:"cross-style",onClick:function(){return He(e.LectureID,t.BatchID,_[j].FacultyID)},children:Object(D.jsx)(d.a,{})}):Object(D.jsx)(D.Fragment,{})})]})},j)}))]})}))})]})})})]})})}),Object(D.jsx)(b.H,{children:Object(D.jsx)(b.n,{children:Object(D.jsx)("div",{className:"teacher-container",children:Le.map((function(e,t){var c=e.FacultyID,a=e.Faculty;return Object(D.jsxs)("div",{style:{backgroundColor:e.color},className:"teacher-item",draggable:!0,onDragStart:function(t){T(e)},onDragEnd:function(e){T({})},children:[Object(D.jsx)("span",{children:a}),M[c]>0&&Object(D.jsx)(b.b,{className:"counter-item",children:M[c]}),Object(D.jsx)("span",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this Faculty?")){var t=Le.filter((function(t){return t.FacultyID!==e}));Be(t)}}(e.FacultyID)},className:"remove-icon",color:"danger",children:Object(D.jsx)(d.a,{})})]},c)}))})})})]})}):Object(D.jsx)("div",{})})}}}]);
//# sourceMappingURL=5.490fb84a.chunk.js.map