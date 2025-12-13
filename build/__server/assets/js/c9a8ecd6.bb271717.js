"use strict";
exports.ids = ["41539"];
exports.modules = {
41181(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_12_02_participated_in_startup_pitch_practice_webinar_by_founder_institute_md_0d3_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_12_02_participated_in_startup_pitch_practice_webinar_by_founder_institute_md_0d3_json__rspack_import_0 = __webpack_require__(77334);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [],
};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
    children: ["We took part in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
      href: "https://fi.co/",
      children: "Founder Institute"
    }), " online 1 min pitch practicing and getting feedback from the mentors. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
      href: "https://www.linkedin.com/in/regine-harr-91012215/",
      children: "Regine Harr"
    }), " gave a good advice on elevator pitch structure."]
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
77334(module) {
module.exports = JSON.parse('{"permalink":"/blog/2024/12/02/ 📢 Participated in Startup Pitch Practice webinar by Founder Institute","editUrl":"https://github.com/gratheon/website/tree/main/blog/2024-12-02 📢 Participated in Startup Pitch Practice webinar by Founder Institute.md","source":"@site/blog/2024-12-02 📢 Participated in Startup Pitch Practice webinar by Founder Institute.md","title":" 📢 Participated in Startup Pitch Practice webinar by Founder Institute","description":"We took part in Founder Institute online 1 min pitch practicing and getting feedback from the mentors. Regine Harr gave a good advice on elevator pitch structure.","date":"2024-12-02T00:00:00.000Z","tags":[],"readingTime":0.48,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":" 🎒 Attended \\"Robotics is easy\\" local webinar for schools","permalink":"/blog/2024/12/03/ 🎒 Attended \\"Robotics is easy\\" local webinar for schools"},"nextItem":{"title":" 🤝 Gratheon joins NVIDIA Inception Program","permalink":"/blog/2024/11/30/ 🤝 Gratheon joins NVIDIA Inception Program"}}')

},

};
;