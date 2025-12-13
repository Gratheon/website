"use strict";
exports.ids = ["17998"];
exports.modules = {
92295(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_internet_of_things_smart_beehive_network_md_9aa_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_internet_of_things_smart_beehive_network_md_9aa_json__rspack_import_0 = __webpack_require__(54921);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'Internet of Things Smart Beehive Network: Homogeneous Data,Modeling, and Forecasting the Honey Robbing Phenomenon',
	orgs: [
		'🇵🇱 Warsaw University of Life Sciences'
	],
	year: '2024'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(78502)/* ["default"] */.A) + "",
        children: "PDF"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("object", {
      data: (__webpack_require__(51726)/* ["default"] */.A),
      type: "application/pdf",
      width: "100%",
      height: "800"
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
51726(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/inventions-10-00023-3e290ab0fef0806da846b62d8a4fddc4.pdf");

},
78502(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/inventions-10-00023-3e290ab0fef0806da846b62d8a4fddc4.pdf");

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
54921(module) {
module.exports = JSON.parse('{"id":"papers/Internet of Things Smart Beehive Network","title":"Internet of Things Smart Beehive Network: Homogeneous Data,Modeling, and Forecasting the Honey Robbing Phenomenon","description":"PDF","source":"@site/research/papers/Internet of Things Smart Beehive Network.md","sourceDirName":"papers","slug":"/papers/Internet of Things Smart Beehive Network","permalink":"/research/papers/Internet of Things Smart Beehive Network","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Internet of Things Smart Beehive Network: Homogeneous Data,Modeling, and Forecasting the Honey Robbing Phenomenon","orgs":["🇵🇱 Warsaw University of Life Sciences"],"year":"2024"},"sidebar":"researchSidebar","previous":{"title":"Intelligent beehive monitoring system based on internet of things and colony state analysis","permalink":"/research/papers/Intelligent beehive monitoring system based on internet of things and colony state analysis"},"next":{"title":"IoT and Machine Learning Techniques for Precision Beekeeping:A Review","permalink":"/research/papers/IoT and Machine Learning Techniques for Precision Beekeeping A Review"}}')

},

};
;