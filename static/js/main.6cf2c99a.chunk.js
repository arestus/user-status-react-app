(this["webpackJsonpuser-status-react-app"]=this["webpackJsonpuser-status-react-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"city":"\u0410\u0440\u0442\u0451\u043c\u043e\u0432\u0441\u043a","population":"1688"},{"city":"\u0410\u0447\u0438\u043d\u0441\u043a","population":"105259"},{"city":"\u0411\u043e\u0433\u043e\u0442\u043e\u043b","population":"19819"},{"city":"\u0411\u043e\u0440\u043e\u0434\u0438\u043d\u043e","population":"16061"},{"city":"\u0414\u0438\u0432\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"29195"},{"city":"\u0414\u0443\u0434\u0438\u043d\u043a\u0430","population":"21015"},{"city":"\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a","population":"17805"},{"city":"\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"83857"},{"city":"\u0417\u0430\u043e\u0437\u0451\u0440\u043d\u044b\u0439","population":"10286"},{"city":"\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a","population":"61915"},{"city":"\u0418\u0433\u0430\u0440\u043a\u0430","population":"4417"},{"city":"\u0418\u043b\u0430\u043d\u0441\u043a\u0438\u0439","population":"14967"},{"city":"\u041a\u0430\u043d\u0441\u043a","population":"89111"},{"city":"\u041a\u043e\u0434\u0438\u043d\u0441\u043a","population":"15911"},{"city":"\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a","population":"1095286"},{"city":"\u041b\u0435\u0441\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a","population":"59525"},{"city":"\u041c\u0438\u043d\u0443\u0441\u0438\u043d\u0441\u043a","population":"68007"},{"city":"\u041d\u0430\u0437\u0430\u0440\u043e\u0432\u043e","population":"49825"},{"city":"\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a","population":"179554"},{"city":"\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a","population":"40614"},{"city":"\u0423\u0436\u0443\u0440","population":"15563"},{"city":"\u0423\u044f\u0440","population":"11981"},{"city":"\u0428\u0430\u0440\u044b\u043f\u043e\u0432\u043e","population":"37136"}]')},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(11),i=a.n(n),r=(a(17),a(6)),o=a(4),l=a(12);var p=a(2),u=a(10),j=Object(p.a)(u).sort((function(e,t){return t.population-e.population})).splice(0,1),m=Object(p.a)(u).sort((function(e,t){return e.population-t.population})).splice(0,22).filter((function(e){return e.population>5e4})).sort((function(e,t){return e.city<t.city?-1:e.city>t.city?1:0})),b=[].concat(Object(p.a)(j),Object(p.a)(m)),d=(a(19),a(1)),_=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(o.a)(n,2),p=i[0],u=i[1],j=Object(s.useState)(!1),m=Object(o.a)(j,2),_=m[0],O=m[1],h=Object(s.useState)(""),x=Object(o.a)(h,2),f=x[0],y=x[1],N=Object(l.a)(),v=N.register,g=N.handleSubmit,w=N.formState.errors,S=N.watch,k=Object(s.useRef)({});k.current=S("password","");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("h1",{className:"header__title",children:[Object(d.jsx)("span",{children:"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435,"})," \u0427\u0435\u043b\u043e\u0432\u0435\u043a \u21163596941"]}),Object(d.jsx)("a",{className:"ref__button",onClick:function(){return O(!_)},children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})]}),_?Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(p),u(p)},className:"form__status",children:[Object(d.jsx)("input",{className:"form__status-input",type:"text",value:p,onChange:function(e){u(e.target.value)}}),Object(d.jsx)("button",{className:"form__status-button",type:"submit",children:"+"})]}):Object(d.jsx)("p",{className:"header__status",children:a}),Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:g((function(e){console.table(e),y(function(){var e=new Date,t=e.getDate(),a=e.getMonth(),s=e.getFullYear(),c=e.getHours(),n=e.getMinutes(),i=e.getSeconds();return"".concat(t," ").concat(["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][a]," ").concat(s," \u0432 ").concat(c,":").concat(n,":").concat(i)}())})),children:[Object(d.jsxs)("div",{className:"select__title",children:["\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434",Object(d.jsx)("select",Object(r.a)(Object(r.a)({className:"select__list",name:"city"},v("city",{required:!0})),{},{children:b.map((function(e,t){var a=e.city;return Object(d.jsx)("option",{value:a,children:a},t)}))}))]}),Object(d.jsx)("div",{className:"form__password",children:Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("span",{className:"input__password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(d.jsx)("input",Object(r.a)({style:{border:w.password?"1px solid #FF0000":""},className:"input__field",type:"password",name:"password"},v("password",{required:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",minLength:{value:5,message:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},maxLength:{value:15,message:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435  15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}}))),Object(d.jsx)("span",{className:"input__info",children:"\u0412\u0430\u0448 \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."}),w.password?Object(d.jsx)("p",{className:"form__error",children:w.password.message}):Object(d.jsx)("p",{className:"form__no-error",children:"\u041d\u0435\u0442\u0443 \u043e\u0448\u0438\u0431\u043e\u043a - \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"})]})}),Object(d.jsx)("div",{className:"form__passwordRepeat",children:Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("span",{className:"input__password",children:"\u041f\u0430\u0440\u043e\u043b\u044c \u0435\u0449\u0435 \u0440\u0430\u0437"}),Object(d.jsx)("input",Object(r.a)({style:{border:w.passwordRepeat?"1px solid #FF0000":""},className:"input__field-repeat",type:"password",name:"passwordRepeat"},v("passwordRepeat",{validate:function(e){return e===k.current||"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"},required:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",minLength:{value:5,message:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},maxLength:{value:15,message:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435  15 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"}}))),Object(d.jsx)("span",{className:"input__info",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u044d\u0442\u043e \u043e\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u0438\u0442 \u0432\u0430\u0441 \u0441 \u043d\u0430\u043c\u0438 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0448\u0438\u0431\u043a\u0438."}),w.passwordRepeat?Object(d.jsx)("p",{className:"form__error",children:w.passwordRepeat.message}):Object(d.jsx)("p",{className:"form__no-error",children:"\u041d\u0435\u0442\u0443 \u043e\u0448\u0438\u0431\u043e\u043a - \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"})]})}),Object(d.jsx)("div",{className:"form__email",children:Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("span",{className:"input__email",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),Object(d.jsx)("input",Object(r.a)(Object(r.a)({style:{border:w.email?"1px solid #FF0000":""},className:"input__field-email",name:"email"},v("email",{required:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 E-mail",pattern:{value:/\S+@\S+\.\S+/,message:"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 E-mail"}})),{},{type:"email"})),Object(d.jsx)("span",{className:"input__info",children:"\u041c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."}),w.email?Object(d.jsx)("p",{className:"form__error",children:w.email.message}):Object(d.jsx)("p",{className:"form__no-error",children:"\u041d\u0435\u0442\u0443 \u043e\u0448\u0438\u0431\u043e\u043a - \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"})]})}),Object(d.jsx)("div",{className:"form__checkbox",children:Object(d.jsxs)("label",{className:"form__label",children:[Object(d.jsx)("span",{className:"input__checkbox",children:"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d"}),Object(d.jsx)("input",{type:"checkbox",name:"checkbox",className:"input__field-checkbox"}),Object(d.jsx)("span",{children:"\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043d\u0430 \u0435\u043c\u0435\u0439\u043b"})]})}),Object(d.jsxs)("div",{className:"form__agree",children:[Object(d.jsx)("button",{type:"submit",className:"form__button",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(d.jsxs)("p",{className:"form__date",children:["\u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",f]})]})]})})]})};a(21);var O=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(_,{})})};a(22);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6cf2c99a.chunk.js.map