"use strict";
exports.ids = ["25089"];
exports.modules = {
79040(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_storm_wind_collapsing_beehives_md_5c0_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_storm_wind_collapsing_beehives_md_5c0_json__rspack_import_0 = __webpack_require__(14764);
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
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Flimsy beehives present a significant challenge for beekeepers, especially in regions where weather conditions are unpredictable and harsh. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "High winds can easily topple or push over a poorly constructed hive"
      }), ", leaving the colony vulnerable to cold temperatures. In these situations, the bees may not be able to regulate their environment, and the cold can quickly lead to the death of the colony. Additionally, beehives with wide or inadequately secured entrances can exacerbate the situation. When winds push air into the hive, it can chill the brood, weakening the colony and making it more susceptible to collapse. Beekeepers who fail to secure their hives may face catastrophic losses as the hive structure becomes compromised by the elements."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Further complicating the issue, weather fluctuations and poor hive management can also contribute to colony instability. In particular, improper frame repositioning or late splits can leave the brood exposed to sudden temperature changes. If the bees are unable to keep the brood warm, they can become chilled, which may stunt their development and reduce the colony's strength. A weakened colony may struggle to recover from weather-related challenges, leaving it vulnerable to collapse or disease. For beekeepers, ensuring their hives are weather-resistant and properly maintained is essential for safeguarding the health and survival of their colonies, particularly during periods of fluctuating weather."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://entomology.ces.ncsu.edu/2024/08/protective-measures-of-beehives-during-hurricanes-2/",
        children: "https://entomology.ces.ncsu.edu/2024/08/protective-measures-of-beehives-during-hurricanes-2/"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.homesweetbees.com/beekeeping/2019/11/29/wind-blown-colony",
        children: "https://www.homesweetbees.com/beekeeping/2019/11/29/wind-blown-colony"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(23550)/* ["default"] */.A) + "",
        width: "640",
        height: "480"
      })
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
23550(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Pasted image 20241129141028-284e181aca132131c00197f99f17f02e.png");

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
14764(module) {
module.exports = JSON.parse('{"id":"problems/🗃️ Storm wind collapsing beehives","title":"🗃️ Storm wind collapsing beehives","description":"Flimsy beehives present a significant challenge for beekeepers, especially in regions where weather conditions are unpredictable and harsh. High winds can easily topple or push over a poorly constructed hive, leaving the colony vulnerable to cold temperatures. In these situations, the bees may not be able to regulate their environment, and the cold can quickly lead to the death of the colony. Additionally, beehives with wide or inadequately secured entrances can exacerbate the situation. When winds push air into the hive, it can chill the brood, weakening the colony and making it more susceptible to collapse. Beekeepers who fail to secure their hives may face catastrophic losses as the hive structure becomes compromised by the elements.","source":"@site/about/problems/🗃️ Storm wind collapsing beehives.md","sourceDirName":"problems","slug":"/problems/🗃️ Storm wind collapsing beehives","permalink":"/about/problems/🗃️ Storm wind collapsing beehives","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🗃️ Poor hive ventilation","permalink":"/about/problems/🗃️ Poor hive ventilation"},"next":{"title":"🗃️ Ugly beehives","permalink":"/about/problems/🗃️ Ugly beehives"}}')

},

};
;