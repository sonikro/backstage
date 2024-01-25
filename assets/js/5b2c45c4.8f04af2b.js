/*! For license information please see 5b2c45c4.8f04af2b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[219440],{766109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(824246),r=n(511151);const o={id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},s=void 0,a={id:"integrations/github/github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication",source:"@site/../docs/integrations/github/github-apps.md",sourceDirName:"integrations/github",slug:"/integrations/github/github-apps",permalink:"/docs/integrations/github/github-apps",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/integrations/github/github-apps.md",tags:[],version:"current",frontMatter:{id:"github-apps",title:"GitHub Apps",description:"Configure GitHub Apps for Backend Authentication"},sidebar:"docs",previous:{title:"Org Data",permalink:"/docs/integrations/github/org"},next:{title:"Locations",permalink:"/docs/integrations/gitlab/locations"}},c={},l=[{value:"Caveats",id:"caveats",level:2},{value:"Using the CLI (public GitHub only)",id:"using-the-cli-public-github-only",level:3},{value:"GitHub Enterprise",id:"github-enterprise",level:3},{value:"Including in Integrations Config",id:"including-in-integrations-config",level:3},{value:"Limiting the GitHub App installations",id:"limiting-the-github-app-installations",level:3},{value:"App permissions",id:"app-permissions",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}];function u(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",a:"a"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Backstage can be configured to use GitHub Apps for backend authentication. This\ncomes with advantages such as higher rate limits and that Backstage can act as\nan application instead of a user or bot account."}),"\n",(0,i.jsx)(t.p,{children:"It also provides a much clearer and better authorization model as a opposed to\nthe OAuth apps and their respective scopes."}),"\n",(0,i.jsx)(t.h2,{id:"caveats",children:"Caveats"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This authentication method is built for authenticating towards\norganization repositories and not towards personal repositories."}),"\n",(0,i.jsx)(t.li,{children:"It's not possible to have multiple Backstage GitHub Apps installed in the same\nGitHub organization, to be handled by Backstage. We currently don't check\nthrough all the registered GitHub Apps to see which ones are installed for a\nparticular repository. We only respect global Organization installs right now."}),"\n",(0,i.jsxs)(t.li,{children:["App permissions is not managed by Backstage. They're created with some simple\ndefault permissions which you are free to change as you need, but you will\nneed to update them in the GitHub web console, not in Backstage right now. The\npermissions that are defaulted are ",(0,i.jsx)(t.code,{children:"metadata:read"})," and ",(0,i.jsx)(t.code,{children:"contents:read"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"The created GitHub App is private by default, this is most likely what you\nwant for github.com but it's recommended to make your application public for\nGitHub Enterprise in order to share application across your GHE organizations."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A GitHub app created with the cli will have read\naccess by default. You have to manually update the GitHub App settings in GitHub\nto grant the app more permissions if needed."}),"\n",(0,i.jsx)(t.h3,{id:"using-the-cli-public-github-only",children:"Using the CLI (public GitHub only)"}),"\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.code,{children:"backstage-cli"})," to create a GitHub App using a manifest file\nthat we provide. This gives us a way to automate some of the work required to\ncreate a GitHub app."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"yarn backstage-cli create-github-app <github org>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can read more about the\n",(0,i.jsx)(t.a,{href:"/docs/local-dev/cli-commands#create-github-app",children:(0,i.jsx)(t.code,{children:"backstage-cli create-github-app"})})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you've gone through the CLI command, it should produce a YAML file in the\nroot of the project which you can then use as an ",(0,i.jsx)(t.code,{children:"include"})," in your\n",(0,i.jsx)(t.code,{children:"app-config.yaml"}),". You can go ahead and\n",(0,i.jsx)(t.a,{href:"#including-in-integrations-config",children:"skip ahead"})," if you've already got an app."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that the created app will have a webhook that is disabled by default and\npoints to ",(0,i.jsx)(t.code,{children:"smee.io"}),", which is intended for local development. There's also\ncurrently no part of Backstage that makes use of the webhook."]}),"\n",(0,i.jsx)(t.h3,{id:"github-enterprise",children:"GitHub Enterprise"}),"\n",(0,i.jsxs)(t.p,{children:["You have to create the GitHub Application manually using these\n",(0,i.jsx)(t.a,{href:"https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-a-github-app",children:"instructions"}),"\nas GitHub Enterprise does not support creation of apps from manifests."]}),"\n",(0,i.jsx)(t.p,{children:"Once the application is created you have to generate a private key for the\napplication and place it in a YAML file."}),"\n",(0,i.jsxs)(t.p,{children:["The YAML file must include the following information. Please note that the\nindentation for the ",(0,i.jsx)(t.code,{children:"privateKey"})," is required."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"appId: app id\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,i.jsx)(t.h3,{id:"including-in-integrations-config",children:"Including in Integrations Config"}),"\n",(0,i.jsxs)(t.p,{children:["Once the credentials are stored in a YAML file generated by ",(0,i.jsx)(t.code,{children:"create-github-app"}),",\nor manually by following the ",(0,i.jsx)(t.a,{href:"#github-enterprise",children:"GitHub Enterprise"}),"\ninstructions, they can be included in the ",(0,i.jsx)(t.code,{children:"app-config.yaml"})," under the\n",(0,i.jsx)(t.code,{children:"integrations"})," section."]}),"\n",(0,i.jsx)(t.p,{children:"Please note that the credentials file is highly sensitive and should NOT be\nchecked into any kind of version control. Instead use your preferred secure\nmethod of distributing secrets."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"integrations:\n  github:\n    - host: github.com\n      apps:\n        - $include: example-backstage-app-credentials.yaml\n"})}),"\n",(0,i.jsx)(t.h3,{id:"limiting-the-github-app-installations",children:"Limiting the GitHub App installations"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to limit the GitHub app installations visible to backstage you may\noptionally include the ",(0,i.jsx)(t.code,{children:"allowedInstallationOwners"})," option. If you configure\nmultiple apps, specifying this will bring some small performance benefits\nas backstage can more easily select which app to use for a URL."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"appId: app id\nallowedInstallationOwners: ['GlobexCorp']\nclientId: client id\nclientSecret: client secret\nwebhookSecret: webhook secret\nprivateKey: |\n  -----BEGIN RSA PRIVATE KEY-----\n  ...Key content...\n  -----END RSA PRIVATE KEY-----\n"})}),"\n",(0,i.jsx)(t.p,{children:"This will result in backstage preventing the use of any installation that is not\nwithin the allow list."}),"\n",(0,i.jsx)(t.h3,{id:"app-permissions",children:"App permissions"}),"\n",(0,i.jsx)(t.p,{children:"When creating a GitHub App, you must select permissions to define the level of\naccess for the app. The permissions required vary depending on your use of the\nintegration:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Reading software components:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Contents"}),": ",(0,i.jsx)(t.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Reading organization data:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Members"}),": ",(0,i.jsx)(t.code,{children:"Read-only"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Publishing software templates:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Administration"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})," (for creating repositories)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Contents"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Metadata"}),": ",(0,i.jsx)(t.code,{children:"Read-only"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Pull requests"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Issues"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Workflows"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub workflows)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Commit statuses"}),": ",(0,i.jsx)(t.code,{children:"Read-only"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Variables"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Action Repository Variables)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Secrets"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Action Repository Secrets)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Environments"}),": ",(0,i.jsx)(t.code,{children:"Read & write"})," (if templates include GitHub Environments)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"HttpError: This endpoint requires you to be authenticated."})}),"\n",(0,i.jsxs)(t.p,{children:["This message tends to wrap a ",(0,i.jsx)(t.code,{children:"NotFoundError: No app installation found"})," under the hood, which\nis the result of not installing the app in your organization. Even if created via the ",(0,i.jsx)(t.code,{children:"backstage-cli"}),"\nas a member and app manager of your organization, the app will not automatically install. You\nmust possess the ",(0,i.jsx)(t.code,{children:"Owner"})," role in the organization to see the ",(0,i.jsx)(t.code,{children:"Install"})," menu under your\napp settings, then manually press ",(0,i.jsx)(t.code,{children:"Install"})," to authorize the application."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},371426:(e,t,n)=>{var i=n(827378),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,o={},l=null,u=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:a.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function m(){}function j(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var x=j.prototype=new m;x.constructor=j,g(x,y.prototype),x.isPureReactComponent=!0;var v=Array.isArray,w=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,i){var r,o={},s=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)w.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=i;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:a,props:o,_owner:k.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,r,o,s){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case i:c=!0}}if(c)return s=s(c=e),e=""===o?"."+A(c,0):o,v(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),C(s,t,r,"",(function(e){return e}))):null!=s&&(R(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var u=o+A(a=e[l],l);c+=C(a,t,r,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=C(a=a.value,t,r,u=o+A(a,l++),s);else if("object"===a)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var i=[],r=0;return C(e,i,"","",(function(e){return t.call(n,e,r++)})),i}function G(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var H={current:null},O={transition:null},T={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:O,ReactCurrentOwner:k};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=s,t.PureComponent=j,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,i){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=g({},e.props),o=e.key,s=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,a=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)w.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=i;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:n,type:e.type,key:o,ref:s,props:r,_owner:a}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:G}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return H.current.useCallback(e,t)},t.useContext=function(e){return H.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return H.current.useDeferredValue(e)},t.useEffect=function(e,t){return H.current.useEffect(e,t)},t.useId=function(){return H.current.useId()},t.useImperativeHandle=function(e,t,n){return H.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return H.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return H.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return H.current.useMemo(e,t)},t.useReducer=function(e,t,n){return H.current.useReducer(e,t,n)},t.useRef=function(e){return H.current.useRef(e)},t.useState=function(e){return H.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return H.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return H.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>o});var i=n(667294);const r=i.createContext({});function o(e){const t=i.useContext(r);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||s:o(e),i.createElement(r.Provider,{value:a},t)}}}]);