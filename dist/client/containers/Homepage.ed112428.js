webpackJsonp([2],{448:function(t,e,n){try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u,r,o=t(n(51)),a=t(n(56)),l=t(n(44)),i=t(n(45)),f=t(n(57)),c=t(n(58)),d=n(12),s=t(d),p=t(n(103)),v=n(104),y=n(105),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(455)),_=t(n(453)),M=(r=u=function(t){function e(){return(0,l.default)(this,e),(0,f.default)(this,(e.__proto__||(0,a.default)(e)).apply(this,arguments))}return(0,c.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.props.setState({content:"Modified Redux Content Data"})},3e3)}},{key:"render",value:function(){var t=this.props.content;return s.default.createElement("div",{className:"homepage-main"},t)}}]),e}(d.Component),u.propTypes={content:p.default.string.isRequired,setState:p.default.func.isRequired},r);e.default=(0,v.connectAdvanced)(function(t){var e={},n=(0,y.bindActionCreators)(h,t);return function(t,u){var r=t.homepage.content,a=(0,o.default)({},u,{content:r},n);return e=_.default.shallowEqual(e,a)?e:a}})(M)}).call(this)}finally{}},453:function(t,e,n){try{(function(){"use strict";function t(t){return t&&t.__esModule?t:{default:t}}function u(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!==t&&e!==e}Object.defineProperty(e,"__esModule",{value:!0});var r,o,a=t(n(454)),l=t(n(107)),i=t(n(44)),f=(o=r=function t(){(0,i.default)(this,t)},r.shallowEqual=function(t,e){if(u(t,e))return!0;if("object"!==(void 0===t?"undefined":(0,l.default)(t))||null===t||"object"!==(void 0===e?"undefined":(0,l.default)(e))||null===e)return!1;var n=(0,a.default)(t),r=(0,a.default)(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(e,n[o])||!u(t[n[o]],e[n[o]]))return!1;return!0},o);e.default=f}).call(this)}finally{}},454:function(t,e,n){t.exports=n(1)(366)},455:function(t,e,n){try{(function(){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setState=void 0;var t=n(106);e.setState=function(e){return{type:t.HOMEPAGE_MAIN_SET,payload:e}}}).call(this)}finally{}}});