/*! For license information please see 14b0f514.8ac7e82e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[89171],{221951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(824246),c=n(511151);const o={id:"plugin-tech-insights.techinsightsclient.runbulkchecks",title:"TechInsightsClient.runBulkChecks()",description:"API reference for TechInsightsClient.runBulkChecks()"},s=void 0,i={id:"reference/plugin-tech-insights.techinsightsclient.runbulkchecks",title:"TechInsightsClient.runBulkChecks()",description:"API reference for TechInsightsClient.runBulkChecks()",source:"@site/../docs/reference/plugin-tech-insights.techinsightsclient.runbulkchecks.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights.techinsightsclient.runbulkchecks",permalink:"/docs/reference/plugin-tech-insights.techinsightsclient.runbulkchecks",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights.techinsightsclient.runbulkchecks.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights.techinsightsclient.runbulkchecks",title:"TechInsightsClient.runBulkChecks()",description:"API reference for TechInsightsClient.runBulkChecks()"}},u={},l=[{value:"Parameters",id:"parameters",level:2}];function a(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,c.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-tech-insights"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights.techinsightsclient",children:(0,r.jsx)(t.code,{children:"TechInsightsClient"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights.techinsightsclient.runbulkchecks",children:(0,r.jsx)(t.code,{children:"runBulkChecks"})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"runBulkChecks(entities: CompoundEntityRef[], checks?: Check[]): Promise<BulkCheckResponse>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entities"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/catalog-model.compoundentityref",children:"CompoundEntityRef"}),"[]"]}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"checks"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights.check",children:"Check"}),"[]"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"(Optional)"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-common.bulkcheckresponse",children:"BulkCheckResponse"}),">"]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,c.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},371426:(e,t,n)=>{var r=n(827378),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,a=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:a,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),a=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),d=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=g.prototype;var _=b.prototype=new k;_.constructor=b,y(_,g.prototype),_.isPureReactComponent=!0;var j=Array.isArray,v=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var c,o={},s=null,i=null;if(null!=t)for(c in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)v.call(t,c)&&!C.hasOwnProperty(c)&&(o[c]=t[c]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),a=0;a<u;a++)l[a]=arguments[a+2];o.children=l}if(e&&e.defaultProps)for(c in u=e.defaultProps)void 0===o[c]&&(o[c]=u[c]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,c,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===o?"."+w(u,0):o,j(s)?(c="",null!=e&&(c=e.replace(R,"$&/")+"/"),P(s,t,c,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,c+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(u=0,o=""===o?".":o+":",j(e))for(var l=0;l<e.length;l++){var a=o+w(i=e[l],l);u+=P(i,t,c,a,s)}else if(a=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof a)for(e=a.call(e),l=0;!(i=e.next()).done;)u+=P(i=i.value,t,c,a=o+w(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function O(e,t,n){if(null==e)return e;var r=[],c=0;return P(e,r,"","",(function(e){return t.call(n,e,c++)})),r}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},B={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:x};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=c,t.Profiler=s,t.PureComponent=b,t.StrictMode=o,t.Suspense=a,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=y({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(l in t)v.call(t,l)&&!C.hasOwnProperty(l)&&(c[l]=void 0===t[l]&&void 0!==u?u[l]:t[l])}var l=arguments.length-2;if(1===l)c.children=r;else if(1<l){u=Array(l);for(var a=0;a<l;a++)u[a]=arguments[a+2];c.children=u}return{$$typeof:n,type:e.type,key:o,ref:s,props:c,_owner:i}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var r=n(667294);const c=r.createContext({});function o(e){const t=r.useContext(c);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(c.Provider,{value:i},t)}}}]);