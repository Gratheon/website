"use strict";
exports.ids = ["34002"];
exports.modules = {
35072(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_distant_locations_md_33f_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_problems_systemic_distant_locations_md_33f_json__rspack_import_0 = __webpack_require__(58140);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	priority: 70
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
      children: "For many beekeepers, managing apiaries in distant or remote locations is both a necessity and a challenge. These locations are often chosen for their ideal foraging conditions, such as proximity to diverse flora or agricultural crops, but their remoteness introduces logistical hurdles. Regular inspections are critical to monitor hive health, check for signs of diseases or pests, and ensure sufficient food stores, especially during changing seasons. However, traveling long distances to reach these apiaries can be time-consuming, costly, and physically demanding. This challenge becomes even more pronounced for beekeepers managing multiple apiaries scattered across different regions."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The physical distance often leads to delayed interventions, which can exacerbate issues like mite infestations, colony starvation, or queen problems. A lack of immediate access means beekeepers must rely heavily on educated guesses or incomplete data, increasing the risk of colony losses. To address these challenges, technological advancements are becoming crucial. By integrating IoT sensors, AI-driven hive monitoring devices, and automated systems, beekeepers can remotely monitor hive conditions in real-time. This enables timely decision-making without the need for frequent travel, ensuring healthier colonies and reducing operational costs. At our digital beekeeping startup, we are developing solutions tailored to these needs, combining innovative technology with the practical realities of beekeeping to make distant apiary management more efficient and sustainable."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(66342)/* ["default"] */.A) + "",
        width: "4080",
        height: "3072"
      }), "\nsource - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://twitter.com/austincwb/status/1785712653215715354/photo/1",
        children: "https://twitter.com/austincwb/status/1785712653215715354/photo/1"
      })]
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
66342(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/GMgfFtbXYAAkcmo-c2f69249bc53b9d244e69b40ef7a9586.jpg");

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
58140(module) {
module.exports = JSON.parse('{"id":"problems/systemic/🌲 Distant locations","title":"🌲 Distant locations","description":"For many beekeepers, managing apiaries in distant or remote locations is both a necessity and a challenge. These locations are often chosen for their ideal foraging conditions, such as proximity to diverse flora or agricultural crops, but their remoteness introduces logistical hurdles. Regular inspections are critical to monitor hive health, check for signs of diseases or pests, and ensure sufficient food stores, especially during changing seasons. However, traveling long distances to reach these apiaries can be time-consuming, costly, and physically demanding. This challenge becomes even more pronounced for beekeepers managing multiple apiaries scattered across different regions.","source":"@site/about/problems/systemic/🌲 Distant locations.md","sourceDirName":"problems/systemic","slug":"/problems/systemic/🌲 Distant locations","permalink":"/about/problems/systemic/🌲 Distant locations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"priority":70},"sidebar":"tutorialSidebar","previous":{"title":"💪🏻 Unscalable work","permalink":"/about/problems/core/💪🏻 Unscalable work"},"next":{"title":"🌻 Monocultural agriculture","permalink":"/about/problems/systemic/🌻 Monocultural agriculture"}}')

},

};
;