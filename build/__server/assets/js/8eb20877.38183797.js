"use strict";
exports.ids = ["44321"];
exports.modules = {
12396(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_importance_of_gis_solutions_for_beekeepers_a_review_md_8eb_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_importance_of_gis_solutions_for_beekeepers_a_review_md_8eb_json__rspack_import_0 = __webpack_require__(15874);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'Importance of GIS solutions for beekeepers: a review',
	year: '2023',
	orgs: [
		'🇱🇻 Latvia University of Life Sciences and Technologies'
	],
	hide_table_of_contents: true
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
      href: (__webpack_require__(21021)/* ["default"] */.A) + "",
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
21021(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/Vol21No2_2023_Kotovs-9f29fa1693db395aa412755579c62584.pdf");

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
15874(module) {
module.exports = JSON.parse('{"id":"papers/Importance of GIS solutions for beekeepers a review","title":"Importance of GIS solutions for beekeepers: a review","description":"PDF","source":"@site/research/papers/Importance of GIS solutions for beekeepers a review.md","sourceDirName":"papers","slug":"/papers/Importance of GIS solutions for beekeepers a review","permalink":"/research/papers/Importance of GIS solutions for beekeepers a review","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Importance of GIS solutions for beekeepers: a review","year":"2023","orgs":["🇱🇻 Latvia University of Life Sciences and Technologies"],"hide_table_of_contents":true},"sidebar":"researchSidebar","previous":{"title":"Impact of the precision beekeeping on the living environment","permalink":"/research/papers/Impact of the precision beekeeping on the living environment"},"next":{"title":"Integration of Scales and Cameras in Nondisruptive ElectronicBeehive Monitoring: On the Within-Day Relationship of HiveWeight and Traffic in Honeybee (Apis mellifera) Colonies in Langstroth Hives in Tucson, Arizona, USA","permalink":"/research/papers/Integration of Scales and Cameras in Nondisruptive Electronic Beehive Monitoring"}}')

},

};
;