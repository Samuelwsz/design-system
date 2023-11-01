/*! For license information please see Switch-Switch-mdx.f084a264.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[188],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./components/Switch/Switch.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),D_react_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Switch_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Switch/Switch.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",h3:"h3"},(0,D_react_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"switch",children:"Switch"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Switch is a clickable interactive element that wraps a toggling action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"common",children:"Common"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.CommonEnabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.CommonNotEnabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"contract",children:"Contract"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.ContractEnabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.ContractNotEnabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.CommonEnabledDisabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.CommonNotEnabledDisabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.ContractEnabledDisabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Switch_stories__WEBPACK_IMPORTED_MODULE_2__.ContractNotEnabledDisabled,layout:"centered"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"documentação-interativa",children:"Documentação Interativa"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{include:["variant","default","disabled"]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,D_react_design_system_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./components/Switch/Switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommonEnabled:()=>CommonEnabled,CommonEnabledDisabled:()=>CommonEnabledDisabled,CommonNotEnabled:()=>CommonNotEnabled,CommonNotEnabledDisabled:()=>CommonNotEnabledDisabled,ContractEnabled:()=>ContractEnabled,ContractEnabledDisabled:()=>ContractEnabledDisabled,ContractNotEnabled:()=>ContractNotEnabled,ContractNotEnabledDisabled:()=>ContractNotEnabledDisabled,Primary:()=>Primary,default:()=>Switch_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),switch_switch=__webpack_require__("./node_modules/@headlessui/react/dist/components/switch/switch.js"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js"),XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var _excluded=["defaultEnable","variant","disabled","onChange"],__jsx=react.createElement,Switch=function Switch(_ref){var enabledByDefault=_ref.defaultEnable,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"common":_ref$variant,disabled=_ref.disabled,onChange=_ref.onChange,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),_useState=(0,react.useState)(enabledByDefault),enabled=_useState[0],setEnabled=_useState[1],style=function(_ref){var variant=_ref.variant,enabled=_ref.enabled,disabled=_ref.disabled,containerClasses=(0,dist.j)(classnames_default()("outline-none relative inline-flex h-6 w-16 items-center rounded-full disabled:bg-disabled",{"pointer-events-none":disabled}),{variants:{variant:{common:classnames_default()({"bg-primary":enabled},{"bg-primary hover:bg-primaryHover":!enabled}),contract:classnames_default()({"bg-success":enabled},{"bg-error":!enabled})}},defaultVariants:{variant:"common"}})({variant}),switchClasses=classnames_default()("inline-block bg-white h-5 w-5 rounded-full transform transition-transform duration-200 ease-in-out",enabled?"translate-x-[2.1rem]":"translate-x-1");return{Icon:classnames_default()("aria-disabled: text-font-disabled",{"text-success":enabled&&!disabled},{"text-error":!enabled&&!disabled},{"text-disabled":disabled}),Switch:switchClasses,Container:containerClasses}}({variant,enabled,disabled});return __jsx(switch_switch.r,(0,esm_extends.Z)({checked:enabled,onChange:function toggle(){var newState=!enabled;setEnabled(newState),null==onChange||onChange(newState)},disabled,className:style.Container},rest),__jsx("span",{className:"sr-only"},"switch toggle"),"common"===variant&&__jsx("span",{className:style.Switch}),"contract"===variant&&__jsx("span",{className:style.Switch},enabled&&__jsx(CheckIcon.Z,{className:style.Icon,"aria-disabled":disabled}),enabled||__jsx(XMarkIcon.Z,{className:style.Icon,"aria-disabled":disabled})))};Switch.displayName="Switch",Switch.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{variant:{defaultValue:{value:'"common"',computed:!1},required:!1,tsType:{name:"union",raw:'"common" | "contract"',elements:[{name:"literal",value:'"common"'},{name:"literal",value:'"contract"'}]},description:""},defaultEnable:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(enabled: boolean) => void",signature:{arguments:[{name:"enabled",type:{name:"boolean"}}],return:{name:"void"}}},description:""}}};const Switch_Switch=Switch;try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{defaultEnable:{defaultValue:null,description:"",name:"defaultEnable",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"common"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"common"'},{value:'"contract"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(((enabled: boolean) => void) & ((checked: boolean) => void))"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"any"}},refName:{defaultValue:null,description:"",name:"refName",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"any"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},form:{defaultValue:null,description:"",name:"form",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"components/Switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_CommonEnabled$parame,_CommonEnabled$parame2,_CommonNotEnabled$par,_CommonNotEnabled$par2,_ContractEnabled$para,_ContractEnabled$para2,_ContractNotEnabled$p,_ContractNotEnabled$p2,_CommonEnabledDisable,_CommonEnabledDisable2,_CommonNotEnabledDisa,_CommonNotEnabledDisa2,_ContractEnabledDisab,_ContractEnabledDisab2,_ContractNotEnabledDi,_ContractNotEnabledDi2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Switch_stories={title:"/Design System/Molecules/Switch",component:Switch_Switch,argTypes:{defaultEnable:{type:"boolean",control:{type:"boolean"}},disabled:{type:"boolean",control:{type:"boolean"}},variant:{control:{type:"radio"}}}};var Primary={args:{}},CommonEnabled={args:{variant:"common",defaultEnable:!0}},CommonNotEnabled={args:{variant:"common",defaultEnable:!1}},ContractEnabled={args:{variant:"contract",defaultEnable:!0}},ContractNotEnabled={args:{variant:"contract",defaultEnable:!1}},CommonEnabledDisabled={args:{defaultEnable:!0,disabled:!0}},CommonNotEnabledDisabled={args:{defaultEnable:!1,disabled:!0}},ContractEnabledDisabled={args:{variant:"contract",defaultEnable:!0,disabled:!0}},ContractNotEnabledDisabled={args:{variant:"contract",defaultEnable:!1,disabled:!0}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),CommonEnabled.parameters=_objectSpread(_objectSpread({},CommonEnabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CommonEnabled$parame=CommonEnabled.parameters)||void 0===_CommonEnabled$parame?void 0:_CommonEnabled$parame.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "common",\n    defaultEnable: true\n  }\n}'},null===(_CommonEnabled$parame2=CommonEnabled.parameters)||void 0===_CommonEnabled$parame2||null===(_CommonEnabled$parame2=_CommonEnabled$parame2.docs)||void 0===_CommonEnabled$parame2?void 0:_CommonEnabled$parame2.source)})}),CommonNotEnabled.parameters=_objectSpread(_objectSpread({},CommonNotEnabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CommonNotEnabled$par=CommonNotEnabled.parameters)||void 0===_CommonNotEnabled$par?void 0:_CommonNotEnabled$par.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "common",\n    defaultEnable: false\n  }\n}'},null===(_CommonNotEnabled$par2=CommonNotEnabled.parameters)||void 0===_CommonNotEnabled$par2||null===(_CommonNotEnabled$par2=_CommonNotEnabled$par2.docs)||void 0===_CommonNotEnabled$par2?void 0:_CommonNotEnabled$par2.source)})}),ContractEnabled.parameters=_objectSpread(_objectSpread({},ContractEnabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContractEnabled$para=ContractEnabled.parameters)||void 0===_ContractEnabled$para?void 0:_ContractEnabled$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "contract",\n    defaultEnable: true\n  }\n}'},null===(_ContractEnabled$para2=ContractEnabled.parameters)||void 0===_ContractEnabled$para2||null===(_ContractEnabled$para2=_ContractEnabled$para2.docs)||void 0===_ContractEnabled$para2?void 0:_ContractEnabled$para2.source)})}),ContractNotEnabled.parameters=_objectSpread(_objectSpread({},ContractNotEnabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContractNotEnabled$p=ContractNotEnabled.parameters)||void 0===_ContractNotEnabled$p?void 0:_ContractNotEnabled$p.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "contract",\n    defaultEnable: false\n  }\n}'},null===(_ContractNotEnabled$p2=ContractNotEnabled.parameters)||void 0===_ContractNotEnabled$p2||null===(_ContractNotEnabled$p2=_ContractNotEnabled$p2.docs)||void 0===_ContractNotEnabled$p2?void 0:_ContractNotEnabled$p2.source)})}),CommonEnabledDisabled.parameters=_objectSpread(_objectSpread({},CommonEnabledDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CommonEnabledDisable=CommonEnabledDisabled.parameters)||void 0===_CommonEnabledDisable?void 0:_CommonEnabledDisable.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    defaultEnable: true,\n    disabled: true\n  }\n}"},null===(_CommonEnabledDisable2=CommonEnabledDisabled.parameters)||void 0===_CommonEnabledDisable2||null===(_CommonEnabledDisable2=_CommonEnabledDisable2.docs)||void 0===_CommonEnabledDisable2?void 0:_CommonEnabledDisable2.source)})}),CommonNotEnabledDisabled.parameters=_objectSpread(_objectSpread({},CommonNotEnabledDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CommonNotEnabledDisa=CommonNotEnabledDisabled.parameters)||void 0===_CommonNotEnabledDisa?void 0:_CommonNotEnabledDisa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    defaultEnable: false,\n    disabled: true\n  }\n}"},null===(_CommonNotEnabledDisa2=CommonNotEnabledDisabled.parameters)||void 0===_CommonNotEnabledDisa2||null===(_CommonNotEnabledDisa2=_CommonNotEnabledDisa2.docs)||void 0===_CommonNotEnabledDisa2?void 0:_CommonNotEnabledDisa2.source)})}),ContractEnabledDisabled.parameters=_objectSpread(_objectSpread({},ContractEnabledDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContractEnabledDisab=ContractEnabledDisabled.parameters)||void 0===_ContractEnabledDisab?void 0:_ContractEnabledDisab.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "contract",\n    defaultEnable: true,\n    disabled: true\n  }\n}'},null===(_ContractEnabledDisab2=ContractEnabledDisabled.parameters)||void 0===_ContractEnabledDisab2||null===(_ContractEnabledDisab2=_ContractEnabledDisab2.docs)||void 0===_ContractEnabledDisab2?void 0:_ContractEnabledDisab2.source)})}),ContractNotEnabledDisabled.parameters=_objectSpread(_objectSpread({},ContractNotEnabledDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ContractNotEnabledDi=ContractNotEnabledDisabled.parameters)||void 0===_ContractNotEnabledDi?void 0:_ContractNotEnabledDi.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    variant: "contract",\n    defaultEnable: false,\n    disabled: true\n  }\n}'},null===(_ContractNotEnabledDi2=ContractNotEnabledDisabled.parameters)||void 0===_ContractNotEnabledDi2||null===(_ContractNotEnabledDi2=_ContractNotEnabledDi2.docs)||void 0===_ContractNotEnabledDi2?void 0:_ContractNotEnabledDi2.source)})})},"./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/next/dist/compiled/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js")}}]);