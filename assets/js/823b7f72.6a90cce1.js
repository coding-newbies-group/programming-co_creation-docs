"use strict";(self.webpackChunkprogramming_co_creation_docs=self.webpackChunkprogramming_co_creation_docs||[]).push([[5473],{3905:(t,e,i)=>{i.d(e,{Zo:()=>d,kt:()=>m});var n=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e){if(null==t)return{};var i,n,a=function(t,e){if(null==t)return{};var i,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var o=n.createContext({}),s=function(t){var e=n.useContext(o),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},d=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var i=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,d=g(t,["components","mdxType","originalType","parentName"]),p=s(i),u=a,m=p["".concat(o,".").concat(u)]||p[u]||c[u]||r;return i?n.createElement(m,l(l({ref:e},d),{},{components:i})):n.createElement(m,l({ref:e},d))}));function m(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=i.length,l=new Array(r);l[0]=u;var g={};for(var o in e)hasOwnProperty.call(e,o)&&(g[o]=e[o]);g.originalType=t,g[p]="string"==typeof t?t:a,l[1]=g;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},4743:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>g,toc:()=>s});var n=i(7462),a=(i(7294),i(3905));const r={title:"git\u7684\u57fa\u672c\u7528\u6cd5"},l="git\u7684\u57fa\u672c\u7528\u6cd5",g={unversionedId:"extend/git-basic",id:"extend/git-basic",title:"git\u7684\u57fa\u672c\u7528\u6cd5",description:"\u4e00\u3001\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09\u653e\u8fdbgit\u7ba1\u8f96",source:"@site/docs/extend/git-basic.md",sourceDirName:"extend",slug:"/extend/git-basic",permalink:"/programming-co_creation-docs/docs/extend/git-basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extend/git-basic.md",tags:[],version:"current",frontMatter:{title:"git\u7684\u57fa\u672c\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"\u8bf4\u660e",permalink:"/programming-co_creation-docs/docs/extend/intro"},next:{title:"VSCode\u63d2\u4ef6",permalink:"/programming-co_creation-docs/docs/extend/vscode-extentions"}},o={},s=[{value:"\u4e00\u3001\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09\u653e\u8fdbgit\u7ba1\u8f96",id:"\u4e00\u628a\u672c\u5730\u4ed3\u5e93\u6587\u4ef6\u5939\u653e\u8fdbgit\u7ba1\u8f96",level:2},{value:"\u7b2c1\u6b65\uff1a\u914d\u7f6e\u81ea\u5df1\u7684git",id:"\u7b2c1\u6b65\u914d\u7f6e\u81ea\u5df1\u7684git",level:3},{value:"\u7b2c2\u6b65\uff1a\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939",id:"\u7b2c2\u6b65\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939",level:3},{value:"\u7b2c3\u6b65\uff1a\u6253\u5f00learn-git\u6587\u4ef6\u5939",id:"\u7b2c3\u6b65\u6253\u5f00learn-git\u6587\u4ef6\u5939",level:3},{value:"\u7b2c4\u6b65\uff1a\u521d\u59cb\u5316learn-git\u6587\u4ef6\u5939",id:"\u7b2c4\u6b65\u521d\u59cb\u5316learn-git\u6587\u4ef6\u5939",level:3},{value:"\u7b2c5\u6b65\uff1a\u67e5\u770blearn-git\u6587\u4ef6\u5939",id:"\u7b2c5\u6b65\u67e5\u770blearn-git\u6587\u4ef6\u5939",level:3},{value:"\u7b2c6\u6b65\uff1a\u4f7f\u7528\uff02git status\uff02\u547d\u4ee4\u67e5\u770bgit\u72b6\u6001",id:"\u7b2c6\u6b65\u4f7f\u7528git-status\u547d\u4ee4\u67e5\u770bgit\u72b6\u6001",level:3},{value:"\u7b2c7\u6b65\uff1a\u521b\u5efa\u4e00\u4e2aREADME.md\u7684\u6587\u4ef6",id:"\u7b2c7\u6b65\u521b\u5efa\u4e00\u4e2areadmemd\u7684\u6587\u4ef6",level:3},{value:"\u7b2c8\u6b65\uff1a\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684README.md\u63d0\u4ea4\u5230git\u7684\u5de5\u4f5c\u533a",id:"\u7b2c8\u6b65\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684readmemd\u63d0\u4ea4\u5230git\u7684\u5de5\u4f5c\u533a",level:3},{value:"\u7b2c9\u6b65\uff1a\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684README.md\u63d0\u4ea4\u5230git\u7ba1\u8f96",id:"\u7b2c9\u6b65\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684readmemd\u63d0\u4ea4\u5230git\u7ba1\u8f96",level:3},{value:"\u7b2c10\u6b65\uff1a\u5728\u5f39\u51fa\u6765\u7684Vs Code\u4e2d\u586b\u5199\u4fee\u6539\u5907\u6ce8",id:"\u7b2c10\u6b65\u5728\u5f39\u51fa\u6765\u7684vs-code\u4e2d\u586b\u5199\u4fee\u6539\u5907\u6ce8",level:3},{value:"\u4e8c\u3001\u5728github\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93",id:"\u4e8c\u5728github\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"\u7b2c1\u6b65\uff1a\u767b\u9646\u81ea\u5df1\u7684github\u8d26\u53f7",id:"\u7b2c1\u6b65\u767b\u9646\u81ea\u5df1\u7684github\u8d26\u53f7",level:3},{value:"\u7b2c2\u6b65\uff1a\u70b9\u53f3\u4e0a\u89d2\u7684\u201c+\u201d\u53f7",id:"\u7b2c2\u6b65\u70b9\u53f3\u4e0a\u89d2\u7684\u53f7",level:3},{value:"\u7b2c3\u6b65\uff1a\u70b9\u201cNew repository\u201d",id:"\u7b2c3\u6b65\u70b9new-repository",level:3},{value:"\u7b2c4\u6b65\uff1a\u5728\u7ea2\u6846\u5904\u4e3a\u8be5\u8fdc\u7a0b\u4ed3\u5e93\u547d\u540d\uff0c\u5982\u201clearn-git\u201d",id:"\u7b2c4\u6b65\u5728\u7ea2\u6846\u5904\u4e3a\u8be5\u8fdc\u7a0b\u4ed3\u5e93\u547d\u540d\u5982learn-git",level:3},{value:"\u7b2c5\u6b65\uff1a\u70b9\u201cCreate repository\u201d \u521b\u5efa\u4ed3\u5e93",id:"\u7b2c5\u6b65\u70b9create-repository-\u521b\u5efa\u4ed3\u5e93",level:3},{value:"\u4e09\u3001\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09\u548cgithub\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",id:"\u4e09\u628a\u672c\u5730\u4ed3\u5e93\u6587\u4ef6\u5939\u548cgithub\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",level:2},{value:"\u7b2c1\u6b65\uff1a\u9009\u62e9\u672c\u5730\u4ed3\u5e93\u548c\u521a\u521a\u5efa\u7acb\u7684github\u8fdc\u7a0b\u4ed3\u5e93\u4e4b\u95f4\u53d6\u5f97\u5173\u8054\u7684\u65b9\u5f0f",id:"\u7b2c1\u6b65\u9009\u62e9\u672c\u5730\u4ed3\u5e93\u548c\u521a\u521a\u5efa\u7acb\u7684github\u8fdc\u7a0b\u4ed3\u5e93\u4e4b\u95f4\u53d6\u5f97\u5173\u8054\u7684\u65b9\u5f0f",level:3},{value:"\u7b2c2\u6b65\uff1a\u628a\u672c\u5730\u4ed3\u5e93push\u5230github",id:"\u7b2c2\u6b65\u628a\u672c\u5730\u4ed3\u5e93push\u5230github",level:3},{value:"\u7b2c3\u6b65\uff1a\u8f93\u5165\u81ea\u5df1github\u4ed3\u5e93\u7684\u8d26\u53f7\u548c\u5bc6\u7801",id:"\u7b2c3\u6b65\u8f93\u5165\u81ea\u5df1github\u4ed3\u5e93\u7684\u8d26\u53f7\u548c\u5bc6\u7801",level:3},{value:"\u7b2c4\u6b65\uff1a\u5237\u65b0\u81ea\u5df1github\u4e0a\u7684\u201clearn-git\u201d\u4ed3\u5e93",id:"\u7b2c4\u6b65\u5237\u65b0\u81ea\u5df1github\u4e0a\u7684learn-git\u4ed3\u5e93",level:3}],d={toc:s};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"git\u7684\u57fa\u672c\u7528\u6cd5"},"git\u7684\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("h2",{id:"\u4e00\u628a\u672c\u5730\u4ed3\u5e93\u6587\u4ef6\u5939\u653e\u8fdbgit\u7ba1\u8f96"},"\u4e00\u3001\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09\u653e\u8fdbgit\u7ba1\u8f96"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u91cc\u201c\u4ed3\u5e93\u201d\u548c\u201c\u6587\u4ef6\u5939\u201d\u662f\u540c\u4e49\u8bcd\uff0c\u5efa\u4e00\u4e2a\u201c\u4ed3\u5e93\u201d\u7b49\u540c\u4e8e\u5efa\u4e00\u4e2a\u201c\u6587\u4ef6\u5939\u201d\uff0c\u7a0b\u5e8f\u5458\u4eec\u5728\u4f7f\u7528github\u65f6\uff0c\u76f8\u5bf9\u66f4\u4e60\u60ef\u7528\u201c\u4ed3\u5e93\u201d\u8fd9\u4e2a\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"\u7b2c1\u6b65\u914d\u7f6e\u81ea\u5df1\u7684git"},"\u7b2c1\u6b65\uff1a\u914d\u7f6e\u81ea\u5df1\u7684git"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"1",src:i(5140).Z,width:"1200",height:"308"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'git config --global user.name "XXX"  #\u8bf4\u660e\uff1a\u5f15\u53f7\u91cc\u9762\u586b\u81ea\u5df1\u7684github\u7528\u6237\u540d\ngit config --global user.email "XXX"   #\u8bf4\u660e\uff1a\u5f15\u53f7\u91cc\u9762\u586b\u81ea\u5df1\u6ce8\u518cgithub\u65f6\u7528\u7684\u90ae\u7bb1\ngit config --core.editor "code -w"   #\u8bf4\u660e\uff1a\u628aVisual Studio Code\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4\u7f16\u8f91\u5668\u3002Visual Studio Code\u540e\u9762\u7b80\u79f0\u4e3a\u201cVS Code\u201d\n')),(0,a.kt)("h3",{id:"\u7b2c2\u6b65\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939"},"\u7b2c2\u6b65\uff1a\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir learn-git"),"\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u201clearn-git\u201d\u7684\u6587\u4ef6\u5939"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(1230).Z,width:"1203",height:"486"})),(0,a.kt)("h3",{id:"\u7b2c3\u6b65\u6253\u5f00learn-git\u6587\u4ef6\u5939"},"\u7b2c3\u6b65\uff1a\u6253\u5f00learn-git\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"cd learn-git "),"\uff0c\u6253\u5f00\u201clearn-git\u201d\u6587\u4ef6\u5939"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7686).Z,width:"1199",height:"762"})),(0,a.kt)("h3",{id:"\u7b2c4\u6b65\u521d\u59cb\u5316learn-git\u6587\u4ef6\u5939"},"\u7b2c4\u6b65\uff1a\u521d\u59cb\u5316learn-git\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git init"),", \u521d\u59cb\u5316learn-git\u6587\u4ef6\u5939"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(495).Z,width:"1204",height:"545"})),(0,a.kt)("h3",{id:"\u7b2c5\u6b65\u67e5\u770blearn-git\u6587\u4ef6\u5939"},"\u7b2c5\u6b65\uff1a\u67e5\u770blearn-git\u6587\u4ef6\u5939"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ls"),"\uff0c\u67e5\u770blearn-git\u6587\u4ef6\u5939\u4e0b\u9762\u7684\u5185\u5bb9\uff0c\u7531\u4e8e\u662f\u521a\u521b\u5efa\uff0c\u6240\u4ee5\u5185\u5bb9\u4e3a\u7a7a\u3002"),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u4f7f\u7528\u3000",(0,a.kt)("inlineCode",{parentName:"p"},"git init"),"\u547d\u4ee4\u521d\u59cb\u5316\u201clearn-git\u201d\u6587\u4ef6\u5939\u540e\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u540e\u7f00\u4e3a.git\u7684\u9690\u85cf\u6587\u4ef6\u5939\uff0c\u4f7f\u7528\u4e00\u4e2a\u7279\u6b8a\u7684\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"ls -force"),"\uff0c\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u88ab\u9690\u85cf\u7684\u6587\u4ef6\u5939"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6617).Z,width:"1191",height:"820"})),(0,a.kt)("h3",{id:"\u7b2c6\u6b65\u4f7f\u7528git-status\u547d\u4ee4\u67e5\u770bgit\u72b6\u6001"},"\u7b2c6\u6b65\uff1a\u4f7f\u7528\uff02git status\uff02\u547d\u4ee4\u67e5\u770bgit\u72b6\u6001"),(0,a.kt)("p",null,"\u5bf9\u65b0\u624b\u6765\u8bf4\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u5f88\u91cd\u8981\uff0c\u6211\u4eec\u9700\u8981\u4ecegit\u7684\u89c6\u89d2\u89c2\u5bdf\u6587\u4ef6\u5939\u91cc\u7684\u53d8\u5316\u60c5\u51b5"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4473).Z,width:"1199",height:"491"})),(0,a.kt)("h3",{id:"\u7b2c7\u6b65\u521b\u5efa\u4e00\u4e2areadmemd\u7684\u6587\u4ef6"},"\u7b2c7\u6b65\uff1a\u521b\u5efa\u4e00\u4e2aREADME.md\u7684\u6587\u4ef6"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"code README.md"),"\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u547d\u540d\u4e3a\u201c",(0,a.kt)("a",{parentName:"p",href:"http://README.md"},"README.md"),"\u201d, \u6309\u56de\u8f66\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u542f\u52a8Vs Code\uff0c\u5728Vs Code\u754c\u9762\u4e0b\u8f93\u5165\u5185\u5bb9\uff0c\u7136\u540e\u4fdd\u5b58\uff0c\u5173\u95edVs Code"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(2104).Z,width:"1205",height:"818"})),(0,a.kt)("h3",{id:"\u7b2c8\u6b65\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684readmemd\u63d0\u4ea4\u5230git\u7684\u5de5\u4f5c\u533a"},"\u7b2c8\u6b65\uff1a\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684README.md\u63d0\u4ea4\u5230git\u7684\u5de5\u4f5c\u533a"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git add ."),"\uff08\u6ce8\u610f\uff0cadd\u540e\u9762\u6709\u4e00\u4e2a\u82f1\u6587\u6807\u70b9\u72b6\u6001\u4e0b\u201c.\u201d\uff09\uff0c\u628a\u521a\u521a\u6211\u4eec\u7f16\u8f91\u8fc7\u7684README.md\u6587\u4ef6\u63d0\u4ea4\u81f3git\u5de5\u4f5c\u533a\u3002"),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a\u63d0\u4ea4\u4e4b\u540e\uff0c\u53ef\u4ee5\u518d\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),"\u547d\u4ee4\u67e5\u770bgit\u7684\u72b6\u6001\uff0c\u89c2\u5bdf\u524d\u540e\u7684\u53d8\u5316"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6854).Z,width:"1125",height:"556"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4285).Z,width:"1123",height:"354"})),(0,a.kt)("h3",{id:"\u7b2c9\u6b65\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684readmemd\u63d0\u4ea4\u5230git\u7ba1\u8f96"},"\u7b2c9\u6b65\uff1a\u628a\u7ecf\u8fc7\u7f16\u8f91\u7684README.md\u63d0\u4ea4\u5230git\u7ba1\u8f96"),(0,a.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"\uff0c\u628a\u521a\u521a\u6211\u4eec\u7f16\u8f91\u8fc7\u7684README.md\u6587\u4ef6\u63d0\u4ea4\u7ed9git\u7ba1\u8f96\uff0c\u547d\u4ee4\u884c\u754c\u9762\u4f1a\u5f39\u51fa\u5173\u4e8e\u672c\u6b21\u63d0\u4ea4\u7684\u8bf4\u660e\u4fe1\u606f"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(4266).Z,width:"1121",height:"530"})),(0,a.kt)("h3",{id:"\u7b2c10\u6b65\u5728\u5f39\u51fa\u6765\u7684vs-code\u4e2d\u586b\u5199\u4fee\u6539\u5907\u6ce8"},"\u7b2c10\u6b65\uff1a\u5728\u5f39\u51fa\u6765\u7684Vs Code\u4e2d\u586b\u5199\u4fee\u6539\u5907\u6ce8"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(1673).Z,width:"1047",height:"625"})),(0,a.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"git commit"),"\u547d\u4ee4\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u8df3\u8f6c\u5230Vs Code\u754c\u9762\uff0c\u6211\u4eec\u9700\u8981\u5728\u7b2c\u4e00\u884c\u586b\u5199\u672c\u6b21\u4fee\u6539\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u4f8b\u5982\u6211\u5728\u8fd9\u91cc\u586b\u5199\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"the second edition"),"\uff0c\u7136\u540e\u5173\u95edVs Code\u754c\u9762\u3002"),(0,a.kt)("p",null,"\u5173\u95edVs Code\u754c\u9762\u4e4b\u540e\uff0c\u56de\u5230\u547d\u4ee4\u884c\u754c\u9762\uff0c\u518d\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"git status"),"\u547d\u4ee4\u67e5\u770bgit\u7684\u72b6\u6001\uff0c\u89c2\u5bdf\u524d\u540e\u7684\u53d8\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(3756).Z,width:"1136",height:"427"})),(0,a.kt)("h2",{id:"\u4e8c\u5728github\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93"},"\u4e8c\u3001\u5728github\u5efa\u4e00\u4e2a\u8fdc\u7a0b\u4ed3\u5e93"),(0,a.kt)("h3",{id:"\u7b2c1\u6b65\u767b\u9646\u81ea\u5df1\u7684github\u8d26\u53f7"},"\u7b2c1\u6b65\uff1a\u767b\u9646\u81ea\u5df1\u7684github\u8d26\u53f7"),(0,a.kt)("p",null,"github\u7f51\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"https://github.com/")),(0,a.kt)("h3",{id:"\u7b2c2\u6b65\u70b9\u53f3\u4e0a\u89d2\u7684\u53f7"},"\u7b2c2\u6b65\uff1a\u70b9\u53f3\u4e0a\u89d2\u7684\u201c+\u201d\u53f7"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(9363).Z,width:"1201",height:"340"})),(0,a.kt)("h3",{id:"\u7b2c3\u6b65\u70b9new-repository"},"\u7b2c3\u6b65\uff1a\u70b9\u201cNew repository\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(9936).Z,width:"1201",height:"265"})),(0,a.kt)("h3",{id:"\u7b2c4\u6b65\u5728\u7ea2\u6846\u5904\u4e3a\u8be5\u8fdc\u7a0b\u4ed3\u5e93\u547d\u540d\u5982learn-git"},"\u7b2c4\u6b65\uff1a\u5728\u7ea2\u6846\u5904\u4e3a\u8be5\u8fdc\u7a0b\u4ed3\u5e93\u547d\u540d\uff0c\u5982\u201clearn-git\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(6056).Z,width:"1200",height:"446"})),(0,a.kt)("h3",{id:"\u7b2c5\u6b65\u70b9create-repository-\u521b\u5efa\u4ed3\u5e93"},"\u7b2c5\u6b65\uff1a\u70b9\u201cCreate repository\u201d \u521b\u5efa\u4ed3\u5e93"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(7684).Z,width:"1131",height:"590"})),(0,a.kt)("p",null,"\u521b\u5efa\u4ed3\u5e93\u65f6\uff0c\u4e3a\u8fd9\u4e2a\u4ed3\u5e93\u53d6\u4e2a\u540d\u5b57\u5c31\u884c\uff0cgithub\u8fdc\u7a0b\u4ed3\u5e93\u540d\u79f0\u53ef\u4ee5\u548c\u672c\u5730\u4ed3\u5e93\u540d\u79f0\u4e00\u81f4\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4e00\u81f4\uff0c\u5bf9\u4e8e\u521d\u5b66\u8005\u6765\u8bf4\uff0c\u5efa\u8bae\u8ba9\u672c\u5730\u6587\u4ef6\u5939\u540d\u79f0\u548cgithub\u8fdc\u7a0b\u4ed3\u5e93\u540d\u79f0\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u65b9\u4fbf\u6211\u4eec\u5b66\u4e60\u3002\u4e3a\u4ed3\u5e93\u5b8c\u6210\u547d\u540d\u540e\uff0c\u5f53\u524d\u9875\u9762\u7684\u5176\u4ed6\u9009\u9879\u4fdd\u6301\u9ed8\u8ba4\u72b6\u6001\uff0c\u70b9\u51fb\u6700\u4e0b\u65b9\u7684\u201cCreate repository\u201d\u6309\u94ae\u3002"),(0,a.kt)("h2",{id:"\u4e09\u628a\u672c\u5730\u4ed3\u5e93\u6587\u4ef6\u5939\u548cgithub\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"},"\u4e09\u3001\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09\u548cgithub\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"),(0,a.kt)("h3",{id:"\u7b2c1\u6b65\u9009\u62e9\u672c\u5730\u4ed3\u5e93\u548c\u521a\u521a\u5efa\u7acb\u7684github\u8fdc\u7a0b\u4ed3\u5e93\u4e4b\u95f4\u53d6\u5f97\u5173\u8054\u7684\u65b9\u5f0f"},"\u7b2c1\u6b65\uff1a\u9009\u62e9\u672c\u5730\u4ed3\u5e93\u548c\u521a\u521a\u5efa\u7acb\u7684github\u8fdc\u7a0b\u4ed3\u5e93\u4e4b\u95f4\u53d6\u5f97\u5173\u8054\u7684\u65b9\u5f0f"),(0,a.kt)("p",null,"\u63a5\u4e0a\u9762\u6b65\u9aa4\uff0c\u70b9\u51fb\u201cCreate repository\u201d\u4e4b\u540e\uff0c\u4f1a\u5f39\u51fa\u4e00\u4e2a\u9875\u9762\uff0c\u4ece\u4e0a\u5230\u4e0b\u6709\u4e09\u4e2a\u9009\u9879\uff0c\u5206\u522b\u662f\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2026or create a new repository on the command line\uff08","*","*\u4f7f\u7528\u547d\u4ee4\u884c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4ed3\u5e93","*","*\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'echo "# leran-git" >> README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin <https://github.com/AndyZhou6688/leran-git.git>\ngit push -u origin main\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2026or push an existing repository from the command line\uff08\u628a\u73b0\u5b58\u7684\u672c\u5730\u4ed3\u5e93push\u5230github\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git remote add origin <https://github.com/AndyZhou6688/leran-git.git>\ngit branch -M main\ngit push -u origin main\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2026or import code from another repository\uff08\u4ece\u5176\u4ed6\u4ed3\u5e93import\u4ee3\u7801\uff09")),(0,a.kt)("p",null,"You can initialize this repository with code from a Subversion, Mercurial, or TFS project."),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u4e2d\u91c7\u7528\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd"),"\u65b9\u5f0f\uff0c\u5373\u201c",(0,a.kt)("strong",{parentName:"p"},"\u2026or push an existing repository from the command line\uff08\u628a\u73b0\u5b58\u7684\u672c\u5730\u4ed3\u5e93push\u5230github\uff09"),"\u201d"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://gitee.com/andy116688/Typora/raw/master/img/image-20230223164514422.png",alt:"image-20230223164514422"})),(0,a.kt)("h3",{id:"\u7b2c2\u6b65\u628a\u672c\u5730\u4ed3\u5e93push\u5230github"},"\u7b2c2\u6b65\uff1a\u628a\u672c\u5730\u4ed3\u5e93push\u5230github"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"git remote add origin <https://github.com/AndyZhou6688/leran-git.git>\ngit branch -M main\ngit push -u origin main\n")),(0,a.kt)("p",null,"\u5728\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e0b\uff08\u521a\u521a\u521b\u5efa\u7684README.md\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\uff09\uff0c\u8fd9\u70b9\u5f88\u91cd\u8981\uff0c\u5343\u4e07\u4e0d\u8981\u5f04\u9519\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git remote add origin https://github.com/AndyZhou6688/leran-git.git"),"\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\u662f\uff1a\u8ba9\u672c\u5730\u521b\u5efa\u7684\u4ed3\u5e93\u548cgithub\u4e0a\u521b\u5efa\u7684\u90a3\u4e2a\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054\u8d77\u6765\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git push -u origin main"),"\u8fd9\u53e5\u8bdd\u7684\u610f\u601d\u662f\u628a\u672c\u5730\u4ed3\u5e93\uff08\u6587\u4ef6\u5939\uff09push\uff08\u63a8\uff09\u4e0agithub\u8fdc\u7a0b\u4ed3\u5e93"),(0,a.kt)("h3",{id:"\u7b2c3\u6b65\u8f93\u5165\u81ea\u5df1github\u4ed3\u5e93\u7684\u8d26\u53f7\u548c\u5bc6\u7801"},"\u7b2c3\u6b65\uff1a\u8f93\u5165\u81ea\u5df1github\u4ed3\u5e93\u7684\u8d26\u53f7\u548c\u5bc6\u7801"),(0,a.kt)("p",null,"\u5982\u679c\u914d\u7f6e\u4e86SSH\u767b\u5f55\uff0c\u53ef\u4ee5\u7701\u53bb\u8fd9\u4e2a\u6b65\u9aa4\u3002"),(0,a.kt)("h3",{id:"\u7b2c4\u6b65\u5237\u65b0\u81ea\u5df1github\u4e0a\u7684learn-git\u4ed3\u5e93"},"\u7b2c4\u6b65\uff1a\u5237\u65b0\u81ea\u5df1github\u4e0a\u7684\u201clearn-git\u201d\u4ed3\u5e93"),(0,a.kt)("p",null,"\u5237\u65b0\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u5728\u672c\u5730\u521b\u5efa\u7684\u201cREADME.md\u201d\u6587\u4ef6\u663e\u793a\u5728github\u4e2d\u201clearn-git\u201d\u8fd9\u4e2a\u4ed3\u5e93\u91cc\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(9089).Z,width:"1199",height:"473"})),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5b8c\u6210\u4e86\u4ee5\u4e0a\u5168\u90e8\u7684\u6b65\u9aa4\uff0c\u606d\u559c\uff0c\u60a8\u53c8\u5b66\u4f1a\u4e86\u4e00\u9879\u65b0\u6280\u80fd\uff01"))}p.isMDXComponent=!0},5140:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/1-eb2a0c4a818cb75538800f51ea200e5f.png"},3756:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/10-1-f75b65bc03bb0f402e83d471f0948eb6.png"},1673:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/10-8a133678186e9a4253777d0846e1dae5.png"},9363:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/11-83e741fffb203609484ca91dac049d45.png"},9936:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/12-61817db4390e1ebec23c9f11dcb98e87.png"},6056:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/13-bcb3ab2b86ef328f452107fe8058dba1.png"},7684:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/14-288a9b50bb9010b95e2204d40284692a.png"},9089:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/15-78d72c923bf99ad745ceb50af913be91.png"},1230:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/2-e40635faf1cd768c5ec1c39f19e19662.png"},7686:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/3-54775426592a58edd7072d31915c1a18.png"},495:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/4-fdd01147c73a9b1460260447a306a3c8.png"},6617:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/5-983700dde41c9a228e20725ac84a832e.png"},4473:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/6-079c4c47865b854c3d8af55a55942f6c.png"},2104:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/7-ab55cbd65e0df71989c95f7b3fc31192.png"},6854:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/8-1-cb7bb7160d30cc0fc751fb17e49dd060.png"},4285:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/8-2-091f8a233cd03bf7199b5928ca2201ad.png"},4266:(t,e,i)=>{i.d(e,{Z:()=>n});const n=i.p+"assets/images/9-533fcbbbcfd745ab63bb1610adfd2bd3.png"}}]);