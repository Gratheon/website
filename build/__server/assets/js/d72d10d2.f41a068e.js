"use strict";
exports.ids = ["82980"];
exports.modules = {
58909(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_the_prediction_of_swarming_in_honeybee_colonies_using_vibrational_spectra_md_d72_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_the_prediction_of_swarming_in_honeybee_colonies_using_vibrational_spectra_md_d72_json__rspack_import_0 = __webpack_require__(17399);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	year: '2020',
	orgs: [
		'🇬🇧 Nottingham Trent University',
		'🇫🇷  l’Institut National de Recherche en Agriculture',
		'🇧🇪 Centre Apicole de Recherche et d’Information'
	],
	title: 'The prediction of swarming in honeybee colonies using vibrational spectra',
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
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.nature.com/articles/s41598-020-66115-5",
        children: "Original URL"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(68872)/* ["default"] */.A) + "",
        children: "PDF"
      })
    }), "\n"]
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
68872(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/s41598-020-66115-5-00c8cb34a93f92bee1eae1f3b07b3a02.pdf");

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
17399(module) {
module.exports = JSON.parse('{"id":"papers/The prediction of swarming in honeybee colonies using vibrational spectra","title":"The prediction of swarming in honeybee colonies using vibrational spectra","description":"- Original URL","source":"@site/research/papers/The prediction of swarming in honeybee colonies using vibrational spectra.md","sourceDirName":"papers","slug":"/papers/The prediction of swarming in honeybee colonies using vibrational spectra","permalink":"/research/papers/The prediction of swarming in honeybee colonies using vibrational spectra","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"year":"2020","orgs":["🇬🇧 Nottingham Trent University","🇫🇷  l’Institut National de Recherche en Agriculture","🇧🇪 Centre Apicole de Recherche et d’Information"],"title":"The prediction of swarming in honeybee colonies using vibrational spectra","hide_table_of_contents":true},"sidebar":"researchSidebar","previous":{"title":"The development of honey bee coloniesassessed using a new semi-automated broodcounting method: CombCount","permalink":"/research/papers/The development of honey bee coloniesassessed using a new semi-automated broodcounting method CombCount"},"next":{"title":"Toward an intelligent and efficient beehive: A survey of precision beekeeping systems and services","permalink":"/research/papers/Toward an intelligent and efficient beehive A survey of precision beekeeping systems and services"}}')

},

};
;