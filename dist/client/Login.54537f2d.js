webpackJsonp([1],{432:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,u,l=e(n(54)),r=e(n(69)),i=e(n(49)),o=e(n(50)),c=e(n(70)),s=e(n(71)),f=n(32),d=e(f),p=e(n(102)),v=n(103),m=n(104),g=n(107),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(439)),h=e(n(436));n(440);var _=(u=a=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){console.log(123)}},{key:"render",value:function(){var e=this.props.i18n;return d.default.createElement("div",{className:"login-main"},d.default.createElement("div",{className:"login-mask"},d.default.createElement("div",{className:"background-mask"})),d.default.createElement("div",{className:"center-box-container"},d.default.createElement("section",{className:"box-header signup"},d.default.createElement("header",{className:"signup-header"},e("signup","title")),d.default.createElement("div",{className:"signup-body"},d.default.createElement("div",{className:"signup-avatar"}),d.default.createElement("div",{className:"signup-link"},e("signup","newAccount")),d.default.createElement("div",{className:"signup-tip"},e("signup","tip"),e("signup","userAgreement")))),d.default.createElement("section",{className:"box-body signin"})))}}]),t}(f.Component),a.propTypes={i18n:p.default.func.isRequired},u);t.default=(0,v.connectAdvanced)(function(e){var t={},n=(0,m.bindActionCreators)(y,e);return function(e,a){var u=e.login,r=(0,g.getLang)(e.i18n,"app"),i=(0,l.default)({},a,u,{i18n:r},n);return t=h.default.shallowEqual(t,i)?t:i}})(_)}).call(this)}finally{}},436:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}Object.defineProperty(t,"__esModule",{value:!0});var u,l,r=e(n(437)),i=e(n(106)),o=e(n(49)),c=(l=u=function e(){(0,o.default)(this,e)},u.shallowEqual=function(e,t){if(a(e,t))return!0;if("object"!==(void 0===e?"undefined":(0,i.default)(e))||null===e||"object"!==(void 0===t?"undefined":(0,i.default)(t))||null===t)return!1;var n=(0,r.default)(e),u=(0,r.default)(t);if(n.length!==u.length)return!1;for(var l=0;l<n.length;l++)if(!Object.prototype.hasOwnProperty.call(t,n[l])||!a(e[n[l]],t[n[l]]))return!1;return!0},l);t.default=c}).call(this)}finally{}},437:function(e,t,n){e.exports=n(1)(366)},439:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setState=void 0;var e=n(105);t.setState=function(t){return{type:e.LOGIN_MIAN_SET,payload:t}}}).call(this)}finally{}},440:function(e,t){}});