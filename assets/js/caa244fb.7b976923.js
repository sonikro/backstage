/*! For license information please see caa244fb.7b976923.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[188625],{142019:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var n=t(824246),o=t(511151);const c={id:"backend-app-api.schedulerservicefactory",title:"schedulerServiceFactory",description:"API reference for schedulerServiceFactory"},u=void 0,a={id:"reference/backend-app-api.schedulerservicefactory",title:"schedulerServiceFactory",description:"API reference for schedulerServiceFactory",source:"@site/../docs/reference/backend-app-api.schedulerservicefactory.md",sourceDirName:"reference",slug:"/reference/backend-app-api.schedulerservicefactory",permalink:"/docs/reference/backend-app-api.schedulerservicefactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.schedulerservicefactory.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.schedulerservicefactory",title:"schedulerServiceFactory",description:"API reference for schedulerServiceFactory"}},i={},s=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-app-api.schedulerservicefactory",children:(0,n.jsx)(r.code,{children:"schedulerServiceFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'schedulerServiceFactory: () => import("@backstage/backend-plugin-api").ServiceFactory<import("@backstage/backend-plugin-api").SchedulerService, "plugin">\n'})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,c={},s=null,f=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:a.current}}r.Fragment=c,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function b(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}function m(){}function _(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=b.prototype;var S=_.prototype=new m;S.constructor=_,h(S,b.prototype),S.isPureReactComponent=!0;var k=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var o,c={},u=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(u=""+r.key),r)g.call(r,o)&&!x.hasOwnProperty(o)&&(c[o]=r[o]);var i=arguments.length-2;if(1===i)c.children=n;else if(1<i){for(var s=Array(i),f=0;f<i;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===c[o]&&(c[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:a,props:c,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var R=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function $(e,r,o,c,u){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return u=u(i=e),e=""===c?"."+C(i,0):c,k(u)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),$(u,r,o,"",(function(e){return e}))):null!=u&&(w(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(R,"$&/")+"/")+e)),r.push(u)),1;if(i=0,c=""===c?".":c+":",k(e))for(var s=0;s<e.length;s++){var f=c+C(a=e[s],s);i+=$(a,r,o,f,u)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)i+=$(a=a.value,r,o,f=c+C(a,s++),u);else if("object"===a)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function O(e,r,t){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var F={current:null},I={transition:null},T={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:I,ReactCurrentOwner:j};r.Children={map:O,forEach:function(e,r,t){O(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return O(e,(function(){r++})),r},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=b,r.Fragment=o,r.Profiler=u,r.PureComponent=_,r.StrictMode=c,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=j.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)g.call(r,s)&&!x.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var f=0;f<s;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:t,type:e.type,key:c,ref:u,props:o,_owner:a}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=I.transition;I.transition={};try{e()}finally{I.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return F.current.useCallback(e,r)},r.useContext=function(e){return F.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return F.current.useDeferredValue(e)},r.useEffect=function(e,r){return F.current.useEffect(e,r)},r.useId=function(){return F.current.useId()},r.useImperativeHandle=function(e,r,t){return F.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return F.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return F.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return F.current.useMemo(e,r)},r.useReducer=function(e,r,t){return F.current.useReducer(e,r,t)},r.useRef=function(e){return F.current.useRef(e)},r.useState=function(e){return F.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return F.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return F.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>a,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const u={};function a({components:e,children:r,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||u:c(e),n.createElement(o.Provider,{value:a},r)}}}]);