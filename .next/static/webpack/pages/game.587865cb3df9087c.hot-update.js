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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.module.scss */ \"./style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/DataAssets */ \"./Components/DataAssets.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/FinishComponent */ \"./Components/FinishComponent.tsx\");\n/* harmony import */ var _Components_NewArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/NewArray */ \"./Components/NewArray.tsx\");\n/* harmony import */ var _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/direction.svg */ \"./public/direction.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\blino\\\\Desktop\\\\it\\\\draganddropgame\\\\pages\\\\game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _NewArray = (0,_Components_NewArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      info = _NewArray.info,\n      cookies = _NewArray.cookies,\n      currentScene = _NewArray.currentScene;\n\n  var MainGameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      finish = _useState[0],\n      setFinish = _useState[1];\n\n  var count = 0;\n  var compareArray = [];\n  var check = info.type === 'ascend';\n  var filtered = cookies.sort(function (a, b) {\n    return a.number - b.number;\n  });\n  var reversedArr = check ? filtered : filtered.concat().reverse();\n  var emptyBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  compareArray.push(reversedArr[0]);\n  var cookiesPosition = (0,_Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__.makeArray)(info.amount);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!check && emptyBlock.current) {\n      var style = emptyBlock.current.style;\n      style.flexDirection = 'row-reverse';\n      style.left = '-95px';\n    }\n\n    var _loop = function _loop(i) {\n      var target = document.getElementById(\"id\".concat(i));\n\n      target.ondragstart = function () {\n        return false;\n      };\n\n      var getCoords = function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n          top: box.top + scrollY,\n          left: box.left + scrollX\n        };\n      };\n\n      target.ontouchstart = function (event) {\n        console.log(event);\n      };\n\n      target.onmousedown = function (event) {\n        var coords = getCoords(target);\n        var shiftX = event.pageX - coords.left;\n        var shiftY = event.pageY - coords.top;\n        var centerTargetW = target.offsetWidth / 2;\n        var centerTargetH = target.offsetHeight / 2;\n\n        var _getCoords = getCoords(MainGameRef.current),\n            top = _getCoords.top,\n            left = _getCoords.left;\n\n        function moveAt(mouseX, mouseY) {\n          target.style.left = mouseX - left - shiftX + 'px';\n          target.style.top = mouseY - top - shiftY + 'px';\n        }\n\n        moveAt(event.pageX, event.pageY);\n\n        document.onmousemove = function (mouseEvent) {\n          moveAt(mouseEvent.pageX, mouseEvent.pageY);\n        };\n\n        target.onmouseup = function (ev) {\n          var _compareArray$count;\n\n          document.onmousemove = null;\n          var value = target.getAttribute('data-value');\n          var elemBelow = document.elementsFromPoint(ev.pageX, ev.pageY).filter(function (newId) {\n            return newId.id === 'emptyId';\n          })[0];\n          var centerWidth = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientWidth) / 2;\n          var centerHeight = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientHeight) / 2;\n          var data = elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.getAttribute('data-value');\n\n          if (value !== data || +data !== ((_compareArray$count = compareArray[count]) === null || _compareArray$count === void 0 ? void 0 : _compareArray$count.number)) {\n            target.style.top = cookiesPosition[i].yPos + 'px';\n            target.style.left = cookiesPosition[i].xPos + 'px';\n          } else {\n            var xPosElem = getCoords(elemBelow).left;\n            var yPosElem = getCoords(elemBelow).top;\n            var currCenterX = xPosElem - left + centerWidth - centerTargetW;\n            var currCenterY = yPosElem - top + centerHeight - centerTargetH;\n            count++;\n            compareArray.push(reversedArr[count]);\n            target.onmouseup = null;\n            target.style.pointerEvents = 'none';\n            target.style.top = currCenterY + 'px';\n            target.style.left = currCenterX + 'px';\n            if (count === info.amount) setFinish(true);\n          }\n        };\n      };\n    };\n\n    for (var i = 0; i < info.amount; i++) {\n      _loop(i);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().MainGame),\n      ref: MainGameRef,\n      children: [finish && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 28\n      }, this), currentScene.background, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies),\n        children: [cookies.map(function (data, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"id\".concat(index),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies_item),\n            \"data-value\": data.number,\n            style: {\n              top: cookiesPosition[index].yPos,\n              left: cookiesPosition[index].xPos\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              src: data.picture,\n              alt: \"pic\".concat(index),\n              style: {\n                pointerEvents: 'none'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              style: {\n                pointerEvents: 'none'\n              },\n              children: data.number\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 37\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 33\n          }, _this);\n        }), check ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlock),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0432\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 132,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 33\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlockRight),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0443\\u0431\\u044B\\u0432\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 34\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlockWrapper),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: currentScene.emptySlots\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock),\n          ref: emptyBlock,\n          children: Array.from(Array(info.amount)).map(function (_, index) {\n            var _reversedArr$index;\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              \"data-value\": (_reversedArr$index = reversedArr[index]) === null || _reversedArr$index === void 0 ? void 0 : _reversedArr$index.number,\n              id: \"emptyId\",\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock_item)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 143,\n              columnNumber: 37\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Game, \"7aGcRAaZvZIg2S4rQ100EfiCQos=\");\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7WUFDOUMsb0JBQ0k7Y0FFSSxvQ0FBWW5FLFdBQVcsQ0FBQ21FLEtBQUQsQ0FBdkIsdURBQVksbUJBQW9CcEUsTUFGcEM7Y0FHSSxFQUFFLFdBSE47Y0FJSSxTQUFTLEVBQUV2QiwyRUFBc0JzRztZQUpyQyxHQUNTWCxLQURUO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FESjtVQVFILENBVEE7UUFETDtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBRko7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBOUJSO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUZKO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFESjtBQXNESDs7R0F0SVFuRjs7S0FBQUE7QUF3SVQsK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS50c3g/MTIzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQge1xyXG4gICAgbWFrZUFycmF5XHJcbn0gZnJvbSBcIi4uL0NvbXBvbmVudHMvRGF0YUFzc2V0c1wiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGaW5pc2hDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvRmluaXNoQ29tcG9uZW50XCI7XHJcbmltcG9ydCBOZXdBcnJheSBmcm9tIFwiLi4vQ29tcG9uZW50cy9OZXdBcnJheVwiO1xyXG5pbXBvcnQgZGlyZWN0aW9uIGZyb20gJy4uL3B1YmxpYy9kaXJlY3Rpb24uc3ZnJztcclxuXHJcblxyXG50eXBlIENvb2tpZXMgPSB7XHJcbiAgICBudW1iZXI6IG51bWJlcixcclxuICAgIHBpY3R1cmU6IHN0cmluZ1xyXG59XHJcbnR5cGUgSW5mbyA9IHtcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICAgIGFtb3VudDogbnVtYmVyLFxyXG4gICAgdmFsdWVzOiBudW1iZXJcclxufVxyXG50eXBlIFhZUG9zID0ge1xyXG4gICAgeFBvczogbnVtYmVyLFxyXG4gICAgeVBvczogbnVtYmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICBjb25zdCB7aW5mbyxjb29raWVzLGN1cnJlbnRTY2VuZX0gPSBOZXdBcnJheSgpXHJcbiAgICBjb25zdCBNYWluR2FtZVJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ZpbmlzaCxzZXRGaW5pc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBsZXQgY291bnQgPSAwXHJcblxyXG4gICAgY29uc3QgY29tcGFyZUFycmF5OiBDb29raWVzW10gPSBbXVxyXG4gICAgY29uc3QgY2hlY2s6IGJvb2xlYW4gPSBpbmZvLnR5cGUgPT09ICdhc2NlbmQnXHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWQ6IENvb2tpZXNbXSA9IGNvb2tpZXMuc29ydCgoYSwgYikgPT4gYS5udW1iZXIgLSBiLm51bWJlcilcclxuICAgIGNvbnN0IHJldmVyc2VkQXJyID0gY2hlY2sgPyBmaWx0ZXJlZCA6IGZpbHRlcmVkLmNvbmNhdCgpLnJldmVyc2UoKVxyXG4gICAgY29uc3QgZW1wdHlCbG9jayA9IHVzZVJlZihudWxsKVxyXG4gICAgY29tcGFyZUFycmF5LnB1c2gocmV2ZXJzZWRBcnJbMF0pXHJcbiAgICBjb25zdCBjb29raWVzUG9zaXRpb246IFhZUG9zW10gPSBtYWtlQXJyYXkoaW5mby5hbW91bnQpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghY2hlY2sgJiYgZW1wdHlCbG9jay5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZW1wdHlCbG9jay5jdXJyZW50LnN0eWxlXHJcbiAgICAgICAgICAgIHN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93LXJldmVyc2UnXHJcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgPSAnLTk1cHgnXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8uYW1vdW50OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGlkJHtpfWApXHJcbiAgICAgICAgICAgIHRhcmdldC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgZ2V0Q29vcmRzID0gKGVsZW06IEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIgfSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBib3gudG9wICsgc2Nyb2xsWSxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBib3gubGVmdCArIHNjcm9sbFhcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbnRvdWNoc3RhcnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbm1vdXNlZG93biA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gZ2V0Q29vcmRzKHRhcmdldClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaWZ0WCA9IGV2ZW50LnBhZ2VYIC0gY29vcmRzLmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFkgPSBldmVudC5wYWdlWSAtIGNvb3Jkcy50b3BcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclRhcmdldFcgPSB0YXJnZXQub2Zmc2V0V2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyVGFyZ2V0SCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3RvcCxsZWZ0fSA9IGdldENvb3JkcyhNYWluR2FtZVJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW92ZUF0KG1vdXNlWCwgbW91c2VZKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBtb3VzZVggLSBsZWZ0IC0gc2hpZnRYICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gbW91c2VZIC0gdG9wIC0gc2hpZnRZICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAobW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVBdChtb3VzZUV2ZW50LnBhZ2VYLCBtb3VzZUV2ZW50LnBhZ2VZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZXYpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1CZWxvdzogRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGV2LnBhZ2VYLCBldi5wYWdlWSkuZmlsdGVyKG5ld0lkID0+IG5ld0lkLmlkID09PSAnZW1wdHlJZCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGVyV2lkdGggPSBlbGVtQmVsb3c/LmNsaWVudFdpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlckhlaWdodCA9IGVsZW1CZWxvdz8uY2xpZW50SGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IHN0cmluZyA9IGVsZW1CZWxvdz8uZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGRhdGEgfHwgK2RhdGEgIT09IGNvbXBhcmVBcnJheVtjb3VudF0/Lm51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUudG9wID0gY29va2llc1Bvc2l0aW9uW2ldLnlQb3MgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gY29va2llc1Bvc2l0aW9uW2ldLnhQb3MgKyAncHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeFBvc0VsZW0gPSBnZXRDb29yZHMoZWxlbUJlbG93KS5sZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHlQb3NFbGVtID0gZ2V0Q29vcmRzKGVsZW1CZWxvdykudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJDZW50ZXJYOiBudW1iZXIgPSB4UG9zRWxlbSAtIGxlZnQgKyBjZW50ZXJXaWR0aCAtIGNlbnRlclRhcmdldFdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyckNlbnRlclk6IG51bWJlciA9IHlQb3NFbGVtIC0gdG9wICsgY2VudGVySGVpZ2h0IC0gY2VudGVyVGFyZ2V0SFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBcnJheS5wdXNoKHJldmVyc2VkQXJyW2NvdW50XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBjdXJyQ2VudGVyWSArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBjdXJyQ2VudGVyWCArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnQgPT09IGluZm8uYW1vdW50KSBzZXRGaW5pc2godHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbkdhbWV9IHJlZj17TWFpbkdhbWVSZWZ9PlxyXG4gICAgICAgICAgICAgICAge2ZpbmlzaCAmJiA8RmluaXNoQ29tcG9uZW50IC8+fVxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRTY2VuZS5iYWNrZ3JvdW5kfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29va2llc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb29raWVzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGlkJHtpbmRleH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb29raWVzX2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWU9e2RhdGEubnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjb29raWVzUG9zaXRpb25baW5kZXhdLnlQb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogY29va2llc1Bvc2l0aW9uW2luZGV4XS54UG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEucGljdHVyZX0gYWx0PXtgcGljJHtpbmRleH1gfSBzdHlsZT17e3BvaW50ZXJFdmVudHM6ICdub25lJ319Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnbm9uZSd9fT57ZGF0YS5udW1iZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NoZWNrID88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpcmVjdGlvbkJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPtCf0L4g0LLQvtC30YDQsNGB0YLQsNC90LjRjjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXJlY3Rpb24uc3JjfSBhbHQ9eydkaXJlY3Rpb24nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0aW9uQmxvY2tSaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGlyZWN0aW9uLnNyY30gYWx0PXsnZGlyZWN0aW9uJ30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0J/QviDRg9Cx0YvQstCw0L3QuNGOPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eUJsb2NrV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50U2NlbmUuZW1wdHlTbG90c30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5QmxvY2t9IHJlZj17ZW1wdHlCbG9ja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QXJyYXkuZnJvbShBcnJheShpbmZvLmFtb3VudCkpLm1hcCgoXywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17cmV2ZXJzZWRBcnJbaW5kZXhdPy5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YGVtcHR5SWRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlCbG9ja19pdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbInN0eWxlcyIsIm1ha2VBcnJheSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiRmluaXNoQ29tcG9uZW50IiwiTmV3QXJyYXkiLCJkaXJlY3Rpb24iLCJHYW1lIiwiaW5mbyIsImNvb2tpZXMiLCJjdXJyZW50U2NlbmUiLCJNYWluR2FtZVJlZiIsImZpbmlzaCIsInNldEZpbmlzaCIsImNvdW50IiwiY29tcGFyZUFycmF5IiwiY2hlY2siLCJ0eXBlIiwiZmlsdGVyZWQiLCJzb3J0IiwiYSIsImIiLCJudW1iZXIiLCJyZXZlcnNlZEFyciIsImNvbmNhdCIsInJldmVyc2UiLCJlbXB0eUJsb2NrIiwicHVzaCIsImNvb2tpZXNQb3NpdGlvbiIsImFtb3VudCIsImN1cnJlbnQiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJsZWZ0IiwiaSIsInRhcmdldCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvbmRyYWdzdGFydCIsImdldENvb3JkcyIsImVsZW0iLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzY3JvbGxZIiwic2Nyb2xsWCIsIm9udG91Y2hzdGFydCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm9ubW91c2Vkb3duIiwiY29vcmRzIiwic2hpZnRYIiwicGFnZVgiLCJzaGlmdFkiLCJwYWdlWSIsImNlbnRlclRhcmdldFciLCJvZmZzZXRXaWR0aCIsImNlbnRlclRhcmdldEgiLCJvZmZzZXRIZWlnaHQiLCJtb3ZlQXQiLCJtb3VzZVgiLCJtb3VzZVkiLCJvbm1vdXNlbW92ZSIsIm1vdXNlRXZlbnQiLCJvbm1vdXNldXAiLCJldiIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiZWxlbUJlbG93IiwiZWxlbWVudHNGcm9tUG9pbnQiLCJmaWx0ZXIiLCJuZXdJZCIsImlkIiwiY2VudGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNlbnRlckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJ5UG9zIiwieFBvcyIsInhQb3NFbGVtIiwieVBvc0VsZW0iLCJjdXJyQ2VudGVyWCIsImN1cnJDZW50ZXJZIiwicG9pbnRlckV2ZW50cyIsImNvbnRhaW5lciIsIk1haW5HYW1lIiwiYmFja2dyb3VuZCIsIm1hcCIsImluZGV4IiwiY29va2llc19pdGVtIiwicGljdHVyZSIsImRpcmVjdGlvbkJsb2NrIiwic3JjIiwiZGlyZWN0aW9uQmxvY2tSaWdodCIsImVtcHR5QmxvY2tXcmFwcGVyIiwiZW1wdHlTbG90cyIsIkFycmF5IiwiZnJvbSIsIl8iLCJlbXB0eUJsb2NrX2l0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n"));

/***/ })

});