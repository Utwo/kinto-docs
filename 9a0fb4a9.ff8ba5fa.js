(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),c=(n(0),n(210)),o={id:"rust-example",title:"Rust"},l={id:"examples/rust/rust-example",isDocsHomePage:!1,title:"Rust",description:"A sample rust app for KintoHub",source:"@site/docs/examples/rust/README.md",permalink:"/examples/rust/rust-example",sidebar:"someSidebar",previous:{title:"Flask",permalink:"/examples/flask/flask-example"},next:{title:"Elixir",permalink:"/examples/elixir/elixir-example"}},i=[{value:"\ud83d\ude80 Deploying on KintoHub",id:"-deploying-on-kintohub",children:[{value:"\ud83d\udc2c Deploying with Dockerfile",id:"-deploying-with-dockerfile",children:[]}]},{value:"\ud83d\udd28 Running locally",id:"-running-locally",children:[]},{value:"\ud83d\ude91 Support",id:"-support",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A sample rust app for ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com"}),"KintoHub")),Object(c.b)("h2",{id:"-deploying-on-kintohub"},"\ud83d\ude80 Deploying on KintoHub"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Repo:")," ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub-examples/rust"}),"https://github.com/kintohub-examples/rust")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Branch:")," master"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Language:")," Rust"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Language version:")," 1"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Build Command:")," ",Object(c.b)("inlineCode",{parentName:"li"},"cargo build --release")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Start Command:")," ",Object(c.b)("inlineCode",{parentName:"li"},"./target/release/hello-web-server")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Port:")," 3000")),Object(c.b)("p",null,"When complete, open the ",Object(c.b)("strong",{parentName:"p"},"Access")," tab and open the external URL to see your Rust example!"),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The ",Object(c.b)("strong",{parentName:"p"},"Rust")," example can be deployed using ",Object(c.b)("inlineCode",{parentName:"p"},"Dockerfile")," on KintoHub"))),Object(c.b)("h3",{id:"-deploying-with-dockerfile"},"\ud83d\udc2c Deploying with Dockerfile"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Service Type:")," Backend API"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Repo:")," ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/kintohub-examples/rust"}),"https://github.com/kintohub-examples/rust")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Branch:")," master"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Language:")," Dockerfile"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Dockerfile Name:")," Dockerfile"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Port:")," 3000")),Object(c.b)("h2",{id:"-running-locally"},"\ud83d\udd28 Running locally"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Pre-requisites:")," Rust v1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Clone the repository to a folder of choice.")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/kintohub-examples/rust\n\n$ cd rust\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Install the dependencies")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cargo build --release\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"To start the app")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ ./target/release/hello-web-server\n")),Object(c.b)("p",null,"After running this command, open ",Object(c.b)("inlineCode",{parentName:"p"},"localhost:3000")," in your browser to view the response sent."),Object(c.b)("h4",{id:"response-sent"},"Response sent"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"  Hello world\n")),Object(c.b)("h2",{id:"-support"},"\ud83d\ude91 Support"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Contact us:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.kintohub.com/contact-us"}),"https://www.kintohub.com/contact-us")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Discord:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://kintohub.com/discord"}),"https://kintohub.com/discord")))}p.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(O,l(l({ref:t},b),{},{components:n})):a.a.createElement(O,l({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<c;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);