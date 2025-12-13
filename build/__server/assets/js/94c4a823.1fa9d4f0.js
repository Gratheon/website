"use strict";
exports.ids = ["94692"];
exports.modules = {
90389(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_entrance_observer_features_bee_movement_metric_reporting_md_94c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_entrance_observer_features_bee_movement_metric_reporting_md_94c_json__rspack_import_0 = __webpack_require__(96087);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = '📊 Bee movement metric reporting';

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
        id: "-bee-movement-metric-reporting",
        children: "📊 Bee movement metric reporting"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-purpose",
      children: "🎯 Purpose"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Collects, processes and transmits comprehensive bee movement analytics from entrance monitoring to provide actionable insights for beekeepers."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-user-story",
      children: "🎭 User Story"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "As a beekeeper using entrance monitoring systems"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "I want to receive detailed reports about bee movement patterns and trends"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "So that I can make informed decisions about hive management and detect potential issues early"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-key-benefits",
      children: "🚀 Key Benefits"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Comprehensive analytics"
        }), ": Detailed movement patterns, peak activity times, and seasonal trends"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Early warning system"
        }), ": Anomaly detection for unusual activity patterns"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Historical tracking"
        }), ": Long-term data for understanding colony development"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Integration ready"
        }), ": Standardized metrics for dashboard and alert systems"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-overview",
      children: "🔧 Technical Overview"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Metrics calculation system (src/metrics.py) processes track history data to generate derived analytics including average speed, 95th percentile speed, and stationary bee detection. Data is saved locally in daily-rotated JSONL files and transmitted via telemetry API with configurable endpoints and authentication."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-acceptance-criteria",
      children: "📋 Acceptance Criteria"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Calculates derived metrics: avg_speed_px_per_frame, p95_speed_px_per_frame, stationary_bees_count"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Processes track history using NumPy for speed calculations and distance analysis"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Saves telemetry data locally in daily-rotated JSONL files (metrics_YYYY-MM-DD.jsonl)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Transmits data to configurable TELEMETRY_BASE_URL with API token authentication"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Includes core metrics: bees_in, bees_out, detected_bees, bee_interactions, net_flow"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Supports configurable stationary threshold (default 10px movement)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Thread-safe telemetry transmission with async processing"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-out-of-scope",
      children: "🚫 Out of Scope"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Long-term data storage (handled by cloud infrastructure)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Advanced predictive analytics (basic statistical analysis only)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Cross-hive comparative analysis"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Weather correlation analysis (handled by separate systems)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-implementation-approach",
      children: "🏗️ Implementation Approach"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Metrics Engine"
        }), ": NumPy-based calculations for speed and distance analysis"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Data Storage"
        }), ": Local JSONL files with daily rotation in /app/telemetry directory"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "API Integration"
        }), ": HTTP POST requests to telemetry endpoint with bearer token auth"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Track Analysis"
        }), ": Euclidean distance calculations between consecutive coordinate pairs"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Threading"
        }), ": Async telemetry transmission to prevent blocking main processing"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-success-metrics",
      children: "📊 Success Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "NumPy-based metric calculation with proper rounding to 2 decimal places"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Local data persistence with daily file rotation"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "HTTP telemetry transmission success with proper error handling"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Track history serialization with integer coordinate conversion"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Thread-safe async processing without blocking video pipeline"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-related-features",
      children: "🔗 Related Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/entrance_observer/features/%F0%9F%93%88%20Count%20bees%20coming%20in%20and%20out%20-%20on%20the%20edge",
          children: "📈 Count bees coming in and out - on the edge"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/scales/features/%F0%9F%93%88%20Telemetry%20API",
          children: "📈 Telemetry API"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/entrance_observer/features/%F0%9F%9B%A3%EF%B8%8F%20Landing%20board%20heatmap%20generation",
          children: "🛣️ Landing board heatmap generation"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-resources--references",
      children: "📚 Resources & References"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/entrance-observer/blob/main/src/metrics.py",
          children: "Metrics calculation implementation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/entrance-observer/blob/main/src/telemetry.py",
          children: "Telemetry system"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html",
          children: "NumPy distance calculations"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-notes",
      children: "💬 Notes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Actual implementation using NumPy for mathematical calculations, daily-rotated JSONL persistence, and async HTTP telemetry transmission. Core component for transforming raw tracking data into actionable metrics."
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
96087(module) {
module.exports = JSON.parse('{"id":"products/entrance_observer/features/📊 Bee movement metric reporting","title":"📊 Bee movement metric reporting","description":"🎯 Purpose","source":"@site/about/products/entrance_observer/features/📊 Bee movement metric reporting.md","sourceDirName":"products/entrance_observer/features","slug":"/products/entrance_observer/features/📊 Bee movement metric reporting","permalink":"/about/products/entrance_observer/features/📊 Bee movement metric reporting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"📈 Count bees coming in and out - on the edge","permalink":"/about/products/entrance_observer/features/📈 Count bees coming in and out - on the edge"},"next":{"title":"🛣️ Landing board heatmap generation","permalink":"/about/products/entrance_observer/features/🛣️ Landing board heatmap generation"}}')

},

};
;