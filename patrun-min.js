/* Copyright (c) 2013 Richard Rodger, MIT License, https://github.com/rjrodger/patrun */
(function(){"use strict";var n=this,e=n.patrun,r="undefined"!=typeof require,t=n._,u=n.gex;if("undefined"==typeof t){if(!r)throw new Error("patrun requires underscore, see http://underscorejs.org");t=require("underscore")}if("undefined"==typeof u){if(!r)throw new Error("patrun requires gex, see https://github.com/rjrodger/gex");u=require("gex")}var i=n.patrun=function(){var r={},i={};return r.noConflict=function(){return n.patrun=e,r},r.add=function(n,e){for(var u,o=t.keys(n).sort(),s=i,d=0;d<o.length;d++){var v=o[d],f=n[v];if(null!==f&&void 0!==f)if(u=s.v,u&&v==s.k)s=u[f]||(u[f]={});else if(s.k)if(v<s.k){var l=s.v,a=s.s;s.v={},s.s={k:s.k,v:l,s:a},s.k=v,s=s.v[f]={}}else u=s.v,s=s.s||(s.s={}),d--;else s.k=v,s.v={},s=s.v[f]={}}return void 0!==e&&s&&(s.d=e),r},r.find=function(n){var e,r=i,u=null,o=[];do{if(e=r.k,r.v){var s=r.v[n[e]];s?(r.s&&o.push(r.s),u=s.d||null,r=s):r=r.s}else r=null;null==r&&null===u&&0<o.length&&(r=o.pop())}while(r);return null===u&&0===t.keys(n).length&&void 0!==i.d&&(u=i.d),u},r.remove=function(n){var e,r=i,t=null,u=[];do if(e=r.k,r.v){var o=r.v[n[e]];o?(u.push({km:r,v:n[e]}),t=o.d,r=o):r=r.s}else r=null;while(r);if(void 0!==t){var s=u[u.length-1];s&&s.km&&s.km.v&&delete s.km.v[s.v].d}},r.findall=function(n){function e(r,i,o,s){if(r.v){var d,v,f,l=r.k,a=u(n[l]);for(var p in r.v)v=t.extend({},i),f=t.extend({},o),a.on(p)&&(v[l]=p,delete f[l],d=r.v[p],0===t.keys(f).length&&d&&d.d?s.push({match:v,data:d.d}):d&&d.v&&e(d,t.extend({},v),t.extend({},f),s));d=r.s,d&&e(d,t.extend({},v),t.extend({},f),s)}}var r=[];return e(i,{},t.extend({},n),r),r},r.toString=function(n,e){function r(n,e){for(var r=0;e>r;r++)n.push(" ")}function u(e,i,s,d){var v;if(void 0!==e.d&&(r(i,s),i.push(n(e.d)),o.push(d.join(", ")+" -> "+n(e.d))),e.k&&(i.push("\n"),r(i,s),i.push(e.k+":")),e.v){s++;for(var f in e.v)i.push("\n"),r(i,s),i.push(f+" ->"),v=t.clone(d),v.push(e.k+"="+f),u(e.v[f],i,s+1,v);e.s&&(i.push("\n"),r(i,s),i.push("* ->"),v=t.clone(d),u(e.s,i,s+1,v))}}n=t.isFunction(n)?n:function(n){return t.isFunction(n)?"<"+n.name+">":"<"+n+">"},e=t.isBoolean(arguments[0])?arguments[0]:e,e=void 0===e?!1:e;var o=[],s=[];return u(i,s,0,[]),e?s.join(""):o.join("\n")},r.inspect=r.toString,r.toJSON=function(n){return JSON.stringify(i,function(n,e){return t.isFunction(e)?"[Function]":e},n)},r};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=i),exports.patrun=i):n.patrun=i}).call(this);
//# sourceMappingURL=patrun-min.map