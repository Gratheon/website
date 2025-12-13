"use strict";
exports.ids = ["73670"];
exports.modules = {
1454(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_alcohol_washing_killing_bees_md_b6f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_alcohol_washing_killing_bees_md_b6f_json__rspack_import_0 = __webpack_require__(70730);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	class: 'unethical treatment',
	priority: 50
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beekeepers worldwide face a persistent challenge in maintaining the health of their colonies: accurately monitoring Varroa mite infestations. These parasitic mites are a major threat to honeybee populations, weakening colonies by feeding on developing bees and spreading viruses. To assess the level of infestation, many beekeepers rely on alcohol wash tests, a method that involves shaking a sample of bees in alcohol to separate and count the mites. While this method is highly effective in determining mite loads, it comes at the cost of sacrificing hundreds of bees from the hive—a practice that many beekeepers find distressing and counterproductive to their conservation efforts."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At Gratheon, we believe that beekeeping shouldn't have to pit colony health against individual bee survival. This is why we are developing advanced solutions like AI-powered vision devices and robotic beehives. Our hive entrance monitors use image recognition and machine learning to count and detect mites on bees in real-time without harming them. Combined with IoT sensors that track environmental conditions and hive health, our technologies provide non-invasive, data-driven insights into Varroa populations. By eliminating the need for alcohol washing, we aim to empower beekeepers with sustainable tools that prioritize the well-being of every bee, strengthening colonies against threats while preserving their vital role in our ecosystems."
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
70730(module) {
module.exports = JSON.parse('{"id":"problems/💀 Alcohol washing killing bees","title":"💀 Alcohol washing killing bees","description":"Beekeepers worldwide face a persistent challenge in maintaining the health of their colonies: accurately monitoring Varroa mite infestations. These parasitic mites are a major threat to honeybee populations, weakening colonies by feeding on developing bees and spreading viruses. To assess the level of infestation, many beekeepers rely on alcohol wash tests, a method that involves shaking a sample of bees in alcohol to separate and count the mites. While this method is highly effective in determining mite loads, it comes at the cost of sacrificing hundreds of bees from the hive—a practice that many beekeepers find distressing and counterproductive to their conservation efforts.","source":"@site/about/problems/💀 Alcohol washing killing bees.md","sourceDirName":"problems","slug":"/problems/💀 Alcohol washing killing bees","permalink":"/about/problems/💀 Alcohol washing killing bees","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"class":"unethical treatment","priority":50},"sidebar":"tutorialSidebar","previous":{"title":"👁️ Time-consuming inspections","permalink":"/about/problems/👁️ Time-consuming inspections"},"next":{"title":"💀 Colony without a queen","permalink":"/about/problems/💀 Colony without a queen"}}')

},

};
;