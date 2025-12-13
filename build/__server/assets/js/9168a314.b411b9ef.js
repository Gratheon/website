"use strict";
exports.ids = ["83941"];
exports.modules = {
71628(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_flexible_tier_video_playback_md_916_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_flexible_tier_video_playback_md_916_json__rspack_import_0 = __webpack_require__(33126);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: '📺 Video streaming playback'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Goal",
  "id": "goal",
  "level": 2
}, {
  "value": "User story",
  "id": "user-story",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "goal",
      children: "Goal"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Beekeeper should be able to playback the video recording of the specific beehive entrance recorder by by ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Video-streaming-via-API-2d7a22aaf3a74b8e831f2a409c243e69?pvs=21",
        children: "Video streaming via API"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Video-streaming-from-phone-32eea4f462684f9a9ceef51a11b62930?pvs=21",
        children: "Video streaming from phone"
      }), " features."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Goal is to reduce beekeeper reaction time in case of", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Hornet-attack-detection-8dde7e03f80547fa9156ac1c16cf52af?pvs=21",
        children: "Hornet attack detection"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Robbing-state-5a23dcce211048be8e102d863f052dfe?pvs=21",
        children: "Robbing state"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "user-story",
      children: "User story"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beekeeper"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Creates a beehive with a hive entrance"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Installs a device on a hive - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.notion.so/Device-management-9d88e70c45954edc9333323003fd9c5c?pvs=21",
          children: "Device management"
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Generates API token - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.notion.so/API-token-management-796de50aa11a48d7b88ce99fc2e2beff?pvs=21",
              children: "API token management"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Enters API token into the device and starts streaming"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Clicks on hive entrance"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Sees lists of video streams"
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
33126(module) {
module.exports = JSON.parse('{"id":"products/web_app/flexible-tier/video_playback","title":"📺 Video streaming playback","description":"Goal","source":"@site/about/products/web_app/flexible-tier/video_playback.md","sourceDirName":"products/web_app/flexible-tier","slug":"/products/web_app/flexible-tier/video_playback","permalink":"/about/products/web_app/flexible-tier/video_playback","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"📺 Video streaming playback"},"sidebar":"tutorialSidebar","previous":{"title":"🔔 Alerts","permalink":"/about/products/web_app/flexible-tier/alerts"},"next":{"title":"📦 Apiary Management","permalink":"/about/products/web_app/hobbyist-tier/apiary-management"}}')

},

};
;