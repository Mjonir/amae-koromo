(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=(a(83),a(85),a(26)),i=a(66),o=a.n(i),u=a(77),m=l.a.createContext({});var s=function(e){var t=e.children;return l.a.createElement(u.a,null,function(e){return l.a.createElement(m.Provider,{value:e},t)})},E=function(e){var t=e.title,a=void 0===t?void 0:t,n=e.children,r=void 0===n?void 0:n,c=e.fluid,i=void 0!==c&&c;return l.a.createElement("div",{className:"my-5 container".concat(i?"-fluid":"")},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},a&&l.a.createElement("h2",{className:"mb-4"},a),r)))},d=a(27);function v(e){var t=e.className,a=void 0===t?"":t,r=e.type,c=void 0===r?"info":r,i=e.container,o=void 0===i?l.a.Fragment:i,u=e.stateName,m=void 0===u?"":u,s=e.children,E=void 0===s?void 0:s,v="alertState_".concat(m),f=Object(n.useState)(function(){return m&&!!localStorage.getItem(v)}),h=Object(d.a)(f,2),p=h[0],b=h[1];if(Object(n.useEffect)(function(){m&&p&&localStorage.setItem(v,"true")},[p,m,v]),p)return null;var w=o;return l.a.createElement(w,null,l.a.createElement("div",{className:"alert alert-".concat(c," alert-dismissible fade show ").concat(a),role:"alert"},E,l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:function(e){e.preventDefault(),b(!0),requestAnimationFrame(function(){return window.dispatchEvent(new UIEvent("resize"))}),setTimeout(function(){window.dispatchEvent(new UIEvent("resize"))},200)}},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}var f=a(74),h=a.n(f),p=("".concat("https://ak-data-1.sapk.ch/","api/"),"\u96c0\u9b42\u724c\u8c31\u5c4b");h()("2019-08-23","YYYY-MM-DD");function b(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null,l.a.createElement("h1",null,l.a.createElement(c.b,{to:"/"},p))),l.a.createElement(v,{container:E,stateName:"topNote"},l.a.createElement("h4",null,"\u8bf4\u660e"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u672c\u9875\u9762\u6570\u636e\u7531\u7b2c\u4e09\u65b9\u7ef4\u62a4\uff0c\u4e0d\u80fd\u7edd\u5bf9\u4fdd\u8bc1\u5b8c\u6574\u548c\u6b63\u786e\uff0c\u4fe1\u606f\u4ec5\u4f9b\u53c2\u8003\uff0c\u8bf7\u52ff\u7528\u4e8e\u4e0d\u826f\u7528\u9014\u3002"),l.a.createElement("li",null,"\u8bb0\u5f55\u5305\u542b\u96c0\u9b42\u56fd\u670d\u56db\u4eba\u534a\u5e84\u6bb5\u4f4d\u6218\u7389\u4e4b\u95f4\u53ca\u738b\u5ea7\u4e4b\u95f4\u7684\u724c\u8c31\u3002"),l.a.createElement("li",null,"\u5bf9\u5c40\u6570\u636e\u6536\u96c6\u4ece 2019 \u5e74 8 \u6708 23 \u65e5\u5f00\u59cb\uff0c\u4e4b\u524d\u7684\u5bf9\u5c40\u5df2\u65e0\u6cd5\u83b7\u53d6\u3002"),l.a.createElement("li",null,"\u6b63\u5e38\u60c5\u51b5\u4e0b\u5168\u90e8\u5bf9\u5c40\u90fd\u4f1a\u88ab\u8bb0\u5f55\uff0c\u4f46\u4e0d\u6392\u9664\u56e0\u7f51\u7edc\u95ee\u9898\u9057\u6f0f\u90e8\u5206\u5bf9\u5c40\u7684\u60c5\u51b5\u3002\u53e6 2019 \u5e74 10 \u6708 10 \u65e5\u524d\u56e0\u7a0b\u5e8f Bug \u6bcf\u5929\u665a\u95f4\u53ef\u80fd\u9057\u6f0f\u6389 10% ~ 20% \u7684\u5bf9\u5c40\uff0c\u6b64 Bug \u76ee\u524d\u5df2\u7ecf\u4fee\u590d\u3002"),l.a.createElement("li",null,"\u9875\u9762\u4e0d\u662f\u5b9e\u65f6\u66f4\u65b0\uff0c\u5bf9\u5c40\u4e00\u822c\u4f1a\u5728\u7ed3\u675f\u540e\u6570\u5206\u949f\u81f3\u6570\u5c0f\u65f6\u5185\u51fa\u73b0\u3002"),l.a.createElement("li",null,"\u5982\u6709\u95ee\u9898\u6216\u5efa\u8bae\uff0c\u8bf7\u6233 ",l.a.createElement("a",{href:"mailto:i@sapika.ch"},"SAPikachu (i@sapika.ch)")," \u6216"," ",l.a.createElement("a",{href:"https://github.com/SAPikachu/amae-koromo/"},"\u63d0\u4ea4 Issue"),"\u3002"))),l.a.createElement(v,{container:E,stateName:"maintenance"},l.a.createElement("h4",null,"\u4e34\u65f6\u7ef4\u62a4\u516c\u544a"),l.a.createElement("p",null,"\u56e0\u6570\u636e\u5e93\u51fa\u73b0\u95ee\u9898\uff0c\u4e34\u65f6\u7ef4\u62a4\u4e24\u5c0f\u65f6\u5de6\u53f3")))}var w=o()({loader:function(){return a.e(2).then(a.t.bind(null,148,7))},loading:function(){return l.a.createElement(l.a.Fragment,null)}});var g=function(){return l.a.createElement(c.a,null,l.a.createElement(w,null,l.a.createElement("title",null,p)),l.a.createElement(s,null,l.a.createElement(b,null)))},N=document.getElementById("root");Object(r.render)(n.createElement(g,null),N)},78:function(e,t,a){e.exports=a(142)},83:function(e,t,a){},85:function(e,t,a){}},[[78,3,1]]]);
//# sourceMappingURL=main.2331243e.chunk.js.map