"use strict";(self.webpackChunkapollo_testing_toolkit_link_docs=self.webpackChunkapollo_testing_toolkit_link_docs||[]).push([[737],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=d(n),m=r,u=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return k}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],o={id:"ApolloTestingToolkit.TestingToolkitInterceptionManager",title:"Class: TestingToolkitInterceptionManager",sidebar_label:"ApolloTestingToolkit.TestingToolkitInterceptionManager",custom_edit_url:null},p=void 0,d={unversionedId:"api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager",id:"api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager",isDocsHomePage:!1,title:"Class: TestingToolkitInterceptionManager",description:"ApolloTestingToolkit.TestingToolkitInterceptionManager",source:"@site/docs/api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager.md",sourceDirName:"api/classes",slug:"/api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager",permalink:"/docs/api/classes/ApolloTestingToolkit.TestingToolkitInterceptionManager",editUrl:null,tags:[],version:"current",frontMatter:{id:"ApolloTestingToolkit.TestingToolkitInterceptionManager",title:"Class: TestingToolkitInterceptionManager",sidebar_label:"ApolloTestingToolkit.TestingToolkitInterceptionManager",custom_edit_url:null},sidebar:"default",previous:{title:"Pitfalls",permalink:"/docs/pitfalls"},next:{title:"ApolloTestingToolkit.InterceptApi",permalink:"/docs/api/classes/ApolloTestingToolkit.InterceptApi"}},s=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"log",id:"log",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"intercept",id:"intercept",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"modifyRemote",id:"modifyremote",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],c={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/ApolloTestingToolkit"},"ApolloTestingToolkit"),".TestingToolkitInterceptionManager"),(0,i.kt)("p",null,"Class responsible for managing interceptions.\nBy default a singleton is installed on ",(0,i.kt)("inlineCode",{parentName:"p"},"globalThis")," (usually ",(0,i.kt)("inlineCode",{parentName:"p"},"window"),") under ",(0,i.kt)("inlineCode",{parentName:"p"},"apolloTestingToolkit"),"."),(0,i.kt)("p",null,"Read more in the ",(0,i.kt)("a",{parentName:"p",href:"../modules/ApolloTestingToolkit"},"module page")," or scroll down to see it's functionality."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.apolloTestingToolkit.log.startLogging();\n")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new TestingToolkitInterceptionManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"globalPropertyName"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"globalPropertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/apollo-testing-toolkit-link/blob/4030f12/src/interceptionManager.ts#L82"},"src/interceptionManager.ts:82")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"log"},"log"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"log"),": ",(0,i.kt)("a",{parentName:"p",href:"ApolloTestingToolkit.LogApi"},(0,i.kt)("inlineCode",{parentName:"a"},"LogApi"))),(0,i.kt)("p",null,"A set of functions that controls logging and recording of all (or selected) operations."),(0,i.kt)("p",null,"Read more on the ",(0,i.kt)("a",{parentName:"p",href:"ApolloTestingToolkit.LogApi"},"LogApi")," page."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"window.apolloTestingToolkit.log.startLogging();\n")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/apollo-testing-toolkit-link/blob/4030f12/src/interceptionManager.ts#L427"},"src/interceptionManager.ts:427")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"intercept"},"intercept"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"intercept"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"matcher?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"connectFutureLinksOrMitmFn?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keepNonSubscriptionConnectionsOpen?"),"): ",(0,i.kt)("a",{parentName:"p",href:"ApolloTestingToolkit.InterceptApi"},(0,i.kt)("inlineCode",{parentName:"a"},"InterceptApi"))),(0,i.kt)("p",null,"Provides functionality to intercept, and optionally mock or modify each operation's subscription.\nThe API returned is heavily inspired on jest's mocking functionality (",(0,i.kt)("inlineCode",{parentName:"p"},"jest.fn()"),")\nand is described in length here: ",(0,i.kt)("a",{parentName:"p",href:"ApolloTestingToolkit.InterceptApi"},"InterceptApi"),"."),(0,i.kt)("p",null,"Every interceptor you create should be as specific as needed in a given session.\nAt the very least, ensure the order of creating interceptors is from most specific, to least specific."),(0,i.kt)("p",null,"This is because any operations that are executed by your client will end up\nbeing intercepted by the ",(0,i.kt)("strong",{parentName:"p"},"first")," interceptor that matches\nthe constraints of the ",(0,i.kt)("a",{parentName:"p",href:"../modules/typedefs#matcher"},"Matcher"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/pitfalls"},(0,i.kt)("em",{parentName:"a"},"Pitfalls"))," for more information."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const getActiveUsersInterceptor = apolloTestingToolkit.intercept({\n  clientName: 'users',\n  operationName: 'getActiveUsers',\n});\n")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matcher?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#matcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Matcher"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","[include:matcher.md]","]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"connectFutureLinksOrMitmFn")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#maninthemiddlefn"},(0,i.kt)("inlineCode",{parentName:"a"},"ManInTheMiddleFn"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, future links will still be called (e.g. reach the backend) and return responses. If set to a function, can serve for man-in-the-middle tinkering with the result.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keepNonSubscriptionConnectionsOpen")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:"left"},"If true, queries and mutations will behave a little like subscriptions, in that you will be able to fire updates even after the initial response. Experimental.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"ApolloTestingToolkit.InterceptApi"},(0,i.kt)("inlineCode",{parentName:"a"},"InterceptApi"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/apollo-testing-toolkit-link/blob/4030f12/src/interceptionManager.ts#L115"},"src/interceptionManager.ts:115")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"modifyremote"},"modifyRemote"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"modifyRemote"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"matcher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mapFn"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Modify backend (or mocked) responses before they reach subscribers."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"matcher")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"../modules/typedefs#matcher"},(0,i.kt)("inlineCode",{parentName:"a"},"Matcher"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"[","[include:matcher.md]","]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mapFn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"FetchResult"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Object"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"operation"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Operation"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"FetchResult"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Object"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",", ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mapping function to alter the responses.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"restore")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/apollo-testing-toolkit-link/blob/4030f12/src/interceptionManager.ts#L403"},"src/interceptionManager.ts:403")))}k.isMDXComponent=!0}}]);