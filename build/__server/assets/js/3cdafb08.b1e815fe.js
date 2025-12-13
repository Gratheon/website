"use strict";
exports.ids = ["53589"];
exports.modules = {
95581(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_robotic_beehive_cad_modelling_md_3cd_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_robotic_beehive_cad_modelling_md_3cd_json__rspack_import_0 = __webpack_require__(59762);
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
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
    children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
      children: "We use tinkercad for not serious models to just convey the idea or for 3d printing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
      children: "We use freecad for more serious models"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
      children: ["Relevant cad services", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://www.traceparts.com/",
            children: "https://www.traceparts.com/"
          })
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
          children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://grabcad.com/library/tag/beehive",
            children: "https://grabcad.com/library/tag/beehive"
          })
        }), "\n"]
      }), "\n"]
    }), "\n"]
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
59762(module) {
module.exports = JSON.parse('{"id":"robotic-beehive/CAD modelling 🫖","title":"CAD modelling 🫖","description":"- We use tinkercad for not serious models to just convey the idea or for 3d printing","source":"@site/docs/robotic-beehive/CAD modelling 🫖.md","sourceDirName":"robotic-beehive","slug":"/robotic-beehive/CAD modelling 🫖","permalink":"/docs/robotic-beehive/CAD modelling 🫖","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/robotic-beehive/CAD modelling 🫖.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"4 axis gantry","permalink":"/docs/robotic-beehive/4 axis gantry"},"next":{"title":"Design","permalink":"/docs/robotic-beehive/Design"}}')

},

};
;