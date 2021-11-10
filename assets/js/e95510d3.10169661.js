"use strict";(self.webpackChunk_zendesk_laika_docs=self.webpackChunk_zendesk_laika_docs||[]).push([[582],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),d=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),k=r,L=s["".concat(c,".").concat(k)]||s[k]||p[k]||i;return t?n.createElement(L,o(o({ref:a},u),{},{components:t})):n.createElement(L,o({ref:a},u))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2850:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var n=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],l={id:"createLazyLoadableLaikaLink",title:"Module: createLazyLoadableLaikaLink",sidebar_label:"createLazyLoadableLaikaLink",sidebar_position:0,custom_edit_url:null},c=void 0,d={unversionedId:"api/modules/createLazyLoadableLaikaLink",id:"api/modules/createLazyLoadableLaikaLink",isDocsHomePage:!1,title:"Module: createLazyLoadableLaikaLink",description:"Functions",source:"@site/docs/api/modules/createLazyLoadableLaikaLink.md",sourceDirName:"api/modules",slug:"/api/modules/createLazyLoadableLaikaLink",permalink:"/laika/docs/api/modules/createLazyLoadableLaikaLink",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"createLazyLoadableLaikaLink",title:"Module: createLazyLoadableLaikaLink",sidebar_label:"createLazyLoadableLaikaLink",sidebar_position:0,custom_edit_url:null},sidebar:"default",previous:{title:"createGlobalLaikaLink",permalink:"/laika/docs/api/modules/createGlobalLaikaLink"},next:{title:"createLazyLoadableLink",permalink:"/laika/docs/api/modules/createLazyLoadableLink"}},u=[{value:"Functions",id:"functions",children:[{value:"createLazyLoadableLaikaLink",id:"createlazyloadablelaikalink",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2}],p={toc:u};function s(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"createlazyloadablelaikalink"},"createLazyLoadableLaikaLink"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"createLazyLoadableLaikaLink"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"ApolloLink")),(0,i.kt)("p",null,"Creates a lazy-loadable Laika Link.\nUseful when you want to use Laika Link in a production environment conditionally,\ni.e. only load it when necessary."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/typedefs.CreateLaikaLinkOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateLaikaLinkOptions")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ApolloLink")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zendesk/laika/blob/1eb7ff9/src/createLazyLoadableLaikaLink.ts#L9"},"src/createLazyLoadableLaikaLink.ts:9")))}s.isMDXComponent=!0}}]);