(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(219),i=n(218),l=n(213),c=n(232);var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Example 1"}),r.a.createElement(o.StripeProvider,{apiKey:"pk_test_5r9fnuslIznmQtNHSkRV3HQj00w1467fNY"},r.a.createElement(o.Elements,null,r.a.createElement(c.a,null))))},a}(r.a.Component);t.default=u},232:function(e,t,n){"use strict";n(41),n(29),n(30),n(13);var a=n(268),r=n.n(a),o=(n(233),n(0)),i=n.n(o),l=n(219),c=n(260),u=n(237),m=n(196),p=(n(255),n(261)),s=n(262),d=(n(257),n(256));function f(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(a,r)}var h=u.object().shape({donationAmount:u.string().required("Required"),firstName:u.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:u.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:u.string().email("Invalid email").required("Required")}),y=Object(m.c)(l.CardElement).withConfig({displayName:"CustomCheckoutForm__StyledCardElement",componentId:"zjs05m-0"})(["background-color:#fff;background-image:none;border-radius:3px;border:solid 2px #c8c9c7;color:#333;display:block;font-size:1rem;padding:6px 8px;width:100%;"]),v=function(e){var t,n;function a(t){return e.call(this,t)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){"undefined"!=typeof window&&void 0!==window.Stripe&&(this.stripe=window.Stripe("my_key",{betas:["payment_intent_beta_3"]}))},o.handleSubmit=function(){var e,t=(e=r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.stripe.handleCardPayment("a client_secret",this.StripeCardElement);case 3:n=e.sent,n.paymentIntent,n.error;case 6:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){f(o,a,r,i,l,"next",e)}function l(e){f(o,a,r,i,l,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),o.render=function(){var e=this;return i.a.createElement(c.b,{initialValues:{donationAmount:"",firstName:"",lastName:"",email:""},validationSchema:h,onSubmit:function(t){e.props.stripe.createToken({name:"Name"}).then(function(e){console.log({res:e}),fetch("https://ornovia.com/payment",{credentials:"same-origin",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({token:e.token.id,amount:100*t.donationAmount})}).then(function(e){console.log({res:e})})}),console.log(t)}},function(t){var n=t.errors,a=(t.touched,t.values),r=t.handleChange,o=t.handleSubmit,l=t.setFieldValue;return i.a.createElement(c.a,null,i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Donation amount"),i.a.createElement("div",null,i.a.createElement(p.a,{type:"button",appearance:20===a.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",20)}},"£20"),i.a.createElement(p.a,{type:"button",appearance:50===a.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",50)}},"£50"),i.a.createElement(p.a,{type:"button",appearance:100===a.donationAmount?"primary":"defailt",onClick:function(){return l("donationAmount",100)}},"£100")),i.a.createElement(s.a,{extraLeft:"£",name:"donationAmount",onChange:r,value:a.donationAmount,error:n.donationAmount,type:"number"})),i.a.createElement(s.a,{label:"First name",name:"firstName",onChange:r,value:a.firstName,error:n.firstName}),i.a.createElement(s.a,{label:"Last name",name:"lastName",onChange:r,value:a.lastName,error:n.lastName}),i.a.createElement(s.a,{label:"Email address",name:"email",onChange:r,value:a.email,error:n.email}),i.a.createElement(s.a,{label:"Phone number",name:"phone",onChange:r,value:a.phone,error:n.phone}),i.a.createElement(d.b,null,"Card details",i.a.createElement(y,{ref:function(t){e.StripeCardElement=t}})),i.a.createElement(p.a,{type:"submit",appearance:"primary",onClick:o},"Donate Now!"))})},a}(i.a.Component);t.a=Object(l.injectStripe)(v)}}]);
//# sourceMappingURL=component---src-pages-example-1-js-f15df1346fd315f3cfcb.js.map