(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(6),o=t.n(c),i=(t(15),t(16),t(5)),l=t(7),u=t(3),s=t(1),f=t(2),d=t(8);function m(e){var n=e.isIndeterminate,t=void 0!==n&&n,r=Object(d.a)(e,["isIndeterminate"]);return a.a.createElement("input",Object.assign({type:"checkbox",ref:function(e){e&&(e.indeterminate=t)}},r))}m.defaultProps={isIndeterminate:!1};var g=m;function v(e){var n=e.legislators,t=e.selectedIdMap,c=e.onChange,o=void 0===c?function(){}:c,i=Object(r.useMemo)(function(){return n.reduce(function(e,n){n.id;var t=n.position;return e[t]=e[t]||0,e[t]+=1,e},{})},[n]),l=Object(r.useMemo)(function(){return n.reduce(function(e,n){var r=n.id,a=n.position;return e[a]=e[a]||0,t[r]&&(e[a]+=1),e},{})},[n,t]),u=Object(r.useCallback)(function(e){var r=e.target.value;0===l[r]?o(n.filter(function(e){var n=e.position,a=e.id;return n===r||t[a]}).map(function(e){return e.id})):o(n.filter(function(e){var n=e.position,a=e.id;return n!==r&&t[a]}).map(function(e){return e.id}))},[l,n,o,t]);return a.a.createElement("ul",null,Object.keys(i).map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("label",null,a.a.createElement(g,{value:e,onChange:u,checked:l[e]===i[e],isIndeterminate:0<l[e]&&l[e]<i[e]})," ",e))}))}function b(e){var n=e.area,t=void 0===n?"":n,c=e.legislators,o=void 0===c?[]:c,i=e.selectedIdMap,l=void 0===i?{}:i,u=e.onChange,s=void 0===u?function(){}:u,f=o.filter(function(e){var n=e.id;return l[n]}).length,d=Object(r.useCallback)(function(e){if(0===f)s(o.map(function(e){return e.id}));else{var n=o.reduce(function(e,n){return e[n.id]=!0,e},{});s(Object.keys(l).filter(function(e){return!n[e]}))}},[o,s,f]),m=Object(r.useCallback)(function(e){var n=e.target.value;l[n]?s(Object.keys(l).filter(function(e){return e!==n})):s(Object.keys(l).concat(n))},[o,l,s]);return a.a.createElement("section",null,a.a.createElement("header",null,a.a.createElement("label",null,a.a.createElement(g,{onChange:d,isIndeterminate:0<f&&f<o.length,checked:f===o.length})," ",t)),a.a.createElement("ul",null,o.map(function(e){var n=e.id,t=e.name;return a.a.createElement("li",{key:n},a.a.createElement("label",null,a.a.createElement(g,{key:n,value:n,onChange:m,checked:!!l[n]})," ",t))})))}var h=function(e){var n=e.legislators,t=void 0===n?[]:n,c=e.selectedLegislatorIds,o=void 0===c?[]:c,i=(e.doneLegislatorsMap,e.onSelectionChange),l=void 0===i?function(){}:i,u=Object(r.useMemo)(function(){return t.reduce(function(e,n){return e[n.area]=e[n.area]||[],e[n.area].push(n),e},{})},[t]),s=Object(r.useMemo)(function(){return o.reduce(function(e,n){return e[n]=!0,e},{})},[o]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{legislators:t,selectedIdMap:s,onChange:l}),Object.keys(u).map(function(e){return a.a.createElement(b,{key:e,area:e,selectedIdMap:s,legislators:u[e],onChange:l})}))};function p(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 4px;\n  padding: 8px;\n  border: 2px solid currentColor;\n  background: transparent;\n  color: #f29b61;\n"]);return p=function(){return e},e}function E(){var e=Object(s.a)(["\n  color: #845bf4;\n  font-style: normal;\n"]);return E=function(){return e},e}function j(){var e=Object(s.a)(["\n  text-align: center;\n  padding: 30px 0;\n\n  h1 {\n    font-size: 40px;\n    font-weight: normal;\n    letter-spacing: 0.125em;\n    margin: 0;\n  }\n\n  h2 {\n    margin: 16px 0 0;\n    font-size: 14px;\n    letter-spacing: 0.5em;\n    font-weight: 200;\n  }\n\n  &::before {\n    content: '\ud83c\udff3\ufe0f\u200d\ud83c\udf08';\n    font-size: 84px;\n    line-height: 1;\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  padding: 40px;\n"]);return O=function(){return e},e}var k=20,w=f.a.div(O()),C=f.a.header(j()),y=f.a.em(E()),x=f.a.textarea(p());var I=function(e){var n=e.msg,t=void 0===n?"":n,c=e.onMsgChange,o=void 0===c?function(){}:c,i=e.legislators,l=void 0===i?[]:i,u=e.selectedLegislatorIds,s=void 0===u?[]:u,f=e.doneLegislatorsMap,d=void 0===f?{}:f,m=e.onSelectionChange,g=void 0===m?function(){}:m,v=e.onSubmit,b=void 0===v?function(){}:v,p=Object(r.useRef)(null),E=Object.keys(d).length>0,j=s.filter(function(e){return!d[e]}).length,O=E?"\u9084\u6709 ".concat(j," \u4f4d\u59d4\u54e1\u8981\u50b3\uff0c"):"",I=k*j,M=I>120?" ".concat(Math.floor(I/60)," \u5206\u9418"):" ".concat(I," \u79d2");return a.a.createElement(w,null,a.a.createElement(C,null,a.a.createElement("h1",null,"\u6211",a.a.createElement(y,null,"\u611b\u5bb6"),"\u30fb\u6211\u806f\u7d61"),a.a.createElement("h2",null,"\u5e73\u6b0a\u7acb\u9662\u9375\u76e4\u9673\u60c5")),a.a.createElement("section",null,a.a.createElement("p",null,"\u8b93\u540c\u5fd7\u80fd\u4ee5",a.a.createElement(y,null,"\u5a5a\u59fb"),"\u6210\u5bb6\uff0c\u5c31\u662f\u300c",a.a.createElement(y,null,"\u611b\u5bb6"),"\u300d\u7684\u8868\u73fe\u3002 \u5728\u5e73\u6b0a\u6cd5\u6848\u901a\u904e\u4e4b\u524d\uff0c\u8b93\u6211\u5011\u52d5\u52d5\u624b\u6307\u982d\uff0c\u4e0d\u5206\u7570\u540c\u5730\u5411\u7acb\u6cd5\u59d4\u54e1\u5011\u8868\u9054\u6211\u5011",a.a.createElement(y,null,"\u5e0c\u671b\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a"),"\u7684\u5fc3\u8072\u5427\uff01"),a.a.createElement("p",null,"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"),a.a.createElement("label",null,a.a.createElement("h3",null,"\u4f60\u60f3\u8981\u8ddf\u59d4\u54e1\u5011\u8aaa\u4ec0\u9ebc\u5462\uff1f"),a.a.createElement(x,{value:t,onChange:function(e){return o(e.target.value)}})),a.a.createElement("button",{type:"button",onClick:function(){return p.current.scrollIntoView({behavior:"smooth",block:"start"})}},"\u4e0b\u4e00\u6b65")),a.a.createElement("section",{ref:p},a.a.createElement("h3",null,"\u8acb\u9078\u64c7\u8981\u9673\u60c5\u7684\u7acb\u59d4"),a.a.createElement("button",{type:"button",onClick:function(){return g(l.map(function(e){return e.id}))}},"\u5168\u9078\u5566\uff01"),a.a.createElement("p",null,"\u60a8\u9078\u4e86 ",s.length," \u540d\u59d4\u54e1",O,"\uff0c\u5927\u6982\u82b1",M,"\u5c31\u80fd\u50b3\u5b8c\u3002"),a.a.createElement(h,{legislators:l||[],selectedLegislatorIds:s,doneLegislatorsMap:d,onSelectionChange:g}),a.a.createElement("button",{type:"button",onClick:b,disabled:0===j},E?"\u7e7c\u7e8c":"\u958b\u59cb","\u9673\u60c5")))},M=(window.FB?Promise.resolve(window.FB):new Promise(function(e){window.fbAsyncInit=function(){e(window.FB)}})).then(function(e){return e.init({appId:"411731149364306",version:"v3.2"}),e});var L=a.a.memo(function(e){var n=e.tabs,t=void 0===n?["messages","timeline"]:n,c=e.href,o=void 0===c?"":c,i=Object(r.useRef)(null);return Object(r.useEffect)(function(){M.then(function(e){e.XFBML.parse(i.current)})}),a.a.createElement("div",{ref:i},a.a.createElement("div",{className:"fb-page","data-href":o,"data-tabs":t.join(","),"data-small-header":"true","data-adapt-container-width":"true","data-show-facepile":"false","data-hide-cta":"true"}))}),S={$$BREAK:!0};function B(e,n){for(var t=[],r=0;r<e.length;r+=1){var a=F(e[r],n);if(a===S)break;t.push(a)}return t}function F(e,n){switch(!0){case"string"===typeof e:return n(e);case e instanceof Array:return B(e,n);case a.a.isValidElement(e):var t=a.a.Children.toArray(e.props.children),r=B(t,n);return t.length===r.length&&t.every(function(e,n){return e===r[n]})?e:a.a.cloneElement(e,{},r);default:return null}}var P=RegExp(" *".concat("(\r\n|\r|\n)"," *"),"g");function z(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n"]);return z=function(){return e},e}function A(){var e=Object(s.a)(["\n  font-size: 32px;\n"]);return A=function(){return e},e}function R(){var e=Object(s.a)(["\n  display: flex;\n  padding: 40px;\n\n  section {\n    flex: 1;\n    padding-left: 24px;\n    &:first-of-type {\n      padding-left: 0;\n    }\n  }\n"]);return R=function(){return e},e}var W=f.a.div(R()),N=f.a.button(A()),$=f.a.textarea(z());var J=function(e){var n=e.msg,t=void 0===n?"":n,r=e.currentIdx,c=void 0===r?0:r,o=e.selectedLegislators,i=void 0===o?[]:o,l=e.onMsgChange,u=void 0===l?function(){}:l,s=e.onNext,f=void 0===s?function(){}:s;if(e.onBack,-1===c)return a.a.createElement("div",null,"\u90fd\u505a\u5b8c\u56c9\uff01\u8b1d\u8b1d\u60a8 m(_ _)m");var d=i[c],m=d.name,g=d.prideWatchPage,v=d.position,b=d.desc,h=d.facebookPage;return a.a.createElement(W,null,a.a.createElement("section",null,a.a.createElement($,{placeholder:"\u628a\u9673\u60c5\u6587\u5b57\u8cbc\u5728\u9019\u88e1\uff0c\u65b9\u4fbf\u8907\u88fd\u8cbc\u4e0a",onChange:function(e){return u(e.target.value)},value:t,onClick:function(e){return e.target.select()}})),a.a.createElement("section",null,a.a.createElement(L,{href:h})),a.a.createElement("section",null,a.a.createElement("h1",null,a.a.createElement("a",{href:g},m)),a.a.createElement("h2",null,v),a.a.createElement("p",null,F(b,function(e){if(!e)return e;var n,t=e.split(P).filter(function(e){return""!==e}).map(function(e,n){return e.match(P)?a.a.createElement("br",{key:"br".concat(n)}):e});return(n=t).every(function(e){return"string"===typeof e})?n.join():n})),a.a.createElement(N,{onClick:f},"\u4e0b\u4e00\u4f4d \u300b")))},V=null;var _=function(){var e=Object(r.useState)(V),n=Object(u.a)(e,2),a=n[0],c=n[1];return Object(r.useEffect)(function(){a||t.e(3).then(t.t.bind(null,18,3)).then(function(e){return c(V=e.default.rows)})}),[a,Object(r.useMemo)(function(){return(a||[]).reduce(function(e,n){return e[n.id]=n,e},{})},[a])]},K="\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u8acb\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002",X={"\u652f\u6301\u540c\u5a5a":1,"\u652f\u6301\u5c08\u6cd5":2,"\u53cd\u5c0d\u540c\u5a5a":3,"\u672a\u8868\u614b":4};var q=function(){var e=_(),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)("settings"),s=Object(u.a)(o,2),f=s[0],d=s[1],m=Object(r.useState)(K),g=Object(u.a)(m,2),v=g[0],b=g[1],h=Object(r.useState)([]),p=Object(u.a)(h,2),E=p[0],j=p[1],O=Object(r.useState)({}),k=Object(u.a)(O,2),w=k[0],C=k[1],y=Object(r.useCallback)(function(e){j(e.sort(function(e,n){return w[e]&&!w[n]?-1:!w[e]&&w[n]?1:X[c[e].position]-X[c[n].position]}))},[j,w,c]),x=Object(r.useCallback)(function(){return d("send")},[d]);switch(f){case"settings":return a.a.createElement(I,{msg:v,onMsgChange:b,legislators:t,selectedLegislatorIds:E,onSelectionChange:y,doneLegislatorMap:w,onSubmit:x});case"send":var M=E.map(function(e){return c[e]}),L=E.findIndex(function(e){return!w[e]});return a.a.createElement(J,{msg:v,currentIdx:L,selectedLegislators:M,onMsgChange:b,onNext:function(){return C(Object(l.a)({},w,Object(i.a)({},M[L].id,!0)))},onBack:function(){return d("settings")}});default:throw new Error("Wrong page settings")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,n,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.12786f7b.chunk.js.map