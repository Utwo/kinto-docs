(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(142)),c={id:"backend-api",title:"Backend API"},o={unversionedId:"service-types/backend-api",id:"service-types/backend-api",isDocsHomePage:!1,title:"Backend API",description:"KintoHub can host and scale any backend API for public requests or internal service to service requests.",source:"@site/docs/service-types/types-backend-api.md",slug:"/service-types/backend-api",permalink:"/service-types/backend-api",version:"current",sidebar:"someSidebar",previous:{title:"Web App",permalink:"/service-types/web-app"},next:{title:"Backend Worker",permalink:"/service-types/backend-worker"}},l=[{value:"When to use a backend API service?",id:"when-to-use-a-backend-api-service",children:[]},{value:"Backend API features",id:"backend-api-features",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"KintoHub can host and scale any backend API for public requests or internal service to service requests.\nEach backend API gets a public https endpoint and internal endpoint for communication.\nUsually, backend APIs perform business logic such as registering or authenticating users or calculating the top 100 users on a leaderboard."),Object(i.b)("h2",{id:"when-to-use-a-backend-api-service"},"When to use a backend API service?"),Object(i.b)("p",null,"If your app is serving the following protocols, you should consider using a Backend API Service:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP"),Object(i.b)("li",{parentName:"ul"},"TCP"),Object(i.b)("li",{parentName:"ul"},"Websocket endpoint")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The following protocols have not been tested."),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"HTTP/2"),Object(i.b)("li",{parentName:"ul"},"gRPC"),Object(i.b)("li",{parentName:"ul"},"TCP"),Object(i.b)("li",{parentName:"ul"},"UDP")))),Object(i.b)("h2",{id:"backend-api-features"},"Backend API features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Advance ",Object(i.b)("a",{parentName:"li",href:"/features/build-settings"},"Build")," and ",Object(i.b)("a",{parentName:"li",href:"/features/deploy"},"Deploy")," Settings.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"1st Class Languages Build and Deploy support."),Object(i.b)("li",{parentName:"ul"},"Single and Multi-Stage Dockerfile Build and Deploy support."),Object(i.b)("li",{parentName:"ul"},"Ability to service an API through a port."),Object(i.b)("li",{parentName:"ul"},"Auto scaling."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/features/metrics"},"Metrics")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/features/domains"},"Custom Domains")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/features/environment-variables"},"Environment Variables")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/features/settings#public-api"},"Public API Toggle")," protects your service to be accessed internally only or enables external access.")))}p.isMDXComponent=!0}}]);