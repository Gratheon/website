"use strict";
exports.ids = ["61765"];
exports.modules = {
95386(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_aggressive_bee_colonies_md_dd0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_aggressive_bee_colonies_md_dd0_json__rspack_import_0 = __webpack_require__(45313);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	class: 'beekeeping practices',
	priority: 50
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    img: "img",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beekeepers are dealing with aggressive bee colonies. Aggression in bees can manifest as heightened defensiveness, leading to stinging events not only for the beekeeper but also for neighboring colonies, wildlife, and even visitors. This aggressive behavior can arise from a variety of factors, including poor hive management, environmental stressors, genetic traits, or even the presence of predators. When bees feel threatened, they may become more defensive, leading to increased risks for beekeepers and a disruption in the overall hive health. Managing aggressive bees becomes critical to maintaining a peaceful, productive apiary."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beekeepers often resort to techniques such as selective breeding to reduce aggression, as well as hive management practices that minimize stress, like ensuring ample food and water supply or controlling hive ventilation. However, these strategies don't always guarantee results, and handling aggressive bees can still be dangerous. For commercial beekeepers, aggression can lead to loss of colony productivity, as stressed colonies are less likely to produce honey, and they may become more susceptible to disease. Advanced technology like the AI-powered hive entrance devices developed by companies like Gratheon can help in monitoring hive behavior, predicting potential aggression triggers, and creating a safer environment for both the bees and the beekeepers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(91617)/* ["default"] */.A) + "",
        width: "720",
        height: "533"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.linkedin.com/groups/1583887?q=highlightedFeedForGroups&highlightedUpdateUrn=urn%3Ali%3AgroupPost%3A1583887-7135131410780069888&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BeYFRvSSERLuPws4VJUQm%2Fw%3D%3D",
        children: "Africanized bees"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Risks to surrounding people (sensitive neighbours, kids, allergic visitors) limits possible areas of beekeeping (city apiaries, close to roads)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "433",
      height: "244",
      src: "https://www.youtube.com/embed/O4ldpyIE5t4",
      title: "Euthanizing of a dangerous hive.",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "433",
      height: "244",
      src: "https://www.youtube.com/embed/Wk2HlKE1szo",
      title: "If I didn't have the suit on, I'd be dead.",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
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
91617(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/1701147891800-5dd10f86a05e1a4de8a8ebc1bc3aa896.jpg");

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
45313(module) {
module.exports = JSON.parse('{"id":"problems/systemic/💢 Aggressive bee colonies","title":"💢 Aggressive bee colonies","description":"Beekeepers are dealing with aggressive bee colonies. Aggression in bees can manifest as heightened defensiveness, leading to stinging events not only for the beekeeper but also for neighboring colonies, wildlife, and even visitors. This aggressive behavior can arise from a variety of factors, including poor hive management, environmental stressors, genetic traits, or even the presence of predators. When bees feel threatened, they may become more defensive, leading to increased risks for beekeepers and a disruption in the overall hive health. Managing aggressive bees becomes critical to maintaining a peaceful, productive apiary.","source":"@site/about/problems/systemic/💢 Aggressive bee colonies.md","sourceDirName":"problems/systemic","slug":"/problems/systemic/💢 Aggressive bee colonies","permalink":"/about/problems/systemic/💢 Aggressive bee colonies","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"class":"beekeeping practices","priority":50},"sidebar":"tutorialSidebar","previous":{"title":"🏘️ Multiple apiaries","permalink":"/about/problems/systemic/🏘️ Multiple apiaries"},"next":{"title":"🤢 Pesticide poisoning","permalink":"/about/problems/systemic/🤢 Pesticide poisoning"}}')

},

};
;