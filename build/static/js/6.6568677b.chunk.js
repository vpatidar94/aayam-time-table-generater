(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[6],{50:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return n})),c.d(t,"c",(function(){return r}));c(57);var a=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"},{FacultyID:3054,Faculty:"NPS",subject:"Chemistry"},{FacultyID:3055,Faculty:"SKS",subject:"Maths"}],n=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:3078,Batch:"JEE adv",CourseID:13},{BatchID:3079,Batch:"JEE XL",CourseID:1025}],r=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c(17),n=c(16),r=Object(a.a)((function e(){Object(n.a)(this,e)}));r.emit=function(e){var t=new CustomEvent("spinner-load",{detail:e});window.dispatchEvent(t)}},53:function(e,t,c){"use strict";c.d(t,"a",(function(){return n}));var a="https://api.aayamcareerinstitute.co.in/api",n={UPLOAD_FILE:a+"/UploadFilesAttachment",GET_UPLOAD_FILE_URL:a+"/GetFiles",GET_SAVE_TIMETABLE_URL:a+"/AddUpdateTimeTable",GET_ALL_TT:a+"/GetTimeTable",GET_EDIT_TT:a+"/GetTimeTableByDate",REMOVE_TT:a+"/DeleteTimeTable"}},58:function(e,t,c){},59:function(e,t,c){"use strict";var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),u=c(1),o=(c(50),c(29)),l=(c(60),c(6));t.a=function(e){var t=e.showModal,c=e.setShowModal,j=e.teacherList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,O(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var d=Object(u.useState)(j),b=Object(r.a)(d,2),h=(b[0],b[1]),f=Object(u.useState)({}),m=Object(r.a)(f,2),p=m[0],O=m[1],v=Object(u.useState)({}),y=Object(r.a)(v,2),D=y[0],x=y[1],I=Object(u.useState)(""),F=Object(r.a)(I,2),T=F[0],g=F[1],w=Object(u.useState)(!1),B=Object(r.a)(w,2),S=B[0],C=B[1],L=p.Object,A=void 0===L?{}:L,_=(A.Batch,A.FacultyList),E=void 0===_?[]:_,k=A.UserList,N=void 0===k?[]:k,M={};N.forEach((function(e){M[e.UserID]=e.UserName}));var P=function(e){var t=e.target,c=t.name,r=t.checked;x(Object(n.a)(Object(n.a)({},D),{},Object(a.a)({},c,r)))},U=E.map((function(e){return Object(n.a)(Object(n.a)({},e),{},{Faculty:M[e.FacultyID]||e.Faculty})})),G=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(o.A,{isOpen:t,toggle:G,centered:!0,children:[Object(l.jsx)(o.D,{toggle:G,children:"Select Teachers from the list"}),Object(l.jsxs)(o.B,{children:[T,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:U.map((function(e){var t=e.FacultyID,c=(e.bgColor,e.className,N.find((function(e){return e.UserID===t}))),a=c?c.UserName:e.Faculty;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-faculty-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.FacultyID,checked:D[e.FacultyID]||!1,onChange:P,className:"addfaculty-checkbox-style"}),a]})},e.FacultyID)}))})})]}),Object(l.jsxs)(o.C,{children:[Object(l.jsx)(o.e,{color:"primary",onClick:function(){var e=j,t=function(t){if(D[t]){var c=U.find((function(e){return e.FacultyID===parseInt(t)}));if(c){var a=N.find((function(e){return e.UserID===c.FacultyID})),n=a?a.UserName:c.Faculty;e.some((function(e){return e.FacultyID===c.FacultyID}))||e.push({FacultyID:c.FacultyID,Faculty:n})}}};for(var c in D)t(c);h(e),S||(g(Object(l.jsx)(o.K,{color:"success",fade:!1,children:"Teachers added successfully"})),setTimeout((function(){C(!1),g("")}),3e3)),G()},children:"Add"})," ",Object(l.jsx)(o.e,{color:"secondary",onClick:G,children:"Close"})]})]})})}},60:function(e,t,c){},61:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),u=c(53),o=Object(r.a)((function e(){Object(s.a)(this,e),this.getTtList=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),e.next=4,fetch(u.a.GET_ALL_TT,{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,i.a.emit(!1),e.abrupt("return",c);case 12:throw e.prev=12,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),this.getEditTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),(c=new Headers).append("Content-Type","application/json"),e.next=6,fetch(u.a.GET_EDIT_TT,{method:"POST",headers:c,body:JSON.stringify({FromDate:t.replaceAll("-","/")})});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,i.a.emit(!1),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),this.addUpdateTt=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),(c=new Headers).append("Content-Type","application/json"),e.next=6,fetch(u.a.GET_SAVE_TIMETABLE_URL,{method:"POST",headers:c,body:JSON.stringify(t)});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,i.a.emit(!1),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),this.removeTtById=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),(c=new Headers).append("Content-Type","application/json"),e.next=6,fetch(u.a.REMOVE_TT,{method:"POST",headers:c,body:t});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,i.a.emit(!1),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()}))},62:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(51),r=c(7),s=c(5),i=c(9),u=c(1),o=(c(50),c(29)),l=(c(58),c(6));t.default=function(e){var t=e.showModal,c=e.setShowModal,j=e.batchList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,O(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var d=Object(u.useState)(j),b=Object(r.a)(d,2),h=(b[0],b[1]),f=Object(u.useState)({}),m=Object(r.a)(f,2),p=m[0],O=m[1],v=Object(u.useState)({}),y=Object(r.a)(v,2),D=y[0],x=y[1],I=Object(u.useState)(""),F=Object(r.a)(I,2),T=F[0],g=F[1],w=Object(u.useState)(!1),B=Object(r.a)(w,2),S=B[0],C=B[1],L=p.Object,A=(void 0===L?{}:L).Batch,_=void 0===A?[]:A,E=function(e){var t=e.target,c=t.name,r=t.checked;x(Object(n.a)(Object(n.a)({},D),{},Object(a.a)({},c,r)))},k=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(o.A,{centered:!0,isOpen:t,toggle:k,children:[Object(l.jsx)(o.D,{toggle:k,children:"Select Batches from the list"}),Object(l.jsxs)(o.B,{children:[T,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:_.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-batch-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.BatchID,checked:D[e.BatchID]||!1,onChange:E,className:"addbatch-checkbox-style"}),e.Batch]})},e.BatchID)}))})})]}),Object(l.jsxs)(o.C,{children:[Object(l.jsx)(o.e,{color:"primary",onClick:function(){var e=j,t=function(t){if(D[t]){var c=_.find((function(e){return e.BatchID===parseInt(t)}));c&&!e.find((function(e){return e.BatchID===c.BatchID}))&&e.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in D)t(c);h(e),S||(g(Object(l.jsx)(o.K,{color:"success",fade:!1,children:"Batches added successfully"})),setTimeout((function(){C(!1),g("")}),3e3)),k()},children:"Add"})," ",Object(l.jsx)(o.e,{color:"secondary",onClick:k,children:"Close"})]})]})})}},65:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var a=c(5),n=c(9),r=c(17),s=c(16),i=c(52),u=c(53),o=Object(r.a)((function e(){Object(s.a)(this,e),this.getWattsappApi=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n,r){var s,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),e.next=4,fetch("https://ziper.io/api/send.php?"+new URLSearchParams({number:n,type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:r,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 4:return s=e.sent,e.next=7,s.json();case 7:return u=e.sent,i.a.emit(!1),e.abrupt("return",u);case 12:throw e.prev=12,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c,a,n){return e.apply(this,arguments)}}(),this.getWattsappGroupApiTeachers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),e.next=4,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919977116612-1595572006@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,i.a.emit(!1),e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.getWattsappGroupApiOthers=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t,c,n){var r,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),e.next=4,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919826362001-1628170376@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"647B3C9AA8D0A",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 4:return r=e.sent,e.next=7,r.json();case 7:return s=e.sent,i.a.emit(!1),e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.uplaodFile=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),(c=new FormData).append("file",t,t.name),e.next=6,fetch(u.a.UPLOAD_FILE,{method:"POST",body:c});case 6:return n=e.sent,e.next=9,n.json();case 9:return r=e.sent,i.a.emit(!1),e.abrupt("return",r);case 14:throw e.prev=14,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),this.getUploadedFile=Object(n.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.a.emit(!0),e.next=4,fetch(u.a.GET_UPLOAD_FILE_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 4:return t=e.sent,e.next=7,t.json();case 7:return c=e.sent,i.a.emit(!1),e.abrupt("return",c);case 12:throw e.prev=12,e.t0=e.catch(0),i.a.emit(!1),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))}))},74:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var a=["#D4E6F1","#E8DAEF","#008080","#808000","#C39BD3","#76D7C4","#3498DB","#358b79","#847f86","rgb(251, 235, 9)","#CA6F1E","#CCCCFF","#F4D03F","rgb(199, 185, 84)","#979A9A","#F0B27A","rgb(117, 98, 179)","#CD5C5C","#40E0D0","#DAF7A6","#CECCA9","#808000","#FADBD8","green","yellow","white","red","pink"]},80:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c(9),r=c(51),s=c(10),i=c(7),u=c(72),o=c.n(u),l=c(1),j=c(73),d=c(29),b=c(61),h=c(65),f=c(74),m=c(62),p=c(50),O=c(59),v=(c(80),c(6));t.default=function(){Object(l.useEffect)((function(){ge()}),[]);var e=Object(l.useState)({}),t=Object(i.a)(e,2),c=t[0],u=t[1],y=Object(l.useState)([]),D=Object(i.a)(y,2),x=D[0],I=D[1],F=Object(l.useState)({}),T=Object(i.a)(F,2),g=T[0],w=T[1],B=Object(l.useState)({}),S=Object(i.a)(B,2),C=S[0],L=S[1],A=Object(l.useState)({}),_=Object(i.a)(A,2),E=_[0],k=_[1],N=Object(l.useState)(!1),M=Object(i.a)(N,2),P=M[0],U=M[1],G=Object(l.useState)(null),J=Object(i.a)(G,2),R=J[0],H=J[1],K=Object(l.useState)(p.a),W=Object(i.a)(K,2),V=W[0],q=W[1],z=Object(l.useState)(p.b),X=Object(i.a)(z,2),Y=X[0],Q=X[1],Z=Object(l.useState)(!1),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ce=Object(l.useState)(!1),ae=Object(i.a)(ce,2),ne=ae[0],re=ae[1],se=Object(l.useState)(""),ie=Object(i.a)(se,2),ue=ie[0],oe=ie[1],le=Object(l.useState)(""),je=Object(i.a)(le,2),de=je[0],be=je[1],he=Object(l.useState)(""),fe=Object(i.a)(he,2),me=fe[0],pe=fe[1],Oe=Object(l.useState)(!1),ve=Object(i.a)(Oe,2),ye=ve[0],De=ve[1],xe=Object(l.useState)([917898118503,918349215747,919826362001,918349215747,917314058393,917869597239,919977116612,918085390900,918302184021,918358810742,919893640561,919713519598,919713030834,919827274005,919691938832,917043127836,919977711607,917298519996,919713191848,918871841238,917007794323,919669889020,918770153381,919770432150]),Ie=Object(i.a)(xe,2),Fe=Ie[0],Te=(Ie[1],Object(l.useRef)(null)),ge=function(){var e=[];p.b.forEach((function(t,c){t.color=f.a[c],e.push(t)})),Q([].concat(e))},we=function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("each-block"));)t=t.parentNode;if(t&&""!==t.innerText.trim())return!1;e.preventDefault()},Be=function(e,t,a){var n=c;if(R){var i=R.lecture.LectureID+"_"+R.batch.BatchID;n=g[i],Se(R.lecture.LectureID,R.batch.BatchID,g[i].FacultyID)}var o=g,l=t.LectureID+"_"+a.BatchID;g[l]=n,w(Object(r.a)({},o)),function(e,t,c){var a=x,n={ID:"0",TimeTableID:"0",LectureName:""};n.Batch=t,n.Lecture=e,n.Subject=c.subject,n.FacultyID=c.FacultyID,n.IsActive=!0,n.CreatedByUserID="1",n.CreatedOnDate="02/05/2023",a.push(n),I(Object(s.a)(a))}(t,a,n),function(e,t){var c=e+"_"+t,a=E;a[c]?a[c]+=1:a[c]=1,k(Object(r.a)({},a)),a[c]>1&&(U(!0),setTimeout((function(){U(!1)}),3e3))}(t.LectureID,n.FacultyID),function(e,t){var c=C;if(!c[e.FacultyID])return c[e.FacultyID]=1,void L(Object(r.a)({},c));var a=t+"_"+e.FacultyID;E&&E[a]&&E[a]>1||(c[e.FacultyID]+=1,L(Object(r.a)({},c)))}(n,t.LectureID),u({}),H(null)},Se=function(e,t,c){var a=g;delete a[e+"_"+t],w(Object(r.a)({},a));var n=x,i=null===n||void 0===n?void 0:n.findIndex((function(c){var a,n;return(null===(a=c.Batch)||void 0===a?void 0:a.BatchID)===t&&(null===(n=c.Lecture)||void 0===n?void 0:n.LectureID)===e}));console.log("xxx",i),i>=0&&(n.splice(i,1),I(Object(s.a)(n)));var u=E,o=e+"_"+c;u[o]>1?u[o]-=1:delete u[o],k(u);var l=e+"_"+c;if(!(E&&E[l]&&E[l]>=1)){var j=C;j[c]-=1,j[c]<=0&&delete j[c],L(j)}},Ce=function(e,t){if(!e||!t)return!1;var c=e+"_"+t;return console.log(c),E[c]>1},Le=function(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return(e=("000"+e.toString(36)).slice(-3))+(t=("000"+t.toString(36)).slice(-3))},Ae=function(){var e=Object(n.a)(Object(a.a)().mark((function e(){var t,c,n,r,s,i,u,l,j,b,f,m,p,O,y,D;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Te.current.style.width="max-content",e.next=3,o()(Te.current);case 3:for(t=e.sent,c=t.toDataURL(),n=atob(c.split(",")[1]),r=c.split(",")[0].split(":")[1].split(";")[0],s=new Uint8Array(n.length),i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return u=new Blob([s],{type:r}),l=Le(),j=new File([u],l+".jpg"),b=l+".jpg",e.next=15,(new h.a).uplaodFile(j);case 15:if(f=e.sent,Te.current.style.width="100%","Success"!==f){e.next=38;break}return e.next=20,(new h.a).getUploadedFile();case 20:if(p=e.sent,!((null===(m=p.Object)||void 0===m?void 0:m.length)>0)){e.next=38;break}O=p.Object.reverse().find((function(e){var t;return(null===(t=e.Title)||void 0===t?void 0:t.indexOf(l))>=0})),y=0;case 24:if(!(y<Fe.length)){e.next=38;break}return e.prev=25,D=Fe[y],e.next=29,(new h.a).getWattsappApi(O.LongURL,"time table",D,b);case 29:return e.abrupt("continue",35);case 32:return e.prev=32,e.t0=e.catch(25),e.abrupt("continue",35);case 35:y++,e.next=24;break;case 38:ye||(pe(Object(v.jsx)(d.K,{color:"success",fade:!1,children:"Time table image sent successfully"})),setTimeout((function(){De(!1),pe("")}),3e3));case 40:case"end":return e.stop()}}),e,null,[[25,32]])})));return function(){return e.apply(this,arguments)}}(),_e=function(){te(!0)},Ee=function(){re(!0)},ke=function(){var e=Object(n.a)(Object(a.a)().mark((function e(){var t,c,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V.map((function(e){return e.BatchID})),c={TimeTableID:0,Description:"time table save",DateType:de?"multiple":"single",FromDate:ue,ToDate:de,ShiftID:1,SessionID:6,Session:"2023-24",BatchID:t,LectureID:[1,2,3,4,5,6,7,8],IsActive:!0,CreatedByUserID:1,CreatedOnDate:new Date,LectureList:x},e.next=4,(new b.a).addUpdateTt(c);case 4:"Success"===(n=e.sent)?ye||(pe(Object(v.jsx)(d.K,{color:"success",fade:!1,children:"time table saved successfully"})),setTimeout((function(){De(!1),pe("")}),3e3)):ye||(pe(Object(v.jsx)(d.K,{color:"danger",fade:!1,children:null!==(r=null===n||void 0===n?void 0:n.ExceptionMessage)&&void 0!==r?r:"An error has occurred."})),setTimeout((function(){De(!1),pe("")}),3e3));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(e){var t=g;delete t[e],w({stateTeacherAssignment:t})};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"bg-container",children:[Object(v.jsx)(d.H,{children:Object(v.jsxs)(d.n,{children:[me,P?Object(v.jsx)(d.a,{color:"warning",children:"Two same teachers found in the same row"}):Object(v.jsx)(v.Fragment,{})]})}),Object(v.jsx)(d.H,{children:Object(v.jsx)(d.n,{children:Object(v.jsx)(d.t,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(d.H,{children:[Object(v.jsxs)("div",{className:"col-sm-12 col-md-3 label-date-allignment",children:[Object(v.jsxs)("span",{className:"date-label-style",children:["From",Object(v.jsx)("span",{style:{color:"red"},children:"*"}),":\xa0\xa0"]}),Object(v.jsx)(d.w,{id:"fromDate",name:"date",type:"date",defaultValue:ue,onChange:function(e){!function(e){oe(e.target.value)}(e)},className:"input-size",min:(new Date).toISOString().split("T")[0],placeholder:"From Date"})]}),Object(v.jsxs)("div",{className:"col-sm-12 col-md-3 label-date-allignment",children:[Object(v.jsx)("span",{className:"date-label-style",children:"To:\xa0\xa0"}),Object(v.jsx)(d.w,{id:"toDate",name:"date",type:"date",defaultValue:de,onChange:function(e){!function(e){be(e.target.value)}(e)},className:"input-size",min:(new Date).toISOString().split("T")[0]})]}),Object(v.jsxs)("div",{className:"d-lg-none",children:[Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"button-group",children:[Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:ke,disabled:""===ue,children:"Save"}),Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:Ae,children:"Post"}),Object(v.jsx)(d.f,{children:Object(v.jsxs)(d.L,{children:[Object(v.jsx)(d.s,{color:"info",caret:!0,children:"More Actions"}),Object(v.jsxs)(d.r,{children:[Object(v.jsx)(d.q,{onClick:_e,children:"Add Batches"}),Object(v.jsx)(d.q,{divider:!0}),Object(v.jsx)(d.q,{onClick:Ee,children:"Add Teachers"}),Object(v.jsx)(d.q,{divider:!0}),Object(v.jsx)(d.q,{onClick:Ne,children:"Clear ALL"})]})]})})]}),Object(v.jsx)("br",{})]}),Object(v.jsx)("div",{className:"d-none d-md-block col-md-6",children:Object(v.jsxs)("div",{className:"button-group",children:[Object(v.jsx)(d.e,{className:"btn ",color:"info",onClick:_e,children:"Add Batches"}),Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:Ee,children:"Add Teachers"}),Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:ke,disabled:""===ue,children:"Save"}),Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:Ae,children:"Post"}),Object(v.jsx)(d.e,{className:"btn",color:"info",onClick:Ne,children:"Clear ALL"})]})})]})})})})}),Object(v.jsx)(d.H,{children:Object(v.jsx)(d.n,{children:Object(v.jsxs)("div",{children:[ee&&Object(v.jsx)(m.default,{showModal:ee,setShowModal:te,batchList:V}),ne&&Object(v.jsx)(O.a,{showModal:ne,setShowModal:re,teacherList:Y}),Object(v.jsx)("div",{ref:Te,className:"table-container",children:Object(v.jsx)("table",{className:"table-style",children:Object(v.jsxs)("tbody",{children:[Object(v.jsx)("div",{className:"for-time",children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{className:"F-style time-style",children:"Time"}),V.map((function(e){return Object(v.jsxs)("td",{className:"F-style batch-style",children:[e.Batch,Object(v.jsx)("button",{className:"delete-style",onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this batch?")){var t=V.filter((function(t){return t.BatchID!==e}));q(t)}}(e.BatchID)},children:Object(v.jsx)(j.a,{})})]},e.BatchID)}))]})}),Object(v.jsx)("tr",{children:p.c.map((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsxs)("td",{className:"F-style time-style",children:[e.Time_From,"-",e.Time_To]}),V.map((function(t){var c,a,n,r,s,i,u,o=e.LectureID+"_"+t.BatchID;return Object(v.jsx)("td",{draggable:!(null===(c=g[o])||void 0===c||!c.Faculty),onDragOver:we,onDrop:function(c){return Be(0,e,t)},onDragStart:function(c){H({lecture:e,batch:t})},id:o,className:"each-block ".concat(Ce(e.LectureID,null!==(a=null===(n=g[o])||void 0===n?void 0:n.FacultyID)&&void 0!==a?a:null)?"blink":""),style:{backgroundColor:null===(r=g[o])||void 0===r?void 0:r.color},children:Object(v.jsxs)("div",{className:"teacname-cross-style ".concat(null===(s=g[o])||void 0===s?void 0:s.className," "),children:[Object(v.jsx)("div",{className:"teacher-name",children:null===(i=g[o])||void 0===i?void 0:i.Faculty}),Object(v.jsx)("div",{className:"cross-btn-container",children:null!==(u=g[o])&&void 0!==u&&u.Faculty?Object(v.jsx)("button",{className:"cross-style",onClick:function(){return Se(e.LectureID,t.BatchID,g[o].FacultyID)},children:Object(v.jsx)(j.a,{})}):Object(v.jsx)(v.Fragment,{})})]})},o)}))]})}))})]})})})]})})}),Object(v.jsx)(d.H,{children:Object(v.jsx)(d.n,{children:Object(v.jsx)("div",{className:"teacher-container",children:Y.map((function(e,t){var c=e.FacultyID,a=e.Faculty;return Object(v.jsxs)("div",{style:{backgroundColor:e.color},className:"teacher-item",draggable:!0,onDragStart:function(t){u(e)},onDragEnd:function(e){u({})},children:[Object(v.jsx)("span",{children:a}),C[c]>0&&Object(v.jsx)(d.b,{className:"counter-item",children:C[c]}),Object(v.jsx)("span",{onClick:function(){return function(e){if(window.confirm("Are you sure you want to delete this Faculty?")){var t=Y.filter((function(t){return t.FacultyID!==e}));Q(t)}}(e.FacultyID)},className:"remove-icon",color:"danger",children:Object(v.jsx)(j.a,{})})]},c)}))})})})]})})}}}]);
//# sourceMappingURL=6.6568677b.chunk.js.map