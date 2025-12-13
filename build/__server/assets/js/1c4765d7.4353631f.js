"use strict";
exports.ids = ["33881"];
exports.modules = {
14427(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_entrance_observer_features_video_streaming_via_api_md_1c4_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_entrance_observer_features_video_streaming_via_api_md_1c4_json__rspack_import_0 = __webpack_require__(6805);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = '🎥 Video streaming via API';

const assets = {

};



const toc = [{
  "value": "🎯 Purpose",
  "id": "-purpose",
  "level": 3
}, {
  "value": "🎭 User Story",
  "id": "-user-story",
  "level": 3
}, {
  "value": "🚀 Key Benefits",
  "id": "-key-benefits",
  "level": 3
}, {
  "value": "🔧 Technical Overview",
  "id": "-technical-overview",
  "level": 3
}, {
  "value": "📋 Acceptance Criteria",
  "id": "-acceptance-criteria",
  "level": 3
}, {
  "value": "🚫 Out of Scope",
  "id": "-out-of-scope",
  "level": 3
}, {
  "value": "🏗️ Implementation Approach",
  "id": "️-implementation-approach",
  "level": 3
}, {
  "value": "📊 Success Metrics",
  "id": "-success-metrics",
  "level": 3
}, {
  "value": "🔗 Related Features",
  "id": "-related-features",
  "level": 3
}, {
  "value": "📚 Resources &amp; References",
  "id": "-resources--references",
  "level": 3
}, {
  "value": "💬 Notes",
  "id": "-notes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "-video-streaming-via-api",
        children: "🎥 Video streaming via API"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-purpose",
      children: "🎯 Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Enables hardware devices to capture and stream video from beehive entrances to the cloud for remote monitoring and AI analysis."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-user-story",
      children: "🎭 User Story"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "As a beekeeper with custom hardware or limited compute resources"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "I want to stream video from my beehive entrance to the cloud"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "So that I can leverage cloud-based AI analysis and remote monitoring without requiring powerful on-device processing"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-key-benefits",
      children: "🚀 Key Benefits"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Hardware flexibility"
        }), ": Works with Raspberry Pi, custom PCs, or Jetson Nano devices"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Cloud processing"
        }), ": Offloads AI analysis to cloud infrastructure for devices without GPU"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Remote access"
        }), ": View live and historical video streams from anywhere"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Easy integration"
        }), ": Simple API token authentication and setup"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-overview",
      children: "🔧 Technical Overview"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Video upload system (src/uploader.py) captures processed video chunks with detection overlays and uploads them to video.gratheon.com via GraphQL mutations. Uses multipart/form-data encoding with both video files and detection metadata, supporting batch uploads with bearer token authentication."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-acceptance-criteria",
      children: "📋 Acceptance Criteria"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Supports USB camera video capture with OpenCV (CAP_V4L2/CAP_AVFOUNDATION)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Encodes video with AVC1/MP4V codecs for compatibility"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Uploads video chunks with detection overlays via GraphQL API"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Includes detection metadata file alongside video upload"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Uses bearer token authentication (API_TOKEN environment variable)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Supports configurable video chunk length (VIDEO_CHUNK_LENGTH_SEC)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Handles network interruptions with threaded async uploads"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-out-of-scope",
      children: "🚫 Out of Scope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Real-time live streaming (batch upload of processed chunks)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Audio streaming (video only)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Real-time two-way communication"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Storage management beyond standard retention policies"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-implementation-approach",
      children: "🏗️ Implementation Approach"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Video Encoding"
        }), ": OpenCV VideoWriter with AVC1/MP4V codecs"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Upload Protocol"
        }), ": GraphQL mutation via HTTPS POST with multipart/form-data"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Bearer token in Authorization header"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Threading"
        }), ": Async upload processing to prevent blocking video capture"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Integration"
        }), ": Links to SECTION_ID (box ID) and timestamp metadata"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Graceful fallback when API credentials not configured"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-success-metrics",
      children: "📊 Success Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Video encoding with proper codec compatibility (AVC1 primary, MP4V fallback)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Successful GraphQL mutation uploads to video.gratheon.com endpoint"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Threaded async processing without blocking main video pipeline"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Proper multipart encoding with detection metadata files"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Bearer token authentication and box ID association"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-related-features",
      children: "🔗 Related Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/entrance_observer/features/%F0%9F%8E%AE%20Client-side%20app%20with%20UI",
          children: "🎮 Client-side app with UI"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/entrance_observer/features/%F0%9F%93%88%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge",
          children: "📈 Count bees coming in and out - on the edge"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/scales/features/%F0%9F%93%88%20Telemetry%20API",
          children: "📈 Telemetry API"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-resources--references",
      children: "📚 Resources & References"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/entrance-observer/blob/main/src/uploader.py",
          children: "Video upload implementation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://video.gratheon.com/graphql",
          children: "GraphQL mutation endpoint"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://docs.opencv.org/master/dd/d9e/classcv_1_1VideoWriter.html",
          children: "OpenCV VideoWriter documentation"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-notes",
      children: "💬 Notes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Actual implementation using GraphQL mutations for video upload with detection metadata. Enables cloud-based processing for devices without sufficient local compute resources."
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
6805(module) {
module.exports = JSON.parse('{"id":"products/entrance_observer/features/🎥 Video streaming via API","title":"🎥 Video streaming via API","description":"🎯 Purpose","source":"@site/about/products/entrance_observer/features/🎥 Video streaming via API.md","sourceDirName":"products/entrance_observer/features","slug":"/products/entrance_observer/features/🎥 Video streaming via API","permalink":"/about/products/entrance_observer/features/🎥 Video streaming via API","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"👁️‍🗨️ Entrance Observer","permalink":"/about/products/entrance_observer/"},"next":{"title":"🎮 Client-side app with UI","permalink":"/about/products/entrance_observer/features/🎮 Client-side app with UI"}}')

},

};
;