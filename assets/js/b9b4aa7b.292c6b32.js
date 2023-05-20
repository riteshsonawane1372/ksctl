"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1424],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:2},o="Civo",l={unversionedId:"providers/civo",id:"providers/civo",title:"Civo",description:"CIVO support for HA and managed clusters",source:"@site/docs/providers/civo.md",sourceDirName:"providers",slug:"/providers/civo",permalink:"/ksctl/docs/providers/civo",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/providers/civo.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Azure",permalink:"/ksctl/docs/providers/azure"},next:{title:"AWS",permalink:"/ksctl/docs/providers/aws"}},s={},c=[{value:"Getting credentials",id:"getting-credentials",level:2},{value:"under settings look for the profile",id:"under-settings-look-for-the-profile",level:3},{value:"copy the credentials",id:"copy-the-credentials",level:3},{value:"Current Features",id:"current-features",level:2},{value:"Cluster features",id:"cluster-features",level:3},{value:"High Avalibility cluster",id:"high-avalibility-cluster",level:4},{value:"Managed Cluster",id:"managed-cluster",level:4},{value:"Other capabilities",id:"other-capabilities",level:3},{value:"Create, Update, Delete, Switch",id:"create-update-delete-switch",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"civo"},"Civo"),(0,i.kt)("p",null,"CIVO support for HA and managed clusters"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"we need credentials to access clusters")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"these are confidential information so shouldn't be shared with anyone")),(0,i.kt)("h2",{id:"getting-credentials"},"Getting credentials"),(0,i.kt)("h3",{id:"under-settings-look-for-the-profile"},"under settings look for the profile"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7659).Z,width:"427",height:"646"}),"\n",(0,i.kt)("img",{src:r(1348).Z,width:"695",height:"311"})),(0,i.kt)("h3",{id:"copy-the-credentials"},"copy the credentials"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7850).Z,width:"750",height:"441"})),(0,i.kt)("h2",{id:"current-features"},"Current Features"),(0,i.kt)("h3",{id:"cluster-features"},"Cluster features"),(0,i.kt)("h4",{id:"high-avalibility-cluster"},"High Avalibility cluster"),(0,i.kt)("p",null,"clusters which are managed by the user not by cloud provider"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"using K3s kubernetes distribution which is lightweight\n")),(0,i.kt)("p",null,"custom components being used"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MySQL database instance"),(0,i.kt)("li",{parentName:"ul"},"HAProxy loadbalancer instance for controlplane nodes"),(0,i.kt)("li",{parentName:"ul"},"controlplane instances"),(0,i.kt)("li",{parentName:"ul"},"workerplane instances")),(0,i.kt)("h4",{id:"managed-cluster"},"Managed Cluster"),(0,i.kt)("p",null,"clusters which are managed by the cloud provider"),(0,i.kt)("h3",{id:"other-capabilities"},"Other capabilities"),(0,i.kt)("h4",{id:"create-update-delete-switch"},"Create, Update, Delete, Switch"),(0,i.kt)("admonition",{title:"Update the cluster infrastructure",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Managed cluster"),": till now it's not supported"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"HA cluster")),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"addition and deletion of new workerplane node"),(0,i.kt)("li",{parentName:"ul"},"SSH access to each cluster node (DB, LB, Controplane) ",(0,i.kt)("em",{parentName:"li"},"Public Access"),", secured by private key"),(0,i.kt)("li",{parentName:"ul"},"SSH access to each workplane ",(0,i.kt)("em",{parentName:"li"},"Private Access")," via local network, secured by private key"))))}d.isMDXComponent=!0},7659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/civo-settings-bf85c89641105285a658c372414efb60.png"},1348:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profile-befd248dc8fea75b2e51b252a3e62e83.png"},7850:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/security-api-c65c4e2dad3ba498434df7d9fb87eef0.png"}}]);