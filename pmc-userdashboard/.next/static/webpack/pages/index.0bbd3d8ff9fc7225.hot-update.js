"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/organisms/SideLink.jsx":
/*!***********************************************!*\
  !*** ./src/components/organisms/SideLink.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_sidebarnav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/sidebarnav */ \"./src/components/atoms/sidebarnav.js\");\n/* harmony import */ var _atoms_libraries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/libraries */ \"./src/components/atoms/libraries.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst SideLink = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: _atoms_sidebarnav__WEBPACK_IMPORTED_MODULE_2__.sidebarnav.map((e, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col gap-5 pt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: ()=>router.push(e.link),\n                    className: \"flex gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_libraries__WEBPACK_IMPORTED_MODULE_3__.Images, {\n                            src: e.icon,\n                            width: 30,\n                            height: 10\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\WittyHub 02\\\\testnet-frontend\\\\pmc-userdashboard\\\\src\\\\components\\\\organisms\\\\SideLink.jsx\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, undefined),\n                        e.title\n                    ]\n                }, key.id, true, {\n                    fileName: \"C:\\\\Users\\\\WittyHub 02\\\\testnet-frontend\\\\pmc-userdashboard\\\\src\\\\components\\\\organisms\\\\SideLink.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 19\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\WittyHub 02\\\\testnet-frontend\\\\pmc-userdashboard\\\\src\\\\components\\\\organisms\\\\SideLink.jsx\",\n                lineNumber: 9,\n                columnNumber: 15\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\WittyHub 02\\\\testnet-frontend\\\\pmc-userdashboard\\\\src\\\\components\\\\organisms\\\\SideLink.jsx\",\n        lineNumber: 7,\n        columnNumber: 7\n    }, undefined);\n};\n_s(SideLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SideLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideLink);\nvar _c;\n$RefreshReg$(_c, \"SideLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvU2lkZUxpbmsuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QztBQUNTO0FBQ0o7QUFDNUMsTUFBTUcsV0FBVyxJQUFNOztJQUNuQixNQUFNQyxTQUFTSixzREFBU0E7SUFDMUIscUJBQ0ksOERBQUNLO2tCQUNJSiw2REFBYyxDQUFDLENBQUNNLEdBQUdDLG9CQUNoQiw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQ1YsNEVBQUNDO29CQUFHQyxTQUFTLElBQU1SLE9BQU9TLElBQUksQ0FBQ04sRUFBRU8sSUFBSTtvQkFBR0osV0FBVTs7c0NBQ2hELDhEQUFDUixvREFBTUE7NEJBQUNhLEtBQUtSLEVBQUVTLElBQUk7NEJBQUVDLE9BQU87NEJBQUlDLFFBQVE7Ozs7Ozt3QkFDdENYLEVBQUVZLEtBQUs7O21CQUZ5RFgsSUFBSVksRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBUTVGO0dBZE1qQjs7UUFDYUgsa0RBQVNBOzs7S0FEdEJHO0FBZ0JOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9TaWRlTGluay5qc3g/YmU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgc2lkZWJhcm5hdiB9IGZyb20gJy4uL2F0b21zL3NpZGViYXJuYXYnXHJcbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4uL2F0b21zL2xpYnJhcmllcyc7XHJcbmNvbnN0IFNpZGVMaW5rID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICAgIHtzaWRlYmFybmF2Lm1hcCgoZSwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNSBwdC01Jz5cclxuICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGUubGluayl9IGNsYXNzTmFtZT0nZmxleCBnYXAtNScga2V5PXtrZXkuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZXMgc3JjPXtlLmljb259IHdpZHRoPXszMH0gaGVpZ2h0PXsxMH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICB7ZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVMaW5rIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInNpZGViYXJuYXYiLCJJbWFnZXMiLCJTaWRlTGluayIsInJvdXRlciIsImRpdiIsIm1hcCIsImUiLCJrZXkiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwib25DbGljayIsInB1c2giLCJsaW5rIiwic3JjIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/organisms/SideLink.jsx\n"));

/***/ })

});