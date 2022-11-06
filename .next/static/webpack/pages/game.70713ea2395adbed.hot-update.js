"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game.tsx":
/*!************************!*\
  !*** ./pages/game.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.module.scss */ \"./style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/DataAssets */ \"./Components/DataAssets.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/FinishComponent */ \"./Components/FinishComponent.tsx\");\n/* harmony import */ var _Components_NewArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/NewArray */ \"./Components/NewArray.tsx\");\n/* harmony import */ var _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/direction.svg */ \"./public/direction.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\blino\\\\Desktop\\\\it\\\\draganddropgame\\\\pages\\\\game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _NewArray = (0,_Components_NewArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      info = _NewArray.info,\n      cookies = _NewArray.cookies,\n      currentScene = _NewArray.currentScene;\n\n  var MainGameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      finish = _useState[0],\n      setFinish = _useState[1];\n\n  var count = 0;\n  var compareArray = [];\n  var check = info.type === 'ascend';\n  var filtered = cookies.sort(function (a, b) {\n    return a.number - b.number;\n  });\n  var reversedArr = check ? filtered : filtered.concat().reverse();\n  var emptyBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  compareArray.push(reversedArr[0]);\n  var cookiesPosition = (0,_Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__.makeArray)(info.amount);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!check && emptyBlock.current) {\n      var style = emptyBlock.current.style;\n      style.flexDirection = 'row-reverse';\n      style.left = '-95px';\n    }\n\n    var _loop = function _loop(i) {\n      var target = document.getElementById(\"id\".concat(i));\n\n      target.ondragstart = function () {\n        return false;\n      };\n\n      var getCoords = function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n          top: box.top + scrollY,\n          left: box.left + scrollX\n        };\n      };\n\n      target.ontouchstart = function (event) {};\n\n      target.onmousedown = function (event) {\n        var coords = getCoords(target);\n        var shiftX = event.pageX - coords.left;\n        var shiftY = event.pageY - coords.top;\n        var centerTargetW = target.offsetWidth / 2;\n        var centerTargetH = target.offsetHeight / 2;\n\n        var _getCoords = getCoords(MainGameRef.current),\n            top = _getCoords.top,\n            left = _getCoords.left;\n\n        function moveAt(mouseX, mouseY) {\n          target.style.left = mouseX - left - shiftX + 'px';\n          target.style.top = mouseY - top - shiftY + 'px';\n        }\n\n        moveAt(event.pageX, event.pageY);\n\n        document.onmousemove = function (mouseEvent) {\n          moveAt(mouseEvent.pageX, mouseEvent.pageY);\n        };\n\n        target.ontouchmove = function (touchEvent) {\n          moveAt(touchEvent.touches[0].pageX, touchEvent.touches[0].pageY);\n        };\n\n        target.onmouseup = function (ev) {\n          var _compareArray$count;\n\n          document.onmousemove = null;\n          var value = target.getAttribute('data-value');\n          var elemBelow = document.elementsFromPoint(ev.pageX, ev.pageY).filter(function (newId) {\n            return newId.id === 'emptyId';\n          })[0];\n          var centerWidth = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientWidth) / 2;\n          var centerHeight = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientHeight) / 2;\n          var data = elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.getAttribute('data-value');\n\n          if (value !== data || +data !== ((_compareArray$count = compareArray[count]) === null || _compareArray$count === void 0 ? void 0 : _compareArray$count.number)) {\n            target.style.top = cookiesPosition[i].yPos + 'px';\n            target.style.left = cookiesPosition[i].xPos + 'px';\n          } else {\n            var xPosElem = getCoords(elemBelow).left;\n            var yPosElem = getCoords(elemBelow).top;\n            var currCenterX = xPosElem - left + centerWidth - centerTargetW;\n            var currCenterY = yPosElem - top + centerHeight - centerTargetH;\n            count++;\n            compareArray.push(reversedArr[count]);\n            target.onmouseup = null;\n            target.style.pointerEvents = 'none';\n            target.style.top = currCenterY + 'px';\n            target.style.left = currCenterX + 'px';\n            if (count === info.amount) setFinish(true);\n          }\n        };\n      };\n    };\n\n    for (var i = 0; i < info.amount; i++) {\n      _loop(i);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().MainGame),\n      ref: MainGameRef,\n      children: [finish && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 28\n      }, this), currentScene.background, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies),\n        children: [cookies.map(function (data, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"id\".concat(index),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies_item),\n            \"data-value\": data.number,\n            style: {\n              top: cookiesPosition[index].yPos,\n              left: cookiesPosition[index].xPos\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              src: data.picture,\n              alt: \"pic\".concat(index),\n              style: {\n                pointerEvents: 'none'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              style: {\n                pointerEvents: 'none'\n              },\n              children: data.number\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 37\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 33\n          }, _this);\n        }), check ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlock),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0432\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 33\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlockRight),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0443\\u0431\\u044B\\u0432\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 34\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlockWrapper),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: currentScene.emptySlots\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock),\n          ref: emptyBlock,\n          children: Array.from(Array(info.amount)).map(function (_, index) {\n            var _reversedArr$index;\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              \"data-value\": (_reversedArr$index = reversedArr[index]) === null || _reversedArr$index === void 0 ? void 0 : _reversedArr$index.number,\n              id: \"emptyId\",\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock_item)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 37\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Game, \"7aGcRAaZvZIg2S4rQ100EfiCQos=\");\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFMkIsVUFBeEM7VUFBQSxVQUNLeUUsS0FBSyxDQUFDQyxJQUFOLENBQVdELEtBQUssQ0FBQzNGLElBQUksQ0FBQ3FCLE1BQU4sQ0FBaEIsRUFBK0I2RCxHQUEvQixDQUFtQyxVQUFDVyxDQUFELEVBQUlWLEtBQUosRUFBYztZQUFBOztZQUM5QyxvQkFDSTtjQUVJLG9DQUFZcEUsV0FBVyxDQUFDb0UsS0FBRCxDQUF2Qix1REFBWSxtQkFBb0JyRSxNQUZwQztjQUdJLEVBQUUsV0FITjtjQUlJLFNBQVMsRUFBRXZCLDJFQUFzQnVHO1lBSnJDLEdBQ1NYLEtBRFQ7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQURKO1VBUUgsQ0FUQTtRQURMO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsUUE5QlI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBRko7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURKO0FBc0RIOztHQTNJUXBGOztLQUFBQTtBQTZJVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lLnRzeD8xMjM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7XHJcbiAgICBtYWtlQXJyYXlcclxufSBmcm9tIFwiLi4vQ29tcG9uZW50cy9EYXRhQXNzZXRzXCI7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZpbmlzaENvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50cy9GaW5pc2hDb21wb25lbnRcIjtcclxuaW1wb3J0IE5ld0FycmF5IGZyb20gXCIuLi9Db21wb25lbnRzL05ld0FycmF5XCI7XHJcbmltcG9ydCBkaXJlY3Rpb24gZnJvbSAnLi4vcHVibGljL2RpcmVjdGlvbi5zdmcnO1xyXG5cclxuXHJcbnR5cGUgQ29va2llcyA9IHtcclxuICAgIG51bWJlcjogbnVtYmVyLFxyXG4gICAgcGljdHVyZTogc3RyaW5nXHJcbn1cclxudHlwZSBJbmZvID0ge1xyXG4gICAgdHlwZTogc3RyaW5nLFxyXG4gICAgYW1vdW50OiBudW1iZXIsXHJcbiAgICB2YWx1ZXM6IG51bWJlclxyXG59XHJcbnR5cGUgWFlQb3MgPSB7XHJcbiAgICB4UG9zOiBudW1iZXIsXHJcbiAgICB5UG9zOiBudW1iZXJcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZSgpIHtcclxuICAgIGNvbnN0IHtpbmZvLGNvb2tpZXMsY3VycmVudFNjZW5lfSA9IE5ld0FycmF5KClcclxuICAgIGNvbnN0IE1haW5HYW1lUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb25zdCBbZmluaXNoLHNldEZpbmlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGxldCBjb3VudCA9IDBcclxuXHJcbiAgICBjb25zdCBjb21wYXJlQXJyYXk6IENvb2tpZXNbXSA9IFtdXHJcbiAgICBjb25zdCBjaGVjazogYm9vbGVhbiA9IGluZm8udHlwZSA9PT0gJ2FzY2VuZCdcclxuXHJcbiAgICBjb25zdCBmaWx0ZXJlZDogQ29va2llc1tdID0gY29va2llcy5zb3J0KChhLCBiKSA9PiBhLm51bWJlciAtIGIubnVtYmVyKVxyXG4gICAgY29uc3QgcmV2ZXJzZWRBcnIgPSBjaGVjayA/IGZpbHRlcmVkIDogZmlsdGVyZWQuY29uY2F0KCkucmV2ZXJzZSgpXHJcbiAgICBjb25zdCBlbXB0eUJsb2NrID0gdXNlUmVmKG51bGwpXHJcbiAgICBjb21wYXJlQXJyYXkucHVzaChyZXZlcnNlZEFyclswXSlcclxuICAgIGNvbnN0IGNvb2tpZXNQb3NpdGlvbjogWFlQb3NbXSA9IG1ha2VBcnJheShpbmZvLmFtb3VudClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFjaGVjayAmJiBlbXB0eUJsb2NrLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbXB0eUJsb2NrLmN1cnJlbnQuc3R5bGVcclxuICAgICAgICAgICAgc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3ctcmV2ZXJzZSdcclxuICAgICAgICAgICAgc3R5bGUubGVmdCA9ICctOTVweCdcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5hbW91bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaWQke2l9YClcclxuICAgICAgICAgICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBnZXRDb29yZHMgPSAoZWxlbTogRWxlbWVudCk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IGJveC50b3AgKyBzY3JvbGxZLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgc2Nyb2xsWFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQub25tb3VzZWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3Jkcyh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFggPSBldmVudC5wYWdlWCAtIGNvb3Jkcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpZnRZID0gZXZlbnQucGFnZVkgLSBjb29yZHMudG9wXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJUYXJnZXRXID0gdGFyZ2V0Lm9mZnNldFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclRhcmdldEggPSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b3AsbGVmdH0gPSBnZXRDb29yZHMoTWFpbkdhbWVSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVBdChtb3VzZVgsIG1vdXNlWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gbW91c2VYIC0gbGVmdCAtIHNoaWZ0WCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IG1vdXNlWSAtIHRvcCAtIHNoaWZ0WSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW92ZUF0KGV2ZW50LnBhZ2VYLCBldmVudC5wYWdlWSlcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKG1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlQXQobW91c2VFdmVudC5wYWdlWCwgbW91c2VFdmVudC5wYWdlWSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQub250b3VjaG1vdmUgPSAodG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVBdCh0b3VjaEV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsdG91Y2hFdmVudC50b3VjaGVzWzBdLnBhZ2VZKVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1CZWxvdzogRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGV2LnBhZ2VYLCBldi5wYWdlWSkuZmlsdGVyKG5ld0lkID0+IG5ld0lkLmlkID09PSAnZW1wdHlJZCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGVyV2lkdGggPSBlbGVtQmVsb3c/LmNsaWVudFdpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckhlaWdodCA9IGVsZW1CZWxvdz8uY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IGVsZW1CZWxvdz8uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGRhdGEgfHwgK2RhdGEgIT09IGNvbXBhcmVBcnJheVtjb3VudF0/Lm51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gY29va2llc1Bvc2l0aW9uW2ldLnlQb3MgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gY29va2llc1Bvc2l0aW9uW2ldLnhQb3MgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeFBvc0VsZW0gPSBnZXRDb29yZHMoZWxlbUJlbG93KS5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHlQb3NFbGVtID0gZ2V0Q29vcmRzKGVsZW1CZWxvdykudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJDZW50ZXJYOiBudW1iZXIgPSB4UG9zRWxlbSAtIGxlZnQgKyBjZW50ZXJXaWR0aCAtIGNlbnRlclRhcmdldFdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyckNlbnRlclk6IG51bWJlciA9IHlQb3NFbGVtIC0gdG9wICsgY2VudGVySGVpZ2h0IC0gY2VudGVyVGFyZ2V0SFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBcnJheS5wdXNoKHJldmVyc2VkQXJyW2NvdW50XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBjdXJyQ2VudGVyWSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBjdXJyQ2VudGVyWCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnQgPT09IGluZm8uYW1vdW50KSBzZXRGaW5pc2godHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbkdhbWV9IHJlZj17TWFpbkdhbWVSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2ZpbmlzaCAmJiA8RmluaXNoQ29tcG9uZW50IC8+fVxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRTY2VuZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29va2llc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb29raWVzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGlkJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb29raWVzX2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e2RhdGEubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjb29raWVzUG9zaXRpb25baW5kZXhdLnlQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY29va2llc1Bvc2l0aW9uW2luZGV4XS54UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucGljdHVyZX0gYWx0PXtgcGljJHtpbmRleH1gfSBzdHlsZT17e3BvaW50ZXJFdmVudHM6ICdub25lJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnbm9uZSd9fT57ZGF0YS5udW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrID88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdGlvbkJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtCf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXJlY3Rpb24uc3JjfSBhbHQ9eydkaXJlY3Rpb24nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0aW9uQmxvY2tSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGlyZWN0aW9uLnNyY30gYWx0PXsnZGlyZWN0aW9uJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0J/QviDRg9Cx0YvQstCw0L3QuNGOPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eUJsb2NrV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50U2NlbmUuZW1wdHlTbG90c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5QmxvY2t9IHJlZj17ZW1wdHlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShpbmZvLmFtb3VudCkpLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17cmV2ZXJzZWRBcnJbaW5kZXhdPy5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGVtcHR5SWRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlCbG9ja19pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbInN0eWxlcyIsIm1ha2VBcnJheSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRmluaXNoQ29tcG9uZW50IiwiTmV3QXJyYXkiLCJkaXJlY3Rpb24iLCJHYW1lIiwiaW5mbyIsImNvb2tpZXMiLCJjdXJyZW50U2NlbmUiLCJNYWluR2FtZVJlZiIsImZpbmlzaCIsInNldEZpbmlzaCIsImNvdW50IiwiY29tcGFyZUFycmF5IiwiY2hlY2siLCJ0eXBlIiwiZmlsdGVyZWQiLCJzb3J0IiwiYSIsImIiLCJudW1iZXIiLCJyZXZlcnNlZEFyciIsImNvbmNhdCIsInJldmVyc2UiLCJlbXB0eUJsb2NrIiwicHVzaCIsImNvb2tpZXNQb3NpdGlvbiIsImFtb3VudCIsImN1cnJlbnQiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJsZWZ0IiwiaSIsInRhcmdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmRyYWdzdGFydCIsImdldENvb3JkcyIsImVsZW0iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwic2Nyb2xsWCIsIm9udG91Y2hzdGFydCIsImV2ZW50Iiwib25tb3VzZWRvd24iLCJjb29yZHMiLCJzaGlmdFgiLCJwYWdlWCIsInNoaWZ0WSIsInBhZ2VZIiwiY2VudGVyVGFyZ2V0VyIsIm9mZnNldFdpZHRoIiwiY2VudGVyVGFyZ2V0SCIsIm9mZnNldEhlaWdodCIsIm1vdmVBdCIsIm1vdXNlWCIsIm1vdXNlWSIsIm9ubW91c2Vtb3ZlIiwibW91c2VFdmVudCIsIm9udG91Y2htb3ZlIiwidG91Y2hFdmVudCIsInRvdWNoZXMiLCJvbm1vdXNldXAiLCJldiIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiZWxlbUJlbG93IiwiZWxlbWVudHNGcm9tUG9pbnQiLCJmaWx0ZXIiLCJuZXdJZCIsImlkIiwiY2VudGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNlbnRlckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJ5UG9zIiwieFBvcyIsInhQb3NFbGVtIiwieVBvc0VsZW0iLCJjdXJyQ2VudGVyWCIsImN1cnJDZW50ZXJZIiwicG9pbnRlckV2ZW50cyIsImNvbnRhaW5lciIsIk1haW5HYW1lIiwiYmFja2dyb3VuZCIsIm1hcCIsImluZGV4IiwiY29va2llc19pdGVtIiwicGljdHVyZSIsImRpcmVjdGlvbkJsb2NrIiwic3JjIiwiZGlyZWN0aW9uQmxvY2tSaWdodCIsImVtcHR5QmxvY2tXcmFwcGVyIiwiZW1wdHlTbG90cyIsIkFycmF5IiwiZnJvbSIsIl8iLCJlbXB0eUJsb2NrX2l0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n"));

/***/ })

});