(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(142)),s={id:"postgresql",title:"PostgreSQL"},c={unversionedId:"catalogs/postgresql",id:"catalogs/postgresql",isDocsHomePage:!1,title:"PostgreSQL",description:"Postgres Database is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",source:"@site/docs/catalogs/catalog-postgresql.md",slug:"/catalogs/postgresql",permalink:"/catalogs/postgresql",version:"current",sidebar:"someSidebar",previous:{title:"MongoDB",permalink:"/catalogs/mongodb"},next:{title:"Minio",permalink:"/catalogs/minio"}},i=[{value:"Create a Postgres Database",id:"create-a-postgres-database",children:[]},{value:"Access Your Postgres Database",id:"access-your-postgres-database",children:[]},{value:"Postgres Advanced Options",id:"postgres-advanced-options",children:[{value:"Replication",id:"replication",children:[]},{value:"(Storage) Persistence",id:"storage-persistence",children:[]}]}],l={toc:i};function p(e){var t=e.components,s=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," Database is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."),Object(o.b)("h2",{id:"create-a-postgres-database"},"Create a Postgres Database"),Object(o.b)("p",null,"All Postgres servers are 100% dedicated to your environment."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Create Service")," button at the top right of your environment."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"From Catalog")," tab at the top right."),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Postgres")," option in the list."),Object(o.b)("li",{parentName:"ol"},"Enter or generate your desired ",Object(o.b)("inlineCode",{parentName:"li"},"Username")," ",Object(o.b)("inlineCode",{parentName:"li"},"Password")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Root Password")," values."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Deploy")," at the top right and wait until the release is successful."),Object(o.b)("li",{parentName:"ol"},"Once deployed, click on the ",Object(o.b)("strong",{parentName:"li"},"Access Tab")," to read the access related information.")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Access tab",src:r(167).default})),Object(o.b)("h2",{id:"access-your-postgres-database"},"Access Your Postgres Database"),Object(o.b)("p",null,"You may only access your Postgres Instance from services running in the ",Object(o.b)("strong",{parentName:"p"},"same")," environment.\nLearn more about how to connect to your Postgres Database under the ",Object(o.b)("a",{parentName:"p",href:"/features/access#postgres"},"Access Tab"),"."),Object(o.b)("h2",{id:"postgres-advanced-options"},"Postgres Advanced Options"),Object(o.b)("h3",{id:"replication"},"Replication"),Object(o.b)("p",null,"Enabling replication turns on a separate endpoint for Postgres readonly instances.\nYou can enable replication under the ",Object(o.b)("strong",{parentName:"p"},"Configurations")," tab when Creating a Postgres service.\nYou may not enable this after the service has been created.\nIt's recommended to enable Replication in ",Object(o.b)("inlineCode",{parentName:"p"},"Production")," environments or any environments you wish to decrease the chances of downtime.\nRead more about read replicas ",Object(o.b)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.1/high-availability.html"},"here"),"."),Object(o.b)("h3",{id:"storage-persistence"},"(Storage) Persistence"),Object(o.b)("p",null,"Postgres SQL has an optional ",Object(o.b)("a",{parentName:"p",href:"/features/advanced#storage-persistence"},"(Storage) Persistence")," and ",Object(o.b)("strong",{parentName:"p"},"Volume Size")," options available under the ",Object(o.b)("strong",{parentName:"p"},"Advanced Options")," Tab."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Postgres Advanced",src:r(148).default})))}p.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),d=a,g=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return r?n.a.createElement(g,c(c({ref:t},l),{},{components:r})):n.a.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},148:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/redis-advanced-635e9ef106a9ec9f9da6b886a66d219a.png"},167:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/access-tab-5502f7ccfff7d1d7d4118115ecc8235b.png"}}]);