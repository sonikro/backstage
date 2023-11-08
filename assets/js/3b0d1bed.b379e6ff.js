/*! For license information please see 3b0d1bed.b379e6ff.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[410081],{632353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var o=r(824246),n=r(511151);const c={id:"plugin-explore-backend.tooldocumentcollatorfactoryoptions",title:"ToolDocumentCollatorFactoryOptions",description:"API reference for ToolDocumentCollatorFactoryOptions"},u=void 0,a={id:"reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions",title:"ToolDocumentCollatorFactoryOptions",description:"API reference for ToolDocumentCollatorFactoryOptions",source:"@site/../docs/reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions.md",sourceDirName:"reference",slug:"/reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions",permalink:"/docs/reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions.md",tags:[],version:"current",frontMatter:{id:"plugin-explore-backend.tooldocumentcollatorfactoryoptions",title:"ToolDocumentCollatorFactoryOptions",description:"API reference for ToolDocumentCollatorFactoryOptions"}},l={},s=[];function i(e){const t=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",strong:"strong",pre:"pre"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-explore-backend",children:(0,o.jsx)(t.code,{children:"@backstage/plugin-explore-backend"})})," > ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-explore-backend.tooldocumentcollatorfactoryoptions",children:(0,o.jsx)(t.code,{children:"ToolDocumentCollatorFactoryOptions"})})]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsxs)(t.p,{children:["import from ",(0,o.jsx)(t.code,{children:"@backstage/plugin-search-backend-module-explore"})," instead"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"export type ToolDocumentCollatorFactoryOptions = _ToolDocumentCollatorFactoryOptions;\n"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"References:"})," ",(0,o.jsx)(t.a,{href:"/docs/reference/plugin-search-backend-module-explore.tooldocumentcollatorfactoryoptions",children:"_ToolDocumentCollatorFactoryOptions"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},371426:(e,t,r)=>{var o=r(827378),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var o,c={},s=null,i=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,o)&&!l.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:s,ref:i,props:c,_owner:a.current}}t.Fragment=c,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var g=v.prototype=new _;g.constructor=v,m(g,b.prototype),g.isPureReactComponent=!0;var k=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,o){var n,c={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)x.call(t,n)&&!S.hasOwnProperty(n)&&(c[n]=t[n]);var l=arguments.length-2;if(1===l)c.children=o;else if(1<l){for(var s=Array(l),i=0;i<l;i++)s[i]=arguments[i+2];c.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===c[n]&&(c[n]=l[n]);return{$$typeof:r,type:e,key:u,ref:a,props:c,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var l=!1;if(null===e)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case r:case o:l=!0}}if(l)return u=u(l=e),e=""===c?"."+w(l,0):c,k(u)?(n="",null!=e&&(n=e.replace(E,"$&/")+"/"),R(u,t,n,"",(function(e){return e}))):null!=u&&(O(u)&&(u=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,n+(!u.key||l&&l.key===u.key?"":(""+u.key).replace(E,"$&/")+"/")+e)),t.push(u)),1;if(l=0,c=""===c?".":c+":",k(e))for(var s=0;s<e.length;s++){var i=c+w(a=e[s],s);l+=R(a,t,n,i,u)}else if(i=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof i)for(e=i.call(e),s=0;!(a=e.next()).done;)l+=R(a=a.value,t,n,i=c+w(a,s++),u);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function $(e,t,r){if(null==e)return e;var o=[],n=0;return R(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},D={transition:null},F={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:j};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=n,t.Profiler=u,t.PureComponent=v,t.StrictMode=c,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=m({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)x.call(t,s)&&!S.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=o;else if(1<s){l=Array(s);for(var i=0;i<s;i++)l[i]=arguments[i+2];n.children=l}return{$$typeof:r,type:e.type,key:c,ref:u,props:n,_owner:a}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>c});var o=r(667294);const n=o.createContext({});function c(e){const t=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const u={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||u:c(e),o.createElement(n.Provider,{value:a},t)}}}]);