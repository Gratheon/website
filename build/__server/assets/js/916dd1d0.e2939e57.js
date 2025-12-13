"use strict";
exports.ids = ["10291"];
exports.modules = {
15314(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_the_development_of_honey_bee_coloniesassessed_using_a_new_semi_automated_broodcounting_method_comb_count_md_916_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_the_development_of_honey_bee_coloniesassessed_using_a_new_semi_automated_broodcounting_method_comb_count_md_916_json__rspack_import_0 = __webpack_require__(22551);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'The development of honey bee coloniesassessed using a new semi-automated broodcounting method: CombCount',
	year: '2018',
	orgs: [
		'🇦🇺 Macquarie University',
		'🇦🇺 Queensland University of Technology',
		'🇺🇸 Carl Hayden Bee Research Center'
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
      href: (__webpack_require__(64665)/* ["default"] */.A) + "",
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
64665(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/pone.0205816-dd83f960c288c6d880a4fbd62ce8abb6.pdf");

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
22551(module) {
module.exports = JSON.parse('{"id":"papers/The development of honey bee coloniesassessed using a new semi-automated broodcounting method CombCount","title":"The development of honey bee coloniesassessed using a new semi-automated broodcounting method: CombCount","description":"PDF","source":"@site/research/papers/The development of honey bee coloniesassessed using a new semi-automated broodcounting method CombCount.md","sourceDirName":"papers","slug":"/papers/The development of honey bee coloniesassessed using a new semi-automated broodcounting method CombCount","permalink":"/research/papers/The development of honey bee coloniesassessed using a new semi-automated broodcounting method CombCount","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"The development of honey bee coloniesassessed using a new semi-automated broodcounting method: CombCount","year":"2018","orgs":["🇦🇺 Macquarie University","🇦🇺 Queensland University of Technology","🇺🇸 Carl Hayden Bee Research Center"],"hide_table_of_contents":true},"sidebar":"researchSidebar","previous":{"title":"The Use of Products with a Monitoring System for Remote Bee Detection in Beekeeping in Czechia","permalink":"/research/papers/The Use of Products with a Monitoring System for Remote Bee Detection in Beekeeping in Czechia"},"next":{"title":"The prediction of swarming in honeybee colonies using vibrational spectra","permalink":"/research/papers/The prediction of swarming in honeybee colonies using vibrational spectra"}}')

},

};
;