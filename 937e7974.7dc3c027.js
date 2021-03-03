(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),a=(n(0),n(146)),s={id:"console-logs",title:"Console Logs"},i={unversionedId:"features/console-logs",id:"features/console-logs",isDocsHomePage:!1,title:"Console Logs",description:"Get real time visibility on your service's instance logs to debug your app.",source:"@site/docs/features/features-console-logs.md",slug:"/features/console-logs",permalink:"/features/console-logs",version:"current",sidebar:"someSidebar",previous:{title:"Job Activity",permalink:"/features/job-history"},next:{title:"Access",permalink:"/features/access"}},l=[{value:"View Console",id:"view-console",children:[]},{value:"Console Log Format",id:"console-log-format",children:[]},{value:"Console Instance Selection",id:"console-instance-selection",children:[]},{value:"Console log search",id:"console-log-search",children:[]}],c={toc:l};function p(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Get real time visibility on your service's instance logs to debug your app.\nAs long as your app is writing logs to the console or tail, KintoHub will pick up the text and display it here.\nConsole ",Object(a.b)("strong",{parentName:"p"},"does not")," read logs files.\nOnce your service restarts, your logs will be gone forever."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Use 3rd party services like Datadog to capture your logs for long term storage and analysis."))),Object(a.b)("h2",{id:"view-console"},"View Console"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Choose your environment you are interested in viewing at the top left."),Object(a.b)("li",{parentName:"ol"},"Choose the service from the services list you are interested in editing."),Object(a.b)("li",{parentName:"ol"},"Click on the ",Object(a.b)("strong",{parentName:"li"},"Console")," tab in the upper center of the screen.")),Object(a.b)("p",null,Object(a.b)("img",{alt:"console",src:n(253).default})),Object(a.b)("h2",{id:"console-log-format"},"Console Log Format"),Object(a.b)("p",null,"KintoHub displays logs in the following format in the console tab of your service."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"TIME         INSTANCE ID    MESSAGE\n---------------------------------------------------------\n07:06:27 PM  backend-vwq7k  Hello World\n")),Object(a.b)("p",null,"KintoHub Manages the ",Object(a.b)("strong",{parentName:"p"},"time stamp")," on the far left and the inserts the ",Object(a.b)("strong",{parentName:"p"},"instance id")," before displaying your app's message.\nTimestamps are translated to your local browser time."),Object(a.b)("h2",{id:"console-instance-selection"},"Console Instance Selection"),Object(a.b)("p",null,"An instance is a running version of your app.\nMany versions or many of the same version of your app may be running simultaneously due to ",Object(a.b)("strong",{parentName:"p"},"Auto Scale")," or ",Object(a.b)("strong",{parentName:"p"},"Deploying")," a new service."),Object(a.b)("p",null,"By default, ",Object(a.b)("strong",{parentName:"p"},"Console")," will select ",Object(a.b)("strong",{parentName:"p"},"All Instances")," and aggregate all your app's logs into a single view.\nWhen you wish to drill down to a specific instance of your app, you may select it at the top left."),Object(a.b)("h2",{id:"console-log-search"},"Console log search"),Object(a.b)("p",null,"You may search your logs by typing in the ",Object(a.b)("strong",{parentName:"p"},"Search")," bar at the top right of the console view.\nThe search will highlight and inform you of how many successful search results have been found.\nIf you wish to see only the lines that contain the text you have input into the ",Object(a.b)("strong",{parentName:"p"},"Search")," bar, you may click to toggle the ",Object(a.b)("inlineCode",{parentName:"p"},"lines")," icon to the right of the ",Object(a.b)("strong",{parentName:"p"},"Search")," bar.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"lines")," toggle will filter your logs to only show you what you have searched for."),Object(a.b)("p",null,Object(a.b)("img",{alt:"Lines Toggle",src:n(254).default})))}p.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||b[g]||a;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/console-4626c59d99ebb75730e77c806c69cb6d.png"},254:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/lines-toggle-b58989f9ece5fd56526062c42a9b654b.png"}}]);