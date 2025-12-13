exports.ids = ["16785"];
exports.modules = {
94584(module) {
// Exports
module.exports = {
	"backToTopButton": `backToTopButton_jePA`,
	"backToTopButtonShow": `backToTopButtonShow_Dktm`
};


},
39290(module) {
// Exports
module.exports = {
	"docMainContainer": `docMainContainer_aHOd`,
	"docMainContainerEnhanced": `docMainContainerEnhanced_x6rI`,
	"docItemWrapperEnhanced": `docItemWrapperEnhanced_DvOT`
};


},
80830(module) {
// Exports
module.exports = {
	"expandButton": `expandButton_PyZg`,
	"expandButtonIcon": `expandButtonIcon_behW`
};


},
44919(module) {
// Exports
module.exports = {
	"docSidebarContainer": `docSidebarContainer_PCNi`,
	"docSidebarContainerHidden": `docSidebarContainerHidden_nL37`,
	"sidebarViewport": `sidebarViewport_svvY`
};


},
4346(module) {
// Exports
module.exports = {
	"docRoot": `docRoot_YOz7`,
	"docsWrapper": `docsWrapper_a5BB`
};


},
36232(module) {
// Exports
module.exports = {
	"collapseSidebarButton": `collapseSidebarButton_McWK`,
	"collapseSidebarButtonIcon": `collapseSidebarButtonIcon_NOIt`
};


},
99140(module) {
// Exports
module.exports = {
	"menu": `menu_ib_h`,
	"menuWithAnnouncementBar": `menuWithAnnouncementBar__iG6`
};


},
19762(module) {
// Exports
module.exports = {
	"sidebar": `sidebar_yZ0v`,
	"sidebarWithHideableNavbar": `sidebarWithHideableNavbar_AlJF`,
	"sidebarHidden": `sidebarHidden_YOhz`,
	"sidebarLogo": `sidebarLogo_qUQE`
};


},
40041(module) {
// Exports
module.exports = {
	"categoryLink": `categoryLink_rikP`,
	"categoryLinkLabel": `categoryLinkLabel_dnDz`
};


},
80170(module) {
// Exports
module.exports = {
	"menuHtmlItem": `menuHtmlItem_WsdZ`
};


},
78417(module) {
// Exports
module.exports = {
	"menuExternalLink": `menuExternalLink_FdF6`,
	"linkLabel": `linkLabel_I9IG`
};


},
58810(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemsExpandedStateProvider),
  G: () => (useDocSidebarItemsExpandedState)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_theme_common_internal__rspack_import_2 = __webpack_require__(85950);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



var EmptyContext = Symbol('EmptyContext');
var Context = /*#__PURE__*/ react__rspack_import_1.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider(param) {
    var children = param.children;
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), expandedItem = _useState[0], setExpandedItem = _useState[1];
    var contextValue = (0,react__rspack_import_1.useMemo)(function() {
        return {
            expandedItem: expandedItem,
            setExpandedItem: setExpandedItem
        };
    }, [
        expandedItem
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
function useDocSidebarItemsExpandedState() {
    var value = (0,react__rspack_import_1.useContext)(Context);
    if (value === EmptyContext) {
        throw new _docusaurus_theme_common_internal__rspack_import_2/* .ReactContextError */.dV('DocSidebarItemsExpandedStateProvider');
    }
    return value;
}


},
121(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BackToTopButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(13376);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(10997);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(69461);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(94584);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function BackToTopButton() {
    var _useBackToTopButton = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useBackToTopButton */.H)({
        threshold: 300
    }), shown = _useBackToTopButton.shown, scrollToTop = _useBackToTopButton.scrollToTop;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('clean-btn', _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.backToTopButton */.G.common.backToTopButton, (_styles_module_css__rspack_import_3_default().backToTopButton), shown && (_styles_module_css__rspack_import_3_default().backToTopButtonShow)),
        type: "button",
        onClick: scrollToTop
    });
}


},
90367(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutMain)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(3713);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(39290);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocRootLayoutMain(param) {
    var hiddenSidebarContainer = param.hiddenSidebarContainer, children = param.children;
    var sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useDocsSidebar */.t)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)((_styles_module_css__rspack_import_2_default().docMainContainer), (hiddenSidebarContainer || !sidebar) && (_styles_module_css__rspack_import_2_default().docMainContainerEnhanced)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: (0,clsx__rspack_import_4/* ["default"] */.A)('container padding-top--md padding-bottom--lg', (_styles_module_css__rspack_import_2_default().docItemWrapper), hiddenSidebarContainer && (_styles_module_css__rspack_import_2_default().docItemWrapperEnhanced)),
            children: children
        })
    });
}


},
56143(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutSidebarExpandButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(13376);
/* import */ var _theme_Icon_Arrow__rspack_import_3 = __webpack_require__(20255);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(80830);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocRootLayoutSidebarExpandButton(param) {
    var toggleSidebar = param.toggleSidebar;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_4_default().expandButton),
        title: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Arrow__rspack_import_3/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().expandButtonIcon)
        })
    });
}


},
68914(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayoutSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_8 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(89315);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(10997);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(3713);
/* import */ var _docusaurus_router__rspack_import_6 = __webpack_require__(25557);
/* import */ var _theme_DocSidebar__rspack_import_2 = __webpack_require__(4706);
/* import */ var _theme_DocRoot_Layout_Sidebar_ExpandButton__rspack_import_3 = __webpack_require__(56143);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(44919);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}









// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange(param) {
    var children = param.children;
    var sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .useDocsSidebar */.t)();
    var _sidebar_name;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react__rspack_import_1.Fragment, {
        children: children
    }, (_sidebar_name = sidebar === null || sidebar === void 0 ? void 0 : sidebar.name) !== null && _sidebar_name !== void 0 ? _sidebar_name : 'noSidebar');
}
function DocRootLayoutSidebar(param) {
    var sidebar = param.sidebar, hiddenSidebarContainer = param.hiddenSidebarContainer, setHiddenSidebarContainer = param.setHiddenSidebarContainer;
    var pathname = (0,_docusaurus_router__rspack_import_6/* .useLocation */.zy)().pathname;
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(false), 2), hiddenSidebar = _useState[0], setHiddenSidebar = _useState[1];
    var toggleSidebar = (0,react__rspack_import_1.useCallback)(function() {
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        // onTransitionEnd won't fire when sidebar animation is disabled
        // fixes https://github.com/facebook/docusaurus/issues/8918
        if (!hiddenSidebar && (0,_docusaurus_theme_common__rspack_import_7/* .prefersReducedMotion */.O)()) {
            setHiddenSidebar(true);
        }
        setHiddenSidebarContainer(function(value) {
            return !value;
        });
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("aside", {
        className: (0,clsx__rspack_import_8/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_9/* .ThemeClassNames.docs.docSidebarContainer */.G.docs.docSidebarContainer, (_styles_module_css__rspack_import_4_default().docSidebarContainer), hiddenSidebarContainer && (_styles_module_css__rspack_import_4_default().docSidebarContainerHidden)),
        onTransitionEnd: function(e) {
            if (!e.currentTarget.classList.contains((_styles_module_css__rspack_import_4_default().docSidebarContainer))) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ResetOnSidebarChange, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_8/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().sidebarViewport), hiddenSidebar && (_styles_module_css__rspack_import_4_default().sidebarViewportHidden)),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar__rspack_import_2/* ["default"] */.A, {
                        sidebar: sidebar,
                        path: pathname,
                        onCollapse: toggleSidebar,
                        isHidden: hiddenSidebar
                    }),
                    hiddenSidebar && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Sidebar_ExpandButton__rspack_import_3/* ["default"] */.A, {
                        toggleSidebar: toggleSidebar
                    })
                ]
            })
        })
    });
}


},
43689(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocRootLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_6 = __webpack_require__(3713);
/* import */ var _theme_BackToTopButton__rspack_import_2 = __webpack_require__(121);
/* import */ var _theme_DocRoot_Layout_Sidebar__rspack_import_3 = __webpack_require__(68914);
/* import */ var _theme_DocRoot_Layout_Main__rspack_import_4 = __webpack_require__(90367);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(4346);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}







function DocRootLayout(param) {
    var children = param.children;
    var sidebar = (0,_docusaurus_plugin_content_docs_client__rspack_import_6/* .useDocsSidebar */.t)();
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(false), 2), hiddenSidebarContainer = _useState[0], setHiddenSidebarContainer = _useState[1];
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_5_default().docsWrapper),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BackToTopButton__rspack_import_2/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_5_default().docRoot),
                children: [
                    sidebar && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Sidebar__rspack_import_3/* ["default"] */.A, {
                        sidebar: sidebar.items,
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        setHiddenSidebarContainer: setHiddenSidebarContainer
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout_Main__rspack_import_4/* ["default"] */.A, {
                        hiddenSidebarContainer: hiddenSidebarContainer,
                        children: children
                    })
                ]
            })
        ]
    });
}


},
15066(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocRoot)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_6 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(34874);
/* import */ var _docusaurus_theme_common__rspack_import_7 = __webpack_require__(10997);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_4 = __webpack_require__(72604);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_8 = __webpack_require__(3713);
/* import */ var _theme_DocRoot_Layout__rspack_import_2 = __webpack_require__(43689);
/* import */ var _theme_NotFound_Content__rspack_import_3 = __webpack_require__(74325);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocRoot(props) {
    var currentDocRouteMetadata = (0,_docusaurus_plugin_content_docs_client__rspack_import_4/* .useDocRootMetadata */.B5)(props);
    if (!currentDocRouteMetadata) {
        // We only render the not found content to avoid a double layout
        // see https://github.com/facebook/docusaurus/pull/7966#pullrequestreview-1077276692
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_NotFound_Content__rspack_import_3/* ["default"] */.A, {});
    }
    var docElement = currentDocRouteMetadata.docElement, sidebarName = currentDocRouteMetadata.sidebarName, sidebarItems = currentDocRouteMetadata.sidebarItems;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .HtmlClassNameProvider */.e3, {
        className: (0,clsx__rspack_import_6/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_7/* .ThemeClassNames.page.docsDocPage */.G.page.docsDocPage),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_8/* .DocsSidebarProvider */.V, {
            name: sidebarName,
            items: sidebarItems,
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocRoot_Layout__rspack_import_2/* ["default"] */.A, {
                children: docElement
            })
        })
    });
}


},
34481(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CollapseButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(13376);
/* import */ var _theme_Icon_Arrow__rspack_import_3 = __webpack_require__(20255);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(36232);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function CollapseButton(param) {
    var onClick = param.onClick;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        title: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('button button--secondary button--outline', (_styles_module_css__rspack_import_4_default().collapseSidebarButton)),
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Arrow__rspack_import_3/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().collapseSidebarButtonIcon)
        })
    });
}


},
80319(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarDesktopContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_7 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(10997);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(52707);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(75630);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(13376);
/* import */ var _theme_DocSidebarItems__rspack_import_3 = __webpack_require__(73862);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(99140);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}








function useShowAnnouncementBar() {
    var isActive = (0,_docusaurus_theme_common_internal__rspack_import_5/* .useAnnouncementBar */.M)().isActive;
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(isActive), 2), showAnnouncementBar = _useState[0], setShowAnnouncementBar = _useState[1];
    (0,_docusaurus_theme_common_internal__rspack_import_6/* .useScrollPosition */.Mq)(function(param) {
        var scrollY = param.scrollY;
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent(param) {
    var path = param.path, sidebar = param.sidebar, className = param.className;
    var showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("nav", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx__rspack_import_7/* ["default"] */.A)('menu thin-scrollbar', (_styles_module_css__rspack_import_4_default().menu), showAnnouncementBar && (_styles_module_css__rspack_import_4_default().menuWithAnnouncementBar), className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
            className: (0,clsx__rspack_import_7/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarMenu */.G.docs.docSidebarMenu, 'menu__list'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_3/* ["default"] */.A, {
                items: sidebar,
                activePath: path,
                level: 1
            })
        })
    });
}


},
34001(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_7 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(81076);
/* import */ var _theme_Logo__rspack_import_2 = __webpack_require__(9407);
/* import */ var _theme_DocSidebar_Desktop_CollapseButton__rspack_import_3 = __webpack_require__(34481);
/* import */ var _theme_DocSidebar_Desktop_Content__rspack_import_4 = __webpack_require__(80319);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(19762);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function DocSidebarDesktop(param) {
    var path = param.path, sidebar = param.sidebar, onCollapse = param.onCollapse, isHidden = param.isHidden;
    var _useThemeConfig = (0,_docusaurus_theme_common__rspack_import_6/* .useThemeConfig */.p)(), hideOnScroll = _useThemeConfig.navbar.hideOnScroll, _useThemeConfig_docs = _useThemeConfig.docs, hideable = _useThemeConfig_docs.sidebar.hideable;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)((_styles_module_css__rspack_import_5_default().sidebar), hideOnScroll && (_styles_module_css__rspack_import_5_default().sidebarWithHideableNavbar), isHidden && (_styles_module_css__rspack_import_5_default().sidebarHidden)),
        children: [
            hideOnScroll && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Logo__rspack_import_2/* ["default"] */.A, {
                tabIndex: -1,
                className: (_styles_module_css__rspack_import_5_default().sidebarLogo)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop_Content__rspack_import_4/* ["default"] */.A, {
                path: path,
                sidebar: sidebar
            }),
            hideable && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop_CollapseButton__rspack_import_3/* ["default"] */.A, {
                onClick: onCollapse
            })
        ]
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(DocSidebarDesktop));


},
47125(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(10997);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(96942);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(59475);
/* import */ var _theme_DocSidebarItems__rspack_import_2 = __webpack_require__(73862);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





// eslint-disable-next-line react/function-component-definition
var DocSidebarMobileSecondaryMenu = function(param) {
    var sidebar = param.sidebar, path = param.path;
    var mobileSidebar = (0,_docusaurus_theme_common_internal__rspack_import_3/* .useNavbarMobileSidebar */.M)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_5/* .ThemeClassNames.docs.docSidebarMenu */.G.docs.docSidebarMenu, 'menu__list'),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_2/* ["default"] */.A, {
            items: sidebar,
            activePath: path,
            onItemClick: function(item) {
                // Mobile sidebar should only be closed if the category has a link
                if (item.type === 'category' && item.href) {
                    mobileSidebar.toggle();
                }
                if (item.type === 'link') {
                    mobileSidebar.toggle();
                }
            },
            level: 1
        })
    });
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_6/* .NavbarSecondaryMenuFiller */.GX, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(DocSidebarMobile));


},
4706(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(39679);
/* import */ var _theme_DocSidebar_Desktop__rspack_import_2 = __webpack_require__(34001);
/* import */ var _theme_DocSidebar_Mobile__rspack_import_3 = __webpack_require__(47125);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}





function DocSidebar(props) {
    var windowSize = (0,_docusaurus_theme_common__rspack_import_4/* .useWindowSize */.l)();
    // Desktop sidebar visible on hydration: need SSR rendering
    var shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    var shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            shouldRenderSidebarDesktop && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Desktop__rspack_import_2/* ["default"] */.A, _object_spread({}, props)),
            shouldRenderSidebarMobile && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebar_Mobile__rspack_import_3/* ["default"] */.A, _object_spread({}, props))
        ]
    });
}


},
74586(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemCategory)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_14 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(85950);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(81076);
/* import */ var _docusaurus_theme_common__rspack_import_12 = __webpack_require__(2512);
/* import */ var _docusaurus_theme_common__rspack_import_15 = __webpack_require__(10997);
/* import */ var _docusaurus_theme_common_internal__rspack_import_11 = __webpack_require__(99819);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_9 = __webpack_require__(72604);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_13 = __webpack_require__(58810);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(11084);
/* import */ var _docusaurus_Translate__rspack_import_3 = __webpack_require__(13376);
/* import */ var _docusaurus_useIsBrowser__rspack_import_4 = __webpack_require__(26605);
/* import */ var _theme_DocSidebarItems__rspack_import_5 = __webpack_require__(73862);
/* import */ var _theme_DocSidebarItem_Link__rspack_import_6 = __webpack_require__(32314);
/* import */ var _styles_module_css__rspack_import_7 = __webpack_require__(40041);
/* import */ var _styles_module_css__rspack_import_7_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_7);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}












// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory(param) {
    var isActive = param.isActive, collapsed = param.collapsed, updateCollapsed = param.updateCollapsed, activePath = param.activePath;
    var wasActive = (0,_docusaurus_theme_common__rspack_import_8/* .usePrevious */.ZC)(isActive);
    var previousActivePath = (0,_docusaurus_theme_common__rspack_import_8/* .usePrevious */.ZC)(activePath);
    (0,react__rspack_import_1.useEffect)(function() {
        var justBecameActive = isActive && !wasActive;
        var stillActiveButPathChanged = isActive && wasActive && activePath !== previousActivePath;
        if ((justBecameActive || stillActiveButPathChanged) && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed,
        activePath,
        previousActivePath
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    var isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_4/* ["default"] */.A)();
    return (0,react__rspack_import_1.useMemo)(function() {
        if (item.href && !item.linkUnlisted) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .findFirstSidebarItemLink */.Nr)(item);
    }, [
        item,
        isBrowser
    ]);
}
function CollapseButton(param) {
    var collapsed = param.collapsed, categoryLabel = param.categoryLabel, onClick = param.onClick;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": collapsed ? (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
            id: 'theme.DocSidebarItem.expandCategoryAriaLabel',
            message: "Expand sidebar category '{label}'",
            description: 'The ARIA label to expand the sidebar category'
        }, {
            label: categoryLabel
        }) : (0,_docusaurus_Translate__rspack_import_3/* .translate */.T)({
            id: 'theme.DocSidebarItem.collapseCategoryAriaLabel',
            message: "Collapse sidebar category '{label}'",
            description: 'The ARIA label to collapse the sidebar category'
        }, {
            label: categoryLabel
        }),
        "aria-expanded": !collapsed,
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function CategoryLinkLabel(param) {
    var label = param.label;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        title: label,
        className: (_styles_module_css__rspack_import_7_default().categoryLinkLabel),
        children: label
    });
}
function DocSidebarItemCategory(props) {
    var visibleChildren = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .useVisibleSidebarItems */.Y)(props.item.items, props.activePath);
    if (visibleChildren.length === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocSidebarItemCategoryEmpty, _object_spread({}, props));
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocSidebarItemCategoryCollapsible, _object_spread({}, props));
    }
}
function isCategoryWithHref(category) {
    return typeof category.href === 'string';
}
// If a category doesn't have any visible children, we render it as a link
function DocSidebarItemCategoryEmpty(_param) {
    var item = _param.item, props = _object_without_properties(_param, [
        "item"
    ]);
    // If the category has no link, we don't render anything
    // It's not super useful to render a category you can't open nor click
    if (!isCategoryWithHref(item)) {
        return null;
    }
    // We remove props that don't make sense for a link and forward the rest
    var type = item.type, collapsed = item.collapsed, collapsible = item.collapsible, items = item.items, linkUnlisted = item.linkUnlisted, forwardableProps = _object_without_properties(item, [
        "type",
        "collapsed",
        "collapsible",
        "items",
        "linkUnlisted"
    ]);
    var linkItem = _object_spread({
        type: 'link'
    }, forwardableProps);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Link__rspack_import_6/* ["default"] */.A, _object_spread({
        item: linkItem
    }, props));
}
function DocSidebarItemCategoryCollapsible(_param) {
    var item = _param.item, onItemClick = _param.onItemClick, activePath = _param.activePath, level = _param.level, index = _param.index, props = _object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    var items = item.items, label = item.label, collapsible = item.collapsible, className = item.className, href = item.href;
    var _useThemeConfig = (0,_docusaurus_theme_common__rspack_import_10/* .useThemeConfig */.p)(), _useThemeConfig_docs = _useThemeConfig.docs, autoCollapseCategories = _useThemeConfig_docs.sidebar.autoCollapseCategories;
    var hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    var isActive = (0,_docusaurus_plugin_content_docs_client__rspack_import_9/* .isActiveSidebarItem */.w8)(item, activePath);
    var isCurrentPage = (0,_docusaurus_theme_common_internal__rspack_import_11/* .isSamePath */.ys)(href, activePath);
    var _useCollapsible = (0,_docusaurus_theme_common__rspack_import_12/* .useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: function() {
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    }), collapsed = _useCollapsible.collapsed, setCollapsed = _useCollapsible.setCollapsed;
    var _useDocSidebarItemsExpandedState = (0,_docusaurus_plugin_content_docs_client__rspack_import_13/* .useDocSidebarItemsExpandedState */.G)(), expandedItem = _useDocSidebarItemsExpandedState.expandedItem, setExpandedItem = _useDocSidebarItemsExpandedState.setExpandedItem;
    // Use this instead of `setCollapsed`, because it is also reactive
    var updateCollapsed = function() {
        var toCollapsed = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !collapsed;
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive: isActive,
        collapsed: collapsed,
        updateCollapsed: updateCollapsed,
        activePath: activePath
    });
    (0,react__rspack_import_1.useEffect)(function() {
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    var handleItemClick = function(e) {
        onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        if (collapsible) {
            if (href) {
                // When already on the category's page, we collapse it
                // We don't use "isActive" because it would collapse the
                // category even when we browse a children element
                // See https://github.com/facebook/docusaurus/issues/11213
                if (isCurrentPage) {
                    e.preventDefault();
                    updateCollapsed();
                } else {
                    // When navigating to a new category, we always expand
                    // see https://github.com/facebook/docusaurus/issues/10854#issuecomment-2609616182
                    updateCollapsed(false);
                }
            } else {
                e.preventDefault();
                updateCollapsed();
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
        className: (0,clsx__rspack_import_14/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_15/* .ThemeClassNames.docs.docSidebarItemCategory */.G.docs.docSidebarItemCategory, _docusaurus_theme_common__rspack_import_15/* .ThemeClassNames.docs.docSidebarItemCategoryLevel */.G.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (0,clsx__rspack_import_14/* ["default"] */.A)('menu__list-item-collapsible', {
                    'menu__list-item-collapsible--active': isCurrentPage
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, _object_spread_props(_object_spread({
                        className: (0,clsx__rspack_import_14/* ["default"] */.A)((_styles_module_css__rspack_import_7_default().categoryLink), 'menu__link', {
                            'menu__link--sublist': collapsible,
                            'menu__link--sublist-caret': !href && collapsible,
                            'menu__link--active': isActive
                        }),
                        onClick: handleItemClick,
                        "aria-current": isCurrentPage ? 'page' : undefined,
                        role: collapsible && !href ? 'button' : undefined,
                        "aria-expanded": collapsible && !href ? !collapsed : undefined,
                        href: collapsible ? hrefWithSSRFallback !== null && hrefWithSSRFallback !== void 0 ? hrefWithSSRFallback : '#' : hrefWithSSRFallback
                    }, props), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CategoryLinkLabel, {
                            label: label
                        })
                    })),
                    href && collapsible && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CollapseButton, {
                        collapsed: collapsed,
                        categoryLabel: label,
                        onClick: function(e) {
                            e.preventDefault();
                            updateCollapsed();
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_12/* .Collapsible */.N, {
                lazy: true,
                as: "ul",
                className: "menu__list",
                collapsed: collapsed,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItems__rspack_import_5/* ["default"] */.A, {
                    items: items,
                    tabIndex: collapsed ? -1 : 0,
                    onItemClick: onItemClick,
                    activePath: activePath,
                    level: level + 1
                })
            })
        ]
    });
}


},
85575(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemHtml)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(10997);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(80170);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocSidebarItemHtml(param) {
    var item = param.item, level = param.level, index = param.index;
    var value = item.value, defaultStyle = item.defaultStyle, className = item.className;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docSidebarItemLink */.G.docs.docSidebarItemLink, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.docs.docSidebarItemLinkLevel */.G.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            (_styles_module_css__rspack_import_2_default().menuHtmlItem),
            'menu__list-item'
        ], className),
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    }, index);
}


},
32314(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItemLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_7 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_8 = __webpack_require__(10997);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(72604);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(11084);
/* import */ var _docusaurus_isInternalUrl__rspack_import_6 = __webpack_require__(69220);
/* import */ var _theme_Icon_ExternalLink__rspack_import_3 = __webpack_require__(505);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(78417);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}









function LinkLabel(param) {
    var label = param.label;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        title: label,
        className: (_styles_module_css__rspack_import_4_default().linkLabel),
        children: label
    });
}
function DocSidebarItemLink(_param) {
    var item = _param.item, onItemClick = _param.onItemClick, activePath = _param.activePath, level = _param.level, index = _param.index, props = _object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    var href = item.href, label = item.label, className = item.className, autoAddBaseUrl = item.autoAddBaseUrl;
    var isActive = (0,_docusaurus_plugin_content_docs_client__rspack_import_5/* .isActiveSidebarItem */.w8)(item, activePath);
    var isInternalLink = (0,_docusaurus_isInternalUrl__rspack_import_6/* ["default"] */.A)(href);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_7/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarItemLink */.G.docs.docSidebarItemLink, _docusaurus_theme_common__rspack_import_8/* .ThemeClassNames.docs.docSidebarItemLinkLevel */.G.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, _object_spread_props(_object_spread({
            className: (0,clsx__rspack_import_7/* ["default"] */.A)('menu__link', !isInternalLink && (_styles_module_css__rspack_import_4_default().menuExternalLink), {
                'menu__link--active': isActive
            }),
            autoAddBaseUrl: autoAddBaseUrl,
            "aria-current": isActive ? 'page' : undefined,
            to: href
        }, isInternalLink && {
            onClick: onItemClick ? function() {
                return onItemClick(item);
            } : undefined
        }, props), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(LinkLabel, {
                    label: label
                }),
                !isInternalLink && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_ExternalLink__rspack_import_3/* ["default"] */.A, {})
            ]
        }))
    }, label);
}


},
99749(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (DocSidebarItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _theme_DocSidebarItem_Category__rspack_import_2 = __webpack_require__(74586);
/* import */ var _theme_DocSidebarItem_Link__rspack_import_3 = __webpack_require__(32314);
/* import */ var _theme_DocSidebarItem_Html__rspack_import_4 = __webpack_require__(85575);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}





function DocSidebarItem(_param) {
    var item = _param.item, props = _object_without_properties(_param, [
        "item"
    ]);
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Category__rspack_import_2/* ["default"] */.A, _object_spread({
                item: item
            }, props));
        case 'html':
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Html__rspack_import_4/* ["default"] */.A, _object_spread({
                item: item
            }, props));
        case 'link':
        default:
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem_Link__rspack_import_3/* ["default"] */.A, _object_spread({
                item: item
            }, props));
    }
}


},
73862(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(72604);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_4 = __webpack_require__(58810);
/* import */ var _theme_DocSidebarItem__rspack_import_2 = __webpack_require__(99749);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}




function DocSidebarItems(_param) {
    var items = _param.items, props = _object_without_properties(_param, [
        "items"
    ]);
    var visibleItems = (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .useVisibleSidebarItems */.Y)(items, props.activePath);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_4/* .DocSidebarItemsExpandedStateProvider */.A, {
        children: visibleItems.map(function(item, index) {
            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_DocSidebarItem__rspack_import_2/* ["default"] */.A, _object_spread({
                item: item,
                index: index
            }, props), index);
        })
    });
}
// Optimize sidebar at each "level"
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_1.memo)(DocSidebarItems));


},
20255(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconArrow)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function IconArrow(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", _object_spread_props(_object_spread({
        width: "20",
        height: "20",
        "aria-hidden": "true"
    }, props), {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
            fill: "#7a7a7a",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                    d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
                })
            ]
        })
    }));
}


},
74325(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (NotFoundContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(13376);
/* import */ var _theme_Heading__rspack_import_3 = __webpack_require__(78230);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function NotFoundContent(param) {
    var className = param.className;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)('container margin-vert--xl', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "col col--6 col--offset-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_3/* ["default"] */.A, {
                        as: "h1",
                        className: "hero__title",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.title",
                            description: "The title of the 404 page",
                            children: "Page Not Found"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p1",
                            description: "The first paragraph of the 404 page",
                            children: "We could not find what you were looking for."
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                            id: "theme.NotFound.p2",
                            description: "The 2nd paragraph of the 404 page",
                            children: "Please contact the owner of the site that linked you to the original URL and let them know their link is broken."
                        })
                    })
                ]
            })
        })
    });
}


},
69461(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  H: () => (useBackToTopButton)
});
/* import */ var react__rspack_import_0 = __webpack_require__(30758);
/* import */ var _utils_scrollUtils__rspack_import_1 = __webpack_require__(75630);
/* import */ var _utils_useLocationChange__rspack_import_2 = __webpack_require__(25472);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/** Wires the logic for the back to top button. */ function useBackToTopButton(param) {
    var threshold = param.threshold;
    var _useState = _sliced_to_array((0,react__rspack_import_0.useState)(false), 2), shown = _useState[0], setShown = _useState[1];
    var isFocusedAnchor = (0,react__rspack_import_0.useRef)(false);
    var _useSmoothScrollTo = (0,_utils_scrollUtils__rspack_import_1/* .useSmoothScrollTo */.gk)(), startScroll = _useSmoothScrollTo.startScroll, cancelScroll = _useSmoothScrollTo.cancelScroll;
    (0,_utils_scrollUtils__rspack_import_1/* .useScrollPosition */.Mq)(function(param, lastPosition) {
        var scrollTop = param.scrollY;
        var lastScrollTop = lastPosition === null || lastPosition === void 0 ? void 0 : lastPosition.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,_utils_useLocationChange__rspack_import_2/* .useLocationChange */.$)(function(locationChangeEvent) {
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown: shown,
        scrollToTop: function() {
            return startScroll(0);
        }
    };
} //# sourceMappingURL=useBackToTopButton.js.map


},

};
;