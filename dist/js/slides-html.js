/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/elements */ "./src/js/helpers/elements.js");
/* harmony import */ var _controllers_SlideController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/SlideController */ "./src/js/controllers/SlideController.js");
/* harmony import */ var _controllers_TitleController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/TitleController */ "./src/js/controllers/TitleController.js");




_controllers_TitleController__WEBPACK_IMPORTED_MODULE_3__.default.setData('default', _controllers_TitleController__WEBPACK_IMPORTED_MODULE_3__.default.getValue());

function open(e) {
  var slideController = new _controllers_SlideController__WEBPACK_IMPORTED_MODULE_2__.default(e.target);
  if (!slideController.isSlide() || slideController.isSlideActive()) return;
  slideController.activeSlide();
  slideController.deactivateSlidesExceptTheClicked();
  _controllers_TitleController__WEBPACK_IMPORTED_MODULE_3__.default.setValue(_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.h1(e.target).innerText);
}

function close() {
  _controllers_SlideController__WEBPACK_IMPORTED_MODULE_2__.default.naturalSlides();
  _controllers_TitleController__WEBPACK_IMPORTED_MODULE_3__.default.reset();
}

_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.slides.forEach(function (slide) {
  return slide.addEventListener('click', open, false);
});
_helpers_elements__WEBPACK_IMPORTED_MODULE_1__.default.headers.forEach(function (header) {
  return header.addEventListener('click', close);
});

/***/ }),

/***/ "./src/js/controllers/SlideController.js":
/*!***********************************************!*\
  !*** ./src/js/controllers/SlideController.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SlideController; }
/* harmony export */ });
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elements */ "./src/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SlideController = function () {
  function SlideController(slide) {
    _classCallCheck(this, SlideController);

    this.slide = slide;
  }

  _createClass(SlideController, [{
    key: "activeSlide",
    value: function activeSlide(slide) {
      var s = slide || this.slide;
      s.classList.add('slide-active');
      s.classList.remove('slide-deactivate');
    }
  }, {
    key: "deactivateSlide",
    value: function deactivateSlide(slide) {
      var s = slide || this.slide;
      s.classList.add('slide-deactivate');
      s.classList.remove('slide-active');
    }
  }, {
    key: "isSlideActive",
    value: function isSlideActive(slide) {
      var s = slide || this.slide;
      return s.classList.contains('slide-active');
    }
  }, {
    key: "isSlide",
    value: function isSlide(element) {
      var s = element || this.slide;
      return s.classList.contains('slide');
    }
  }, {
    key: "deactivateSlidesExceptTheClicked",
    value: function deactivateSlidesExceptTheClicked(clickedSlide) {
      var _this = this;

      var s = clickedSlide || this.slide;
      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.slides.forEach(function (slide) {
        if (slide.getAttribute('data-slide') !== s.getAttribute('data-slide')) {
          _this.deactivateSlide(slide);
        }
      });
    }
  }], [{
    key: "naturalSlides",
    value: function naturalSlides() {
      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.slides.forEach(function (slide) {
        slide.classList.remove('slide-deactivate');
        slide.classList.remove('slide-active');
      });
    }
  }]);

  return SlideController;
}();



/***/ }),

/***/ "./src/js/controllers/TitleController.js":
/*!***********************************************!*\
  !*** ./src/js/controllers/TitleController.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TitleController; }
/* harmony export */ });
/* harmony import */ var _helpers_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/elements */ "./src/js/helpers/elements.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var TitleController = function () {
  function TitleController() {
    _classCallCheck(this, TitleController);
  }

  _createClass(TitleController, null, [{
    key: "getValue",
    value: function getValue() {
      return _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.innerText;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.innerText = value;
    }
  }, {
    key: "reset",
    value: function reset() {
      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.innerText = _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.dataset.default;
    }
  }, {
    key: "setData",
    value: function setData(data, value) {
      _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.dataset[data] = value;
    }
  }, {
    key: "getData",
    value: function getData(data) {
      return _helpers_elements__WEBPACK_IMPORTED_MODULE_0__.default.title.dataset[data];
    }
  }]);

  return TitleController;
}();



/***/ }),

/***/ "./src/js/helpers/elements.js":
/*!************************************!*\
  !*** ./src/js/helpers/elements.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  get: function get(elm) {
    return document.querySelector(elm);
  },
  getAll: function getAll(elm) {
    return document.querySelectorAll(elm);
  },
  title: document.querySelector('title'),
  container: document.querySelector('.slides'),
  slides: document.querySelectorAll('.slides .slide'),
  headers: document.querySelectorAll('.slides .slide .header'),
  h1: function h1(parent) {
    return parent.querySelector('h1');
  }
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=slides-html.js.map