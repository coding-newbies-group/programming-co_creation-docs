"use strict";(self.webpackChunkprogramming_co_creation_docs=self.webpackChunkprogramming_co_creation_docs||[]).push([[3893],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),k=o,g=m["".concat(i,".").concat(k)]||m[k]||s[k]||a;return n?r.createElement(g,p(p({ref:e},c),{},{components:n})):r.createElement(g,p({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=k;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[m]="string"==typeof t?t:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5672:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Jupyter Notebook\u8f6cmarkdown"},p=void 0,l={unversionedId:"extend/ipynb-to-md",id:"extend/ipynb-to-md",title:"Jupyter Notebook\u8f6cmarkdown",description:"\u7f18\u8d77",source:"@site/docs/extend/ipynb-to-md.md",sourceDirName:"extend",slug:"/extend/ipynb-to-md",permalink:"/programming-co_creation-docs/docs/extend/ipynb-to-md",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/extend/ipynb-to-md.md",tags:[],version:"current",frontMatter:{title:"Jupyter Notebook\u8f6cmarkdown"},sidebar:"tutorialSidebar",previous:{title:"\u7f16\u7a0b\u4f5c\u4e1a\u63d0\u4ea4\u6307\u5357",permalink:"/programming-co_creation-docs/docs/extend/assignment-submit-guide"},next:{title:"Snipaste: \u4e00\u6b3e\u622a\u56fe\u795e\u5668",permalink:"/programming-co_creation-docs/docs/extend/snipaste"}},i={},u=[{value:"\u7f18\u8d77",id:"\u7f18\u8d77",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"\u66f4\u6539\u516c\u5f0f",id:"\u66f4\u6539\u516c\u5f0f",level:3}],c={toc:u};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u7f18\u8d77"},"\u7f18\u8d77"),(0,o.kt)("p",null,"\u4e3a\u4e86\u80fd\u65b9\u4fbf\u7684\u628aJupyter Notebook\u7684 .ipynb\u6587\u4ef6\u80fd\u65b9\u4fbf\u7684\u5bfc\u51fa\u5230\u5176\u4ed6\u5730\u65b9\u5c55\u793a\uff0c\u6700\u7ec8\u53d1\u73b0\u80fd\u8f6c\u6210markdown,\u8fd9\u53ef\u592a\u9999\u4e86\uff0c\u65e2\u80fd\u53d1\u6587\u7ae0\uff0c\u53c8\u80fd\u5f88\u65b9\u4fbf\u7684\u7528\u4e8e\u524d\u7aef\u7f51\u9875\u5c55\u793a\u3002"),(0,o.kt)("h3",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("p",null,"\u6253\u5f00powershell\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u628a\u9700\u8981\u8f6c\u5316\u7684jupyter\u6587\u4ef6\u514b\u9686\u5230\u672c\u5730\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6bd4\u5982\u8bf4\u6211\u4eec\u8981\u628a\u674e\u4fca\u8001\u5e08\u7684Github\u4ed3\u5e93\u514b\u9686\u5230\u672c\u5730\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/coding-newbies-group/pilot"},"https://github.com/coding-newbies-group/pilot"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311135759840.png",alt:"image-20230311135759840"})),(0,o.kt)("p",null,"\u7136\u540e\u5b89\u88c5\u8f6c\u5316\u5de5\u5177\uff1apip install nbconvert"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311135850001.png",alt:"image-20230311135850001"})),(0,o.kt)("p",null,"\u5982\u679c\u8fd9\u4e00\u6b65\u62a5\u9519\u4e86\uff0c\u8bf7\u5c1d\u8bd5 \u66f4\u65b0pip\u7248\u672c\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u66f4\u65b0"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"python -m pip install --upgrade pip")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311135929006.png",alt:"image-20230311135929006"})),(0,o.kt)("p",null,"\u5982\u679c\u66f4\u65b0\u540e\u4ecd\u7136\u65e0\u6cd5\u6b63\u5e38\u5b89\u88c5\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u6307\u5b9a\u4e00\u4e2a\u4e0d\u540c\u7684\u6e90\u6765\u5b89\u88c5\uff0c\u6bd4\u5982\u6e05\u534e\u6e90\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"python -m pip install -i ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.tuna.tsinghua.edu.cn/simple"},"https://pypi.tuna.tsinghua.edu.cn/simple")," nbconvert")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311140009564.png",alt:"image-20230311140009564"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311140050937.png",alt:"image-20230311140050937"})),(0,o.kt)("p",null,"\u5982\u6b64\u8fd9\u6837\u5c31\u662f\u5b89\u88c5OK\u5566"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"successfully installed attrs-22.2.0 beautifulsoup4-4.11.2")),(0,o.kt)("p",null,"\u5728powershell\u91cc\u9762\uff0c\u6267\u884c\u8fd9\u6761\u547d\u4ee4 jupyter nbconvert --to markdown XXX.ipynb"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311140151414.png",alt:"image-20230311140151414"})),(0,o.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u8f6c\u5316\u6211\u4eec\u60f3\u8981\u8f6c\u5316\u7684\u6587\u4ef6\u4e86\uff0c\u6bd4\u5982\u8bf4\u6211\u4eec\u73b0\u5728\u60f3\u8f6c\u5316 p1-3,\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"jupyter nbconvert --to markdown .\\p1-3-structure-2.ipynb")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311140308736.png",alt:"image-20230311140308736"})),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230 converting notebook to markdown, \u7136\u540e\u5b83\u5199\u4e869134\u4e2a\u5b57\u8282\u5230 .md\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u6267\u884c start . \u5c31\u53ef\u4ee5\u6253\u5f00\u5f53\u524d\u76ee\u5f55"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/DSH5200/images/master/image-20230311140410901.png",alt:"image-20230311140410901"})),(0,o.kt)("h3",{id:"\u66f4\u6539\u516c\u5f0f"},"\u66f4\u6539\u516c\u5f0f"),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u8f6c\u5316markdown\u4e4b\u540e\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u66f4\u6539\u516c\u5f0f\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$"),(0,o.kt)("p",{parentName:"blockquote"},"\\begin{align}"),(0,o.kt)("p",{parentName:"blockquote"},"f(a,b) = \\sqrt{a^2 + b^2}"),(0,o.kt)("p",{parentName:"blockquote"},"\\end{align}"),(0,o.kt)("p",{parentName:"blockquote"},"$")),(0,o.kt)("p",null,"\u65b9\u6cd5\u662f\uff0c\u5206\u522b\u628a\u4ee5\u4e0b\u4e24\u4e2a\u5185\u5bb9\u6539\u6210$$"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$"),(0,o.kt)("p",{parentName:"blockquote"},"\\begin{align}"),(0,o.kt)("p",{parentName:"blockquote"},"\\end{align}"),(0,o.kt)("p",{parentName:"blockquote"},"$")),(0,o.kt)("p",null,"\u4e5f\u5c31\u53d8\u6210\u4e86\u8fd9\u6837\uff0c\u5982\u6b64\u5c31\u6210\u529f\u4e86\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$$\nf(a,b) = \\sqrt{a^2 + b^2}\n$$")),(0,o.kt)("p",null,"\u540c\u5b66\u4eec\u53ef\u4ee5\u7ec3\u8d77\u6765\u5566\uff01"))}m.isMDXComponent=!0}}]);