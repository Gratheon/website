"use strict";
exports.ids = ["15413"];
exports.modules = {
34133(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_advances_in_beehive_monitoring_systems_low_cost_integrating_sensor_technology_for_improved_apiculture_management_md_872_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_advances_in_beehive_monitoring_systems_low_cost_integrating_sensor_technology_for_improved_apiculture_management_md_872_json__rspack_import_0 = __webpack_require__(96604);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology forImproved Apiculture Management',
	year: '2024',
	orgs: [
		'🇷🇴 Research and Development Institute for Wildlife and Mountain Resources Miercurea Ciuc',
		'🇷🇴 Sapientia Hungarian University of Transylvania',
		'🇷🇴 National Institute for Research and Development in Environmental Protection',
		'🇷🇴 National Institute for Research and Development in Forestry "Marin Dracea"'
	]
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
  return (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
      target: "_blank",
      "data-noBrokenLinkCheck": true,
      href: (__webpack_require__(75200)/* ["default"] */.A) + "",
      children: "PDF"
    })
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
75200(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/Advances_in_Beehive_Monitoring_Systems_Low-Cost_In-d77708b9c3b3a1d7a3ecac94f5611a76.pdf");

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
96604(module) {
module.exports = JSON.parse('{"id":"papers/Advances in Beehive Monitoring Systems Low-Cost Integrating Sensor Technology for Improved Apiculture Management","title":"Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology forImproved Apiculture Management","description":"PDF","source":"@site/research/papers/Advances in Beehive Monitoring Systems Low-Cost Integrating Sensor Technology for Improved Apiculture Management.md","sourceDirName":"papers","slug":"/papers/Advances in Beehive Monitoring Systems Low-Cost Integrating Sensor Technology for Improved Apiculture Management","permalink":"/research/papers/Advances in Beehive Monitoring Systems Low-Cost Integrating Sensor Technology for Improved Apiculture Management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Advances in Beehive Monitoring Systems: Low-Cost Integrating Sensor Technology forImproved Apiculture Management","year":"2024","orgs":["🇷🇴 Research and Development Institute for Wildlife and Mountain Resources Miercurea Ciuc","🇷🇴 Sapientia Hungarian University of Transylvania","🇷🇴 National Institute for Research and Development in Environmental Protection","🇷🇴 National Institute for Research and Development in Forestry \\"Marin Dracea\\""]},"sidebar":"researchSidebar","previous":{"title":"Accuracy vs. Energy: An Assessment of Bee Object Inference inVideos from On-Hive Video Loggers with YOLOv3,YOLOv4-Tiny, and YOLOv7-Tiny","permalink":"/research/papers/Accuracy vs. Energy"},"next":{"title":"Ambient Electromagnetic Radiation as a Predictor of Honey Bee (Apis mellifera) Traffic in Linear and Non-Linear Regression: Numerical Stability, Physical Time and Energy Efficiency","permalink":"/research/papers/Ambient Electromagnetic Radiation as a Predictor of Honey Bee Traffic"}}')

},

};
;