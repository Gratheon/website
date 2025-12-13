"use strict";
exports.ids = ["48615"];
exports.modules = {
15449(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_deep_learning_based_detection_of_honey_storage_areas_in_apismellifera_colonies_for_predicting_physical_parameters_of_honey_via_linear_regression_md_b49_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_deep_learning_based_detection_of_honey_storage_areas_in_apismellifera_colonies_for_predicting_physical_parameters_of_honey_via_linear_regression_md_b49_json__rspack_import_0 = __webpack_require__(74232);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	orgs: [
		'🇹🇭  Chiang Mai University'
	],
	year: '2025',
	title: 'Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression'
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
        href: (__webpack_require__(95244)/* ["default"] */.A) + "",
        children: "PDF"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("object", {
      data: (__webpack_require__(61092)/* ["default"] */.A),
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
61092(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/insects-16-00575-c279775f6908bb370fab0b6e01f1c7d2.pdf");

},
95244(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/insects-16-00575-c279775f6908bb370fab0b6e01f1c7d2.pdf");

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
74232(module) {
module.exports = JSON.parse('{"id":"papers/Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression","title":"Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression","description":"PDF","source":"@site/research/papers/Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression.md","sourceDirName":"papers","slug":"/papers/Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression","permalink":"/research/papers/Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"orgs":["🇹🇭  Chiang Mai University"],"year":"2025","title":"Deep Learning-Based Detection of Honey Storage Areas in Apismellifera Colonies for Predicting Physical Parameters of Honey via Linear Regression"},"sidebar":"researchSidebar","previous":{"title":"Current achievements and future developments of a novel AI based visual monitoring of beehives in ecotoxicology and for the monitoring of landscape structures","permalink":"/research/papers/Current achievements and future developments of a novel AI based visual monitoring of beehives in ecotoxicology and for the monitoring of landscape structures"},"next":{"title":"DeepLabCut-based daily behavioural and posture analysis in a cricket","permalink":"/research/papers/DeepLabCut-based daily behavioural and posture analysis in a cricket"}}')

},

};
;