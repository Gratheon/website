"use strict";
exports.ids = ["93093"];
exports.modules = {
65612(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_jetson_nano_setup_md_f62_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_entrance_observer_jetson_nano_setup_md_f62_json__rspack_import_0 = __webpack_require__(58229);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 1
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Installation",
  "id": "installation",
  "level": 2
}, {
  "value": "Global update",
  "id": "global-update",
  "level": 2
}, {
  "value": "How to install ML software with GPU acceleration",
  "id": "how-to-install-ml-software-with-gpu-acceleration",
  "level": 2
}, {
  "value": "Python",
  "id": "python",
  "level": 2
}, {
  "value": "Opencv with cuda",
  "id": "opencv-with-cuda",
  "level": 2
}, {
  "value": "Install cuDNN",
  "id": "install-cudnn",
  "level": 2
}, {
  "value": "Install Pytorch with CUDA",
  "id": "install-pytorch-with-cuda",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Prepare SD card", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Download SD card image - ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://developer.nvidia.com/jetson-nano-sd-card-image",
              children: "https://developer.nvidia.com/jetson-nano-sd-card-image"
            })]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Connect SD card to Mac, Use ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
              href: "https://www.balena.io/etcher",
              children: "https://www.balena.io/etcher"
            }), " to burn image onto SD card"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Insert SD card"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Run device", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Connect wifi antennas"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Connect camera cables"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Connect Power, Reset and LED cables in correct pins if you use a case"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Set pin near the output barrel - this tells device to use 5V power supply"
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
            children: "Use HDMI output - Display port does not work by default on boot"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "After OS installation is complete, you won’t have wifi right away - you need a restart"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "global-update",
      children: "Global update"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-jsx",
        children: "sudo apt-get -y update\nsudo apt-get upgrade\n\n# Uninstall LibreOffice to save space\nsudo apt remove --purge libreoffice* -y\nsudo apt-get clean -y\nsudo apt autoremove -y\nsudo apt-get update\n\n# Install curl\nsudo apt install curl\n\n# Docker upgrade, use own username\nsudo usermod -aG docker gratheon\nsudo apt-get --only-upgrade install docker.io\n\n# Add docker-compose\nexport DOCKER_COMPOSE_VERSION=1.27.4\nsudo apt-get install libhdf5-dev\nsudo apt-get install libssl-dev\nsudo pip3 install docker-compose==\"${DOCKER_COMPOSE_VERSION}\"\n\n# to not display terminal errors when playing annoying sounds\nsudo apt install libcanberra-gtk-module libcanberra-gtk3-module -y\n\n# video cam utils\nsudo apt-get install v4l-utils\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/GQ3drRllX3I",
      title: "Jetson Nano B01 - Dual RPi Cameras + how to get faster frame rates",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "how-to-install-ml-software-with-gpu-acceleration",
      children: "How to install ML software with GPU acceleration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "python",
      children: "Python"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "sudo apt install python3-pip\npip3 install --upgrade pip\n\n# install python 3.10, because 3.11 did not work with pytorch for me\npyenv install 3.10.13\n\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "opencv-with-cuda",
      children: "Opencv with cuda"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "683",
      height: "384",
      src: "https://www.youtube.com/embed/P-EZr0zy53g",
      title: "L-3 Install OpenCV 4.5 on NVIDIA Jetson Nano | Set Up a Camera for NVIDIA Jetson Nano",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "install-cudnn",
      children: "Install cuDNN"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://developer.nvidia.com/cudnn-downloads",
        children: "https://developer.nvidia.com/cudnn-downloads"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Install jtop to see GPU usage in realtime"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "# update pip as root\nsudo curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py\nsudo python get-pip.py\nsudo python -m pip install jetson-stats\n\n# restart needed\njtop\nnvidia-smi\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "install-pytorch-with-cuda",
      children: "Install Pytorch with CUDA"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["see ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/",
        children: "https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "pip install --no-cache <https://developer.download.nvidia.com/compute/redist/jp/v60dp/pytorch/torch-2.2.0a0+81ea7a4.nv24.01-cp310-cp310-linux_aarch64.whl>\n# pip install torchvision\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["See ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch",
        children: "https://github.com/dusty-nv/jetson-containers/tree/master/packages/l4t/l4t-pytorch"
      })]
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
58229(module) {
module.exports = JSON.parse('{"id":"entrance-observer/Jetson Nano setup","title":"Jetson Nano setup","description":"Installation","source":"@site/docs/entrance-observer/Jetson Nano setup.md","sourceDirName":"entrance-observer","slug":"/entrance-observer/Jetson Nano setup","permalink":"/docs/entrance-observer/Jetson Nano setup","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/entrance-observer/Jetson Nano setup.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"👁️‍🗨️ Entrance observer","permalink":"/docs/entrance-observer/"},"next":{"title":"Remote Desktop connection setup 🖥️","permalink":"/docs/entrance-observer/Remote Desktop connection setup"}}')

},

};
;