"use strict";
exports.ids = ["54555"];
exports.modules = {
70347(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Pricing)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(14);
/* import */ var _src_components_CustomPricingPage__rspack_import_3 = __webpack_require__(9572);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_4 = __webpack_require__(24196);





function Pricing() {
    var siteConfig = (0,_docusaurus_useDocusaurusContext__rspack_import_4/* ["default"] */.A)().siteConfig;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: "Pricing",
        description: "Pricing plans for Gratheon products and services",
        wrapperClassName: "pricing-page-no-sidebar",
        noFooter: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_src_components_CustomPricingPage__rspack_import_3/* ["default"] */.A, {})
    });
}


},
9572(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (CustomPricingPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(11084);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}




function CustomPricingPage() {
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)({
        telemetryRequests: 0,
        dataPoints: 0,
        videoMinutes: 0,
        smsAlerts: 0,
        webhooks: 0,
        hives: 0,
        frames: 0,
        frameUploads: 0,
        inspections: 0
    }), 2), calculatorValues = _useState[0], setCalculatorValues = _useState[1];
    var calculateTokens = function() {
        var tokens = calculatorValues.telemetryRequests * 0.002 + calculatorValues.dataPoints * 0.0002 + calculatorValues.videoMinutes * 0.27 + calculatorValues.smsAlerts * 0.3 + calculatorValues.webhooks * 0.01 + calculatorValues.hives * 2 + calculatorValues.frames * 0.02 + calculatorValues.frameUploads * 0.25 + calculatorValues.inspections;
        return Math.round(tokens * 100) / 100;
    };
    var calculateCost = function() {
        var tokens = calculateTokens();
        return Math.round(tokens / 1000 * 100 * 100) / 100;
    };
    var handleInputChange = function(field, value) {
        setCalculatorValues(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, field, parseInt(value) || 0));
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: "pricing-page-wrapper",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "pricing-page-header",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                        className: "pricing-page-title",
                        children: "⚖️ Pricing Plans"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "pricing-page-subtitle",
                        children: "Choose the plan that best fits your beekeeping needs. Our subscription model is designed to support beekeepers of all sizes."
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "pricing-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pricing-card",
                        "data-tier": "hobbyist",
                        style: {
                            order: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-title",
                                        children: "Hobbyist"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-price",
                                        children: "Free"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-description",
                                        children: "Perfect for beginners"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCE6 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/apiary-management",
                                                                children: "Apiary & Hive Management"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDDBC️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/frame-photo-upload",
                                                                children: "Frame Photo Upload"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDC1D \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/\uD83D\uDC1D Worker bee detection",
                                                                children: "Worker Bee Detection"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDC51 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/queen-detection",
                                                                children: "Queen Detection"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDC1D \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/\uD83D\uDC1D Honeycomb cell detection & management",
                                                                children: "Cell Analysis"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "♻️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/♻️ Public beehive view",
                                                                children: "Public Hive Sharing"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "♻️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/♻️ QR-code generation",
                                                                children: "QR Code Generation"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCC5 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/hobbyist-tier/\uD83D\uDCC5 Varroa Treatment diary",
                                                                children: "Treatment Diary"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-limitations-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Limitations"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D Up to 3 hives"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D 10 frames per hive max"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC22 Low-priority AI processing"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⛄️ 1 year image retention"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pricing-card-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://app.gratheon.com/account/register",
                                    className: "pricing-button",
                                    children: "Get Started"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pricing-card simple featured",
                        "data-tier": "starter",
                        style: {
                            order: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-title",
                                        children: "Starter"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-card-price",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "price-monthly",
                                                children: [
                                                    "€22",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "price-period",
                                                        children: " / month"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "price-yearly-group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "price-yearly",
                                                        children: "€220/year"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                        className: "price-discount",
                                                        children: "Save 17% with yearly billing"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-description",
                                        children: "For small-scale beekeepers"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83E\uDD16 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/\uD83E\uDD16 Beekeeping advice with LLM",
                                                                children: "AI Beekeeping Assistant"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDD0E \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/\uD83D\uDD0E Inspection management",
                                                                children: "Inspection Management"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83E\uDDEE \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/\uD83E\uDDEE Hive bottom board & varroa monitoring",
                                                                children: "Varroa Monitoring"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCFA \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/flexible-tier/video_playback",
                                                                children: "Video Stream Playback"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "✏️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/✏️ Drawing on canvas",
                                                                children: "Frame Annotation Tool"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83C\uDF6D \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/\uD83C\uDF6D Feeding history",
                                                                children: "Feeding History"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "↔️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/split_bee_colony",
                                                                children: "Colony Split Management"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83E\uDEF6\uD83C\uDFFB \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/join_bee_colonies",
                                                                children: "Colony Joining Tool"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDDFA️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/starter-tier/\uD83D\uDDFA️ Hive placement planner",
                                                                children: "Hive Placement Planner"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-limitations-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Limitations"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83E\uDDD1‍\uD83D\uDE80 1 user account"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D Up to 20 hives"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D 30 frames per hive"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⛄️ 2 year image retention"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pricing-card-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://app.gratheon.com/account/register",
                                    className: "pricing-button",
                                    children: "Start Free Trial"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pricing-card flexible featured",
                        "data-tier": "flexible",
                        style: {
                            order: 3
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-title",
                                        children: "Flexible"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-card-price",
                                        children: [
                                            "€100",
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                style: {
                                                    fontSize: "1rem"
                                                },
                                                children: " one-time"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-description",
                                        children: "Pay only for what you use"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            background: '#f39c12',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            marginTop: '8px',
                                            display: 'inline-block'
                                        },
                                        children: "In Development"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Pay-per-use Infrastructure Features"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCE6 Extra hive & frame capacity beyond tier limits"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDDBC️ Additional frame uploads & AI analysis"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCD3 Extra beehive inspections"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCC8 Telemetry data requests from IoT sensors"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCC8 Long-term sensor data point storage"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCF2 SMS alert notifications"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83C\uDFA5 Video processing & storage (entrance observer)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83E\uDE9D Webhook calls & API integrations"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Perfect For"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCCA Variable workload beekeepers"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDD2C Research & experimentation"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⚡ Scaling beyond fixed tier limits"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCB0 Cost control with exact usage"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pricing-card featured professional",
                        "data-tier": "professional",
                        style: {
                            order: 4
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-title",
                                        children: "Professional"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-card-price",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "price-monthly",
                                                children: [
                                                    "€55",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "price-period",
                                                        children: " / month"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                className: "price-yearly-group",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: "price-yearly",
                                                        children: "€599/year"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("small", {
                                                        className: "price-discount",
                                                        children: "Save 9% with yearly billing"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-description",
                                        children: "For commercial beekeepers"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            background: '#f39c12',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            marginTop: '8px',
                                            display: 'inline-block'
                                        },
                                        children: "In Development"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCC8 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/hive_telemetry_storage",
                                                                children: "Hive telemetry storage"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCCA \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/timeseries_data_analytics",
                                                                children: "Timeseries data analytics"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDD14 AI-driven anomaly detection"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "♻️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/hive_ownership_transfer",
                                                                children: "Hive ownership transfer"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "⚖️ \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/colony_comparison_analytics",
                                                                children: "Colony comparison analytics"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                                                        children: [
                                                            "\uD83D\uDCE6 \xa0",
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                                to: "/about/products/web_app/pro-tier/inventory_management",
                                                                children: "Inventory management system"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCD3 Unlimited inspections per hive"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-limitations-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Limitations"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCC8 Min 10 min telemetry resolution"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83E\uDDD1‍\uD83D\uDE80 Up to 20 user accounts"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D Up to 150 hives"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⛄️ 3 year image retention"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pricing-card-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "mailto:sales@gratheon.com",
                                    className: "pricing-button",
                                    children: "Contact Sales"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "pricing-card enterprise featured",
                        "data-tier": "enterprise",
                        style: {
                            order: 5
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-title",
                                        children: "Enterprise"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-card-price enterprise-price",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "enterprise-custom-text",
                                                children: "Custom"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "enterprise-pricing-text",
                                                children: "Pricing"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "pricing-card-description",
                                        children: "For large commercial operations with thousands of hives"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            background: '#666',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            marginTop: '8px',
                                            display: 'inline-block'
                                        },
                                        children: "Contract Required"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "pricing-card-body",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-features-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Features"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDD2C Research data access & export"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDEE0️ Custom integrations & API development"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83C\uDFE2 On-premise deployment options"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCDE 24/7 priority support & maintenance"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⚡ High-priority processing & SLA guarantees"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDD10 Advanced security & compliance features"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCCA Custom reporting & analytics dashboards"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCCB Custom training & onboarding"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "pricing-limitations-section",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h4", {
                                                children: "Scale"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                className: "pricing-card-features",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC1D 1000+ hives supported"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDC65 Unlimited user accounts"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "⛄️ Unlimited data retention"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDCC8 Real-time telemetry (1-sec resolution)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        children: "\uD83D\uDE80 Priority processing queue"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "pricing-card-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "mailto:enterprise@gratheon.com",
                                    className: "pricing-button",
                                    children: "Contact Enterprise Sales"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "addon-section-wrapper",
                id: "addon-calculator",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "addon-section",
                        style: {
                            marginTop: '2rem',
                            padding: '2rem',
                            background: 'linear-gradient(135deg, rgba(2, 72, 255, 0.05), rgba(2, 72, 255, 0.02))',
                            borderRadius: '16px',
                            border: '2px solid #0248ff'
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    textAlign: 'center',
                                    marginBottom: '2rem'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                        style: {
                                            color: '#0248ff',
                                            background: 'linear-gradient(135deg, #0248ff, #0040e8)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            fontSize: '2.5rem'
                                        },
                                        children: "Flexible Addon Features - Usage Calculator"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            fontSize: '1.5rem',
                                            color: '#0248ff',
                                            marginBottom: '1rem',
                                            fontWeight: 'bold'
                                        },
                                        children: "€100 for 1000 tokens*"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        style: {
                                            fontSize: '1.1rem',
                                            color: '#666'
                                        },
                                        children: "Calculate exact costs for infrastructure features that scale with usage"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        style: {
                                            background: '#f39c12',
                                            color: 'white',
                                            padding: '6px 12px',
                                            borderRadius: '6px',
                                            fontSize: '0.9rem',
                                            display: 'inline-block',
                                            marginTop: '8px'
                                        },
                                        children: "In Development"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                style: {
                                    display: 'flex',
                                    gap: '3rem',
                                    alignItems: 'flex-start',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        style: {
                                            flex: '1',
                                            minWidth: '300px',
                                            maxWidth: '400px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                style: {
                                                    color: '#0248ff',
                                                    marginBottom: '1rem'
                                                },
                                                children: "How Flexible Addons Work"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("ul", {
                                                style: {
                                                    listStyle: 'none',
                                                    padding: 0,
                                                    fontSize: '1rem',
                                                    lineHeight: '1.8'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "\uD83D\uDCB0 Buy €100 starter pack (1000 tokens)"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "\uD83D\uDD0B Tokens valid for 1 year, never expire"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "⚡ Use tokens for infrastructure features"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "\uD83D\uDCC8 Scale beyond any tier limits"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "\uD83E\uDDEE Pay only for exact usage"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                                        style: {
                                                            marginBottom: '0.5rem'
                                                        },
                                                        children: "\uD83D\uDCB3 No monthly recurring charges"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                style: {
                                                    marginTop: '2rem',
                                                    padding: '1.5rem',
                                                    background: 'linear-gradient(135deg, rgba(2, 72, 255, 0.1), rgba(2, 72, 255, 0.05))',
                                                    border: '1px solid #0248ff',
                                                    borderRadius: '12px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            marginBottom: '0.5rem',
                                                            color: '#0248ff',
                                                            fontWeight: 'bold'
                                                        },
                                                        children: [
                                                            "Total tokens needed: ",
                                                            calculateTokens()
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                                        style: {
                                                            fontSize: '1.2rem',
                                                            color: '#0248ff',
                                                            fontWeight: 'bold'
                                                        },
                                                        children: [
                                                            "Estimated monthly cost: €",
                                                            calculateCost()
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                                        to: "mailto:sales@gratheon.com",
                                                        style: {
                                                            display: 'inline-block',
                                                            marginTop: '1rem',
                                                            padding: '0.8rem 1.5rem',
                                                            background: '#0248ff',
                                                            color: 'white',
                                                            textDecoration: 'none',
                                                            borderRadius: '8px',
                                                            fontWeight: '600'
                                                        },
                                                        children: "Contact Sales"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        style: {
                                            flex: '2',
                                            minWidth: '500px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                                style: {
                                                    color: '#0248ff',
                                                    marginBottom: '1rem'
                                                },
                                                children: "Infrastructure Features & Pricing"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("table", {
                                                className: "token-calculator-table",
                                                style: {
                                                    width: '100%',
                                                    border: '2px solid #0248ff',
                                                    borderRadius: '8px',
                                                    overflow: 'hidden',
                                                    fontSize: '0.9rem'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("thead", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                            style: {
                                                                background: 'linear-gradient(135deg, #0248ff, #0040e8)',
                                                                color: 'white'
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                    children: "Infrastructure Feature"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                    children: "Token Cost per Unit"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                    children: "Your Monthly Usage"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("th", {
                                                                    children: "Tokens Required"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tbody", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCE6 Beehive management",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Managing hive records, locations, and basic data"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "2 tokens/month"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.hives,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('hives', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "hives"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.hives * 2).toFixed(0)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCE6 Frame management",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Storing frame data, positions, and metadata"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.02 tokens/month"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.frames,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('frames', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "frames"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.frames * 0.02).toFixed(2)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDDBC️ Frame upload & analysis",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "AI analysis of frame images for bee detection, disease identification"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.25 tokens"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.frameUploads,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('frameUploads', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "uploads"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.frameUploads * 0.25).toFixed(2)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCD3 Beehive inspection",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Recording and storing detailed hive inspection data"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "1 token/month"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.inspections,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('inspections', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "inspections"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: calculatorValues.inspections
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCC8 Telemetry request",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Individual sensor data requests from IoT devices"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.002 tokens"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.telemetryRequests,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('telemetryRequests', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "requests"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.telemetryRequests * 0.002).toFixed(3)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCC8 Data point storage",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Long-term storage of sensor measurements and historical data"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.0002 tokens/month"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.dataPoints,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('dataPoints', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "data points"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.dataPoints * 0.0002).toFixed(4)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83D\uDCF2 SMS alert",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Text message notifications for hive alerts and warnings"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.3 tokens"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.smsAlerts,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('smsAlerts', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "alerts"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.smsAlerts * 0.3).toFixed(1)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83C\uDFA5 Video processing & storage",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "Analysis and storage of entrance observer video footage"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.27 tokens/minute/month"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.videoMinutes,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('videoMinutes', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "minutes"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.videoMinutes * 0.27).toFixed(2)
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("td", {
                                                                        children: [
                                                                            "\uD83E\uDE9D Webhook call",
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                                                className: "service-description",
                                                                                children: "API integrations and automated data transfers"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: "0.01 tokens"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                                            type: "number",
                                                                            value: calculatorValues.webhooks,
                                                                            onChange: function(e) {
                                                                                return handleInputChange('webhooks', e.target.value);
                                                                            },
                                                                            min: "0",
                                                                            placeholder: "calls"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("td", {
                                                                        className: "token-result",
                                                                        children: (calculatorValues.webhooks * 0.01).toFixed(2)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                style: {
                                                    fontSize: '0.85rem',
                                                    color: '#666',
                                                    marginTop: '1rem',
                                                    fontStyle: 'italic'
                                                },
                                                children: "* Tokens are valid for 1 year. Unused tokens do not roll over."
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    " "
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                children: "Hardware Devices"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                children: "If you buy a device, you are not vendor-locked and we do not force you to pay for web-app subscription, but it's much less hassle for you and this would support us in the long term as a company. If you choose to setup fully local integration and manage data storage yourself, you can use our docs."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "hardware-devices-container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "hardware-device-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "hardware-device-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                            to: "https://gratheon.com/about/products/sensors/",
                                            children: "Sensors"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hardware-device-image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.26.53-41f0bf6a4c13c5d1ae1cb945c8cc1a06.png",
                                            alt: "Sensors"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "hardware-device-pricing",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hardware-price-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-label",
                                                children: "Device Purchase"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-value",
                                                children: "€200"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-description",
                                                children: "One-time payment"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://gratheon.com/docs/beehive-sensors/",
                                    className: "pricing-button",
                                    children: "Get Started"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "hardware-device-card",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "hardware-device-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                            to: "https://gratheon.com/about/products/entrance_observer/",
                                            children: "Entrance observer"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hardware-device-image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.00-9e504be04ac885dce2e1a8ff1e4ffae0.png",
                                            alt: "Beehive Camera"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "hardware-device-pricing",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hardware-price-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-label",
                                                children: "Device Purchase"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-value",
                                                children: "ca. €600"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-description",
                                                children: "One-time payment"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://gratheon.com/docs/entrance-observer/",
                                    className: "pricing-button",
                                    children: "Get Started"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "hardware-device-card ideation",
                        style: {
                            opacity: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "ideation-badge",
                                children: "In ideation"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "hardware-device-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                            to: "https://gratheon.com/about/products/robotic_beehive/",
                                            children: "Robotic Beehive"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hardware-device-image robotic-beehive-image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "https://gratheon.com/assets/images/Screenshot%202025-02-25%20at%2011.25.06-5e6bdf8cbd74362a2be7c362199a6a00.png",
                                            alt: "Robotic Beehive"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "hardware-device-pricing",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hardware-price-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-label",
                                                children: "Device Purchase"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-value",
                                                children: "ca. €3000"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-description",
                                                children: "One-time payment"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://discord.gg/PcbP4uedWj",
                                    className: "pricing-button",
                                    children: "Join Discord"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: "hardware-device-card ideation",
                        style: {
                            opacity: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "ideation-badge",
                                children: "In ideation"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: "hardware-device-header",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                            to: "https://gratheon.com/about/products/robotic_apiary/",
                                            children: "Robotic Apiary"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: "hardware-device-image",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            src: "https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.24-365e7c710a846d74c4d87c28849a1f8f.png",
                                            alt: "Robotic Apiary"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-body",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: "hardware-device-pricing",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: "hardware-price-item",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-label",
                                                children: "Device Purchase"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-value",
                                                children: "ca. €8000"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                className: "price-description",
                                                children: "One-time payment"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: "hardware-device-footer",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                                    to: "https://discord.gg/PcbP4uedWj",
                                    className: "pricing-button",
                                    children: "Join Discord"
                                })
                            })
                        ]
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "device-pricing-info",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                children: "Note:"
                            }),
                            " Each hardware device operates off-grid. For integration with web-app, a subscription fee must be used that covers data management services specific to that device"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        children: "* Tokens are valid for 1 year. Unused tokens do not roll over."
                    })
                ]
            })
        ]
    });
}


},

};
;