(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),i=a(25),l=a.n(i),r=(a(69),a(60)),o=a(6),d=(a(70),a(28)),j=a(17),b=function(){return Object(n.jsxs)(d.a,{bg:"light",expand:"lg",fixed:"bottom",children:[Object(n.jsx)(d.a.Brand,{id:"",href:"/",children:Object(n.jsx)("img",{src:"/logo.png",height:"40vmin"})}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(j.a,{className:"mr-auto",children:[Object(n.jsx)(j.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(j.a.Link,{href:"/about",children:"The Speaker"}),Object(n.jsx)(j.a.Link,{href:"/announcements",children:"Announcements"}),Object(n.jsx)(j.a.Link,{href:"/attendance",children:"Mark me present"}),Object(n.jsx)(j.a.Link,{href:"/question",children:"Ask a question"})]})})]})},O=function(){return Object(n.jsx)("div",{style:{paddingTop:"10vmin",textAlign:"center"},id:"pageNotFound",children:Object(n.jsx)("img",{style:{width:"80vmin"},src:"https://www.joulin.com/images/404.png"})})},u=(a(74),function(){return Object(n.jsxs)("div",{id:"homepage",children:[Object(n.jsx)("div",{id:"homepage-header",children:"Pioneers"}),Object(n.jsx)("div",{id:"homepage-sub-header",children:"presents"}),Object(n.jsx)("div",{id:"homepage-title",children:"Leadership Session"})]})}),h=function(){return Object(n.jsx)("div",{id:"aboutpage",children:"This is About Page"})},m=function(){return Object(n.jsx)("div",{id:"announcementsPage",children:"This is AnnouncementsPage Page"})},x=a(9),g=a(23),p=a.n(g),S=(a(93),a(7)),v=a(21),f=a(15),E=a(24),T=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(localStorage.getItem("name")||""),l=Object(x.a)(i,2),r=l[0],o=l[1],d=Object(c.useState)(localStorage.getItem("email")||""),j=Object(x.a)(d,2),b=j[0],O=j[1],u=Object(c.useState)(!1),h=Object(x.a)(u,2),m=h[0],g=h[1],T=Object(c.useState)(""!==r&&""!==b),_=Object(x.a)(T,2),P=_[0],R=_[1];Object(c.useEffect)((function(){console.log(P)}),[]);return P?"Hi ".concat(r,"! You have been marked present"):Object(n.jsxs)(S.a,{id:"attendancePage",children:[Object(n.jsxs)(S.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(S.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Full Name"}),Object(n.jsxs)(f.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(S.a.Control,{type:"text",placeholder:"Name as in seneca records",value:r,onChange:function(e){o(e.target.value)},disabled:a}),Object(n.jsx)(S.a.Text,{children:!r.length>0?"Enter a valid name":null})]})]}),Object(n.jsxs)(S.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(S.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Email"}),Object(n.jsxs)(f.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(S.a.Control,{type:"email",placeholder:"Seneca email id",value:b,onChange:function(e){var t=e.target.value;O(t),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?g(!0):g(!1)},disabled:a}),Object(n.jsx)(S.a.Text,{children:m?null:"Enter a valid email id"})]})]}),Object(n.jsx)(S.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(f.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(E.a,{className:"btn-block",onClick:function(){if(s(!0),r.length>0&&m){var e={attendeeName:r,attendeeEmail:b};p.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL,"/api/attendees"),e).then((function(e){200===e.status?(alert("Success! You have been marked present."),o(""),O(""),localStorage.setItem("name",r),localStorage.setItem("email",b),s(!1),R(!0)):(alert("There was a problem! Please try again."),s(!1))})).catch((function(e){alert("There was a problem! Please try again."),s(!1)}))}else alert("Error! Invalid data provided."),s(!1)},disabled:a,children:a?"Please wait...":"Mark Me Present"})})})]})},_=function(){return Object(n.jsx)("div",{id:"questionPage",children:"This is QuestionPage Page"})},P=(a(94),a(62)),R=(a(95),a(58)),C=a(59),L=function(e){var t=e.attendees;return Object(n.jsxs)(R.a,{id:"attendeesTab",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Attendance Report"}),"Total attendees = ",t.length]}),Object(n.jsxs)(C.a,{bordered:!0,hover:!0,variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.attendeeName}),Object(n.jsx)("td",{children:e.attendeeEmail})]},e.attendeeEmail)}))})]})]})},N=function(){return Object(n.jsx)("div",{id:"pollsTab",children:"This is PollsTab"})},y=function(){return Object(n.jsx)("div",{id:"questionsTab",children:"This is QuestionsTab"})},A=a(63),k=a(42),D=function(e){var t=e.logOut,a=Object(c.useState)(),s=Object(x.a)(a,2),i=s[0],l=s[1],r=Object(c.useState)([]),o=Object(x.a)(r,2),d=o[0],j=o[1],b=Object(c.useState)([]),O=Object(x.a)(b,2),u=O[0],h=(O[1],Object(c.useState)([])),m=Object(x.a)(h,2),g=m[0];m[1];return Object(n.jsxs)("div",{id:"adminDashboard",children:[Object(n.jsx)("div",{id:"logoutButton",children:Object(n.jsx)(E.a,{onClick:t,children:"Logout"})}),Object(n.jsxs)(A.a,{defaultActiveKey:0,onSelect:function(e){switch(l(e),e){case"attendees":p.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL,"api/attendees")).then((function(e){e.data&&j(Object(P.a)(e.data))})).catch((function(e){alert("Oops there was a problem fetching. Please try again")}));break;case"questions":console.log("Fetching questions");break;case"polls":console.log("Fetching polls")}},children:[Object(n.jsx)(k.a,{eventKey:"attendees",title:"Attendees",children:"attendees"===i?Object(n.jsx)(L,{attendees:d}):null}),Object(n.jsx)(k.a,{eventKey:"questions",title:"Questions",children:"questions"===i?Object(n.jsx)(y,{questions:u}):null}),Object(n.jsx)(k.a,{eventKey:"polls",title:"Polls",children:"polls"===i?Object(n.jsx)(N,{polls:g}):null})]})]})},I=function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL);var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(localStorage.getItem("username")||""),l=Object(x.a)(i,2),r=l[0],o=l[1],d=Object(c.useState)(""),j=Object(x.a)(d,2),b=j[0],O=j[1],u=Object(c.useState)(localStorage.getItem("isAdmin")||!1),h=Object(x.a)(u,2),m=h[0],g=h[1];return m?Object(n.jsx)(D,{logOut:function(){o(""),g(""),localStorage.removeItem("username"),localStorage.removeItem("isAdmin")}}):Object(n.jsxs)(S.a,{id:"adminPage",onSubmit:function(e){if(e.preventDefault(),s(!0),r.length>0&&b.length>0){var t={username:r,password:b};p.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL,"/api/login"),t).then((function(e){200===e.status?(g(!0),localStorage.setItem("username",r),localStorage.setItem("isAdmin",m)):alert("Oops! There was a problem. Please try again."),s(!1)})).catch((function(e){e.response&&401===e.response.status?alert("Incorrect credentials!"):alert("Oops! There was a server problem. Please try after sometime."),s(!1)}))}else alert("Error! Invalid data provided."),s(!1)},children:[Object(n.jsxs)(S.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(S.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Username"}),Object(n.jsx)(f.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(S.a.Control,{type:"text",placeholder:"Enter Username",value:r,onChange:function(e){o(e.target.value)},disabled:a})})]}),Object(n.jsxs)(S.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(S.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Password"}),Object(n.jsx)(f.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(S.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){O(e.target.value)},disabled:a})})]}),Object(n.jsx)(S.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(f.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(E.a,{type:"submit",className:"btn-block",disabled:a,children:a?"Please wait...":"Login"})})})]})};var w=function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_URL);var e={background:"url('".concat("","/bg-image3.png')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"};return Object(n.jsxs)("div",{className:"App",style:e,children:[Object(n.jsx)(b,{}),Object(n.jsx)(r.a,{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,children:Object(n.jsx)(u,{})}),Object(n.jsx)(o.a,{path:"/about",exact:!0,children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.a,{path:"/announcements",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(o.a,{path:"/polls",exact:!0,children:"Polls"}),Object(n.jsx)(o.a,{path:"/attendance",exact:!0,children:Object(n.jsx)(T,{})}),Object(n.jsx)(o.a,{path:"/question",exact:!0,children:Object(n.jsx)(_,{})}),Object(n.jsx)(o.a,{path:"/admin",exact:!0,children:Object(n.jsx)(I,{})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(O,{})})]})})]})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(100);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),K()},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.42416eeb.chunk.js.map