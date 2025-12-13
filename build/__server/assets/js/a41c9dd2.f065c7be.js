"use strict";
exports.ids = ["17026"];
exports.modules = {
57038(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_web_app_md_a41_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_web_app_md_a41_json__rspack_import_0 = __webpack_require__(26318);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 2,
	title: '📱Web-app'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Core domain entities",
  "id": "core-domain-entities",
  "level": 2
}, {
  "value": "Main app use cases",
  "id": "main-app-use-cases",
  "level": 2
}, {
  "value": "Uploading photos to get colony overview stats",
  "id": "uploading-photos-to-get-colony-overview-stats",
  "level": 3
}, {
  "value": "Track colony development over time",
  "id": "track-colony-development-over-time",
  "level": 3
}, {
  "value": "Sending weight telemetry from IoT sensors",
  "id": "sending-weight-telemetry-from-iot-sensors",
  "level": 3
}, {
  "value": "Streaming entrance video",
  "id": "streaming-entrance-video",
  "level": 3
}, {
  "value": "Monitor varroa mites via bottom board",
  "id": "monitor-varroa-mites-via-bottom-board",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Gratheon web app is intended to help beekeepers manage apiary data, communicate with installed modular hive devices, analyze images and timeseries data to extract valuable statistics, provide this data analytics over time, generate and deliver alerts, forecast, provide AI suggestions to solve issues."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "status"
      }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/",
        children: "TRL 6"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "core-domain-entities",
      children: "Core domain entities"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Entity"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Description"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.th, {
            children: "Key Properties"
          })]
        })
      }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Apiary"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Set of beehives located together at specific location. Size limited by surrounding land that bees can pollinate"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Location (lat/lng), name, active status"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Hive"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Physical beehive structure with vertical sections. Can be split, merged, or collapsed"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Name, color, status, boxes, family, split/merge history, collapse tracking"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Family (Colony/Queen)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Bee superorganism led by queen that lays eggs"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Race (apis mellifera variation), added year, age (auto-calculated), treatments"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Box (Hive Section)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Hollow wooden section that houses frames. Types: Deep (brood), Super (honey), Gate (entrance), Ventilation, Queen Excluder, Horizontal Feeder, Bottom Board"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Type, position, color, frames"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Frame"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Wooden frame with wax foundation inside sections. Types: Foundation, Empty Comb, Void, Partition, Feeder"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Type, position, left/right sides"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Frame Side"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "One side of a frame where photos can be uploaded for AI analysis"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "File references for images, detected resources"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Inspection"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Snapshot of entire beehive state during beekeeper intervention. Stores JSON data of hive composition at specific time"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Hive ID, data (JSON), timestamp"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Treatment"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Anti-varroa chemical interventions tracked per family/box/hive for medical history"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Type, timestamp, target (hive/box/family)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "File"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Uploaded images (frame photos, bottom board varroa photos). Processed through AI detection pipeline"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Hash, dimensions, user ID, file type, detection jobs"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Detected Resources"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "AI-detected cell types on frame photos: Capped brood, Eggs, Honey, Larvae, Nectar, Pollen, Other"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Class, coordinates (x,y), radius, probability"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Detected Bees/Queens"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "AI-detected bee and queen positions on frames"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Bounding boxes, confidence scores"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Detected Varroa"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "AI-detected varroa mites on bottom board photos"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Count, positions (coming soon)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Metrics (Telemetry)"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Time-series sensor data from IoT devices"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Temperature (°C), humidity (%), weight (kg), timestamp"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Entrance Movement"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Bee traffic analysis from entrance video cameras"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Bees in/out, net flow, speed stats, stationary bees, interactions"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Alert"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Generated warnings based on metric thresholds and rules"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Text, metric type/value, hive ID, delivery status, timestamp"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Alert Rule"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "User-defined conditions that trigger alerts"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Metric type, condition, threshold, duration, enabled status, scope (hive/apiary)"
          })]
        }), (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "Alert Channel"
            })
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Delivery methods for alerts"
          }), (0,react_jsx_runtime__rspack_import_1.jsx)(_components.td, {
            children: "Type (email/phone/telegram), contact info, time window, enabled status"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(62790)/* ["default"] */.A) + "",
        width: "1420",
        height: "907"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "main-app-use-cases",
      children: "Main app use cases"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Use-cases is a group of features that when combined serve a great value for the customer"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "uploading-photos-to-get-colony-overview-stats",
      children: "Uploading photos to get colony overview stats"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Create a beehive"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Open specific section, add frames"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Open a specific frame, click \"upload frame photo\" with bees and comb cells on it"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Wait for backend to process"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Receive AI-assisted statistics about bee counts and cell distribution"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Compare different hives to see which ones are more powerful with real data behind it"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "track-colony-development-over-time",
      children: "Track colony development over time"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Follow steps for adding frame photos of the beehive after an inspection"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Click on \"Create inspection button\" to create a snapshot of the hive in time"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Check that new Inspection is added under Inspections tab", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Check how over time each inspection has own distribution of resources"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "sending-weight-telemetry-from-iot-sensors",
      children: "Sending weight telemetry from IoT sensors"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Generate API token in Account settings"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Power on IoT sensors device, follow Docs to connect it to WiFi and send data"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Open target beehive, open Metrics tab and see graphs of weight/temperature"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Open Analytics tab to see data more time-bound and correlate it with other data like weather"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "streaming-entrance-video",
      children: "Streaming entrance video"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Setup entrance video camera to stream video"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Check that video stream is visible"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "monitor-varroa-mites-via-bottom-board",
      children: "Monitor varroa mites via bottom board"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add a bottom board section to your hive"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Upload a photo of the white slideable panel showing varroa mites"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Images are versioned with inspections for historical tracking"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "AI-powered varroa counting (coming soon) will provide mite counts and treatment recommendations"
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
62790(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/web-app-1c55186bf2fd15a2b4ad706170ad5369.png");

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
26318(module) {
module.exports = JSON.parse('{"id":"products/web_app/web_app","title":"📱Web-app","description":"Gratheon web app is intended to help beekeepers manage apiary data, communicate with installed modular hive devices, analyze images and timeseries data to extract valuable statistics, provide this data analytics over time, generate and deliver alerts, forecast, provide AI suggestions to solve issues.","source":"@site/about/products/web_app/web_app.md","sourceDirName":"products/web_app","slug":"/products/web_app/","permalink":"/about/products/web_app/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"📱Web-app"},"sidebar":"tutorialSidebar","previous":{"title":"🧑‍🚀 Actions beekeepers make","permalink":"/about/products/🧑‍🚀 Actions beekeepers make"},"next":{"title":"🌍 Localization","permalink":"/about/products/web_app/basic-functionality/🌍 Localization"}}')

},

};
;