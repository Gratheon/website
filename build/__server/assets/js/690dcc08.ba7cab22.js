"use strict";
exports.ids = ["48907"];
exports.modules = {
9848(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_components_orin_display_md_690_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_components_orin_display_md_690_json__rspack_import_0 = __webpack_require__(87755);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.amazon.com/dp/B0BKGCB18T?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1",
        children: "https://www.amazon.com/dp/B0BKGCB18T?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1"
      }), "\n$47.99"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "7inch capacitive touch screen, 1024x600 resolution, IPS full angle display, with the characteristics of real and vivid color display and excellent dynamic image quality. tempered glass touch panel, supports five -point touch."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Perfectly adapt to the Raspberry Pi. The packaging comes with the Raspberry Pi 3B/4B adapters, making the screen and the motherboard connect more convenient. Also you can use it with other mainstream development boards such as Banana Pi, BB BLACK etc."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Support audio output, with portable stereo dual speakers and 3.5 mm headphone jacks, which provides excellent audio experience. In addition you can easily adjust the volume and brightness settings by the dial switch."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Plug and use without driving. It can not only be used as a game console monitor, but also can be used as a computer split screen display and supports Win10/Win8/Win7 system.DIY by yourself."
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "HDMI cables and USB power cables are provided, especially the HDMI adapters on the Raspberry Pi board so that you can easily connect without additional cables, and use with a stand to make your desk cleaner and easier to operate!"
      }), "\n"]
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
87755(module) {
module.exports = JSON.parse('{"id":"entrance-observer/components-orin/Display","title":"Display","description":"https://www.amazon.com/dp/B0BKGCB18T?ref=ppxyo2ovdtbfedasintitle&th=1","source":"@site/docs/entrance-observer/components-orin/Display.md","sourceDirName":"entrance-observer/components-orin","slug":"/entrance-observer/components-orin/Display","permalink":"/docs/entrance-observer/components-orin/Display","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/entrance-observer/components-orin/Display.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Acrylic Clear Case (Type D) Specialized for NVIDIA Jetson Nano 2GB Developer Kit, Easy Access for GPIO and Camera Port, Cut-Outs for The Essential Ports and TF Card","permalink":"/docs/entrance-observer/components-orin/Case"},"next":{"title":"M2 SSD","permalink":"/docs/entrance-observer/components-orin/M2 SSD"}}')

},

};
;