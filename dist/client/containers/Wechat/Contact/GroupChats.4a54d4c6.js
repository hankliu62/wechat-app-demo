webpackJsonp([8],{623:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,l,u=a(n(218)),o=a(n(12)),c=a(n(63)),s=a(n(37)),i=a(n(52)),f=a(n(64)),d=a(n(65)),h=n(10),p=a(h),m=a(n(91)),C=n(92),v=n(66),g=a(n(649)),y=a(n(213)),F=a(n(645)),b=a(n(647)),w=a(n(664)),E=a(n(650)),_=a(n(812)),k=e(n(219)),N=e(n(135));n(828);var M=(0,g.default)("wechat:contact"),x=(l=r=function(e){function t(e){(0,s.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return n.renderChatGroupsCells=function(){var e=n.props.groupChats.map(function(e){return{left:p.default.createElement(_.default,{images:e.headerImages}),center:p.default.createElement("p",null,e.name),link:"/wechat/chat/dialogue/"+e.mid}});return p.default.createElement(E.default,{cells:e})},M("GroupChats page init props:",e),M("GroupChats page props setState function",e.setState),n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.total;return p.default.createElement("div",{className:"contact-group-chats-wrapper"},p.default.createElement(F.default,{title:"群聊",back:p.default.createElement(b.default,{history:this.props.history},p.default.createElement("span",{className:"weui-back-centent"},"通讯录"))}),p.default.createElement(w.default,null),this.renderChatGroupsCells(),p.default.createElement("p",{className:"contact-statistics"},e+"个群聊"))}}]),t}(h.Component),r.propTypes={groupChats:m.default.array.isRequired,total:m.default.number.isRequired,setState:m.default.func.isRequired},l);t.default=(0,C.connectAdvanced)(function(e){var t={},n=(0,v.bindActionCreators)(k,e);return function(e,a){var r=e.wechat.chatMain.chats,l=void 0===r?[]:r,c=[],s=!0,i=!1,f=void 0;try{for(var d,h=(0,u.default)(l);!(s=(d=h.next()).done);s=!0){var p=d.value;p.base.type===N.CHAT_ROOM_TYPE_GROUP&&c.push({mid:p.mid,wxid:p.base.wxid,name:p.base.name,headerImages:(p.chatMemberModel||[]).map(function(e){return e.headerUrl})})}}catch(e){i=!0,f=e}finally{try{!s&&h.return&&h.return()}finally{if(i)throw f}}var m=c.length,C=(0,o.default)({},a,{groupChats:c,total:m},n);return t=y.default.shallowEqual(t,C)?t:C}})(x)}).call(this)}finally{}},645:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(10));n(646);t.default=function(t){return e.default.createElement("section",{className:"weui-header"},e.default.createElement("div",{className:"weui-header-back"},t.back&&t.back),e.default.createElement("div",{className:"weui-header-title"},t.title),e.default.createElement("div",{className:"weui-header-operation"},t.children))}}).call(this)}finally{}},646:function(e,t){},647:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(63)),r=e(n(37)),l=e(n(52)),u=e(n(64)),o=e(n(65)),c=n(10),s=e(c);n(648);var i=function(e){function t(){var e,n,l,o;(0,r.default)(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return n=l=(0,u.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(s))),l.onClickBack=function(){l.props.history.goBack()},o=n,(0,u.default)(l,o)}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"weui-back iconfont icon-return-arrow",onClick:this.onClickBack},this.props.children&&this.props.children)}}]),t}(c.Component);t.default=i}).call(this)}finally{}},648:function(e,t){},649:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==a&&"env"in a&&(e=a.env.DEBUG),e}(t=e.exports=n(656)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),n){var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,l=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(r++,"%c"===e&&(l=r))}),e.splice(l,0,a)}},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())}).call(t,n(212))},650:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(12)),r=e(n(10)),l=e(n(651));n(653);t.default=function(e){return r.default.createElement("div",{className:"weui-cells"},e.cells&&e.cells.map(function(e,t){return r.default.createElement(l.default,(0,a.default)({key:t},e))}))}}).call(this)}finally{}},651:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(12)),r=e(n(211)),l=e(n(10)),u=n(38),o=e(n(210));n(652);var c=function(e){return l.default.createElement("div",{className:"weui-cell-hd"},e.left&&e.left)},s=function(e){return l.default.createElement("div",{className:"weui-cell-bd"},e.center)},i=function(e){return l.default.createElement("div",{className:"weui-cell-ft"},e.right&&e.right)};t.default=function(e){var t=(0,r.default)({},e.className,!!e.className);if(e.link)return l.default.createElement(u.Link,{to:e.link||"",className:(0,o.default)("weui-cell clickable",t)},l.default.createElement(c,{left:e.left}),l.default.createElement(s,{center:e.center}),l.default.createElement(i,{right:e.right}));var n={};return e.onClick&&(n.onClick=e.onClick,t.clickable=!0),l.default.createElement("div",(0,a.default)({},n,{className:(0,o.default)("weui-cell",t)}),l.default.createElement(c,{left:e.left}),l.default.createElement(s,{center:e.center}),l.default.createElement(i,{right:e.right}))}}).call(this)}finally{}},652:function(e,t){},653:function(e,t){},654:function(e,t,n){(function(t){var n,a=t.crypto||t.msCrypto;if(a&&a.getRandomValues){var r=new Uint8Array(16);n=function(){return a.getRandomValues(r),r}}if(!n){var l=new Array(16);n=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),l[t]=e>>>((3&t)<<3)&255;return l}}e.exports=n}).call(t,n(93))},655:function(e,t){for(var n=[],a=0;a<256;++a)n[a]=(a+256).toString(16).substr(1);e.exports=function(e,t){var a=t||0,r=n;return r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+"-"+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]+r[e[a++]]}},656:function(e,t,n){function a(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}function r(e){function n(){if(n.enabled){var e=n,a=+new Date,l=a-(r||a);e.diff=l,e.prev=r,e.curr=a,r=a;for(var u=new Array(arguments.length),o=0;o<u.length;o++)u[o]=arguments[o];u[0]=t.coerce(u[0]),"string"!=typeof u[0]&&u.unshift("%O");var c=0;u[0]=u[0].replace(/%([a-zA-Z%])/g,function(n,a){if("%%"===n)return n;c++;var r=t.formatters[a];if("function"==typeof r){var l=u[c];n=r.call(e,l),u.splice(c,1),c--}return n}),t.formatArgs.call(e,u),(n.log||t.log||console.log.bind(console)).apply(e,u)}}var r;return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=a(e),n.destroy=l,"function"==typeof t.init&&t.init(n),t.instances.push(n),n}function l(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];var n,a=("string"==typeof e?e:"").split(/[\s,]+/),r=a.length;for(n=0;n<r;n++)a[n]&&("-"===(e=a[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var l=t.instances[n];l.enabled=t.enabled(l.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(657),t.instances=[],t.names=[],t.skips=[],t.formatters={}},657:function(e,t){function n(e){if(!((e=String(e)).length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*i;case"days":case"day":case"d":return n*s;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*o;case"seconds":case"second":case"secs":case"sec":case"s":return n*u;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function a(e){return e>=s?Math.round(e/s)+"d":e>=c?Math.round(e/c)+"h":e>=o?Math.round(e/o)+"m":e>=u?Math.round(e/u)+"s":e+"ms"}function r(e){return l(e,s,"day")||l(e,c,"hour")||l(e,o,"minute")||l(e,u,"second")||e+" ms"}function l(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}var u=1e3,o=60*u,c=60*o,s=24*c,i=365.25*s;e.exports=function(e,t){t=t||{};var l=typeof e;if("string"===l&&e.length>0)return n(e);if("number"===l&&!1===isNaN(e))return t.long?r(e):a(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},659:function(e,t,n){var a=n(654),r=n(655),l=a(),u=[1|l[0],l[1],l[2],l[3],l[4],l[5]],o=16383&(l[6]<<8|l[7]),c=0,s=0;e.exports=function(e,t,n){var a=t&&n||0,l=t||[],i=void 0!==(e=e||{}).clockseq?e.clockseq:o,f=void 0!==e.msecs?e.msecs:(new Date).getTime(),d=void 0!==e.nsecs?e.nsecs:s+1,h=f-c+(d-s)/1e4;if(h<0&&void 0===e.clockseq&&(i=i+1&16383),(h<0||f>c)&&void 0===e.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=f,s=d,o=i;var p=(1e4*(268435455&(f+=122192928e5))+d)%4294967296;l[a++]=p>>>24&255,l[a++]=p>>>16&255,l[a++]=p>>>8&255,l[a++]=255&p;var m=f/4294967296*1e4&268435455;l[a++]=m>>>8&255,l[a++]=255&m,l[a++]=m>>>24&15|16,l[a++]=m>>>16&255,l[a++]=i>>>8|128,l[a++]=255&i;for(var C=e.node||u,v=0;v<6;++v)l[a+v]=C[v];return t||r(l)}},664:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,r,l,u=e(n(211)),o=e(n(63)),c=e(n(37)),s=e(n(52)),i=e(n(64)),f=e(n(65)),d=n(10),h=e(d),p=e(n(91)),m=e(n(210)),C=e(n(665)),v=e(n(667));n(668);var g=(0,v.default)((l=r=function(e){function t(e){var n;(0,c.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));a.handleFocusInput=function(){a.setState({focusing:!0})},a.handleBlurInput=function(){""===a.state[a.state.searchKey]&&a.setState({focusing:!1})},a.handleCancelInput=function(){a.setState((0,u.default)({focusing:!1},a.state.searchKey,"")),a.props.onChange()&&a.props.onChange(""),a.props.onCancel&&a.props.onCancel()},a.handleSubmitBar=function(e){a.props.onSubmit&&(e&&(e.preventDefault(),e.stopPropagation()),a.props.onSubmit(a.state[a.state.searchKey],e))};var r=(0,C.default)()+"-search-text";return a.state=(n={focusing:!!e.defaultValue,clearing:!!e.defaultValue},(0,u.default)(n,r,e.defaultValue),(0,u.default)(n,"searchKey",r),n),a.handleChangeInput=a.handleChangeInput.bind(a),a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this,t=this.props.placeholder,n=this.state.searchKey;return h.default.createElement("div",{className:(0,m.default)("weui-search-bar",{focusing:this.state.focusing})},h.default.createElement("form",{className:"search-form",onSubmit:this.handleSubmitBar},h.default.createElement("div",{className:"search-form-box"},h.default.createElement("input",{id:n,type:"text",className:"search-input",name:n,placeholder:t,value:this.state[n],rel:function(t){return e.searchTextInput=t},onChange:this.handleChangeInput,onFocus:this.handleFocusInput,onBlur:this.handleBlurInput,autoComplete:"off"}),h.default.createElement("i",{className:"iconfont icon-search"})),h.default.createElement("label",{className:"search-form-label",htmlFor:n},h.default.createElement("i",{className:"iconfont icon-search"}),h.default.createElement("span",{className:"label-content"},t))),h.default.createElement("a",{className:"btn-cancel",onClick:this.handleCancelInput},"取消"))}}]),t}(d.Component),r.propTypes={placeholder:p.default.string,defaultValue:p.default.string,onCancel:p.default.func,onChange:p.default.func,onSubmit:p.default.func},r.defaultProps={placeholder:"搜索",defaultValue:"",onCancel:function(){},onChange:function(){},onSubmit:function(){}},a=l))||a;t.default=g}).call(this)}finally{}},665:function(e,t,n){var a=n(659),r=n(666),l=r;l.v1=a,l.v4=r,e.exports=l},666:function(e,t,n){var a=n(654),r=n(655);e.exports=function(e,t,n){var l=t&&n||0;"string"==typeof e&&(t="binary"==e?new Array(16):null,e=null);var u=(e=e||{}).random||(e.rng||a)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,t)for(var o=0;o<16;++o)t[l+o]=u[o];return t||r(u)}},667:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=function(e){return e&&e.__esModule?e:{default:e}}(n(211));t.default=function(t){t.prototype.handleChangeInput=function(t){var n=t.target.name,a=t.target.value;this.props.onChangeValue&&this.props.onChangeValue(a,t),this.setState((0,e.default)({},n,a))}}}).call(this)}finally{}},668:function(e,t){},786:function(e,t,n){e.exports=n(1)(265)},812:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=e(n(10)),r=e(n(210)),l=n(786);n(813);t.default=function(e){var t=(e.images||[]).slice(0,9);t.reverse();var n=t.length,u=n>4?3:Math.ceil(n/2),o=(0,l.chunk)(t,u);return o.reverse(),a.default.createElement("div",{className:(0,r.default)("weui-chat-avatar","weui-chat-avatar-"+n)},o.map(function(e,t){return e.reverse(),a.default.createElement("div",{className:"chat-avatar-group",key:"avatar-group$-"+t},e.map(function(e,t){return a.default.createElement("img",{className:(0,r.default)("chat-avatar","chat-avatar-"+n),src:e,key:"image"+t})}))}))}}).call(this)}finally{}},813:function(e,t){},828:function(e,t){}});