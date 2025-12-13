"use strict";
exports.ids = ["96966"];
exports.modules = {
46683(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_web_app_md_08c_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_web_app_md_08c_json__rspack_import_0 = __webpack_require__(76945);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 2,
	title: '📱 Web-app'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Environment prerequisites",
  "id": "environment-prerequisites",
  "level": 2
}, {
  "value": "Architecture",
  "id": "architecture",
  "level": 2
}, {
  "value": "Core services",
  "id": "core-services",
  "level": 3
}, {
  "value": "Core services and routing",
  "id": "core-services-and-routing",
  "level": 3
}, {
  "value": "Product services",
  "id": "product-services",
  "level": 3
}, {
  "value": "Development setup",
  "id": "development-setup",
  "level": 2
}, {
  "value": "Optional services",
  "id": "optional-services",
  "level": 3
}, {
  "value": "Features",
  "id": "features",
  "level": 2
}, {
  "value": "Bottom Board &amp; Varroa Monitoring",
  "id": "bottom-board--varroa-monitoring",
  "level": 3
}, {
  "value": "Inspection Sharing",
  "id": "inspection-sharing",
  "level": 3
}, {
  "value": "Split Colony",
  "id": "split-colony",
  "level": 3
}, {
  "value": "Join Colony (Merge Hives)",
  "id": "join-colony-merge-hives",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
        children: "Goal of this document is to kickstart your development of the web-app as an engineer"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "environment-prerequisites",
      children: "Environment prerequisites"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["💡 You will need Linux or Mac OSX with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Docker"
      }), " to develop ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Web-app-2937ed264e1d434a8664caa4bc40978e?pvs=21",
        children: "Web-app"
      }), " services"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["To develop ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Entrance-Observer-b0319799ab7744dc928c08119de4fc43?pvs=21",
        children: "Entrance Observer"
      }), " video processing services you’ll need ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Jetson-Orin-Nano-0432edfb44f748a6874c41ddefa7f69c?pvs=21",
        children: "Jetson Orin Nano"
      }), " or ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://www.notion.so/Jetson-Nano-6500eadfbab64e7b8bd0d0896df30701?pvs=21",
        children: "Jetson Nano"
      }), " to have GPU support and docker image compatibility"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "architecture",
      children: "Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "core-services",
      children: "Core services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "The following services are mandatory, you will need to git-checkout them and start in the following order:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "mysql ← provides storage for other node and go services"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "redis ← provides a pub-sub and caching layer"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "graphql-schema-registry ← stores graphql schema of microservices"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["graphql-router ← routes API requests to other microservices using a ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.apollographql.com/docs/federation/",
          children: "graphql federation"
        }), ", which basically means that requests are split and routed to the microservice that is responsible for particular part of the schema"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "core-services-and-routing",
      children: "Core services and routing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "flowchart LR\n\tweb-app --\"read/write data \\n on client side via dexie\"--> indexed-db[(indexed-db)]\n\tweb-app(\"<a href='https://github.com/Gratheon/web-app'>web-app</a>\\n:8080\") --> graphql-router\n\tweb-app --\"subscribe to events\\n over websockets\"--> event-stream-filter(\"<a href='https://github.com/Gratheon/event-stream-filter'>event-stream-filter</a>\\n:8300\\n:8350\") --\"listen to events\"--> redis\n\n\tsome-product-service --\"publish events\"--> redis\n\tgraphql-router --\"read service schemas\"--> graphql-schema-registry(\"<a href='https://github.com/tot-ra/graphql-schema-registry'>graphql-schema-registry</a>\\n<a href='http://localhost:6001/'>:6001</a>\\n\")\n\tgraphql-router -.-> some-product-service --\"read/write data\"--> mysql\n\tsome-product-service --\"update schema\"--> graphql-schema-registry"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "product-services",
      children: "Product services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "go-api ← main service that manages domain entities like apiary, hive, hive section, frame, frame side"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "image-splitter ← main service that manages image processing + stores data on the detected objects in the frame photo"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Note that some service may still be in development and can be unstable or only in draft phase (video processing for example)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "flowchart LR\n\tgraphql-router(\"<a href='https://github.com/Gratheon/graphql-router'>graphql-router</a>\\n :6100\") --> swarm-api(\"<a href='https://github.com/Gratheon/swarm-api'>swarm-api</a>\\n:8100\") --> mysql[(mysql\\n:5100)]\n\tgraphql-router --> swarm-api --> redis[(\"<a href='https://github.com/Gratheon/redis'>redis pub-sub</a>\\n:6379\")]\n\n\tgraphql-router --> image-splitter(\"<a href='https://github.com/Gratheon/image-splitter'>image-splitter</a>\\n:8800\") --> mysql\n\n\tweb-app --\"upload frames\"--> image-splitter --> aws-s3\n\timage-splitter --\"inference\"--> models-bee-detector(\"<a href='https://github.com/Gratheon/models-bee-detector'>models-bee-detector</a>\\n:8700\")\n\timage-splitter --\"inference\"--> models-frame-resources(\"<a href='https://github.com/Gratheon/models-frame-resources'>models-frame-resources</a>\\n:8540\")\n\tgraphql-router --> user-cycle(\"<a href='https://github.com/Gratheon/user-cycle'>user-cycle</a>\\n:4000\") --> mysql\n\tgraphql-router --> user-cycle --> stripe\n\tgraphql-router --> plantnet(\"<a href='https://github.com/Gratheon/plantnet'>plantnet</a>\\n:8090\") --> mysql\n\n\tgraphql-router --> weather(\"<a href='https://github.com/Gratheon/weather'>weather</a>\\n:8070\")\n\tuser-cycle --\"create org and user\"--> grafana(\"<a href='https://github.com/gratheon/grafana'>grafana</a>\")\n"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "development-setup",
      children: "Development setup"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Start by checking out ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
        href: "https://github.com/gratheon/web-app",
        children: "https://github.com/gratheon/web-app"
      }), ". Its just a react single-page app and does not need a docker image but you can see API dependencies it will require."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Running pure ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "just start"
      }), " will allow you to use production backend for frontend development, so you should be able to login with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "existing credentials"
      }), ". Make sure to use email/password for that, as Google login does not work on localhost."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "This is most useful in case you need to make cosmetic or FE-only changes that do not alter or introduce any API schema modification."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/T4b2uxrf8U4",
      title: "Making easy web-app changes",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "To have full flexibility of schema and backend modification, you will need to  checkout all of the core dependent services based on the architecture diagram and understand how services on the backend are connected"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "After checkout, for every service"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["You’ll need to run ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "just start"
        }), " to start docker container"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Set ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "src/config/config.dev.ts"
        }), " that was not commited to the repository. Configs typically include credentials to access DB, AWS S3 or external services"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "💡 Note that some services run DB migrations when they start-up, so make sure you have mysql running and databases pre-created with valid user access. Note that most services do not yet re-connect to mysql automatically, so you need to start services in correct order or restart pod"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)("iframe", {
      width: "100%",
      height: "400",
      src: "https://www.youtube.com/embed/dCtL5icnsC0",
      title: "Docs - web-app development 2",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: true
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "optional-services",
      children: "Optional services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Some services are not blocking the UI or backend in general, but are required for some specific features, so you may need depending on your work:"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "models-bee-detector ← detects bees"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "event-stream-filter ← sends events to frontend"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "gate-video-stream"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "models-gate-tracker"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.img, {
        src: (__webpack_require__(84184)/* ["default"] */.A) + "",
        width: "1147",
        height: "784"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "bottom-board--varroa-monitoring",
      children: "Bottom Board & Varroa Monitoring"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Beekeepers can track varroa mite infestation by uploading images of the hive bottom board."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "See [Bottom Board Documentation](../../about/products/web_app/starter-tier/🧮 Hive bottom board & varroa monitoring.md) for user guide and [DB Schema](./🥞 DB schemas/) for table structures."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Image Upload:"
        }), " Two-step process:", "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Upload image to S3 via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "uploadFrameSide"
            }), " mutation"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: ["Link image to box via ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
              children: "addFileToBox"
            }), " mutation in image-splitter"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database:"
        }), " Images stored in ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "files_box_rel"
        }), " table with references to ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "box_id"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "file_id"
        }), ", and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "inspection_id"
        }), " for versioning"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Processing:"
        }), " Images automatically queued for varroa detection (TYPE_VARROA job)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Services Involved:"
        }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "swarm-api"
            }), ": Box management and BOTTOM type"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "image-splitter"
            }), ": File upload, storage, and linking"]
          }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
            children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
              children: "web-app"
            }), ": BottomBox component for UI"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "See [Bottom Board Documentation](../../about/products/web_app/starter-tier/🧮 Hive bottom board & varroa monitoring.md) for user guide and [DB Schema](./🥞 DB schemas/) for table structures."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "inspection-sharing",
      children: "Inspection Sharing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Users can share individual hive inspections with others via a unique public URL."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Generating a Link:"
        }), " From the inspection list view, clicking the \"Share\" button on an inspection generates a unique URL containing a secure share token."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Public Access:"
        }), " Anyone with this link can view the specific inspection details without needing to log in."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Read-Only & Scoped:"
        }), " Access via the share link is strictly read-only. The embedded share token limits data access specifically to the shared inspection and potentially its parent hive/apiary details necessary for context. It prevents access to any other data or the ability to perform modifications."]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Security:"
        }), " Share tokens are validated, and access is controlled by predefined scopes associated with the token. The ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "GraphQL Router enforces these scopes"
        }), ", ensuring secure, limited data exposure by blocking unauthorized requests. (See ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/API/GraphQL#share-token-authentication-read-only-access",
          children: "GraphQL API Authentication"
        }), " for technical details)."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "split-colony",
      children: "Split Colony"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Create new hives by moving selected frames from a strong colony. Prevents swarming and enables apiary expansion."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Technical Overview:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Mutation:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "splitHive(sourceHiveId, name, frameIds)"
        }), " - Creates new hive with 1-10 selected frames"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database:"
        }), " New hive record with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "parent_hive_id"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "split_date"
        }), " tracking"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Services:"
        }), " swarm-api (split logic), web-app (SplitHiveModal UI)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Real-time:"
        }), " Redis pub/sub broadcasts ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hive:split"
        }), " event"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "join-colony-merge-hives",
      children: "Join Colony (Merge Hives)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Merge two colonies by moving boxes from source to target hive. Strengthens weak colonies and manages queen genetics."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Technical Overview:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Mutation:"
        }), " ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "joinHives(sourceHiveId, targetHiveId, mergeType)"
        }), " - Merges hives with queen management options"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database:"
        }), " Source hive marked with ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "merged_into_hive_id"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "merge_date"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "merge_type"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Box Logic:"
        }), " BOTTOM/GATE boxes stay in source, all others move to target"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Services:"
        }), " swarm-api (merge logic, box movement), web-app (JoinColonyModal UI)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Real-time:"
        }), " Redis pub/sub broadcasts ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hive:join"
        }), " and ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hive:merged"
        }), " events"]
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
84184(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/Screenshot 2024-04-08 at 12.29.45-8f65794184f281ef36bcde63671231d6.png");

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
76945(module) {
module.exports = JSON.parse('{"id":"web-app/web-app","title":"📱 Web-app","description":"Goal of this document is to kickstart your development of the web-app as an engineer","source":"@site/docs/web-app/web-app.md","sourceDirName":"web-app","slug":"/web-app/","permalink":"/docs/web-app/","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/web-app/web-app.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"📱 Web-app"},"sidebar":"tutorialSidebar","previous":{"title":"Share Token Authentication","permalink":"/docs/API/Share Token Authentication"},"next":{"title":"Tech stack, conventions, environments","permalink":"/docs/web-app/Tech stack, conventions, environments"}}')

},

};
;