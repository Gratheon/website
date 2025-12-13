"use strict";
exports.ids = ["60"];
exports.modules = {
92214(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_starter_tier_ideas_manual_inspections_bulk_file_upload_md_e04_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_starter_tier_ideas_manual_inspections_bulk_file_upload_md_e04_json__rspack_import_0 = __webpack_require__(76958);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "User story - Adding files",
  "id": "user-story---adding-files",
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
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "user-story---adding-files",
      children: "User story - Adding files"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User opens hive section view"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["User sees bulk upload div/block/button similar to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.notion.so/Frame-side-photo-upload-c9d3df6f053e41bbb7b8414b7c2bb397?pvs=21",
          children: "Frame side photo upload"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["User drags 12 files from his desktop", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["if user selected more files than frame sides - ignore them, but do add a warning message on top with a list of filenames that were ignored.", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
                children: ["If ignored list is > 3, add ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                  children: "..."
                }), " at the end and ignore the rest."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["files get uploaded one-by-one", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["show the progress if possible at least in amount of files, ex. ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Uploaded 3 of 12 files"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Files are assigned to frame sides, starting ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "from the left to the right →"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "File upload component should allow user to navigate to other views without cancelling upload"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["When all files are uploaded, show success message ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Upload is complete"
        })]
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
76958(module) {
module.exports = JSON.parse('{"id":"products/web_app/starter-tier/ideas 💡/📦 Manual inspections - Bulk file upload","title":"📦 Manual inspections - Bulk file upload","description":"User story - Adding files","source":"@site/about/products/web_app/starter-tier/ideas 💡/📦 Manual inspections - Bulk file upload.md","sourceDirName":"products/web_app/starter-tier/ideas 💡","slug":"/products/web_app/starter-tier/ideas 💡/📦 Manual inspections - Bulk file upload","permalink":"/about/products/web_app/starter-tier/ideas 💡/📦 Manual inspections - Bulk file upload","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🐝 Laying workers cell detection","permalink":"/about/products/web_app/starter-tier/ideas 💡/🐝 Laying workers cell detection"},"next":{"title":"🦀 Varroa infestation management","permalink":"/about/products/web_app/starter-tier/ideas 💡/🦀 Varroa infestation management"}}')

},

};
;