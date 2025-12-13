"use strict";
exports.ids = ["28732"];
exports.modules = {
19376(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_beehive_sensors_components_ds_18_b_20_md_9e9_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_beehive_sensors_components_ds_18_b_20_md_9e9_json__rspack_import_0 = __webpack_require__(95161);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	title: 'Temperature sensor - DS18B20'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Wiring diagram",
  "id": "wiring-diagram",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h3: "h3",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.aliexpress.com/item/1005006431677780.html",
        children: "https://www.aliexpress.com/item/1005006431677780.html"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(76691)/* ["default"] */.A) + "",
        width: "798",
        height: "778"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "wiring-diagram",
      children: "Wiring diagram"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "\nflowchart LR\n\nsubgraph ESP32\n\nVCC1[3.3V]\n\nGND1[GND]\n\nGPIO4\n\nend\n\n  \n\nsubgraph DS18B20\n\nVCC2\n\nGND2[GND]\n\nDAT\n\nend\n\n  \n\nsubgraph sensor\n\nyellow\n\nred\n\nblack\n\nend\n\n  \n\nVCC1 <--> VCC2 <-->red\n\nGND1 <--> GND2 <--> black\n\nGPIO4 <--> DAT <--> yellow\n"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(99805)/* ["default"] */.A) + "",
        width: "2136",
        height: "1602"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "DS18B20 Temperature Sensor:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "DATA to IO4 (with an optional 4.7kΩ pull-up resistor between DATA and VCC)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Description:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Pluggable terminal waterproof DS18B20 temperature sensor can be used in many places, such as soil temperature detection, hot water tank temperature control, waterproof DS18B20 temperature sensor must also be connected to a pull-up resistor can be used, for which we designed the converter to send use."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Product Specifications:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Temperature sensor supply voltage: 3.0V ~ 5.5V"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Temperature sensor resolution: 9 to 12 adjustable resolution"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Temperature range: -55 ~ +125 ° (lead can only withstand the highest temperature of 85 degrees)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Temperature Sensor Output Lead: Yellow (DATA) Red (VCC) and Black (GND)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Adapter Cables: DATA, VCC, BLK,"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Suitable platform: for Arduino and Raspberry Pi"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Package Included:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "1PC * DS18B20 temperature sensor"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "1PC * pluggable terminal adapter"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "1PC * 3pin cable"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/iee3QBuVx6M",
      title: "ESP32 & DS18B20 thermometer - simple projects with Arduino and ESP32",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
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
99805(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/20241230_192826-a07fac6a1018ccc6fe3fd381647a1655.jpg");

},
76691(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2024-11-09 at 19.24.02-d43a228f3cc4dd45219407cf6844ef43.png");

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
95161(module) {
module.exports = JSON.parse('{"id":"beehive-sensors/components/DS18B20","title":"Temperature sensor - DS18B20","description":"https://www.aliexpress.com/item/1005006431677780.html","source":"@site/docs/beehive-sensors/components/DS18B20.md","sourceDirName":"beehive-sensors/components","slug":"/beehive-sensors/components/DS18B20","permalink":"/docs/beehive-sensors/components/DS18B20","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/beehive-sensors/components/DS18B20.md","tags":[],"version":"current","frontMatter":{"title":"Temperature sensor - DS18B20"},"sidebar":"tutorialSidebar","previous":{"title":"Bill of materials","permalink":"/docs/beehive-sensors/components/"},"next":{"title":"Microcontroller - ESP32","permalink":"/docs/beehive-sensors/components/ESP32"}}')

},

};
;