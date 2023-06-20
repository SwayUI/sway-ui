"use strict";(self.webpackChunk_swayui_sway_ui=self.webpackChunk_swayui_sway_ui||[]).push([[128],{"./node_modules/@chakra-ui/avatar/dist/chunk-2RQKHYD2.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>AvatarBadge});var _chunk_QVBG3QXJ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-QVBG3QXJ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),placementMap={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},AvatarBadge=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function AvatarBadge2(props,ref){const{placement="bottom-end",className,...rest}=props,styles=(0,_chunk_QVBG3QXJ_mjs__WEBPACK_IMPORTED_MODULE_2__.d)(),badgeStyles={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...placementMap[placement],...styles.badge};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.m.div,{ref,...rest,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-avatar__badge",className),__css:badgeStyles})}));AvatarBadge.displayName="AvatarBadge"},"./node_modules/@chakra-ui/avatar/dist/chunk-MASXGPYE.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var chunk_QVBG3QXJ=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-QVBG3QXJ.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function initials(name){const[firstName,lastName]=name.split(" ");return firstName&&lastName?`${firstName.charAt(0)}${lastName.charAt(0)}`:firstName.charAt(0)}function AvatarName(props){const{name,getInitials,...rest}=props,styles=(0,chunk_QVBG3QXJ.d)();return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{role:"img","aria-label":name,...rest,__css:styles.label,children:name?null==getInitials?void 0:getInitials(name):null})}AvatarName.displayName="AvatarName";var GenericAvatarIcon=props=>(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...props,children:[(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),dist=__webpack_require__("./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js");function AvatarImage(props){const{src,srcSet,onError,onLoad,getInitials,name,borderRadius,loading,iconLabel,icon=(0,jsx_runtime.jsx)(GenericAvatarIcon,{}),ignoreFallback,referrerPolicy}=props,status=function useImage(props){const{loading,src,srcSet,onLoad,onError,crossOrigin,sizes,ignoreFallback}=props,[status,setStatus]=(0,react.useState)("pending");(0,react.useEffect)((()=>{setStatus(src?"loading":"pending")}),[src]);const imageRef=(0,react.useRef)(),load=(0,react.useCallback)((()=>{if(!src)return;flush();const img=new Image;img.src=src,crossOrigin&&(img.crossOrigin=crossOrigin),srcSet&&(img.srcset=srcSet),sizes&&(img.sizes=sizes),loading&&(img.loading=loading),img.onload=event=>{flush(),setStatus("loaded"),null==onLoad||onLoad(event)},img.onerror=error=>{flush(),setStatus("failed"),null==onError||onError(error)},imageRef.current=img}),[src,crossOrigin,srcSet,sizes,onLoad,onError,loading]),flush=()=>{imageRef.current&&(imageRef.current.onload=null,imageRef.current.onerror=null,imageRef.current=null)};return(0,dist.G)((()=>{if(!ignoreFallback)return"loading"===status&&load(),()=>{flush()}}),[status,load,ignoreFallback]),ignoreFallback?"loaded":status}({src,onError,ignoreFallback});return!src||!("loaded"===status)?name?(0,jsx_runtime.jsx)(AvatarName,{className:"chakra-avatar__initials",getInitials,name}):(0,react.cloneElement)(icon,{role:"img","aria-label":iconLabel}):(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.img,{src,srcSet,alt:name,onLoad,referrerPolicy,className:"chakra-avatar__img",loading,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius}})}AvatarImage.displayName="AvatarImage";var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),baseStyle={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},Avatar=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const styles=(0,chunk_T2VHL7RE.jC)("Avatar",props),[isLoaded,setIsLoaded]=(0,react.useState)(!1),{src,srcSet,name,showBorder,borderRadius="full",onError,onLoad:onLoadProp,getInitials=initials,icon=(0,jsx_runtime.jsx)(GenericAvatarIcon,{}),iconLabel=" avatar",loading,children,borderColor,ignoreFallback,...rest}=(0,styled_system_dist.Lr)(props),avatarStyles={borderRadius,borderWidth:showBorder?"2px":void 0,...baseStyle,...styles.container};return borderColor&&(avatarStyles.borderColor=borderColor),(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,...rest,className:(0,shared_utils_dist.cx)("chakra-avatar",props.className),"data-loaded":(0,shared_utils_dist.PB)(isLoaded),__css:avatarStyles,children:(0,jsx_runtime.jsxs)(chunk_QVBG3QXJ.Z,{value:styles,children:[(0,jsx_runtime.jsx)(AvatarImage,{src,srcSet,loading,onLoad:(0,shared_utils_dist.v0)(onLoadProp,(()=>{setIsLoaded(!0)})),onError,getInitials,name,borderRadius,icon,iconLabel,ignoreFallback}),children]})})}));Avatar.displayName="Avatar"},"./node_modules/@chakra-ui/avatar/dist/chunk-QVBG3QXJ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AvatarStylesProvider,d:()=>useAvatarStyles});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[AvatarStylesProvider,useAvatarStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_0__.k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"})},"./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>HStack});var _chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"row",ref})));HStack.displayName="HStack"},"./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var chunk_G72KV6MB=__webpack_require__("./node_modules/@chakra-ui/breakpoint-utils/dist/chunk-G72KV6MB.mjs"),selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_children_utils_dist=__webpack_require__("./node_modules/@chakra-ui/react-children-utils/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:(0,chunk_G72KV6MB.XQ)(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,chunk_G72KV6MB.XQ)(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=(0,react_children_utils_dist.W)(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/object-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.oA)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"./node_modules/@chakra-ui/react-children-utils/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getValidChildren});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function getValidChildren(children){return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter((child=>(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)))}},"./node_modules/@chakra-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>createContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function createContext(options={}){const{name,strict=!0,hookName="useContext",providerName="Provider",errorMessage}=options,Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);return Context.displayName=name,[Context.Provider,function useContext(){var _a;const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context&&strict){const error=new Error(null!=errorMessage?errorMessage:function getErrorMessage(hook,provider){return`${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`}(hookName,providerName));throw error.name="ContextError",null==(_a=Error.captureStackTrace)||_a.call(Error,error,useContext),error}return context},Context]}},"./node_modules/@chakra-ui/react-use-safe-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>useSafeLayoutEffect});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useSafeLayoutEffect=Boolean(null==globalThis?void 0:globalThis.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/@heroicons/react/24/outline/esm/DocumentIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function DocumentIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}))}))},"./src/components/Data/Display/Persona/Persona.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Medium:()=>Medium,RightElements:()=>RightElements,Small:()=>Small,XSmall:()=>XSmall,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Persona_stories});__webpack_require__("./node_modules/react/index.js");var Persona=__webpack_require__("./src/components/Data/Display/Persona/Persona.tsx"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Badge=(0,chunk_QEVFQ4EU.G)((function Badge2(props,ref){const styles=(0,chunk_T2VHL7RE.mq)("Badge",props),{className,...rest}=(0,dist.Lr)(props);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{ref,className:(0,shared_utils_dist.cx)("chakra-badge",props.className),...rest,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...styles}})}));Badge.displayName="Badge";var _Large$parameters,_Large$parameters2,_Large$parameters2$do,_Medium$parameters,_Medium$parameters2,_Medium$parameters2$d,_Small$parameters,_Small$parameters2,_Small$parameters2$do,_XSmall$parameters,_XSmall$parameters2,_XSmall$parameters2$d,_RightElements$parame,_RightElements$parame2,_RightElements$parame3,DocumentIcon=__webpack_require__("./node_modules/@heroicons/react/24/outline/esm/DocumentIcon.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Persona_stories={title:"SwayUI/Data/Display/Persona",component:Persona.Z};var Template=function Template(args){return(0,jsx_runtime.jsx)(Persona.Z,_objectSpread({},args))};Template.displayName="Template";var Large=Template.bind({});Large.args={size:"lg",name:"John Doe",secondaryText:"Software Engineer",avatarUrl:"https://bit.ly/dan-abramov",presence:"busy"};var Medium=Template.bind({});Medium.args={size:"md",name:"John Doe",secondaryText:"Software Engineer",avatarUrl:"https://bit.ly/dan-abramov",presence:"away"};var Small=Template.bind({});Small.args={size:"sm",name:"John Doe",secondaryText:"Software Engineer",avatarUrl:"https://bit.ly/dan-abramov",presence:"online"};var XSmall=Template.bind({});XSmall.args={size:"xs",name:"John Doe",secondaryText:"Software Engineer",avatarUrl:"https://bit.ly/dan-abramov",presence:"offline"};var RightElements=Template.bind({});RightElements.args={size:"md",name:"John Doe",nameRightElement:(0,jsx_runtime.jsx)(Badge,{colorScheme:"purple",children:"PRO"}),secondaryTextRightElement:(0,jsx_runtime.jsx)(DocumentIcon.Z,{width:14}),secondaryText:"Software Engineer",avatarUrl:"https://bit.ly/dan-abramov",presence:"away"},Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Persona {...args}></Persona>;\n}"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Medium.parameters=_objectSpread(_objectSpread({},Medium.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Medium$parameters=Medium.parameters)||void 0===_Medium$parameters?void 0:_Medium$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Persona {...args}></Persona>;\n}"},null===(_Medium$parameters2=Medium.parameters)||void 0===_Medium$parameters2||null===(_Medium$parameters2$d=_Medium$parameters2.docs)||void 0===_Medium$parameters2$d?void 0:_Medium$parameters2$d.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Persona {...args}></Persona>;\n}"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})}),XSmall.parameters=_objectSpread(_objectSpread({},XSmall.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_XSmall$parameters=XSmall.parameters)||void 0===_XSmall$parameters?void 0:_XSmall$parameters.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Persona {...args}></Persona>;\n}"},null===(_XSmall$parameters2=XSmall.parameters)||void 0===_XSmall$parameters2||null===(_XSmall$parameters2$d=_XSmall$parameters2.docs)||void 0===_XSmall$parameters2$d?void 0:_XSmall$parameters2$d.source)})}),RightElements.parameters=_objectSpread(_objectSpread({},RightElements.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_RightElements$parame=RightElements.parameters)||void 0===_RightElements$parame?void 0:_RightElements$parame.docs),{},{source:_objectSpread({originalSource:"args => {\n  return <Persona {...args}></Persona>;\n}"},null===(_RightElements$parame2=RightElements.parameters)||void 0===_RightElements$parame2||null===(_RightElements$parame3=_RightElements$parame2.docs)||void 0===_RightElements$parame3?void 0:_RightElements$parame3.source)})});var __namedExportsOrder=["Large","Medium","Small","XSmall","RightElements"]},"./src/components/Data/Display/Persona/Persona.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-2RQKHYD2.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/avatar/dist/chunk-MASXGPYE.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Persona=function Persona(props){function Badge(){return"online"===props.presence?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.M,{boxSize:"1.25em",bg:"green.500"}):"offline"===props.presence?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.M,{boxSize:"1.25em",bg:"gray.500"}):"away"===props.presence?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.M,{boxSize:"1.25em",bg:"yellow.500"}):"busy"===props.presence?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.M,{boxSize:"1.25em",bg:"red.500"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.U,{spacing:4,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.q,{src:props.avatarUrl,size:props.size,name:props.name,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Badge,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.xu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.U,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.x,{noOfLines:1,fontSize:props.size,fontWeight:600,lineHeight:"1em",children:props.name}),props.nameRightElement&&props.nameRightElement]}),props.secondaryText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.U,{spacing:1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.x,{noOfLines:1,color:"muted",fontSize:props.size,children:props.secondaryText}),props.secondaryTextRightElement&&props.secondaryTextRightElement]})]})]})};Persona.displayName="Persona";const __WEBPACK_DEFAULT_EXPORT__=Persona}}]);