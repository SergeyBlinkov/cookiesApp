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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.module.scss */ \"./style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/DataAssets */ \"./Components/DataAssets.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/FinishComponent */ \"./Components/FinishComponent.tsx\");\n/* harmony import */ var _Components_NewArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/NewArray */ \"./Components/NewArray.tsx\");\n/* harmony import */ var _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/direction.svg */ \"./public/direction.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\blino\\\\Desktop\\\\it\\\\draganddropgame\\\\pages\\\\game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _NewArray = (0,_Components_NewArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      info = _NewArray.info,\n      cookies = _NewArray.cookies,\n      currentScene = _NewArray.currentScene;\n\n  var MainGameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      finish = _useState[0],\n      setFinish = _useState[1];\n\n  var count = 0;\n  var compareArray = [];\n  var check = info.type === 'ascend';\n  var filtered = cookies.sort(function (a, b) {\n    return a.number - b.number;\n  });\n  var reversedArr = check ? filtered : filtered.concat().reverse();\n  var emptyBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  compareArray.push(reversedArr[0]);\n  var cookiesPosition = (0,_Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__.makeArray)(info.amount);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!check && emptyBlock.current) {\n      var style = emptyBlock.current.style;\n      style.flexDirection = 'row-reverse';\n      style.left = '-95px';\n    }\n\n    var _loop = function _loop(i) {\n      var target = document.getElementById(\"id\".concat(i));\n\n      target.ondragstart = function () {\n        return false;\n      };\n\n      var getCoords = function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n          top: box.top + scrollY,\n          left: box.left + scrollX\n        };\n      };\n\n      var moveAt = function moveAt(_ref) {\n        var mouseX = _ref.mouseX,\n            mouseY = _ref.mouseY,\n            top = _ref.top,\n            left = _ref.left,\n            shiftX = _ref.shiftX,\n            shiftY = _ref.shiftY;\n        target.style.left = mouseX - left - shiftX + 'px';\n        target.style.top = mouseY - top - shiftY + 'px';\n      };\n\n      target.ontouchstart = function (event) {\n        moveAt;\n      };\n\n      target.onmousedown = function (event) {\n        var coords = getCoords(target);\n        var shiftX = event.pageX - coords.left;\n        var shiftY = event.pageY - coords.top;\n        var centerTargetW = target.offsetWidth / 2;\n        var centerTargetH = target.offsetHeight / 2;\n\n        var _getCoords = getCoords(MainGameRef.current),\n            top = _getCoords.top,\n            left = _getCoords.left;\n\n        moveAt(event.pageX, event.pageY);\n\n        document.onmousemove = function (mouseEvent) {\n          moveAt(mouseEvent.pageX, mouseEvent.pageY);\n        };\n\n        target.ontouchmove = function (touchEvent) {\n          moveAt(touchEvent.touches[0].pageX, touchEvent.touches[0].pageY);\n        };\n\n        target.onmouseup = function (ev) {\n          var _compareArray$count;\n\n          document.onmousemove = null;\n          var value = target.getAttribute('data-value');\n          var elemBelow = document.elementsFromPoint(ev.pageX, ev.pageY).filter(function (newId) {\n            return newId.id === 'emptyId';\n          })[0];\n          var centerWidth = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientWidth) / 2;\n          var centerHeight = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientHeight) / 2;\n          var data = elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.getAttribute('data-value');\n\n          if (value !== data || +data !== ((_compareArray$count = compareArray[count]) === null || _compareArray$count === void 0 ? void 0 : _compareArray$count.number)) {\n            target.style.top = cookiesPosition[i].yPos + 'px';\n            target.style.left = cookiesPosition[i].xPos + 'px';\n          } else {\n            var xPosElem = getCoords(elemBelow).left;\n            var yPosElem = getCoords(elemBelow).top;\n            var currCenterX = xPosElem - left + centerWidth - centerTargetW;\n            var currCenterY = yPosElem - top + centerHeight - centerTargetH;\n            count++;\n            compareArray.push(reversedArr[count]);\n            target.onmouseup = null;\n            target.style.pointerEvents = 'none';\n            target.style.top = currCenterY + 'px';\n            target.style.left = currCenterX + 'px';\n            if (count === info.amount) setFinish(true);\n          }\n        };\n      };\n    };\n\n    for (var i = 0; i < info.amount; i++) {\n      _loop(i);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().MainGame),\n      ref: MainGameRef,\n      children: [finish && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 28\n      }, this), currentScene.background, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies),\n        children: [cookies.map(function (data, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"id\".concat(index),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies_item),\n            \"data-value\": data.number,\n            style: {\n              top: cookiesPosition[index].yPos,\n              left: cookiesPosition[index].xPos\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              src: data.picture,\n              alt: \"pic\".concat(index),\n              style: {\n                pointerEvents: 'none'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 137,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              style: {\n                pointerEvents: 'none'\n              },\n              children: data.number\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 37\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 33\n          }, _this);\n        }), check ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlock),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0432\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 33\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlockRight),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0443\\u0431\\u044B\\u0432\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 34\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlockWrapper),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: currentScene.emptySlots\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock),\n          ref: emptyBlock,\n          children: Array.from(Array(info.amount)).map(function (_, index) {\n            var _reversedArr$index;\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              \"data-value\": (_reversedArr$index = reversedArr[index]) === null || _reversedArr$index === void 0 ? void 0 : _reversedArr$index.number,\n              id: \"emptyId\",\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock_item)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 37\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 150,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Game, \"7aGcRAaZvZIg2S4rQ100EfiCQos=\");\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQUE7VUFBQTtVQUFBO1FBQUEsUUF0QmI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSFIsZUE4QlE7UUFBSyxTQUFTLEVBQUVQLDZFQUFoQjtRQUFBLHdCQUNJO1VBQUssR0FBRyxFQUFFVyxZQUFZLENBQUN3RjtRQUF2QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREosZUFFSTtVQUFLLFNBQVMsRUFBRW5HLHNFQUFoQjtVQUFtQyxHQUFHLEVBQUUyQixVQUF4QztVQUFBLFVBQ0t5RSxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDM0YsSUFBSSxDQUFDcUIsTUFBTixDQUFoQixFQUErQjZELEdBQS9CLENBQW1DLFVBQUNXLENBQUQsRUFBSVYsS0FBSixFQUFjO1lBQUE7O1lBQzlDLG9CQUNJO2NBRUksb0NBQVlwRSxXQUFXLENBQUNvRSxLQUFELENBQXZCLHVEQUFZLG1CQUFvQnJFLE1BRnBDO2NBR0ksRUFBRSxXQUhOO2NBSUksU0FBUyxFQUFFdkIsMkVBQXNCdUc7WUFKckMsR0FDU1gsS0FEVDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREo7VUFRSCxDQVRBO1FBREw7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUZKO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQTlCUjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFzREg7O0dBMUlRcEY7O0tBQUFBO0FBNElULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUudHN4PzEyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtcclxuICAgIG1ha2VBcnJheVxyXG59IGZyb20gXCIuLi9Db21wb25lbnRzL0RhdGFBc3NldHNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmluaXNoQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRzL0ZpbmlzaENvbXBvbmVudFwiO1xyXG5pbXBvcnQgTmV3QXJyYXkgZnJvbSBcIi4uL0NvbXBvbmVudHMvTmV3QXJyYXlcIjtcclxuaW1wb3J0IGRpcmVjdGlvbiBmcm9tICcuLi9wdWJsaWMvZGlyZWN0aW9uLnN2Zyc7XHJcblxyXG5cclxudHlwZSBDb29raWVzID0ge1xyXG4gICAgbnVtYmVyOiBudW1iZXIsXHJcbiAgICBwaWN0dXJlOiBzdHJpbmdcclxufVxyXG50eXBlIEluZm8gPSB7XHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIHZhbHVlczogbnVtYmVyXHJcbn1cclxudHlwZSBYWVBvcyA9IHtcclxuICAgIHhQb3M6IG51bWJlcixcclxuICAgIHlQb3M6IG51bWJlclxyXG59XHJcbnR5cGUgbW92ZUF0VHlwZSA9IHtcclxuICAgIG1vdXNlWDpudW1iZXIsXHJcbiAgICBtb3VzZVk6bnVtYmVyLFxyXG4gICAgdG9wPzpudW1iZXIsXHJcbiAgICBsZWZ0PzpudW1iZXIsXHJcbiAgICBzaGlmdFg/Om51bWJlcixcclxuICAgIHNoaWZ0WT86bnVtYmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICBjb25zdCB7aW5mbyxjb29raWVzLGN1cnJlbnRTY2VuZX0gPSBOZXdBcnJheSgpXHJcbiAgICBjb25zdCBNYWluR2FtZVJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ZpbmlzaCxzZXRGaW5pc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBsZXQgY291bnQgPSAwXHJcblxyXG4gICAgY29uc3QgY29tcGFyZUFycmF5OiBDb29raWVzW10gPSBbXVxyXG4gICAgY29uc3QgY2hlY2s6IGJvb2xlYW4gPSBpbmZvLnR5cGUgPT09ICdhc2NlbmQnXHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWQ6IENvb2tpZXNbXSA9IGNvb2tpZXMuc29ydCgoYSwgYikgPT4gYS5udW1iZXIgLSBiLm51bWJlcilcclxuICAgIGNvbnN0IHJldmVyc2VkQXJyID0gY2hlY2sgPyBmaWx0ZXJlZCA6IGZpbHRlcmVkLmNvbmNhdCgpLnJldmVyc2UoKVxyXG4gICAgY29uc3QgZW1wdHlCbG9jayA9IHVzZVJlZihudWxsKVxyXG4gICAgY29tcGFyZUFycmF5LnB1c2gocmV2ZXJzZWRBcnJbMF0pXHJcbiAgICBjb25zdCBjb29raWVzUG9zaXRpb246IFhZUG9zW10gPSBtYWtlQXJyYXkoaW5mby5hbW91bnQpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2sgJiYgZW1wdHlCbG9jay5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZW1wdHlCbG9jay5jdXJyZW50LnN0eWxlXHJcbiAgICAgICAgICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnXHJcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSAnLTk1cHgnXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8uYW1vdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkJHtpfWApXHJcbiAgICAgICAgICAgIHRhcmdldC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0Q29vcmRzID0gKGVsZW06IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBib3gudG9wICsgc2Nyb2xsWSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbFhcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgIG1vdmVBdCA9ICh7bW91c2VYLCBtb3VzZVksdG9wLGxlZnQsc2hpZnRYLHNoaWZ0WX06KG1vdmVBdFR5cGUpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IG1vdXNlWCAtIGxlZnQgLSBzaGlmdFggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IG1vdXNlWSAtIHRvcCAtIHNoaWZ0WSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlQXRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbm1vdXNlZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKHRhcmdldClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0WCA9IGV2ZW50LnBhZ2VYIC0gY29vcmRzLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFkgPSBldmVudC5wYWdlWSAtIGNvb3Jkcy50b3BcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclRhcmdldFcgPSB0YXJnZXQub2Zmc2V0V2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyVGFyZ2V0SCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3RvcCxsZWZ0fSA9IGdldENvb3JkcyhNYWluR2FtZVJlZi5jdXJyZW50KVxyXG5cclxuICAgICAgICAgICAgICAgIG1vdmVBdChldmVudC5wYWdlWCwgZXZlbnQucGFnZVkpXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uIChtb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUF0KG1vdXNlRXZlbnQucGFnZVgsIG1vdXNlRXZlbnQucGFnZVkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lm9udG91Y2htb3ZlID0gKHRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb3ZlQXQodG91Y2hFdmVudC50b3VjaGVzWzBdLnBhZ2VYLHRvdWNoRXZlbnQudG91Y2hlc1swXS5wYWdlWSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQub25tb3VzZXVwID0gZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtQmVsb3c6IEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChldi5wYWdlWCwgZXYucGFnZVkpLmZpbHRlcihuZXdJZCA9PiBuZXdJZC5pZCA9PT0gJ2VtcHR5SWQnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlcldpZHRoID0gZWxlbUJlbG93Py5jbGllbnRXaWR0aCAvIDJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJIZWlnaHQgPSBlbGVtQmVsb3c/LmNsaWVudEhlaWdodCAvIDJcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBzdHJpbmcgPSBlbGVtQmVsb3c/LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBkYXRhIHx8ICtkYXRhICE9PSBjb21wYXJlQXJyYXlbY291bnRdPy5udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGNvb2tpZXNQb3NpdGlvbltpXS55UG9zICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IGNvb2tpZXNQb3NpdGlvbltpXS54UG9zICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHhQb3NFbGVtID0gZ2V0Q29vcmRzKGVsZW1CZWxvdykubGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5UG9zRWxlbSA9IGdldENvb3JkcyhlbGVtQmVsb3cpLnRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyQ2VudGVyWDogbnVtYmVyID0geFBvc0VsZW0gLSBsZWZ0ICsgY2VudGVyV2lkdGggLSBjZW50ZXJUYXJnZXRXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJDZW50ZXJZOiBudW1iZXIgPSB5UG9zRWxlbSAtIHRvcCArIGNlbnRlckhlaWdodCAtIGNlbnRlclRhcmdldEhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlQXJyYXkucHVzaChyZXZlcnNlZEFycltjb3VudF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gY3VyckNlbnRlclkgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gY3VyckNlbnRlclggKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSBpbmZvLmFtb3VudCkgc2V0RmluaXNoKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW5HYW1lfSByZWY9e01haW5HYW1lUmVmfT5cclxuICAgICAgICAgICAgICAgIHtmaW5pc2ggJiYgPEZpbmlzaENvbXBvbmVudCAvPn1cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50U2NlbmUuYmFja2dyb3VuZH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvb2tpZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29va2llcy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BpZCR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29va2llc19pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtkYXRhLm51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY29va2llc1Bvc2l0aW9uW2luZGV4XS55UG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGNvb2tpZXNQb3NpdGlvbltpbmRleF0ueFBvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLnBpY3R1cmV9IGFsdD17YHBpYyR7aW5kZXh9YH0gc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnbm9uZSd9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnfX0+e2RhdGEubnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGVjayA/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3Rpb25CbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Qn9C+INCy0L7Qt9GA0LDRgdGC0LDQvdC40Y48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGlyZWN0aW9uLnNyY30gYWx0PXsnZGlyZWN0aW9uJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdGlvbkJsb2NrUmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RpcmVjdGlvbi5zcmN9IGFsdD17J2RpcmVjdGlvbid9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtCf0L4g0YPQsdGL0LLQsNC90LjRjjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlCbG9ja1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFNjZW5lLmVtcHR5U2xvdHN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eUJsb2NrfSByZWY9e2VtcHR5QmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oQXJyYXkoaW5mby5hbW91bnQpKS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e3JldmVyc2VkQXJyW2luZGV4XT8ubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BlbXB0eUlkYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5QmxvY2tfaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJtYWtlQXJyYXkiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZpbmlzaENvbXBvbmVudCIsIk5ld0FycmF5IiwiZGlyZWN0aW9uIiwiR2FtZSIsImluZm8iLCJjb29raWVzIiwiY3VycmVudFNjZW5lIiwiTWFpbkdhbWVSZWYiLCJmaW5pc2giLCJzZXRGaW5pc2giLCJjb3VudCIsImNvbXBhcmVBcnJheSIsImNoZWNrIiwidHlwZSIsImZpbHRlcmVkIiwic29ydCIsImEiLCJiIiwibnVtYmVyIiwicmV2ZXJzZWRBcnIiLCJjb25jYXQiLCJyZXZlcnNlIiwiZW1wdHlCbG9jayIsInB1c2giLCJjb29raWVzUG9zaXRpb24iLCJhbW91bnQiLCJjdXJyZW50Iiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwibGVmdCIsImkiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25kcmFnc3RhcnQiLCJnZXRDb29yZHMiLCJlbGVtIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic2Nyb2xsWSIsInNjcm9sbFgiLCJtb3ZlQXQiLCJtb3VzZVgiLCJtb3VzZVkiLCJzaGlmdFgiLCJzaGlmdFkiLCJvbnRvdWNoc3RhcnQiLCJldmVudCIsIm9ubW91c2Vkb3duIiwiY29vcmRzIiwicGFnZVgiLCJwYWdlWSIsImNlbnRlclRhcmdldFciLCJvZmZzZXRXaWR0aCIsImNlbnRlclRhcmdldEgiLCJvZmZzZXRIZWlnaHQiLCJvbm1vdXNlbW92ZSIsIm1vdXNlRXZlbnQiLCJvbnRvdWNobW92ZSIsInRvdWNoRXZlbnQiLCJ0b3VjaGVzIiwib25tb3VzZXVwIiwiZXYiLCJ2YWx1ZSIsImdldEF0dHJpYnV0ZSIsImVsZW1CZWxvdyIsImVsZW1lbnRzRnJvbVBvaW50IiwiZmlsdGVyIiwibmV3SWQiLCJpZCIsImNlbnRlcldpZHRoIiwiY2xpZW50V2lkdGgiLCJjZW50ZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkYXRhIiwieVBvcyIsInhQb3MiLCJ4UG9zRWxlbSIsInlQb3NFbGVtIiwiY3VyckNlbnRlclgiLCJjdXJyQ2VudGVyWSIsInBvaW50ZXJFdmVudHMiLCJjb250YWluZXIiLCJNYWluR2FtZSIsImJhY2tncm91bmQiLCJtYXAiLCJpbmRleCIsImNvb2tpZXNfaXRlbSIsInBpY3R1cmUiLCJkaXJlY3Rpb25CbG9jayIsInNyYyIsImRpcmVjdGlvbkJsb2NrUmlnaHQiLCJlbXB0eUJsb2NrV3JhcHBlciIsImVtcHR5U2xvdHMiLCJBcnJheSIsImZyb20iLCJfIiwiZW1wdHlCbG9ja19pdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game.tsx\n"));

/***/ })

});