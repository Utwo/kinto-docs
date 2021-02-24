(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(142)),c={id:"access",title:"Access"},i={unversionedId:"features/access",id:"features/access",isDocsHomePage:!1,title:"Access",description:"When developing your app, you may have one or many services speaking to each other through a public API or internal API endpoint.",source:"@site/docs/features/features-access.md",slug:"/features/access",permalink:"/features/access",version:"current",sidebar:"someSidebar",previous:{title:"Console Logs",permalink:"/features/console-logs"},next:{title:"Custom Domains",permalink:"/features/domains"}},s=[{value:"View Access Information",id:"view-access-information",children:[]},{value:"How It Works?",id:"how-it-works",children:[{value:"Postgres",id:"postgres",children:[]}]}],l={toc:s};function b(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When developing your app, you may have one or many services speaking to each other through a public API or internal API endpoint."),Object(o.b)("h2",{id:"view-access-information"},"View Access Information"),Object(o.b)("p",null,"Not all services can be accessed. ",Object(o.b)("a",{parentName:"p",href:"/service-types/job"},"Jobs")," and ",Object(o.b)("a",{parentName:"p",href:"/service-types/backend-worker"},"Background Workers")," do not have any accessible endpoints."),Object(o.b)("p",null,"The following service types will have an ",Object(o.b)("strong",{parentName:"p"},"Access Tab")," available."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Web App"),Object(o.b)("li",{parentName:"ul"},"Backend API"),Object(o.b)("li",{parentName:"ul"},"Postgres - From Catalog")),Object(o.b)("p",null,"The service access tab is located in the ",Object(o.b)("strong",{parentName:"p"},"Service View"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new service or click on a Service in your ",Object(o.b)("a",{parentName:"li",href:"/features/environment"},"Environment")),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("inlineCode",{parentName:"li"},"Access")," tab")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Access",src:n(167).default})),Object(o.b)("h2",{id:"how-it-works"},"How It Works?"),Object(o.b)("p",null,"In the Access Tab, you will have all the available options to access your service."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Internal hostnames")," are generated from the ",Object(o.b)("inlineCode",{parentName:"li"},"{service-name}"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"External hostnames")," are generated by ",Object(o.b)("inlineCode",{parentName:"li"},"{service-name}"),"-",Object(o.b)("inlineCode",{parentName:"li"},"{5-character-environment-hash}"),".kinto.io",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Example: ",Object(o.b)("inlineCode",{parentName:"li"},"backendapi-5j39f.kinto.io"))))),Object(o.b)("p",null,"If you wish to customize your external hostname, you may set up a ",Object(o.b)("a",{parentName:"p",href:"/features/domains"},"Custom Domain"),"."),Object(o.b)("h3",{id:"postgres"},"Postgres"),Object(o.b)("p",null,"Postgres has additional access information that is generated for usage."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Connection String Admin")," - a Postgres friendly connection URI for the root user."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Connection String User")," - a Postgres friendly connection URI for user-specified when creating the service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Root Password")," - the password for the root user ",Object(o.b)("strong",{parentName:"li"},"postgres"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Username")," - the username specified when creating the service."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Password")," - the password for ",Object(o.b)("strong",{parentName:"li"},"username")," specified when creating the service")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Connections",src:n(267).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you programmatically change the Postgres user or password data, the information on KintoHub will be ",Object(o.b)("strong",{parentName:"p"},"out of sync")," and unuseable."))))}b.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/access-tab-5502f7ccfff7d1d7d4118115ecc8235b.png"},267:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/connections-3bf47dac1617cd86ffe355920902328d.png"}}]);