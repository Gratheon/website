"use strict";
exports.ids = ["2692"];
exports.modules = {
33672(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_wifi_exposure_md_6b7_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_wifi_exposure_md_6b7_json__rspack_import_0 = __webpack_require__(46385);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'Defined exposure of honey bee colonies to simulated radiofrequency electromagnetic fields (RF-EMF): Negative effects on the homing ability, butn ot on brood development or longevity',
	orgs: [
		'🇩🇪 University of Hohenheim',
		'🇩🇪 Karlsruhe Institute of Technology'
	],
	year: '2023'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(19734)/* ["default"] */.A) + "",
          children: "PDF"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("object", {
      data: (__webpack_require__(75598)/* ["default"] */.A),
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
75598(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/wifi-exposure-70b4453761942a1aeb6d822fc9136232.pdf");

},
19734(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/wifi-exposure-70b4453761942a1aeb6d822fc9136232.pdf");

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
46385(module) {
module.exports = JSON.parse('{"id":"papers/wifi-exposure","title":"Defined exposure of honey bee colonies to simulated radiofrequency electromagnetic fields (RF-EMF): Negative effects on the homing ability, butn ot on brood development or longevity","description":"- PDF","source":"@site/research/papers/wifi-exposure.md","sourceDirName":"papers","slug":"/papers/wifi-exposure","permalink":"/research/papers/wifi-exposure","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Defined exposure of honey bee colonies to simulated radiofrequency electromagnetic fields (RF-EMF): Negative effects on the homing ability, butn ot on brood development or longevity","orgs":["🇩🇪 University of Hohenheim","🇩🇪 Karlsruhe Institute of Technology"],"year":"2023"},"sidebar":"researchSidebar","previous":{"title":"Beehive Smart Detector Device for the Detection of CriticalConditions That Utilize Edge Device Computations and DeepLearning Inferences","permalink":"/research/papers/pdfs/Beehive Smart Detector Device for the Detection of CriticalConditions That Utilize Edge Device Computations and DeepLearning Inferences"},"next":{"title":"⭐️ An AI-Based Open-Source Software for Varroa Mite Fall Analysis in Honeybee Colonies","permalink":"/research/papers/⭐️ An AI-Based Open-Source Software for Varroa Mite Fall Analysis in Honeybee Colonies"}}')

},

};
;