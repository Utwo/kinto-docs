(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(145)),l={id:"nodejs-example",title:"Node"},p={unversionedId:"examples/nodejs/nodejs-example",id:"examples/nodejs/nodejs-example",isDocsHomePage:!1,title:"Node",description:"A sample node service for KintoHub",source:"@site/docs/examples/nodejs/README.md",slug:"/examples/nodejs/nodejs-example",permalink:"/examples/nodejs/nodejs-example",version:"current",sidebar:"someSidebar",previous:{title:"MySQL",permalink:"/catalogs/mysql"},next:{title:"NextJS",permalink:"/examples/nextjs/nextjs-example"}},i=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A sample node service for ",Object(o.b)("a",{parentName:"p",href:"https://kintohub.com"},"KintoHub")),Object(o.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Service Type:")," Web App"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo:")," ",Object(o.b)("a",{parentName:"li",href:"https://github.com/kintoproj/kinto-examples"},"https://github.com/kintoproj/kinto-examples")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Subfolder Path:")," ./nodejs"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Branch:")," main"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language:")," NodeJS"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Language version:")," 14"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"npm install")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Start Command:")," ",Object(o.b)("inlineCode",{parentName:"li"},"npm run prod")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Port:")," 80")),Object(o.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Pre-requisites:")," Nodejs v12+"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ git clone https://github.com/kintoproj/kinto-examples\n\n$ cd kinto-examples/nodejs\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install the dependencies")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ npm install\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To start the app")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"$ npm run start\n")),Object(o.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Slack:")," ",Object(o.b)("a",{parentName:"p",href:"https://slack.kintohub.com/"},"https://slack.kintohub.com/")))}b.isMDXComponent=!0},145:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,j=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return n?a.a.createElement(j,p(p({ref:t},c),{},{components:n})):a.a.createElement(j,p({ref:t},c))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);