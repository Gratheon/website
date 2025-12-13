"use strict";
exports.ids = ["41509"];
exports.modules = {
67741(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_hive_management_md_593_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_hive_management_md_593_json__rspack_import_0 = __webpack_require__(59357);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 9
};
const contentTitle = 'Hive Management - Technical Documentation';

const assets = {

};



const toc = [{
  "value": "🎯 Overview",
  "id": "-overview",
  "level": 3
}, {
  "value": "🏗️ Architecture",
  "id": "️-architecture",
  "level": 3
}, {
  "value": "Components",
  "id": "components",
  "level": 4
}, {
  "value": "Services",
  "id": "services",
  "level": 4
}, {
  "value": "📋 Technical Specifications",
  "id": "-technical-specifications",
  "level": 3
}, {
  "value": "Database Schema",
  "id": "database-schema",
  "level": 4
}, {
  "value": "GraphQL API",
  "id": "graphql-api",
  "level": 4
}, {
  "value": "🔧 Implementation Details",
  "id": "-implementation-details",
  "level": 3
}, {
  "value": "Frontend (web-app)",
  "id": "frontend-web-app",
  "level": 4
}, {
  "value": "Backend (swarm-api)",
  "id": "backend-swarm-api",
  "level": 4
}, {
  "value": "Key Operations",
  "id": "key-operations",
  "level": 4
}, {
  "value": "Data Flow",
  "id": "data-flow",
  "level": 4
}, {
  "value": "⚙️ Configuration",
  "id": "️-configuration",
  "level": 3
}, {
  "value": "🧪 Testing",
  "id": "-testing",
  "level": 3
}, {
  "value": "Unit Tests",
  "id": "unit-tests",
  "level": 4
}, {
  "value": "Integration Tests",
  "id": "integration-tests",
  "level": 4
}, {
  "value": "E2E Tests",
  "id": "e2e-tests",
  "level": 4
}, {
  "value": "📊 Performance Considerations",
  "id": "-performance-considerations",
  "level": 3
}, {
  "value": "Optimizations",
  "id": "optimizations",
  "level": 4
}, {
  "value": "Metrics",
  "id": "metrics",
  "level": 4
}, {
  "value": "Bottlenecks",
  "id": "bottlenecks",
  "level": 4
}, {
  "value": "🚫 Technical Limitations",
  "id": "-technical-limitations",
  "level": 3
}, {
  "value": "🔗 Related Documentation",
  "id": "-related-documentation",
  "level": 3
}, {
  "value": "📚 Development Resources",
  "id": "-development-resources",
  "level": 3
}, {
  "value": "💬 Technical Notes",
  "id": "-technical-notes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__rspack_import_2/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__rspack_import_1.jsxs)(react_jsx_runtime__rspack_import_1.Fragment, {
    children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.header, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h1, {
        id: "hive-management---technical-documentation",
        children: "Hive Management - Technical Documentation"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-overview",
      children: "🎯 Overview"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Core beehive CRUD operations with hierarchical structure management, status tracking, device integration, and colony lineage support. Enables beekeepers to create and organize individual hive records with equipment tracking and sensor associations."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-architecture",
      children: "🏗️ Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "components",
      children: "Components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveList"
        }), ": React component displaying all hives in an apiary"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveCard"
        }), ": Individual hive visualization with color, name, status"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveEditor"
        }), ": Form component for creating/editing hive details"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveStatusBadge"
        }), ": Visual indicator for hive health status"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DeviceAssociationPanel"
        }), ": UI for linking sensors and cameras"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "services",
      children: "Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "swarm-api"
        }), ": Primary service handling hive CRUD operations"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "gate-video-stream"
        }), ": Integrates for entrance observer cameras"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "beehive-sensors"
        }), ": Links temperature/humidity sensors"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "graphql-router"
        }), ": Federated gateway routing hive queries"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-specifications",
      children: "📋 Technical Specifications"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "database-schema",
      children: "Database Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "erDiagram\n    apiaries ||--o{ hives : \"contains\"\n    hives ||--o{ boxes : \"has\"\n    hives ||--o| families : \"has_queen\"\n    hives ||--o{ hives : \"parent_child\"\n    hives ||--o{ devices : \"connected_to\"\n    \n    apiaries {\n        int id PK\n        int user_id FK\n        varchar name\n        varchar lat\n        varchar lng\n    }\n    \n    hives {\n        int id PK\n        int user_id FK\n        int apiary_id FK\n        varchar name\n        varchar color_hex \"visual identification\"\n        text notes\n        enum status \"active, queenless, weak, preparing_swarm, collapsed\"\n        timestamp added\n        tinyint active \"soft delete flag\"\n        datetime collapse_date\n        varchar collapse_cause\n        int parent_hive_id FK \"for split tracking\"\n        datetime split_date\n        int family_id FK \"queen information\"\n    }\n    \n    boxes {\n        int id PK\n        int hive_id FK\n        int position \"bottom to top ordering\"\n        enum type \"brood, honey, super\"\n        int frame_count\n    }\n    \n    families {\n        int id PK\n        varchar race\n        varchar added \"year marked\"\n    }\n    \n    devices {\n        int id PK\n        int hive_id FK\n        enum type \"entrance_observer, scale, temp_sensor, camera\"\n        varchar device_id\n        boolean active\n    }"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "graphql-api",
      children: "GraphQL API"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-graphql",
        children: "type Hive {\n  id: ID!\n  name: String!\n  color: String\n  status: HiveStatus!\n  notes: String\n  apiary: Apiary!\n  boxes: [Box!]!\n  family: Family\n  devices: [Device!]\n  parentHive: Hive\n  childHives: [Hive!]\n  collapseDate: DateTime\n  collapseCause: String\n  splitDate: DateTime\n  added: DateTime!\n  active: Boolean!\n}\n\nenum HiveStatus {\n  ACTIVE\n  QUEENLESS\n  WEAK\n  PREPARING_SWARM\n  COLLAPSED\n}\n\ntype Box {\n  id: ID!\n  position: Int!\n  type: BoxType!\n  frameCount: Int!\n  frames: [Frame!]\n}\n\nenum BoxType {\n  BROOD\n  HONEY\n  SUPER\n}\n\ntype Device {\n  id: ID!\n  type: DeviceType!\n  deviceId: String!\n  active: Boolean!\n}\n\nenum DeviceType {\n  ENTRANCE_OBSERVER\n  SCALE\n  TEMP_SENSOR\n  CAMERA\n}\n\ninput HiveInput {\n  apiaryId: ID!\n  name: String!\n  color: String\n  notes: String\n  boxCount: Int!\n  framesPerBox: Int!\n}\n\ninput UpdateHiveInput {\n  id: ID!\n  name: String\n  color: String\n  notes: String\n  status: HiveStatus\n}\n\ntype Query {\n  hive(id: ID!): Hive!\n  hives(apiaryId: ID!): [Hive!]!\n  hivesByStatus(status: HiveStatus!): [Hive!]!\n}\n\ntype Mutation {\n  addHive(input: HiveInput!): Hive!\n  updateHive(input: UpdateHiveInput!): Hive!\n  deleteHive(id: ID!): Boolean!\n  setHiveStatus(hiveId: ID!, status: HiveStatus!): Hive!\n  linkDevice(hiveId: ID!, deviceType: DeviceType!, deviceId: String!): Device!\n  unlinkDevice(deviceId: ID!): Boolean!\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-implementation-details",
      children: "🔧 Implementation Details"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "frontend-web-app",
      children: "Frontend (web-app)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Framework"
        }), ": React with TypeScript"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "State Management"
        }), ": Apollo Client cache"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Color Picker"
        }), ": React color picker for hive identification"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Status Selection"
        }), ": Dropdown with icon indicators"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Drag-and-Drop"
        }), ": For reordering hives within apiary (future)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "backend-swarm-api",
      children: "Backend (swarm-api)"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Language"
        }), ": Go"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Database"
        }), ": MySQL with foreign key constraints"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Transactions"
        }), ": Atomic hive + boxes + frames creation"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Soft Deletes"
        }), ": active flag prevents data loss"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Cascade Rules"
        }), ": ON DELETE CASCADE for boxes/frames"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "key-operations",
      children: "Key Operations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Create Hive"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-go",
        children: "func (r *mutationResolver) AddHive(ctx context.Context, input HiveInput) (*Hive, error) {\n    tx := r.DB.Begin()\n    \n    // Create hive record\n    hive := &Hive{\n        UserID: userID,\n        ApiaryID: input.ApiaryId,\n        Name: input.Name,\n        Color: input.Color,\n        Status: \"active\",\n    }\n    tx.Create(hive)\n    \n    // Create initial boxes and frames\n    for i := 0; i < input.BoxCount; i++ {\n        box := &Box{\n            HiveID: hive.ID,\n            Position: i,\n            Type: \"brood\",\n            FrameCount: input.FramesPerBox,\n        }\n        tx.Create(box)\n        \n        // Create frames for this box\n        for j := 0; j < input.FramesPerBox; j++ {\n            frame := &Frame{\n                BoxID: box.ID,\n                Position: j,\n            }\n            tx.Create(frame)\n        }\n    }\n    \n    tx.Commit()\n    return hive, nil\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "data-flow",
      children: "Data Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "graph TB\n    A[User creates hive] --> B[Send addHive mutation]\n    B --> C[swarm-api validates input]\n    C --> D[Begin transaction]\n    D --> E[Insert hive record]\n    E --> F[Create boxes]\n    F --> G[Create frames for each box]\n    G --> H[Commit transaction]\n    H --> I[Publish Redis event]\n    I --> J[Update Apollo cache]\n    J --> K[Render hive card]\n    \n    L[User links device] --> M[linkDevice mutation]\n    M --> N[Validate device exists]\n    N --> O[Create device association]\n    O --> P[Return device]"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-configuration",
      children: "⚙️ Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Environment Variables (swarm-api)"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "MYSQL_HOST=localhost\nMYSQL_PORT=3306\nMYSQL_DATABASE=swarm\nMYSQL_USER=swarm_api\nMYSQL_PASSWORD=<secret>\n\nJWT_SECRET=<secret>\n\nREDIS_HOST=localhost:6379\nREDIS_PASSWORD=<secret>\n\nDEFAULT_BOX_COUNT=2\nDEFAULT_FRAMES_PER_BOX=10\nMAX_BOXES_PER_HIVE=10\nMAX_FRAMES_PER_BOX=12\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-testing",
      children: "🧪 Testing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "unit-tests",
      children: "Unit Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive CRUD operations"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Status transitions validation"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Color hex validation"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Device linking logic"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Soft delete behavior"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Full hive creation with boxes and frames"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive update preserves relationships"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive deletion cascades to boxes/frames"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Device association and unlinking"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Parent-child hive relationships"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "e2e-tests",
      children: "E2E Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User creates hive with 2 boxes, 10 frames each"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User edits hive name and color"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User changes hive status to queenless"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User links entrance observer device"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User deletes hive (soft delete)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-performance-considerations",
      children: "📊 Performance Considerations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Database indexes on user_id, apiary_id, active"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Transaction batching for hive + boxes + frames creation"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Redis caching for frequently accessed hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Pagination for large apiary hive lists"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Lazy loading of boxes and frames"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive creation: under 300ms (with 2 boxes, 20 frames)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive update: under 100ms"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive deletion (soft): under 50ms"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive list query: under 200ms (with 50 hives)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Device linking: under 100ms"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "bottlenecks",
      children: "Bottlenecks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Creating hives with many boxes (over 5) and frames (over 50 total)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Querying hive list with full box/frame data (use pagination)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Real-time updates for many concurrent users"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-limitations",
      children: "🚫 Technical Limitations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Maximum 10 boxes per hive (configurable)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Maximum 12 frames per box (standard Langstroth)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Color must be valid hex code (#RRGGBB)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Cannot restore hard-deleted hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Device must exist before linking (no auto-creation)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Parent-child relationships don't track merge operations (only splits)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-related-documentation",
      children: "🔗 Related Documentation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/apiary-management",
          children: "Apiary Management Technical Documentation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/split-colony",
          children: "Split Colony Technical Documentation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/join-colonies",
          children: "Join Colonies Technical Documentation"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-development-resources",
      children: "📚 Development Resources"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/swarm-api",
          children: "swarm-api repository"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/graphql-schema-registry",
          children: "GraphQL schema"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/web-app/src/components/HiveCard",
          children: "Hive management UI"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-notes",
      children: "💬 Technical Notes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Consider adding GPS coordinates at hive level (currently only at apiary level)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Status transitions could be automated based on queen detection results"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Color picker could suggest colors based on beekeeping year marking convention"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "May want to add \"notes\" timeline to track inspection observations over time"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Device linking could benefit from QR code scanning for easier setup"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Consider adding hive templates for common configurations (8-frame, 10-frame, top-bar)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Last Updated"
      }), ": December 5, 2025\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Maintained By"
      }), ": Backend Team"]
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
59357(module) {
module.exports = JSON.parse('{"id":"web-app/features/hive-management","title":"Hive Management - Technical Documentation","description":"🎯 Overview","source":"@site/docs/web-app/features/hive-management.md","sourceDirName":"web-app/features","slug":"/web-app/features/hive-management","permalink":"/docs/web-app/features/hive-management","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/web-app/features/hive-management.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Hive Placement Planner - Technical Documentation","permalink":"/docs/web-app/features/hive-placement-planner"},"next":{"title":"User Registration - Technical Documentation","permalink":"/docs/web-app/features/user-registration"}}')

},

};
;