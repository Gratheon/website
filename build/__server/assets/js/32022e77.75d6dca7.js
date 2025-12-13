"use strict";
exports.ids = ["41912"];
exports.modules = {
19786(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_frame_side_management_md_320_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_frame_side_management_md_320_json__rspack_import_0 = __webpack_require__(66128);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 8
};
const contentTitle = 'Frame Side Management - Technical Documentation';

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
  "value": "Progressive Image Loading",
  "id": "progressive-image-loading",
  "level": 4
}, {
  "value": "Zoom and Pan Implementation",
  "id": "zoom-and-pan-implementation",
  "level": 4
}, {
  "value": "Drawing Tool Implementation",
  "id": "drawing-tool-implementation",
  "level": 4
}, {
  "value": "Data Flow",
  "id": "data-flow",
  "level": 4
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
        id: "frame-side-management---technical-documentation",
        children: "Frame Side Management - Technical Documentation"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-overview",
      children: "🎯 Overview"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: "Interactive frame photo viewer with zoom, pan, detection overlay toggling, and annotation capabilities. Supports progressive image loading, canvas-based drawing, and real-time detection visualization for comprehensive frame analysis."
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-architecture",
      children: "🏗️ Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "components",
      children: "Components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "FrameSide"
        }), ": Main container component fetching frame side data and managing upload state"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "FrameSideDrawing"
        }), ": Core canvas component handling drawing, zoom, pan, and detection overlays"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "DrawingCanvas"
        }), ": Canvas rendering with integrated detection visualization and user annotations"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "uploadFile"
        }), ": File upload component for initial frame photo upload"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "services",
      children: "Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "image-splitter"
        }), ": Stores uploaded images, serves resized versions, manages detection data as JSON"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "swarm-api"
        }), ": Stores frame/box structure and frame_side references"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "web-app"
        }), ": Frontend React application with Dexie local database caching"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-specifications",
      children: "📋 Technical Specifications"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "database-schema",
      children: "Database Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "erDiagram\n    frames ||--o{ frames_sides : \"has_two\"\n    frames_sides ||--o{ files_frame_side_rel : \"has_photos\"\n    files_frame_side_rel ||--|| files : \"references\"\n    files ||--o{ file_resizes : \"has_versions\"\n    files_frame_side_rel ||--o{ files_frame_side_cells : \"has_cells\"\n    files_frame_side_rel ||--o{ files_frame_side_queen_cups : \"has_cups\"\n    \n    frames {\n        int id PK\n        int box_id FK\n        int position\n        int left_id FK\n        int right_id FK\n        enum type\n        boolean active\n    }\n    \n    frames_sides {\n        int id PK\n        int user_id\n    }\n    \n    files {\n        int id PK\n        int user_id\n        varchar hash\n        varchar ext\n        int width\n        int height\n    }\n    \n    file_resizes {\n        int id PK\n        int file_id FK\n        int max_dimension_px\n        varchar url\n    }\n    \n    files_frame_side_rel {\n        int frame_side_id FK\n        int file_id FK\n        int user_id\n        int inspection_id \"NULL for current\"\n        json strokeHistory \"user drawings\"\n        json detected_bees \"array of bee detections\"\n        json detected_queens \"array of queen detections\"\n        json detected_varroa \"array of varroa detections\"\n        int worker_bee_count\n        int drone_count\n        int queen_count\n        int varroa_count\n        boolean queen_detected\n        datetime added_time\n    }\n    \n    files_frame_side_cells {\n        int frame_side_id FK\n        int file_id FK\n        int user_id\n        int inspection_id\n        json cells \"array of cell detections\"\n        int brood\n        int capped_brood\n        int eggs\n        int pollen\n        int honey\n        datetime added_time\n    }\n    \n    files_frame_side_queen_cups {\n        int frame_side_id FK\n        int file_id FK\n        int user_id\n        int inspection_id\n        json cups \"array of queen cup detections\"\n        datetime added_time\n    }"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "graphql-api",
      children: "GraphQL API"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-text",
        children: "type FrameSide {\n  id: ID!\n  frameId: ID\n  isQueenConfirmed: Boolean\n  file: File\n  cells: FrameSideCells\n  frameSideFile: FrameSideFile\n  inspections: [FrameSideInspection]\n}\n\ntype FrameSideFile {\n  file: File!\n  frameSideId: ID\n  hiveId: ID\n  strokeHistory: JSON\n  detectedBees: JSON\n  detectedQueenCount: Int\n  detectedWorkerBeeCount: Int\n  detectedDroneCount: Int\n  isBeeDetectionComplete: Boolean\n  detectedCells: JSON\n  isCellsDetectionComplete: Boolean\n  detectedQueenCups: JSON\n  isQueenCupsDetectionComplete: Boolean\n  isQueenDetectionComplete: Boolean\n  queenDetected: Boolean!\n  workerCount: Int\n  droneCount: Int\n  detectedVarroa: JSON\n  varroaCount: Int\n}\n\ntype File {\n  id: ID!\n  url: URL!\n  resizes: [FileResize]\n}\n\ntype FileResize {\n  id: ID!\n  file_id: ID!\n  max_dimension_px: Int!\n  url: URL!\n}\n\ntype FrameSideCells {\n  id: ID!\n  broodPercent: Int\n  cappedBroodPercent: Int\n  eggsPercent: Int\n  pollenPercent: Int\n  honeyPercent: Int\n}\n\ntype FrameSideInspection {\n  frameSideId: ID!\n  inspectionId: ID!\n  file: File\n  cells: FrameSideCells\n  frameSideFile: FrameSideFile\n}\n\ntype Query {\n  hiveFrameSideFile(frameSideId: ID!): FrameSideFile\n  hiveFrameSideCells(frameSideId: ID!): FrameSideCells\n  frameSidesInspections(frameSideIds: [ID], inspectionId: ID!): [FrameSideInspection]\n  file(id: ID!): File\n  hiveFiles(hiveId: ID!): [FrameSideFile]\n  boxFiles(boxId: ID!, inspectionId: ID): [BoxFile]\n}\n\ntype Mutation {\n  uploadFrameSide(file: Upload!): File\n  addFileToFrameSide(frameSideId: ID!, fileId: ID!, hiveId: ID!): Boolean\n  filesStrokeEditMutation(files: [FilesUpdateInput]): Boolean\n  updateFrameSideCells(cells: FrameSideCellsInput!): Boolean!\n  confirmFrameSideQueen(frameSideId: ID!, isConfirmed: Boolean!): Boolean!\n  cloneFramesForInspection(frameSideIDs: [ID], inspectionId: ID!): Boolean!\n}\n\ninput FilesUpdateInput {\n  frameSideId: ID!\n  fileId: ID!\n  strokeHistory: JSON!\n}\n\ninput FrameSideCellsInput {\n  id: ID!\n  broodPercent: Int\n  cappedBroodPercent: Int\n  eggsPercent: Int\n  pollenPercent: Int\n  honeyPercent: Int\n}\n"
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
          children: "Canvas Rendering"
        }), ": HTML5 Canvas API"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Drawing"
        }), ": Pointer Events API for mouse and touch support"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zoom"
        }), ": CSS transforms with GPU acceleration"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Image Loading"
        }), ": Progressive JPEG with blur-up effect"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "progressive-image-loading",
      children: "Progressive Image Loading"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "1. Initial load: Select best resize from file_resizes table (>128px width)\n2. Image loaded via HTMLImageElement and drawn to canvas\n3. Canvas size calculated based on viewport width and device pixel ratio\n4. Resizes stored with max_dimension_px and URL in database\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "zoom-and-pan-implementation",
      children: "Zoom and Pan Implementation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zoom Range"
        }), ": MIN_ZOOM (1x) to MAX_ZOOM (100x)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Medium Zoom"
        }), ": MED_ZOOM (2x) for mobile detection"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Zoom Mechanism"
        }), ": Canvas transform scale with globalCameraZoom"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pan"
        }), ": Drag-based translation with offsetsum (x, y coordinates)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Pan Control"
        }), ": isPanning flag, startPanPosition, initialPanOffset tracking"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Mobile"
        }), ": Zoom disabled on viewports < 1200px width"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Constraints"
        }), ": Prevent zoom below 1x, above 100x"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "drawing-tool-implementation",
      children: "Drawing Tool Implementation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Freehand Drawing"
        }), ": Capture pointer move events with pressure support"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Path Storage"
        }), ": strokeHistory array of DrawingLine arrays, each containing DrawingPoint (x, y, lineWidth, color)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Drawing Points"
        }), ": Normalized coordinates (0-1) relative to canvas dimensions"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Line Rendering"
        }), ": Quadratic curves for smooth strokes via quadraticCurveTo"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Undo"
        }), ": Pop last stroke from strokeHistory array"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Clear"
        }), ": Empty strokeHistory array"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Persistence"
        }), ": filesStrokeEditMutation saves to backend, updateStrokeHistoryData updates Dexie cache"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "data-flow",
      children: "Data Flow"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "graph TB\n    A[User opens frame side] --> B[FRAME_SIDE_QUERY fetches data]\n    B --> C[getFrameSideFile from Dexie]\n    C --> D[getThumbnailUrl selects best resize]\n    D --> E[loadImage and draw to canvas]\n    E --> F[Render detections]\n    \n    G[User zooms or pans] --> H[Update globalCameraZoom or offsetsum]\n    H --> I[redrawCurrentCanvas]\n    I --> J[drawCanvasLayers with transforms]\n    \n    K[User toggles detection] --> L[Update visibility state]\n    L --> M[forceRedraw triggers re-render]\n    \n    N[User draws stroke] --> O[Capture normalized points]\n    O --> P[drawStrokeSegment to canvas]\n    P --> Q[On mouseup: filesStrokeEditMutate]\n    Q --> R[updateStrokeHistoryData to Dexie]\n    \n    S[useFrameSideSubscriptions] --> T[Listen to Redis pubsub]\n    T --> U[appendDetectionData]\n    U --> V[Update Dexie via modify]"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-testing",
      children: "🧪 Testing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "unit-tests",
      children: "Unit Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Zoom calculations and constraints"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Detection overlay rendering logic"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Drawing path capture and storage"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Image URL selection based on zoom level"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Detection toggle state management"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Progressive image loading sequence"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Detection data sync with backend"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Annotation persistence"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Canvas rendering performance"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Touch event handling on mobile"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "e2e-tests",
      children: "E2E Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User uploads photo and views it"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User zooms in and out smoothly"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User toggles detection types on/off"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User draws annotation and undos"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User switches between frame sides"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-performance-considerations",
      children: "📊 Performance Considerations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "optimizations",
      children: "Optimizations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Canvas Memoization"
        }), ": React.memo on detection overlay"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Render Throttling"
        }), ": RequestAnimationFrame for smooth zoom"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Image Preloading"
        }), ": Prefetch next zoom level"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Detection Batching"
        }), ": Render all same-type detections in one pass"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "GPU Acceleration"
        }), ": CSS transforms for zoom/pan"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lazy Rendering"
        }), ": Only render visible detections"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Initial load: under 500ms (small image)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Zoom transition: under 100ms (60fps)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Detection toggle: under 50ms"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Drawing responsiveness: under 16ms (60fps)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Memory: under 100MB for large images"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "bottlenecks",
      children: "Bottlenecks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Large images (over 4000x3000px) may impact mobile devices"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Many detections (over 1000) slow overlay rendering"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Drawing with many paths (over 100) affects undo performance"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-limitations",
      children: "🚫 Technical Limitations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Maximum zoom 100x (may pixelate at extreme zoom levels)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Drawing tools limited to freehand (no shapes, text)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "No collaborative annotation (single user only)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Annotations not versioned (overwrite on save)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Mobile performance degraded with very large images"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Zoom disabled on mobile devices (< 1200px width)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-related-documentation",
      children: "🔗 Related Documentation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/frame-photo-upload",
          children: "Frame Photo Upload Technical Documentation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/queen-detection",
          children: "Queen Detection Technical Documentation"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-development-resources",
      children: "📚 Development Resources"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/web-app/tree/main/src/page/hiveEdit/frame",
          children: "web-app frame components"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/image-splitter/blob/main/src/graphql/resolvers.ts",
          children: "image-splitter GraphQL resolvers"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API",
          children: "Canvas API Documentation"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events",
          children: "Pointer Events API"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-notes",
      children: "💬 Technical Notes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Pan support is implemented but could be improved with touch gestures"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "WebGL renderer may improve performance for many detections"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Consider WebP format for smaller image sizes with same quality"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Drawing tool could benefit from SVG overlay instead of Canvas for better quality"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Touch gestures (pinch zoom) would improve mobile experience (currently zoom disabled on mobile)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Consider adding measurement tools (ruler, area calculator)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Last Updated"
      }), ": December 5, 2025"]
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
66128(module) {
module.exports = JSON.parse('{"id":"web-app/features/frame-side-management","title":"Frame Side Management - Technical Documentation","description":"🎯 Overview","source":"@site/docs/web-app/features/frame-side-management.md","sourceDirName":"web-app/features","slug":"/web-app/features/frame-side-management","permalink":"/docs/web-app/features/frame-side-management","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/web-app/features/frame-side-management.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Queen Management - Technical Documentation","permalink":"/docs/web-app/features/queen-management"},"next":{"title":"Hive Placement Planner - Technical Documentation","permalink":"/docs/web-app/features/hive-placement-planner"}}')

},

};
;