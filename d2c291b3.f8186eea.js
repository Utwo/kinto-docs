(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return v})),n.d(t,"default",(function(){return g}));var a=n(2),i=n(9),r=n(0),o=n.n(r),l=n(210),c=(n(27),n(21),n(20),n(223)),s=n(212),u=n(196),b=n.n(u),p=37,d=39;var m=function(e){var t=e.block,n=e.children,a=e.defaultValue,i=e.values,l=e.groupId,u=Object(c.a)(),m=u.tabGroupChoices,f=u.setTabGroupChoices,h=Object(r.useState)(a),O=h[0],v=h[1];if(null!=l){var j=m[l];null!=j&&j!==O&&i.some((function(e){return e.value===j}))&&v(j)}var g=function(e){v(e),null!=l&&f(l,e)},y=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:Object(s.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))};var f=function(e){return o.a.createElement("div",null,e.children)},h={id:"cli",title:"Command Line Interface (CLI)"},O={id:"features/cli",isDocsHomePage:!1,title:"Command Line Interface (CLI)",description:"KintoHub has a command line interface (CLI) which can be used to debug and interact with your services.",source:"@site/docs/features/features-cli.mdx",permalink:"/features/cli",sidebar:"someSidebar",previous:{title:"Full Stack Example",permalink:"/getting-started/fullstack-example"},next:{title:"Environment Overview",permalink:"/features/environment"}},v=[{value:"Install",id:"install",children:[]},{value:"Upgrade",id:"upgrade",children:[]},{value:"Commands",id:"commands",children:[{value:"kinto login",id:"kinto-login",children:[]},{value:"kinto env",id:"kinto-env",children:[]},{value:"kinto status",id:"kinto-status",children:[]},{value:"kinto svs environmentId",id:"kinto-svs-environmentid",children:[]},{value:"kinto teleport {--flags}",id:"kinto-teleport---flags",children:[]},{value:"kinto version",id:"kinto-version",children:[]},{value:"kinto help",id:"kinto-help",children:[]},{value:"kinto init {hostName}",id:"kinto-init-hostname",children:[]}]}],j={rightToc:v};function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"KintoHub has a command line interface (CLI) which can be used to debug and interact with your services."),Object(l.b)("p",null,"The CLI is currently an open source ",Object(l.b)("strong",{parentName:"p"},"ALPHA")," utility that we are working on.\nContributions are welcomed at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kintohub/kinto-cli"}),"kintohub/kinto-cli")),Object(l.b)("h2",{id:"install"},"Install"),Object(l.b)(m,{defaultValue:"mac",values:[{label:"Mac",value:"mac"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},Object(l.b)(f,{value:"mac",mdxType:"TabItem"},"You can install kinto-cli with the following command within your terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -L https://cli.kinto.io/install.sh | bash\n"))),Object(l.b)(f,{value:"windows",mdxType:"TabItem"},"You can install kinto-cli with the following command within your Powershell terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"iex (new-object net.webclient).downloadstring('https://cli.kinto.io/install.ps1')\n"))),Object(l.b)(f,{value:"linux",mdxType:"TabItem"},"You can install kinto-cli with the following command within your terminal:",Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"curl -L https://cli.kinto.io/install.sh | bash\n")))),Object(l.b)("h2",{id:"upgrade"},"Upgrade"),Object(l.b)("p",null,"To upgrade the CLI to the latest version, re-run the commands in the installation step."),Object(l.b)("h2",{id:"commands"},"Commands"),Object(l.b)("h3",{id:"kinto-login"},"kinto login"),Object(l.b)("p",null,"This will allow you to login to your KintoHub account"),Object(l.b)("h3",{id:"kinto-env"},"kinto env"),Object(l.b)("p",null,"Lists all environments on your account"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto env\nSUCCESS:  Available environments:\n+--------------------------+-----------------+---------------+\n|          ENV ID          |      NAME       |    REGION     |\n+--------------------------+-----------------+---------------+\n| 5f043ec54101fe821c26d7bf | dev             | North America |\n+--------------------------+-----------------+---------------+\n| 5f066e8a85baef4fb0ae8b55 | asdf            | Europe        |\n+--------------------------+-----------------+---------------+\n| 5f07c44074d9403badce5685 | test            | Asia          |\n+--------------------------+-----------------+---------------+\n| 5f081aaa6b3d7dd0cb612885 | dev2            | Asia          |\n+--------------------------+-----------------+---------------+\n| 5f0d759f16f0e82d6cf777dc | coolexample     | Asia          |\n+--------------------------+-----------------+---------------+\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in.")),Object(l.b)("h3",{id:"kinto-status"},"kinto status"),Object(l.b)("p",null,"Lists all environments that the ",Object(l.b)("inlineCode",{parentName:"p"},".git")," repository has been deployed to."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto status\nSUCCESS:  Repo is deployed to these environments:\n+----------+-----------------------------+\n| ENV  NAME |        SERVICE NAME        |\n+----------+-----------------------------+\n| dev       | backendapitemplate         |\n+----------+-----------------------------+\n| dev2      | backendapitemplate-4a5638b |\n+----------+-----------------------------+\n| dev3      | backendapitemplate-7beb0ce |\n+----------+-----------------------------+\n| dev4      | backendapitemplate-e1747df |\n+----------+-----------------------------+\n| dev5      | backendapitemplate-fc8a681 |\n+----------+-----------------------------+\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in."),Object(l.b)("li",{parentName:"ul"},"Command must be ran within a ",Object(l.b)("inlineCode",{parentName:"li"},".git")," repository")),Object(l.b)("h3",{id:"kinto-svs-environmentid"},"kinto svs ","[environmentId]"),Object(l.b)("p",null,"You will be prompted to choose an environment if the optional ",Object(l.b)("strong",{parentName:"p"},"[environmentId]")," argument was not supplied.\nThis command will list all services within the chosen environment."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Requirements")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"This command requires you to be logged in.")),Object(l.b)("h3",{id:"kinto-teleport---flags"},"kinto teleport {--flags}"),Object(l.b)("p",null,"This command will port-forward all of your remote services belonging to your ",Object(l.b)("strong",{parentName:"p"},"local git repository")," , from the chosen environment to your local machine.\nYou will be prompted to choose an environment."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"\u279c  backend-api-template git:(master) \u2717 kinto teleport\n? Select environment: dev\nINFO:     Starting Tunnel\nINFO:     > Forwarding: localhost:5360 => elixir-examples:80\nINFO:     > Forwarding: localhost:5361 => kintohub:80\nINFO:     > Forwarding: localhost:5362 => kintohub-2a5f0f2:80\nSUCCESS:  Connected!\n\nPress any key to close the tunnel\n")),Object(l.b)("h4",{id:"available-flags-"},"Available Flags :"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"--all")," : Removes local git restrictions and allows teleporting all available services inside any environment."),Object(l.b)("h3",{id:"kinto-version"},"kinto version"),Object(l.b)("p",null,"Displays the CLI version"),Object(l.b)("h3",{id:"kinto-help"},"kinto help"),Object(l.b)("p",null,"Displays a list of available commands"),Object(l.b)("h3",{id:"kinto-init-hostname"},"kinto init {hostName}"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Recommended for enterprise users only")),Object(l.b)("p",null,"Switches the target ",Object(l.b)("strong",{parentName:"p"},"KintoHub")," cluster for future CLI commands."),Object(l.b)("h4",{id:"reset-to-default-settings"},"Reset to default settings"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"kinto init default")," will reset your CLI to the default settings"))}g.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||r;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},222:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=i},223:function(e,t,n){"use strict";var a=n(0),i=n(222);t.a=function(){return Object(a.useContext)(i.a)}}}]);