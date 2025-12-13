"use strict";
exports.ids = ["85509"];
exports.modules = {
99639(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_biological_swarming_md_25a_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_biological_swarming_md_25a_json__rspack_import_0 = __webpack_require__(56968);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	priority: 70,
	class: 'beekeeping practices'
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
      children: "Swarming is one of the most significant challenges beekeepers face, as it occurs when a large group of bees leaves the hive to form a new colony, usually during the warmer months. This behavior is a natural process for bee reproduction, but it can lead to the loss of a substantial portion of the colony and disrupt honey production. Beekeepers often struggle to detect the early signs of swarming, such as increased queen cell formation or the hive becoming overcrowded, which makes it difficult to intervene in time. Without proper intervention, swarming can result in a weakened colony, reduced honey yield, and the need for the beekeeper to manage the new swarm."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To prevent swarming, beekeepers must constantly monitor their hives, which can be a time-consuming and labor-intensive task. Traditional methods of managing swarming, such as splitting hives or adding more space, require careful observation and timing, often leading to stress and uncertainty. In recent years, advancements in technology, such as IoT sensors and AI-driven devices, have started to play a crucial role in helping beekeepers detect early signs of swarming. With real-time data and predictive analytics, these tools can alert beekeepers to potential swarm risks, enabling them to take action before it happens, improving hive health, and enhancing honey production."
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
56968(module) {
module.exports = JSON.parse('{"id":"problems/biological/🧶 Swarming","title":"🧶 Swarming","description":"Swarming is one of the most significant challenges beekeepers face, as it occurs when a large group of bees leaves the hive to form a new colony, usually during the warmer months. This behavior is a natural process for bee reproduction, but it can lead to the loss of a substantial portion of the colony and disrupt honey production. Beekeepers often struggle to detect the early signs of swarming, such as increased queen cell formation or the hive becoming overcrowded, which makes it difficult to intervene in time. Without proper intervention, swarming can result in a weakened colony, reduced honey yield, and the need for the beekeeper to manage the new swarm.","source":"@site/about/problems/biological/🧶 Swarming.md","sourceDirName":"problems/biological","slug":"/problems/biological/🧶 Swarming","permalink":"/about/problems/biological/🧶 Swarming","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"priority":70,"class":"beekeeping practices"},"sidebar":"tutorialSidebar","previous":{"title":"🦀 Infestations","permalink":"/about/problems/biological/🦀 Infestations"},"next":{"title":"👁️ Observability of bee colony","permalink":"/about/problems/core/👁️ Observability of bee colony"}}')

},

};
;