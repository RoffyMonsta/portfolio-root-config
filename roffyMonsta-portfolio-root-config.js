System.register(["single-spa"],(function(e,t){var n={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))}],execute:function(){e((()=>{var e={722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},645:e=>{"use strict";e.exports=n}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.y=t,o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var a={};return(0,o(722).s)(1),(()=>{"use strict";o.r(a);var e=o(645);function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l="undefined"!=typeof window;function f(e,n){if("object"!==t(n)||Array.isArray(n)||null===n)throw Error("Invalid ".concat(e,": received ").concat(Array.isArray(n)?"array":n," but expected a plain object"))}function d(e,n){if("boolean"!=typeof n)throw Error("Invalid ".concat(e,": received ").concat(t(n),", but expected a boolean"))}function p(e,t,n,r){if(!r){var o=Object.keys(t),a=[];o.forEach((function(e){n.indexOf(e)<0&&a.push(e)})),a.length>0&&console.warn(Error("Invalid ".concat(e,": received invalid properties '").concat(a.join(", "),"', but valid properties are ").concat(n.join(", "))))}}function m(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("string"!=typeof t||n&&""===t.trim())throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected a").concat(n?" non-blank":""," string"))}function h(e,t){if(m(e,t),t.indexOf("/")<0)throw Error("Invalid ".concat(e,": received '").concat(t,"', but expected an absolute path that starts with /"))}function v(e,n,r){if(!Array.isArray(n)&&("object"!==t(t(n))||"number"!==n.length))throw Error("Invalid ".concat(e,": received '").concat(n,"', but expected an array"));for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];for(var c=0;c<n.length;c++)r.apply(void 0,[n[c],"".concat(e,"[").concat(c,"]")].concat(a))}function y(e,t){var n;return"/"===(n="/"===e.substr(-1)?"/"===t[0]?e+t.slice(1):e+t:"/"===t[0]?e+t:e+"/"+t).substr(-1)&&n.length>1&&(n=n.slice(0,n.length-1)),n}function g(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n];return null}var b=Object.prototype.hasOwnProperty.call(e,"default")?Object.getOwnPropertyDescriptor(e,"default").value.pathToActiveWhen:e.pathToActiveWhen,w="undefined"!=typeof Symbol?Symbol():"@";function E(e,t){if(l)return e.getAttribute(t);var n=g(e.attrs,(function(e){return e.name===t.toLowerCase()}));return n?n.value:null}function N(e,t){return l?e.hasAttribute(t):e.attrs.some((function(e){return e.name===t}))}function O(e,t,n){if("application"===e.nodeName.toLowerCase()){if(e.childNodes.length>0)throw Error("<application> elements must not have childNodes. You must put in a closing </application> - self closing is not allowed");var r={type:"application",name:E(e,"name")},o=E(e,"loader");if(o)if(t.loaders&&t.loaders.hasOwnProperty(o))r.loader=t.loaders[o];else if(l)throw Error("Application loader '".concat(o,"' was not defined in the htmlLayoutData"));var a=E(e,"error");if(a)if(t.errors&&t.errors.hasOwnProperty(a))r.error=t.errors[a];else if(l)throw Error("Application error handler '".concat(o,"' was not defined in the htmlLayoutData"));return P(e,r,t),[r]}if("route"===e.nodeName.toLowerCase()){var i={type:"route",routes:[]},u=E(e,"path");u&&(i.path=u),N(e,"default")&&(i.default=!0),N(e,"exact")&&(i.exact=!0),P(e,i,t);for(var s=0;s<e.childNodes.length;s++){var f;(f=i.routes).push.apply(f,c(O(e.childNodes[s],t,n)))}return[i]}if("redirect"===e.nodeName.toLowerCase())return n.redirects[y("/",E(e,"from"))]=y("/",E(e,"to")),[];if("undefined"!=typeof Node&&e instanceof Node){if(e.nodeType===Node.TEXT_NODE&&""===e.textContent.trim())return[];if(e.childNodes&&e.childNodes.length>0){e.routes=[];for(var d=0;d<e.childNodes.length;d++){var p;(p=e.routes).push.apply(p,c(O(e.childNodes[d],t,n)))}}return[e]}if(e.childNodes){for(var m={type:e.nodeName.toLowerCase(),routes:[],attrs:e.attrs},h=0;h<e.childNodes.length;h++){var v;(v=m.routes).push.apply(v,c(O(e.childNodes[h],t,n)))}return[m]}return"#comment"===e.nodeName?[{type:"#comment",value:e.data}]:"#text"===e.nodeName?[{type:"#text",value:e.value}]:void 0}function P(e,t,n){for(var r=(E(e,"props")||"").split(","),o=0;o<r.length;o++){var a=r[o].trim();if(0!==a.length)if(t.props||(t.props={}),n.props&&n.props.hasOwnProperty(a))t.props[a]=n.props[a];else{if(l)throw Error("Prop '".concat(a,"' was not defined in the htmlLayoutData. Either remove this attribute from the HTML element or provide the prop's value"));t.props[a]=w}}}function A(e){return{bootstrap:function(){return Promise.resolve()},mount:function(t){return Promise.resolve().then((function(){t.domElement.innerHTML=e}))},unmount:function(e){return Promise.resolve().then((function(){e.domElement.innerHTML=""}))}}}function x(e){var t=e.location,n=e.routes,r=e.parentContainer,o=e.previousSibling,a=e.shouldMount,i=e.applicationContainers;return n.forEach((function(e,n){if("application"===e.type){if(a){var c,u=j(e.name);i[e.name]?c=i[e.name]:document.getElementById(u)?c=document.getElementById(u):(c=document.createElement("div")).id=u,L(c,r,o),o=c}}else if("route"===e.type)o=x({location:t,routes:e.routes,parentContainer:r,previousSibling:o,shouldMount:a&&e.activeWhen(t),applicationContainers:i});else if(e instanceof Node||"string"==typeof e.type)if(a){if(!e.connectedNode){var s=e instanceof Node?e.cloneNode(!1):S(e);e.connectedNode=s}L(e.connectedNode,r,o),e.routes&&x({location:t,routes:e.routes,parentContainer:e.connectedNode,previousSibling:null,shouldMount:a,applicationContainers:i}),o=e.connectedNode}else(l=e.connectedNode)&&(l.remove?l.remove():l.parentNode.removeChild(l)),delete e.connectedNode;var l})),o}function C(e){for(var t=e.applicationName,n=e.location,r=e.routes,o=0;o<r.length;o++){var a=r[o];if("application"===a.type){if(a.name===t)return a}else if("route"===a.type){if(a.activeWhen(n)){var i=C({applicationName:t,location:n,routes:a.routes});if(i)return i}}else if(a.routes){var c=C({applicationName:t,location:n,routes:a.routes});if(c)return c}}}function L(e,t,n){var r=n?n.nextSibling:t.firstChild;r!==e&&t.insertBefore(e,r)}function j(e){return"single-spa-application:".concat(e)}function S(e){if("#text"===e.type.toLowerCase())return document.createTextNode(e.value);if("#comment"===e.type.toLowerCase())return document.createComment(e.value);var t=document.createElement(e.type);return(e.attrs||[]).forEach((function(e){t.setAttribute(e.name,e.value)})),t.routes&&t.routes.forEach((function(e){t.appendChild(S(e))})),t}function I(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:location)["hash"===e.mode?"hash":"pathname"]}function W(e){try{return new URL(e)}catch(n){var t=document.createElement("a");return t.href=e,t}}function T(t){var n=[],r=(0,e.checkActivityFunctions)(t?W(t):location);return(0,e.getAppNames)().forEach((function(e){r.indexOf(e)<0&&n.push(e)})),n}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(i({},e),t)}function D(e){var t=o.p,n=t.endsWith("/")?"":"/",r=e.startsWith("/")?"":"/";return"".concat(t).concat(n,"assets").concat(r).concat(e)}!function(){var e="fonts";if(null===document.getElementById(e)){var t=document.createElement("style");t.innerHTML="\n\n  @font-face {\n    font-family: 'Lady Ice';\n    src: url(".concat(D("/fonts/lady-ice/lady-ice.regular.ttf"),") format('truetype');\n    font-style: normal;\n    font-weight: normal;\n  }\n\n  @font-face {\n    font-family: 'Lady Ice';\n    src: url(").concat(D("/fonts/lady-ice/lady-ice.bold.ttf"),") format('truetype');\n    font-style: normal;\n    font-weight: bold;\n  }\n\n  @font-face {\n    font-family: 'Lady Ice';\n    src: url(").concat(D("/fonts/lady-ice/lady-ice.light.ttf"),") format('truetype');\n    font-style: normal;\n    font-weight: 400;\n  }\n\n  @font-face {\n    font-family: 'Lady Ice';\n    src: url(").concat(D("/fonts/lady-ice/lady-ice.extra-light.ttf"),") format('truetype');\n    font-style: normal;\n    font-weight: 200;\n  }\n"),t.id=e,document.head.appendChild(t)}}();var k,H,R,_,B=function(e,t){if(e&&e.nodeName||"string"==typeof e){if(l&&!t&&window.singleSpaLayoutData&&(t=window.singleSpaLayoutData),"string"==typeof e){if(!l)throw Error("calling constructRoutes with a string on the server is not yet supported");if(!(e=(new DOMParser).parseFromString(e,"text/html").documentElement.querySelector("single-spa-router")))throw Error("constructRoutes should be called with a string HTML document that contains a <single-spa-router> element.")}e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("template"===e.nodeName.toLowerCase()&&(e=(e.content||e).querySelector("single-spa-router")),"single-spa-router"!==e.nodeName.toLowerCase())throw Error("single-spa-layout: The HTMLElement passed to constructRoutes must be <single-spa-router> or a <template> containing the router. Received ".concat(e.nodeName));l&&e.isConnected&&e.parentNode.removeChild(e);var n={routes:[],redirects:{}};E(e,"mode")&&(n.mode=E(e,"mode")),E(e,"base")&&(n.base=E(e,"base")),E(e,"containerEl")&&(n.containerEl=E(e,"containerEl"));for(var r=0;r<e.childNodes.length;r++){var o;(o=n.routes).push.apply(o,c(O(e.childNodes[r],t,n)))}return n}(e,t)}else if(t)throw Error("constructRoutes should be called either with an HTMLElement and layoutData, or a single json object.");return function(e){f("routesConfig",e);var t,n=e.disableWarnings;if(p("routesConfig",e,["mode","base","containerEl","routes","disableWarnings","redirects"],n),e.hasOwnProperty("containerEl")?function(e,t){if("string"==typeof t?""===t.trim():!(l&&t instanceof HTMLElement))throw Error("Invalid ".concat("routesConfig.containerEl",": received ").concat(t," but expected either non-blank string or HTMLElement"))}(0,e.containerEl):e.containerEl="body",e.hasOwnProperty("mode")||(e.mode="history"),function(e,t,n){if(n.indexOf(t)<0)throw Error("Invalid ".concat("routesConfig.mode",": received '").concat(t,"' but expected ").concat(n.join(", ")))}(0,e.mode,["history","hash"]),e.hasOwnProperty("base")?(m("routesConfig.base",e.base),e.base=(0!==(t=e.base).indexOf("/")&&(t="/"+t),"/"!==t[t.length-1]&&(t+="/"),t)):e.base="/",e.hasOwnProperty("redirects"))for(var r in f("routesConfig.redirects",e.redirects),e.redirects){var o=e.redirects[r];h("routesConfig.redirects key",r),h("routesConfig.redirects['".concat(r,"']"),o)}var a=l?window.location.pathname:"/",i="hash"===e.mode?a+"#":"";v("routesConfig.routes",e.routes,(function e(t,r,o){var a=o.parentPath,i=o.siblingActiveWhens,c=o.parentActiveWhen;if(f(r,t),"application"===t.type)p(r,t,["type","name","props","loader","error"],n),t.props&&f("".concat(r,".props"),t.props),m("".concat(r,".name"),t.name);else if("route"===t.type){p(r,t,["type","path","routes","props","default","exact"],n),t.hasOwnProperty("exact")&&d("".concat(r,".exact"),t.exact);var u,s=t.hasOwnProperty("path"),l=t.hasOwnProperty("default");if(s)m("".concat(r,".path"),t.path),u=y(a,t.path),t.activeWhen=b(u,t.exact),i.push(t.activeWhen);else{if(!l)throw Error("Invalid ".concat(r,": routes must have either a path or default property."));d("".concat(r,".default"),t.default),u=a,t.activeWhen=function(e,t){return function(n){return t(n)&&!e.some((function(e){return e(n)}))}}(i,c)}if(s&&l&&t.default)throw Error("Invalid ".concat(r,": cannot have both path and set default to true."));t.routes&&v("".concat(r,".routes"),t.routes,e,{parentPath:u,siblingActiveWhens:[],parentActiveWhen:t.activeWhen})}else{if("undefined"!=typeof Node&&t instanceof Node);else for(var h in t)"routes"!==h&&"attrs"!==h&&m("".concat(r,"['").concat(h,"']"),t[h],!1);t.routes&&v("".concat(r,".routes"),t.routes,e,{parentPath:a,siblingActiveWhens:i,parentActiveWhen:c})}}),{parentPath:i+e.base,parentActiveWhen:function(){return!0},siblingActiveWhens:[]}),delete e.disableWarnings}(e),e}('<single-spa-router>\n  <main>\n    <route default>\n      <application name="@single-spa/welcome"></application>\n    </route>\n  </main>\n</single-spa-router>\n'),U=(H=(k={routes:B,loadApp:function(e){var t=e.name;return System.import(t)}}).routes,R=k.loadApp,function e(t,n,r,o){o.forEach((function(o){"application"===o.type?(t[o.name]||(t[o.name]=[]),t[o.name].push({activeWhen:n,props:M(r,o.props),loader:o.loader})):"route"===o.type?e(t,o.activeWhen,M(r,o.props),o.routes):o.routes&&e(t,n,r,o.routes)}))}(_={},(function(){return!0}),{},H.routes),Object.keys(_).map((function(t){var n=_[t];return{name:t,customProps:function(e,t){var r=g(n,(function(e){return e.activeWhen(t)}));return r?r.props:{}},activeWhen:n.map((function(e){return e.activeWhen})),app:function(){var r;l&&(r=g(n,(function(e){return e.activeWhen(window.location)})));var o=R({name:t});return r&&r.loader?function(t,n,r){return Promise.resolve().then((function(){var o,a=j(t),i=document.getElementById(a);i||((i=document.createElement("div")).id=a,i.style.display="none",document.body.appendChild(i),o=function(){i.style.removeProperty("display"),""===i.getAttribute("style")&&i.removeAttribute("style"),window.removeEventListener("single-spa:before-mount-routing-event",o)},window.addEventListener("single-spa:before-mount-routing-event",o));var c="string"==typeof n.loader?A(n.loader):n.loader,s=(0,e.mountRootParcel)(c,{name:"application-loader:".concat(t),domElement:i});function l(){return s.unmount().then((function(){o&&o()}))}return Promise.all([s.mountPromise,r]).then((function(e){var t,n=function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),2!==n.length);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t)||u(t,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();n[0];var r=n[1];return l().then((function(){return r}))}),(function(e){return l().then((function(){throw e}))}))}))}(t,r,o):o}}}))),q=function(n){var r=n.routes,o=n.active,a=void 0===o||o,i=!1,c={};if(!r)throw Error("single-spa-layout constructLayoutEngine(opts): opts.routes must be provided. Value was ".concat(t(r)));var u=r.base.slice(0,r.base.length-1),s={isActive:function(){return i},activate:function(){i||(i=!0,l&&(window.addEventListener("single-spa:before-routing-event",d),window.addEventListener("single-spa:before-mount-routing-event",p),window.addEventListener("single-spa:routing-event",m),(0,e.addErrorHandler)(f),p()))},deactivate:function(){i&&(i=!1,l&&(window.removeEventListener("single-spa:before-routing-event",d),window.removeEventListener("single-spa:before-mount-routing-event",p),window.removeEventListener("single-spa:routing-event",m),(0,e.removeErrorHandler)(f)))}};return a&&s.activate(),s;function f(t){var n=C({applicationName:t.appOrParcelName,location:window.location,routes:r.routes});if(n&&n.error){var o=document.getElementById(j(n.name)),a="string"==typeof n.error?A(n.error):n.error;c[n.name]=(0,e.mountRootParcel)(a,{domElement:o})}setTimeout((function(){throw t}))}function d(n){var o=n.detail,a=o.cancelNavigation,i=o.newUrl,u=I(r,W(i)),s=function(t){var n=r.redirects[t];if(t===u){if(!a)throw Error("single-spa-layout: <redirect> requires single-spa@>=5.7.0");return a(),setTimeout((function(){(0,e.navigateToUrl)(n)})),{v:void 0}}};for(var l in r.redirects){var f=s(l);if("object"===t(f))return f.v}var d=[];T(i).forEach((function(e){c[e]&&(d.push(c[e].unmount()),delete c[e])})),d.length>0&&(a(),Promise.all(d).then((function(){(0,e.navigateToUrl)(i)})))}function p(){if(0===I(r).indexOf(u)){var t="string"==typeof r.containerEl?document.querySelector(r.containerEl):r.containerEl,n=(0,e.getMountedApps)().reduce((function(e,t){return e[t]=document.getElementById(j(t)),e}),{});x({location:window.location,routes:r.routes,parentContainer:t,shouldMount:!0,applicationContainers:n})}}function m(e){var t=e.detail,n=t.navigationIsCanceled,r=t.newUrl;n||T(r).forEach((function(e){var t=document.getElementById(j(e));t&&t.isConnected&&t.parentNode.removeChild(t)}))}}({routes:B,applications:U});U.forEach(e.registerApplication),q.activate(),(0,e.start)()})(),a})())}}}));
//# sourceMappingURL=roffyMonsta-portfolio-root-config.js.map