"use strict";
exports.ids = ["50718"];
exports.modules = {
29854(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_time_consuming_inspections_md_7c8_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_time_consuming_inspections_md_7c8_json__rspack_import_0 = __webpack_require__(72160);
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
      children: "Beekeeping, while rewarding, is a labor-intensive practice, and one of the most time-consuming aspects is hive inspection. Traditional inspections require beekeepers to open hives manually, often disrupting the bees' natural activities and exposing them to environmental stressors. Each inspection involves checking for signs of pests, diseases, and overall colony health, a task that demands both expertise and hours of meticulous work. For larger apiaries, this process can quickly become overwhelming, leading to delays in addressing critical issues. Missing early signs of problems such as Varroa mite infestations or poor queen health can have devastating consequences for the colony, further complicating the beekeeper's already demanding responsibilities."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At Gratheon, we aim to transform this process with cutting-edge technology. By integrating IoT sensors, AI-powered vision systems, and robotics into our beekeeping solutions, we empower beekeepers to monitor hive health remotely and in real time. Our AI vision hive entrance device, for instance, observes bee behavior at the entrance to detect early warning signs of stress or disease. Meanwhile, IoT sensors inside the hive monitor temperature, humidity, and sound patterns, providing actionable insights without the need to disturb the bees. Together with our robotic hive, these innovations drastically reduce the need for manual inspections, freeing up valuable time for beekeepers and ensuring healthier, more productive colonies. Gratheon's solutions bring a new era of efficiency and sustainability to modern apiculture."
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
72160(module) {
module.exports = JSON.parse('{"id":"problems/👁️ Time-consuming inspections","title":"👁️ Time-consuming inspections","description":"Beekeeping, while rewarding, is a labor-intensive practice, and one of the most time-consuming aspects is hive inspection. Traditional inspections require beekeepers to open hives manually, often disrupting the bees\' natural activities and exposing them to environmental stressors. Each inspection involves checking for signs of pests, diseases, and overall colony health, a task that demands both expertise and hours of meticulous work. For larger apiaries, this process can quickly become overwhelming, leading to delays in addressing critical issues. Missing early signs of problems such as Varroa mite infestations or poor queen health can have devastating consequences for the colony, further complicating the beekeeper\'s already demanding responsibilities.","source":"@site/about/problems/👁️ Time-consuming inspections.md","sourceDirName":"problems","slug":"/problems/👁️ Time-consuming inspections","permalink":"/about/problems/👁️ Time-consuming inspections","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🐻 Bears destroying hives & colonies","permalink":"/about/problems/🐻 Bears destroying hives & colonies"},"next":{"title":"💀 Alcohol washing killing bees","permalink":"/about/problems/💀 Alcohol washing killing bees"}}')

},

};
;