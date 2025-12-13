"use strict";
exports.ids = ["11149"];
exports.modules = {
73108(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_monocultural_agriculture_md_41c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_monocultural_agriculture_md_41c_json__rspack_import_0 = __webpack_require__(42046);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Reduces food source diversity"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Likely leads to ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
          href: "https://www.notion.so/Pesticide-exposure-poisoning-48fb3122dddc443c90a9c777585f54cc?pvs=21",
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
            children: "Pesticide exposure"
          }), " / poisoning"]
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Monocultural agriculture — farming that focuses on a single crop over vast areas—poses a significant challenge for bees and beekeepers alike. These monocultures often create “food deserts” for pollinators, as they provide a single type of pollen and nectar for a short flowering period. Once that crop is harvested, bees face starvation or must rely on alternative sources that may not be present in the surrounding landscape. This lack of diverse, year-round forage weakens bee colonies, making them more susceptible to diseases, pests like the Varroa mite, and environmental stressors such as climate fluctuations. For beekeepers, this means higher costs to transport hives to better locations, supplement diets with sugar syrups, or invest in more frequent health interventions for their colonies."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "At Gratheon, we’re tackling this issue by integrating advanced technology into hive management. Our IoT sensors and AI-powered hive entrance devices monitor bee activity and health in real-time, enabling beekeepers to respond quickly to signs of stress caused by poor forage availability. Additionally, our robotic beehive supports hive health with precise climate control and automated feeding systems, reducing the impact of environmental challenges. By combining smart tools with data-driven insights, we empower beekeepers to mitigate the effects of monocultural farming while advocating for more sustainable agricultural practices that support pollinator-friendly landscapes."
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
42046(module) {
module.exports = JSON.parse('{"id":"problems/systemic/🌻 Monocultural agriculture","title":"🌻 Monocultural agriculture","description":"- Reduces food source diversity","source":"@site/about/problems/systemic/🌻 Monocultural agriculture.md","sourceDirName":"problems/systemic","slug":"/problems/systemic/🌻 Monocultural agriculture","permalink":"/about/problems/systemic/🌻 Monocultural agriculture","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🌲 Distant locations","permalink":"/about/problems/systemic/🌲 Distant locations"},"next":{"title":"🏘️ Multiple apiaries","permalink":"/about/problems/systemic/🏘️ Multiple apiaries"}}')

},

};
;