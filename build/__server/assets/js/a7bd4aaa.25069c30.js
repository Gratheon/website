"use strict";
exports.ids = ["5575"];
exports.modules = {
85093(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  k: () => (getDocsVersionSearchTag)
});
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


/** The search tag to append as each doc's metadata. */ function getDocsVersionSearchTag(pluginId, versionName) {
    return "docs-".concat(pluginId, "-").concat(versionName);
}
/**
 * Gets the relevant docs tags to search.
 * This is the logic that powers the contextual search feature.
 *
 * If user is browsing Android 1.4 docs, he'll get presented with:
 * - Android '1.4' docs
 * - iOS 'preferred | latest' docs
 *
 * The result is generic and not coupled to Algolia/DocSearch on purpose.
 */ function useDocsContextualSearchTags() {
    var allDocsData = useAllDocsData();
    var activePluginAndVersion = useActivePluginAndVersion();
    var docsPreferredVersionByPluginId = useDocsPreferredVersionByPluginId();
    // This can't use more specialized hooks because we are mapping over all
    // plugin instances.
    function getDocPluginTags(pluginId) {
        var activeVersion = (activePluginAndVersion === null || activePluginAndVersion === void 0 ? void 0 : activePluginAndVersion.activePlugin.pluginId) === pluginId ? activePluginAndVersion.activeVersion : undefined;
        var preferredVersion = docsPreferredVersionByPluginId[pluginId];
        var latestVersion = allDocsData[pluginId].versions.find(function(v) {
            return v.isLast;
        });
        var _ref;
        var version = (_ref = activeVersion !== null && activeVersion !== void 0 ? activeVersion : preferredVersion) !== null && _ref !== void 0 ? _ref : latestVersion;
        return getDocsVersionSearchTag(pluginId, version.name);
    }
    return _to_consumable_array(Object.keys(allDocsData).map(getDocPluginTags));
}


},
16222(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (DocVersionRoot)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(34874);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_3 = __webpack_require__(85093);
/* import */ var _docusaurus_plugin_content_docs_client__rspack_import_5 = __webpack_require__(849);
/* import */ var _docusaurus_renderRoutes__rspack_import_6 = __webpack_require__(70389);
/* import */ var _theme_SearchMetadata__rspack_import_2 = __webpack_require__(99717);
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






function DocVersionRootMetadata(props) {
    var version = props.version;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_2/* ["default"] */.A, {
                version: version.version,
                tag: (0,_docusaurus_plugin_content_docs_client__rspack_import_3/* .getDocsVersionSearchTag */.k)(version.pluginId, version.version)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .PageMetadata */.be, {
                children: version.noIndex && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                })
            })
        ]
    });
}
function DocVersionRootContent(props) {
    var version = props.version, route = props.route;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_4/* .HtmlClassNameProvider */.e3, {
        className: version.className,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_docs_client__rspack_import_5/* .DocsVersionProvider */.n, {
            version: version,
            children: (0,_docusaurus_renderRoutes__rspack_import_6/* .renderRoutes */.v)(route.routes)
        })
    });
}
function DocVersionRoot(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootMetadata, _object_spread({}, props)),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DocVersionRootContent, _object_spread({}, props))
        ]
    });
}


},

};
;