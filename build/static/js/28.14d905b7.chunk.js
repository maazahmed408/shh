(this.webpackJsonpkickrtechnology=this.webpackJsonpkickrtechnology||[]).push([[28],{539:function(e,t){t.baseUrl="https://ehospi-app.herokuapp.com"},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(542);var a=n(541);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},674:function(e,t,n){"use strict";n.r(t);var r=n(540),a=n(545),c=n(538),s=n(546),i=n.n(s),o=n(2),l=(n(543),n(544),n(539)),d=n(547),u=n.n(d),b=n(551),j=(n(550),n(23));b.b.configure();t.default=function(){var e=Object(o.useState)(0),t=Object(c.a)(e,2),n=t[0],s=t[1],d=Object(o.useState)([]),h=Object(c.a)(d,2),p=h[0],f=h[1],x=function(){var e=Object(a.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(l.baseUrl+"/admin/getHospitalAdmin",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:t=e.sent,f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){x()}),[n]);var O=function(){var e=Object(a.a)(i.a.mark((function e(t){var r,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.uid,c=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete(l.baseUrl+"/admin/deleteHospitalAdmin",{data:{uid:r},headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:e.sent&&(s(n+1),b.b.error("Hospital Sub Admin deleted successfully",{autoClose:600}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=window.confirm("Are you sure? You want to delete: "+r),console.log(o),o&&c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=Object(o.useState)(p),v=Object(c.a)(m,2),y=v[0],g=v[1],w=Object(o.useState)(null),k=Object(c.a)(w,2),A=k[0],S=k[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{children:Object(j.jsx)("section",{className:"content",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("div",{className:"row clearfix",children:Object(j.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12 ",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h2",{children:"Hospital Admin List "})}),Object(j.jsx)("div",{class:"body table-responsive",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:A},n=Object(r.a)(y);n[y.findIndex((function(e){return e.id===A}))]=t,g(n),S(null)},children:Object(j.jsxs)("table",{class:"table table-bordered table-striped table-hover js-basic-example dataTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{className:"tablepatient",style:{paddingTop:"30px",marginLeft:"30px",width:"5px"},children:[Object(j.jsx)("th",{children:"Userid"}),Object(j.jsx)("th",{children:"Hospital Code"}),Object(j.jsx)("th",{children:"Action "})]})}),Object(j.jsx)("tfoot",{}),Object(j.jsx)("tbody",{style:{width:"5px"},children:p.length>0&&p.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.uid}),Object(j.jsx)("td",{children:e.hospitalCode}),Object(j.jsx)("td",{style:{textAlign:"center"},children:Object(j.jsx)("button",{className:"btn btn-xm px-1 py-1 btn btn-xm",children:Object(j.jsx)("i",{onClick:function(){return O(e)},class:"fas fa-trash"})})})]})}))})]})})})]})})})})})})})}}}]);
//# sourceMappingURL=28.14d905b7.chunk.js.map