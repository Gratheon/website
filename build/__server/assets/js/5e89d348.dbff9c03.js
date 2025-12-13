"use strict";
exports.ids = ["97420"];
exports.modules = {
63124(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_biological_robbing_state_md_5e8_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_biological_robbing_state_md_5e8_json__rspack_import_0 = __webpack_require__(22222);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
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
      children: "One of the major challenges faced by beekeepers is the robbing state of bees, which occurs when a weak or stressed colony becomes the target of other, more aggressive bees. During robbing, bees from stronger hives invade a weakened colony to steal honey and pollen. This situation can escalate quickly, leading to the collapse of the robbed hive, as the invaders overwhelm the colony’s defenses. Robbing is often triggered by environmental stressors such as a dearth of nectar, poor hive management, or weak bee populations. It poses a significant threat, not only reducing honey production but also disrupting the colony's survival."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The robbing state is difficult to detect early, and traditional methods of monitoring and intervention are time-consuming and inefficient. However, modern technology can help mitigate this issue. With the integration of IoT sensors, AI-powered vision devices, and hive monitoring systems, beekeepers can detect early signs of robbing, such as unusual entrance activity or aggressive bee behavior. Real-time data allows for swift action to be taken, such as closing the entrance or relocating the hive, preventing a full-scale robbery. Innovations like these can dramatically reduce the risks posed by robbing and improve overall hive management, ensuring healthier and more productive colonies."
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
22222(module) {
module.exports = JSON.parse('{"id":"problems/biological/💢 Robbing state","title":"💢 Robbing state","description":"One of the major challenges faced by beekeepers is the robbing state of bees, which occurs when a weak or stressed colony becomes the target of other, more aggressive bees. During robbing, bees from stronger hives invade a weakened colony to steal honey and pollen. This situation can escalate quickly, leading to the collapse of the robbed hive, as the invaders overwhelm the colony’s defenses. Robbing is often triggered by environmental stressors such as a dearth of nectar, poor hive management, or weak bee populations. It poses a significant threat, not only reducing honey production but also disrupting the colony\'s survival.","source":"@site/about/problems/biological/💢 Robbing state.md","sourceDirName":"problems/biological","slug":"/problems/biological/💢 Robbing state","permalink":"/about/problems/biological/💢 Robbing state","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"💢 Hornet attacks","permalink":"/about/problems/biological/💢 Hornet attacks"},"next":{"title":"🦀 Diseases","permalink":"/about/problems/biological/🦀 Diseases"}}')

},

};
;