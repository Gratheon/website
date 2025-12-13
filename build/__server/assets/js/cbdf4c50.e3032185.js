"use strict";
exports.ids = ["6747"];
exports.modules = {
98651(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_db_schemas_image_splitter_md_cbd_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_db_schemas_image_splitter_md_cbd_json__rspack_import_0 = __webpack_require__(12777);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	hide_table_of_contents: true
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    mermaid: "mermaid",
    p: "p",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "image"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "classDiagram\ndirection BT\nclass files {\n   int unsigned user_id\n   varchar(64) hash\n   varchar(5) ext\n   varchar(255) filename\n   int width\n   int height\n   int url_version\n   int unsigned id\n}\nclass files_frame_side_cells {\n   int unsigned user_id\n   int inspection_id\n   json cells\n   int honey_cell_count\n   int brood_cell_count\n   int egg_cell_count\n   int capped_brood_cell_count\n   int pollen_cell_count\n   int nectar_cell_count\n   int empty_cell_count\n   datetime added_time\n   int brood\n   int capped_brood\n   int eggs\n   int pollen\n   int honey\n   int unsigned frame_side_id\n   int unsigned file_id\n}\nclass files_frame_side_queen_cups {\n   int unsigned user_id\n   int inspection_id\n   json cups\n   datetime added_time\n   int unsigned frame_side_id\n   int unsigned file_id\n}\nclass files_frame_side_rel {\n   int unsigned user_id\n   int inspection_id\n   json strokeHistory\n   datetime added_time\n   int worker_bee_count\n   int drone_count\n   int queen_count\n   int varroa_count\n   json detected_bees\n   json detected_varroa\n   json detected_queens\n   tinyint(1) queen_detected\n   int unsigned frame_side_id\n   int unsigned file_id\n}\nclass files_hive_rel {\n   int unsigned user_id\n   int unsigned hive_id\n   int unsigned file_id\n}\nclass files_resized {\n   int file_id\n   int max_dimension_px\n   int unsigned id\n}\nclass hive_advice {\n   int hive_id\n   int user_id\n   mediumtext question\n   mediumtext answer\n   datetime added_time\n   int unsigned id\n}\nclass jobs {\n   enum('cells', 'bees', 'cups', 'queens', 'varroa', 'resize') type\n   datetime process_start_time\n   datetime last_retry_time\n   int calls\n   datetime process_end_time\n   int ref_id\n   json payload\n   text error\n   int id\n}\n\nfiles_frame_side_cells  -->  files : file_id.id\nfiles_frame_side_queen_cups  -->  files : file_id.id\nfiles_frame_side_rel  -->  files : file_id.id\nfiles_hive_rel  -->  files : file_id.id\nfiles_resized  -->  files : file_id.id"
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
12777(module) {
module.exports = JSON.parse('{"id":"web-app/🥞 DB schemas/image-splitter","title":"image-splitter","description":"image","source":"@site/docs/web-app/🥞 DB schemas/image-splitter.md","sourceDirName":"web-app/🥞 DB schemas","slug":"/web-app/🥞 DB schemas/image-splitter","permalink":"/docs/web-app/🥞 DB schemas/image-splitter","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/web-app/🥞 DB schemas/image-splitter.md","tags":[],"version":"current","frontMatter":{"hide_table_of_contents":true},"sidebar":"tutorialSidebar","previous":{"title":"gate-video-stream","permalink":"/docs/web-app/🥞 DB schemas/gate-video-stream"},"next":{"title":"swarm-api","permalink":"/docs/web-app/🥞 DB schemas/swarm-api"}}')

},

};
;