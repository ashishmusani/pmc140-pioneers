(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),i=a(25),l=a.n(i),r=(a(69),a(60)),o=a(6),j=(a(70),a(28)),d=a(17),b=function(){return Object(n.jsxs)(j.a,{bg:"light",expand:"lg",fixed:"bottom",children:[Object(n.jsx)(j.a.Brand,{id:"",href:"/",children:Object(n.jsx)("img",{src:"/logo.png",height:"40vmin"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"mr-auto",children:[Object(n.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{href:"/about",children:"The Speaker"}),Object(n.jsx)(d.a.Link,{href:"/announcements",children:"Announcements"}),Object(n.jsx)(d.a.Link,{href:"/attendance",children:"Mark me present"}),Object(n.jsx)(d.a.Link,{href:"/question",children:"Ask a question"})]})})]})},u=function(){return Object(n.jsx)("div",{style:{paddingTop:"10vmin",textAlign:"center"},id:"pageNotFound",children:Object(n.jsx)("img",{style:{width:"80vmin"},src:"https://www.joulin.com/images/404.png"})})},h=(a(74),function(){return Object(n.jsxs)("div",{id:"homepage",children:[Object(n.jsx)("div",{id:"homepage-header",children:"Pioneers"}),Object(n.jsx)("div",{id:"homepage-sub-header",children:"presents"}),Object(n.jsx)("div",{id:"homepage-title",children:"Leadership Session"})]})}),O=function(){return Object(n.jsx)("div",{id:"aboutpage",children:"This is About Page"})},m=function(){return Object(n.jsx)("div",{id:"announcementsPage",children:"This is AnnouncementsPage Page"})},x=a(9),g=a(23),p=a.n(g),f=(a(93),a(7)),v=a(21),S=a(15),w=a(24),y=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(localStorage.getItem("name")||""),l=Object(x.a)(i,2),r=l[0],o=l[1],j=Object(c.useState)(localStorage.getItem("email")||""),d=Object(x.a)(j,2),b=d[0],u=d[1],h=Object(c.useState)(!1),O=Object(x.a)(h,2),m=O[0],g=O[1],y=Object(c.useState)(""!==r&&""!==b),P=Object(x.a)(y,2),k=P[0],T=P[1];Object(c.useEffect)((function(){console.log(k)}),[]);return k?"Hi ".concat(r,"! You have been marked present"):Object(n.jsxs)(f.a,{id:"attendancePage",children:[Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Full Name"}),Object(n.jsxs)(S.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Name as in seneca records",value:r,onChange:function(e){o(e.target.value)},disabled:a}),Object(n.jsx)(f.a.Text,{children:!r.length>0?"Enter a valid name":null})]})]}),Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Email"}),Object(n.jsxs)(S.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(f.a.Control,{type:"email",placeholder:"Seneca email id",value:b,onChange:function(e){var t=e.target.value;u(t),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?g(!0):g(!1)},disabled:a}),Object(n.jsx)(f.a.Text,{children:m?null:"Enter a valid email id"})]})]}),Object(n.jsx)(f.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(S.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(w.a,{className:"btn-block",onClick:function(){if(s(!0),r.length>0&&m){var e={attendeeName:r,attendeeEmail:b};p.a.post("".concat(window.location.href,"/api/attendees"),e).then((function(e){200===e.status?(alert("Success! You have been marked present."),o(""),u(""),localStorage.setItem("name",r),localStorage.setItem("email",b),s(!1),T(!0)):(alert("There was a problem! Please try again."),s(!1))})).catch((function(e){alert("There was a problem! Please try again."),s(!1)}))}else alert("Error! Invalid data provided."),s(!1)},disabled:a,children:a?"Please wait...":"Mark Me Present"})})})]})},P=function(){return Object(n.jsx)("div",{id:"questionPage",children:"This is QuestionPage Page"})},k=(a(94),a(62)),T=(a(95),s.a.createContext(null)),C=a(58),N=a(59),A=function(e){var t=e.attendees;return Object(n.jsxs)(C.a,{id:"attendeesTab",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Attendance Report"}),"Total attendees = ",t.length]}),Object(n.jsxs)(N.a,{bordered:!0,hover:!0,variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.attendeeName}),Object(n.jsx)("td",{children:e.attendeeEmail})]},e.attendeeEmail)}))})]})]})},I=function(){return Object(n.jsx)("div",{id:"pollsTab",children:"This is PollsTab"})},L=function(){return Object(n.jsx)("div",{id:"questionsTab",children:"This is QuestionsTab"})},E=a(63),q=a(42),F=function(e){var t=e.logOut,a=Object(c.useContext)(T).serverUrl;console.log(a);var s=Object(c.useState)(),i=Object(x.a)(s,2),l=i[0],r=i[1],o=Object(c.useState)([]),j=Object(x.a)(o,2),d=j[0],b=j[1],u=Object(c.useState)([]),h=Object(x.a)(u,2),O=h[0],m=(h[1],Object(c.useState)([])),g=Object(x.a)(m,2),f=g[0];g[1];return Object(n.jsxs)("div",{id:"adminDashboard",children:[Object(n.jsx)("div",{id:"logoutButton",children:Object(n.jsx)(w.a,{onClick:t,children:"Logout"})}),Object(n.jsxs)(E.a,{defaultActiveKey:0,onSelect:function(e){switch(r(e),e){case"attendees":p.a.get("".concat(a,"/api/attendees")).then((function(e){e.data&&b(Object(k.a)(e.data))})).catch((function(e){alert("Oops there was a problem fetching. Please try again")}));break;case"questions":console.log("Fetching questions");break;case"polls":console.log("Fetching polls")}},children:[Object(n.jsx)(q.a,{eventKey:"attendees",title:"Attendees",children:"attendees"===l?Object(n.jsx)(A,{attendees:d}):null}),Object(n.jsx)(q.a,{eventKey:"questions",title:"Questions",children:"questions"===l?Object(n.jsx)(L,{questions:O}):null}),Object(n.jsx)(q.a,{eventKey:"polls",title:"Polls",children:"polls"===l?Object(n.jsx)(I,{polls:f}):null})]})]})},G=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(localStorage.getItem("username")||""),l=Object(x.a)(i,2),r=l[0],o=l[1],j=Object(c.useState)(""),d=Object(x.a)(j,2),b=d[0],u=d[1],h=Object(c.useState)(localStorage.getItem("isAdmin")||!1),O=Object(x.a)(h,2),m=O[0],g=O[1];return m?Object(n.jsx)(F,{logOut:function(){o(""),g(""),localStorage.removeItem("username"),localStorage.removeItem("isAdmin")}}):Object(n.jsxs)(f.a,{id:"adminPage",onSubmit:function(e){if(e.preventDefault(),s(!0),r.length>0&&b.length>0){var t={username:r,password:b};p.a.post("".concat(window.location.href,"/api/login"),t).then((function(e){200===e.status?(g(!0),localStorage.setItem("username",r),localStorage.setItem("isAdmin",m)):alert("Oops! There was a problem. Please try again."),s(!1)})).catch((function(e){e.response&&401===e.response.status?alert("Incorrect credentials!"):alert("Oops! There was a server problem. Please try after sometime."),s(!1)}))}else alert("Error! Invalid data provided."),s(!1)},children:[Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Username"}),Object(n.jsx)(S.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Enter Username",value:r,onChange:function(e){o(e.target.value)},disabled:a})})]}),Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Password"}),Object(n.jsx)(S.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(f.a.Control,{type:"password",placeholder:"Enter password",value:b,onChange:function(e){u(e.target.value)},disabled:a})})]}),Object(n.jsx)(f.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(S.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(w.a,{type:"submit",className:"btn-block",disabled:a,children:a?"Please wait...":"Login"})})})]})};var B=function(){var e={background:"url('".concat("","/bg-image3.png')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"},t={serverUrl:window.location.href};return Object(n.jsx)(T.Provider,{value:t,children:Object(n.jsxs)("div",{className:"App",style:e,children:[Object(n.jsx)(b,{}),Object(n.jsx)(r.a,{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.a,{path:"/about",exact:!0,children:Object(n.jsx)(O,{})}),Object(n.jsx)(o.a,{path:"/announcements",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(o.a,{path:"/polls",exact:!0,children:"Polls"}),Object(n.jsx)(o.a,{path:"/attendance",exact:!0,children:Object(n.jsx)(y,{})}),Object(n.jsx)(o.a,{path:"/question",exact:!0,children:Object(n.jsx)(P,{})}),Object(n.jsx)(o.a,{path:"/admin",exact:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(u,{})})]})})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};a(100);l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),K()},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.ec9e322e.chunk.js.map