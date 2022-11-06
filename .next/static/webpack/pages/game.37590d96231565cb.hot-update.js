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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../style.module.scss */ \"./style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/DataAssets */ \"./Components/DataAssets.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/FinishComponent */ \"./Components/FinishComponent.tsx\");\n/* harmony import */ var _Components_NewArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/NewArray */ \"./Components/NewArray.tsx\");\n/* harmony import */ var _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/direction.svg */ \"./public/direction.svg\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Users\\\\blino\\\\Desktop\\\\it\\\\draganddropgame\\\\pages\\\\game.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Game() {\n  _s();\n\n  var _this = this;\n\n  var _NewArray = (0,_Components_NewArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      info = _NewArray.info,\n      cookies = _NewArray.cookies,\n      currentScene = _NewArray.currentScene;\n\n  var MainGameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      finish = _useState[0],\n      setFinish = _useState[1];\n\n  var count = 0;\n  var compareArray = [];\n  var check = info.type === 'ascend';\n  var filtered = cookies.sort(function (a, b) {\n    return a.number - b.number;\n  });\n  var reversedArr = check ? filtered : filtered.concat().reverse();\n  var emptyBlock = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  compareArray.push(reversedArr[0]);\n  var cookiesPosition = (0,_Components_DataAssets__WEBPACK_IMPORTED_MODULE_0__.makeArray)(info.amount);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var touchAndMouseStart = ['onmousedown', 'touchstart'];\n    var touchAndMouseMove = ['onmousemove', 'touchmove'];\n    var touchAndMouseEnd = ['onmouseup', 'touchend'];\n\n    if (!check && emptyBlock.current) {\n      var style = emptyBlock.current.style;\n      style.flexDirection = 'row-reverse';\n      style.left = '-95px';\n    }\n\n    var _loop = function _loop(i) {\n      var target = document.getElementById(\"id\".concat(i));\n\n      target.ondragstart = function () {\n        return false;\n      };\n\n      var getCoords = function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n          top: box.top + scrollY,\n          left: box.left + scrollX\n        };\n      };\n\n      touchAndMouseStart.forEach(function (type) {});\n\n      target.onmousedown = function (event) {\n        var coords = getCoords(target);\n        var shiftX = event.pageX - coords.left;\n        var shiftY = event.pageY - coords.top;\n        var centerTargetW = target.offsetWidth / 2;\n        var centerTargetH = target.offsetHeight / 2;\n\n        var _getCoords = getCoords(MainGameRef.current),\n            top = _getCoords.top,\n            left = _getCoords.left;\n\n        function moveAt(mouseX, mouseY) {\n          target.style.left = mouseX - left - shiftX + 'px';\n          target.style.top = mouseY - top - shiftY + 'px';\n        }\n\n        moveAt(event.pageX, event.pageY);\n\n        document.onmousemove = function (mouseEvent) {\n          moveAt(mouseEvent.pageX, mouseEvent.pageY);\n        };\n\n        target.ontouchmove = function (touchEvent) {\n          moveAt(touchEvent.touches[0].pageX, touchEvent.touches[0].pageY);\n        };\n\n        target.onmouseup = function (ev) {\n          var _compareArray$count;\n\n          document.onmousemove = null;\n          var value = target.getAttribute('data-value');\n          var elemBelow = document.elementsFromPoint(ev.pageX, ev.pageY).filter(function (newId) {\n            return newId.id === 'emptyId';\n          })[0];\n          var centerWidth = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientWidth) / 2;\n          var centerHeight = (elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.clientHeight) / 2;\n          var data = elemBelow === null || elemBelow === void 0 ? void 0 : elemBelow.getAttribute('data-value');\n\n          if (value !== data || +data !== ((_compareArray$count = compareArray[count]) === null || _compareArray$count === void 0 ? void 0 : _compareArray$count.number)) {\n            target.style.top = cookiesPosition[i].yPos + 'px';\n            target.style.left = cookiesPosition[i].xPos + 'px';\n          } else {\n            var xPosElem = getCoords(elemBelow).left;\n            var yPosElem = getCoords(elemBelow).top;\n            var currCenterX = xPosElem - left + centerWidth - centerTargetW;\n            var currCenterY = yPosElem - top + centerHeight - centerTargetH;\n            count++;\n            compareArray.push(reversedArr[count]);\n            target.onmouseup = null;\n            target.style.pointerEvents = 'none';\n            target.style.top = currCenterY + 'px';\n            target.style.left = currCenterX + 'px';\n            if (count === info.amount) setFinish(true);\n          }\n        };\n      };\n    };\n\n    for (var i = 0; i < info.amount; i++) {\n      _loop(i);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().MainGame),\n      ref: MainGameRef,\n      children: [finish && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Components_FinishComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 28\n      }, this), currentScene.background, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies),\n        children: [cookies.map(function (data, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            id: \"id\".concat(index),\n            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cookies_item),\n            \"data-value\": data.number,\n            style: {\n              top: cookiesPosition[index].yPos,\n              left: cookiesPosition[index].xPos\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n              src: data.picture,\n              alt: \"pic\".concat(index),\n              style: {\n                pointerEvents: 'none'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 37\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n              style: {\n                pointerEvents: 'none'\n              },\n              children: data.number\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 37\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 33\n          }, _this);\n        }), check ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlock),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0432\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 140,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 139,\n          columnNumber: 33\n        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().directionBlockRight),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n            src: _public_direction_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n            alt: 'direction'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 29\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            children: \"\\u041F\\u043E \\u0443\\u0431\\u044B\\u0432\\u0430\\u043D\\u0438\\u044E\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 29\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 34\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlockWrapper),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"img\", {\n          src: currentScene.emptySlots\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n          className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock),\n          ref: emptyBlock,\n          children: Array.from(Array(info.amount)).map(function (_, index) {\n            var _reversedArr$index;\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              \"data-value\": (_reversedArr$index = reversedArr[index]) === null || _reversedArr$index === void 0 ? void 0 : _reversedArr$index.number,\n              id: \"emptyId\",\n              className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().emptyBlock_item)\n            }, index, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 37\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 147,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 115,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Game, \"7aGcRAaZvZIg2S4rQ100EfiCQos=\");\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBSFIsZUE4QlE7UUFBSyxTQUFTLEVBQUVQLDZFQUFoQjtRQUFBLHdCQUNJO1VBQUssR0FBRyxFQUFFVyxZQUFZLENBQUMyRjtRQUF2QjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREosZUFFSTtVQUFLLFNBQVMsRUFBRXRHLHNFQUFoQjtVQUFtQyxHQUFHLEVBQUUyQixVQUF4QztVQUFBLFVBQ0s0RSxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDOUYsSUFBSSxDQUFDcUIsTUFBTixDQUFoQixFQUErQmdFLEdBQS9CLENBQW1DLFVBQUNXLENBQUQsRUFBSVYsS0FBSixFQUFjO1lBQUE7O1lBQzlDLG9CQUNJO2NBRUksb0NBQVl2RSxXQUFXLENBQUN1RSxLQUFELENBQXZCLHVEQUFZLG1CQUFvQnhFLE1BRnBDO2NBR0ksRUFBRSxXQUhOO2NBSUksU0FBUyxFQUFFdkIsMkVBQXNCMEc7WUFKckMsR0FDU1gsS0FEVDtjQUFBO2NBQUE7Y0FBQTtZQUFBLFNBREo7VUFRSCxDQVRBO1FBREw7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUZKO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQTlCUjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFGSjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBREo7QUFzREg7O0dBNUlRdkY7O0tBQUFBO0FBOElULCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUudHN4PzEyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHtcclxuICAgIG1ha2VBcnJheVxyXG59IGZyb20gXCIuLi9Db21wb25lbnRzL0RhdGFBc3NldHNcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmluaXNoQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRzL0ZpbmlzaENvbXBvbmVudFwiO1xyXG5pbXBvcnQgTmV3QXJyYXkgZnJvbSBcIi4uL0NvbXBvbmVudHMvTmV3QXJyYXlcIjtcclxuaW1wb3J0IGRpcmVjdGlvbiBmcm9tICcuLi9wdWJsaWMvZGlyZWN0aW9uLnN2Zyc7XHJcblxyXG5cclxudHlwZSBDb29raWVzID0ge1xyXG4gICAgbnVtYmVyOiBudW1iZXIsXHJcbiAgICBwaWN0dXJlOiBzdHJpbmdcclxufVxyXG50eXBlIEluZm8gPSB7XHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgICBhbW91bnQ6IG51bWJlcixcclxuICAgIHZhbHVlczogbnVtYmVyXHJcbn1cclxudHlwZSBYWVBvcyA9IHtcclxuICAgIHhQb3M6IG51bWJlcixcclxuICAgIHlQb3M6IG51bWJlclxyXG59XHJcbnR5cGUgc3RhcnRFdmUgID0ge1xyXG4gICAgZXZlbnQ6VG91Y2hFdmVudCB8IE1vdXNlRXZlbnQsXHJcbiAgICB0eXBlOnN0cmluZ1xyXG59XHJcbmZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgICBjb25zdCB7aW5mbyxjb29raWVzLGN1cnJlbnRTY2VuZX0gPSBOZXdBcnJheSgpXHJcbiAgICBjb25zdCBNYWluR2FtZVJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgY29uc3QgW2ZpbmlzaCxzZXRGaW5pc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBsZXQgY291bnQgPSAwXHJcblxyXG4gICAgY29uc3QgY29tcGFyZUFycmF5OiBDb29raWVzW10gPSBbXVxyXG4gICAgY29uc3QgY2hlY2s6IGJvb2xlYW4gPSBpbmZvLnR5cGUgPT09ICdhc2NlbmQnXHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWQ6IENvb2tpZXNbXSA9IGNvb2tpZXMuc29ydCgoYSwgYikgPT4gYS5udW1iZXIgLSBiLm51bWJlcilcclxuICAgIGNvbnN0IHJldmVyc2VkQXJyID0gY2hlY2sgPyBmaWx0ZXJlZCA6IGZpbHRlcmVkLmNvbmNhdCgpLnJldmVyc2UoKVxyXG4gICAgY29uc3QgZW1wdHlCbG9jayA9IHVzZVJlZihudWxsKVxyXG4gICAgY29tcGFyZUFycmF5LnB1c2gocmV2ZXJzZWRBcnJbMF0pXHJcbiAgICBjb25zdCBjb29raWVzUG9zaXRpb246IFhZUG9zW10gPSBtYWtlQXJyYXkoaW5mby5hbW91bnQpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvdWNoQW5kTW91c2VTdGFydCA9IFsnb25tb3VzZWRvd24nLCd0b3VjaHN0YXJ0J11cclxuICAgICAgICBjb25zdCB0b3VjaEFuZE1vdXNlTW92ZSA9IFsnb25tb3VzZW1vdmUnLCd0b3VjaG1vdmUnXVxyXG4gICAgICAgIGNvbnN0IHRvdWNoQW5kTW91c2VFbmQgPSBbJ29ubW91c2V1cCcsJ3RvdWNoZW5kJ11cclxuICAgICAgICBpZiAoIWNoZWNrICYmIGVtcHR5QmxvY2suY3VycmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVtcHR5QmxvY2suY3VycmVudC5zdHlsZVxyXG4gICAgICAgICAgICBzdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdy1yZXZlcnNlJ1xyXG4gICAgICAgICAgICBzdHlsZS5sZWZ0ID0gJy05NXB4J1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvLmFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpZCR7aX1gKVxyXG4gICAgICAgICAgICB0YXJnZXQub25kcmFnc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGdldENvb3JkcyA9IChlbGVtOiBFbGVtZW50KTogeyB0b3A6IG51bWJlciwgbGVmdDogbnVtYmVyIH0gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogYm94LnRvcCArIHNjcm9sbFksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxYXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvdWNoQW5kTW91c2VTdGFydC5mb3JFYWNoKCh0eXBlOnN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQub25tb3VzZWRvd24gPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkcyA9IGdldENvb3Jkcyh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlmdFggPSBldmVudC5wYWdlWCAtIGNvb3Jkcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpZnRZID0gZXZlbnQucGFnZVkgLSBjb29yZHMudG9wXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJUYXJnZXRXID0gdGFyZ2V0Lm9mZnNldFdpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclRhcmdldEggPSB0YXJnZXQub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b3AsbGVmdH0gPSBnZXRDb29yZHMoTWFpbkdhbWVSZWYuY3VycmVudClcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVBdChtb3VzZVgsIG1vdXNlWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gbW91c2VYIC0gbGVmdCAtIHNoaWZ0WCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IG1vdXNlWSAtIHRvcCAtIHNoaWZ0WSArICdweCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb3ZlQXQoZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZKVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAobW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vdmVBdChtb3VzZUV2ZW50LnBhZ2VYLCBtb3VzZUV2ZW50LnBhZ2VZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRhcmdldC5vbnRvdWNobW92ZSA9ICh0b3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW92ZUF0KHRvdWNoRXZlbnQudG91Y2hlc1swXS5wYWdlWCx0b3VjaEV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0Lm9ubW91c2V1cCA9IGZ1bmN0aW9uIChldikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbUJlbG93OiBFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZXYucGFnZVgsIGV2LnBhZ2VZKS5maWx0ZXIobmV3SWQgPT4gbmV3SWQuaWQgPT09ICdlbXB0eUlkJylbMF1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJXaWR0aCA9IGVsZW1CZWxvdz8uY2xpZW50V2lkdGggLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VudGVySGVpZ2h0ID0gZWxlbUJlbG93Py5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YTogc3RyaW5nID0gZWxlbUJlbG93Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gZGF0YSB8fCArZGF0YSAhPT0gY29tcGFyZUFycmF5W2NvdW50XT8ubnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSBjb29raWVzUG9zaXRpb25baV0ueVBvcyArICdweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLmxlZnQgPSBjb29raWVzUG9zaXRpb25baV0ueFBvcyArICdweCdcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB4UG9zRWxlbSA9IGdldENvb3JkcyhlbGVtQmVsb3cpLmxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeVBvc0VsZW0gPSBnZXRDb29yZHMoZWxlbUJlbG93KS50b3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyckNlbnRlclg6IG51bWJlciA9IHhQb3NFbGVtIC0gbGVmdCArIGNlbnRlcldpZHRoIC0gY2VudGVyVGFyZ2V0V1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyQ2VudGVyWTogbnVtYmVyID0geVBvc0VsZW0gLSB0b3AgKyBjZW50ZXJIZWlnaHQgLSBjZW50ZXJUYXJnZXRIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50KytcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZUFycmF5LnB1c2gocmV2ZXJzZWRBcnJbY291bnRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGN1cnJDZW50ZXJZICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUubGVmdCA9IGN1cnJDZW50ZXJYICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gaW5mby5hbW91bnQpIHNldEZpbmlzaCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluR2FtZX0gcmVmPXtNYWluR2FtZVJlZn0+XHJcbiAgICAgICAgICAgICAgICB7ZmluaXNoICYmIDxGaW5pc2hDb21wb25lbnQgLz59XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudFNjZW5lLmJhY2tncm91bmR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb29raWVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Nvb2tpZXMubWFwKChkYXRhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgaWQke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvb2tpZXNfaXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZT17ZGF0YS5udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGNvb2tpZXNQb3NpdGlvbltpbmRleF0ueVBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjb29raWVzUG9zaXRpb25baW5kZXhdLnhQb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5waWN0dXJlfSBhbHQ9e2BwaWMke2luZGV4fWB9IHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnfX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e3BvaW50ZXJFdmVudHM6ICdub25lJ319PntkYXRhLm51bWJlcn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hlY2sgPzxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGlyZWN0aW9uQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0J/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2RpcmVjdGlvbi5zcmN9IGFsdD17J2RpcmVjdGlvbid9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXJlY3Rpb25CbG9ja1JpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkaXJlY3Rpb24uc3JjfSBhbHQ9eydkaXJlY3Rpb24nfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7Qn9C+INGD0LHRi9Cy0LDQvdC40Y48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtcHR5QmxvY2tXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRTY2VuZS5lbXB0eVNsb3RzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1wdHlCbG9ja30gcmVmPXtlbXB0eUJsb2NrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKEFycmF5KGluZm8uYW1vdW50KSkubWFwKChfLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbHVlPXtyZXZlcnNlZEFycltpbmRleF0/Lm51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgZW1wdHlJZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eUJsb2NrX2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsic3R5bGVzIiwibWFrZUFycmF5IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJGaW5pc2hDb21wb25lbnQiLCJOZXdBcnJheSIsImRpcmVjdGlvbiIsIkdhbWUiLCJpbmZvIiwiY29va2llcyIsImN1cnJlbnRTY2VuZSIsIk1haW5HYW1lUmVmIiwiZmluaXNoIiwic2V0RmluaXNoIiwiY291bnQiLCJjb21wYXJlQXJyYXkiLCJjaGVjayIsInR5cGUiLCJmaWx0ZXJlZCIsInNvcnQiLCJhIiwiYiIsIm51bWJlciIsInJldmVyc2VkQXJyIiwiY29uY2F0IiwicmV2ZXJzZSIsImVtcHR5QmxvY2siLCJwdXNoIiwiY29va2llc1Bvc2l0aW9uIiwiYW1vdW50IiwidG91Y2hBbmRNb3VzZVN0YXJ0IiwidG91Y2hBbmRNb3VzZU1vdmUiLCJ0b3VjaEFuZE1vdXNlRW5kIiwiY3VycmVudCIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsImxlZnQiLCJpIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uZHJhZ3N0YXJ0IiwiZ2V0Q29vcmRzIiwiZWxlbSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNjcm9sbFkiLCJzY3JvbGxYIiwiZm9yRWFjaCIsIm9ubW91c2Vkb3duIiwiZXZlbnQiLCJjb29yZHMiLCJzaGlmdFgiLCJwYWdlWCIsInNoaWZ0WSIsInBhZ2VZIiwiY2VudGVyVGFyZ2V0VyIsIm9mZnNldFdpZHRoIiwiY2VudGVyVGFyZ2V0SCIsIm9mZnNldEhlaWdodCIsIm1vdmVBdCIsIm1vdXNlWCIsIm1vdXNlWSIsIm9ubW91c2Vtb3ZlIiwibW91c2VFdmVudCIsIm9udG91Y2htb3ZlIiwidG91Y2hFdmVudCIsInRvdWNoZXMiLCJvbm1vdXNldXAiLCJldiIsInZhbHVlIiwiZ2V0QXR0cmlidXRlIiwiZWxlbUJlbG93IiwiZWxlbWVudHNGcm9tUG9pbnQiLCJmaWx0ZXIiLCJuZXdJZCIsImlkIiwiY2VudGVyV2lkdGgiLCJjbGllbnRXaWR0aCIsImNlbnRlckhlaWdodCIsImNsaWVudEhlaWdodCIsImRhdGEiLCJ5UG9zIiwieFBvcyIsInhQb3NFbGVtIiwieVBvc0VsZW0iLCJjdXJyQ2VudGVyWCIsImN1cnJDZW50ZXJZIiwicG9pbnRlckV2ZW50cyIsImNvbnRhaW5lciIsIk1haW5HYW1lIiwiYmFja2dyb3VuZCIsIm1hcCIsImluZGV4IiwiY29va2llc19pdGVtIiwicGljdHVyZSIsImRpcmVjdGlvbkJsb2NrIiwic3JjIiwiZGlyZWN0aW9uQmxvY2tSaWdodCIsImVtcHR5QmxvY2tXcmFwcGVyIiwiZW1wdHlTbG90cyIsIkFycmF5IiwiZnJvbSIsIl8iLCJlbXB0eUJsb2NrX2l0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n"));

/***/ })

});