exports.ids = ["56243"];
exports.modules = {
70438(module) {
// Exports
module.exports = {
	"heroBanner": `heroBanner_e1Bh`,
	"buttons": `buttons_VwD3`,
	"languages": `languages_WR6l`,
	"mission": `mission_FVVq`,
	"content": `content_NhZp`,
	"splash": `splash_Mxdr`,
	"splash_internal": `splash_internal_GcCb`,
	"signup": `signup_Nzpf`,
	"bgVideo": `bgVideo_DqK4`,
	"how-to": `how-to_o7GY`,
	"showcase": `showcase_AXoz`,
	"desktop": `desktop_fxQX`,
	"menu": `menu_vJ6i`,
	"mobile": `mobile_MAN_`,
	"logo": `logo_X9fn`,
	"latest_news": `latest_news_XfFn`,
	"front": `front_c7pV`,
	"features": `features_WS6B`,
	"feature": `feature_moa3`,
	"feature2col": `feature2col_L7JK`,
	"action": `action_YMub`,
	"action_green": `action_green_ncgo`,
	"blue": `blue_smHo`,
	"headerContentContainer": `headerContentContainer_m9pP`,
	"company-info": `company-info_gPkr`,
	"installButtons": `installButtons_Zygv`,
	"googlePlay": `googlePlay_KTNl`,
	"desktopDownloadIcon": `desktopDownloadIcon_ugTk`,
	"platformDownloads": `platformDownloads_Xm6f`,
	"page-text": `page-text_uZ31`,
	"devices": `devices_WnLw`,
	"device": `device_ny5_`,
	"deviceText": `deviceText_lOfu`,
	"deviceImgs": `deviceImgs_ncu5`,
	"badge": `badge_AVu3`
};


},
97569(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(86070);
/* import */ var react__rspack_import_1 = __webpack_require__(30758);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_2 = __webpack_require__(24196);
/* import */ var _theme_Layout__rspack_import_3 = __webpack_require__(14);
/* import */ var _index_module_css__rspack_import_4 = __webpack_require__(70438);
/* import */ var _index_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_index_module_css__rspack_import_4);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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

 // Correctly placed imports



//const bgVideo = document.querySelector("#bgVideo");
var randomIndex = 1 + Math.floor(Math.random() * 15);
var randomUrl = "https://gratheon.s3-accelerate.amazonaws.com/video/" + "".concat(randomIndex).padStart(2, "0") + ".mp4";
//bgVideo.src = randomUrl;
function openSupport(event) {
    event.preventDefault();
    // Add your support logic here
    console.log('Support clicked');
}
function HomepageHeader() {
    var siteConfig = (0,_docusaurus_useDocusaurusContext__rspack_import_2/* ["default"] */.A)().siteConfig;
    // State for download URLs
    var _useState = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), macArmUrl = _useState[0], setMacArmUrl = _useState[1];
    var _useState1 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), windowsUrl = _useState1[0], setWindowsUrl = _useState1[1];
    var _useState2 = _sliced_to_array((0,react__rspack_import_1.useState)(null), 2), linuxUrl = _useState2[0], setLinuxUrl = _useState2[1];
    var _useState3 = _sliced_to_array((0,react__rspack_import_1.useState)(true), 2), isLoading = _useState3[0], setIsLoading = _useState3[1];
    // Define localStorage keys
    var LS_KEYS = {
        macArm: 'latestMacArmUrl',
        windows: 'latestWindowsUrl',
        linux: 'latestLinuxUrl'
    };
    (0,react__rspack_import_1.useEffect)(function() {
        // Try loading from localStorage first
        try {
            var cachedMacArm = localStorage.getItem(LS_KEYS.macArm);
            var cachedWindows = localStorage.getItem(LS_KEYS.windows);
            var cachedLinux = localStorage.getItem(LS_KEYS.linux);
            if (cachedMacArm) setMacArmUrl(cachedMacArm);
            if (cachedWindows) setWindowsUrl(cachedWindows);
            if (cachedLinux) setLinuxUrl(cachedLinux);
        } catch (e) {
            console.warn("Could not read from localStorage", e);
        }
        // Fetch latest release data from GitHub API
        fetch('https://api.github.com/repos/Gratheon/web-app/releases?per_page=1').then(function(response) {
            if (!response.ok) {
                throw new Error("GitHub API error: ".concat(response.status));
            }
            return response.json();
        }).then(function(data) {
            if (data && data.length > 0 && data[0].assets) {
                var latestRelease = data[0];
                var foundMacArm = false;
                var foundMacIntel = false;
                var foundWindows = false;
                var foundLinux = false;
                latestRelease.assets.forEach(function(asset) {
                    var name = asset.name.toLowerCase();
                    var url = asset.browser_download_url;
                    if (name.endsWith('.dmg')) {
                        if (name.includes('aarch64')) {
                            setMacArmUrl(url);
                            localStorage.setItem(LS_KEYS.macArm, url);
                            foundMacArm = true;
                        }
                    } else if (name.endsWith('.msi')) {
                        setWindowsUrl(url);
                        localStorage.setItem(LS_KEYS.windows, url);
                        foundWindows = true;
                    } else if (name.endsWith('.appimage')) {
                        setLinuxUrl(url);
                        localStorage.setItem(LS_KEYS.linux, url);
                        foundLinux = true;
                    }
                });
                if (!foundMacArm && !foundMacIntel && !foundWindows && !foundLinux && latestRelease.assets.length > 0) {
                    console.warn("Found release assets, but none matched expected patterns (.dmg, .msi, .AppImage with arch)");
                } else if (latestRelease.assets.length === 0) {
                    console.warn("Latest release has no assets.");
                }
            } else {
                throw new Error('No releases or assets found');
            }
            setIsLoading(false);
        })["catch"](function(err) {
            console.error("Failed to fetch release info:", err);
            if (!localStorage.getItem(LS_KEYS.macArm) && !localStorage.getItem(LS_KEYS.windows) && !localStorage.getItem(LS_KEYS.linux)) {
                var fallbackUrl = 'https://github.com/Gratheon/web-app/releases/latest';
                console.log("API fetch failed and no cache found. Setting fallback URLs.");
                setMacArmUrl(fallbackUrl);
                setWindowsUrl(fallbackUrl);
                setLinuxUrl(fallbackUrl);
            } else {
                console.log("API fetch failed, but using cached links from localStorage.");
            }
            setIsLoading(false);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                id: (_index_module_css__rspack_import_4_default().splash),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                    id: (_index_module_css__rspack_import_4_default().front),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                            id: (_index_module_css__rspack_import_4_default().bgVideo),
                            autoPlay: true,
                            loop: true,
                            muted: true,
                            src: randomUrl
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            className: (_index_module_css__rspack_import_4_default().headerContentContainer),
                            children: [
                                " ",
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    style: {
                                        textAlign: 'center'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        id: (_index_module_css__rspack_import_4_default().splash_internal),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                                style: {
                                                    textAlign: 'center'
                                                },
                                                children: "Beehive Data Analytics"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                style: {
                                                    color: 'white',
                                                    textAlign: 'center',
                                                    padding: '7px 0',
                                                    backgroundColor: 'black',
                                                    fontSize: '20px',
                                                    fontWeight: 'normal'
                                                },
                                                children: "Save bees, time and strength"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: (_index_module_css__rspack_import_4_default().installButtons),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                className: [
                                                    (_index_module_css__rspack_import_4_default().signup),
                                                    (_index_module_css__rspack_import_4_default().blue)
                                                ].join(' '),
                                                href: "https://app.gratheon.com/account/register",
                                                children: "Try it free"
                                            })
                                        }),
                                        isLoading && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                            style: {
                                                gridColumn: '1 / -1',
                                                textAlign: 'center'
                                            },
                                            children: "Loading downloads..."
                                        }),
                                        !isLoading && (macArmUrl || windowsUrl || linuxUrl) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                            className: (_index_module_css__rspack_import_4_default().platformDownloads),
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: "https://play.google.com/store/apps/details?id=com.gratheon.app.twa",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        height: "50",
                                                        src: "./img/google.png",
                                                        alt: "Google Play"
                                                    })
                                                }),
                                                macArmUrl && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: macArmUrl,
                                                    title: "Download macOS (ARM) - ".concat(macArmUrl.split('/').pop()),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        className: (_index_module_css__rspack_import_4_default().desktopDownloadIcon),
                                                        src: "./img/mac.png",
                                                        alt: "Download macOS ARM",
                                                        style: {
                                                            margin: '10px'
                                                        }
                                                    })
                                                }),
                                                windowsUrl && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: windowsUrl,
                                                    title: "Download Windows - ".concat(windowsUrl.split('/').pop()),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        className: (_index_module_css__rspack_import_4_default().desktopDownloadIcon),
                                                        src: "./img/windows.png",
                                                        alt: "Download Windows",
                                                        style: {
                                                            margin: '10px'
                                                        }
                                                    })
                                                }),
                                                linuxUrl && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                    href: linuxUrl,
                                                    title: "Download Linux - ".concat(linuxUrl.split('/').pop()),
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                        className: (_index_module_css__rspack_import_4_default().desktopDownloadIcon),
                                                        src: "./img/linux.png",
                                                        alt: "Download Linux",
                                                        style: {
                                                            margin: '10px'
                                                        }
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                id: (_index_module_css__rspack_import_4_default().showcase),
                autoPlay: true,
                loop: true,
                muted: true,
                src: "https://gratheon.s3-accelerate.amazonaws.com/www/detection2.mov"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    marginTop: '20px'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        style: {
                            textAlign: 'center'
                        },
                        children: "How does the app work?"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_index_module_css__rspack_import_4_default().features),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Model beehives"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "It's difficult to observe and record all colony information using pen and paper while in the field. Model hives to remember where to take action and why"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        src: "https://gratheon.s3-accelerate.amazonaws.com/www/frame-management3.mov"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Upload frame photos"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Take frame photo and upload it to the app. We will detect and count bees to measure precise colony size and predict potential swarming"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: "./img/count.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Store inspections"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Take snapshot of the beehive state to track colony development over time. Compare same frame to see changes in the colony."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: "./img/inspections.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Find a queen"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Finding a queen in a bustling metropolis to determine if the colony has a future can be challenging. We can surprise you and find two"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: "./img/queens.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Estimate resources"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "We also detect different cells to estimate ratio of resources. Balancing nectar and pollen between colonies can prevent starvation"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        alt: "beehive frame with detected cell types",
                                        src: "img/comb.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Measure mite infestation"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Detect and count varroa mites infesting your bees without the need for killing bees with alcohol washing test"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        src: "./img/varroa.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Learn from AI"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Given all of the hive context, get a one-button advice from a large language model on the next steps"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        alt: "beehive frame with detected cell types",
                                        src: "img/llm.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Take notes"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Use ipad pencil or mouse to draw on top of the frame to highlight important regions"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                                        autoPlay: true,
                                        loop: true,
                                        muted: true,
                                        src: "https://gratheon.s3-accelerate.amazonaws.com/www/ipad3.mov"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Share"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Share your beehive inspection with beekeeping community by generating a link that receivers can open. Get help from experts to identify problems, get advice or share a joy of beekeeping."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                        alt: "beehive frame with detected cell types",
                                        src: "img/sharing.webp"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().feature),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                                        children: "Spy on bees"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Stream your beehive entrance using out entrance-observer opensource client code. Alternatively use unused phone or raspberry-pi. Play back past videos to see what happened. Useful to understand behavioural patterns, detect hornet attacks, robbing, queen mating flights."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("iframe", {
                                        src: "https://www.youtube.com/embed/oG791JNb1aA?autoplay=1&mute=1&loop=1",
                                        style: {
                                            width: '100%',
                                            height: '201px',
                                            margin: '0 auto',
                                            display: 'block'
                                        },
                                        title: "Bees at the beehive entrance",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                        referrerPolicy: "strict-origin-when-cross-origin",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                id: (_index_module_css__rspack_import_4_default().devices),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        style: {
                            textAlign: 'center'
                        },
                        children: "Hardware products"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().device),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceText),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                                children: [
                                                    "Beehive sensors ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: (_index_module_css__rspack_import_4_default().badge),
                                                        children: "prototype phase"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Measure temperature, humidity, CO2 level, barometric pressure, sound and weight to correlate colony development with environmental factors. Most affordable, data- and energy-efficient."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                href: "https://github.com/Gratheon/beehive-sensors/",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 1024 1024",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",
                                                            transform: "scale(64)",
                                                            fill: "#1B1F23"
                                                        })
                                                    }),
                                                    " Code"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceImgs),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "./img/sensors.webp",
                                                alt: "Beehive sensors"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "./img/temp.webp",
                                                alt: "temperature graph",
                                                style: {
                                                    maxWidth: '300px'
                                                }
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().device),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceText),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                                children: [
                                                    "Entrance Observer ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: (_index_module_css__rspack_import_4_default().badge),
                                                        children: "MVP phase"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Get video feed of entrance in real-time. Count bees coming in and out to estimate foraging bee daily loss. Detect varroa mites riding on bees. Track pollen flow. Detect robbing, worker orientation flights. Detect queen mating flights."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                href: "https://github.com/Gratheon/entrance-observer/",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 1024 1024",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",
                                                            transform: "scale(64)",
                                                            fill: "#1B1F23"
                                                        })
                                                    }),
                                                    " Code"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                href: "/entrance-observer-whitepaper.pdf",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                                                        "enable-background": "new 0 0 334.371 380.563",
                                                        version: "1.1",
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 14 16",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                                                transform: "matrix(.04589 0 0 .04589 -.66877 -.73379)",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                                                        points: "51.791 356.65 51.791 23.99 204.5 23.99 282.65 102.07 282.65 356.65",
                                                                        fill: "#fff",
                                                                        "stroke-width": "212.65"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m201.19 31.99 73.46 73.393v243.26h-214.86v-316.66h141.4m6.623-16h-164.02v348.66h246.85v-265.9z",
                                                                        "stroke-width": "21.791"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                                                transform: "matrix(.04589 0 0 .04589 -.66877 -.73379)",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                                                        points: "282.65 356.65 51.791 356.65 51.791 23.99 204.5 23.99 206.31 25.8 206.31 100.33 280.9 100.33 282.65 102.07",
                                                                        fill: "#fff",
                                                                        "stroke-width": "212.65"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m198.31 31.99v76.337h76.337v240.32h-214.86v-316.66h138.52m9.5-16h-164.02v348.66h246.85v-265.9l-6.43-6.424h-69.907v-69.842z",
                                                                        "stroke-width": "21.791"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                                                transform: "matrix(.04589 0 0 .04589 -.66877 -.73379)",
                                                                "stroke-width": "21.791",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                                                        points: "258.31 87.75 219.64 87.75 219.64 48.667 258.31 86.38"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m227.64 67.646 12.41 12.104h-12.41v-12.104m-5.002-27.229h-10.998v55.333h54.666v-12.742z"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                                                transform: "matrix(.04589 0 0 .04589 -.66877 -.73379)",
                                                                fill: "#ed1c24",
                                                                "stroke-width": "212.65",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("polygon", {
                                                                        points: "311.89 284.49 22.544 284.49 22.544 167.68 37.291 152.94 37.291 171.49 297.15 171.49 297.15 152.94 311.89 167.68"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m303.65 168.63 1.747 1.747v107.62h-276.35v-107.62l1.747-1.747v9.362h272.85v-9.362m-12.999-31.385v27.747h-246.86v-27.747l-27.747 27.747v126h302.35v-126z"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                                                                x: "1.7219",
                                                                y: "7.9544",
                                                                width: "10.684",
                                                                height: "4.0307",
                                                                fill: "none"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("g", {
                                                                transform: "matrix(.04589 0 0 .04589 1.7219 11.733)",
                                                                fill: "#fff",
                                                                "stroke-width": "21.791",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m9.216 0v-83.2h30.464q6.784 0 12.928 1.408 6.144 1.28 10.752 4.608 4.608 3.2 7.296 8.576 2.816 5.248 2.816 13.056 0 7.68-2.816 13.184-2.688 5.504-7.296 9.088-4.608 3.456-10.624 5.248-6.016 1.664-12.544 1.664h-8.96v26.368zm22.016-43.776h7.936q6.528 0 9.6-3.072 3.2-3.072 3.2-8.704t-3.456-7.936-9.856-2.304h-7.424z"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m87.04 0v-83.2h24.576q9.472 0 17.28 2.304 7.936 2.304 13.568 7.296t8.704 12.8q3.2 7.808 3.2 18.816t-3.072 18.944-8.704 13.056q-5.504 5.12-13.184 7.552-7.552 2.432-16.512 2.432zm22.016-17.664h1.28q4.48 0 8.448-1.024 3.968-1.152 6.784-3.84 2.944-2.688 4.608-7.424t1.664-12.032-1.664-11.904-4.608-7.168q-2.816-2.56-6.784-3.456-3.968-1.024-8.448-1.024h-1.28z"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                                        d: "m169.22 0v-83.2h54.272v18.432h-32.256v15.872h27.648v18.432h-27.648v30.464z"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    " White Paper"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceImgs),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                                src: "./img/observer.webp",
                                                alt: "Entrance Observer"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                                                autoPlay: true,
                                                loop: true,
                                                muted: true,
                                                src: "./img/counting.mov"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_index_module_css__rspack_import_4_default().device),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceText),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h3", {
                                                children: [
                                                    "Modular Robotic beehive ",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        className: (_index_module_css__rspack_import_4_default().badge),
                                                        children: "ideation phase"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                children: "Our ultimate goal. Automate inspections with a mechanical frame extraction. Save energy from lifting heavy beehive sections. Reduce bees dying from inspections. Improve efficiency with remote internal observation to save time on field trips. Be always up-to-date with alert notifications. Keep neighbours sting-free in urban areas."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("a", {
                                                href: "https://github.com/Gratheon/robotic-beehive/",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 1024 1024",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                                                            fillRule: "evenodd",
                                                            clipRule: "evenodd",
                                                            d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",
                                                            transform: "scale(64)",
                                                            fill: "#1B1F23"
                                                        })
                                                    }),
                                                    " Code"
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                        className: (_index_module_css__rspack_import_4_default().deviceImgs),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("video", {
                                            autoPlay: true,
                                            loop: true,
                                            muted: true,
                                            src: "https://gratheon.s3-accelerate.amazonaws.com/video/linear-actuator.mp4"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                id: (_index_module_css__rspack_import_4_default().content),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("article", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                            children: "Shape the future of beekeeping"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                            id: (_index_module_css__rspack_import_4_default().author),
                            style: {
                                display: 'flex'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    style: {
                                        paddingRight: '10px'
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                        href: "https://twitter.com/tot_ra",
                                        style: {
                                            border: 'none'
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                                            alt: "author photo",
                                            style: {
                                                borderRadius: '25px'
                                            },
                                            width: "50",
                                            height: "50",
                                            src: "./img/artjom.jpg"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    children: [
                                        "By ",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                            href: "https://www.linkedin.com/in/kurapov/",
                                            children: "Artjom Kurapov"
                                        }),
                                        ",",
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {}),
                                        "Beekeeper, Founding engineer"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "I am a software engineer and 5 years ago I became a beekeeper to improve pollination of my garden and get higher yields. To me, bees are also a cute and interesting pet."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "Bees are key species for our food security. Farmers are cooperating with beekeepers to increase yields through precise pollination."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                            children: [
                                "Traditional beekeeping requires observability of a bee colony, because bees can experience starvation, queen loss, late swarming, or get",
                                ' ',
                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("i", {
                                    children: "Varroa destructor"
                                }),
                                " mite infestation which weakens the colony and causes overwintering collapse."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "Observability is typically solved with a hard physical labor and frequent and time-limited inspections. Dressed in a protective suit, in the summer heat, you need to lift 20 kg beehive sections, which were designed 150 years ago and notice small details while you are getting stung by defending bees, causing inspection stress and killing bees."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "As your apiary grows, this work becomes unscalable. Industrial beekeepers have multiple apiaries at distant locations that are hard to reach. Existing solutions do not adequately solve these issues"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "\uD83D\uDCA1 Our goal is to help beekeepers with observability and automation. Our vision is a fully autonomous multi-hive Robotic Apiary that can remotely inspect colonies. We will reach this step by step, starting with a software."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                            children: "By providing actionable metrics and automation, beekeepers become more efficient, spend less time in the field and analyze more, doing precise intervention only when needed."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            id: (_index_module_css__rspack_import_4_default().future),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        children: [
                                            "Gratheon app is built on the shoulders of open-source software and is fully",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                href: "https://github.com/gratheon",
                                                children: "open source"
                                            }),
                                            " too."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        children: [
                                            "Join us to improve life of 100 million bee colonies worldwide and meet pollination demand for more. We're looking for",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("strong", {
                                                children: "investors"
                                            }),
                                            " to scale our development,",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                href: "https://www.notion.so/gratheon/Open-roles-positions-e50bd8e561c74102ab8e2b96276809c7?pvs=4",
                                                children: "engineers"
                                            }),
                                            ' ',
                                            "to join",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                href: "https://www.notion.so/gratheon/Team-5ff38d33b8a2448ca02ffc26aed09278?pvs=4",
                                                children: "our team"
                                            }),
                                            ",",
                                            ' ',
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                                href: "https://www.notion.so/gratheon/Advisors-6b51c9883cd94fe8a70a4ae548d1970a?pvs=4",
                                                children: "beekeepers"
                                            }),
                                            ' ',
                                            "to run field testing and advisors to guide us."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        children: "Got some ideas?"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                        className: [
                                            (_index_module_css__rspack_import_4_default().action),
                                            (_index_module_css__rspack_import_4_default().action_green)
                                        ].join(' '),
                                        href: "https://discord.gg/PcbP4uedWj",
                                        children: "Tell us in Discord"
                                    }),
                                    " ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("a", {
                                        style: {
                                            maxWidth: '109px'
                                        },
                                        className: [
                                            (_index_module_css__rspack_import_4_default().action),
                                            (_index_module_css__rspack_import_4_default().blue)
                                        ].join(' '),
                                        href: "https://app.gratheon.com/account/register",
                                        children: "Sign up"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("iframe", {
                title: "Author's introduction",
                style: {
                    width: '100%',
                    height: '500px',
                    margin: '0 auto',
                    display: 'block'
                },
                src: "https://www.youtube.com/embed/gM3AJEAhmXc?rel=0",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                style: {
                    display: 'flex'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            backgroundColor: '#ffd900',
                            height: '6px',
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            backgroundColor: '#2f8b0b',
                            height: '6px',
                            flexGrow: 1
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            backgroundColor: '#0248ff',
                            height: '6px',
                            flexGrow: 1
                        }
                    })
                ]
            })
        ]
    });
}
function Home() {
    var siteConfig = (0,_docusaurus_useDocusaurusContext__rspack_import_2/* ["default"] */.A)().siteConfig;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_3/* ["default"] */.A, {
        title: "Beehive AI monitoring | ".concat(siteConfig.title),
        description: "Monitoring software as a service for backyard beekeepers",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(HomepageHeader, {})
    });
}


},

};
;