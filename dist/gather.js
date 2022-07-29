var gather=function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},e.apply(this,arguments)};function t(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function n(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var r="$$_th_gather",o="$$_th_gather_list",i="$$_th_gather_merge_key",a=["key","o","ua","ul","ct","vp","sr","logId","gmt","dpr","rf"];function s(e){return"function"==typeof e}var c=function(e){var t=e?new Date(e):new Date;return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds(),":").concat(t.getMilliseconds())};function u(e,t,n){for(var r=[],o=Math.max(e.length,t.length),i=0,a=0;a<o||i;){var s=i+(a<e.length?e[a]:0)+(a<t.length?t[a]:0);r.push(s%n),i=Math.floor(s/n),a++}return r}function f(e,t,n){if(e<0)return null;if(0==e)return[];for(var r=[],o=t;1&e&&(r=u(r,o,n)),0!=(e>>=1);)o=u(o,o,n);return r}function d(e,t,n){var r=function(e,t){for(var n=e.split(""),r=[],o=n.length-1;o>=0;o--){var i=parseInt(n[o],t);if(isNaN(i))return null;r.push(i)}return r}(e,t);if(null===r)return null;for(var o=[],i=[1],a=0;a<r.length;a++)r[a]&&(o=u(o,f(r[a],i,n),n)),i=f(t,i,n);var s="";for(a=o.length-1;a>=0;a--)s+=o[a].toString(n);return s}var l=new class{constructor(e){e=e||{},this.seq=0,this.mid=(e.mid||1)%1023,this.offset=e.offset||0,this.lastTime=0}generate(){const e=Date.now(),t=(e-this.offset).toString(2);this.lastTime==e?(this.seq++,this.seq>4095&&(this.seq=0)):this.seq=0,this.lastTime=e;let n=this.seq.toString(2),r=this.mid.toString(2);for(;n.length<12;)n="0"+n;for(;r.length<10;)r="0"+r;const o=t+r+n;let i="";for(let e=o.length;e>0;e-=4)i=parseInt(o.substring(e-4,e),2).toString(16)+i;return"0x"===(a=i).substring(0,2)&&(a=a.substring(2)),d(a=a.toLowerCase(),16,10);var a}}({mid:42,offset:1639872e6}),h=function(){var t,n,o,a,s,u,f=window.navigator.connection,d=window[r].gatherKeys,h={key:window[r].projectKey,o:window.location.href,ua:(n=window.navigator.userAgent,o=n.indexOf("("),a=n.indexOf(")")+1,s=navigator.userAgent.toLocaleLowerCase(),t=n.substring(o,a),n.indexOf("Trident")>-1?t+" IE":/Presto/i.test(n)?t+" opera":/Chrome\/([\d.]+)/.test(n)||/CriOS\/([\d.]+)/.test(n)?t+" chrome":/safari/i.test(n)&&!/Chrome/i.test(n)?t+" safari":n.indexOf("AppleWebKit")>-1?t+" safari or chrome":n.indexOf("Gecko")>-1&&-1===n.indexOf("KHTML")?t+" firefox":/micromessenger/i.test(n)?t+" wechat":s.match(/tencenttraveler/)||s.match(/qqbrowse/)?t+" qq":t+" none"),ul:window.navigator.language,ct:f?f.effectiveType:"",vp:(document.documentElement.clientWidth||document.body.clientWidth)+"*"+(document.documentElement.clientHeight||document.body.clientHeight),sr:screen.width+"*"+screen.height,logId:l.generate(),gmt:c(),dpr:window.devicePixelRatio,rf:document.referrer};return d.reduce((function(e,t){return h[t]&&(e[t]=h[t]),e}),e({},(u=window.sessionStorage.getItem(i))?JSON.parse(u):{}))};var w=function(){var e=window.sessionStorage.getItem(o);return e?JSON.parse(e):[]},v=w(),p=function(e){return v.push(e),window.sessionStorage.setItem(o,JSON.stringify(v)),v.length>=window[r].frequency?v.slice(0,window[r].frequency):void 0},g=!1;function y(t){var n,o=window[r],i=o.beforeSendMsg,a=o.isLog,s=e(e({},h()),t),c=i?i(s):s;a&&(n=c,console.log(n));var u=p(c);if(u&&!g){g=!0;var f=new FormData;f.append("value",JSON.stringify(u)),fetch(window[r].url,{credentials:"include",method:"post",body:f}).then((function(){g=!1,v.splice(0,window[r].frequency),window.sessionStorage.clear()})).catch((function(e){g=!1,console.log(e)}))}}var m=function(){return setTimeout((function(){return y(function(){var e=window.performance.timing;if("function"==typeof window.PerformanceNavigationTiming)try{var t=window.performance.getEntriesByType("navigation")[0];t&&(e=t)}catch(e){}return{type:"performance",dns:e.domainLookupEnd-e.domainLookupStart,tcp:e.connectEnd-e.connectStart,ttfb:e.responseStart-e.fetchStart,bt:e.domInteractive-e.fetchStart,dt:e.domComplete-e.domInteractive,drt:e.domContentLoadedEventEnd-e.fetchStart,rt:e.responseEnd-e.responseStart,lt:e.loadEventEnd-e.fetchStart,nv:window.performance.navigation.type}}())}),300)};var x=function(e){return y(function(e){return{type:"error",st:"promise",msg:e.reason,file:""}}(e))};function b(e,t){var n={};for(var r in e)n[r]=e[r];return n.target=n.currentTarget=t,n}var E,S=["load","loadend","timeout","error","readystatechange","abort"],q=S[0],L=S[1],O=S[2],T=S[3],_=S[4],H=S[5];function P(e){return e.watcher||(e.watcher=document.createElement("a"))}function R(e,t){var n,r=e.getProxy(),o="on"+t+"_",i=b({type:t},r);r[o]&&r[o](i),"function"==typeof Event?n=new Event(t,{bubbles:!1}):(n=document.createEvent("Event")).initEvent(t,!1,!0),P(e).dispatchEvent(n)}function j(e){this.xhr=e,this.xhrProxy=e.getProxy()}function C(e){function t(e){j.call(this,e)}return t.prototype=Object.create(j.prototype),t.prototype.next=e,t}j.prototype=Object.create({resolve:function(e){var t=this.xhrProxy,n=this.xhr;t.readyState=4,n.resHeader=e.headers,t.response=t.responseText=e.response,t.statusText=e.statusText,t.status=e.status,R(n,_),R(n,q),R(n,L)},reject:function(e){this.xhrProxy.status=0,R(this.xhr,e.type),R(this.xhr,L)}});var I=C((function(e){var t=this.xhr;for(var n in e=e||t.config,t.withCredentials=e.withCredentials,t.open(e.method,e.url,!1!==e.async,e.user,e.password),e.headers)t.setRequestHeader(n,e.headers[n]);t.send(e.body)})),M=C((function(e){this.resolve(e)})),D=C((function(e){this.reject(e)}));function k(e){var t=e.onRequest,n=e.onResponse,r=e.onError;function o(e,t,n){var o=new D(e),i={config:e.config,error:n};r?r(i,o):o.next(i)}function i(){return!0}function a(e,t){return o(e,0,t),!0}function s(e,t){return 4===e.readyState&&0!==e.status?function(e,t){var r=new M(e);if(!n)return r.resolve();var o={response:t.response,status:t.status,statusText:t.statusText,config:e.config,headers:e.resHeader||e.getAllResponseHeaders().split("\r\n").reduce((function(e,t){if(""===t)return e;var n=t.split(":");return e[n.shift()]=function(e){return e.replace(/^\s+|\s+$/g,"")}(n.join(":")),e}),{})};n(o,r)}(e,t):4!==e.readyState&&R(e,_),!0}return function(e){function t(t){return function(){var n=this.hasOwnProperty(t+"_")?this[t+"_"]:this.xhr[t],r=(e[t]||{}).getter;return r&&r(n,this)||n}}function n(t){return function(n){var r=this.xhr,o=this,i=e[t];if("on"===t.substring(0,2))o[t+"_"]=n,r[t]=function(i){i=b(i,o),e[t]&&e[t].call(o,r,i)||n.call(o,i)};else{var a=(i||{}).setter;n=a&&a(n,o)||n,this[t+"_"]=n;try{r[t]=n}catch(e){}}}}function r(t){return function(){var n=[].slice.call(arguments);if(e[t]){var r=e[t].call(this,n,this.xhr);if(r)return r}return this.xhr[t].apply(this.xhr,n)}}return window._rxhr=window._rxhr||XMLHttpRequest,XMLHttpRequest=function(){var e=new window._rxhr;for(var o in e){var i="";try{i=typeof e[o]}catch(e){}"function"===i?this[o]=r(o):Object.defineProperty(this,o,{get:t(o),set:n(o),enumerable:!0})}var a=this;e.getProxy=function(){return a},this.xhr=e},window._rxhr}({onload:i,onloadend:i,onerror:a,ontimeout:a,onabort:a,onreadystatechange:function(e){return s(e,this)},open:function(e,n){var r=this,i=n.config={headers:{}};i.method=e[0],i.url=e[1],i.async=e[2],i.user=e[3],i.password=e[4],i.xhr=n;var a="on"+_;n[a]||(n[a]=function(){return s(n,r)});var c=function(e){o(n,0,b(e,r))};if([T,O,H].forEach((function(e){var t="on"+e;n[t]||(n[t]=c)})),t)return!0},send:function(e,n){var r=n.config;if(r.withCredentials=n.withCredentials,r.body=e[0],t){var o=function(){t(r,new I(n))};return!1===r.async?o():setTimeout(o),!0}},setRequestHeader:function(e,t){return t.config.headers[e[0].toLowerCase()]=e[1],!0},addEventListener:function(e,t){var n=this;if(-1!==S.indexOf(e[0])){var r=e[1];return P(t).addEventListener(e[0],(function(t){var o=b(t,n);o.type=e[0],o.isTrusted=!0,r.call(n,o)})),!0}},getAllResponseHeaders:function(e,t){var n=t.resHeader;if(n){var r="";for(var o in n)r+=o+": "+n[o]+"\r\n";return r}},getResponseHeader:function(e,t){var n=t.resHeader;if(n)return n[(e[0]||"").toLowerCase()]}})}function N(){!function(e){if(E)throw"Proxy already exists";E=new k(e)}({onRequest:function(e,t){e.headers.rq=Date.now(),t.next(e)},onError:function(e,t){return t.next(e)},onResponse:function(e,t){var n,r,o,i,a,s,u;y((r=(n=e).config||{},o=r.url,i=r.headers,a=i?i.rq:0,s=o?o.split("?")[0]:"",u=Date.now(),{type:"interface",url:s,rq:c(a),rp:c(u),cd:n.status||0,tc:u-a})),t.next(e)}})}var K=function(e){var t,n;e instanceof ErrorEvent?y({type:"error",st:"js",file:(n=e).filename,line:n.lineno,col:n.colno,msg:n.message}):(null===(t=e.target)||void 0===t?void 0:t.src)!==window.location.href&&y(function(e){return{type:"error",st:"resource",file:e.target.src,msg:e.target.outerHTML}}(e))},$=function(e){var t=history[e],n=new Event(e);return function(){var e=t.apply(this,arguments);return window.dispatchEvent(n),e}};return function(o){return t(this,void 0,void 0,(function(){var t,c,u,f,d;return n(this,(function(n){switch(n.label){case 0:if(window[r])throw new Error("just initialized once");if(t=o.projectKey,c=o.url,u=o.beforeInit,f=o.mergeMsg,!t)throw new Error("params error，'projectKey' is required");if(!c)throw new Error("params error，'url' is required");return o.frequency?window[r]=o:window[r]=e(e({},o),{frequency:10}),o.gatherKeys||(window[r].gatherKeys=a),s(u)&&u(),s(f)?[4,f()]:[3,2];case 1:d=n.sent(),window.sessionStorage.setItem(i,JSON.stringify(d)),n.label=2;case 2:return function(){var e=window[r],t=e.isDiscard,n=void 0===t||t,o=e.isRoutes,i=void 0===o||o,a=e.isPerformance,s=void 0===a||a,c=e.isPromiseError,u=void 0===c||c,f=e.isResourceError,d=void 0===f||f,l=e.isRequest;(void 0===l||l)&&N();d&&window.addEventListener("error",K,!0);u&&window.addEventListener("unhandledrejection",x,!1);s&&window.addEventListener("load",m,!1);n&&window.addEventListener("unload",(function(){if("sendBeacon"in window.navigator){var e=window[r].beforeSendMsg,t=w(),n=e?e(t):t,o=new FormData;o.append("value",JSON.stringify(n)),window.navigator.sendBeacon(window[r].url,o),window.sessionStorage.clear()}}));i&&(h="",v=Date.now(),p=function(){y({pathname:window.location.href,from:h,title:document.title,type:"pv",stay:Date.now()-v}),h=window.location.href},history.pushState=$("pushState"),history.replaceState=$("replaceState"),window.addEventListener("popstate",p),window.addEventListener("pushState",p));var h,v,p}(),[2]}}))}))}}();
