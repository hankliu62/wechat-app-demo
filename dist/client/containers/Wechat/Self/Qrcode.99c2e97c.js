webpackJsonp([7],{635:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r,a=e(n(12)),s=e(n(64)),l=e(n(38)),u=e(n(52)),i=e(n(65)),c=e(n(66)),f=n(10),d=e(f),p=e(n(91)),m=n(92),h=e(n(654)),y=e(n(217)),v=e(n(650)),C=e(n(652)),b=e(n(822)),O=(0,h.default)("wechat:self"),g=(r=o=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return O("Profile page init props: ",e),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.headerUrl,n=e.nickname,o=e.qrcode,r=e.gender,a=e.area,s=e.remark;return d.default.createElement("div",{className:"self-profile-wrapper"},d.default.createElement(v.default,{title:"我的二维码",back:d.default.createElement(C.default,{history:this.props.history},d.default.createElement("span",{className:"weui-back-centent"},"个人信息"))}),d.default.createElement(b.default,{isOpen:!0,qrcodeUrl:o,headerUrl:t,nickname:n,remark:s,gender:r,areas:a,shouldCloseOnOverlayClick:!1}))}}]),t}(f.Component),o.propTypes={headerUrl:p.default.string.isRequired,nickname:p.default.string.isRequired,qrcode:p.default.string.isRequired,gender:p.default.string.isRequired,remark:p.default.string,area:p.default.array},r);t.default=(0,m.connectAdvanced)(function(){var e={};return function(t,n){var o=t.wechat.selfMain,r=(void 0===o?{}:o).personal,s=void 0===r?{}:r,l=(0,a.default)({},n,s);return e=y.default.shallowEqual(e,l)?e:l}})(g)}).call(this)}finally{}},650:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(10));n(651);t.default=function(t){return e.default.createElement("section",{className:"weui-header"},e.default.createElement("div",{className:"weui-header-back"},t.back&&t.back),e.default.createElement("div",{className:"weui-header-title"},t.title),e.default.createElement("div",{className:"weui-header-operation"},t.children))}}).call(this)}finally{}},651:function(e,t){},652:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(n(64)),r=e(n(38)),a=e(n(52)),s=e(n(65)),l=e(n(66)),u=n(10),i=e(u);n(653);var c=function(e){function t(){var e,n,a,l;(0,r.default)(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=a=(0,s.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(i))),a.onClickBack=function(){a.props.history.goBack()},l=n,(0,s.default)(a,l)}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"weui-back iconfont icon-return-arrow",onClick:this.onClickBack},this.props.children&&this.props.children)}}]),t}(u.Component);t.default=c}).call(this)}finally{}},653:function(e,t){},654:function(e,t,n){(function(o){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=o.env.DEBUG),e}(t=e.exports=n(662)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))}),e.splice(a,0,o)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(t,n(216))},662:function(e,t,n){function o(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}function r(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),l=0;l<s.length;l++)s[l]=arguments[l];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var u=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,o){if("%%"===n)return n;u++;var r=t.formatters[o];if("function"==typeof r){var a=s[u];n=r.call(e,a),s.splice(u,1),u--}return n}),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}var r;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=o(e),n.destroy=a,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function a(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];var n,o=("string"==typeof e?e:"").split(/[\s,]+/),r=o.length;for(n=0;n<r;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var a=t.instances[n];a.enabled=t.enabled(a.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(663),t.instances=[],t.names=[],t.skips=[],t.formatters={}},663:function(e,t){function n(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*i;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*l;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function o(e){return e>=i?Math.round(e/i)+"d":e>=u?Math.round(e/u)+"h":e>=l?Math.round(e/l)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function r(e){return a(e,i,"day")||a(e,u,"hour")||a(e,l,"minute")||a(e,s,"second")||e+" ms"}function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var s=1e3,l=60*s,u=60*l,i=24*u,c=365.25*i;e.exports=function(e,t){t=t||{};var a=typeof e;if("string"===a&&e.length>0)return n(e);if("number"===a&&!1===isNaN(e))return t.long?r(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},666:function(e,t,n){"use strict";function o(e){return e.offsetWidth<=0&&e.offsetHeight<=0||"none"===e.style.display}function r(e){for(var t=e;t&&t!==document.body;){if(o(t))return!1;t=t.parentNode}return!0}function a(e,t){var n=e.nodeName.toLowerCase();return(l.test(n)&&!e.disabled||("a"===n?e.href||t:t))&&r(e)}function s(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&a(e,!n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return[].slice.call(e.querySelectorAll("*"),0).filter(s)};var l=/input|select|textarea|button|object/;e.exports=t.default},667:function(e,t,n){"use strict";function o(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function r(e){var t=e;if("string"==typeof t){var n=document.querySelectorAll(t);o(n,t),t="length"in n?n[0]:n}return l=t||l}function a(){return!(!document||!document.body)&&(r(document.body),!0)}function s(e){if(!e&&!l&&!a())throw new Error(["react-modal: Cannot fallback to `document.body`, because it's not ready or available.","If you are doing server-side rendering, use this function to defined an element.","`Modal.setAppElement(el)` to make this accessible"])}Object.defineProperty(t,"__esModule",{value:!0}),t.assertNodeList=o,t.setElement=r,t.tryForceFallback=a,t.validateElement=s,t.hide=function(e){s(e),(e||l).setAttribute("aria-hidden","true")},t.show=function(e){s(e),(e||l).removeAttribute("aria-hidden")},t.documentNotReadyOrSSRTesting=function(){l=null},t.resetForTesting=function(){l=document.body};var l=null},668:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.get=function(){return o},t.add=function(e){return o[e]||(o[e]=0),o[e]+=1,e},t.remove=function(e){return o[e]&&(o[e]-=1),e},t.totalCount=function(){return Object.keys(o).reduce(function(e,t){return e+o[t]},0)};var o={}},669:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(799)).default.canUseDOM?window.HTMLElement:{};t.default=o,e.exports=t.default},792:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r,a=e(n(12)),s=e(n(64)),l=e(n(38)),u=e(n(52)),i=e(n(65)),c=e(n(66)),f=n(10),d=e(f),p=e(n(91)),m=e(n(793)),h=(0,e(n(654)).default)("wechat:component"),y=(r=o=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return h("weui model init props:",e),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e={overlay:(0,a.default)({position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},this.props.overlayStyle),content:(0,a.default)({position:"absolute",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"1px solid #ccc",backgroundColor:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:".1rem",outline:"none",padding:".5rem"},this.props.contentStyle)};return d.default.createElement(m.default,{className:this.props.className,isOpen:this.props.isOpen,closeTimeoutMS:300,onRequestClose:this.props.onRequestClose,style:e,contentLabel:this.props.contentLabel,shouldCloseOnOverlayClick:this.props.shouldCloseOnOverlayClick},this.props.children)}}]),t}(f.Component),o.propTypes={isOpen:p.default.bool.isRequired,shouldCloseOnOverlayClick:p.default.bool,contentLabel:p.default.string.isRequired,overlayStyle:p.default.object,contentStyle:p.default.object,onRequestClose:p.default.func},o.defaultProps={isOpen:!1,shouldCloseOnOverlayClick:!0,overlayStyle:{},contentStyle:{},onRequestClose:function(){},className:""},r);t.default=y}).call(this)}finally{}},793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(794));t.default=o.default,e.exports=t.default},794:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return e()}Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(10),f=o(c),d=o(n(218)),p=o(n(91)),m=o(n(795)),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(667)),y=o(n(669)),v=t.portalClassName="ReactModalPortal",C=t.bodyOpenClassName="ReactModal__Body--open",b=d.default.unstable_renderSubtreeIntoContainer,O=function(t){function n(){var e,t,o,s;r(this,n);for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];return t=o=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(c))),o.removePortal=function(){d.default.unmountComponentAtNode(o.node),l(o.props.parentSelector).removeChild(o.node)},o.renderPortal=function(e){o.portal=b(o,f.default.createElement(m.default,u({defaultStyles:n.defaultStyles},e)),o.node)},s=t,a(o,s)}return s(n,c.Component),i(n,[{key:"componentDidMount",value:function(){this.node=document.createElement("div"),this.node.className=this.props.portalClassName,l(this.props.parentSelector).appendChild(this.node),this.renderPortal(this.props)}},{key:"componentWillReceiveProps",value:function(e){var t=e.isOpen;if(this.props.isOpen||t){var n=l(this.props.parentSelector),o=l(e.parentSelector);o!==n&&(n.removeChild(this.node),o.appendChild(this.node)),this.renderPortal(e)}}},{key:"componentWillUpdate",value:function(e){e.portalClassName!==this.props.portalClassName&&(this.node.className=e.portalClassName)}},{key:"componentWillUnmount",value:function(){if(this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return null}}],[{key:"setAppElement",value:function(e){h.setElement(e)}},{key:"injectCSS",value:function(){"production"!==e.env.NODE_ENV&&console.warn("React-Modal: injectCSS has been deprecated and no longer has any effect. It will be removed in a later version")}}]),n}();O.propTypes={isOpen:p.default.bool.isRequired,style:p.default.shape({content:p.default.object,overlay:p.default.object}),portalClassName:p.default.string,bodyOpenClassName:p.default.string,className:p.default.oneOfType([p.default.string,p.default.object]),overlayClassName:p.default.oneOfType([p.default.string,p.default.object]),appElement:p.default.instanceOf(y.default),onAfterOpen:p.default.func,onRequestClose:p.default.func,closeTimeoutMS:p.default.number,ariaHideApp:p.default.bool,shouldFocusAfter:p.default.bool,shouldCloseOnOverlayClick:p.default.bool,parentSelector:p.default.func,aria:p.default.object,role:p.default.string,contentLabel:p.default.string.isRequired},O.defaultProps={isOpen:!1,portalClassName:v,bodyOpenClassName:C,ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnOverlayClick:!0,parentSelector:function(){return document.body}},O.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},t.default=O}).call(t,n(216))},795:function(e,t,n){"use strict";(function(o){function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(10),p=a(d),m=n(91),h=r(n(796)),y=a(n(797)),v=r(n(667)),C=r(n(668)),b=r(n(798)),O=a(n(669)),g={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},w=9,_=27,F=function(e){function t(e){s(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setFocusAfterRender=function(e){n.focusAfterRender=n.props.shouldFocusAfterRender&&e},n.setOverlayRef=function(e){n.overlay=e},n.setContentRef=function(e){n.content=e},n.afterClose=function(){h.returnFocus(),h.teardownScopedFocus()},n.open=function(){n.beforeOpen(),n.state.afterOpen&&n.state.beforeClose?(clearTimeout(n.closeTimer),n.setState({beforeClose:!1})):(h.setupScopedFocus(n.node),h.markForFocusLater(),n.setState({isOpen:!0},function(){n.setState({afterOpen:!0}),n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen()}))},n.close=function(){n.beforeClose(),n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()},n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus()},n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS;n.setState({beforeClose:!0,closesAt:e},function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())})},n.closeWithoutTimeout=function(){n.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},n.afterClose)},n.handleKeyDown=function(e){e.keyCode===w&&(0,y.default)(n.content,e),e.keyCode===_&&(e.preventDefault(),n.requestClose(e))},n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=!0),n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent()),n.shouldClose=null},n.handleContentOnClick=function(){n.shouldClose=!1},n.handleContentOnMouseDown=function(){n.shouldClose=!1},n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)},n.ownerHandlesClose=function(){return n.props.onRequestClose},n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose},n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)},n.buildClassName=function(e,t){var o="object"===(void 0===t?"undefined":c(t))?t:{base:g[e],afterOpen:g[e]+"--after-open",beforeClose:g[e]+"--before-close"},r=o.base;return n.state.afterOpen&&(r=r+" "+o.afterOpen),n.state.beforeClose&&(r=r+" "+o.beforeClose),"string"==typeof t&&t?r+" "+t:r},n.ariaAttributes=function(e){return Object.keys(e).reduce(function(t,n){return t["aria-"+n]=e[n],t},{})},n.state={afterOpen:!1,beforeClose:!1},n.shouldClose=null,n}return u(t,d.Component),f(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&(this.setFocusAfterRender(!0),this.open())}},{key:"componentWillReceiveProps",value:function(e){"production"!==o.env.NODE_ENV&&e.bodyOpenClassName!==this.props.bodyOpenClassName&&console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'),!this.props.isOpen&&e.isOpen?(this.setFocusAfterRender(!0),this.open()):this.props.isOpen&&!e.isOpen&&this.close()}},{key:"componentDidUpdate",value:function(){this.focusAfterRender&&(this.focusContent(),this.setFocusAfterRender(!1))}},{key:"componentWillUnmount",value:function(){this.beforeClose(),clearTimeout(this.closeTimer)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.bodyOpenClassName;b.add(o),n&&v.hide(t)}},{key:"beforeClose",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,o=e.bodyOpenClassName;b.remove(o),n&&C.totalCount()<1&&v.show(t)}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayClassName,o=e.defaultStyles,r=t?{}:o.content,a=n?{}:o.overlay;return this.shouldBeClosed()?null:p.default.createElement("div",{ref:this.setOverlayRef,className:this.buildClassName("overlay",n),style:i({},a,this.props.style.overlay),onClick:this.handleOverlayOnClick},p.default.createElement("div",i({ref:this.setContentRef,style:i({},r,this.props.style.content),className:this.buildClassName("content",t),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.ariaAttributes(this.props.aria||{})),this.props.children))}}]),t}();F.defaultProps={style:{overlay:{},content:{}}},F.propTypes={isOpen:m.PropTypes.bool.isRequired,defaultStyles:m.PropTypes.shape({content:m.PropTypes.object,overlay:m.PropTypes.object}),style:m.PropTypes.shape({content:m.PropTypes.object,overlay:m.PropTypes.object}),className:m.PropTypes.oneOfType([m.PropTypes.string,m.PropTypes.object]),overlayClassName:m.PropTypes.oneOfType([m.PropTypes.string,m.PropTypes.object]),bodyOpenClassName:m.PropTypes.string,ariaHideApp:m.PropTypes.bool,appElement:m.PropTypes.instanceOf(O.default),onAfterOpen:m.PropTypes.func,onRequestClose:m.PropTypes.func,closeTimeoutMS:m.PropTypes.number,shouldFocusAfterRender:m.PropTypes.bool,shouldCloseOnOverlayClick:m.PropTypes.bool,role:m.PropTypes.string,contentLabel:m.PropTypes.string,aria:m.PropTypes.object,children:m.PropTypes.node},t.default=F,e.exports=t.default}).call(t,n(216))},796:function(e,t,n){"use strict";function o(){u=!0}function r(){if(u){if(u=!1,!l)return;setTimeout(function(){l.contains(document.activeElement)||((0,a.default)(l)[0]||l).focus()},0)}}Object.defineProperty(t,"__esModule",{value:!0}),t.handleBlur=o,t.handleFocus=r,t.markForFocusLater=function(){s.push(document.activeElement)},t.returnFocus=function(){var e=null;try{return void(e=s.pop()).focus()}catch(t){console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}},t.setupScopedFocus=function(e){l=e,window.addEventListener?(window.addEventListener("blur",o,!1),document.addEventListener("focus",r,!0)):(window.attachEvent("onBlur",o),document.attachEvent("onFocus",r))},t.teardownScopedFocus=function(){l=null,window.addEventListener?(window.removeEventListener("blur",o),document.removeEventListener("focus",r)):(window.detachEvent("onBlur",o),document.detachEvent("onFocus",r))};var a=function(e){return e&&e.__esModule?e:{default:e}}(n(666)),s=[],l=null,u=!1},797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.default)(e);n.length?(n[t.shiftKey?0:n.length-1]===document.activeElement||e===document.activeElement)&&(t.preventDefault(),n[t.shiftKey?n.length-1:0].focus()):t.preventDefault()};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(666));e.exports=t.default},798:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.add=function(e){e.split(" ").map(o.add).forEach(function(e){return document.body.classList.add(e)})},t.remove=function(e){var t=o.get();e.split(" ").map(o.remove).filter(function(e){return 0===t[e]}).forEach(function(e){return document.body.classList.remove(e)})};var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(668))},799:function(e,t,n){var o;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0!==(o=function(){return a}.call(t,n,t,e))&&(e.exports=o)}()},805:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(10));t.default=function(t){return e.default.createElement("p",{className:"weui-contact-name"},t.remark||t.nickname)}}).call(this)}finally{}},807:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(n(215)),r=e(n(10)),a=e(n(214)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(137));n(808);t.default=function(e){return[s.FEMALE,s.MALE].includes(e.gender)?r.default.createElement("span",{className:(0,a.default)("weui-gender",(0,o.default)({},e.gender,!!e.gender))}):null}}).call(this)}finally{}},808:function(e,t){},822:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r,a=e(n(12)),s=e(n(64)),l=e(n(38)),u=e(n(52)),i=e(n(65)),c=e(n(66)),f=n(10),d=e(f),p=e(n(91)),m=e(n(654)),h=e(n(792)),y=e(n(805)),v=e(n(807));n(823);var C=(0,m.default)("wechat:component"),b=(r=o=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return C("weui qrcode model init props:",e),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.areas,n=e.overlayStyle,o=e.contentStyle;return d.default.createElement(h.default,{isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,shouldCloseOnOverlayClick:this.props.shouldCloseOnOverlayClick,contentLabel:"Weui Qrcode Modal",contentStyle:o,overlayStyle:(0,a.default)({backgroundColor:"rgba(0, 0, 0, 0.62)"},n)},d.default.createElement("div",{className:"weui-qrcode-modal"},d.default.createElement("header",{className:"qrcode-modal-header"},d.default.createElement("div",{className:"profile-avatar"},d.default.createElement("img",{className:"avatar",src:this.props.headerUrl})),d.default.createElement("div",{className:"profile-content"},d.default.createElement("div",{className:"content-base"},d.default.createElement(y.default,{nickname:this.props.nickname,remark:this.props.remark}),d.default.createElement(v.default,{gender:this.props.gender})),!(!t||!t.length)&&d.default.createElement("div",{className:"content-address"},t.join(" ")))),d.default.createElement("div",{className:"qrcode-modal-body"},d.default.createElement("img",{className:"profile-qrcode",src:this.props.qrcodeUrl})),d.default.createElement("footer",{className:"qrcode-modal-footer"},"扫一扫上面的二维码图案，加我微信")))}}]),t}(f.Component),o.propTypes={qrcodeUrl:p.default.string.isRequired,headerUrl:p.default.string.isRequired,nickname:p.default.string.isRequired,remark:p.default.string,gender:p.default.string,areas:p.default.array,isOpen:p.default.bool.isRequired,shouldCloseOnOverlayClick:p.default.bool,overlayStyle:p.default.object,contentStyle:p.default.object,onRequestClose:p.default.func},o.defaultProps={isOpen:!1,shouldCloseOnOverlayClick:!0,overlayStyle:{},contentStyle:{},onRequestClose:function(){}},r);t.default=b}).call(this)}finally{}},823:function(e,t){}});