webpackJsonp([5],{588:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l,u=e(n(49)),r=e(n(61)),i=e(n(48)),o=e(n(50)),c=e(n(62)),s=e(n(63)),d=n(12),f=e(d),p=e(n(125)),v=n(126),m=n(84),g=n(129),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(626)),h=e(n(593));n(627);var _=(l=a=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){console.log(123)}},{key:"render",value:function(){var e=this.props.i18n;return f.default.createElement("div",{className:"login-main"},f.default.createElement("div",{className:"login-mask"},f.default.createElement("div",{className:"background-mask"})),f.default.createElement("div",{className:"center-box-container"},f.default.createElement("section",{className:"box-header signup"},f.default.createElement("header",{className:"signup-header"},e("signup","title")),f.default.createElement("div",{className:"signup-body"},f.default.createElement("div",{className:"signup-avatar"}),f.default.createElement("div",{className:"signup-link"},e("signup","newAccount")),f.default.createElement("div",{className:"signup-tip"},e("signup","tip"),e("signup","userAgreement")))),f.default.createElement("section",{className:"box-body signin"})))}}]),t}(d.Component),a.propTypes={i18n:p.default.func.isRequired},l);t.default=(0,v.connectAdvanced)(function(e){var t={},n=(0,m.bindActionCreators)(y,e);return function(e,a){var l=e.login,r=(0,g.getLang)(e.i18n,"app"),i=(0,u.default)({},a,l,{i18n:r},n);return t=h.default.shallowEqual(t,i)?t:i}})(_)}).call(this)}finally{}},593:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}Object.defineProperty(t,"__esModule",{value:!0});var l,u,r=e(n(199)),i=e(n(127)),o=e(n(48)),c=(u=l=function e(){(0,o.default)(this,e)},l.shallowEqual=function(e,t){if(a(e,t))return!0;if("object"!==(void 0===e?"undefined":(0,i.default)(e))||null===e||"object"!==(void 0===t?"undefined":(0,i.default)(t))||null===t)return!1;var n=(0,r.default)(e),l=(0,r.default)(t);if(n.length!==l.length)return!1;for(var u=0;u<n.length;u++)if(!Object.prototype.hasOwnProperty.call(t,n[u])||!a(e[n[u]],t[n[u]]))return!1;return!0},u);t.default=c}).call(this)}finally{}},626:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setState=void 0;var e=n(128);t.setState=function(t){return{type:e.LOGIN_MIAN_SET,payload:t}}}).call(this)}finally{}},627:function(e,t){}});