"use strict";
exports.ids = ["30907"];
exports.modules = {
95267(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_pro_tier_ideas_harvest_hive_frames_and_sections_md_665_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_pro_tier_ideas_harvest_hive_frames_and_sections_md_665_json__rspack_import_0 = __webpack_require__(11478);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Why",
  "id": "why",
  "level": 2
}, {
  "value": "AC",
  "id": "ac",
  "level": 2
}, {
  "value": "Suggested solution",
  "id": "suggested-solution",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "why",
      children: "Why"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To improve ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Warehouse-organization-1009de39cbca804a9615dc67e76d26e2?pvs=21",
        children: "Warehouse organization"
      }), ", it would be more semantically correct for frames and hive sections to just disappear, but instead to get moved into “Warehouse” where frames would get harvested, cleaned etc."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This would give beekeeper an overview of how many frames got moved, how many frames got extracted, how much honey roughly can get or was harvested"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "ac",
      children: "AC"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["In ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.notion.so/Hive-view-42d9850943a54d1aa4f2cc3c2c037685?pvs=21",
          children: "Hive view"
        }), ", in addition to “delete frame” and “delete box”, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "add “harvest …” buttons"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "On click, this should do the same deletion it was doing before, but on backend frame should be also linked to a warehouse"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["warehouse view should be in separate ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.notion.so/Inventory-management-warehouse-view-b99b937fe1444f84b4d3c70f1ffdc828?pvs=21",
          children: "Inventory management / warehouse view"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "suggested-solution",
      children: "Suggested solution"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["add ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "in_warehouse"
        }), " boolean flag for frames and boxes"]
      }), "\n"]
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
11478(module) {
module.exports = JSON.parse('{"id":"products/web_app/pro-tier/ideas 💡/📦 Harvest hive frames and sections","title":"📦 Harvest hive frames and sections","description":"Why","source":"@site/about/products/web_app/pro-tier/ideas 💡/📦 Harvest hive frames and sections.md","sourceDirName":"products/web_app/pro-tier/ideas 💡","slug":"/products/web_app/pro-tier/ideas 💡/📦 Harvest hive frames and sections","permalink":"/about/products/web_app/pro-tier/ideas 💡/📦 Harvest hive frames and sections","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"📈 Grafana access","permalink":"/about/products/web_app/pro-tier/ideas 💡/📈 Grafana access"},"next":{"title":"📦 Inventory management - warehouse view","permalink":"/about/products/web_app/pro-tier/ideas 💡/📦 Inventory management - warehouse view"}}')

},

};
;