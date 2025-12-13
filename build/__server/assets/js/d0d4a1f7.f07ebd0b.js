"use strict";
exports.ids = ["67273"];
exports.modules = {
8413(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_starter_tier_inspection_management_md_d0d_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_starter_tier_inspection_management_md_d0d_json__rspack_import_0 = __webpack_require__(41257);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	status: 'complete'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Creating inspection",
  "id": "creating-inspection",
  "level": 2
}, {
  "value": "Listing inspections",
  "id": "listing-inspections",
  "level": 2
}, {
  "value": "Inspection view",
  "id": "inspection-view",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/5tYttNWfQPA",
      title: "Beehive inspections feature",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "creating-inspection",
      children: "Creating inspection"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User as beekeeper did manual beehive inspection and took the photos"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User has created a hive with boxes and uploaded frame photos"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "For a while (2 weeks) he did nothing. Now he did another inspection and now he needs to store old state"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["User clicks ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Create Inspection"
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "All of the hive data is stored as a snapshot in time"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["TIME of the inspection is taken from the oldest frame ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "photo creation time"
            }), ", not current time"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Thus an inspection that is 2 week old is created"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Frame photos are ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "unlinked/cleared"
        }), " along with detected objects"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Frame cell statistics is cleared (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.notion.so/Honeycomb-cell-detection-management-e9ff03128cdb489293737b8a4c1e7098?pvs=21",
          children: "Honeycomb cell detection & management"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Frames become empty and user can upload new photos"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["A message ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Inspection created"
        }), " is shown"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Inspection timeline link is shown near the menu with amount of inspections"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "listing-inspections",
      children: "Listing inspections"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["user navigates to hive inspection list ex. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://app.gratheon.com/apiaries/7/hives/118/inspections",
          children: "https://app.gratheon.com/apiaries/7/hives/118/inspections"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "user sees list of inspections with its date"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "user can click on inspection to see details"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "inspection-view",
      children: "Inspection view"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "user can see frames, frame cell statistics"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "user can see frame photos"
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
41257(module) {
module.exports = JSON.parse('{"id":"products/web_app/starter-tier/🔎 Inspection management","title":"🔎 Inspection management","description":"Creating inspection","source":"@site/about/products/web_app/starter-tier/🔎 Inspection management.md","sourceDirName":"products/web_app/starter-tier","slug":"/products/web_app/starter-tier/🔎 Inspection management","permalink":"/about/products/web_app/starter-tier/🔎 Inspection management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"status":"complete"},"sidebar":"tutorialSidebar","previous":{"title":"🍭 Feeding history","permalink":"/about/products/web_app/starter-tier/🍭 Feeding history"},"next":{"title":"🗺️ Hive Placement Planner","permalink":"/about/products/web_app/starter-tier/🗺️ Hive placement planner"}}')

},

};
;