(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[11],{31:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));class a{}a.emit=e=>{const t=new CustomEvent("spinner-load",{detail:e});window.dispatchEvent(t)}},32:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));const a="https://api.aayamcareerinstitute.co.in/api",n={UPLOAD_FILE:a+"/UploadFilesAttachment",GET_UPLOAD_FILE_URL:a+"/GetFiles",GET_SAVE_TIMETABLE_URL:a+"/AddUpdateTimeTable",GET_ALL_TT:a+"/GetTimeTable",GET_EDIT_TT:a+"/GetTimeTableByDate",REMOVE_TT:a+"/DeleteTimeTable"}},40:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s(31),n=s(32);class c{constructor(){this.getTtList=async()=>{try{a.a.emit(!0);const e=await fetch(n.a.GET_ALL_TT,{method:"GET"}),t=await e.json();return a.a.emit(!1),t}catch(e){throw a.a.emit(!1),new Error(e.message,e.options)}},this.getEditTt=async e=>{try{a.a.emit(!0);const t=new Headers;t.append("Content-Type","application/json");const s=await fetch(n.a.GET_EDIT_TT,{method:"POST",headers:t,body:JSON.stringify({FromDate:e.replaceAll("-","/")})}),c=await s.json();return a.a.emit(!1),c}catch(t){throw a.a.emit(!1),new Error(t.message,t.options)}},this.addUpdateTt=async e=>{try{a.a.emit(!0);const t=new Headers;t.append("Content-Type","application/json");const s=await fetch(n.a.GET_SAVE_TIMETABLE_URL,{method:"POST",headers:t,body:JSON.stringify(e)}),c=await s.json();return a.a.emit(!1),c}catch(t){throw a.a.emit(!1),new Error(t.message,t.options)}},this.removeTtById=async e=>{try{a.a.emit(!0);const t=new Headers;t.append("Content-Type","application/json");const s=await fetch(n.a.REMOVE_TT,{method:"POST",headers:t,body:e}),c=await s.json();return a.a.emit(!1),c}catch(t){throw a.a.emit(!1),new Error(t.message,t.options)}}}}},75:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s(40),c=s(9),i=s(7),r=s(62),o=s(5);t.default=()=>{Object(a.useEffect)((()=>{s()}),[]);const[e,t]=Object(a.useState)([]),s=async()=>{var e;const s=await(new n.a).getTtList();s.IsSuccessful&&(null===(e=s.Object)||void 0===e?void 0:e.length)>0&&(t(s.Object),console.log(s.Object))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)(c.g,{children:Object(o.jsxs)(c.h,{children:[Object(o.jsx)(c.m,{tag:"h5",children:"Previous Time Table"}),Object(o.jsxs)(c.J,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Table Id"}),Object(o.jsx)("th",{children:"Session"}),Object(o.jsx)("th",{children:"FromDate"}),Object(o.jsx)("th",{children:"To Date"}),Object(o.jsx)("th",{children:"Action"})]})}),Object(o.jsx)("tbody",{children:e.reverse().map(((e,t)=>Object(o.jsxs)("tr",{className:"border-top",children:[Object(o.jsx)("td",{children:e.TimeTableID}),Object(o.jsx)("td",{children:e.Session}),Object(o.jsx)("td",{children:e.FromDate}),Object(o.jsx)("td",{children:e.ToDate}),Object(o.jsxs)("td",{children:[Object(o.jsx)(i.c,{to:"/clone/"+e.TimeTableID+"/"+e.FromDate.replaceAll("/","-"),children:Object(o.jsx)(c.e,{onClick:t=>{var s;s=e,console.log("xxx xx xx row is ",s)},className:"btn",outline:!0,color:"primary",children:"Clone"})}),Object(o.jsx)(c.e,{className:"btn",color:"transparent",onClick:t=>{(async e=>{await(new n.a).removeTtById(e.TimeTableID)})(e)},children:Object(o.jsx)(r.a,{style:{color:"red"}})})]})]},e.TimeTableID)))})]})]})})})})}}}]);
//# sourceMappingURL=11.41af49b0.chunk.js.map