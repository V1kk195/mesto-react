(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(8),r=n.n(i),s=(n(18),n(12)),u=n(2),l=n(9),d=n.n(l),p=n.p+"static/media/logo.fad4f8a5.svg";var j=function(){return Object(a.jsx)("header",{className:"header root__section",children:Object(a.jsx)("img",{src:p,alt:"mesto logo",className:"logo"})})},f=o.a.createContext();var h=function(e){var t=o.a.useContext(f),n=e.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id}));return Object(a.jsx)("div",{className:"place-card",onClick:function(t){e.onCardClick(t.target.style.backgroundImage.slice(4,-1).replace(/['"]/g,""))},children:Object(a.jsxs)("div",{className:"place-card",children:[Object(a.jsx)("div",{className:"place-card__image",style:{backgroundImage:"url(".concat(e.image,")")},children:Object(a.jsx)("button",{className:"place-card__delete-icon ".concat(n&&"place-card__delete-icon_visible"),onClick:function(){e.onCardDelete(e.card)}})}),Object(a.jsxs)("div",{className:"place-card__description",children:[Object(a.jsx)("h3",{className:"place-card__name",children:e.name}),Object(a.jsxs)("div",{className:"place-card__like-block",children:[Object(a.jsx)("button",{className:"place-card__like-icon ".concat(c&&"place-card__like-icon_liked"),onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"place-card__like-counter",children:e.likes})]})]})]})})};var b=function(e){var t=o.a.useContext(f);return Object(a.jsxs)("main",{children:[Object(a.jsx)("div",{className:"profile root__section",children:Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("div",{className:"user-info__photo",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(a.jsxs)("div",{className:"user-info__data",children:[Object(a.jsx)("h1",{className:"user-info__name",children:t.name}),Object(a.jsx)("p",{className:"user-info__job",children:t.about}),Object(a.jsx)("button",{className:"button user-info__edit-button",onClick:e.onEditProfile,children:"Edit"})]}),Object(a.jsx)("button",{className:"button user-info__button",onClick:e.onAddPlace,children:"+"})]})}),Object(a.jsx)("div",{className:"places-list root__section",children:e.cards.map((function(t,n){return Object(a.jsx)(h,{image:t.link,name:t.name,likes:t.likes.length,owner:t.owner,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},t._id)}))}),e.children]})},m=n.p+"static/media/close.8a65f75d.svg";var O=function(e){return Object(a.jsxs)("div",{className:"popup ".concat(e.card&&"popup_is-opened"),children:[Object(a.jsx)("div",{className:"popup__close-field",onClick:e.onClose}),Object(a.jsxs)("div",{className:"image-popup__content",id:"popup-content",children:[Object(a.jsx)("img",{src:m,alt:"",className:"popup__close new-card__close",onClick:e.onClose}),Object(a.jsx)("img",{alt:"card",className:"image-popup__image",src:e.card})]})]})},_=n(4),v=n(3);var g=function(e){var t=e.name,n=e.title,c=e.isOpen;return Object(a.jsxs)("div",{className:"popup popup_type_".concat(t," ").concat(c&&"popup_is-opened"),children:[Object(a.jsx)("div",{className:"popup__close-field",onClick:e.onClose}),Object(a.jsxs)("div",{className:"popup__content",id:"popup-content",children:[Object(a.jsx)("img",{src:m,alt:"",className:"popup__close new-card__close",onClick:e.onClose}),Object(a.jsxs)("div",{className:"popup__form-container",children:[Object(a.jsx)("h3",{className:"popup__title",children:n}),Object(a.jsx)("form",{className:"popup__form",id:"popup",name:t,onSubmit:e.onSubmit,children:e.children})]})]})]})};var k=function(e){var t=o.a.useContext(f),n=o.a.useState(""),c=Object(u.a)(n,2),i=c[0],r=c[1],s=o.a.useState(""),l=Object(u.a)(s,2),d=l[0],p=l[1],j=o.a.useState({name:"",description:""}),h=Object(u.a)(j,2),b=h[0],m=h[1],O=o.a.useState(!1),k=Object(u.a)(O,2),x=k[0],C=k[1],N=o.a.useState(!1),y=Object(u.a)(N,2),S=y[0],E=y[1],P=o.a.useState(!1),w=Object(u.a)(P,2),T=w[0],z=w[1],A=o.a.useState(!1),U=Object(u.a)(A,2),L=U[0],I=U[1];return o.a.useEffect((function(){r(t.name||""),p(t.about||"")}),[t]),o.a.useEffect((function(){var e=function(e,t){return""===t.trim()?(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))})),"name"===e?E(!1):z(!1),!1):t.trim().length>1&&t.trim().length<30?(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,""))})),"name"===e?E(!0):z(!0),!0):(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"))})),"name"===e?E(!1):z(!1),!1)};e("name",i),e("description",d)}),[i,d]),o.a.useEffect((function(){C(!(!S||!T))}),[S,T]),o.a.useEffect((function(){""===i&&""===d||(e.onUpdateUser(i,d),I((function(){return!1})))}),[L]),Object(a.jsxs)(g,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"user-profile",isOpen:e.isOpen,onClose:function(){e.onClose(),r(t.name),p(t.about)},onSubmit:function(e){e.preventDefault(),I(!0)},children:[Object(a.jsx)("input",{type:"text",value:i,name:"username",id:"username",required:!0,className:"popup__input popup__input_type_username",placeholder:"\u0418\u043c\u044f",onChange:function(e){r(e.target.value)}}),Object(a.jsx)("span",{className:"error-message",id:"error-username",children:b.name||""}),Object(a.jsx)("input",{type:"text",value:d,name:"about",id:"about",required:!0,className:"popup__input popup__input_type_about",placeholder:"\u041e \u0441\u0435\u0431\u0435",onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"error-message",id:"error-about",children:b.description||""}),Object(a.jsx)("button",{type:"submit",className:"edit-profile__button popup__button ".concat(x&&"popup__button_active"),id:"edit-profile__button",disabled:!x||L,children:L?Object(a.jsx)("span",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):Object(a.jsx)("span",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})};var x=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),c=n[0],i=n[1],r=o.a.useRef(),s=o.a.useRef(),l=o.a.useState({name:"",description:""}),d=Object(u.a)(l,2),p=d[0],j=d[1],f=o.a.useState(!1),h=Object(u.a)(f,2),b=h[0],m=h[1],O=o.a.useState(!1),k=Object(u.a)(O,2),x=k[0],C=k[1];o.a.useEffect((function(){var e,t,n;e="link",t=c,n=s.current,""===t.trim()?(j((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))})),C(!1)):n.validity.typeMismatch?(j((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"))})),C(!1)):(j((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,""))})),C(!0))}),[c]),o.a.useEffect((function(){m(!!x)}),[x]);var N=function(){i("")};return Object(a.jsxs)(g,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:e.isOpen,onClose:function(){e.onClose(),N()},onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar(c),N()},children:[Object(a.jsx)("input",{ref:s,value:c,type:"URL",name:"link",id:"link",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(){i(s.current.value)}}),Object(a.jsx)("span",{className:"error-message",id:"error-link",children:p.link||""}),Object(a.jsx)("button",{ref:r,type:"submit",className:"button popup__button ".concat(b&&"popup__button_active"),disabled:!b,children:"+"})]})};var C=function(e){var t=o.a.useState(""),n=Object(u.a)(t,2),c=n[0],i=n[1],r=o.a.useState(""),s=Object(u.a)(r,2),l=s[0],d=s[1],p=o.a.useRef(),j=o.a.useRef(),f=o.a.useState({name:"",description:""}),h=Object(u.a)(f,2),b=h[0],m=h[1],O=o.a.useState(!1),k=Object(u.a)(O,2),x=k[0],C=k[1],N=o.a.useState(!1),y=Object(u.a)(N,2),S=y[0],E=y[1],P=o.a.useState(!1),w=Object(u.a)(P,2),T=w[0],z=w[1];o.a.useEffect((function(){var e=function(e,t,n){return""===t.trim()?(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))})),"name"===e?E(!1):z(!1),!1):"name"!==e||t.trim().length>1&&t.trim().length<30?"link"===e&&n.validity.typeMismatch?(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u0417\u0434\u0435\u0441\u044c \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430"))})),z(!1),!1):(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,""))})),"name"===e?E(!0):z(!0),!0):(m((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(_.a)({},e,"\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0442 2 \u0434\u043e 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"))})),E(!1),!1)};e("name",c),e("link",l,j.current)}),[c,l]),o.a.useEffect((function(){C(!(!S||!T))}),[S,T]);var A=function(){i(""),d("")};return Object(a.jsxs)(g,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",isOpen:e.isOpen,onClose:function(){e.onClose(),A()},onSubmit:function(t){t.preventDefault(),e.onAddPlace(c,l),A()},children:[Object(a.jsx)("input",{value:c,type:"text",name:"name",id:"imgname",className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){i(e.target.value)}}),Object(a.jsx)("span",{className:"error-message",id:"error-imgname",children:b.name||""}),Object(a.jsx)("input",{ref:j,value:l,type:"URL",name:"link",id:"link",className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"error-message",id:"error-link",children:b.link||""}),Object(a.jsx)("button",{ref:p,type:"submit",className:"button popup__button ".concat(x&&"popup__button_active"),disabled:!x,children:"+"})]})};var N=function(e){return Object(a.jsxs)("div",{className:"results__waiting preloader-block ".concat(e.isOpen&&"preloader-block_opened"),children:[Object(a.jsx)("i",{className:"circle-preloader preloader-block__spinner"}),Object(a.jsx)("p",{className:"preloader-block__text",children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438..."})]})},y=n(10),S=n(11),E=new(function(){function e(t){Object(y.a)(this,e),this.options=t,this.url=this.options.baseUrl,this.headers=this.options.headers,this.authorization=this.headers.authorization,this.contentType=this.headers["Content-Type"]}return Object(S.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:{authorization:this.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return e}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{method:"GET",headers:{authorization:this.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"editUserInfo",value:function(e,t){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":this.contentType},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authorization,"Content-Type":this.contentType},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.authorization,"Content-Type":this.contentType},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"putLike",value:function(e){return fetch("".concat(this.url,"/cards/like/").concat(e),{method:"PUT",headers:{authorization:this.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}},{key:"removeLike",value:function(e){return fetch("".concat(this.url,"/cards/like/").concat(e),{method:"DELETE",headers:{authorization:this.authorization}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e),e}))}}]),e}())({baseUrl:"https://nomoreparties.co/cohort10",headers:{authorization:"5c788b82-fc9e-4eb0-ad75-9ff368bd7858","Content-Type":"application/json"}});var P=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=o.a.useState(!1),r=Object(u.a)(i,2),l=r[0],p=r[1],h=o.a.useState(!1),m=Object(u.a)(h,2),_=m[0],v=m[1],g=o.a.useState(null),y=Object(u.a)(g,2),S=y[0],P=y[1],w=o.a.useState({}),T=Object(u.a)(w,2),z=T[0],A=T[1],U=o.a.useState([]),L=Object(u.a)(U,2),I=L[0],D=L[1],R=o.a.useState(!1),F=Object(u.a)(R,2),J=F[0],H=F[1],M=o.a.useState(!0),q=Object(u.a)(M,2),B=q[0],G=q[1],K=o.a.useState(null),Q=Object(u.a)(K,2),V=Q[0],W=Q[1];window.onscroll=d()((function(){if(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-1){if(V||J||!B)return;H(!0),X()}}),100);var X=function(){E.getInitialCards().then((function(e){if(!Array.isArray(e))return Promise.reject(e.message);G((function(){return I.length<e.length})),H(!1),D(e.splice(0,I.length+9))})).catch((function(e){return console.log(e),W(e.message),H(!1),e}))};o.a.useEffect((function(){E.getUserInfo().then((function(e){if(!e.name)return Promise.reject(e.message);A(e)})).catch((function(e){return console.log(e),e}))}),[]),o.a.useEffect((function(){H(!0),E.getInitialCards().then((function(e){if(!Array.isArray(e))return Promise.reject(e.message);D(e.splice(0,9)),H(!1)})).catch((function(e){return H(!1),console.log(e),e}))}),[]);var Y=function(){c(!1),p(!1),v(!1),P(null)};return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(f.Provider,{value:z,children:[Object(a.jsx)(j,{}),Object(a.jsxs)(b,{onEditProfile:function(){c(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){v(!0)},onCardClick:function(e){P(e)},cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===z._id})),n=function(t){var n=I.map((function(n){return n._id===e._id?t:n}));D(n)};t?E.removeLike(e._id).then((function(e){n(e)})):E.putLike(e._id).then((function(e){n(e)}))},onCardDelete:function(e){E.deleteCard(e._id).then((function(){var t=I.filter((function(t){return t._id!==e._id}));D(t)}))},children:[Object(a.jsx)(N,{isOpen:J}),Object(a.jsx)(k,{isOpen:n,onClose:Y,onUpdateUser:function(e,t){E.editUserInfo(e,t).then((function(e){if(!e.name)throw new Error("".concat(e));A(e),Y()})).catch((function(e){return console.log(e),e}))}}),Object(a.jsx)(x,{isOpen:_,onClose:Y,onUpdateAvatar:function(e){E.editAvatar(e).then((function(e){if(!e.name)throw new Error("".concat(e));A(e),Y()})).catch((function(e){return console.log(e),e}))}}),Object(a.jsx)(C,{isOpen:l,onClose:Y,onAddPlace:function(e,t){E.addNewCard(e,t).then((function(e){if(!e.name)throw new Error("".concat(e));D([].concat(Object(s.a)(I),[e])),Y()})).catch((function(e){return console.log(e),e}))}}),Object(a.jsx)(O,{card:S,onClose:Y})]})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),w()}},[[20,1,2]]]);
//# sourceMappingURL=main.a8aba091.chunk.js.map