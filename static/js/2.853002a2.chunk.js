(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{509:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});var n=a(0),l=a.n(n),r=a(295),i=a(5),c=a(21),u=i.f.map(function(e,t){return l.a.createElement(r.a,{fill:e,fillOpacity:1,key:"cell-".concat(t)})}),o=function(e){return e.rate>0?e.label:null},f=function(e){return e.payload.payload.rate>0?l.a.createElement(r.b,Object.assign({},e,{type:"linear",className:"recharts-pie-label-line"})):null};function s(e){var t=e.metadata,a=e.aspect,s=void 0===a?1:a,d=Object(n.useMemo)(function(){return t.rank_rates.map(function(e,t){return{label:i.g[t],rate:e}})},[t]),p=d.filter(function(e){return e.rate>0}).length<4?45:0;return l.a.createElement(r.i,{width:"100%",aspect:s,height:"auto"},l.a.createElement(r.h,null,l.a.createElement(r.g,{isAnimationActive:!1,data:d,label:o,labelLine:f,nameKey:"label",dataKey:"rate",startAngle:p,endAngle:p+360},u,l.a.createElement(r.d,{dataKey:"rate",formatter:c.a,position:"inside",fill:"#fff"}))))}}}]);
//# sourceMappingURL=2.853002a2.chunk.js.map