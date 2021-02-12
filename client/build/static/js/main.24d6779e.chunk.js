(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),s=a.n(c),r=a(25),i=a.n(r),l=(a(69),a(60)),o=a(6),j=(a(70),a(28)),d=a(17),b=function(){return Object(n.jsxs)(j.a,{bg:"light",expand:"lg",fixed:"bottom",children:[Object(n.jsx)(j.a.Brand,{id:"",href:"/",children:Object(n.jsx)("img",{src:"/logo.png",height:"40vmin"})}),Object(n.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(d.a,{className:"mr-auto",children:[Object(n.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(d.a.Link,{href:"/about",children:"The Speaker"}),Object(n.jsx)(d.a.Link,{href:"/announcements",children:"Announcements"}),Object(n.jsx)(d.a.Link,{href:"/attendance",children:"Mark me present"}),Object(n.jsx)(d.a.Link,{href:"/question",children:"Ask a question"})]})})]})},u=function(){return Object(n.jsx)("div",{style:{paddingTop:"10vmin",textAlign:"center"},id:"pageNotFound",children:Object(n.jsx)("img",{style:{width:"80vmin"},src:"https://www.joulin.com/images/404.png"})})},h=(a(74),function(){return Object(n.jsxs)("div",{id:"homepage",children:[Object(n.jsx)("div",{id:"homepage-header",children:"Pioneers"}),Object(n.jsx)("div",{id:"homepage-sub-header",children:"presents"}),Object(n.jsx)("div",{id:"homepage-title",children:"Leadership Session"})]})}),O=function(){return Object(n.jsx)("div",{id:"aboutpage",children:"This is About Page"})},m=function(){return Object(n.jsx)("div",{id:"announcementsPage",children:"This is AnnouncementsPage Page"})},x=a(9),g=a(23),p=a.n(g),v=(a(93),s.a.createContext(null)),f=a(7),S=a(21),y=a(15),P=a(24),k=function(){var e=Object(c.useContext)(v).serverUrl,t=Object(c.useState)(!1),a=Object(x.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(localStorage.getItem("name")||""),l=Object(x.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(localStorage.getItem("email")||""),b=Object(x.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)(!1),m=Object(x.a)(O,2),g=m[0],k=m[1],T=Object(c.useState)(""!==o&&""!==u),w=Object(x.a)(T,2),C=w[0],N=w[1];Object(c.useEffect)((function(){console.log(C)}),[]);return C?"Hi ".concat(o,"! You have been marked present"):Object(n.jsxs)(f.a,{id:"attendancePage",children:[Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:S.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Full Name"}),Object(n.jsxs)(y.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Name as in seneca records",value:o,onChange:function(e){j(e.target.value)},disabled:s}),Object(n.jsx)(f.a.Text,{children:!o.length>0?"Enter a valid name":null})]})]}),Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:S.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Email"}),Object(n.jsxs)(y.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(f.a.Control,{type:"email",placeholder:"Seneca email id",value:u,onChange:function(e){var t=e.target.value;h(t),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?k(!0):k(!1)},disabled:s}),Object(n.jsx)(f.a.Text,{children:g?null:"Enter a valid email id"})]})]}),Object(n.jsx)(f.a.Group,{as:S.a,className:"justify-content-center",children:Object(n.jsx)(y.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(P.a,{className:"btn-block",onClick:function(){if(r(!0),o.length>0&&g){var t={attendeeName:o,attendeeEmail:u};p.a.post("".concat(e,"/api/attendees"),t).then((function(e){200===e.status?(alert("Success! You have been marked present."),j(""),h(""),localStorage.setItem("name",o),localStorage.setItem("email",u),r(!1),N(!0)):(alert("There was a problem! Please try again."),r(!1))})).catch((function(e){alert("There was a problem! Please try again."),r(!1)}))}else alert("Error! Invalid data provided."),r(!1)},disabled:s,children:s?"Please wait...":"Mark Me Present"})})})]})},T=function(){return Object(n.jsx)("div",{id:"questionPage",children:"This is QuestionPage Page"})},w=(a(94),a(62)),C=(a(95),a(58)),N=a(59),A=function(e){var t=e.attendees;return Object(n.jsxs)(C.a,{id:"attendeesTab",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Attendance Report"}),"Total attendees = ",t.length]}),Object(n.jsxs)(N.a,{bordered:!0,hover:!0,variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.attendeeName}),Object(n.jsx)("td",{children:e.attendeeEmail})]},e.attendeeEmail)}))})]})]})},I=function(){return Object(n.jsx)("div",{id:"pollsTab",children:"This is PollsTab"})},L=function(){return Object(n.jsx)("div",{id:"questionsTab",children:"This is QuestionsTab"})},E=a(63),q=a(42),F=function(e){var t=e.logOut,a=Object(c.useContext)(v).serverUrl,s=Object(c.useState)(),r=Object(x.a)(s,2),i=r[0],l=r[1],o=Object(c.useState)([]),j=Object(x.a)(o,2),d=j[0],b=j[1],u=Object(c.useState)([]),h=Object(x.a)(u,2),O=h[0],m=(h[1],Object(c.useState)([])),g=Object(x.a)(m,2),f=g[0];g[1];return Object(n.jsxs)("div",{id:"adminDashboard",children:[Object(n.jsx)("div",{id:"logoutButton",children:Object(n.jsx)(P.a,{onClick:t,children:"Logout"})}),Object(n.jsxs)(E.a,{defaultActiveKey:0,onSelect:function(e){switch(l(e),e){case"attendees":p.a.get("".concat(a,"/api/attendees")).then((function(e){e.data&&b(Object(w.a)(e.data))})).catch((function(e){alert("Oops there was a problem fetching. Please try again")}));break;case"questions":console.log("Fetching questions");break;case"polls":console.log("Fetching polls")}},children:[Object(n.jsx)(q.a,{eventKey:"attendees",title:"Attendees",children:"attendees"===i?Object(n.jsx)(A,{attendees:d}):null}),Object(n.jsx)(q.a,{eventKey:"questions",title:"Questions",children:"questions"===i?Object(n.jsx)(L,{questions:O}):null}),Object(n.jsx)(q.a,{eventKey:"polls",title:"Polls",children:"polls"===i?Object(n.jsx)(I,{polls:f}):null})]})]})},G=function(){var e=Object(c.useContext)(v).serverUrl,t=Object(c.useState)(!1),a=Object(x.a)(t,2),s=a[0],r=a[1],i=Object(c.useState)(localStorage.getItem("username")||""),l=Object(x.a)(i,2),o=l[0],j=l[1],d=Object(c.useState)(""),b=Object(x.a)(d,2),u=b[0],h=b[1],O=Object(c.useState)(localStorage.getItem("isAdmin")||!1),m=Object(x.a)(O,2),g=m[0],k=m[1];return g?Object(n.jsx)(F,{logOut:function(){j(""),k(""),localStorage.removeItem("username"),localStorage.removeItem("isAdmin")}}):Object(n.jsxs)(f.a,{id:"adminPage",onSubmit:function(t){if(t.preventDefault(),r(!0),o.length>0&&u.length>0){var a={username:o,password:u};p.a.post("".concat(e,"/api/login"),a).then((function(e){200===e.status?(k(!0),localStorage.setItem("username",o),localStorage.setItem("isAdmin",g)):alert("Oops! There was a problem. Please try again."),r(!1)})).catch((function(e){e.response&&401===e.response.status?alert("Incorrect credentials!"):alert("Oops! There was a server problem. Please try after sometime."),r(!1)}))}else alert("Error! Invalid data provided."),r(!1)},children:[Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:S.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Username"}),Object(n.jsx)(y.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(f.a.Control,{type:"text",placeholder:"Enter Username",value:o,onChange:function(e){j(e.target.value)},disabled:s})})]}),Object(n.jsxs)(f.a.Group,{className:"justify-content-center",as:S.a,children:[Object(n.jsx)(f.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Password"}),Object(n.jsx)(y.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(f.a.Control,{type:"password",placeholder:"Enter password",value:u,onChange:function(e){h(e.target.value)},disabled:s})})]}),Object(n.jsx)(f.a.Group,{as:S.a,className:"justify-content-center",children:Object(n.jsx)(y.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(P.a,{type:"submit",className:"btn-block",disabled:s,children:s?"Please wait...":"Login"})})})]})};var U=function(){var e={background:"url('".concat("","/bg-image3.png')"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"},t={serverUrl:"https://pmc140-pioneers.herokuapp.com"};return console.log(t),Object(n.jsx)(v.Provider,{value:t,children:Object(n.jsxs)("div",{className:"App",style:e,children:[Object(n.jsx)(b,{}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/",exact:!0,children:Object(n.jsx)(h,{})}),Object(n.jsx)(o.a,{path:"/about",exact:!0,children:Object(n.jsx)(O,{})}),Object(n.jsx)(o.a,{path:"/announcements",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(o.a,{path:"/polls",exact:!0,children:"Polls"}),Object(n.jsx)(o.a,{path:"/attendance",exact:!0,children:Object(n.jsx)(k,{})}),Object(n.jsx)(o.a,{path:"/question",exact:!0,children:Object(n.jsx)(T,{})}),Object(n.jsx)(o.a,{path:"/admin",exact:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(o.a,{children:Object(n.jsx)(u,{})})]})})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(100);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root")),B()},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.24d6779e.chunk.js.map