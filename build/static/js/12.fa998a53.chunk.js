(this.webpackJsonpkickrtechnology=this.webpackJsonpkickrtechnology||[]).push([[12],{538:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(541);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){s=!0,c=l}finally{try{a||null==n.return||n.return()}finally{if(s)throw c}}return i}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(542);var c=n(541);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},541:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(542);function c(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},542:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t}},648:function(e){e.exports=JSON.parse('[{"id":1,"Patient_id":"M001 ","Name":"Aman","Age":"72 ","Adress":"Noida","PhoneNumber":"5689456545 ","LastVisit":"13 June"},{"id":2,"Patient_id":"M002 ","Name":"Harish","Age":"45 ","Adress":"Delhi","PhoneNumber":"9756850021 ","LastVisit":"12June"},{"id":3,"Patient_id":"M003 ","Name":"Dewesh","Age":"23 ","Adress":"Noida","PhoneNumber":"9856845125 ","LastVisit":"11 June"}]')},683:function(e,t,n){"use strict";n.r(t);var r=n(540),c=n(42),i=n(538),a=n(2),s=(n(543),n(544),n(159)),l=n(648),d=n(23),o=function(e){var t=e.contact,n=e.handleEditClick,r=e.handleDeleteClick;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.Patient_id}),Object(d.jsx)("td",{children:t.Name}),Object(d.jsx)("td",{children:t.Age}),Object(d.jsx)("td",{children:t.Adress}),Object(d.jsx)("td",{children:t.PhoneNumber}),Object(d.jsx)("td",{children:t.LastVisit}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"col-sm-12 d-flex text align-center",children:[Object(d.jsx)("div",{className:"col-sm-",children:Object(d.jsx)("button",{className:"badge badge-success",children:"Approved"})}),Object(d.jsx)("div",{className:"col-sm-3",children:Object(d.jsx)("button",{className:"btn btn-xm px-0 py-0 btn ",onClick:function(e){return n(e,t)},children:Object(d.jsx)("i",{class:"fas fa-edit"})})}),Object(d.jsx)("div",{className:"col-sm-3",children:Object(d.jsx)("button",{className:"btn btn-xm px-0 py-0 btn btn-xm",onClick:function(){return r(t.id)},children:Object(d.jsx)("i",{class:"fas fa-trash"})})})]})})]})},b=function(e){var t=e.editFormData,n=e.handleEditFormChange,r=e.handleCancelClick;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"Enter department name",name:"Patient_id",value:t.Patient_id,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"Name",name:"Name",value:t.Name,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"Age",name:"Age",value:t.Age,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"Adress",name:"Adress",value:t.Adress,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"PhoneNumber",name:"PhoneNumber",value:t.PhoneNumber,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",required:"required",placeholder:"LastVisit",name:"LastVisit",value:t.LastVisit,onChange:n})}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"col-sm-12 d-flex text align-center",children:[Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("button",{type:"submit",class:"btn btn-sm",children:"Save"})}),Object(d.jsx)("div",{className:"col-sm-6",children:Object(d.jsx)("button",{className:"btn btn-sm",type:"button",onClick:r,children:"Cancel"})})]})})]})};n(557),t.default=function(){var e=Object(a.useState)(l),t=Object(i.a)(e,2),n=t[0],j=t[1],u=Object(a.useState)({Patient_id:"",Name:"",Age:"",Adress:"",PhoneNumber:"",LastVisit:""}),h=Object(i.a)(u,2),m=(h[0],h[1],Object(a.useState)({Patient_id:"",Name:"",Age:"",Adress:"",PhoneNumber:"",LastVisit:""})),x=Object(i.a)(m,2),O=x[0],f=x[1],p=Object(a.useState)(null),v=Object(i.a)(p,2),y=v[0],g=v[1],N=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,r=Object(c.a)({},O);r[t]=n,f(r)},A=function(e,t){e.preventDefault(),g(t.id);var n={Patient_id:t.Patient_id,Name:t.Name,Age:t.Age,Adress:t.Adress,PhoneNumber:t.PhoneNumber,LastVisit:t.LastVisit};f(n)},P=function(){g(null)},C=function(e){var t=Object(r.a)(n),c=n.findIndex((function(t){return t.id===e}));t.splice(c,1),j(t)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsxs)("section",{class:"content",children:[Object(d.jsx)("div",{class:"container-fluid",children:Object(d.jsx)("div",{class:"row clearfix",children:Object(d.jsx)("div",{class:"col-lg-12 col-md-12 col-sm-12",children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsxs)("div",{class:"header",children:[Object(d.jsx)("h2",{children:"Hospital patient"}),Object(d.jsxs)("form",{class:" searchbox form-inline d-flex my-2 my-lg-0",children:[Object(d.jsx)("input",{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",children:"Search"})]})]}),Object(d.jsx)("div",{class:"body table-responsive",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:y,Patient_id:O.Patient_id,Name:O.Name,Age:O.Age,Adress:O.Adress,PhoneNumber:O.PhoneNumber,LastVisit:O.LastVisit},c=Object(r.a)(n);c[n.findIndex((function(e){return e.id===y}))]=t,j(c),g(null)},children:Object(d.jsxs)("table",{class:"table table-bordered table-striped table-hover js-basic-example dataTable",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"tablepatient",style:{paddingTop:"30px"},children:[Object(d.jsx)("th",{children:"Patient Id"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"address"}),Object(d.jsx)("th",{children:"Number"}),Object(d.jsx)("th",{children:"Last Visit"}),Object(d.jsx)("th",{children:"Status"})]})}),Object(d.jsx)("tfoot",{}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsx)(a.Fragment,{children:y===e.id?Object(d.jsx)(b,{editFormData:O,handleEditFormChange:N,handleCancelClick:P}):Object(d.jsx)(o,{contact:e,handleEditClick:A,handleDeleteClick:C})})}))})]})})})]})})})}),Object(d.jsx)("div",{className:"row clearfix",children:Object(d.jsx)("div",{className:"col-sm-12 text-center",children:Object(d.jsx)(s.b,{to:"Add patient",children:Object(d.jsx)("a",{className:"btn btn-raised g-bg-cyan",style:{borderRadius:"10px"},children:"Add patient"})})})})]})})})}}}]);
//# sourceMappingURL=12.fa998a53.chunk.js.map