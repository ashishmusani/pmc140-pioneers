(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},76:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),s=n.n(c),i=n(17),r=n.n(i),l=(n(51),n(44)),j=n(6),d=(n(52),n(53),n(20)),o=n(8),b=function(){return Object(a.jsxs)(d.a,{id:"header-nav",expand:"lg",fixed:"bottom",children:[Object(a.jsx)(d.a.Brand,{href:"/",children:"PIONEERS"}),Object(a.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(a.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(a.jsxs)(o.a,{variant:"tabs",children:[Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/",children:"Home"})}),Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/about",children:"The Speaker"})}),Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/announcements",children:"Announcements"})}),Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/polls",children:"Polls"})}),Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/attendance",children:"Attendance"})}),Object(a.jsx)(o.a.Item,{children:Object(a.jsx)(o.a.Link,{href:"/question",children:"Ask a question"})})]})})]})},h=(n(57),function(){return Object(a.jsxs)("div",{id:"homepage",children:[Object(a.jsx)("div",{id:"homepage-header",children:"Pioneers"}),Object(a.jsx)("div",{id:"homepage-sub-header",children:"presents"}),Object(a.jsx)("div",{id:"homepage-title",children:"Leadership Session"})]})}),u=function(){return Object(a.jsx)("div",{id:"aboutpage",children:"This is About Page"})},O=function(){return Object(a.jsx)("div",{id:"announcementsPage",children:"This is AnnouncementsPage Page"})},x=n(19),m=n(43),g=n.n(m),p=(n(76),n(11)),f=n(26),v=n(18),k=n(31),S=function(){var e=Object(c.useState)(!1),t=Object(x.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(localStorage.getItem("name")||""),r=Object(x.a)(i,2),l=r[0],j=r[1],d=Object(c.useState)(localStorage.getItem("email")||""),o=Object(x.a)(d,2),b=o[0],h=o[1],u=Object(c.useState)(!1),O=Object(x.a)(u,2),m=O[0],S=O[1],P=Object(c.useState)(""!==l&&""!==b),I=Object(x.a)(P,2),L=I[0],C=I[1];Object(c.useEffect)((function(){console.log(L)}),[]);return L?"Hi ".concat(l,"! You have been marked present"):Object(a.jsxs)(p.a,{id:"attendancePage",children:[Object(a.jsxs)(p.a.Group,{className:"justify-content-center",as:f.a,children:[Object(a.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Full Name"}),Object(a.jsxs)(v.a,{sm:"5",md:"4",lg:"4",children:[Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Name as in seneca records",value:l,onChange:function(e){j(e.target.value)},disabled:n}),Object(a.jsx)(p.a.Text,{children:!l.length>0?"Enter a valid name":null})]})]}),Object(a.jsxs)(p.a.Group,{className:"justify-content-center",as:f.a,children:[Object(a.jsx)(p.a.Label,{column:!0,sm:"3",md:"1",lg:"1",children:"Email"}),Object(a.jsxs)(v.a,{sm:"5",md:"4",lg:"4",children:[Object(a.jsx)(p.a.Control,{type:"email",placeholder:"Seneca email id",value:b,onChange:function(e){var t=e.target.value;h(t),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())?S(!0):S(!1)},disabled:n}),Object(a.jsx)(p.a.Text,{children:m?null:"Enter a valid email id"})]})]}),Object(a.jsx)(p.a.Group,{as:f.a,className:"justify-content-center",children:Object(a.jsx)(v.a,{sm:"8",md:"10",lg:"5",children:Object(a.jsx)(k.a,{className:"btn-block",onClick:function(){if(s(!0),l.length>0&&m){var e={attendeeName:l,attendeeEmail:b};g.a.post("http://localhost:5000/attendees",e).then((function(e){200===e.status?(alert("Success! You have been marked present."),j(""),h(""),localStorage.setItem("name",l),localStorage.setItem("email",b),s(!1),C(!0)):(alert("There was a problem! Please try again."),s(!1))}))}else alert("Error! Invalid data provided."),s(!1)},disabled:n,children:n?"Please wait...":"Mark Me Present"})})})]})},P=function(){return Object(a.jsx)("div",{id:"attendancePage",children:"This is QuestionPage Page"})};var I=function(){var e={background:"url('".concat("","/bg-image3.png')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"};return Object(a.jsxs)("div",{className:"App",style:e,children:[Object(a.jsx)(b,{}),Object(a.jsx)(l.a,{children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/",exact:!0,children:Object(a.jsx)(h,{})}),Object(a.jsx)(j.a,{path:"/about",children:Object(a.jsx)(u,{})}),Object(a.jsx)(j.a,{path:"/announcements",children:Object(a.jsx)(O,{})}),Object(a.jsx)(j.a,{path:"/polls",children:"Polls"}),Object(a.jsx)(j.a,{path:"/attendance",children:Object(a.jsx)(S,{})}),Object(a.jsx)(j.a,{path:"/question",children:Object(a.jsx)(P,{})})]})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};n(80);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root")),L()}},[[81,1,2]]]);
//# sourceMappingURL=main.45f24fe0.chunk.js.map