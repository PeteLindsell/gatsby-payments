(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,a,n){"use strict";n.r(a);n(29),n(30),n(13);var t=n(0),o=n.n(t),r=(n(257),n(259)),i=n(236),l=n(196),u=n(218),m=n(213),c=n(254),s=n(261),d=n(262),p=n(256);a.default=function(){var e=i.object().shape({firstName:i.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:i.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.string().email("Invalid email").required("Required")});return o.a.createElement(l.a,{theme:p.a},o.a.createElement(u.a,null,o.a.createElement(m.a,{title:"Example 2"}),o.a.createElement(c.a,null,o.a.createElement("h1",null,"Not a donation form!"),o.a.createElement(r.b,{initialValues:{donationAmount:"",firstName:"",lastName:"",email:""},validationSchema:e,onSubmit:function(e){console.log(e)}},function(e){var a=e.errors,n=(e.touched,e.values),t=e.handleChange,i=e.handleSubmit,l=e.setFieldValue;return o.a.createElement(r.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{type:"button",appearance:20===n.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",20)}},"£20"),o.a.createElement(s.a,{type:"button",appearance:50===n.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",50)}},"£50"),o.a.createElement(s.a,{type:"button",appearance:100===n.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",100)}},"£100")),o.a.createElement(d.a,{label:"Donation amount",extraLeft:"£",name:"donationAmount",onChange:t,value:n.donationAmount,error:a.donationAmount,type:"number"}),o.a.createElement(d.a,{label:"First name",name:"firstName",onChange:t,value:n.firstName,error:a.firstName}),o.a.createElement(d.a,{label:"Last name",name:"lastName",onChange:t,value:n.lastName,error:a.lastName}),o.a.createElement(s.a,{type:"submit",appearance:"primary",onClick:i},"Donate Now!"))}))))}},217:function(e,a,n){var t;e.exports=(t=n(258))&&t.default||t},257:function(e,a,n){"use strict";var t=n(0),o=n.n(t),r=n(67),i=n.n(r);n.d(a,"a",function(){return i.a});n(217),n(9).default.enqueue,o.a.createContext({})},258:function(e,a,n){"use strict";n.r(a);n(23);var t=n(0),o=n.n(t),r=n(103);a.default=function(e){var a=e.location,n=e.pageResources;return n?o.a.createElement(r.a,Object.assign({location:a,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-pages-example-2-js-33141afb9cd54baa3eaa.js.map