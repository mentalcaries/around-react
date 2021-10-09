(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(6),r=a.n(c),o=(a(14),a(9)),s=a(2),l=a.p+"static/media/header-logo.50fce9df.svg",u=a(0);var d=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("img",{src:l,alt:"Around the US text",className:"header__logo"})})},p=i.a.createContext();var _=function(e){var t=i.a.useContext(p),a=e.card.owner._id===t._id,n="card__delete-button ".concat(a?"card__delete-button_visible":" "),c=e.card.likes.some((function(e){return e._id===t._id})),r="card__like-button ".concat(c?"card__like-button_active":"");return Object(u.jsxs)("article",{className:"card",children:[Object(u.jsx)("button",{className:n,type:"button","aria-label":"Delete card",onClick:function(){e.onCardDelete(e.card)}}),Object(u.jsx)("img",{className:"card__image",src:e.card.link,alt:"",onClick:function(){e.onCardClick(e.card)}}),Object(u.jsxs)("div",{className:"card__items",children:[Object(u.jsx)("h2",{className:"card__title",children:e.card.name}),Object(u.jsxs)("div",{className:"card__likes",children:[Object(u.jsx)("button",{className:r,type:"button","aria-label":"Like this",onClick:function(){e.onCardLike(e.card)}}),Object(u.jsx)("p",{className:"card__like-count",children:e.card.likes.length})]})]})]})};var h=function(e){var t=e.onEditProfileClick,a=e.onAddPlaceClick,n=e.onEditAvatarClick,c=e.onCardClick,r=e.cards,o=e.onCardLike,s=e.onCardDelete,l=i.a.useContext(p);return Object(u.jsxs)("main",{className:"content",children:[Object(u.jsxs)("section",{className:"profile",children:[Object(u.jsxs)("div",{className:"profile__avatar",children:[Object(u.jsx)("img",{src:null===l||void 0===l?void 0:l.avatar,alt:"User profile pic",className:"profile__image"}),Object(u.jsx)("button",{className:"profile__edit-image",type:"button","aria-label":"Edit User Photo",onClick:n})]}),Object(u.jsxs)("div",{className:"profile__info",children:[Object(u.jsxs)("div",{className:"profile__title",children:[Object(u.jsx)("h1",{className:"profile__name",children:null===l||void 0===l?void 0:l.name}),Object(u.jsx)("button",{className:"profile__edit-btn hover-animate",type:"button","aria-label":"Edit profile",onClick:t})]}),Object(u.jsx)("p",{className:"profile__subtitle",children:null===l||void 0===l?void 0:l.about})]}),Object(u.jsx)("button",{className:"profile__add-button hover-animate","aria-label":"Add",type:"button",onClick:a})]}),Object(u.jsx)("section",{className:"elements",children:r.map((function(e){return Object(u.jsx)(_,{card:e,onCardClick:c,onCardLike:o,onCardDelete:s},e._id)}))})]})};var f=function(e){var t=e.name,a=e.isOpen,n=e.title,c=e.onSubmit,r=e.onClose,o=e.onOutsideClick,l=e.children,d=i.a.createRef(),p=i.a.useState(!1),_=Object(s.a)(p,2),h=_[0],f=_[1];return i.a.useEffect((function(){f(d.current.checkValidity())}),[d]),Object(u.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(a?"popup_opened":""," \n    "),children:Object(u.jsx)("div",{className:"popup__overlay",onClick:o,children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("button",{className:"popup__close-btn",type:"button",onClick:r}),Object(u.jsx)("h2",{className:"popup__title",children:n}),Object(u.jsxs)("form",{className:"popup__form",name:t,noValidate:!0,onSubmit:c,ref:d,children:[l,Object(u.jsx)("button",{className:"popup__save-btn ".concat(h?"":"popup__save-btn_disabled"),type:"submit",name:"Save",default:"Save",disabled:!h,children:"Save"})]})]})})})};var b=function(e){var t=e.onClose,a=e.card,n=e.onOutsideClick;return Object(u.jsx)("div",{className:"popup popup_type_picture ".concat(a&&"popup_opened"," "),children:Object(u.jsx)("div",{className:"popup__overlay",onClick:n,children:Object(u.jsxs)("div",{className:"popup__container popup__container_open-image",children:[Object(u.jsx)("button",{className:"popup__close-btn hover-animate",type:"button",onClick:t}),Object(u.jsxs)("figure",{className:"popup__figure",children:[Object(u.jsx)("img",{className:"popup__image",src:null===a||void 0===a?void 0:a.link,alt:" ".concat(null===a||void 0===a?void 0:a.name)}),Object(u.jsx)("figcaption",{className:"popup__caption",children:null===a||void 0===a?void 0:a.name})]})]})})})};var j=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsxs)("p",{className:"footer__text",children:["\xa9",(new Date).getFullYear()," Around The U.S."]})})},m=a(7),v=a(8),O=function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this._baseUrl=a,this._headers=n}return Object(v.a)(e,[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkRes)}},{key:"getProfileInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._checkRes(t)}))}},{key:"setProfileInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkRes(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkRes(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkRes(e)}))}},{key:"addCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkRes(e)}))}},{key:"removeCardLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkRes(e)}))}},{key:"changeCardStatus",value:function(e,t){return t?this.removeCardLike(e):this.addCardLike(e)}},{key:"updateProfilePicture",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkRes(e)}))}}]),e}(),k=new O({baseUrl:"https://around.nomoreparties.co/v1/group-10",headers:{authorization:"8e942d63-a4ca-4642-8de3-5514e3f09ba0","Content-Type":"application/json"}});var C=function(e){var t,a,n=e.isOpen,c=e.onClose,r=e.onUpdateUser,o=e.onOutsideClick,l=i.a.useContext(p),d=i.a.useState(""),_=Object(s.a)(d,2),h=_[0],b=_[1],j=i.a.useState(""),m=Object(s.a)(j,2),v=m[0],O=m[1],k=i.a.useRef(),C=i.a.useRef(),x=i.a.useState(!0),g=Object(s.a)(x,2),N=g[0],y=g[1],S=i.a.useState(!0),P=Object(s.a)(S,2),E=P[0],L=P[1];return i.a.useEffect((function(){b(l.name),O(l.about)}),[l]),Object(u.jsxs)(f,{name:"edit-profile",title:"Edit Profile",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),r({name:h,about:v})},onOutsideClick:o,children:[Object(u.jsx)("input",{type:"text",name:"name",id:"popup_name",value:h||"",onChange:function(e){b(e.target.value),y(e.target.validity.valid)},placeholder:"Name (eg. Jacques Cousteau)",className:"popup__field ".concat(N?"":"popup__field_type_error"),minLength:"2",maxLength:"40",ref:k,autoComplete:"off",required:!0}),Object(u.jsx)("span",{className:"popup__error ".concat(N?"":"popup__error_visible"),id:"popup_name-error",children:null===(t=k.current)||void 0===t?void 0:t.validationMessage}),Object(u.jsx)("input",{type:"text",name:"title",id:"popup_title",value:v||"",onChange:function(e){O(e.target.value),L(e.target.validity.valid)},placeholder:"Title (eg. Explorer)",className:"popup__field ".concat(E?"":"popup__field_type_error"),minLength:"2",maxLength:"200",ref:C,autoComplete:"off",required:!0}),Object(u.jsx)("span",{className:"popup__error ".concat(E?"":"popup__error_visible"),id:"popup_title-error",children:null===(a=C.current)||void 0===a?void 0:a.validationMessage})]})};var x=function(e){var t,a=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,r=e.onOutsideClick,o=i.a.useRef(),l=i.a.useState(!1),d=Object(s.a)(l,2),p=d[0],_=d[1];return Object(u.jsxs)(f,{name:"edit-image",title:"Change Profile Picture",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:o.current.value})},onOutsideClick:r,children:[Object(u.jsx)("input",{type:"url",name:"link",ref:o,id:"popup_avatar-link",placeholder:"Image Link",className:"popup__field ".concat(p?"":"popup__field_type_error"),required:!0,onChange:function(e){_(e.target.validity.valid)}}),Object(u.jsx)("span",{className:"popup__error ".concat(p," '' : popup__error_visible"),id:"popup_avatar-link-error",children:null===(t=o.current)||void 0===t?void 0:t.validationMessage})]})};var g=function(e){var t,a,n=e.isOpen,c=e.onClose,r=e.onAddPlaceSubmit,o=e.onOutsideClick,l=i.a.useState(""),d=Object(s.a)(l,2),_=d[0],h=d[1],b=i.a.useState(""),j=Object(s.a)(b,2),m=j[0],v=j[1],O=i.a.useState(!1),k=Object(s.a)(O,2),C=k[0],x=k[1],g=i.a.useState(!1),N=Object(s.a)(g,2),y=N[0],S=N[1],P=i.a.useContext(p),E=i.a.useRef(),L=i.a.useRef();return Object(u.jsxs)(f,{name:"new-item",title:"New Place",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),r({name:_,link:m,owner:{_id:P._id},likes:[],_id:""})},onOutsideClick:o,children:[Object(u.jsx)("input",{type:"text",name:"name",id:"popup_image-title",placeholder:"Title",className:"popup__field ".concat(C?"":"popup__field_type_error"),required:!0,minLength:"2",maxLength:"30",onChange:function(e){h(e.target.value),x(e.target.validity.valid)},ref:E,value:_.value}),Object(u.jsx)("span",{className:"popup__error ".concat(C?"":"popup__error_visible"),id:"popup_image-title-error",children:null===(t=E.current)||void 0===t?void 0:t.validationMessage}),Object(u.jsx)("input",{type:"url",name:"link",id:"popup_image-link",placeholder:"Image Link",className:"popup__field ".concat(y?"":"popup__field_type_error"),required:!0,onChange:function(e){v(e.target.value),S(e.target.validity.valid)},ref:L,value:m.value}),Object(u.jsx)("span",{className:"popup__error ".concat(y?"":"popup__error_visible"),id:"popup_image-link-error",children:null===(a=L.current)||void 0===a?void 0:a.validationMessage})]})};var N=function(){var e=i.a.useState(""),t=Object(s.a)(e,2),a=t[0],n=t[1],c=i.a.useState(!1),r=Object(s.a)(c,2),l=r[0],_=r[1],m=i.a.useState(!1),v=Object(s.a)(m,2),O=v[0],N=v[1],y=i.a.useState(!1),S=Object(s.a)(y,2),P=S[0],E=S[1],L=i.a.useState(),U=Object(s.a)(L,2),A=U[0],R=U[1],w=i.a.useState([]),T=Object(s.a)(w,2),D=T[0],I=T[1];function q(){_(!1),N(!1),E(!1),R(!1),document.removeEventListener("keydown",F)}function J(e){"popup__overlay"===e.target.className&&q()}i.a.useEffect((function(){k.getProfileInfo().then((function(e){n(e)}))}),[]),i.a.useEffect((function(){k.getCards().then(I)}),[]);var M=l||P||O||A;function F(e){"Escape"===e.key&&q()}return i.a.useEffect((function(){M?document.addEventListener("keydown",F):document.removeEventListener("keydown",F)})),Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"root",children:Object(u.jsx)(p.Provider,{value:a,children:Object(u.jsxs)("div",{className:"page-content",children:[Object(u.jsx)(d,{}),Object(u.jsx)(h,{onEditProfileClick:function(){N(!0)},onAddPlaceClick:function(){E(!0)},onEditAvatarClick:function(){_(!0)},onCardClick:function(e){R(e)},cards:D,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));k.changeCardStatus(e._id,t).then((function(t){I((function(a){return a.map((function(a){return a._id===e._id?t:a}))}))}))},onCardDelete:function(e){k.deleteCard(e._id).then(I((function(t){return t.filter((function(t){return t._id!==e._id}))})))}}),Object(u.jsx)(C,{isOpen:O,onClose:q,onUpdateUser:function(e){k.setProfileInfo(e).then((function(e){return n(e)}),q())},onOutsideClick:J}),Object(u.jsx)(x,{isOpen:l,onClose:q,onUpdateAvatar:function(e){k.updateProfilePicture(e).then((function(e){return n(e)}),q())},onOutsideClick:J}),Object(u.jsx)(g,{isOpen:P,onClose:q,onAddPlaceSubmit:function(e){k.addNewCard(e).then(I([e].concat(Object(o.a)(D))),q())},onOutsideClick:J}),Object(u.jsx)(f,{name:"confirm-delete",title:"Are you sure?",onClose:q}),Object(u.jsx)(b,{card:A,onClose:q,onOutsideClick:J}),Object(u.jsx)(j,{})]})})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.356a4351.chunk.js.map