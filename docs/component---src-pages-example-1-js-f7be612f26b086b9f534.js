(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(220),i=n(219),u=n(214),l=n(234);var c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,{title:"Example 1"}),r.a.createElement(o.StripeProvider,{apiKey:"pk_test_5r9fnuslIznmQtNHSkRV3HQj00w1467fNY"},r.a.createElement(o.Elements,null,r.a.createElement(l.a,null))))},a}(r.a.Component);t.default=c},234:function(e,t,n){"use strict";n(41),n(29),n(30),n(13);var a=n(267),r=n.n(a),o=(n(235),n(0)),i=n.n(o),u=n(220),l=n(260),c=n(239),m=n(200),p=(n(257),n(261)),s=n(262),d=(n(259),n(258));function f(e,t,n,a,r,o,i){try{var u=e[o](i),l=u.value}catch(c){return void n(c)}u.done?t(l):Promise.resolve(l).then(a,r)}var h=c.object().shape({firstName:c.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:c.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:c.string().email("Invalid email").required("Required")}),y=Object(m.c)(u.CardElement).withConfig({displayName:"CustomCheckoutForm__StyledCardElement",componentId:"zjs05m-0"})(["background-color:#fff;background-image:none;border-radius:3px;border:solid 2px #c8c9c7;color:#333;display:block;font-size:1rem;padding:6px 8px;width:100%;"]),v=function(e){var t,n;function a(t){return e.call(this,t)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){"undefined"!=typeof window&&void 0!==window.Stripe&&(this.stripe=window.Stripe("my_key",{betas:["payment_intent_beta_3"]}))},o.handleSubmit=function(){var e,t=(e=r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.stripe.handleCardPayment("a client_secret",this.StripeCardElement);case 3:n=e.sent,n.paymentIntent,n.error;case 6:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){f(o,a,r,i,u,"next",e)}function u(e){f(o,a,r,i,u,"throw",e)}i(void 0)})});return function(e){return t.apply(this,arguments)}}(),o.render=function(){var e=this;return i.a.createElement(l.b,{initialValues:{donationAmount:"",firstName:"",lastName:"",email:""},validationSchema:h,onSubmit:function(e){console.log(e)}},function(t){var n=t.errors,a=(t.touched,t.values),r=t.handleChange,o=t.handleSubmit,u=t.setFieldValue;return i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(p.a,{type:"button",appearance:20===a.donationAmount?"primary":"defailt",onClick:function(){return u("donationAmount",20)}},"£20"),i.a.createElement(p.a,{type:"button",appearance:50===a.donationAmount?"primary":"defailt",onClick:function(){return u("donationAmount",50)}},"£50"),i.a.createElement(p.a,{type:"button",appearance:100===a.donationAmount?"primary":"defailt",onClick:function(){return u("donationAmount",100)}},"£100")),i.a.createElement(s.a,{label:"Donation amount",extraLeft:"£",name:"donationAmount",onChange:r,value:a.donationAmount,error:n.donationAmount,type:"number"}),i.a.createElement(s.a,{label:"First name",name:"firstName",onChange:r,value:a.firstName,error:n.firstName}),i.a.createElement(s.a,{label:"Last name",name:"lastName",onChange:r,value:a.lastName,error:n.lastName}),i.a.createElement(d.b,null,"Card details",i.a.createElement(y,{ref:function(t){e.StripeCardElement=t}})),i.a.createElement(p.a,{type:"submit",appearance:"primary",onClick:o},"Donate Now!"))})},a}(i.a.Component);t.a=Object(u.injectStripe)(v)}}]);
//# sourceMappingURL=component---src-pages-example-1-js-f7be612f26b086b9f534.js.map