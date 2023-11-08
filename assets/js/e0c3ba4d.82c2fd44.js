/*! For license information please see e0c3ba4d.82c2fd44.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[741359],{651850:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(824246),a=r(511151);const o={id:"backend-common.databasemanager",title:"DatabaseManager",description:"API reference for DatabaseManager"},c=void 0,s={id:"reference/backend-common.databasemanager",title:"DatabaseManager",description:"API reference for DatabaseManager",source:"@site/../docs/reference/backend-common.databasemanager.md",sourceDirName:"reference",slug:"/reference/backend-common.databasemanager",permalink:"/docs/reference/backend-common.databasemanager",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.databasemanager.md",tags:[],version:"current",frontMatter:{id:"backend-common.databasemanager",title:"DatabaseManager",description:"API reference for DatabaseManager"}},u={},i=[{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-common",children:(0,n.jsx)(t.code,{children:"@backstage/backend-common"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-common.databasemanager",children:(0,n.jsx)(t.code,{children:"DatabaseManager"})})]}),"\n",(0,n.jsx)(t.p,{children:"Manages database connections for Backstage backend plugins."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class DatabaseManager \n"})}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["The database manager allows the user to set connection and client settings on a per pluginId basis by defining a database config block under ",(0,n.jsx)(t.code,{children:"plugin.<pluginId>"})," in addition to top level defaults. Optionally, a user may set ",(0,n.jsx)(t.code,{children:"prefix"})," which is used to prefix generated database names if config is not provided."]}),"\n",(0,n.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-common.databasemanager.forplugin",children:"forPlugin(pluginId, deps)"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"Generates a PluginDatabaseManager for consumption by plugins."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/backend-common.databasemanager.fromconfig",children:"fromConfig(config, options)"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"static"})}),(0,n.jsxs)(t.td,{children:["Creates a ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-common.databasemanager",children:"DatabaseManager"})," from ",(0,n.jsx)(t.code,{children:"backend.database"})," config."]})]})]})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,o={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!u.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:s.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}function g(){}function _(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var j=_.prototype=new g;j.constructor=_,m(j,b.prototype),j.isPureReactComponent=!0;var v=Array.isArray,x=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var a,o={},c=null,s=null;if(null!=t)for(a in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(a in u=e.defaultProps)void 0===o[a]&&(o[a]=u[a]);return{$$typeof:r,type:e,key:c,ref:s,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,a,o,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var u=!1;if(null===e)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case r:case n:u=!0}}if(u)return c=c(u=e),e=""===o?"."+C(u,0):o,v(c)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),O(c,t,a,"",(function(e){return e}))):null!=c&&(E(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,a+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(u=0,o=""===o?".":o+":",v(e))for(var i=0;i<e.length;i++){var l=o+C(s=e[i],i);u+=O(s,t,a,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(s=e.next()).done;)u+=O(s=s.value,t,a,l=o+C(s,i++),c);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function $(e,t,r){if(null==e)return e;var n=[],a=0;return O(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},D={transition:null},I={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=c,t.PureComponent=_,t.StrictMode=o,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),o=e.key,c=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(i in t)x.call(t,i)&&!S.hasOwnProperty(i)&&(a[i]=void 0===t[i]&&void 0!==u?u[i]:t[i])}var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){u=Array(i);for(var l=0;l<i;l++)u[l]=arguments[l+2];a.children=u}return{$$typeof:r,type:e.type,key:o,ref:c,props:a,_owner:s}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return M.current.useCallback(e,t)},t.useContext=function(e){return M.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return M.current.useDeferredValue(e)},t.useEffect=function(e,t){return M.current.useEffect(e,t)},t.useId=function(){return M.current.useId()},t.useImperativeHandle=function(e,t,r){return M.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return M.current.useMemo(e,t)},t.useReducer=function(e,t,r){return M.current.useReducer(e,t,r)},t.useRef=function(e){return M.current.useRef(e)},t.useState=function(e){return M.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return M.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return M.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>s,ah:()=>o});var n=r(667294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function s({components:e,children:t,disableParentContext:r}){let s;return s=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(a.Provider,{value:s},t)}}}]);