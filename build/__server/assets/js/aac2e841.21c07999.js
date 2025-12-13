"use strict";
exports.ids = ["36585"];
exports.modules = {
95383(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_pro_tier_ideas_device_management_md_aac_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_api_site_about_products_web_app_pro_tier_ideas_device_management_md_aac_json__rspack_import_0 = __webpack_require__(65881);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Suggested solution",
  "id": "suggested-solution",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To ease connecting web-app to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21",
        children: "Entrance Observer"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Beehive-IoT-sensors-26aad244cdf64f4e8596d050f44f0bed?pvs=21",
        children: "Beehive IoT sensors"
      }), ", ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
        href: "https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21",
        children: ["R", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "obotic Beehive"
        })]
      }), " and other third-party ([", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "http://Beep.nl",
        children: "Beep.nl"
      }), " weight telemetry integration](", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21",
        children: "https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21"
      }), ")) we need a separate view for managing devices."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Currently devices are not registered, they just use an API token and its later not clear if token is used or not and by what device."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Another problem is that its not clear when was the last time device was online / interacted with us."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "A third potential problem is that if we do manage to sell devices, we need to have some kind of analytics, debugging and versioning per-device so we need a database."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "suggested-solution",
      children: "Suggested solution"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["In the ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "web-app"
      }), " repo:"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add new menu ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Devices"
        }), " in the top"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add devices list view", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "it should make graphql query to list devices"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Add new device button + new view for this (similar to new hive creation)", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["type (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.notion.so/Beehive-IoT-sensors-26aad244cdf64f4e8596d050f44f0bed?pvs=21",
              children: "Beehive IoT sensors"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21",
              children: "Entrance Observer"
            }), ", ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
              href: "https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21",
              children: ["R", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
                children: "obotic Beehive"
              })]
            }), ")"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "model number (string) - should help us to understand what software is running there and what set of features it has if we do bulk production"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["select to hive (send ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "hiveId"
            }), " to backend)", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
                children: ["select section (optional, send ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                  children: "boxId"
                }), " to backend)"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["generate new API token in user-cycle for this device", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
                children: ["need to change user-cycle to have ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
                  children: "deviceId"
                }), " column, pass it to user-cycle to be stored too"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["lastUsed - datetime", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "should be updated on every API call if its > 1 min"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["status", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "if lastUsed < 1 min, mark device as green, online"
              }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "if lastUsed > 5 min, mark device as yellow, pending"
              }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "if lastUsed > 1h, mark device as red, offline"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Edit device view", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "revoke API token for this device"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Connect to device"
            }), " button for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21",
              children: "Entrance Observer"
            }), " and ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
              href: "https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21",
              children: ["R", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
                children: "obotic Beehive"
              })]
            }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
                children: ["for ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                  href: "https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21",
                  children: "Entrance Observer"
                }), ", should trigger ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                  href: "https://www.notion.so/Remote-desktop-4f5aa40074cf4b54b9b871e38b96a433?pvs=21",
                  children: "Remote desktop"
                }), " via VNC"]
              }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
                children: ["for ", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.a, {
                  href: "https://www.notion.so/Robotic-Beehive-fd9559a2950b44bc8291972299ced18e?pvs=21",
                  children: ["R", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
                    children: "obotic Beehive"
                  })]
                }), " we should have dedicated views to control the device remotely", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
                  children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Real-time-frame-scanning-36c9c9fc593a433baaba8b85b7c5c426?pvs=21",
                      children: "Real-time frame scanning"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Robotic-frame-reordering-63ed095970914d4c8f21f790a0b9c81d?pvs=21",
                      children: "Robotic frame reordering"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Full-hive-inspection-7d0f89c8a9de4ab3a8eb9e516b7f7172?pvs=21",
                      children: "Full hive inspection"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Robotic-frame-isolation-extraction-954c2e88f272419ebe0c41102588f6eb?pvs=21",
                      children: "Robotic frame isolation & extraction"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Robotic-insertion-of-new-frames-05c253e37262494d9f4214ce8b02230b?pvs=21",
                      children: "Robotic insertion of new frames"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Ventilation-control-023a9bf9e44548809132c57557c2e7f4?pvs=21",
                      children: "Ventilation control"
                    })
                  }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                    children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
                      href: "https://www.notion.so/Moveable-hive-bottom-with-varroa-counting-89d9a4406d304b33ba07061c7b159082?pvs=21",
                      children: "Moveable hive bottom with varroa counting"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "Device logs"
            }), " table view", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "Ideally this should show something that our client apps will send"
              }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
                children: "Read-only"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Remove device button should soft-delete a device", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "should revoke API token before deletion"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "In account view → token list, show if api token is used by a device. Instead of deletion button, direct user to device view"
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
65881(module) {
module.exports = JSON.parse('{"id":"products/web_app/pro-tier/ideas 💡/🎮 Device management","title":"🎮 Device management","description":"To ease connecting web-app to Entrance Observer, Beehive IoT sensors, Robotic Beehive and other third-party ([Beep.nl weight telemetry integration](https://www.notion.so/Beep-nl-weight-telemetry-integration-a72ed2ce25004a3c853bb41fa08abc48?pvs=21)) we need a separate view for managing devices.","source":"@site/about/products/web_app/pro-tier/ideas 💡/🎮 Device management.md","sourceDirName":"products/web_app/pro-tier/ideas 💡","slug":"/products/web_app/pro-tier/ideas 💡/🎮 Device management","permalink":"/about/products/web_app/pro-tier/ideas 💡/🎮 Device management","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"🌻 Pollination optimization with hive placement recommendation","permalink":"/about/products/web_app/pro-tier/ideas 💡/🌻 Pollination optimization with hive placement recommendation"},"next":{"title":"🐜 Ant detection","permalink":"/about/products/web_app/pro-tier/ideas 💡/🐜 Ant detection"}}')

},

};
;