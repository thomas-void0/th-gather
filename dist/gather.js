var gather=function(){"use strict";var t=function(){return t=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},t.apply(this,arguments)};function e(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}function r(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}var o="$$_th_gather",i=["key","o","ua","ul","ct","vp","sr","logId","gmt","dpr","rf"],a=function(){function t(t){this.value=t}return t.prototype.set=function(t){this.value=t},t.prototype.get=function(){return this.value},t.prototype.clear=function(){this.value=null},t}();function s(t){return"function"==typeof t}var c=function(t){var e=t?new Date(t):new Date;return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds(),":").concat(e.getMilliseconds())};function u(t,e,n){for(var r=[],o=Math.max(t.length,e.length),i=0,a=0;a<o||i;){var s=i+(a<t.length?t[a]:0)+(a<e.length?e[a]:0);r.push(s%n),i=Math.floor(s/n),a++}return r}function f(t,e,n){if(t<0)return null;if(0==t)return[];for(var r=[],o=e;1&t&&(r=u(r,o,n)),0!=(t>>=1);)o=u(o,o,n);return r}function d(t,e,n){var r=function(t,e){for(var n=t.split(""),r=[],o=n.length-1;o>=0;o--){var i=parseInt(n[o],e);if(isNaN(i))return null;r.push(i)}return r}(t,e);if(null===r)return null;for(var o=[],i=[1],a=0;a<r.length;a++)r[a]&&(o=u(o,f(r[a],i,n),n)),i=f(e,i,n);var s="";for(a=o.length-1;a>=0;a--)s+=o[a].toString(n);return s}var l=new class{constructor(t){t=t||{},this.seq=0,this.mid=(t.mid||1)%1023,this.offset=t.offset||0,this.lastTime=0}generate(){const t=Date.now(),e=(t-this.offset).toString(2);this.lastTime==t?(this.seq++,this.seq>4095&&(this.seq=0)):this.seq=0,this.lastTime=t;let n=this.seq.toString(2),r=this.mid.toString(2);for(;n.length<12;)n="0"+n;for(;r.length<10;)r="0"+r;const o=e+r+n;let i="";for(let t=o.length;t>0;t-=4)i=parseInt(o.substring(t-4,t),2).toString(16)+i;return"0x"===(a=i).substring(0,2)&&(a=a.substring(2)),d(a=a.toLowerCase(),16,10);var a}}({mid:42,offset:1639872e6});var h=!1;function v(e){var n,i=window[o],a=i.beforeSendMsg,s=i.isLog,u=i.headers,f=i.store,d=t(t({},function(){var e,n,r,i,a,s=window.navigator.connection,u=window[o],f=u.gatherKeys,d=u.merge,h={key:window[o].projectKey,o:window.location.href,ua:(n=window.navigator.userAgent,r=n.indexOf("("),i=n.indexOf(")")+1,a=navigator.userAgent.toLocaleLowerCase(),e=n.substring(r,i),n.indexOf("Trident")>-1?e+" IE":/Presto/i.test(n)?e+" opera":/Chrome\/([\d.]+)/.test(n)||/CriOS\/([\d.]+)/.test(n)?e+" chrome":/safari/i.test(n)&&!/Chrome/i.test(n)?e+" safari":n.indexOf("AppleWebKit")>-1?e+" safari or chrome":n.indexOf("Gecko")>-1&&-1===n.indexOf("KHTML")?e+" firefox":/micromessenger/i.test(n)?e+" wechat":a.match(/tencenttraveler/)||a.match(/qqbrowse/)?e+" qq":e+" none"),ul:window.navigator.language,ct:s?s.effectiveType:"",vp:(document.documentElement.clientWidth||document.body.clientWidth)+"*"+(document.documentElement.clientHeight||document.body.clientHeight),sr:screen.width+"*"+screen.height,logId:l.generate(),gmt:c(),dpr:window.devicePixelRatio,rf:document.referrer},v=d?t({},d):{};return f.reduce((function(t,e){return h[e]&&(t[e]=h[e]),t}),v)}()),e),v=a?a(d):d;s&&(n=v,console.log(n));var p=function(t){var e=window[o],n=e.store,i=e.frequency,a=r(r([],n.get()||[],!0),[t],!1);if(a.length>=i)return a;n.set(a)}(v);if(p&&!h){h=!0;var w=new FormData;w.append("value",JSON.stringify(p)),fetch(window[o].url,{credentials:"include",method:"post",body:w,headers:u}).then((function(){h=!1,f.clear()})).catch((function(t){h=!1,console.log(t)}))}}var p=function(){return setTimeout((function(){return v(function(){var t=window.performance.timing;if("function"==typeof window.PerformanceNavigationTiming)try{var e=window.performance.getEntriesByType("navigation")[0];e&&(t=e)}catch(t){}return{type:"performance",dns:t.domainLookupEnd-t.domainLookupStart,tcp:t.connectEnd-t.connectStart,ttfb:t.responseStart-t.fetchStart,bt:t.domInteractive-t.fetchStart,dt:t.domComplete-t.domInteractive,drt:t.domContentLoadedEventEnd-t.fetchStart,rt:t.responseEnd-t.responseStart,lt:t.loadEventEnd-t.fetchStart,nv:window.performance.navigation.type}}())}),300)};var w=function(t){return v(function(t){return{type:"error",st:"promise",msg:t.reason,file:""}}(t))};function g(t,e){var n={};for(var r in t)n[r]=t[r];return n.target=n.currentTarget=e,n}var y,m=["load","loadend","timeout","error","readystatechange","abort"],x=m[0],b=m[1],E=m[2],S=m[3],q=m[4],L=m[5];function T(t){return t.watcher||(t.watcher=document.createElement("a"))}function O(t,e){var n,r=t.getProxy(),o="on"+e+"_",i=g({type:e},r);r[o]&&r[o](i),"function"==typeof Event?n=new Event(e,{bubbles:!1}):(n=document.createEvent("Event")).initEvent(e,!1,!0),T(t).dispatchEvent(n)}function H(t){this.xhr=t,this.xhrProxy=t.getProxy()}function P(t){function e(t){H.call(this,t)}return e.prototype=Object.create(H.prototype),e.prototype.next=t,e}H.prototype=Object.create({resolve:function(t){var e=this.xhrProxy,n=this.xhr;e.readyState=4,n.resHeader=t.headers,e.response=e.responseText=t.response,e.statusText=t.statusText,e.status=t.status,O(n,q),O(n,x),O(n,b)},reject:function(t){this.xhrProxy.status=0,O(this.xhr,t.type),O(this.xhr,b)}});var R=P((function(t){var e=this.xhr;for(var n in t=t||e.config,e.withCredentials=t.withCredentials,e.open(t.method,t.url,!1!==t.async,t.user,t.password),t.headers)e.setRequestHeader(n,t.headers[n]);e.send(t.body)})),j=P((function(t){this.resolve(t)})),C=P((function(t){this.reject(t)}));function M(t){var e=t.onRequest,n=t.onResponse,r=t.onError;function o(t,e,n){var o=new C(t),i={config:t.config,error:n};r?r(i,o):o.next(i)}function i(){return!0}function a(t,e){return o(t,0,e),!0}function s(t,e){return 4===t.readyState&&0!==t.status?function(t,e){var r=new j(t);if(!n)return r.resolve();var o={response:e.response,status:e.status,statusText:e.statusText,config:t.config,headers:t.resHeader||t.getAllResponseHeaders().split("\r\n").reduce((function(t,e){if(""===e)return t;var n=e.split(":");return t[n.shift()]=function(t){return t.replace(/^\s+|\s+$/g,"")}(n.join(":")),t}),{})};n(o,r)}(t,e):4!==t.readyState&&O(t,q),!0}return function(t){function e(e){return function(){var n=this.hasOwnProperty(e+"_")?this[e+"_"]:this.xhr[e],r=(t[e]||{}).getter;return r&&r(n,this)||n}}function n(e){return function(n){var r=this.xhr,o=this,i=t[e];if("on"===e.substring(0,2))o[e+"_"]=n,r[e]=function(i){i=g(i,o),t[e]&&t[e].call(o,r,i)||n.call(o,i)};else{var a=(i||{}).setter;n=a&&a(n,o)||n,this[e+"_"]=n;try{r[e]=n}catch(t){}}}}function r(e){return function(){var n=[].slice.call(arguments);if(t[e]){var r=t[e].call(this,n,this.xhr);if(r)return r}return this.xhr[e].apply(this.xhr,n)}}return window._rxhr=window._rxhr||XMLHttpRequest,XMLHttpRequest=function(){var t=new window._rxhr;for(var o in t){var i="";try{i=typeof t[o]}catch(t){}"function"===i?this[o]=r(o):Object.defineProperty(this,o,{get:e(o),set:n(o),enumerable:!0})}var a=this;t.getProxy=function(){return a},this.xhr=t},window._rxhr}({onload:i,onloadend:i,onerror:a,ontimeout:a,onabort:a,onreadystatechange:function(t){return s(t,this)},open:function(t,n){var r=this,i=n.config={headers:{}};i.method=t[0],i.url=t[1],i.async=t[2],i.user=t[3],i.password=t[4],i.xhr=n;var a="on"+q;n[a]||(n[a]=function(){return s(n,r)});var c=function(t){o(n,0,g(t,r))};if([S,E,L].forEach((function(t){var e="on"+t;n[e]||(n[e]=c)})),e)return!0},send:function(t,n){var r=n.config;if(r.withCredentials=n.withCredentials,r.body=t[0],e){var o=function(){e(r,new R(n))};return!1===r.async?o():setTimeout(o),!0}},setRequestHeader:function(t,e){return e.config.headers[t[0].toLowerCase()]=t[1],!0},addEventListener:function(t,e){var n=this;if(-1!==m.indexOf(t[0])){var r=t[1];return T(e).addEventListener(t[0],(function(e){var o=g(e,n);o.type=t[0],o.isTrusted=!0,r.call(n,o)})),!0}},getAllResponseHeaders:function(t,e){var n=e.resHeader;if(n){var r="";for(var o in n)r+=o+": "+n[o]+"\r\n";return r}},getResponseHeader:function(t,e){var n=e.resHeader;if(n)return n[(t[0]||"").toLowerCase()]}})}function D(){!function(t){if(y)throw"Proxy already exists";y=new M(t)}({onRequest:function(t,e){t.headers.rq=Date.now(),e.next(t)},onError:function(t,e){return e.next(t)},onResponse:function(t,e){var n,r,o,i,a,s,u;v((r=(n=t).config||{},o=r.url,i=r.headers,a=i?i.rq:0,s=o?o.split("?")[0]:"",u=Date.now(),{type:"interface",url:s,rq:c(a),rp:c(u),cd:n.status||0,tc:u-a})),e.next(t)}})}var _=function(t){var e,n;t instanceof ErrorEvent?v({type:"error",st:"js",file:(n=t).filename,line:n.lineno,col:n.colno,msg:n.message}):(null===(e=t.target)||void 0===e?void 0:e.src)!==window.location.href&&v(function(t){return{type:"error",st:"resource",file:t.target.src,msg:t.target.outerHTML}}(t))},k=function(t){var e=history[t],n=new Event(t);return function(){var t=e.apply(this,arguments);return window.dispatchEvent(n),t}};return function(r){return e(this,void 0,void 0,(function(){var e,c,u,f,d;return n(this,(function(n){switch(n.label){case 0:if(window[o])throw new Error("just initialized once");if(e=r.projectKey,c=r.url,u=r.beforeInit,f=r.mergeMsg,!e)throw new Error("params error，'projectKey' is required");if(!c)throw new Error("params error，'url' is required");return window[o]=t({store:new a([])},r),r.frequency||(window[o].frequency=10),r.gatherKeys||(window[o].gatherKeys=i),s(u)&&u(),s(f)?(d=window[o],[4,f()]):[3,2];case 1:d.merge=n.sent(),n.label=2;case 2:return function(){var t=window[o],e=t.isDiscard,n=void 0===e||e,r=t.isRoutes,i=void 0===r||r,a=t.isPerformance,s=void 0===a||a,c=t.isPromiseError,u=void 0===c||c,f=t.isResourceError,d=void 0===f||f,l=t.isRequest;(void 0===l||l)&&D();d&&window.addEventListener("error",_,!0);u&&window.addEventListener("unhandledrejection",w,!1);s&&window.addEventListener("load",p,!1);n&&window.addEventListener("unload",(function(){var t=window[o],e=t.beforeSendMsg,n=t.url,r=t.store;if("sendBeacon"in window.navigator){var i=r.get(),a=e?i.filter((function(t){return e(t)})):i,s=new FormData;s.append("value",JSON.stringify(a)),window.navigator.sendBeacon(n,s),r.clear()}}));i&&(h="",g=Date.now(),y=function(){v({pathname:window.location.href,from:h,title:document.title,type:"pv",stay:Date.now()-g}),h=window.location.href},history.pushState=k("pushState"),history.replaceState=k("replaceState"),window.addEventListener("popstate",y),window.addEventListener("pushState",y));var h,g,y}(),[2]}}))}))}}();
