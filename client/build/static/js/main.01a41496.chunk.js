(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),c=a.n(s),i=a(27),r=a.n(i),l=(a(71),a(63)),j=a(9),d=(a(72),a(30)),o=a(25),b=function(){return Object(n.jsxs)(d.a,{bg:"light",expand:"lg",fixed:"bottom",children:[Object(n.jsx)(d.a.Brand,{id:"",href:"/",children:Object(n.jsx)("img",{src:"/logo.png",height:"40vmin"})}),Object(n.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(o.a,{className:"mr-auto",children:[Object(n.jsx)(o.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(o.a.Link,{href:"/about",children:"The Speaker"}),Object(n.jsx)(o.a.Link,{href:"/question",children:"Ask a question"}),Object(n.jsx)(o.a.Link,{href:"/team",children:"The Team"})]})})]})},h=function(){return Object(n.jsx)("div",{style:{paddingTop:"10vmin",textAlign:"center"},id:"pageNotFound",children:Object(n.jsx)("img",{style:{width:"80vmin"},src:"https://www.joulin.com/images/404.png"})})},m=(a(76),function(){return Object(n.jsxs)("div",{className:"homepage",children:[Object(n.jsx)("div",{className:"homepage-header",children:"Pioneers"}),Object(n.jsx)("div",{className:"homepage-sub-header",children:"present"}),Object(n.jsxs)("div",{className:"homepage-title",children:[Object(n.jsx)("div",{id:"homepage-title-1",children:"The"}),Object(n.jsx)("div",{id:"homepage-title-2",children:"Gamification"}),Object(n.jsx)("div",{id:"homepage-title-3",children:"Guide"})]}),Object(n.jsx)("div",{className:"homepage-tagline",children:Object(n.jsx)("i",{children:"Taking teams back in time to leap forward"})}),Object(n.jsxs)("div",{className:"homepage-schedule",children:["3 March, 2021 9:00 PM EST",Object(n.jsx)("br",{}),"4 March, 2021 7:30 AM IST"]}),Object(n.jsx)("div",{className:"homepage-info",children:"Zoom meeting link will be available here before the session"})]})}),O=(a(77),function(){return Object(n.jsxs)("div",{className:"about-page",children:[Object(n.jsx)("div",{className:"photo-holder",children:Object(n.jsx)("img",{id:"speaker-photo",src:"speaker.jpg"})}),Object(n.jsxs)("div",{className:"detail-holder",children:[Object(n.jsx)("div",{id:"speaker-name",children:"Bjoern Kingsley"}),Object(n.jsxs)("div",{id:"speaker-designation",children:["Senior Scrum Master / Agile Coach",Object(n.jsx)("br",{}),"Mackenzie Investments"]}),Object(n.jsxs)("div",{id:"speaker-details",children:["Mr. Bjoern Kingsley, based in Toronto, is a Senior Scrum Master at Mackenzie Investments. Starting March, he will be with Manulife, a Canadian multinational insurance company and financial services provider, as the Director for Agile Learning and Community Engagement / Lead Agile Coach. In this new position, he will be involved in planning the rollout of global Agile transformation for Manulife worldwide with its more than 30,000 employees.",Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{id:"speaker-linkedin",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/bjoernkingsley/",target:"_blank",children:Object(n.jsx)("img",{id:"linkedin-profile",src:"linkedin.png"})})})]})]})}),u=a(8),x=a(19),g=a.n(x),p=(a(96),a(6)),v=a(11),f=a(7),k=a(22),N=c.a.createContext(null),w=function(){var e=Object(s.useContext)(N).serverUrl,t=Object(s.useState)(!1),a=Object(u.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)(""),l=Object(u.a)(r,2),j=l[0],d=l[1],o=Object(s.useState)(""),b=Object(u.a)(o,2),h=b[0],m=b[1],O=Object(s.useState)(""),x=Object(u.a)(O,2),w=x[0],y=x[1],S=Object(s.useState)(!1),T=Object(u.a)(S,2),C=T[0],A=T[1];return Object(n.jsxs)(p.a,{id:"attendancePage",children:[Object(n.jsxs)(p.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Full Name"}),Object(n.jsxs)(f.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(p.a.Control,{type:"text",placeholder:"Name as in seneca records",value:j,onChange:function(e){d(e.target.value)},disabled:c}),Object(n.jsx)(p.a.Text,{children:!j.length>0?"Enter a valid name":null})]})]}),Object(n.jsxs)(p.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Email"}),Object(n.jsxs)(f.a,{sm:"5",md:"4",lg:"4",children:[Object(n.jsx)(p.a.Control,{type:"email",placeholder:"Seneca email id",value:h,onChange:function(e){var t=e.target.value;m(t),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?A(!0):A(!1)},disabled:c}),Object(n.jsx)(p.a.Text,{children:C?null:"Enter a valid email id"})]})]}),Object(n.jsxs)(p.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Question"}),Object(n.jsx)(f.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(p.a.Control,{as:"textarea",placeholder:"Enter you question",value:w,onChange:function(e){y(e.target.value)},rows:3,disabled:c})})]}),Object(n.jsx)(p.a.Group,{className:"justify-content-center",as:v.a,children:Object(n.jsx)(f.a,{sm:"6",md:"5",lg:"5",children:"This information will be used only for communication and reporting purposes."})}),Object(n.jsx)(p.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(f.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(k.a,{className:"btn-block",onClick:function(){if(i(!0),j.length>0&&w.length>0&&C){var t={name:j,email:h,question:w};g.a.post("".concat(e,"/api/questions"),t).then((function(e){200===e.status?(alert("Success! Your question has been submitted."),d(""),m(""),y(""),i(!1)):(alert("There was a problem! Please try again."),i(!1))})).catch((function(e){alert("There was a problem! Please try again."),i(!1)}))}else alert("Error! Invalid data provided."),i(!1)},disabled:c,children:c?"Please wait...":"Submit my question"})})})]})},y=(a(97),a(53)),S=(a(98),a(38)),T=a(39),C=function(e){var t=e.attendees;return Object(n.jsxs)(S.a,{id:"attendeesTab",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Attendance Report"}),"Total attendees = ",t.length]}),Object(n.jsxs)(T.a,{bordered:!0,hover:!0,variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.attendeeName}),Object(n.jsx)("td",{children:e.attendeeEmail})]},e.attendeeEmail)}))})]})]})},A=function(){return Object(n.jsx)("div",{id:"pollsTab",children:"This is PollsTab"})},I=function(e){var t=e.questions;return Object(n.jsxs)(S.a,{id:"questionsTab",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Questions"}),"Total Questions = ",t.length]}),Object(n.jsxs)(T.a,{bordered:!0,hover:!0,variant:"light",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Question"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.question}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.email})]},e.email)}))})]})]})},P=a(65),q=a(46),L=function(e){var t=e.logOut,a=Object(s.useContext)(N).serverUrl,c=Object(s.useState)(),i=Object(u.a)(c,2),r=i[0],l=i[1],j=Object(s.useState)([]),d=Object(u.a)(j,2),o=d[0],b=d[1],h=Object(s.useState)([]),m=Object(u.a)(h,2),O=m[0],x=m[1],p=Object(s.useState)([]),v=Object(u.a)(p,2),f=v[0];v[1];return Object(n.jsxs)("div",{id:"adminDashboard",children:[Object(n.jsx)("div",{id:"logoutButton",children:Object(n.jsx)(k.a,{onClick:t,children:"Logout"})}),Object(n.jsxs)(P.a,{defaultActiveKey:0,onSelect:function(e){switch(l(e),e){case"attendees":g.a.get("".concat(a,"/api/attendees")).then((function(e){e.data&&b(Object(y.a)(e.data))})).catch((function(e){alert("Oops there was a problem fetching. Please try again")}));break;case"questions":g.a.get("".concat(a,"/api/questions")).then((function(e){e.data&&x(Object(y.a)(e.data))})).catch((function(e){alert("Oops there was a problem fetching. Please try again")}));break;case"polls":console.log("Fetching polls")}},children:[Object(n.jsx)(q.a,{eventKey:"attendees",title:"Attendees",children:"attendees"===r?Object(n.jsx)(C,{attendees:o}):null}),Object(n.jsx)(q.a,{eventKey:"questions",title:"Questions",children:"questions"===r?Object(n.jsx)(I,{questions:O}):null}),Object(n.jsx)(q.a,{eventKey:"polls",title:"Polls",children:"polls"===r?Object(n.jsx)(A,{polls:f}):null})]})]})},E=function(){var e=Object(s.useContext)(N).serverUrl,t=Object(s.useState)(!1),a=Object(u.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)(localStorage.getItem("username")||""),l=Object(u.a)(r,2),j=l[0],d=l[1],o=Object(s.useState)(""),b=Object(u.a)(o,2),h=b[0],m=b[1],O=Object(s.useState)(localStorage.getItem("isAdmin")||!1),x=Object(u.a)(O,2),w=x[0],y=x[1];return w?Object(n.jsx)(L,{logOut:function(){d(""),m(""),y(""),localStorage.removeItem("username"),localStorage.removeItem("isAdmin")}}):Object(n.jsxs)(p.a,{id:"adminPage",onSubmit:function(t){if(t.preventDefault(),i(!0),j.length>0&&h.length>0){var a={username:j,password:h};g.a.post("".concat(e,"/api/login"),a).then((function(e){200===e.status?(y(!0),localStorage.setItem("username",j),localStorage.setItem("isAdmin",w)):alert("Oops! There was a problem. Please try again."),i(!1)})).catch((function(e){e.response&&401===e.response.status?alert("Incorrect credentials!"):alert("Oops! There was a server problem. Please try after sometime."),i(!1)}))}else alert("Error! Invalid data provided."),i(!1)},children:[Object(n.jsxs)(p.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Username"}),Object(n.jsx)(f.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(p.a.Control,{type:"text",placeholder:"Enter Username",value:j,onChange:function(e){d(e.target.value)},disabled:c})})]}),Object(n.jsxs)(p.a.Group,{className:"justify-content-center",as:v.a,children:[Object(n.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Password"}),Object(n.jsx)(f.a,{sm:"5",md:"4",lg:"4",children:Object(n.jsx)(p.a.Control,{type:"password",placeholder:"Enter password",value:h,onChange:function(e){m(e.target.value)},disabled:c})})]}),Object(n.jsx)(p.a.Group,{as:v.a,className:"justify-content-center",children:Object(n.jsx)(f.a,{sm:"8",md:"10",lg:"5",children:Object(n.jsx)(k.a,{type:"submit",className:"btn-block",disabled:c,children:c?"Please wait...":"Login"})})})]})},M=(a(100),a(20)),G=function(){return Object(n.jsx)("div",{className:"team-page",children:Object(n.jsxs)(v.a,{id:"team-list",children:[Object(n.jsx)(f.a,{sm:"3",md:"3",xs:"6",children:Object(n.jsxs)(M.a,{className:"team-card",children:[Object(n.jsx)(M.a.Img,{className:"team-card-image",variant:"top",src:"ashish.jpg"}),Object(n.jsx)("div",{className:"team-card-body",children:"Ashish Musani"}),Object(n.jsx)("div",{className:"team-linkedin",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/ashishmusani/",target:"_blank",children:Object(n.jsx)("img",{className:"team-linkedin-photo",src:"linkedin.png"})})})]})}),Object(n.jsx)(f.a,{sm:"3",md:"3",xs:"6",children:Object(n.jsxs)(M.a,{className:"team-card",children:[Object(n.jsx)(M.a.Img,{className:"team-card-image",variant:"top",src:"sonali.jpg"}),Object(n.jsx)("div",{className:"team-card-body",children:"Sonali S."}),Object(n.jsx)("div",{className:"team-linkedin",children:Object(n.jsx)("a",{href:"http://linkedin.com/in/sonali-saravanakumar-52a569174",target:"_blank",children:Object(n.jsx)("img",{className:"team-linkedin-photo",src:"linkedin.png"})})})]})}),Object(n.jsx)(f.a,{sm:"3",md:"3",xs:"6",children:Object(n.jsxs)(M.a,{className:"team-card",children:[Object(n.jsx)(M.a.Img,{className:"team-card-image",variant:"top",src:"neethi.jpg"}),Object(n.jsx)("div",{className:"team-card-body",children:"Neethi Geever"}),Object(n.jsx)("div",{className:"team-linkedin",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/neethi-geever-a4126b82/",target:"_blank",children:Object(n.jsx)("img",{className:"team-linkedin-photo",src:"linkedin.png"})})})]})}),Object(n.jsx)(f.a,{sm:"3",md:"3",xs:"6",children:Object(n.jsxs)(M.a,{className:"team-card",children:[Object(n.jsx)(M.a.Img,{className:"team-card-image",variant:"top",src:"andrei.jpg"}),Object(n.jsx)("div",{className:"team-card-body",children:"Andrei Tarakanov"}),Object(n.jsx)("div",{className:"team-linkedin",children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/avbuka/",target:"_blank",children:Object(n.jsx)("img",{className:"team-linkedin-photo",src:"linkedin.png"})})})]})})]})})};var F=function(){var e={background:"url('".concat("","/background.png') no-repeat center center"),backgroundSize:"cover",backgroundAttachment:"fixed"};return Object(n.jsx)(N.Provider,{value:{serverUrl:"https://pmc140-pioneers.herokuapp.com"},children:Object(n.jsxs)("div",{className:"App",style:e,children:[Object(n.jsx)(b,{}),Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(j.a,{path:"/about",exact:!0,children:Object(n.jsx)(O,{})}),Object(n.jsx)(j.a,{path:"/question",exact:!0,children:Object(n.jsx)(w,{})}),Object(n.jsx)(j.a,{path:"/team",exact:!0,children:Object(n.jsx)(G,{})}),Object(n.jsx)(j.a,{path:"/admin",exact:!0,children:Object(n.jsx)(E,{})}),Object(n.jsx)(j.a,{children:Object(n.jsx)(h,{})})]})})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};a(104);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),B()},71:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.01a41496.chunk.js.map