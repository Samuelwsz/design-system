/*! For license information please see 46.3c04d5e6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[46],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function CheckIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",clipRule:"evenodd"}))}))},"./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function XMarkIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",clipRule:"evenodd"}))}))},"./components/Box/Box.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Box});var D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),D_react_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_excluded=["children","rounded","border","filledBackground","type","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,boxClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-100",success:"bg-green-100 text-green-100",error:"bg-error-100 text-error-100"};function Box(_ref){var children=_ref.children,_ref$rounded=_ref.rounded,rounded=void 0!==_ref$rounded&&_ref$rounded,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,filledBackground=_ref.filledBackground,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,className=_ref.className,rest=(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,D_react_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.Z)({"rounded-md":rounded,"border border-gray-100":border,"bg-dark":filledBackground},boxClassMap[type],type));return __jsx("div",(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"".concat(classes," ").concat(className)},rest),children)}Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{rounded:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},border:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark" | "alert" | "success" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},filledBackground:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},filledBackground:{defaultValue:null,description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"success"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextBlock2/TextBlock2.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Box_Box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Box/Box.tsx"),_Typography_Typography__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/Typography/Typography.tsx"),_excluded=["title","type","children","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TextBlock2=function TextBlock2(_ref){var title=_ref.title,_ref$type=_ref.type,type=void 0===_ref$type?"dark":_ref$type,children=_ref.children,className=_ref.className,rest=(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),textClass="primary"===type?"text-white":"text-gray-primary";return __jsx(_Box_Box__WEBPACK_IMPORTED_MODULE_1__.Z,(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({className:"flex flex-col gap-2 p-5  ",type,rounded:!0},rest),__jsx("div",{className},__jsx(_Typography_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"font-bold ".concat(textClass)},title),__jsx(_Typography_Typography__WEBPACK_IMPORTED_MODULE_2__.Z,{className:textClass},children)))};TextBlock2.displayName="TextBlock2",TextBlock2.__docgenInfo={description:"",methods:[],displayName:"TextBlock2",props:{type:{defaultValue:{value:'"dark"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=TextBlock2;try{TextBlock2.displayName="TextBlock2",TextBlock2.__docgenInfo={description:"",displayName:"TextBlock2",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},type:{defaultValue:{value:"dark"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextBlock2/TextBlock2.tsx#TextBlock2"]={docgenInfo:TextBlock2.__docgenInfo,name:"TextBlock2",path:"components/TextBlock2/TextBlock2.tsx#TextBlock2"})}catch(__react_docgen_typescript_loader_error){}},"./components/Typography/Typography.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["children","element","className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Typography=function Typography(_ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"p":_ref$element,className=_ref.className,rest=(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx(element,(0,D_react_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:"text-gray-primary text-sm font-normal ".concat(className)},rest),children)};Typography.displayName="Typography",Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{element:{defaultValue:{value:'"p"',computed:!1},required:!1,tsType:{name:"unknown"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Typography;try{Typography.displayName="Typography",Typography.__docgenInfo={description:"",displayName:"Typography",props:{element:{defaultValue:{value:"p"},description:"",name:"element",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Typography/Typography.tsx#Typography"]={docgenInfo:Typography.__docgenInfo,name:"Typography",path:"components/Typography/Typography.tsx#Typography"})}catch(__react_docgen_typescript_loader_error){}},"./components/Notice/Notice.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:()=>Alert,Error:()=>Error,Success:()=>Success,default:()=>Notice_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),CheckIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/CheckIcon.js");const esm_InformationCircleIcon=react.forwardRef((function InformationCircleIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}));const esm_ExclamationTriangleIcon=react.forwardRef((function ExclamationTriangleIcon({title,titleId,...props},svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react.createElement("title",{id:titleId},title):null,react.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}));var XMarkIcon=__webpack_require__("./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js"),Box=__webpack_require__("./components/Box/Box.tsx"),TextBlock2=__webpack_require__("./components/TextBlock2/TextBlock2.tsx"),dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_excluded=["children","type","message","className","onClose"],__jsx=react.createElement,noticeVariants=(0,dist.j)("",{variants:{type:{success:"text-green-900",error:"text-red-900",alert:"text-yellow-900"},defaultVariants:{variant:"typeDefault"}}}),Notice=function Notice(_ref){var children=_ref.children,type=_ref.type,message=_ref.message,className=_ref.className,onClose=_ref.onClose,rest=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(Box.Z,(0,esm_extends.Z)({className:"flex p-4 justify-between items-center ".concat(className),filledBackground:!0,rounded:!0,type},rest),__jsx("div",{className:"flex gap-2"},function getIcon(type){switch(type){case"success":return __jsx(CheckIcon.Z,{className:"w-4 h-4"});case"alert":return __jsx(esm_InformationCircleIcon,{className:"w-4 h-4"});case"error":return __jsx(esm_ExclamationTriangleIcon,{className:"w-4 h-4"})}}(type),__jsx(TextBlock2.Z,{className:"".concat(noticeVariants({type})," ").concat(className)},message)),children,onClose&&__jsx(XMarkIcon.Z,{className:"w-4 h-4 cursor-pointer",onClick:onClose}))};Notice.displayName="Notice",Notice.__docgenInfo={description:"",methods:[],displayName:"Notice",props:{type:{required:!0,tsType:{name:"union",raw:'"alert" | "success" | "error"',elements:[{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Notice_Notice=Notice;try{Notice.displayName="Notice",Notice.__docgenInfo={description:"",displayName:"Notice",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"alert"'},{value:'"success"'},{value:'"error"'}]}},defaultVariants:{defaultValue:null,description:"",name:"defaultVariants",required:!1,type:{name:'"variant" | null'}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Notice/Notice.tsx#Notice"]={docgenInfo:Notice.__docgenInfo,name:"Notice",path:"components/Notice/Notice.tsx#Notice"})}catch(__react_docgen_typescript_loader_error){}var _Success$parameters,_Success$parameters2,_Alert$parameters,_Alert$parameters2,_Error$parameters,_Error$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Notice_stories={title:"/Design System/Molecules/Notice",component:Notice_Notice,argTypes:{children:{type:"string"},message:{type:"string"},type:{type:"string"},onClose:{type:"function"}}};var Success={args:{type:"success",message:"This is an success message"}},Alert={args:{type:"alert",message:"This is an alert message"}},Error={args:{type:"error",message:"This is an error message"}};Success.parameters=_objectSpread(_objectSpread({},Success.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "success",\n    message: "This is an success message"\n  }\n}'},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2=_Success$parameters2.docs)||void 0===_Success$parameters2?void 0:_Success$parameters2.source)})}),Alert.parameters=_objectSpread(_objectSpread({},Alert.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Alert$parameters=Alert.parameters)||void 0===_Alert$parameters?void 0:_Alert$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "alert",\n    message: "This is an alert message"\n  }\n}'},null===(_Alert$parameters2=Alert.parameters)||void 0===_Alert$parameters2||null===(_Alert$parameters2=_Alert$parameters2.docs)||void 0===_Alert$parameters2?void 0:_Alert$parameters2.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    type: "error",\n    message: "This is an error message"\n  }\n}'},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})})},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{j:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);