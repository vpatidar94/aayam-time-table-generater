(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[7],{50:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"a",(function(){return r})),c.d(t,"c",(function(){return n}));c(56);var a=[{FacultyID:22,Faculty:"MYK",subject:"Physics"},{FacultyID:3038,Faculty:"KPS",subject:"Chemistry"},{FacultyID:2029,Faculty:"MRS",subject:"Chemistry"},{FacultyID:3051,Faculty:"MAS",subject:"Physics"},{FacultyID:3050,Faculty:"RSS",subject:"Physics"},{FacultyID:25,Faculty:"NMS",subject:"Biology"},{FacultyID:3037,Faculty:"HDS",subject:"Chemistry"},{FacultyID:3032,Faculty:"MNM",subject:"Biology"},{FacultyID:1023,Faculty:"SJ",subject:"Biology"},{FacultyID:1025,Faculty:"AJ",subject:"Biology"},{FacultyID:1026,Faculty:"DMPS",subject:"Chemistry"},{FacultyID:1027,Faculty:"PSJ",subject:"Physics"},{FacultyID:3033,Faculty:"YBS",subject:"Biology"},{FacultyID:3030,Faculty:"AKS",subject:"Chemistry"},{FacultyID:2028,Faculty:"AMS",subject:"Maths"},{FacultyID:3031,Faculty:"NDS",subject:"Physics"},{FacultyID:3052,Faculty:"HWS",subject:"Physics"},{FacultyID:1029,Faculty:"JRS",subject:"Chemistry"},{FacultyID:3053,Faculty:"HTS",subject:"Chemistry"},{FacultyID:3054,Faculty:"NPS",subject:"Chemistry"},{FacultyID:3055,Faculty:"SKS",subject:"Maths"}],r=[{BatchID:1,Batch:"A1",CourseID:3},{BatchID:2,Batch:"B1",CourseID:2},{BatchID:3,Batch:"C1",CourseID:1},{BatchID:6,Batch:"A2",CourseID:3},{BatchID:7,Batch:"A4",CourseID:3},{BatchID:10,Batch:"A3",CourseID:3},{BatchID:15,Batch:"C2",CourseID:1},{BatchID:20,Batch:"JO1",CourseID:13},{BatchID:22,Batch:"JXII-1",CourseID:12},{BatchID:3042,Batch:"JXI-1",CourseID:11},{BatchID:3049,Batch:"B2",CourseID:2},{BatchID:3061,Batch:"JXI-2",CourseID:11},{BatchID:3078,Batch:"JEE adv",CourseID:13},{BatchID:3079,Batch:"JEE XL",CourseID:1025}],n=[{LectureID:1,Lecture:"L1",Time_From:"08:30 AM",Time_To:"09:45 AM"},{LectureID:2,Lecture:"L2",Time_From:"09:50 AM",Time_To:"11:05 AM"},{LectureID:3,Lecture:"L3",Time_From:"11:20 AM",Time_To:"12:35 PM"},{LectureID:4,Lecture:"L4",Time_From:"12:40 PM",Time_To:"01:55 PM"},{LectureID:5,Lecture:"L5",Time_From:"02:00 PM",Time_To:"03:15 PM"},{LectureID:6,Lecture:"L6",Time_From:"03:20 PM",Time_To:"04:35 PM"},{LectureID:7,Lecture:"L7",Time_From:"04:50 PM",Time_To:"06:05 PM"},{LectureID:8,Lecture:"L8",Time_From:"06:15 PM",Time_To:"07:30 PM"}]},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a="https://api.aayamcareerinstitute.co.in/api",r={UPLOAD_FILE:a+"/UploadFilesAttachment",GET_UPLOAD_FILE_URL:a+"/GetFiles",GET_SAVE_TIMETABLE_URL:a+"/AddUpdateTimeTable",GET_ALL_TT:a+"/GetTimeTable",GET_EDIT_TT:a+"/GetTimeTableByDate",REMOVE_TT:a+"/DeleteTimeTable"}},57:function(e,t,c){},58:function(e,t,c){"use strict";var a=c(8),r=c(51),n=c(7),s=c(5),o=c(9),u=c(1),i=(c(50),c(29)),l=(c(59),c(6));t.a=function(e){var t=e.showModal,c=e.setShowModal,h=e.teacherList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,m(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var j=Object(u.useState)(h),b=Object(n.a)(j,2),d=(b[0],b[1]),p=Object(u.useState)({}),f=Object(n.a)(p,2),O=f[0],m=f[1],y=Object(u.useState)({}),x=Object(n.a)(y,2),v=x[0],D=x[1],g=Object(u.useState)(""),I=Object(n.a)(g,2),F=I[0],T=I[1],S=Object(u.useState)(!1),w=Object(n.a)(S,2),B=w[0],L=w[1],C=O.Object,_=void 0===C?{}:C,E=(_.Batch,_.FacultyList),A=void 0===E?[]:E,k=_.UserList,N=void 0===k?[]:k,M={};N.forEach((function(e){M[e.UserID]=e.UserName}));var P=function(e){var t=e.target,c=t.name,n=t.checked;D(Object(r.a)(Object(r.a)({},v),{},Object(a.a)({},c,n)))},U=A.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{Faculty:M[e.FacultyID]||e.Faculty})})),G=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(i.x,{isOpen:t,toggle:G,style:{maxWidth:"320px"},children:[Object(l.jsx)(i.A,{toggle:G,children:"Select Teachers from the list"}),Object(l.jsxs)(i.y,{children:[F,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:U.map((function(e){var t=e.FacultyID,c=(e.bgColor,e.className,N.find((function(e){return e.UserID===t}))),a=c?c.UserName:e.Faculty;return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-faculty-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.FacultyID,checked:v[e.FacultyID]||!1,onChange:P,className:"addfaculty-checkbox-style"}),a]})},e.FacultyID)}))})})]}),Object(l.jsxs)(i.z,{children:[Object(l.jsx)(i.e,{color:"primary",onClick:function(){var e=h,t=function(t){if(v[t]){var c=U.find((function(e){return e.FacultyID===parseInt(t)}));if(c){var a=N.find((function(e){return e.UserID===c.FacultyID})),r=a?a.UserName:c.Faculty;e.some((function(e){return e.FacultyID===c.FacultyID}))||e.push({FacultyID:c.FacultyID,Faculty:r})}}};for(var c in v)t(c);d(e),B||(T(Object(l.jsx)(i.H,{color:"success",fade:!1,children:"Teachers added successfully"})),setTimeout((function(){L(!1),T("")}),3e3))},children:"Add"})," ",Object(l.jsx)(i.e,{color:"secondary",onClick:G,children:"Close"})]})]})})}},59:function(e,t,c){},60:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c(5),r=c(9),n=c(17),s=c(16),o=c(52),u=Object(n.a)((function e(){Object(s.a)(this,e),this.getTtList=Object(r.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(o.a.GET_ALL_TT,{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),this.getEditTt=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var c,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(o.a.GET_EDIT_TT,{method:"POST",headers:c,body:JSON.stringify({FromDate:t.replaceAll("-","/")})});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.addUpdateTt=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var c,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(o.a.GET_SAVE_TIMETABLE_URL,{method:"POST",headers:c,body:JSON.stringify(t)});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.removeTtById=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var c,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new Headers).append("Content-Type","application/json"),e.next=5,fetch(o.a.REMOVE_TT,{method:"POST",headers:c,body:t});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}))},61:function(e,t,c){"use strict";c.r(t);var a=c(8),r=c(51),n=c(7),s=c(5),o=c(9),u=c(1),i=(c(50),c(29)),l=(c(57),c(6));t.default=function(e){var t=e.showModal,c=e.setShowModal,h=e.batchList;Object(u.useEffect)((function(){if(t){var e=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.aayamcareerinstitute.co.in/api/GetMasterData");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,m(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t]);var j=Object(u.useState)(h),b=Object(n.a)(j,2),d=(b[0],b[1]),p=Object(u.useState)({}),f=Object(n.a)(p,2),O=f[0],m=f[1],y=Object(u.useState)({}),x=Object(n.a)(y,2),v=x[0],D=x[1],g=Object(u.useState)(""),I=Object(n.a)(g,2),F=I[0],T=I[1],S=Object(u.useState)(!1),w=Object(n.a)(S,2),B=w[0],L=w[1],C=O.Object,_=(void 0===C?{}:C).Batch,E=void 0===_?[]:_,A=function(e){var t=e.target,c=t.name,n=t.checked;D(Object(r.a)(Object(r.a)({},v),{},Object(a.a)({},c,n)))},k=function(){c(!1)};return Object(l.jsx)("div",{children:Object(l.jsxs)(i.x,{isOpen:t,toggle:k,style:{maxWidth:"320px"},children:[Object(l.jsx)(i.A,{toggle:k,children:"Select Batches from the list"}),Object(l.jsxs)(i.y,{children:[F,Object(l.jsx)("div",{className:"batch-list-container",style:{maxHeight:"300px",overflowY:"scroll",maxWidth:"300px"},children:Object(l.jsx)("ul",{className:"batch-list",style:{listStyle:"none"},children:E.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"add-batch-style",children:[Object(l.jsx)("input",{type:"checkbox",name:e.BatchID,checked:v[e.BatchID]||!1,onChange:A,className:"addbatch-checkbox-style"}),e.Batch]})},e.BatchID)}))})})]}),Object(l.jsxs)(i.z,{children:[Object(l.jsx)(i.e,{color:"primary",onClick:function(){var e=h,t=function(t){if(v[t]){var c=E.find((function(e){return e.BatchID===parseInt(t)}));c&&!e.find((function(e){return e.BatchID===c.BatchID}))&&e.push({BatchID:c.BatchID,Batch:c.Batch,CourseID:c.CourseID})}};for(var c in v)t(c);d(e),B||(T(Object(l.jsx)(i.H,{color:"success",fade:!1,children:"Batches added successfully"})),setTimeout((function(){L(!1),T("")}),3e3))},children:"Add"})," ",Object(l.jsx)(i.e,{color:"secondary",onClick:k,children:"Close"})]})]})})}},64:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var a=c(5),r=c(9),n=c(17),s=c(16),o=c(52),u=Object(n.a)((function e(){Object(s.a)(this,e),this.getWattsappApi=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,c,r,n){var s,o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("cel",r),console.log("file",n),e.next=7,fetch("https://ziper.io/api/send.php?"+new URLSearchParams({number:r,type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:n,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 7:return s=e.sent,e.next=10,s.json();case 10:return o=e.sent,e.abrupt("return",o);case 14:throw e.prev=14,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,c,a,r){return e.apply(this,arguments)}}(),this.getWattsappGroupApiTeachers=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,c,r){var n,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",r),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919977116612-1595572006@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:r,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return n=e.sent,e.next=9,n.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.getWattsappGroupApiOthers=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,c,r){var n,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("url",t),console.log("mesage",c),console.log("file",r),e.next=6,fetch("https://ziper.io/api/sendgroupmsg.php?"+new URLSearchParams({group_id:"919826362001-1628170376@g.us",type:"media",message:c,media_url:"https://api.aayamcareerinstitute.co.in/"+t,filename:r,instance_id:"6453479F141A2",access_token:"0a3e27126c2c239bdf7f9128943ef9c0"}),{method:"GET"});case 6:return n=e.sent,e.next=9,n.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,c,a){return e.apply(this,arguments)}}(),this.uplaodFile=function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var c,r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(c=new FormData).append("file",t,t.name),e.next=5,fetch(o.a.UPLOAD_FILE,{method:"POST",body:c});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),this.getUploadedFile=Object(r.a)(Object(a.a)().mark((function e(){var t,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(o.a.GET_UPLOAD_FILE_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})});case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(e.t0.message,e.t0.options);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))}))},77:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var a=c(10),r=c(8),n=c(51),s=c(5),o=c(9),u=c(7),i=c(1),l=c(73),h=c(50),j=(c(77),c(71)),b=c.n(j),d=c(29),p=c(61),f=c(64),O=c(58),m=c(60),y=c(6);t.default=function(){var e=Object(i.useState)(0),t=Object(u.a)(e,2),c=t[0],j=t[1],x=Object(i.useState)(null),v=Object(u.a)(x,2),D=v[0],g=v[1],I=Object(i.useState)({}),F=Object(u.a)(I,2),T=F[0],S=F[1],w=Object(i.useState)(!1),B=Object(u.a)(w,2),L=B[0],C=B[1],_=Object(i.useState)({}),E=Object(u.a)(_,2),A=E[0],k=E[1],N=Object(i.useState)({}),M=Object(u.a)(N,2),P=M[0],U=M[1],G=Object(i.useState)({}),R=Object(u.a)(G,2),J=R[0],W=R[1],z=Object(i.useState)([]),H=Object(u.a)(z,2),K=H[0],V=H[1],X=Object(i.useState)(null),Y=Object(u.a)(X,2),q=Y[0],Q=(Y[1],Object(i.useState)([917898118503])),Z=Object(u.a)(Q,2),$=(Z[0],Z[1],Object(i.useState)(h.a)),ee=Object(u.a)($,2),te=ee[0],ce=(ee[1],Object(i.useState)(null)),ae=Object(u.a)(ce,2),re=(ae[0],ae[1]),ne=Object(i.useState)(!1),se=Object(u.a)(ne,2),oe=se[0],ue=se[1],ie=Object(i.useState)(!1),le=Object(u.a)(ie,2),he=le[0],je=le[1],be=Object(i.useState)(""),de=Object(u.a)(be,2),pe=de[0],fe=de[1],Oe=Object(i.useState)(""),me=Object(u.a)(Oe,2),ye=me[0],xe=me[1];Object(i.useEffect)((function(){var e=document.querySelector(".table-style");if(e){var t=e.offsetWidth;j(t)}}),[]),Object(i.useEffect)((function(){L&&(alert("Two same teachers found in the same row"),C(!1),setTimeout((function(){S({})}),3e3))}),[L]),Object(i.useEffect)((function(){L&&C(!1)}),[L]);var ve=Object(i.useRef)(null),De=["#D4E6F1","#E8DAEF","#008080","#808000","#C39BD3","#76D7C4","#3498DB","#358b79","#847f86","rgb(251, 235, 9)","#CA6F1E","#CCCCFF","#F4D03F","rgb(199, 185, 84)","#979A9A","#F0B27A","rgb(117, 98, 179)","#CD5C5C","#40E0D0","#DAF7A6","#008080","#808000","#FADBD8","green","yellow","white","red","pink"],ge=function(){var e=46656*Math.random()|0,t=46656*Math.random()|0;return(e=("000"+e.toString(36)).slice(-3))+(t=("000"+t.toString(36)).slice(-3))},Ie=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){var t,c,a,r,n,o,u,i,l,h,j,d,p;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(ve.current);case 2:for(t=e.sent,c=t.toDataURL(),re(c),a=atob(c.split(",")[1]),r=c.split(",")[0].split(":")[1].split(";")[0],n=new Uint8Array(a.length),o=0;o<a.length;o++)n[o]=a.charCodeAt(o);return u=new Blob([n],{type:r}),i=ge(),l=new File([u],i+".jpg"),h=i+".jpg",e.next=15,(new f.a).uplaodFile(l);case 15:if("Success"!==e.sent){e.next=38;break}return e.next=19,(new f.a).getUploadedFile();case 19:if(d=e.sent,!((null===(j=d.Object)||void 0===j?void 0:j.length)>0)){e.next=38;break}return p=d.Object.reverse().find((function(e){var t;return(null===(t=e.Title)||void 0===t?void 0:t.indexOf(i))>=0})),e.prev=22,e.next=25,(new f.a).getWattsappGroupApiOthers(p.LongURL,"time table",h);case 25:e.next=30;break;case 27:e.prev=27,e.t0=e.catch(22),console.log("error");case 30:return e.prev=30,e.next=33,(new f.a).getWattsappGroupApiTeachers(p.LongURL,"time table",h);case 33:e.next=38;break;case 35:e.prev=35,e.t1=e.catch(30),console.log("error");case 38:alert("Time table image sent successfully");case 39:case"end":return e.stop()}}),e,null,[[22,27],[30,35]])})));return function(){return e.apply(this,arguments)}}(),Fe=A,Te=function(e,t){if(console.log(t),console.log("jjjjj",J),console.log("drag cell key",D),D){var c,s=J[D],o=J[t];W(Object(n.a)(Object(n.a)({},J),{},(c={},Object(r.a)(c,D,o),Object(r.a)(c,t,s),c))),g(null)}else{var u=J;J[t]=Fe.current,W(Object(n.a)({},u)),k({});var i=P;i[Fe.current.teacher]?i[Fe.current.teacher]+=1:i[Fe.current.teacher]=1,U(Object(n.a)({},i)),function(e){var t=e.split("_")[0],c=[];for(var a in J)a.startsWith(t)&&c.push({key:a,teacher:J[a].teacher});var r=c.reduce((function(e,t){return e[t.teacher]?e[t.teacher].push(t.key):e[t.teacher]=[t.key],e}),{}),n=Object.values(r).filter((function(e){return e.length>1})).flat();!Object.keys(T).includes(e)&&n.includes(e)&&(C(!0),S(n.reduce((function(e,t){return e[t]=!0,e}),{})))}(t);var l=J[t],j=t.split("_")[1],b=t.split("_")[0],d=l.teacher,p=h.a.find((function(e){return e.BatchID==j}));console.log("xxxx xx xx teacher ",l),console.log("xxxx xx xx batchId ",j),console.log("xxxx xx xx lectureId",b),console.log("xxxx xx xx teacherAssignment",J);var f=h.c.find((function(e){return e.LectureID==b})),O=h.b.find((function(e){return e.Faculty==d}));console.log("iiii",O);var m={ID:"0",TimeTableID:"0",LectureName:""};m.Batch=p,m.Lecture=f,m.Subject=O.subject,m.FacultyID=O.FacultyID,m.IsActive=!0,m.CreatedByUserID="1",m.CreatedOnDate="02/05/2023",console.log("fff",m),console.log("zzzz",l);var y=K;y.push(m),V(Object(a.a)(y))}},Se=function(e){for(var t=e.target;t&&(!t.classList||!t.classList.contains("each-block"));)t=t.parentNode;if(t&&""!==t.innerText.trim())return!1;e.preventDefault()},we=function(){var e=Object(o.a)(Object(s.a)().mark((function e(){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(new m.a).saveTt(pe,ye,K);case 2:e.sent,alert("time table saved successfully");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"bg-container",children:[Object(y.jsx)("h1",{className:"heading-style",children:"CLASS SCHEDULE"}),Object(y.jsxs)("div",{className:"button-group added-style",children:[Object(y.jsx)(d.e,{className:"btn ",color:"info",onClick:function(){ue(!0)},children:"Add Batches"}),oe&&Object(y.jsx)(p.default,{showModal:oe,setShowModal:ue}),q,Object(y.jsx)(d.e,{className:"btn",color:"info",onClick:function(){je(!0)},children:"Add Teachers"}),he&&Object(y.jsx)(O.a,{showModal:he,setShowModal:je}),Object(y.jsx)(d.e,{className:"btn",color:"info",onClick:we,children:"Save"}),Object(y.jsx)(d.e,{className:"btn",color:"info",onClick:Ie,children:"Post"})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{ref:ve,children:[Object(y.jsx)("br",{}),Object(y.jsx)(d.q,{children:Object(y.jsxs)("div",{className:"time-table-date-style",children:[Object(y.jsxs)(d.r,{className:"label-date-allignment",children:[Object(y.jsx)("p",{children:"From:"}),Object(y.jsx)(d.t,{id:"fromDate",name:"date",type:"date",onChange:function(e){!function(e){fe(e.target.value)}(e)},className:"input-size"})]}),Object(y.jsxs)(d.r,{className:"label-date-allignment",children:[Object(y.jsx)("p",{children:"To:"}),Object(y.jsx)(d.t,{id:"toDate",name:"date",type:"date",onChange:function(e){!function(e){xe(e.target.value)}(e)},className:"input-size"})]})]})}),Object(y.jsx)("table",{className:"table-style",children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("div",{className:"for-time",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"F-style time-style",children:"Time"}),h.a.map((function(e){return Object(y.jsx)("td",{className:"F-style batch-style",children:e.Batch},h.a.BatchID)}))]})}),Object(y.jsx)("tr",{children:h.c.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsxs)("td",{className:"F-style time-style",children:[e.Time_From,"-",e.Time_To]}),te.map((function(t){var c,a,r,s,o=e.LectureID+"_"+t.BatchID;return Object(y.jsx)("td",{draggable:!0,onDragOver:Se,onDrop:function(e){return Te(0,o)},onDragStart:function(e){return J[o]&&function(e,t){g(t)}(0,o)},id:o,className:"each-block ".concat(T[o]?"blink":""),style:{backgroundColor:null===(c=J[o])||void 0===c?void 0:c.color},children:J[o]&&Object(y.jsxs)("div",{className:"teacname-cross-style ".concat(null===(a=J[o])||void 0===a?void 0:a.className," "),children:[Object(y.jsx)("div",{className:"teacher-name",children:null===(r=J[o])||void 0===r?void 0:r.teacher}),Object(y.jsx)("div",{className:"cross-btn-container",children:null!==(s=J[o])&&void 0!==s&&s.teacher?Object(y.jsx)("button",{className:"cross-style",onClick:function(){return function(e){var t=J;W(Object(n.a)({},t)),k({});var c=P;c[J[e].teacher]-=1,delete J[e].teacher,delete J[e].color,U(c)}(o)},children:Object(y.jsx)(l.a,{})}):""})]})},o)}))]})}))})]})}),Object(y.jsx)("br",{})]})}),Object(y.jsx)("div",{className:"teacher-container",style:{maxWidth:c},children:h.b.map((function(e,t){var a=e.FacultyID,r=e.Faculty;return Object(y.jsxs)("div",{style:{maxWidth:c,backgroundColor:De[t%De.length]},className:"teacher-item",draggable:!0,onDragStart:function(e){return c={teacher:r,color:De[t%De.length]},Fe.current=c,void console.log(c);var c},children:[Object(y.jsx)("h3",{children:r}),P[r]>0&&Object(y.jsx)("span",{className:"counter-item ",draggable:!1,children:P[r]})]},a)}))})]})})}}}]);
//# sourceMappingURL=7.f41f7f91.chunk.js.map