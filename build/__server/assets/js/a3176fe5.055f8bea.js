"use strict";
exports.ids = ["56586"];
exports.modules = {
64731(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_components_jetson_camera_mount_md_a31_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_components_jetson_camera_mount_md_a31_json__rspack_import_0 = __webpack_require__(74700);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Budget version",
  "id": "budget-version",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.amazon.com/MOKOSE-Articulating-Base%EF%BC%8CFriction-Monitor-Action/dp/B0DCHZS218/ref=sr_1_13?crid=3AL8JE6LYU813&dib=eyJ2IjoiMSJ9.IQhAIRhC6Q0y1q-_yN4pD2TSGIV9ClphBaw6QixWxX7FTt_0vaM-8_eqx7tLlsNIatMGz6ZUyxaGyr3qQSs1cqXFyLvTKBjX5xyL3vc3z7McckRTNf1AnMJXDDUPTLwkFgjW3D8xioj3DIcREl3kBLL8oL2rLC20FJoielr-yGakwBnqSd3xUoeJrJZkXfdK3vdmonIjy6nC_ibDJ72wMP_snsEdidOlO-5exGU9mNA.VTuWraqMVUZHDiiuR9ikZMemuPtFLVW3D7BG_dgFLAY&dib_tag=se&keywords=2+Pack+Articulating+Magic+Arm+Wall&qid=1731028421&sprefix=2+pack+articulating+magic+arm+wall%2Caps%2C718&sr=8-13",
        children: "Mokose mount"
      }), "\nPrice: 25 EUR"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "budget-version",
      children: "Budget version"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["URL: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.amazon.com/dp/B07YQHCCT1?ref=ppx_yo2ov_dt_b_product_details&th=1",
        children: "https://www.amazon.com/dp/B07YQHCCT1?ref=ppx_yo2ov_dt_b_product_details&th=1"
      }), "\nPrice: 7 EUR"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__rspack_import_1.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
18439(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(30758);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},
74700(module) {
module.exports = JSON.parse('{"id":"entrance-observer/components-jetson/Camera mount","title":"Camera mount","description":"URL: Mokose mount","source":"@site/docs/entrance-observer/components-jetson/Camera mount.md","sourceDirName":"entrance-observer/components-jetson","slug":"/entrance-observer/components-jetson/Camera mount","permalink":"/docs/entrance-observer/components-jetson/Camera mount","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/entrance-observer/components-jetson/Camera mount.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Camera lens","permalink":"/docs/entrance-observer/components-jetson/Camera lens"},"next":{"title":"Jetson Nano case","permalink":"/docs/entrance-observer/components-jetson/Jetson Nano case"}}')

},

};
;