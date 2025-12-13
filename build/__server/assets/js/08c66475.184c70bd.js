"use strict";
exports.ids = ["79955"];
exports.modules = {
93757(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_share_token_authentication_md_08c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_api_share_token_authentication_md_08c_json__rspack_import_0 = __webpack_require__(85121);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Passing token",
  "id": "passing-token",
  "level": 3
}, {
  "value": "Scopes",
  "id": "scopes",
  "level": 3
}, {
  "value": "Validation &amp; Enforcement",
  "id": "validation--enforcement",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some of Gratheon resources can be publicly shared (and do not require explicit login by the viewer). For example, a beehive inspection view can be shared."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["For such cases, we support a special ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Share Token"
      }), " authentication. This token provides limited, ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "read-only"
      }), " access based on predefined ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "scopes"
      }), ". This token is included in the URL that is used for sharing."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "passing-token",
      children: "Passing token"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["When making requests using a share token, our app includes token from URL in in the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Share-Token"
      }), " HTTP headers when making ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "/docs/API/GraphQL",
        children: "GraphQL"
      }), " requests:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Share-Token: <your_share_token>\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "scopes",
      children: "Scopes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Each share token has embedded scopes defining exactly which queries are allowed and for which specific resource IDs. For example, a token for sharing inspection ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "123"
      }), " of hive ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "456"
      }), " might have scopes like:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"version\": 1,\n  \"allowedQueries\": [\n\t{\n\t  \"queryName\": \"inspection\",\n\t  \"requiredArgs\": { \"id\": \"123\" }\n\t},\n\t{\n\t  \"queryName\": \"hive\",\n\t  \"requiredArgs\": { \"id\": \"456\" }\n\t}\n  ]\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "validation--enforcement",
      children: "Validation & Enforcement"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "graphql-router"
      }), " validates the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "X-Share-Token"
      }), " by calling the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "validateShareToken"
      }), " query on the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "user-cycle"
      }), " service. If the token is valid, the router ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "enforces"
      }), " the embedded scopes by parsing the incoming GraphQL request."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["It checks if the requested operation (query) and its arguments match an entry in the token's ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "allowedQueries"
      }), ". Requests attempting operations or arguments outside the defined scopes, or any mutations, will be denied directly by the router with a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "403 Forbidden"
      }), " error before reaching downstream services."]
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
85121(module) {
module.exports = JSON.parse('{"id":"API/Share Token Authentication","title":"Share Token Authentication","description":"Some of Gratheon resources can be publicly shared (and do not require explicit login by the viewer). For example, a beehive inspection view can be shared.","source":"@site/docs/API/Share Token Authentication.md","sourceDirName":"API","slug":"/API/Share Token Authentication","permalink":"/docs/API/Share Token Authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/API/Share Token Authentication.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🚪 Rate limiting","permalink":"/docs/API/Ratelimiting"},"next":{"title":"📱 Web-app","permalink":"/docs/web-app/"}}')

},

};
;