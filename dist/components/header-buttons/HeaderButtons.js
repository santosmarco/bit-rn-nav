var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _propTypes=_interopRequireDefault(require("prop-types"));var _vectorIcons=require("@expo/vector-icons");var _reactNavigationHeaderButtons=require("react-navigation-header-buttons");var _this=this,_jsxFileName="";var ICON_LIBRARIES={AntDesign:_vectorIcons.AntDesign,Entypo:_vectorIcons.Entypo,EvilIcons:_vectorIcons.EvilIcons,Feather:_vectorIcons.Feather,FontAwesome:_vectorIcons.FontAwesome,FontAwesome5:_vectorIcons.FontAwesome5,Fontisto:_vectorIcons.Fontisto,Foundation:_vectorIcons.Foundation,Ionicons:_vectorIcons.Ionicons,MaterialCommunityIcons:_vectorIcons.MaterialCommunityIcons,MaterialIcons:_vectorIcons.MaterialIcons,Octicons:_vectorIcons.Octicons,SimpleLineIcons:_vectorIcons.SimpleLineIcons,Zocial:_vectorIcons.Zocial};var getIconComponent=function getIconComponent(iconLibraryKey){return ICON_LIBRARIES[iconLibraryKey];};var MyHeaderButtons=function MyHeaderButtons(_ref){var defaultIconLibrary=_ref.defaultIconLibrary,_ref$defaultIconSize=_ref.defaultIconSize,defaultIconSize=_ref$defaultIconSize===void 0?23:_ref$defaultIconSize,_ref$defaultIconColor=_ref.defaultIconColor,defaultIconColor=_ref$defaultIconColor===void 0?"black":_ref$defaultIconColor,_ref$items=_ref.items,items=_ref$items===void 0?[{}]:_ref$items;return _react.default.createElement(_reactNavigationHeaderButtons.HeaderButtons,{HeaderButtonComponent:function HeaderButtonComponent(props){return _react.default.createElement(_reactNavigationHeaderButtons.HeaderButton,props);}},items.map(function(item){var _item$icon,_item$icon2,_item$icon3,_item$icon4,_item$icon5;if(!item.title)throw new Error("All <HeaderButtons> items MUST contain a `title` prop.");return _react.default.createElement(_reactNavigationHeaderButtons.Item,{title:item.title,iconName:(_item$icon=item.icon)==null?void 0:_item$icon.name,IconComponent:(_item$icon2=item.icon)!=null&&_item$icon2.library?getIconComponent(item.icon.library):getIconComponent(defaultIconLibrary),iconSize:((_item$icon3=item.icon)==null?void 0:_item$icon3.size)||defaultIconSize,color:((_item$icon4=item.icon)==null?void 0:_item$icon4.color)||defaultIconColor,buttonStyle:(_item$icon5=item.icon)==null?void 0:_item$icon5.style,onPress:item.onPress,style:item.style});}));};MyHeaderButtons.propTypes={defaultIconLibrary:_propTypes.default.oneOf(Object.keys(ICON_LIBRARIES)).isRequired,defaultIconSize:_propTypes.default.number,defaultIconColor:_propTypes.default.string,items:_propTypes.default.arrayOf(_propTypes.default.shape({title:_propTypes.default.string.isRequired,icon:_propTypes.default.shape({name:_propTypes.default.string,library:_propTypes.default.oneOf(Object.keys(ICON_LIBRARIES)),size:_propTypes.default.number,color:_propTypes.default.string,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])}),onPress:_propTypes.default.func.isRequired,style:_propTypes.default.oneOfType([_propTypes.default.object,_propTypes.default.array])}))};var _default=MyHeaderButtons;exports.default=_default;

//# sourceMappingURL=HeaderButtons.js.map