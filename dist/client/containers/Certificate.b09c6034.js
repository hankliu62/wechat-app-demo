webpackJsonp([3],{591:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l,o=e(n(49)),i=e(n(61)),r=e(n(48)),c=e(n(50)),u=e(n(62)),d=e(n(63)),s=n(12),f=e(s),m=e(n(125)),p=n(126),h=n(84),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(602)),y=e(n(593)),N=e(n(628)),_=e(n(630)),E=e(n(632));n(633);var g=(l=a=function(e){function t(e){(0,r.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.onTriggerSwitch=function(){n.setState({isOpenNoenReport:!n.state.isOpenNoenReport})},n.state={isOpenNoenReport:!1},n}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.setState({content:"Modified Redux Content Data"})},3e3)}},{key:"componentDidUpdate",value:function(){if(!this.htmlBody){var e=document.getElementsByClassName("html-body");e&&e.length&&(this.htmlBody=e[0])}if(this.htmlBody){var t=this.htmlBody.className;this.state.isOpenNoenReport?this.htmlBody.className=t.replace(" body-overflow","")+" body-overflow":this.htmlBody.className=t.replace(" body-overflow","")}}},{key:"render",value:function(){var e=this.state.isOpenNoenReport,t=[[{title:"姓名：",content:"罗得意"},{title:"性别：",content:"男"},{title:"出生日期：",content:"1991年6月29日"}],[{title:"入学时间：",content:"2014年9月10日"},{title:"毕业时间：",content:"2016年7月1日"},{title:"学历类型：",content:"研究生"},{title:"学历层次：",content:"硕士研究生"},{title:"毕业院校：",content:"中南林业科技大学"},{title:"院校所在地：",content:"湖南省"},{title:"专业名称：",content:"生理学"},{title:"学习形式：",content:"普通全日制"},{title:"证书编号：",content:"1055 8120 1302 0032 40"},{title:"毕结业结论：",content:"毕业"}],[{title:"在线验证码：",content:"8117 6483 6712"},{title:"制表日期：",content:"2016年9月10日"},{title:"验证期至：",content:"2017年3月8日"}]];return f.default.createElement("div",{className:"certificate-main"},f.default.createElement("header",{className:"certificate-header"},f.default.createElement("div",{className:"switch-langauge"},f.default.createElement("label",{className:"switch-langauge-label"},"报告语种："),f.default.createElement("span",{className:"langauge-item",onClick:function(){return window.location.reload()}},"中文"),f.default.createElement("a",{className:"modal-trigger",onClick:this.onTriggerSwitch},f.default.createElement("span",{className:"new-lever"},f.default.createElement("span",{className:"lever-cilcle"}))),f.default.createElement("span",{className:"langauge-item",onClick:this.onTriggerSwitch},"英文")),f.default.createElement("a",{className:"btn-print",href:"http://www.chsi.com.cn/report/xueli/download.do?vcode=811764836712&rid=91787196644925384073491000421032&ln=cn"})),f.default.createElement("div",{className:"certificate-body"},f.default.createElement("h5",{className:"certificate-title"},"教育部学历证书电子注册备案表"),f.default.createElement("div",{className:"certificate-avatar"},f.default.createElement("img",{src:E.default,alt:"个人头像"})),t.map(function(e,t){return f.default.createElement(N.default,{key:"collectioncard-"+t,collection:e})})),e&&f.default.createElement(_.default,{isOpen:e,onHide:this.onTriggerSwitch}),e&&f.default.createElement("div",{className:"lean-overlay"}))}}]),t}(s.Component),a.propTypes={setState:m.default.func.isRequired},l);t.default=(0,p.connectAdvanced)(function(e){var t={},n=(0,h.bindActionCreators)(v,e);return function(e,a){var l=e.homepage.content,i=(0,o.default)({},a,{content:l},n);return t=y.default.shallowEqual(t,i)?t:i}})(g)}).call(this)}finally{}},593:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function a(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!==e&&t!==t}Object.defineProperty(t,"__esModule",{value:!0});var l,o,i=e(n(199)),r=e(n(127)),c=e(n(48)),u=(o=l=function e(){(0,c.default)(this,e)},l.shallowEqual=function(e,t){if(a(e,t))return!0;if("object"!==(void 0===e?"undefined":(0,r.default)(e))||null===e||"object"!==(void 0===t?"undefined":(0,r.default)(t))||null===t)return!1;var n=(0,i.default)(e),l=(0,i.default)(t);if(n.length!==l.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(t,n[o])||!a(e[n[o]],t[n[o]]))return!1;return!0},o);t.default=u}).call(this)}finally{}},602:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setState=void 0;var e=n(128);t.setState=function(t){return{type:e.HOMEPAGE_MAIN_SET,payload:t}}}).call(this)}finally{}},628:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l,o=e(n(61)),i=e(n(48)),r=e(n(50)),c=e(n(62)),u=e(n(63)),d=n(12),s=e(d),f=e(n(125));n(629);var m=(l=a=function(e){function t(){return(0,i.default)(this,t),(0,c.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props.collection;return s.default.createElement("div",{className:"collection card"},e.map(function(e,t){return s.default.createElement("div",{key:"key-"+t,className:"collection-item"},s.default.createElement("div",{className:"collection-item-title"},e.title),s.default.createElement("div",{className:"collection-item-content"},e.content))}))}}]),t}(d.Component),a.propTypes={collection:f.default.array.isRequired},a.defaultProps={collection:[]},l);t.default=m}).call(this)}finally{}},629:function(e,t){},630:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,l,o=e(n(61)),i=e(n(48)),r=e(n(50)),c=e(n(62)),u=e(n(63)),d=n(12),s=e(d),f=e(n(125)),m=e(n(200));n(631);var p=(l=a=function(e){function t(){var e,n,a,l;(0,i.default)(this,t);for(var r=arguments.length,u=Array(r),d=0;d<r;d++)u[d]=arguments[d];return n=a=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),a.componentDidMount=function(){document.addEventListener("mousedown",a.onClickDocument)},a.componentWillUnmount=function(){document.removeEventListener("mousedown",a.onClickDocument)},a.onClickDocument=function(e){!a.isChildOf(e.target,a.refRoot)&&a.props.onHide()},a.isChildOf=function(e,t){return e.parentNode===t||null!==e.parentNode&&a.isChildOf(e.parentNode,t)},l=n,(0,c.default)(a,l)}return(0,u.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this,t=this.props.isOpen;return s.default.createElement("div",{ref:function(t){return e.refRoot=t},className:(0,m.default)("noenreport-modal",{"m-show":t,"m-hidden":t})},s.default.createElement("div",{className:"modal-content"},"该备案表尚无对应的英文版，",s.default.createElement("a",{href:"http://www.chsi.com.cn/xlcx/rhsq.jsp#rhsqxl_en",className:"nr-detail"},"如何申请")),s.default.createElement("div",{className:"modal-footer clearfix"},s.default.createElement("span",{className:"modal-action modal-close btn-flat",onClick:this.props.onHide},"关闭")))}}]),t}(d.Component),a.propTypes={isOpen:f.default.bool.isRequired,onHide:f.default.func.isRequired},a.defaultProps={isOpen:!1,onHide:function(){}},l);t.default=p}).call(this)}finally{}},631:function(e,t){},632:function(e,t,n){e.exports=n.p+"img/avatar.a8a8e9be.jpg"},633:function(e,t){}});