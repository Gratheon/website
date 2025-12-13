"use strict";
exports.ids = ["67134"];
exports.modules = {
28315(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_bee_piv_a_method_to_measure_apis_mellifera_traffic_with_particle_image_velocimetry_in_videos_md_c39_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_bee_piv_a_method_to_measure_apis_mellifera_traffic_with_particle_image_velocimetry_in_videos_md_c39_json__rspack_import_0 = __webpack_require__(18094);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'BeePIV: A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos',
	orgs: [
		'🇺🇸 Utah State University'
	],
	year: '2021',
	hide_table_of_contents: true
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
          href: (__webpack_require__(14823)/* ["default"] */.A) + "",
          children: "PDF"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("object", {
      data: (__webpack_require__(18111)/* ["default"] */.A),
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
18111(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/applsci-11-02276-v2-9db68676033baaac35ac90591bcb93ff.pdf");

},
14823(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/applsci-11-02276-v2-9db68676033baaac35ac90591bcb93ff.pdf");

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
18094(module) {
module.exports = JSON.parse('{"id":"papers/BeePIV A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos","title":"BeePIV: A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos","description":"- PDF","source":"@site/research/papers/BeePIV A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos.md","sourceDirName":"papers","slug":"/papers/BeePIV A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos","permalink":"/research/papers/BeePIV A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BeePIV: A Method to Measure Apis Mellifera Traffic with Particle Image Velocimetry in Videos","orgs":["🇺🇸 Utah State University"],"year":"2021","hide_table_of_contents":true},"sidebar":"researchSidebar","previous":{"title":"BeeNet: An End-To-End Deep Network For Bee Surveillance","permalink":"/research/papers/BeeNet - An End-To-End Deep Network For Bee Surveillance"},"next":{"title":"Bio-Hybrid Systems for Ecosystem Level Effects","permalink":"/research/papers/Bio-Hybrid Systems for Ecosystem Level Effects"}}')

},

};
;