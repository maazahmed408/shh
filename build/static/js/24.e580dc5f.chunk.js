(this.webpackJsonpkickrtechnology=this.webpackJsonpkickrtechnology||[]).push([[24],{539:function(e,t){t.baseUrl="https://ehospi-app.herokuapp.com"},540:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(542);var l=c(541);function s(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},688:function(e,t,c){"use strict";c.r(t);var n=c(540),l=c(545),s=c(538),i=c(546),a=c.n(i),r=c(2),d=(c(543),c(544),c(552)),o=c.n(d),j=c(553),h=c.n(j),x=c(555),b=c(554),O=c(539),p=c(23),m=function(e){var t=e.contact;e.handleEditClick,e.handleDeleteClick;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:t.patientName}),Object(p.jsx)("td",{children:t.familyMember}),Object(p.jsx)("td",{children:t.dob}),Object(p.jsx)("td",{children:t.phone}),Object(p.jsx)("td",{children:t.gender}),Object(p.jsx)("td",{children:t.fatherHusbandName}),Object(p.jsx)("td",{children:t.address}),Object(p.jsx)("td",{children:t.email}),Object(p.jsx)("td",{children:t.nationality}),Object(p.jsx)("td",{children:t.religion}),Object(p.jsx)("td",{children:t.occupation}),Object(p.jsx)("td",{children:t.altPhone}),Object(p.jsx)("td",{children:t.bookingStatus})]})},u=function(e){var t=e.editFormData,c=e.handleEditFormChange,n=e.handleCancelClick;return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",required:"required",placeholder:"patientName",name:"patientName",value:t.patientName,onChange:c})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{type:"text",required:"required",placeholder:"phone",name:"phone",value:t.phone,onChange:c})}),Object(p.jsx)("td",{children:Object(p.jsxs)("div",{className:"col-sm-12 d-flex text align-center",children:[Object(p.jsx)("div",{className:"col-sm-6",children:Object(p.jsx)("button",{type:"submit",class:"btn btn-sm",children:"Save"})}),Object(p.jsx)("div",{className:"col-sm-6",children:Object(p.jsx)("button",{className:"btn btn-sm",type:"button",onClick:n,children:"Cancel"})})]})})]})},f=c(547),g=c.n(f);t.default=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1],d=function(){var e=Object(l.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(O.baseUrl+"/admin/getAllBookingRequests",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){d()}),[]);var j=Object(r.useState)(c),f=Object(s.a)(j,2),v=f[0],y=f[1],N=Object(r.useState)({patientName:" ",phone:" "}),S=Object(s.a)(N,2),w=S[0],k=(S[1],Object(r.useState)(null)),z=Object(s.a)(k,2),C=z[0],T=z[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"row clearfix",children:[Object(p.jsx)("div",{className:"row d-flex",children:Object(p.jsx)("div",{className:"col-sm-6",style:{paddingTop:"10px"},children:Object(p.jsx)("h6",{children:"All Overview"})})}),Object(p.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",style:{paddingTop:"20px"},children:Object(p.jsx)("div",{className:"info-box-4 hover-zoom-effect",children:Object(p.jsxs)("div",{className:"col-lg-12 d-flex content",style:{color:"white"},children:[Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"0px"},children:[Object(p.jsxs)("div",{className:"text",style:{color:"white",fontSize:"25px",paddingTop:"8px"},children:["Beds"," "]}),Object(p.jsx)("div",{className:"text",style:{color:"white",fontSize:"25px"},children:"Booked"})]}),Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"5px"},children:[Object(p.jsx)("div",{className:" text align-right",style:{color:"white",fontSize:"25px"},children:Object(p.jsx)(x.a,{icon:b.a,style:{}})}),Object(p.jsx)("div",{className:"number text align-right d-flex ",style:{justifyContent:"center"},children:Object(p.jsx)("h1",{className:"mb-2",style:{fontSize:"20px",color:"white",marginLeft:"35px"},children:Object(p.jsx)(o.a,{start:10,end:100,duration:5,children:function(e){var t=e.countUpRef,c=e.start;return Object(p.jsx)(h.a,{onChange:c,delayedCall:!0,children:Object(p.jsx)("span",{ref:t})})}})})})]})]})})}),Object(p.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",style:{paddingTop:"20px"},children:Object(p.jsx)("div",{className:"info-box-5 hover-zoom-effect",children:Object(p.jsxs)("div",{className:"col-lg-12  d-flex content",style:{color:"white"},children:[Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"10px",fontSize:"25px"},children:[Object(p.jsxs)("div",{className:"text",styel:{color:"white",fontSize:"25px"},children:["Admitted"," "]}),Object(p.jsx)("div",{className:"text",style:{fontSize:"25px"},children:"Patient"})]}),Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"10px",fontSize:"23px"},children:[Object(p.jsx)("div",{className:"text align-right",style:{color:"white"},children:Object(p.jsx)(x.a,{color:"bluelight",icon:b.n,style:{margin:"10px"}})}),Object(p.jsx)("div",{className:"numbertext align-right ",children:Object(p.jsx)("h1",{className:"mb-0",style:{fontSize:"20px",color:"white",marginRight:"10px"},children:Object(p.jsx)(o.a,{start:4,end:70,duration:3,children:function(e){var t=e.countUpRef,c=e.start;return Object(p.jsx)(h.a,{onChange:c,delayedCall:!0,children:Object(p.jsx)("span",{ref:t})})}})})})]})]})})}),Object(p.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",style:{paddingTop:"20px"},children:Object(p.jsx)("div",{className:" d-flex info-box-6 hover-zoom-effect",children:Object(p.jsxs)("div",{className:"col-lg-12 d-flex  text align-left content",children:[Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"0px",fontSize:"25px"},children:[Object(p.jsxs)("div",{className:"text",style:{color:"white"},children:["Total"," "]}),Object(p.jsx)("div",{className:"text",style:{color:"white",fontSize:"23px"},children:"Beds Available"})]}),Object(p.jsxs)("div",{className:"col-lg-6",style:{paddingTop:"15px",fontSize:"23px"},children:[Object(p.jsx)("div",{className:"text align-right",style:{color:"white"},children:Object(p.jsx)(x.a,{color:"bluelight",size:"40",icon:b.a,style:{margin:"10px"}})}),Object(p.jsx)("div",{className:"number text align-right",children:Object(p.jsx)("h1",{className:"mb-0",style:{fontSize:"20px",color:"white",marginRight:"15px"},children:Object(p.jsx)(o.a,{start:5,end:60,duration:3,children:function(e){var t=e.countUpRef,c=e.start;return Object(p.jsx)(h.a,{onChange:c,delayedCall:!0,children:Object(p.jsx)("span",{ref:t})})}})})})]})]})})})]}),Object(p.jsx)("div",{children:Object(p.jsx)("section",{className:"content",children:Object(p.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 ",children:[Object(p.jsx)("h5",{children:"All Bookings"}),Object(p.jsx)("div",{class:"body table-responsive",children:Object(p.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:C,patientName:w.patientName,phone:w.phone},c=Object(n.a)(v);c[v.findIndex((function(e){return e.id===C}))]=t,y(c),T(null)},children:Object(p.jsxs)("table",{class:"table table-bordered table-striped table-hover js-basic-example dataTable",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{className:"tablepatient",style:{paddingTop:"30px",marginLeft:"30px",width:"5px"},children:[Object(p.jsx)("th",{children:"Patient_Name"}),Object(p.jsx)("th",{children:"Family_Member"}),Object(p.jsx)("th",{children:"Date_Of_Birth"}),Object(p.jsx)("th",{children:"Phone"}),Object(p.jsx)("th",{children:"Gender"}),Object(p.jsx)("th",{children:"Father/Husband_Name"}),Object(p.jsx)("th",{children:"Address"}),Object(p.jsx)("th",{children:"E-mail"}),Object(p.jsx)("th",{children:"Nationality"}),Object(p.jsx)("th",{children:"Religion"}),Object(p.jsx)("th",{children:"Occupation"}),Object(p.jsx)("th",{children:"Alternate_Phone"}),Object(p.jsx)("th",{children:"Booking_Status"})]})}),Object(p.jsx)("tfoot",{}),Object(p.jsx)("tbody",{style:{width:"5px"},children:0!==c.length&&c.map((function(e){return Object(p.jsx)(r.Fragment,{children:C===e.uid?Object(p.jsx)(u,{editFormData:w}):Object(p.jsx)(m,{contact:e})})}))})]})})})]})})})]})}}}]);
//# sourceMappingURL=24.e580dc5f.chunk.js.map