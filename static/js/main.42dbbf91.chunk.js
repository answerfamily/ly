(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,n,t){e.exports=t(458)},454:function(e,n,t){},458:function(e,n,t){"use strict";t.r(n);t(193),t(252),t(447),t(448);var a=t(0),r=t.n(a),o=t(188),c=t.n(o),l=(t(453),t(454),t(101)),i=t(65),u=t(14),s=t(3),f=t(4);function d(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 8px;\n  padding: 8px;\n  border: 2px solid currentColor;\n  background-color: rgba(255, 255, 255, 0.12);\n  color: #ff9753;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.22);\n  }\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.2);\n    outline: 0;\n  }\n"]);return d=function(){return e},e}var m=f.a.textarea(d());var p=function(e){var n=e.value,t=Object(a.useCallback)(function(){window.ga("set","dimension1",n)},[n]);return r.a.createElement(m,Object.assign({},e,{onBlur:t}))},b=t(26);function g(e){var n=e.isIndeterminate,t=void 0!==n&&n,a=Object(b.a)(e,["isIndeterminate"]);return r.a.createElement("input",Object.assign({type:"checkbox",ref:function(e){e&&(e.indeterminate=t)}},a))}g.defaultProps={isIndeterminate:!1};var h=g;function v(){var e=Object(s.a)(["\n  margin: 40px 0;\n  header {\n    font-size: 20px;\n    border-bottom: 2px dotted rgba(255, 255, 255, 0.12);\n    label {\n      padding: 8px 0;\n    }\n  }\n"]);return v=function(){return e},e}function E(){var e=Object(s.a)(["\n  background: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px;\n  border-radius: 8px;\n"]);return E=function(){return e},e}function j(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n"]);return j=function(){return e},e}function x(){var e=Object(s.a)(["\n  li {\n    display: inline-block;\n    padding-right: 2em;\n  }\n\n  label {\n    min-width: 105px;\n  }\n\n  input {\n    margin-right: 0.5em;\n  }\n"]);return x=function(){return e},e}var O=f.a.div(x()),w=f.a.ul(j()),k=Object(f.a)(w)(E()),y=f.a.section(v());function C(e){var n=e.legislators,t=e.selectedIdMap,o=e.onChange,c=void 0===o?function(){}:o,l=Object(a.useMemo)(function(){return n.reduce(function(e,n){n.id;var t=n.position;return e[t]=e[t]||0,e[t]+=1,e},{})},[n]),i=Object(a.useMemo)(function(){return n.reduce(function(e,n){var a=n.id,r=n.position;return e[r]=e[r]||0,t[a]&&(e[r]+=1),e},{})},[n,t]),u=Object.keys(t).length,s=Object(a.useCallback)(function(e){var a=e.target.value;0===i[a]?c(n.filter(function(e){var n=e.position,r=e.id;return n===a||t[r]}).map(function(e){return e.id})):c(n.filter(function(e){var n=e.position,r=e.id;return n!==a&&t[r]}).map(function(e){return e.id}))},[i,n,c,t]),f=Object(a.useCallback)(function(){c(0===u?n.map(function(e){return e.id}):[])},[u,n]),d=Object(a.useMemo)(function(){return n.filter(function(e){var n=e.id;return e.signedmutualliving&&t[n]}).length},[n,t]),m=Object(a.useMemo)(function(){return n.filter(function(e){return e.signedmutualliving}).length},[n]),p=Object(a.useCallback)(function(e){c(0===d?n.filter(function(e){var n=e.signedmutualliving,a=e.id;return n||t[a]}).map(function(e){return e.id}):n.filter(function(e){var n=e.signedmutualliving,a=e.id;return!n&&t[a]}).map(function(e){return e.id}))},[n,c,t]);return r.a.createElement(k,null,r.a.createElement("li",null,r.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},r.a.createElement(h,{onChange:f,checked:u===n.length,isIndeterminate:0<u&&u<n.length}),"\u5168\u9078")),Object.keys(l).map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("label",null,r.a.createElement(h,{value:e,onChange:s,checked:i[e]===l[e],isIndeterminate:0<i[e]&&i[e]<l[e]})," ",e))}),r.a.createElement("li",null,r.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},r.a.createElement(h,{onChange:p,checked:d===m,isIndeterminate:0<d&&d<m}),"\u9023\u7f72"),r.a.createElement("a",{href:"https://www.facebook.com/TaiwanHotline/photos/a.323404934262/10156467464324263/",target:"_blank",rel:"noopener noreferrer"},"\u53cd\u540c\u5c08\u6cd5")))}function S(e){var n=e.area,t=void 0===n?"":n,o=e.legislators,c=void 0===o?[]:o,l=e.selectedIdMap,u=void 0===l?{}:l,s=e.onChange,f=void 0===s?function(){}:s,d=c.filter(function(e){var n=e.id;return u[n]}).length,m=Object(a.useCallback)(function(e){if(0===d){var n=Object(i.a)({},u);c.forEach(function(e){var t=e.id;n[t]=!0}),f(Object.keys(n))}else{var t=c.reduce(function(e,n){return e[n.id]=!0,e},{});f(Object.keys(u).filter(function(e){return!t[e]}))}},[c,f,d,u]),p=Object(a.useCallback)(function(e){var n=e.target.value;u[n]?f(Object.keys(u).filter(function(e){return e!==n})):f(Object.keys(u).concat(n))},[c,u,f]);return r.a.createElement(y,null,r.a.createElement("header",null,r.a.createElement("label",null,r.a.createElement(h,{onChange:m,isIndeterminate:0<d&&d<c.length,checked:d===c.length})," ",t)),r.a.createElement(w,null,c.map(function(e){var n=e.id,t=e.name;return r.a.createElement("li",{key:n},r.a.createElement("label",null,r.a.createElement(h,{key:n,value:n,onChange:p,checked:!!u[n]})," ",t))})))}var I=r.a.memo(function(e){var n=e.legislators,t=void 0===n?[]:n,o=e.selectedLegislatorIds,c=void 0===o?[]:o,l=(e.doneLegislatorMap,e.onSelectionChange),i=void 0===l?function(){}:l,u=Object(a.useMemo)(function(){return t.reduce(function(e,n){return e[n.area]=e[n.area]||[],e[n.area].push(n),e},{})},[t]),s=Object(a.useMemo)(function(){return c.reduce(function(e,n){return e[n]=!0,e},{})},[c]);return r.a.createElement(O,null,r.a.createElement(C,{legislators:t,selectedIdMap:s,onChange:i}),Object.keys(u).map(function(e){return r.a.createElement(S,{key:e,area:e,selectedIdMap:s,legislators:u[e],onChange:i})}))}),M=t(80);function z(){var e=Object(s.a)(["\n  /*\n    Can't use emojis that is too large on mobile:\n    https://stackoverflow.com/questions/29142118/why-do-emoji-not-render-above-a-certain-size-in-chrome\n  */\n  font-size: 60px;\n  line-height: 1;\n  display: inline-block;\n  transform: perspective(400px) rotateY(90deg);\n  animation: "," 1s cubic-bezier(0, 0.37, 1, 0.63); /* no infinite here, use DOM change to trigger animation */\n\n  @media screen and (min-width: 1024px) {\n    font-size: 84px;\n  }\n"]);return z=function(){return e},e}function L(){var e=Object(s.a)(["\n  from {\n    transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n    transform: perspective(400px) rotateY(-90deg);\n  }\n"]);return L=function(){return e},e}var F=1;var B=Object(M.b)(L()),T=Object(f.a)(function(e){var n=e.icons,t=void 0===n?[]:n,o=Object(b.a)(e,["icons"]),c=Object(a.useState)(0),l=Object(u.a)(c,2),i=l[0],s=l[1],f=t.length;return Object(a.useEffect)(function(){var e=setTimeout(function(){s((i+1)%f)},1e3*F);return function(){return clearTimeout(e)}},[i,f]),r.a.createElement("span",Object.assign({key:i,role:"img","aria-label":"Icon"},o),t[i])})(z(),B);function N(){var e=Object(s.a)(["\n  margin: 40px 0;\n  text-align: center;\n  letter-spacing: 0.5em;\n"]);return N=function(){return e},e}var _=Object(f.a)(function(e){var n=e.content,t=void 0===n?"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66":n,a=Object(b.a)(e,["content"]);return r.a.createElement("p",a,r.a.createElement("span",{role:"img","aria-label":"Horizontal ruler"},t))})(N());t(455);var P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=Object(a.useRef)(null);function r(){t.current&&t.current.disconnect()}return Object(a.useLayoutEffect)(function(){return r(),e.current&&(t.current=new IntersectionObserver(n,{}),t.current.observe(e.current)),r},[e,n]),r};function R(){var e=Object(s.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 24px;\n\n  transform: translate(0, 100%);\n  transition: transform 0.2s ease-out, background-color 0.2s;\n\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 0;\n\n  & > span {\n    margin: 0 auto;\n  }\n\n  &::after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n\n  &.show {\n    transform: translate(0, 0);\n  }\n"]);return R=function(){return e},e}function W(){var e=Object(s.a)(["\n  @media screen and (min-width: 425px) {\n    display: none;\n  }\n"]);return W=function(){return e},e}var D=20,V=300,q=f.a.br(W());var H=Object(f.a)(function(e){var n=e.doneLegislatorMap,t=e.selectedLegislatorIds,a=e.onClick,o=e.show,c=void 0!==o&&o,l=e.className,i=e.sendType,u=void 0===i?"":i,s=Object.keys(n).length>0,f=t.filter(function(e){return!n[e]}).length,d=("fb"===u?D:V)*f,m=d>120?" ".concat(Math.floor(d/60)," \u5206\u9418"):" ".concat(d," \u79d2");return r.a.createElement("button",{type:"button",onClick:a,className:"".concat(l," ").concat(c&&f>0?"show":""),"ga-on":"click","ga-event-category":"send","ga-event-action":"start","ga-event-label":s?"\u7e7c\u7e8c":"\u958b\u59cb","ga-event-value":f},r.a.createElement("span",null,s?"\u7e7c\u7e8c":"\u958b\u59cb","\u5411 ",f," \u4f4d\u59d4\u54e1\u9673\u60c5"," ",r.a.createElement(q,null),r.a.createElement("small",null," (\u7d04\u9700 ",m,") ")))})(R());function J(){var e=Object(s.a)(["\n  list-style: none;\n  margin: 0 0 8px;\n  padding: 0;\n\n  &::before {\n    content: attr(data-label);\n  }\n\n  li {\n    display: inline-block;\n    padding: 4px 6px;\n    margin: 0 0 4px 4px;\n    font-size: 12px;\n    border-radius: 30px;\n    border: 1px solid currentColor;\n    color: #ff5368;\n    transition-property: color, background-color;\n    transition-duration: 0.2s;\n\n    &:hover {\n      background-color: #ff5368;\n      color: #fff;\n    }\n  }\n"]);return J=function(){return e},e}var X=null;function A(e){var n=e.template,t=n.label,o=n.msg,c=e.onSelect,l=void 0===c?function(){}:c,i=Object(a.useCallback)(function(){l(o)},[o,l]);return r.a.createElement("li",{onClick:i},t)}var Q=Object(f.a)(function(e){var n=e.onSelect,o=void 0===n?function(){}:n,c=Object(b.a)(e,["onSelect"]),l=Object(a.useState)(X),i=Object(u.a)(l,2),s=i[0],f=i[1];return Object(a.useEffect)(function(){s||t.e(6).then(t.t.bind(null,459,3)).then(function(e){return f(X=e.default.rows)})},[s]),s?r.a.createElement("ul",Object.assign({"data-label":"\u52a0\u9ede\u5167\u5bb9\uff1a"},c),s.map(function(e,n){return r.a.createElement(A,{key:n,template:e,onSelect:o})})):null})(J());function Y(){var e=Object(s.a)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n\n  h4 {\n    margin: 0 0 0.5em;\n  }\n\n  li {\n    padding: 16px;\n    flex: 1 1 0;\n    max-width: 240px;\n\n    border: 2px solid #ff9753;\n    border-left-width: 0;\n    border-right-width: 0;\n\n    color: #ff9753;\n    cursor: pointer;\n\n    &.selected {\n      background: #ff9753;\n      color: #fff;\n    }\n  }\n\n  li:first-of-type {\n    border-left-width: 2px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n\n  li:last-of-type {\n    border-right-width: 2px;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  p {\n    font-size: 12px;\n    margin: 0;\n  }\n"]);return Y=function(){return e},e}var $=Object(f.a)(function(e){var n=e.value,t=void 0===n?"":n,a=e.onChange,o=void 0===a?function(){}:a,c=Object(b.a)(e,["value","onChange"]);return r.a.createElement("ul",c,r.a.createElement("li",{className:"fb"===t?"selected":"",onClick:function(){return o("fb")}},r.a.createElement("h4",null,"FB \u7c89\u5c08"," ",r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcac")),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"\u512a\u9ede"},"\ud83d\udc4d")," ","\u65b9\u4fbf\u5feb\u901f\u3001\u901a\u52e4\u6642\u4e5f\u80fd\u9673\u60c5\uff01\u59d4\u54e1\u5076\u723e\u6703\u89aa\u81ea\u95b1\u8b80"),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"\u7f3a\u9ede"},"\ud83d\udc4e")," ","\u56de\u8986\u6bd4\u4f8b\u4f4e\u3001\u5b58\u5728\u611f\u4f4e")),r.a.createElement("li",{className:"tel"===t?"selected":"",onClick:function(){return o("tel")}},r.a.createElement("h4",null,"\u96fb\u8a71"," ",r.a.createElement("span",{role:"img","aria-label":""},"\ud83d\udcde")),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"\u512a\u9ede"},"\ud83d\udc4d")," ","\u5c08\u4eba\u50be\u807d\uff0c\u591a\u4eba\u9673\u60c5\u6642\u5f88\u6709\u611f"),r.a.createElement("p",null,r.a.createElement("span",{role:"img","aria-label":"\u7f3a\u9ede"},"\ud83d\udc4e")," ","\u82b1\u6642\u9593\u3001\u63a5\u96fb\u8a71\u7684\u52a9\u7406\u4e0d\u4e00\u5b9a\u6703\u8f49\u9054")))})(Y());function K(){var e=Object(s.a)(["\n  text-align: center;\n  padding: 30px 0;\n\n  h1 {\n    font-size: 28px;\n    font-weight: normal;\n    letter-spacing: 0.125em;\n    margin: 24px 0 16px;\n    @media screen and (min-width: 425px) {\n      font-size: 40px;\n    }\n  }\n\n  h2 {\n    margin: 0;\n    font-size: 14px;\n    letter-spacing: 0.5em;\n    font-weight: 200;\n  }\n"]);return K=function(){return e},e}var U=f.a.header(K());function G(){var e=Object(s.a)(["\n  color: #8f53ff;\n  font-style: normal;\n"]);return G=function(){return e},e}var Z=f.a.em(G());function ee(){var e=Object(s.a)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  padding-bottom: 64px;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n  padding: 40px;\n  max-width: 720px;\n  margin: 0 auto;\n"]);return ne=function(){return e},e}var te=f.a.div(ne()),ae=r.a.memo(function(){return r.a.createElement(U,null,r.a.createElement(T,{icons:["\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"]}),r.a.createElement("h1",null,"\u6211",r.a.createElement(Z,null,"\u611b\u5bb6"),"\u30fb\u6211\u806f\u7d61"),r.a.createElement("h2",null,"\u5e73\u6b0a\u7acb\u9662\u9375\u76e4\u9673\u60c5"))}),re=f.a.footer(ee());var oe=function(e){var n=e.msg,t=void 0===n?"":n,o=e.onMsgChange,c=void 0===o?function(){}:o,l=e.legislators,i=void 0===l?[]:l,s=e.selectedLegislatorIds,f=void 0===s?[]:s,d=e.doneLegislatorMap,m=void 0===d?{}:d,b=e.onSelectionChange,g=void 0===b?function(){}:b,h=e.sendType,v=void 0===h?"":h,E=e.onSendTypeChange,j=void 0===E?function(){}:E,x=e.onSubmit,O=void 0===x?function(){}:x,w=Object(a.useRef)(null),k=Object(a.useState)(!1),y=Object(u.a)(k,2),C=y[0],S=y[1],M=Object(a.useCallback)(function(){return w.current.scrollIntoView({behavior:"smooth",block:"start"})},[w]),z=Object(a.useCallback)(function(e){e[0].isIntersecting?S(!0):S(!1)},[S]),L=Object(a.useCallback)(function(e){c("".concat(t,"\n\n").concat(e))},[t,c]);return P(w,z),r.a.createElement(te,null,r.a.createElement(ae,null),r.a.createElement("section",null,r.a.createElement("p",null,"\u8b93\u540c\u5fd7\u80fd\u4ee5",r.a.createElement(Z,null,"\u5a5a\u59fb"),"\u6210\u5bb6\uff0c\u5c31\u662f\u300c\u611b\u5bb6\u300d\u7684\u8868\u73fe\u3002 \u5728\u5e73\u6b0a\u6cd5\u6848\u901a\u904e\u4e4b\u524d\uff0c\u8b93\u6211\u5011\u52d5\u52d5\u624b\u6307\u982d\uff0c\u4e0d\u5206\u7570\u540c\u5730\u5411\u7acb\u6cd5\u59d4\u54e1\u5011\u8868\u9054\u6211\u5011",r.a.createElement(Z,null,"\u5e0c\u671b\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a"),"\u7684\u5fc3\u8072\u5427\uff01"),r.a.createElement(_,null),r.a.createElement("h3",null,"\u4f60\u60f3\u8981\u600e\u9ebc\u9673\u60c5\uff1f"),r.a.createElement($,{value:v,onChange:j}),r.a.createElement("label",null,r.a.createElement("h3",null,"\u4f60\u60f3\u8981\u8ddf\u59d4\u54e1\u5011\u8aaa\u4ec0\u9ebc\u5462\uff1f"),r.a.createElement(Q,{onSelect:L}),r.a.createElement(p,{value:t,onChange:function(e){return c(e.target.value)},rows:5,autoFocus:!0})),r.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",margin:0}},r.a.createElement("span",{style:{fontSize:12,opacity:.88}},"\uff0a \u4e0d\u77e5\u5982\u4f55\u4e0b\u7b46\uff1f\u53c3\u8003",r.a.createElement("a",{href:"https://docs.google.com/document/d/e/2PACX-1vROQkySN13kmFEUMxEL228OhT6CaOndg1plskPkP9LaVzCgW0ufKo2JgnnQHjq2DLQNnw5b9bH96PMc/pub",target:"_blank",rel:"noopener noreferrer"},"\u9019\u4e9b\u7bc4\u4f8b"),"\uff0c\u52a0\u5165\u4f60\u7684\u500b\u4eba\u80cc\u666f\u8207\u89c0\u5bdf\uff08\u5982\uff1a\u6709\u540c\u4e8b\u662f\u540c\u5fd7\uff09\uff0c\u6703\u66f4\u6709\u8aaa\u670d\u529b\u5537\uff01"),r.a.createElement("button",{style:{flexShrink:0,marginLeft:"8px"},type:"button",onClick:M},"\u4e0b\u4e00\u6b65"))),r.a.createElement("section",{ref:w},r.a.createElement(_,null),r.a.createElement("h3",null,"\u8acb\u9078\u64c7\u8981\u9673\u60c5\u7684\u7acb\u59d4"),r.a.createElement(I,{legislators:i||[],selectedLegislatorIds:f,doneLegislatorMap:m,onSelectionChange:g}),r.a.createElement(H,{show:C,selectedLegislatorIds:f,doneLegislatorMap:m,onClick:O,sendType:v})),r.a.createElement(re,null,r.a.createElement(_,{content:"\ud83c\udff3\ufe0f\u200d\ud83c\udf08"}),r.a.createElement("p",null,"\u6b64\u5de5\u5177\u70ba",r.a.createElement("a",{href:"https://www.facebook.com/groups/answerfamily/"},"\u300a\u6211\u611b\u5bb6\u6211\u89e3\u60d1 - \u5e73\u6b0a\u793e\u6703\u5c0d\u8a71\u5de5\u7a0b\u300b\u793e\u7fa4"),"\u53c3\u8207\u8005\u63d0\u4f9b\u4e4b",r.a.createElement("a",{href:"https://github.com/answerfamily/ly"},"\u958b\u653e\u539f\u59cb\u78bc"),"\u5c08\u6848\u3002\u82e5\u6709\u4efb\u4f55\u554f\u984c\u6216\u5efa\u8b70\uff0c\u8acb\u4f86\u4fe1\u81f3"," ",r.a.createElement("a",{href:"mailto:cofacts@googlegroups.com"},"Cofacts \u806f\u7d61\u4fe1\u7bb1"),"\u3002"),r.a.createElement("p",null,"\u8cc7\u6599\u4f86\u6e90\uff1a",r.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a"),"\u3001",r.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9"),"\u3001",r.a.createElement("a",{href:"https://github.com/g0v/ly-tel",target:"_blank",rel:"noopener noreferrer"},"g0v \u7acb\u59d4\u806f\u7d61\u8cc7\u8a0a\u5c08\u6848")),r.a.createElement("p",null,"Background icons:"," ",r.a.createElement("a",{href:"https://thenounproject.com/nookfulloption/collection/space2",target:"_blank",rel:"noopener noreferrer"},"Space2")," ","by Nook Fulloption from the Noun Project")))},ce=t(189),le=null;function ie(e){return e.slice(0,3).replace(/[\uff0e\u2027]/g,"")}var ue=function(){var e=Object(a.useState)(le),n=Object(u.a)(e,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){r||t.e(5).then(t.t.bind(null,460,3)).then(function(e){var n=(e.default||[]).reduce(function(e,n){var t=n.name,a=n.contacts;return e[ie(t)]=a,e},{});o(function(){return le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n[ie(e)]}})})},[r]),r},se=(window.FB?Promise.resolve(window.FB):new Promise(function(e){window.fbAsyncInit=function(){e()}})).then(function(){window.FB.init({version:"v3.2"})});function fe(){var e=Object(s.a)(["\n  background: #ff9753;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  text-align: center;\n"]);return fe=function(){return e},e}var de=["messages","timeline"],me=f.a.div(fe());var pe=r.a.memo(function(e){var n=e.className,t=void 0===n?"":n,o=e.tabs,c=void 0===o?de:o,l=e.href,i=void 0===l?"":l,u=e.width,s=void 0===u?320:u,f=e.height,d=void 0===f?500:f,m=e.onParsed,p=void 0===m?null:m,b=e.profile,g=void 0===b?"":b,h=Object(a.useRef)(null);return Object(a.useLayoutEffect)(function(){se.then(function(){window.FB.XFBML.parse(h.current,function(){p&&p({width:s,height:d})})})},[c,i,s,d]),i?r.a.createElement("div",{ref:h,className:t},r.a.createElement("div",{className:"fb-page","data-href":i,"data-tabs":c.join(","),"data-small-header":"true","data-adapt-container-width":"false","data-show-facepile":"false","data-hide-cta":"true","data-width":s,"data-height":d})):r.a.createElement(me,{className:t,style:{width:s,height:d}},r.a.createElement("p",null,"\u7121\u6cd5\u986f\u793a\u9019\u4f4d\u59d4\u54e1\u7684\u7c89\u7d72\u5c08\u9801\u3002"),g?r.a.createElement("p",null,"\u8acb\u81f3",r.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},"\u59d4\u54e1\u7684\u500b\u4eba\u6a94\u6848"),"\u9801\u9762\u7559\u8a00\u3002"):r.a.createElement("p",null,"\u8acb\u76f4\u63a5\u4e0b\u4e00\u4f4d\u3002"))});function be(){var e=Object(s.a)(["\n  font-size: 12px;\n  opacity: 0.88;\n"]);return be=function(){return e},e}function ge(){var e=Object(s.a)(["\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n\n  /* hiding scrollbar */\n  padding-right: 20px;\n  margin-right: -20px;\n\n  /* gradient appear & disappear */\n  mask-image: linear-gradient(\n    to bottom,\n    transparent,\n    black 6%,\n    black 94%,\n    transparent\n  );\n"]);return ge=function(){return e},e}var he=f.a.article(ge()),ve=f.a.footer(be());var Ee=function(e){var n=e.legislator,t=n.name,a=n.pridewatchpage,o=n.position,c=n.description,l=n.party,i=n.area,u=n.religion,s=n.subarea;return n.facebookpage,r.a.createElement("section",{style:{overflowX:"hidden"}},r.a.createElement("h1",null,t),r.a.createElement(he,null,r.a.createElement("p",null,o),c?r.a.createElement("ul",{style:{padding:0}},c.split("\n").map(function(e,n){return r.a.createElement("li",{key:n},e)})):null,r.a.createElement("p",null,l,"\u30fb",i,s?"\uff0f".concat(s):null),u?r.a.createElement("p",null,u):null,r.a.createElement("p",null,r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"PrideWatch \u9801\u9762"))),r.a.createElement(ve,null,r.a.createElement(_,null),r.a.createElement("p",{style:{marginBottom:0}},"\u8cc7\u6599\u4f86\u6e90\uff1a",r.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a"),"\u3001",r.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9"),"\u3001",r.a.createElement("a",{href:"https://github.com/g0v/ly-tel",target:"_blank",rel:"noopener noreferrer"},"g0v \u7acb\u59d4\u806f\u7d61\u8cc7\u8a0a\u5c08\u6848"))))};function je(){var e=Object(s.a)(["\n  flex: 1;\n  overflow-y: auto;\n  min-height: 0;\n  h4 {\n    margin: 0;\n  }\n  p {\n    margin: 0;\n  }\n  a {\n    font-weight: bold;\n  }\n  li {\n    margin-bottom: 1em;\n  }\n"]);return je=function(){return e},e}var xe=Object(f.a)(function(e){var n=e.contacts,t=void 0===n?[]:n,a=Object(b.a)(e,["contacts"]);return r.a.createElement("ul",a,t.map(function(e,n){var t=e.name,a=e.phone,o=e.address;return r.a.createElement("li",{key:n},r.a.createElement("h4",null,t),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:".concat(a)},a)),r.a.createElement("small",null,o))}))})(je());function Oe(){var e=Object(s.a)(["\n  padding: 8px 0;\n  border: 2px solid #ff5368;\n  background: transparent;\n  color: #ff5368;\n\n  &:hover {\n    color: #fff;\n  }\n"]);return Oe=function(){return e},e}function we(){var e=Object(s.a)(["\n  width: 100%;\n  font-size: 28px;\n"]);return we=function(){return e},e}var ke=f.a.button(we()),ye=Object(f.a)(ke)(Oe());function Ce(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n"]);return Ce=function(){return e},e}var Se=f.a.div(Ce());var Ie=function(e){var n=e.onBack;return r.a.createElement(Se,null,r.a.createElement(T,{icons:["\ud83c\udff3\ufe0f\u200d\ud83c\udf08","\ud83d\ude47\u200d\u2640\ufe0f","\ud83d\ude47\u200d\u2642\ufe0f"]}),r.a.createElement("p",null,"\u5b8c\u6210\u56c9\uff01\u8b1d\u8b1d\u60a8 m(_ _)m"),r.a.createElement("p",null,r.a.createElement(ye,{style:{padding:16,fontSize:16},onClick:n},"\u56de\u9996\u9801")))},Me=t(190),ze=t.n(Me),Le=t(191),Fe=t.n(Le);var Be=function(e){var n=e.onCopy,t=e.text,o=Object(a.useRef)(null),c=Object(a.useRef)(null);return Object(a.useEffect)(function(){return c.current&&c.current.destroy(),c.current=new Fe.a(o.current,{text:function(){return t}}),c.current.on("success",function(){ze.a.success("\u300c".concat(t.slice(0,10),"\u22ef\u22ef\u300d\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f"),{position:"bottom-center"}),n()}),function(){c.current&&c.current.destroy()}},[o,n,t,c]),r.a.createElement(ye,{ref:o},"\u8907\u88fd")};function Te(){var e=Object(s.a)(["\n  display: flex;\n  background: #ff9753;\n  padding: 4px;\n  border-top: 0;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  font-size: 14px;\n\n  span {\n    margin: 0 1em 0 auto;\n  }\n"]);return Te=function(){return e},e}function Ne(){var e=Object(s.a)(["\n  position: relative; /* for AutoSizer */\n  flex: 1 1 60vh;\n\n  border: 2px solid #ff9753;\n  border-bottom: 0;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  overflow: hidden;\n\n  .preload-iframe {\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 1024px) {\n    flex-basis: auto;\n  }\n"]);return Ne=function(){return e},e}function _e(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &::after {\n    margin-left: 16px;\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n"]);return _e=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n\n  section {\n    display: flex;\n    flex-flow: column;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    max-width: 1280px;\n    height: 100vh;\n    padding: 60px 40px 40px;\n    margin: 0 auto;\n\n    section {\n      flex: 3;\n      padding-left: 24px;\n      &:first-of-type {\n        flex: 2;\n        padding-left: 0;\n      }\n    }\n  }\n"]);return Pe=function(){return e},e}function Re(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  padding-left: 16px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n\n  cursor: pointer;\n  font-size: 14px;\n\n  &::before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    margin-right: 8px;\n    border-top: 1px solid #fff;\n    border-left: 1px solid #fff;\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return Re=function(){return e},e}function We(){var e=Object(s.a)(["\n  position: absolute;\n  z-index: -1;\n  background: #7ed321;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0;\n\n  transition: width 0.75s ease-out;\n"]);return We=function(){return e},e}function De(){var e=Object(s.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin: 0 auto;\n  }\n"]);return De=function(){return e},e}var Ve=f.a.header(De()),qe=f.a.div(We()),He=f.a.div(Re()),Je=f.a.div(Pe()),Xe=Object(f.a)(ke,{shouldForwardProp:function(){return!0}})(_e()),Ae=f.a.div(Ne()),Qe=f.a.div(Te());var Ye=function(e){var n=e.msg,t=void 0===n?"":n,o=e.currentIdx,c=void 0===o?0:o,l=e.selectedLegislators,i=void 0===l?[]:l,s=e.sendType,f=void 0===s?"":s,d=e.onMsgChange,m=void 0===d?function(){}:d,b=(e.onPrev,e.onNext),g=void 0===b?function(){}:b,h=e.onBack,v=void 0===h?function(){}:h,E=Object(a.useRef)(null),j=ue(),x=Object(a.useState)(null),O=Object(u.a)(x,2),w=O[0],k=O[1],y=Object(a.useCallback)(function(){E.current.scrollIntoView({behavior:"smooth",block:"start"}),g()},[E,g]),C=Object(a.useCallback)(function(){E.current.scrollIntoView({behavior:"smooth",block:"start"})},[E]);if(-1===c)return r.a.createElement(Ie,{onBack:v});if(!i||!i[c])return null;var S=i[c],I=S.name,M=S.facebookpage,z=S.facebookprofile,L=S.feedonly,F=S.cannotload;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ve,null,r.a.createElement(He,{onClick:v},"\u8a2d\u5b9a\u7acb\u59d4"),r.a.createElement("span",null,c+1," / ",i.length),r.a.createElement(qe,{style:{width:"".concat((100*(c+1)/i.length).toFixed(2),"%")}})),r.a.createElement(Je,null,r.a.createElement(Ee,{legislator:i[c]}),r.a.createElement("section",null,r.a.createElement("h1",null,"fb"===f?"1. \u8907\u88fd\u6587\u5b57":"1. \u5099\u597d\u8b1b\u7a3f"),r.a.createElement(p,{style:{flex:1},placeholder:"\u628a\u9673\u60c5\u6587\u5b57\u8cbc\u5728\u9019\u88e1\uff0c\u65b9\u4fbf\u8907\u88fd\u8cbc\u4e0a",onChange:function(e){return m(e.target.value)},value:t,rows:5}),"fb"===f&&r.a.createElement("p",{style:{marginBottom:0}},r.a.createElement(Be,{onCopy:C,text:t}))),r.a.createElement("section",{ref:E},r.a.createElement("h1",null,"fb"===f?"2. \u8cbc\u4e0a\u4e26\u9001\u51fa":"2. \u62ff\u8d77\u8a71\u7b52\u64a5\u6253"),"fb"===f?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ae,{style:w?{height:w,flexBasis:"auto"}:{}},r.a.createElement(ce.a,null,function(e){var n=e.width,t=e.height;return[r.a.createElement(pe,{key:c,href:F?null:M,profile:z,width:n-4,height:t-2,onParsed:function(e){var n=e.height;return k(n+2)}}),i[c+1]&&r.a.createElement(pe,{className:"preload-iframe",key:c+1,href:i[c+1].cannotload?null:i[c+1].facebookpage,profile:i[c+1].facebookprofile,width:n-4,height:t-2})]})),r.a.createElement(Qe,null,L?"\uff0a \u59d4\u54e1\u7c89\u5c08\u4e0d\u958b\u653e\u79c1\u8a0a\uff0c\u8acb\u9078\u4e00\u7bc7\u8cbc\u6587\u56de\u61c9":r.a.createElement(r.a.Fragment,null,"\uff0a \u8a18\u5f97\u8981\u6309\u300c\u767c\u9001\u300d\u624d\u6703\u9001\u51fa\u5537\uff01",r.a.createElement("span",null,"\u2191\u2191")))):j&&r.a.createElement(xe,{contacts:j(I)}),r.a.createElement("p",{style:{marginBottom:0}},r.a.createElement(Xe,{"ga-on":"click","ga-event-category":"send","ga-event-action":"submit","ga-event-label":I,onClick:y},"\u4e0b\u4e00\u4f4d")))))};function $e(){var e=Object(s.a)(["\n  /* avoid totally collapse when not loaded */\n  min-width: 150px;\n  min-height: 120px;\n  text-align: center; /* inner div will become inline-block by Facebook JS */\n\n  > div {\n    position: relative; /* for loading mask */\n\n    &::before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      background: rgba(255, 255, 255, 0.88);\n      pointer-events: none;\n      transition: opacity 0.8s;\n      z-index: 1;\n    }\n\n    &[fb-xfbml-state='rendered']::before {\n      opacity: 0;\n    }\n  }\n\n  .fb-comment-embed,\n  .fb-post {\n    background: #fff;\n    border-radius: 4px;\n  }\n"]);return $e=function(){return e},e}function Ke(e,n){switch(e){case"comment":var t=n.split("_"),a=Object(u.a)(t,2),r=a[0],o=a[1];return"https://www.facebook.com/".concat(r,"/?comment_id=").concat(o);case"post":var c=n.split("_"),l=Object(u.a)(c,2),i=l[0],s=l[1];return"https://www.facebook.com/".concat(i,"/posts/").concat(s);default:throw new Error("unrecognized type")}}var Ue=r.a.memo(Object(f.a)(function(e){var n=e.id,t=void 0===n?"":n,o=e.type,c=void 0===o?"comment":o,l=e.onParsed,i=void 0===l?function(){}:l,u=e.className,s=Object(a.useRef)(null);return Object(a.useLayoutEffect)(function(){se.then(function(){window.FB.XFBML.parse(s.current,function(){i&&i({id:t,type:c})})})},[]),r.a.createElement("div",{ref:s,className:u},r.a.createElement("div",{className:"fb-".concat("comment"===c?"comment-embed":"post"),"data-href":Ke(c,t)}))})($e()));function Ge(){var e=Object(s.a)(["\n  margin: 4px 0 24px;\n  font-size: 12px;\n\n  button {\n    background: transparent;\n    padding: 0;\n    color: #53baff;\n  }\n"]);return Ge=function(){return e},e}var Ze=5,en=120,nn=f.a.footer(Ge());function tn(e,n){return function(){window.ga("send","event","like","show","".concat(n,"/").concat(e))}}function an(e){return function(){confirm("\u6709\u6642\u6211\u5011\u78ba\u5be6\u6703\u8aa4\u5224\u4e00\u5247\u8a0a\u606f\u70ba\u300c\u5e73\u6b0a\u8a0a\u606f\u300d\u3002\u8acb\u554f\u60a8\u8981\u56de\u5831\u9019\u5247\u8a0a\u606f\u300c\u4e0d\u662f\u5e73\u6b0a\u8a0a\u606f\u300d\u55ce\uff1f")&&(window.Rollbar.info("Message not promoting gay marriage: ".concat(e)),alert("\u611f\u8b1d\u60a8\u7684\u56de\u5831\uff0c\u6211\u5011\u6703\u5118\u901f\u8655\u7406\u3002"))}}function rn(e){var n=e.likeTargets,t=void 0===n?[]:n,o=e.show,c=void 0!==o&&o,l=e.onVisible,i=void 0===l?function(){}:l,u=Object(a.useRef)(null),s=Object(a.useCallback)(function(e){e[0].isIntersecting&&(f(),i())},[i]),f=P(u,s);return r.a.createElement("section",{ref:u,style:c?{}:{height:en*t.length}},c?t.map(function(e){var n=e.id,t=e.type;return r.a.createElement(a.Fragment,{key:"".concat(t,"_").concat(n)},r.a.createElement(Ue,{id:n,type:t,onParsed:tn(n,t)}),r.a.createElement(nn,null,r.a.createElement("a",{href:"https://www.facebook.com/".concat(n),target:"_blank",rel:"noopener noreferrer"},"\u7121\u6cd5\u8f09\u5165\u8acb\u9ede\u6b64"),"\u30fb",r.a.createElement("button",{onClick:an(n)},"\u9019\u4e0d\u662f\u5e73\u6b0a\u8a0a\u606f")))}):null)}var on=function(e){var n=e.likeTargets,t=Object(a.useState)(0),o=Object(u.a)(t,2),c=o[0],l=o[1],i=n.reduce(function(e,n){if(0===e.length)return[[n]];var t=e[e.length-1];return t.length<Ze?(t.push(n),e):(e.push([n]),e)},[]),s=Object(a.useCallback)(function(){l(function(e){return e+1})},[l]);return r.a.createElement(r.a.Fragment,null,i.map(function(e,n){return r.a.createElement(rn,{key:n,likeTargets:e,show:n<=c,onVisible:s})}))};function cn(){var e=Object(s.a)(["\n  font-size: 24px;\n  padding: 8px 16px;\n"]);return cn=function(){return e},e}var ln=Object(a.memo)(Object(f.a)(function(e){var n=e.likeTargetsByDate,t=e.onChange,o=e.value,c=Object(a.useCallback)(function(e){return t(+e.target.value)},[t]);return r.a.createElement("select",{onChange:c,value:o},n.map(function(e,n){return r.a.createElement("option",{key:n,value:n},e[0].date.toLocaleDateString()," (",e.length," \u5247)")}))})(cn()));function un(){var e=Object(s.a)(["\n  padding: 16px;\n  text-align: center;\n"]);return un=function(){return e},e}function sn(e,n){var t=e.date,a=e.len,r=n.date,o=n.len;return+t!==+r?r-t:o-a}var fn=Object(f.a)(function(e){var n=e.className,o=Object(a.useState)(null),c=Object(u.a)(o,2),l=c[0],s=c[1],f=Object(a.useState)(0),d=Object(u.a)(f,2),m=d[0],p=d[1],g=Object(a.useRef)(null),h=Object(a.useCallback)(function(){g.current.scrollIntoView(!0),setTimeout(function(){return p(function(e){return e+1})},10)},[g,p]);if(Object(a.useEffect)(function(){t.e(3).then(t.t.bind(null,461,3)).then(function(e){var n=e.default.rows;return s(function(e){return e.map(function(e){var n=e.createdtime,t=Object(b.a)(e,["createdtime"]);return Object(i.a)({date:new Date(n.replace(/T.+$/,""))},t)}).sort(sn).reduce(function(e,n){if(0===e.length)return[[n]];var t=e[e.length-1];return+n.date===+t[0].date?(t.push(n),e):(e.push([n]),e)},[])}(n))})},[]),null===l)return r.a.createElement("section",null,"Loading...");var v=l[m],E=v[0].date,j=l[m+1]?l[m+1].length:0;return r.a.createElement("main",{className:n},r.a.createElement(U,null,r.a.createElement("h1",null,"\u5e73\u6b0a\u8072\u97f3\u8b9a\u51fa\u4f86"),r.a.createElement("h2",null,"\u4e00\u8d77\u4f86\u5e6b\u5e73\u6b0a\u7559\u8a00\u6309\u8b9a\u5427\uff01")),r.a.createElement("p",null,"\u5a5a\u59fb\u5e73\u6b0a\u76f8\u95dc\u6cd5\u6848\u5728\u7acb\u9662\u653b\u9632\u7684\u540c\u6642\uff0c\u7acb\u59d4\u5011\u7684\u81c9\u66f8\u4e5f",r.a.createElement(Z,null,"\u540c\u6642\u88ab\u633a\u540c\u8207\u53cd\u540c\u6d17\u7248"),"\u3002"),r.a.createElement("p",null,"\u8b93\u6211\u5011\u4e00\u8d77\u7acb\u59d4\u81c9\u66f8\u88e1\uff0c",r.a.createElement(Z,null,"\u633a\u5e73\u6b0a\u7684\u8072\u97f3\u6309\u8b9a"),"\u3001\u7d66\u9858\u610f\u767c\u8072\u7684\u5e73\u6b0a\u5925\u4f34\u4e00\u4e9b\u9f13\u52f5\uff0c \u4e5f\u8b93\u770b\u5230\u7acb\u59d4 FB \u7684\u4eba\u6c11\u77e5\u9053\uff0c\u5e73\u6b0a\u7684\u8072\u97f3\u662f\u6709\u4eba\u633a\u7684\uff01"),r.a.createElement(_,null),r.a.createElement("p",{ref:g},r.a.createElement(ln,{likeTargetsByDate:l,value:m,onChange:p})),r.a.createElement(on,{key:m,likeTargets:v}),r.a.createElement(_,null),r.a.createElement("p",null,E.toLocaleDateString()," \u7684\u8a0a\u606f\u90fd\u5728\u4e0a\u9762\u56c9\uff01"),r.a.createElement("p",null,j?r.a.createElement("button",{onClick:h},"\u7e7c\u7e8c\u5e6b ",j," \u5247\u7559\u8a00\u6253\u6c23"):r.a.createElement("p",null,"\u6c92\u6709\u66f4\u820a\u7684\u8cc7\u6599\u56c9\u3002\u8b1d\u8b1d\u9858\u610f\u5e6b\u5e73\u6b0a\u7684\u8072\u97f3\u6253\u6c23\uff01")))})(un()),dn=null;var mn=function(){var e=Object(a.useState)(dn),n=Object(u.a)(e,2),r=n[0],o=n[1];return Object(a.useEffect)(function(){r||t.e(4).then(t.t.bind(null,462,3)).then(function(e){return o(dn=e.default.rows.filter(function(e){return!!e.area}))})},[r]),[r,Object(a.useMemo)(function(){return(r||[]).reduce(function(e,n){return e[n.id]=n,e},{})},[r])]},pn={"\u652f\u6301\u540c\u5a5a":1,"\u652f\u6301\u5c08\u6cd5":2,"\u53cd\u5c0d\u540c\u5a5a":3,"\u672a\u8868\u614b":4},bn="fb",gn="\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u8acb\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002",hn="\u60a8\u597d\uff0c\u6211\u662f\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u6211\u60f3\u8981\u9673\u60c5\u3002\n\n\u6211\u5e0c\u671b\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002",vn="#/like"===window.location.hash?"like":"settings";var En=function(){var e=mn(),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(vn),s=Object(u.a)(c,2),f=s[0],d=s[1],m=Object(a.useState)(gn),p=Object(u.a)(m,2),b=p[0],g=p[1],h=Object(a.useState)([]),v=Object(u.a)(h,2),E=v[0],j=v[1],x=Object(a.useState)({}),O=Object(u.a)(x,2),w=O[0],k=O[1],y=Object(a.useState)(bn),C=Object(u.a)(y,2),S=C[0],I=C[1],M=Object(a.useMemo)(function(){return E.map(function(e){return o[e]})},[E,o]),z=Object(a.useMemo)(function(){return E.findIndex(function(e){return!w[e]})},[E,w]),L=Object(a.useCallback)(function(e){j(e.sort(function(e,n){if(w[e]&&!w[n])return-1;if(!w[e]&&w[n])return 1;var t=pn[o[e].position],a=pn[o[n].position];return t-a!==0?t-a:e-n}))},[j,w,o]),F=Object(a.useCallback)(function(e){e!==S&&(I(e),window.ga("set","dimension2",e),"fb"!==e||""!==b.trim()&&b!==hn?"tel"!==e||""!==b.trim()&&b!==gn||g(hn):g(gn))},[b,g,S,I]),B=Object(a.useCallback)(function(){return d("send")},[d]),T=Object(a.useCallback)(function(){return d("settings")},[d]),N=Object(a.useCallback)(function(){return k(Object(i.a)({},w,Object(l.a)({},M[z].id,!0)))},[w,M,z]);switch(f){case"settings":return r.a.createElement(oe,{msg:b,onMsgChange:g,legislators:t,selectedLegislatorIds:E,onSelectionChange:L,doneLegislatorMap:w,sendType:S,onSendTypeChange:F,onSubmit:B});case"send":return r.a.createElement(Ye,{msg:b,sendType:S,currentIdx:z,selectedLegislators:M,onMsgChange:g,onNext:N,onBack:T});case"like":return r.a.createElement(fn,null);default:throw new Error("Wrong page settings")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.ga("require","eventTracker"),window.ga("require","outboundLinkTracker"),c.a.render(r.a.createElement(En,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[192,1,2]]]);
//# sourceMappingURL=main.42dbbf91.chunk.js.map