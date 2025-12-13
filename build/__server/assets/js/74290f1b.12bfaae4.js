"use strict";
exports.ids = ["44719"];
exports.modules = {
16571(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_beehive_sensors_installation_md_742_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_beehive_sensors_installation_md_742_json__rspack_import_0 = __webpack_require__(9321);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Setting up Arduino IDE for firmware upload",
  "id": "setting-up-arduino-ide-for-firmware-upload",
  "level": 3
}, {
  "value": "Uploading firmware",
  "id": "uploading-firmware",
  "level": 3
}, {
  "value": "Configuring powered-on ESP32",
  "id": "configuring-powered-on-esp32",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "setting-up-arduino-ide-for-firmware-upload",
      children: "Setting up Arduino IDE for firmware upload"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["download ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://www.arduino.cc/en/software",
            children: "Arduino IDE"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["under preferences, set this URL as extra sources ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json",
            children: "https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["ESP32 chips come in different flavours. If you got same component as described in the bill of materials - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
            href: "/docs/beehive-sensors/components/ESP32",
            children: "ESP32"
          }), ", then connect it over USB to your machine"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
          children: ["Choose ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
            children: "ESP32-WROOM-DA Module"
          }), " from device list\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
            src: (__webpack_require__(14961)/* ["default"] */.A) + "",
            width: "1372",
            height: "988"
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
          children: "Make sure to change Arduino IDE upload speed to 115200 baud under Tools so that your device can receive data when you upload it"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(4139)/* ["default"] */.A) + "",
        width: "650",
        height: "169"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Install ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/milesburton/Arduino-Temperature-Control-Library",
          children: "DallasTemperature@3.9.0"
        }), " library in Arduino IDE (DallasTemperature@3.9.0"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Install ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/RobTillaart/HX711",
          children: "HX711"
        }), " library (by RobTillaart) in Arduino IDE"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "uploading-firmware",
      children: "Uploading firmware"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Checkout our client firmware ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "git clone git@github.com:Gratheon/beehive-sensors.git"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Upload code to the device using a button ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "->"
        }), ". You should see something like:\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
          src: (__webpack_require__(40349)/* ["default"] */.A) + "",
          width: "1516",
          height: "344"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Click on the reset button (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "FN"
        }), ") on the chip"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "configuring-powered-on-esp32",
      children: "Configuring powered-on ESP32"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Connect to the ESP32 WIFI access point ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "gratheon"
        }), ", use password ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "gratheon"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Open browser and navigate to wifi access point default gateway - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "http://192.168.4.1",
          children: "http://192.168.4.1"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Enter the configuration:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "WiFi credentials (SSID, password) for the sensor to connect to the internet"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Hive ID - to identify the hive that is being monitored in web-app. You can take that you can take from URL, for example in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "https://app.gratheon.com/apiaries/7/hives/54"
            }), " the here ID is the last digits ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "54"
            })]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["API Token - to identify request belonging to user (you). You can generate token from account settings at ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://app.gratheon.com/account",
              children: "https://app.gratheon.com/account"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Click ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "Save"
        }), " button. Your ESP32 will restart and connect to your WIFI network and start sending data to the telemetry API service"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(83211)/* ["default"] */.A) + "",
        width: "1508",
        height: "1022"
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
4139(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2024-07-22 at 03.42.43-d1eb3deb39e428309cc198e3383b8aae.png");

},
14961(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2024-11-11 at 01.33.06-28801c92709a30fa8000c4b84c734bd8.png");

},
40349(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2024-11-11 at 01.37.37-dd4ab75becf5a5ea159653b20d9fdaeb.png");

},
83211(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/iot-server-91df2b2eaa011bc02861191f5582c163.png");

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
9321(module) {
module.exports = JSON.parse('{"id":"beehive-sensors/Installation","title":"Installation","description":"Setting up Arduino IDE for firmware upload","source":"@site/docs/beehive-sensors/Installation.md","sourceDirName":"beehive-sensors","slug":"/beehive-sensors/Installation","permalink":"/docs/beehive-sensors/Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/beehive-sensors/Installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"🌡️ Beehive IoT sensors","permalink":"/docs/beehive-sensors/"},"next":{"title":"3d model","permalink":"/docs/beehive-sensors/3d model"}}')

},

};
;