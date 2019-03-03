(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,n,t){e.exports=t(36)},32:function(e,n,t){},36:function(e,n,t){"use strict";t.r(n);t(25),t(26);var r=t(0),a=t.n(r),o=t(20),i=t.n(o),c=(t(31),t(32),t(16)),l=t(17),u=t(3),s=t(1),f=t(2);function d(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 8px;\n  padding: 8px;\n  border: 2px solid currentColor;\n  background-color: rgba(255, 255, 255, 0.12);\n  color: #ff9753;\n  transition: background-color 0.2s;\n\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.22);\n  }\n\n  &:focus {\n    background-color: rgba(0, 0, 0, 0.2);\n    outline: 0;\n  }\n"]);return d=function(){return e},e}var m=f.a.textarea(d());var p=function(e){var n=e.value,t=Object(r.useCallback)(function(){window.ga("set","dimension1",n)},[n]);return a.a.createElement(m,Object.assign({},e,{onBlur:t}))},b=t(7);function g(e){var n=e.isIndeterminate,t=void 0!==n&&n,r=Object(b.a)(e,["isIndeterminate"]);return a.a.createElement("input",Object.assign({type:"checkbox",ref:function(e){e&&(e.indeterminate=t)}},r))}g.defaultProps={isIndeterminate:!1};var h=g;function v(){var e=Object(s.a)(["\n  margin: 40px 0;\n  header {\n    font-size: 20px;\n    border-bottom: 2px dotted rgba(255, 255, 255, 0.12);\n    label {\n      padding: 8px 0;\n    }\n  }\n"]);return v=function(){return e},e}function x(){var e=Object(s.a)(["\n  background: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px;\n  border-radius: 8px;\n"]);return x=function(){return e},e}function E(){var e=Object(s.a)(["\n  list-style: none;\n  padding: 0;\n"]);return E=function(){return e},e}function j(){var e=Object(s.a)(["\n  li {\n    display: inline-block;\n    padding-right: 2em;\n  }\n\n  label {\n    min-width: 105px;\n  }\n\n  input {\n    margin-right: 0.5em;\n  }\n"]);return j=function(){return e},e}var O=f.a.div(j()),w=f.a.ul(E()),k=Object(f.a)(w)(x()),y=f.a.section(v());function C(e){var n=e.legislators,t=e.selectedIdMap,o=e.onChange,i=void 0===o?function(){}:o,c=Object(r.useMemo)(function(){return n.reduce(function(e,n){n.id;var t=n.position;return e[t]=e[t]||0,e[t]+=1,e},{})},[n]),l=Object(r.useMemo)(function(){return n.reduce(function(e,n){var r=n.id,a=n.position;return e[a]=e[a]||0,t[r]&&(e[a]+=1),e},{})},[n,t]),u=Object.keys(t).length,s=Object(r.useCallback)(function(e){var r=e.target.value;0===l[r]?i(n.filter(function(e){var n=e.position,a=e.id;return n===r||t[a]}).map(function(e){return e.id})):i(n.filter(function(e){var n=e.position,a=e.id;return n!==r&&t[a]}).map(function(e){return e.id}))},[l,n,i,t]),f=Object(r.useCallback)(function(){i(0===u?n.map(function(e){return e.id}):[])},[u,n]),d=Object(r.useMemo)(function(){return n.filter(function(e){var n=e.id;return e.targeted&&t[n]}).length},[n,t]),m=Object(r.useMemo)(function(){return n.filter(function(e){return e.targeted}).length},[n]),p=Object(r.useCallback)(function(e){i(0===d?n.filter(function(e){var n=e.targeted,r=e.id;return n||t[r]}).map(function(e){return e.id}):n.filter(function(e){var n=e.targeted,r=e.id;return!n&&t[r]}).map(function(e){return e.id}))},[n,i,t]);return a.a.createElement(k,null,a.a.createElement("li",null,a.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},a.a.createElement(h,{onChange:f,checked:u===n.length,isIndeterminate:0<u&&u<n.length}),"\u5168\u9078")),Object.keys(c).map(function(e){return a.a.createElement("li",{key:e},a.a.createElement("label",null,a.a.createElement(h,{value:e,onChange:s,checked:l[e]===c[e],isIndeterminate:0<l[e]&&l[e]<c[e]})," ",e))}),a.a.createElement("li",null,a.a.createElement("label",{style:{fontWeight:"bold",color:"#FF5368"}},a.a.createElement(h,{onChange:p,checked:d===m,isIndeterminate:0<d&&d<m}),"\u906d\u5230\u53cd\u540c\u9396\u5b9a\u7684"),a.a.createElement("a",{href:"https://www.mirrormedia.mg/story/20190302inv001",target:"_blank",rel:"noopener noreferrer"},"\u7acb\u59d4\u5011")))}function I(e){var n=e.area,t=void 0===n?"":n,o=e.legislators,i=void 0===o?[]:o,c=e.selectedIdMap,u=void 0===c?{}:c,s=e.onChange,f=void 0===s?function(){}:s,d=i.filter(function(e){var n=e.id;return u[n]}).length,m=Object(r.useCallback)(function(e){if(0===d){var n=Object(l.a)({},u);i.forEach(function(e){var t=e.id;n[t]=!0}),f(Object.keys(n))}else{var t=i.reduce(function(e,n){return e[n.id]=!0,e},{});f(Object.keys(u).filter(function(e){return!t[e]}))}},[i,f,d,u]),p=Object(r.useCallback)(function(e){var n=e.target.value;u[n]?f(Object.keys(u).filter(function(e){return e!==n})):f(Object.keys(u).concat(n))},[i,u,f]);return a.a.createElement(y,null,a.a.createElement("header",null,a.a.createElement("label",null,a.a.createElement(h,{onChange:m,isIndeterminate:0<d&&d<i.length,checked:d===i.length})," ",t)),a.a.createElement(w,null,i.map(function(e){var n=e.id,t=e.name;return a.a.createElement("li",{key:n},a.a.createElement("label",null,a.a.createElement(h,{key:n,value:n,onChange:p,checked:!!u[n]})," ",t))})))}var M=a.a.memo(function(e){var n=e.legislators,t=void 0===n?[]:n,o=e.selectedLegislatorIds,i=void 0===o?[]:o,c=(e.doneLegislatorMap,e.onSelectionChange),l=void 0===c?function(){}:c,u=Object(r.useMemo)(function(){return t.reduce(function(e,n){return e[n.area]=e[n.area]||[],e[n.area].push(n),e},{})},[t]),s=Object(r.useMemo)(function(){return i.reduce(function(e,n){return e[n]=!0,e},{})},[i]);return a.a.createElement(O,null,a.a.createElement(C,{legislators:t,selectedIdMap:s,onChange:l}),Object.keys(u).map(function(e){return a.a.createElement(I,{key:e,area:e,selectedIdMap:s,legislators:u[e],onChange:l})}))}),S=t(14);function z(){var e=Object(s.a)(["\n  /*\n    Can't use emojis that is too large on mobile:\n    https://stackoverflow.com/questions/29142118/why-do-emoji-not-render-above-a-certain-size-in-chrome\n  */\n  font-size: 60px;\n  line-height: 1;\n  display: inline-block;\n  transform: perspective(400px) rotateY(90deg);\n  animation: "," 1s cubic-bezier(0, 0.37, 1, 0.63); /* no infinite here, use DOM change to trigger animation */\n\n  @media screen and (min-width: 1024px) {\n    font-size: 84px;\n  }\n"]);return z=function(){return e},e}function L(){var e=Object(s.a)(["\n  from {\n    transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n    transform: perspective(400px) rotateY(-90deg);\n  }\n"]);return L=function(){return e},e}var F=1;var B=Object(S.b)(L()),N=Object(f.a)(function(e){var n=e.icons,t=void 0===n?[]:n,o=Object(b.a)(e,["icons"]),i=Object(r.useState)(0),c=Object(u.a)(i,2),l=c[0],s=c[1],f=t.length;return Object(r.useEffect)(function(){var e=setTimeout(function(){s((l+1)%f)},1e3*F);return function(){return clearTimeout(e)}},[l,f]),a.a.createElement("span",Object.assign({key:l,role:"img","aria-label":"Icon"},o),t[l])})(z(),B);function P(){var e=Object(s.a)(["\n  margin: 40px 0;\n  text-align: center;\n  letter-spacing: 0.5em;\n"]);return P=function(){return e},e}var _=Object(f.a)(function(e){var n=e.content,t=void 0===n?"\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66":n,r=Object(b.a)(e,["content"]);return a.a.createElement("p",r,a.a.createElement("span",{role:"img","aria-label":"Horizontal ruler"},t))})(P());t(33);var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=Object(r.useRef)(null);Object(r.useLayoutEffect)(function(){return t.current&&t.current.disconnect(),e&&(t.current=new IntersectionObserver(n,{}),t.current.observe(e)),function(){t.current&&t.current.disconnect()}},[e,n])};function T(){var e=Object(s.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 24px;\n\n  transform: translate(0, 100%);\n  transition: transform 0.2s ease-out, background-color 0.2s;\n\n  font-size: 20px;\n  font-weight: bold;\n  border-radius: 0;\n\n  & > span {\n    margin: 0 auto;\n  }\n\n  &::after {\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n\n  &.show {\n    transform: translate(0, 0);\n  }\n"]);return T=function(){return e},e}function q(){var e=Object(s.a)(["\n  @media screen and (min-width: 425px) {\n    display: none;\n  }\n"]);return q=function(){return e},e}var R=20,V=f.a.br(q());var Y=Object(f.a)(function(e){var n=e.doneLegislatorMap,t=e.selectedLegislatorIds,r=e.onClick,o=e.show,i=void 0!==o&&o,c=e.className,l=Object.keys(n).length>0,u=t.filter(function(e){return!n[e]}).length,s=R*u,f=s>120?" ".concat(Math.floor(s/60)," \u5206\u9418"):" ".concat(s," \u79d2");return a.a.createElement("button",{type:"button",onClick:r,className:"".concat(c," ").concat(i&&u>0?"show":""),"ga-on":"click","ga-event-category":"send","ga-event-action":"start","ga-event-label":l?"\u7e7c\u7e8c":"\u958b\u59cb","ga-event-value":u},a.a.createElement("span",null,l?"\u7e7c\u7e8c":"\u958b\u59cb","\u5411 ",u," \u4f4d\u59d4\u54e1\u9673\u60c5"," ",a.a.createElement(V,null),a.a.createElement("small",null," (\u7d04\u9700 ",f,") ")))})(T());function A(){var e=Object(s.a)(["\n  list-style: none;\n  margin: 0 0 8px;\n  padding: 0;\n\n  &::before {\n    content: attr(data-label);\n  }\n\n  li {\n    display: inline-block;\n    padding: 4px 6px;\n    margin: 0 0 4px 4px;\n    font-size: 12px;\n    border-radius: 30px;\n    border: 1px solid currentColor;\n    color: #ff5368;\n    transition-property: color, background-color;\n    transition-duration: 0.2s;\n\n    &:hover {\n      background-color: #ff5368;\n      color: #fff;\n    }\n  }\n"]);return A=function(){return e},e}var J=null;function X(e){var n=e.template,t=n.label,o=n.msg,i=e.onSelect,c=void 0===i?function(){}:i,l=Object(r.useCallback)(function(){c(o)},[o,c]);return a.a.createElement("li",{onClick:l},t)}var D=Object(f.a)(function(e){var n=e.onSelect,o=void 0===n?function(){}:n,i=Object(b.a)(e,["onSelect"]),c=Object(r.useState)(J),l=Object(u.a)(c,2),s=l[0],f=l[1];return Object(r.useEffect)(function(){s||t.e(4).then(t.t.bind(null,37,3)).then(function(e){return f(J=e.default.rows)})},[s]),s?a.a.createElement("ul",Object.assign({"data-label":"\u52a0\u9ede\u5167\u5bb9\uff1a"},i),s.map(function(e,n){return a.a.createElement(X,{key:n,template:e,onSelect:o})})):null})(A());function H(){var e=Object(s.a)(["\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.5);\n  text-align: center;\n  padding-bottom: 64px;\n"]);return H=function(){return e},e}function $(){var e=Object(s.a)(["\n  color: #8f53ff;\n  font-style: normal;\n"]);return $=function(){return e},e}function G(){var e=Object(s.a)(["\n  text-align: center;\n  padding: 30px 0;\n\n  h1 {\n    font-size: 28px;\n    font-weight: normal;\n    letter-spacing: 0.125em;\n    margin: 24px 0 16px;\n    @media screen and (min-width: 425px) {\n      font-size: 40px;\n    }\n  }\n\n  h2 {\n    margin: 0;\n    font-size: 14px;\n    letter-spacing: 0.5em;\n    font-weight: 200;\n  }\n"]);return G=function(){return e},e}function K(){var e=Object(s.a)(["\n  padding: 40px;\n  max-width: 720px;\n  margin: 0 auto;\n"]);return K=function(){return e},e}var Q=f.a.div(K()),U=f.a.header(G()),Z=f.a.em($()),ee=a.a.memo(function(){return a.a.createElement(U,null,a.a.createElement(N,{icons:["\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66","\ud83c\udfe0","\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"]}),a.a.createElement("h1",null,"\u6211",a.a.createElement(Z,null,"\u611b\u5bb6"),"\u30fb\u6211\u806f\u7d61"),a.a.createElement("h2",null,"\u5e73\u6b0a\u7acb\u9662\u9375\u76e4\u9673\u60c5"))}),ne=f.a.footer(H());var te=function(e){var n=e.msg,t=void 0===n?"":n,o=e.onMsgChange,i=void 0===o?function(){}:o,c=e.legislators,l=void 0===c?[]:c,s=e.selectedLegislatorIds,f=void 0===s?[]:s,d=e.doneLegislatorMap,m=void 0===d?{}:d,b=e.onSelectionChange,g=void 0===b?function(){}:b,h=e.onSubmit,v=void 0===h?function(){}:h,x=Object(r.useRef)(null),E=Object(r.useState)(!1),j=Object(u.a)(E,2),O=j[0],w=j[1],k=Object(r.useCallback)(function(){return x.current.scrollIntoView({behavior:"smooth",block:"start"})},[x]),y=Object(r.useCallback)(function(e){e[0].isIntersecting?w(!0):w(!1)}),C=Object(r.useCallback)(function(e){i("".concat(t,"\n\n").concat(e))},[t,i]);return W(x.current,y),a.a.createElement(Q,null,a.a.createElement(ee,null),a.a.createElement("section",null,a.a.createElement("p",null,"\u8b93\u540c\u5fd7\u80fd\u4ee5",a.a.createElement(Z,null,"\u5a5a\u59fb"),"\u6210\u5bb6\uff0c\u5c31\u662f\u300c\u611b\u5bb6\u300d\u7684\u8868\u73fe\u3002 \u5728\u5e73\u6b0a\u6cd5\u6848\u901a\u904e\u4e4b\u524d\uff0c\u8b93\u6211\u5011\u52d5\u52d5\u624b\u6307\u982d\uff0c\u4e0d\u5206\u7570\u540c\u5730\u5411\u7acb\u6cd5\u59d4\u54e1\u5011\u8868\u9054\u6211\u5011",a.a.createElement(Z,null,"\u5e0c\u671b\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a"),"\u7684\u5fc3\u8072\u5427\uff01"),a.a.createElement(_,null),a.a.createElement("label",null,a.a.createElement("h3",null,"\u4f60\u60f3\u8981\u8ddf\u59d4\u54e1\u5011\u8aaa\u4ec0\u9ebc\u5462\uff1f"),a.a.createElement(D,{onSelect:C}),a.a.createElement(p,{value:t,onChange:function(e){return i(e.target.value)},rows:5,autoFocus:!0})),a.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",margin:0}},a.a.createElement("span",{style:{fontSize:12,opacity:.5}},"\uff0a \u52a0\u5165\u4f60\u7684\u7d93\u6b77\u8207\u89c0\u5bdf\uff08\u4f8b\uff1a\u6709\u540c\u4e8b\u662f\u540c\u5fd7\uff09\u6703\u66f4\u6709\u8aaa\u670d\u529b\u5537\uff01"),a.a.createElement("button",{style:{flexShrink:0,marginLeft:"8px"},type:"button",onClick:k},"\u4e0b\u4e00\u6b65"))),a.a.createElement("section",{ref:x},a.a.createElement(_,null),a.a.createElement("h3",null,"\u8acb\u9078\u64c7\u8981\u9673\u60c5\u7684\u7acb\u59d4"),a.a.createElement(M,{legislators:l||[],selectedLegislatorIds:f,doneLegislatorMap:m,onSelectionChange:g}),a.a.createElement(Y,{show:O,selectedLegislatorIds:f,doneLegislatorMap:m,onClick:v})),a.a.createElement(ne,null,a.a.createElement(_,{content:"\ud83c\udff3\ufe0f\u200d\ud83c\udf08"}),a.a.createElement("p",null,"\u6b64\u5de5\u5177\u70ba",a.a.createElement("a",{href:"https://www.facebook.com/groups/answerfamily/"},"\u300a\u6211\u611b\u5bb6\u6211\u89e3\u60d1 - \u5e73\u6b0a\u793e\u6703\u5c0d\u8a71\u5de5\u7a0b\u300b\u793e\u7fa4"),"\u53c3\u8207\u8005\u63d0\u4f9b\u4e4b",a.a.createElement("a",{href:"https://github.com/answerfamily/ly"},"\u958b\u653e\u539f\u59cb\u78bc"),"\u5c08\u6848\u3002"),a.a.createElement("p",null,"\u8cc7\u6599\u4f86\u6e90\uff1a",a.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9"),"\u3001",a.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a")),a.a.createElement("p",null,"Background icons:"," ",a.a.createElement("a",{href:"https://thenounproject.com/nookfulloption/collection/space2",target:"_blank",rel:"noopener noreferrer"},"Space2")," ","by Nook Fulloption from the Noun Project")))},re=t(21),ae=t(22),oe=t.n(ae),ie=t(23),ce=t.n(ie),le=(window.FB?Promise.resolve(window.FB):new Promise(function(e){window.fbAsyncInit=function(){e()}})).then(function(){window.FB.init({appId:"411731149364306",version:"v3.2"})});function ue(){var e=Object(s.a)(["\n  background: #ff9753;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  text-align: center;\n"]);return ue=function(){return e},e}var se=["messages","timeline"],fe=f.a.div(ue());var de=a.a.memo(function(e){var n=e.className,t=void 0===n?"":n,o=e.tabs,i=void 0===o?se:o,c=e.href,l=void 0===c?"":c,u=e.width,s=void 0===u?320:u,f=e.height,d=void 0===f?500:f,m=e.onParsed,p=void 0===m?null:m,b=e.profile,g=void 0===b?"":b,h=Object(r.useRef)(null);return Object(r.useLayoutEffect)(function(){le.then(function(){window.FB.XFBML.parse(h.current,function(){p&&p({width:s,height:d})})})},[i,l,s,d]),l?a.a.createElement("div",{ref:h,className:t},a.a.createElement("div",{className:"fb-page","data-href":l,"data-tabs":i.join(","),"data-small-header":"true","data-adapt-container-width":"false","data-show-facepile":"false","data-hide-cta":"true","data-width":s,"data-height":d})):a.a.createElement(fe,{className:t,style:{width:s,height:d}},a.a.createElement("p",null,"\u7121\u6cd5\u986f\u793a\u9019\u4f4d\u59d4\u54e1\u7684\u7c89\u7d72\u5c08\u9801\u3002"),a.a.createElement("p",null,"\u8acb\u81f3",a.a.createElement("a",{href:g,target:"_blank",rel:"noopener noreferrer"},"\u59d4\u54e1\u7684\u500b\u4eba\u6a94\u6848"),"\u9801\u9762\u7559\u8a00\u3002"))});function me(){var e=Object(s.a)(["\n  font-size: 12px;\n  opacity: 0.88;\n"]);return me=function(){return e},e}function pe(){var e=Object(s.a)(["\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n\n  /* hiding scrollbar */\n  padding-right: 20px;\n  margin-right: -20px;\n\n  /* gradient appear & disappear */\n  mask-image: linear-gradient(\n    to bottom,\n    transparent,\n    black 6%,\n    black 94%,\n    transparent\n  );\n"]);return pe=function(){return e},e}var be=f.a.article(pe()),ge=f.a.footer(me());var he=function(e){var n=e.legislator,t=n.name,r=n.pridewatchpage,o=n.position,i=n.description,c=n.party,l=n.area,u=n.religion,s=n.subarea;return n.facebookpage,a.a.createElement("section",{style:{overflowX:"hidden"}},a.a.createElement("h1",null,t),a.a.createElement(be,null,a.a.createElement("p",null,o),i&&a.a.createElement("ul",{style:{padding:0}},i.split("\n").map(function(e,n){return a.a.createElement("li",{key:n},e)})),a.a.createElement("p",null,c,"\u30fb",l,s?"\uff0f".concat(s):null),u?a.a.createElement("p",null,u):null,a.a.createElement("p",null,a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"PrideWatch \u9801\u9762"))),a.a.createElement(ge,null,a.a.createElement(_,null),a.a.createElement("p",null,"\u8cc7\u6599\u4f86\u6e90\uff1a",a.a.createElement("a",{href:"https://www.pridewatch.tw/beta/",target:"_blank",rel:"noopener noreferrer"},"PrideWatch Taiwan \u540c\u5fd7\u4eba\u6b0a\u7acb\u5834\u89c0\u6e2c\u7ad9"),"\u3001",a.a.createElement("a",{href:"http://equallove.tw/articles/200",target:"_blank",rel:"noopener noreferrer"},"\u5a5a\u59fb\u5e73\u6b0a\u5927\u5e73\u53f0\u59d4\u54e1 FB \u540d\u518a"))))};function ve(){var e=Object(s.a)(["\n  padding: 8px 0;\n  border: 2px solid #ff5368;\n  background: transparent;\n  color: #ff5368;\n\n  &:hover {\n    color: #fff;\n  }\n"]);return ve=function(){return e},e}function xe(){var e=Object(s.a)(["\n  width: 100%;\n  font-size: 28px;\n"]);return xe=function(){return e},e}var Ee=f.a.button(xe()),je=Object(f.a)(Ee)(ve());function Oe(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n"]);return Oe=function(){return e},e}var we=f.a.div(Oe());var ke=function(e){var n=e.onBack;return a.a.createElement(we,null,a.a.createElement(N,{icons:["\ud83c\udff3\ufe0f\u200d\ud83c\udf08","\ud83d\ude47\u200d\u2640\ufe0f","\ud83d\ude47\u200d\u2642\ufe0f"]}),a.a.createElement("p",null,"\u5b8c\u6210\u56c9\uff01\u8b1d\u8b1d\u60a8 m(_ _)m"),a.a.createElement("p",null,a.a.createElement(je,{style:{padding:16,fontSize:16},onClick:n},"\u56de\u9996\u9801")))};function ye(){var e=Object(s.a)(["\n  display: flex;\n  background: #ff9753;\n  padding: 4px;\n  border-top: 0;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  font-size: 14px;\n\n  span {\n    margin: 0 1em 0 auto;\n  }\n"]);return ye=function(){return e},e}function Ce(){var e=Object(s.a)(["\n  position: relative; /* for AutoSizer */\n  flex: 1 1 60vh;\n\n  border: 2px solid #ff9753;\n  border-bottom: 0;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  overflow: hidden;\n\n  .preload-iframe {\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    left: 0;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 1024px) {\n    flex-basis: auto;\n  }\n"]);return Ce=function(){return e},e}function Ie(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &::after {\n    margin-left: 16px;\n    content: '';\n    width: 16px;\n    height: 16px;\n    border-top: 2px solid #fff;\n    border-right: 2px solid #fff;\n    border-radius: 2px;\n    transform: rotate(45deg);\n    transition: transform 0.15s ease-out;\n  }\n\n  &:hover::after {\n    transform: translate(8px, 0) rotate(45deg);\n  }\n"]);return Ie=function(){return e},e}function Me(){var e=Object(s.a)(["\n  padding: 60px 20px 20px;\n  min-height: 100vh;\n\n  section {\n    display: flex;\n    flex-flow: column;\n  }\n\n  @media screen and (min-width: 1024px) {\n    display: flex;\n    max-width: 1280px;\n    height: 100vh;\n    padding: 60px 40px 40px;\n    margin: 0 auto;\n\n    section {\n      flex: 3;\n      padding-left: 24px;\n      &:first-of-type {\n        flex: 2;\n        padding-left: 0;\n      }\n    }\n  }\n"]);return Me=function(){return e},e}function Se(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  padding-left: 16px;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n\n  cursor: pointer;\n  font-size: 14px;\n\n  &::before {\n    content: '';\n    width: 8px;\n    height: 8px;\n    margin-right: 8px;\n    border-top: 1px solid #fff;\n    border-left: 1px solid #fff;\n    transform: rotate(-45deg);\n  }\n\n  &:hover {\n    opacity: 1;\n  }\n"]);return Se=function(){return e},e}function ze(){var e=Object(s.a)(["\n  position: absolute;\n  z-index: -1;\n  background: #7ed321;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0;\n\n  transition: width 0.75s ease-out;\n"]);return ze=function(){return e},e}function Le(){var e=Object(s.a)(["\n  position: fixed;\n  background: rgba(0, 0, 0, 0.88);\n  -webkit-backdrop-filter: blur(16px);\n\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin: 0 auto;\n  }\n"]);return Le=function(){return e},e}var Fe=f.a.header(Le()),Be=f.a.div(ze()),Ne=f.a.div(Se()),Pe=f.a.div(Me()),_e=Object(f.a)(Ee,{shouldForwardProp:function(){return!0}})(Ie()),We=f.a.div(Ce()),Te=f.a.div(ye());var qe=function(e){var n=e.msg,t=void 0===n?"":n,o=e.currentIdx,i=void 0===o?0:o,c=e.selectedLegislators,l=void 0===c?[]:c,s=e.onMsgChange,f=void 0===s?function(){}:s,d=(e.onPrev,e.onNext),m=void 0===d?function(){}:d,b=e.onBack,g=void 0===b?function(){}:b,h=Object(r.useRef)(null),v=Object(r.useRef)(null),x=Object(r.useState)(null),E=Object(u.a)(x,2),j=E[0],O=E[1],w=Object(r.useCallback)(function(){v.current.scrollIntoView({behavior:"smooth",block:"start"}),m()},[v,m]);if(Object(r.useEffect)(function(){var e=new ce.a(h.current,{text:function(){return t}});return e.on("success",function(){oe.a.success("\u300c".concat(t.slice(0,10),"\u22ef\u22ef\u300d\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f"),{position:"bottom-center"}),v.current.scrollIntoView({behavior:"smooth",block:"start"})}),function(){e.destroy()}},[h,v,t]),-1===i)return a.a.createElement(ke,{onBack:g});if(!l||!l[i])return null;var k=l[i],y=k.name,C=k.facebookpage,I=k.facebookprofile,M=k.feedonly,S=k.cannotload;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Fe,null,a.a.createElement(Ne,{onClick:g},"\u8a2d\u5b9a\u7acb\u59d4"),a.a.createElement("span",null,i+1," / ",l.length),a.a.createElement(Be,{style:{width:"".concat((100*(i+1)/l.length).toFixed(2),"%")}})),a.a.createElement(Pe,null,a.a.createElement(he,{legislator:l[i]}),a.a.createElement("section",null,a.a.createElement("h1",null,"1. \u8907\u88fd\u6587\u5b57"),a.a.createElement(p,{style:{flex:1},placeholder:"\u628a\u9673\u60c5\u6587\u5b57\u8cbc\u5728\u9019\u88e1\uff0c\u65b9\u4fbf\u8907\u88fd\u8cbc\u4e0a",onChange:function(e){return f(e.target.value)},value:t,rows:5}),a.a.createElement("p",null,a.a.createElement(je,{ref:h},"\u8907\u88fd"))),a.a.createElement("section",{ref:v},a.a.createElement("h1",null,"2. \u8cbc\u4e0a\u4e26\u9001\u51fa"),a.a.createElement(We,{style:j?{height:j,flexBasis:"auto"}:{}},a.a.createElement(re.a,null,function(e){var n=e.width,t=e.height;return[a.a.createElement(de,{key:i,href:S?null:C,profile:I,width:n-4,height:t-2,onParsed:function(e){var n=e.height;return O(n+2)}}),l[i+1]&&a.a.createElement(de,{className:"preload-iframe",key:i+1,href:l[i+1]?null:l[i+1].facebookpage,profile:l[i+1].facebookprofile,width:n-4,height:t-2})]})),a.a.createElement(Te,null,M?"\uff0a \u59d4\u54e1\u7c89\u5c08\u4e0d\u958b\u653e\u79c1\u8a0a\uff0c\u8acb\u9078\u4e00\u7bc7\u8cbc\u6587\u56de\u61c9":a.a.createElement(a.a.Fragment,null,"\uff0a \u8a18\u5f97\u8981\u6309\u300c\u767c\u9001\u300d\u624d\u6703\u9001\u51fa\u5537\uff01",a.a.createElement("span",null,"\u2191\u2191"))),a.a.createElement("p",null,a.a.createElement(_e,{"ga-on":"click","ga-event-category":"send","ga-event-action":"submit","ga-event-label":y,onClick:w},"\u4e0b\u4e00\u4f4d")))))},Re=null;var Ve=function(){var e=Object(r.useState)(Re),n=Object(u.a)(e,2),a=n[0],o=n[1];return Object(r.useEffect)(function(){a||t.e(3).then(t.t.bind(null,38,3)).then(function(e){return o(Re=e.default.rows.filter(function(e){return!!e.area}))})},[a]),[a,Object(r.useMemo)(function(){return(a||[]).reduce(function(e,n){return e[n.id]=n,e},{})},[a])]},Ye="\u6211\u662f\uff38\uff38\u5340\u7684\u9078\u6c11\uff0c\u8acb\u59d4\u54e1\u652f\u6301\u7528\u5408\u61b2\u7684\u6cd5\u5f8b\uff0c\u8b93\u540c\u5fd7\u53ef\u4ee5\u7d50\u5a5a\u3002",Ae={"\u652f\u6301\u540c\u5a5a":1,"\u652f\u6301\u5c08\u6cd5":2,"\u53cd\u5c0d\u540c\u5a5a":3,"\u672a\u8868\u614b":4};var Je=function(){var e=Ve(),n=Object(u.a)(e,2),t=n[0],o=n[1],i=Object(r.useState)("settings"),s=Object(u.a)(i,2),f=s[0],d=s[1],m=Object(r.useState)(Ye),p=Object(u.a)(m,2),b=p[0],g=p[1],h=Object(r.useState)([]),v=Object(u.a)(h,2),x=v[0],E=v[1],j=Object(r.useState)({}),O=Object(u.a)(j,2),w=O[0],k=O[1],y=Object(r.useMemo)(function(){return x.map(function(e){return o[e]})},[x,o]),C=Object(r.useMemo)(function(){return x.findIndex(function(e){return!w[e]})},[x,w]),I=Object(r.useCallback)(function(e){E(e.sort(function(e,n){if(w[e]&&!w[n])return-1;if(!w[e]&&w[n])return 1;var t=Ae[o[e].position],r=Ae[o[n].position];return t-r!==0?t-r:e-n}))},[E,w,o]),M=Object(r.useCallback)(function(){return d("send")},[d]),S=Object(r.useCallback)(function(){return d("settings")},[d]),z=Object(r.useCallback)(function(){return k(Object(l.a)({},w,Object(c.a)({},y[C].id,!0)))},[w,y,C]);switch(f){case"settings":return a.a.createElement(te,{msg:b,onMsgChange:g,legislators:t,selectedLegislatorIds:x,onSelectionChange:I,doneLegislatorMap:w,onSubmit:M});case"send":return a.a.createElement(qe,{msg:b,currentIdx:C,selectedLegislators:y,onMsgChange:g,onNext:z,onBack:S});default:throw new Error("Wrong page settings")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));window.ga("require","eventTracker"),window.ga("require","outboundLinkTracker"),i.a.render(a.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.4f1cebb5.chunk.js.map