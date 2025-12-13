"use strict";
exports.ids = ["31293"];
exports.modules = {
92729(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_01_13_visited_vidrik_md_332_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2025_01_13_visited_vidrik_md_332_json__rspack_import_0 = __webpack_require__(57738);
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
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Had a meeting with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://vidrik.taltech.ee/",
        children: "VIRUMAA DIGI- JA ROHETEHNOLOOGIATE INNOVATSIOONIKESKUS"
      }), " representatives (engineers, researchers and managers) on the topic of research and development collaboration with Gratheon. Seems like the most suitable topic is the area of IoT devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "We talked about the project and its market, past experience of the team, funding sources, some technical details."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Specifically"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "local team used nrf9160 chip (instead of esp32) to be more energy efficient"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "MQTT and GSM were brought up as possible communication means for the device"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://tradex.ee/",
          title: "https://tradex.ee/",
          children: "https://tradex.ee/"
        }), " was used as a partner to make devices more prod ready (electronics)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "nokia dynanet - as a construction example of expandable frames and nest was brought up  for robotic beehive construction"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "we should have a small research paper abstract published"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(70243)/* ["default"] */.A) + "",
        width: "762",
        height: "1016"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(62072)/* ["default"] */.A) + "",
        width: "972",
        height: "306"
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
70243(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/20250113_115946-6f4d2c803868573c0b4ea87f226f31e6.webp");

},
62072(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2025-01-13 at 08.31.11-a475ef1d78d53aafd3af1e31bc429b1c.png");

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
57738(module) {
module.exports = JSON.parse('{"permalink":"/blog/2025/01/13/ 🤝 Visited VIDRIK","editUrl":"https://github.com/gratheon/website/tree/main/blog/2025-01-13 🤝 Visited VIDRIK.md","source":"@site/blog/2025-01-13 🤝 Visited VIDRIK.md","title":" 🤝 Visited VIDRIK","description":"Had a meeting with VIRUMAA DIGI- JA ROHETEHNOLOOGIATE INNOVATSIOONIKESKUS representatives (engineers, researchers and managers) on the topic of research and development collaboration with Gratheon. Seems like the most suitable topic is the area of IoT devices.","date":"2025-01-13T00:00:00.000Z","tags":[],"readingTime":0.7,"hasTruncateMarker":true,"authors":[],"frontMatter":{},"unlisted":false,"prevItem":{"title":" 🎒 Visited AI TalTech webinar","permalink":"/blog/2025/02/19/ 🎒 Visited AI TalTech webinar"},"nextItem":{"title":" 🎒 Attended \\"Robotics is easy\\" local webinar for schools","permalink":"/blog/2024/12/03/ 🎒 Attended \\"Robotics is easy\\" local webinar for schools"}}')

},

};
;