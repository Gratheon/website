"use strict";
exports.ids = ["31959"];
exports.modules = {
44549(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_bee_alarmed_masters_thesis_md_67d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_research_site_research_papers_bee_alarmed_masters_thesis_md_67d_json__rspack_import_0 = __webpack_require__(46592);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'BeeAlarmed. Masters thesis',
	orgs: [
		'🇩🇪 South Westphalia University of Applied Sciences'
	],
	hide_table_of_contents: true,
	year: '2020'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/BeeAlarmed/BeeAlarmed",
        children: "https://github.com/BeeAlarmed/BeeAlarmed"
      }), "\nOur adaptation - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/Gratheon/models-gate-tracker",
        children: "https://github.com/Gratheon/models-gate-tracker"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Couldn’t find actual PDF, only the source code"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
        href: "https://www.facebook.com/fhsuedwestfalen/videos/703400580980712/?__tn__=%2CO-R",
        children: ["https://www.facebook.com/fhsuedwestfalen/videos/703400580980712/?", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "tn"
        }), "=%2CO-R"]
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(3934)/* ["default"] */.A) + "",
        children: "VIDEO"
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
3934(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/files/fabien-539c2f86b2dac65bb7ae11a61b10509c.mov");

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
46592(module) {
module.exports = JSON.parse('{"id":"papers/⭐️ BeeAlarmed. Masters thesis","title":"BeeAlarmed. Masters thesis","description":"https://github.com/BeeAlarmed/BeeAlarmed","source":"@site/research/papers/⭐️ BeeAlarmed. Masters thesis.md","sourceDirName":"papers","slug":"/papers/⭐️ BeeAlarmed. Masters thesis","permalink":"/research/papers/⭐️ BeeAlarmed. Masters thesis","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BeeAlarmed. Masters thesis","orgs":["🇩🇪 South Westphalia University of Applied Sciences"],"hide_table_of_contents":true,"year":"2020"},"sidebar":"researchSidebar","previous":{"title":"Autonomous tracking of honey bee behaviors over long-term periods with cooperating robots","permalink":"/research/papers/⭐️ Autonomous tracking of honey bee behaviors over long-term periods with cooperating robots"},"next":{"title":"⭐️ Deep Edge IoT for Acoustic Detection of Queenless Beehives","permalink":"/research/papers/⭐️ Deep Edge IoT for Acoustic Detection of Queenless Beehives"}}')

},

};
;