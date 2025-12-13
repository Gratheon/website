"use strict";
exports.ids = ["9747"];
exports.modules = {
77934(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: () => (assets),
  contentTitle: () => (contentTitle),
  "default": () => (MDXContent),
  frontMatter: () => (frontMatter),
  metadata: () => (/* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_timeseries_analytics_md_2b2_json__rspack_import_0),
  toc: () => (toc)
});
/* import */ var _site_docusaurus_docusaurus_plugin_content_docs_default_site_docs_web_app_features_timeseries_analytics_md_2b2_json__rspack_import_0 = __webpack_require__(70335);
/* import */ var react_jsx_runtime__rspack_import_1 = __webpack_require__(86070);
/* import */ var _mdx_js_react__rspack_import_2 = __webpack_require__(18439);


const frontMatter = {
	sidebar_position: 13
};
const contentTitle = 'Timeseries Data Analytics - Technical Documentation';

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
  "value": "Local Storage Schema",
  "id": "local-storage-schema",
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
  "value": "Backend Integration",
  "id": "backend-integration",
  "level": 4
}, {
  "value": "Data Transformation",
  "id": "data-transformation",
  "level": 4
}, {
  "value": "⚙️ Configuration",
  "id": "️-configuration",
  "level": 3
}, {
  "value": "Environment Variables",
  "id": "environment-variables",
  "level": 4
}, {
  "value": "Chart Options",
  "id": "chart-options",
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
  "value": "Bottlenecks",
  "id": "bottlenecks",
  "level": 4
}, {
  "value": "Metrics",
  "id": "metrics",
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
}, {
  "value": "Change Log",
  "id": "change-log",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
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
        id: "timeseries-data-analytics---technical-documentation",
        children: "Timeseries Data Analytics - Technical Documentation"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-overview",
      children: "🎯 Overview"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Interactive telemetry data visualization system built with React and lightweight-charts, available in two modes: individual hive view (7-day recent metrics under hive \"Metrics\" tab) and multi-hive analytics dashboard (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/time"
      }), " page) for cross-colony comparison. Enables real-time visualization of telemetry data, inspection records, and environmental metrics with synchronized time-axis navigation and data export capabilities."]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-architecture",
      children: "🏗️ Architecture"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "components",
      children: "Components"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Individual Hive View"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/apiaries/:id/hives/:id"
      }), " - Metrics tab):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveWeightGraph"
        }), ": Container component for single hive metrics"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "WeightChart"
        }), ": 7-day weight data for individual hive"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TemperatureChart"
        }), ": 7-day temperature data for individual hive"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "EntranceMovementChart"
        }), ": 7-day entrance traffic for individual hive"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Multi-Hive Analytics"
      }), " (", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/time"
      }), " page):"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TimeView"
        }), ": Main container component managing state and data fetching"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "ChartContainer"
        }), ": Reusable wrapper for all chart types with export and alert features"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "PopulationChart"
        }), ": Bee population estimates from inspections with ideal curve overlay"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveWeightChart"
        }), ": Daily average weight comparison across hives"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveTemperatureChart"
        }), ": Internal temperature monitoring"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveEntranceChart"
        }), ": Entrance traffic flow analysis"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveEntranceSpeedChart"
        }), ": Bee movement velocity tracking"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveEntranceDetectedChart"
        }), ": Total bee count detection"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveEntranceStationaryChart"
        }), ": Guard bee behavior monitoring"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "MultiHiveEntranceInteractionsChart"
        }), ": Bee-to-bee interaction analysis"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "WeatherSection"
        }), ": Environmental data correlation widgets"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "ApiarySelector"
        }), ": Dropdown for apiary filtering"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "HiveSelector"
        }), ": Multi-select checkbox list for hive filtering"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "TimeRangeSelector"
        }), ": Radio buttons for time range selection"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "ChartToggles"
        }), ": Checkbox toggles for enabling/disabling charts"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "services",
      children: "Services"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "telemetry-api"
        }), ": GraphQL queries for weight, temperature, entrance metrics"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "web-app local Dexie DB"
        }), ": IndexedDB storage for hives and inspections"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "graphql-router"
        }), ": Federated gateway for telemetry queries"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "weather services"
        }), ": External APIs for environmental data"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-specifications",
      children: "📋 Technical Specifications"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "database-schema",
      children: "Database Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.mermaid, {
      value: "erDiagram\n    hives ||--o{ inspections : \"has\"\n    hives ||--o{ telemetry_metrics : \"generates\"\n    hives ||--o{ entrance_traffic : \"generates\"\n    apiaries ||--o{ hives : \"contains\"\n    \n    hives {\n        string id PK\n        string name\n        string status\n        int inspection_count\n    }\n    \n    inspections {\n        string id PK\n        string hive_id FK\n        datetime added\n        json data \"contains beeCount\"\n    }\n    \n    telemetry_metrics {\n        bigint id PK\n        int hive_id FK\n        enum metric_type\n        float value\n        datetime timestamp\n    }\n    \n    entrance_traffic {\n        bigint id PK\n        int hive_id FK\n        float bees_in\n        float bees_out\n        datetime timestamp\n    }\n    \n    apiaries {\n        string id PK\n        string name\n        float lat\n        float lng\n    }"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "graphql-api",
      children: "GraphQL API"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Individual Hive View Query:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-graphql",
        children: "query hiveWeight(\n  $hiveId: ID!\n  $timeRangeMin: Int\n  $timeFrom: DateTime!\n  $timeTo: DateTime!\n) {\n  weightKg(hiveId: $hiveId, timeRangeMin: $timeRangeMin) {\n    ... on MetricFloatList {\n      metrics {\n        t\n        v\n      }\n    }\n    ... on TelemetryError {\n      message\n      code\n    }\n  }\n  \n  temperatureCelsius(hiveId: $hiveId, timeRangeMin: $timeRangeMin) {\n    ... on MetricFloatList {\n      metrics {\n        t\n        v\n      }\n    }\n    ... on TelemetryError {\n      message\n      code\n    }\n  }\n  \n  entranceMovement(hiveId: $hiveId, timeFrom: $timeFrom, timeTo: $timeTo) {\n    ... on EntranceMovementList {\n      metrics {\n        time\n        beesIn\n        beesOut\n        netFlow\n      }\n    }\n    ... on TelemetryError {\n      message\n      code\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Multi-Hive Analytics Query:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-graphql",
        children: "query MultiHiveTelemetry(\n  $days: Int!\n  $temperatureTimeRangeMin: Int!\n  $timeFrom: DateTime!\n  $timeTo: DateTime!\n) {\n  weightKgAggregated(\n    hiveId: \"123\"\n    days: $days\n    aggregation: DAILY_AVG\n  ) {\n    ... on MetricFloatList {\n      metrics {\n        t\n        v\n      }\n    }\n    ... on TelemetryError {\n      message\n      code\n    }\n  }\n  \n  temperatureCelsius(\n    hiveId: \"123\"\n    timeRangeMin: $temperatureTimeRangeMin\n  ) {\n    ... on MetricFloatList {\n      metrics {\n        t\n        v\n      }\n    }\n  }\n  \n  entranceMovement(\n    hiveId: \"123\"\n    timeFrom: $timeFrom\n    timeTo: $timeTo\n  ) {\n    ... on EntranceMovementList {\n      metrics {\n        time\n        beesIn\n        beesOut\n        netFlow\n        avgSpeed\n        p95Speed\n        stationaryBees\n        detectedBees\n        beeInteractions\n      }\n    }\n  }\n}\n\nquery HIVES {\n  apiaries {\n    id\n    name\n    lat\n    lng\n    hives {\n      id\n      name\n      status\n      inspectionCount\n      family {\n        id\n      }\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Query Construction:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Dynamically generates GraphQL query based on selected hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: ["Separate aliases for each hive (e.g., ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hive_123_weight"
        }), ", ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "hive_456_weight"
        }), ")"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Union types handle errors gracefully"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Variables control time ranges and aggregation"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "local-storage-schema",
      children: "Local Storage Schema"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface LocalStorageKeys {\n  'timeView.selectedApiaryId': string | null\n  'timeView.selectedHiveIds': string[]\n  'timeView.enabledCharts': {\n    population: boolean\n    weight: boolean\n    temperature: boolean\n    entrance: boolean\n    entranceSpeed: boolean\n    entranceDetected: boolean\n    entranceStationary: boolean\n    entranceInteractions: boolean\n    weather: boolean\n    weatherTemperature: boolean\n    wind: boolean\n    rain: boolean\n    solarRadiation: boolean\n    cloudCover: boolean\n    pollen: boolean\n    pollution: boolean\n  }\n  'timeView.showIdealCurve': boolean\n}\n"
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
        }), ": React 18 with TypeScript"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Routing"
        }), ": react-router-dom v6 with URL query parameters"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "State Management"
        }), ": React hooks (useState, useMemo, useEffect, useRef)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Data Fetching"
        }), ": Apollo Client GraphQL with Dexie.js for local IndexedDB"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Charting"
        }), ": lightweight-charts (TradingView library)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Styling"
        }), ": CSS Modules with LESS preprocessor"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "State Management:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const [selectedApiaryId, setSelectedApiaryId] = useState<string | null>()\nconst [selectedHiveIds, setSelectedHiveIds] = useState<string[]>([])\nconst [timeRangeDays, setTimeRangeDays] = useState(90)\nconst [showIdealCurve, setShowIdealCurve] = useState(true)\nconst [enabledCharts, setEnabledCharts] = useState({...})\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Data Flow (Individual Hive View):"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User navigates to hive details page"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Clicks \"Metrics\" tab in hive navigation"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Fixed 7-day query fetches weight, temperature, entrance data"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Three charts render with synchronized time axis"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Charts auto-refresh every 30 seconds"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Data Flow (Multi-Hive Analytics):"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Fetch apiaries and hives from GraphQL"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Store hives in local Dexie DB for offline access"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User selects apiary → filters hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "User selects hives → triggers telemetry query"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Dynamic GraphQL query fetches all metrics for selected hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Data transformed and passed to chart components"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Charts render with synchronized time axis"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "URL Query Parameters:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?hiveId=123"
        }), " - Auto-select hive and scroll to view"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?apiaryId=456"
        }), " - Pre-select apiary"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?chartType=weight"
        }), " - Enable specific chart type"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
          children: "?scrollTo=weight"
        }), " - Scroll to specific chart section"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Chart Synchronization:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const { chartRefs, syncCharts } = useChartSync()\n\nconst syncCharts = (sourceChart: any) => {\n  const timeRange = sourceChart.timeScale().getVisibleLogicalRange()\n  chartRefs.current.forEach(chart => {\n    if (chart !== sourceChart) {\n      chart.timeScale().setVisibleLogicalRange(timeRange)\n    }\n  })\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Data Export:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const exportToCSV = () => {\n  const headers = ['Timestamp', ...hiveNames]\n  const rows = dataPoints.map(point => [\n    point.time,\n    ...point.values\n  ])\n  const csv = [headers, ...rows]\n    .map(row => row.join(','))\n    .join('\\n')\n  \n  const blob = new Blob([csv], { type: 'text/csv' })\n  const url = URL.createObjectURL(blob)\n  const a = document.createElement('a')\n  a.href = url\n  a.download = `${title}_${timestamp}.csv`\n  a.click()\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "backend-integration",
      children: "Backend Integration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "telemetry-api"
        }), ": Provides weight, temperature, entrance metrics"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dexie.js"
        }), ": Client-side IndexedDB for hives and inspections"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Apollo Client"
        }), ": GraphQL client with caching and polling"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "LocalStorage"
        }), ": Persists user preferences and chart settings"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Dexie Schema:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "class HiveDatabase extends Dexie {\n  hives: Table<Hive, string>\n  inspections: Table<Inspection, string>\n  \n  constructor() {\n    super('HiveDatabase')\n    this.version(1).stores({\n      hives: 'id, name, status',\n      inspections: 'id, hive_id, added'\n    })\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "GraphQL Query Construction:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const telemetryQueryString = useMemo(() => {\n  if (!activeHives.length) return null\n  \n  const queries = activeHives.map(hive => `\n    hive_${hive.id}_weight: weightKgAggregated(\n      hiveId: \"${hive.id}\"\n      days: $days\n      aggregation: DAILY_AVG\n    ) {\n      ... on MetricFloatList {\n        metrics { t v }\n      }\n    }\n  `).join('\\n')\n  \n  return gql`\n    query MultiHiveTelemetry($days: Int!, ...) {\n      ${queries}\n    }\n  `\n}, [activeHives])\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "data-transformation",
      children: "Data Transformation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Weight Data:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const weightDataByHive = useMemo(() => {\n  const result = {}\n  activeHives.forEach(hive => {\n    result[hive.id] = {\n      hiveName: hive.name,\n      data: telemetryData[`hive_${hive.id}_weight`]?.metrics || []\n    }\n  })\n  return result\n}, [telemetryData, activeHives])\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Population Data:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const inspectionsByHive = useMemo(() => {\n  const grouped = {}\n  inspections.forEach(ins => {\n    const population = JSON.parse(ins.data || '{}')?.hive?.beeCount\n    if (!grouped[ins.hiveId]) grouped[ins.hiveId] = []\n    grouped[ins.hiveId].push({\n      date: new Date(ins.added),\n      population\n    })\n  })\n  \n  Object.keys(grouped).forEach(hiveId => {\n    grouped[hiveId].sort((a, b) => a.date.getTime() - b.date.getTime())\n  })\n  \n  return grouped\n}, [inspections])\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "️-configuration",
      children: "⚙️ Configuration"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "environment-variables",
      children: "Environment Variables"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-bash",
        children: "REACT_APP_GRAPHQL_URL=http://graphql-router:8080\nREACT_APP_TELEMETRY_API_URL=http://telemetry-api:8600\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "chart-options",
      children: "Chart Options"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "const defaultChartOptions = {\n  layout: {\n    attributionLogo: false,\n    background: { color: '#FFFFFF' },\n    textColor: '#333'\n  },\n  timeScale: {\n    timeVisible: true,\n    secondsVisible: false,\n    fixLeftEdge: true,\n    fixRightEdge: true\n  },\n  grid: {\n    vertLines: { color: '#e1e1e1' },\n    horzLines: { color: '#e1e1e1' }\n  },\n  crosshair: {\n    mode: 1\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-testing",
      children: "🧪 Testing"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "unit-tests",
      children: "Unit Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Location: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/test/page/time/"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Coverage:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "State management (apiary selection, hive filtering, time range)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "LocalStorage persistence"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "URL parameter parsing"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Data transformation logic"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chart toggle functionality"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Location: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "/test/integration/time/"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Scenarios:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Load page with URL parameters"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Select apiary and verify hive list updates"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Toggle multiple hives and verify query changes"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Change time range and verify data refetch"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Export chart data as CSV"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Synchronized chart zooming and panning"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "e2e-tests",
      children: "E2E Tests"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: ["Location: ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        children: "e2e/timeseries-analytics.spec.ts"
      })]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "User Flows:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Navigate to /time page"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Select specific apiary from dropdown"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Choose multiple hives for comparison"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Adjust time range slider"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Enable/disable specific charts"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Export weight data as CSV"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Share view via URL with parameters"
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
          children: "Memoization"
        }), ": useMemo for expensive data transformations"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dynamic queries"
        }), ": Only fetch data for selected hives"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Aggregation"
        }), ": Daily averages for ranges over 30 days"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Lazy loading"
        }), ": Charts only render when enabled"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "IndexedDB caching"
        }), ": Hives and inspections cached locally"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Apollo caching"
        }), ": GraphQL responses cached with TTL"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Chart reuse"
        }), ": lightweight-charts instances pooled"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "bottlenecks",
      children: "Bottlenecks"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Large time ranges"
        }), ": Fetching 365 days of high-resolution data (10K+ points)"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Many hives"
        }), ": Comparing over 10 hives simultaneously generates complex queries"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Chart rendering"
        }), ": Simultaneous rendering of 8+ charts on page load"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Entrance data volume"
        }), ": Entrance metrics updated every second (86K points per day)"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h4, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Initial page load"
        }), ": under 2 seconds with cached data"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Time range change"
        }), ": under 1 second for 90-day query"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Chart zoom/pan"
        }), ": 60fps smooth scrolling with sync"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "CSV export"
        }), ": under 500ms for 10K data points"]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Memory usage"
        }), ": under 200MB with 5 hives, 90 days, all charts"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Performance Monitoring:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.code, {
        className: "language-typescript",
        children: "useEffect(() => {\n  const startTime = performance.now()\n  \n  if (telemetryData) {\n    const endTime = performance.now()\n    console.log(`Data loaded in ${endTime - startTime}ms`)\n  }\n}, [telemetryData])\n"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-limitations",
      children: "🚫 Technical Limitations"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Current Constraints:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Maximum 10 hives compared simultaneously (query complexity limit)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Temperature limited to 7 days (7 * 24 * 60 = 10,080 minutes max)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "No real-time streaming (polling every 30 seconds)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chart export limited to visible data points"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "No custom aggregation functions (only AVG, MIN, MAX)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Weather data requires apiary GPS coordinates"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Population curve requires manual inspection data entry"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Entrance metrics require hardware (entrance-observer)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Known Issues:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chart synchronization can lag with over 6 charts enabled"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Large CSV exports (over 50K rows) may freeze browser briefly"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "URL parameter parsing doesn't validate hive ownership"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "LocalStorage quota exceeded on older browsers (5MB limit)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Timezone handling uses browser local time (not UTC)"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Future Improvements:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add websocket subscriptions for real-time updates"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Implement server-side chart image rendering for reports"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add custom aggregation functions (median, percentiles)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Support PDF export with multi-page layouts"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add statistical overlays (moving averages, trend lines)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Implement chart annotations for marking events"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Add comparison mode (this year vs last year)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Support multi-apiary aggregation for commercial beekeepers"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-related-documentation",
      children: "🔗 Related Documentation"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/web_app/pro-tier/timeseries_data_analytics",
          children: "Timeseries Data Analytics (User Guide)"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/web_app/pro-tier/hive_telemetry_storage",
          children: "Hive Telemetry Storage"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/about/products/web_app/pro-tier/colony_comparison_analytics",
          children: "Colony Comparison Analytics"
        })
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "/docs/web-app/features/telemetry-storage",
          children: "Telemetry API"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-development-resources",
      children: "📚 Development Resources"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "GitHub Repository"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://github.com/Gratheon/web-app",
          children: "web-app"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Charts Library"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://tradingview.github.io/lightweight-charts/",
          children: "lightweight-charts"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Dexie.js Docs"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://dexie.org/",
          children: "dexie.org"
        })]
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
          children: "Apollo Client"
        }), ": ", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.a, {
          href: "https://www.apollographql.com/docs/react/",
          children: "apollographql.com"
        })]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h3, {
      id: "-technical-notes",
      children: "💬 Technical Notes"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Implementation Decisions:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Two separate views: quick hive metrics (7 days) vs comprehensive multi-hive analytics"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chose lightweight-charts over Chart.js for better performance with large datasets"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Used IndexedDB (Dexie) instead of Redux for offline-first architecture"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Dynamic GraphQL queries avoid overfetching data for unselected hives"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "LocalStorage for preferences balances persistence with privacy"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "URL parameters enable shareable deep links to specific views"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chart synchronization uses pub-sub pattern for loose coupling"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Individual hive view uses fixed 7-day range for simplicity and performance"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Integration Considerations:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Hive list must be synced from GraphQL to local DB on initial load"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Temperature query limited to 7 days to prevent memory issues"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Chart refs array must be cleaned up to prevent memory leaks"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "CSV export uses Blob URLs that must be revoked after download"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Alert thresholds fetched separately and overlaid on charts"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Weather data requires external API keys configured in backend"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.p, {
      children: (0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Chart Customization:"
      })
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Each chart type extends base ChartContainer component"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Color schemes consistent with brand guidelines"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Tooltip formatters handle different unit types (kg, °C, count)"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Legend positioning avoids overlapping with data lines"
      }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.li, {
        children: "Grid lines use subtle colors to reduce visual noise"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.hr, {}), "\n", (0,react_jsx_runtime__rspack_import_1.jsx)(_components.h2, {
      id: "change-log",
      children: "Change Log"
    }), "\n", (0,react_jsx_runtime__rspack_import_1.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__rspack_import_1.jsx)(_components.strong, {
        children: "Last Updated"
      }), ": December 6, 2025"]
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
70335(module) {
module.exports = JSON.parse('{"id":"web-app/features/timeseries-analytics","title":"Timeseries Data Analytics - Technical Documentation","description":"🎯 Overview","source":"@site/docs/web-app/features/timeseries-analytics.md","sourceDirName":"web-app/features","slug":"/web-app/features/timeseries-analytics","permalink":"/docs/web-app/features/timeseries-analytics","draft":false,"unlisted":false,"editUrl":"https://github.com/gratheon/website/tree/main/packages/create-docusaurus/templates/shared/docs/web-app/features/timeseries-analytics.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Hive Telemetry Storage - Technical Documentation","permalink":"/docs/web-app/features/telemetry-storage"},"next":{"title":"bottom-board-management","permalink":"/docs/web-app/features/bottom-board-management"}}')

},

};
;