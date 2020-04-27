(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return src_Provider})),__webpack_require__.d(__webpack_exports__,"c",(function(){return useRovingTabIndex})),__webpack_require__.d(__webpack_exports__,"b",(function(){return useFocusEffect}));var ActionTypes,array_find_index=__webpack_require__(124),array_find_index_default=__webpack_require__.n(array_find_index),react=__webpack_require__(0),react_default=__webpack_require__.n(react),warning=__webpack_require__(125),warning_default=__webpack_require__.n(warning),__assign=function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};function reducer(state,action){switch(action.type){case ActionTypes.REGISTER:var tabStops=state.tabStops,newTabStop_1=action.payload;if(0===tabStops.length)return __assign(__assign({},state),{selectedId:newTabStop_1.id,tabStops:[newTabStop_1]});if((index=array_find_index_default()(tabStops,(function(tabStop){return tabStop.id===newTabStop_1.id})))>=0)return warning_default()(!1,newTabStop_1.id+" tab stop already registered"),state;var indexToInsertAt=array_find_index_default()(tabStops,(function(tabStop){return!!(2&tabStop.domElementRef.current.compareDocumentPosition(newTabStop_1.domElementRef.current))}));return-1===indexToInsertAt&&(indexToInsertAt=tabStops.length),__assign(__assign({},state),{tabStops:__spreadArrays(tabStops.slice(0,indexToInsertAt),[newTabStop_1],tabStops.slice(indexToInsertAt))});case ActionTypes.UNREGISTER:var id_1=action.payload.id,filteredTabStops=state.tabStops.filter((function(tabStop){return tabStop.id!==id_1}));return filteredTabStops.length===state.tabStops.length?(warning_default()(!1,id_1+" tab stop already unregistered"),state):__assign(__assign({},state),{selectedId:state.selectedId===id_1?0===filteredTabStops.length?null:filteredTabStops[0].id:state.selectedId,tabStops:filteredTabStops});case ActionTypes.TAB_TO_PREVIOUS:case ActionTypes.TAB_TO_NEXT:var index,id_2=action.payload.id;if(-1===(index=array_find_index_default()(state.tabStops,(function(tabStop){return tabStop.id===id_2}))))return warning_default()(!1,id_2+" tab stop not registered"),state;var newIndex=action.type===ActionTypes.TAB_TO_PREVIOUS?index<=0?state.tabStops.length-1:index-1:index>=state.tabStops.length-1?0:index+1;return __assign(__assign({},state),{lastActionOrigin:"keyboard",selectedId:state.tabStops[newIndex].id});case ActionTypes.TAB_TO_FIRST:case ActionTypes.TAB_TO_LAST:if(!state.tabStops.length)return state;newIndex=action.type===ActionTypes.TAB_TO_FIRST?0:state.tabStops.length-1;return __assign(__assign({},state),{lastActionOrigin:"keyboard",selectedId:state.tabStops[newIndex].id});case ActionTypes.CLICKED:return __assign(__assign({},state),{lastActionOrigin:"mouse",selectedId:action.payload.id});case ActionTypes.CHANGE_DIRECTION:return __assign(__assign({},state),{direction:action.payload.direction});default:return state}}!function(ActionTypes){ActionTypes.REGISTER="REGISTER",ActionTypes.UNREGISTER="UNREGISTER",ActionTypes.TAB_TO_FIRST="TAB_TO_FIRST",ActionTypes.TAB_TO_LAST="TAB_TO_LAST",ActionTypes.TAB_TO_PREVIOUS="TAB_TO_PREVIOUS",ActionTypes.TAB_TO_NEXT="TAB_TO_NEXT",ActionTypes.CLICKED="CLICKED",ActionTypes.CHANGE_DIRECTION="CHANGE_DIRECTION"}(ActionTypes||(ActionTypes={}));var TabDirection,RovingTabIndexContext=react_default.a.createContext({state:{direction:"horizontal",selectedId:null,lastActionOrigin:null,tabStops:[]},dispatch:function(){}}),src_Provider=function(_a){var children=_a.children,_b=_a.direction,direction=void 0===_b?"horizontal":_b,_c=react_default.a.useReducer(reducer,{direction:"horizontal",selectedId:null,lastActionOrigin:null,tabStops:[]}),state=_c[0],dispatch=_c[1],context=react_default.a.useMemo((function(){return{state:state,dispatch:dispatch}}),[state]);return react_default.a.useEffect((function(){dispatch({type:ActionTypes.CHANGE_DIRECTION,payload:{direction:direction}})}),[direction,dispatch]),react_default.a.createElement(RovingTabIndexContext.Provider,{value:context},children)},lodash_uniqueid=__webpack_require__(290),lodash_uniqueid_default=__webpack_require__.n(lodash_uniqueid);function useRovingTabIndex(domElementRef,disabled,id){var tabIndexId=react_default.a.useRef(id||lodash_uniqueid_default()("roving-tabindex_")),context=react_default.a.useContext(RovingTabIndexContext);react_default.a.useLayoutEffect((function(){if(!disabled)return context.dispatch({type:ActionTypes.REGISTER,payload:{id:tabIndexId.current,domElementRef:domElementRef}}),function(){context.dispatch({type:ActionTypes.UNREGISTER,payload:{id:tabIndexId.current}})}}),[disabled]);var handleKeyDown=react_default.a.useCallback((function(event){var payload={id:tabIndexId.current},direction=function(event){if("horizontal"===context.state.direction||"both"===context.state.direction){if("ArrowLeft"===event.key)return TabDirection.Previous;if("ArrowRight"===event.key)return TabDirection.Next}if("vertical"===context.state.direction||"both"===context.state.direction){if("ArrowUp"===event.key)return TabDirection.Previous;if("ArrowDown"===event.key)return TabDirection.Next}return null}(event);direction===TabDirection.Previous?(context.dispatch({type:ActionTypes.TAB_TO_PREVIOUS,payload:payload}),event.preventDefault()):direction===TabDirection.Next?(context.dispatch({type:ActionTypes.TAB_TO_NEXT,payload:payload}),event.preventDefault()):"Home"===event.key?(context.dispatch({type:ActionTypes.TAB_TO_FIRST}),event.preventDefault()):"End"===event.key&&(context.dispatch({type:ActionTypes.TAB_TO_LAST}),event.preventDefault())}),[context.state]),handleClick=react_default.a.useCallback((function(){context.dispatch({type:ActionTypes.CLICKED,payload:{id:tabIndexId.current}})}),[]),selected=!disabled&&tabIndexId.current===context.state.selectedId;return[selected?0:-1,selected&&null!==context.state.lastActionOrigin,handleKeyDown,handleClick]}function useFocusEffect(focused,ref){react_default.a.useLayoutEffect((function(){focused&&ref.current&&ref.current.focus()}),[focused])}!function(TabDirection){TabDirection[TabDirection.Next=0]="Next",TabDirection[TabDirection.Previous=1]="Previous"}(TabDirection||(TabDirection={}))},291:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var templateObject_1,__makeTemplateObject=function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},Button=__webpack_require__(292).a.button(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  appearance: none;\n  background: none repeat scroll 0 0 transparent;\n  font-size: 1rem;\n  font-family: sans-serif;\n  line-height: 2rem;\n  color: rebeccapurple;\n  border: 2px solid rebeccapurple;\n  border-radius: 0.25em;\n  border-spacing: 0;\n  margin: 0.5rem;\n  padding: 0 0.75em;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  &:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"],["\n  appearance: none;\n  background: none repeat scroll 0 0 transparent;\n  font-size: 1rem;\n  font-family: sans-serif;\n  line-height: 2rem;\n  color: rebeccapurple;\n  border: 2px solid rebeccapurple;\n  border-radius: 0.25em;\n  border-spacing: 0;\n  margin: 0.5rem;\n  padding: 0 0.75em;\n\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  &:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"])))},296:function(module,exports,__webpack_require__){__webpack_require__(297),__webpack_require__(449),module.exports=__webpack_require__(450)},364:function(module,exports){},450:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(18),__webpack_require__(19),__webpack_require__(16),__webpack_require__(20),__webpack_require__(24);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(122),req=__webpack_require__(630);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.configure)((function loadStories(){req.keys().forEach((function(filename){return req(filename)}))}),module)}.call(this,__webpack_require__(225)(module))},630:function(module,exports,__webpack_require__){var map={"./stories/roving-tabindex.stories.tsx":631};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=630},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(289),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(122),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(53),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(70),___WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(126),_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(291),ToolbarButton=function(_a){var disabled=_a.disabled,children=_a.children,onClick=_a.onClick,id=react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(Object(lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)()),ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null),_b=Object(___WEBPACK_IMPORTED_MODULE_5__.c)(ref,disabled),tabIndex=_b[0],focused=_b[1],handleKeyDown=_b[2],handleClick=_b[3];return Object(___WEBPACK_IMPORTED_MODULE_5__.b)(focused,ref),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_6__.a,{ref:ref,id:id.current,onKeyDown:handleKeyDown,onClick:function(){handleClick(),onClick()},tabIndex:tabIndex,disabled:disabled},children)},stories=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("RovingTabIndex",module);stories.addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs),stories.add("Example",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__.a,{direction:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Direction",{Horizontal:"horizontal",Vertical:"vertical",Both:"both"},"horizontal")},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolbarButton,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Button One Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Button One clicked")},"Button One")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolbarButton,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Button Two Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Button Two clicked")},"Button Two"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolbarButton,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Button Three Disabled",!0),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Button Three clicked")},"Button Three"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolbarButton,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Button Four Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Button Four clicked")},"Button Four"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ToolbarButton,{disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Button Five Disabled",!1),onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action)("Button Five clicked")},"Button Five")))}))}.call(this,__webpack_require__(225)(module))}},[[296,1,2]]]);
//# sourceMappingURL=main.875c8155b1a847782e7c.bundle.js.map