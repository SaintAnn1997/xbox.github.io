/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_sliderTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliderTwo */ "./src/js/modules/sliderTwo.js");
/* harmony import */ var _modules_playVideo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/playVideo */ "./src/js/modules/playVideo.js");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./src/js/modules/dropdownMenu.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"])('.promo__slide', '.promo__slider-wrapper', '.promo__slider-inner', '.promo__slider-prev', '.promo__slider-next');
  Object(_modules_sliderTwo__WEBPACK_IMPORTED_MODULE_1__["default"])('.exclusive-card', '.exclusive__slider-wrapper', '.exclusive__slider-inner', '.exclusive__slider-next');
  Object(_modules_playVideo__WEBPACK_IMPORTED_MODULE_2__["default"])('.promo__slider-button', '.overlay', '.close');
  Object(_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/modules/dropdownMenu.js":
/*!****************************************!*\
  !*** ./src/js/modules/dropdownMenu.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dropdownMenu = () => {
  const menu = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__list-link');
  const submenu = document.querySelectorAll('.menu__submenu');
  function showMenu(i) {
    submenu[i].style.transform = 'scaleY(1)';
  }
  ;
  function hideMenu() {
    submenu.forEach(item => {
      item.style.transform = 'scaleY(0)';
    });
  }
  ;
  menu.addEventListener('mouseover', e => {
    const target = e.target;
    if (target && target.classList.contains('menu__list-link')) {
      menuLink.forEach((item, i) => {
        if (target === item) {
          hideMenu();
          showMenu(i);
        }
      });
    }
  });
  menu.addEventListener('mouseleave', () => {
    hideMenu();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./src/js/modules/playVideo.js":
/*!*************************************!*\
  !*** ./src/js/modules/playVideo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const playVideo = (triggerButton, overlaySelector, closeSelector) => {
  const trigger = document.querySelector(triggerButton);
  const overlay = document.querySelector(overlaySelector);
  const close = document.querySelector(closeSelector);
  function bindTriggers() {
    trigger.addEventListener('click', () => {
      if (document.querySelector('iframe#frame')) {
        overlay.style.display = 'block';
      } else {
        const path = trigger.getAttribute('data-url');
        createPlayer(path);
      }
    });
  }
  ;
  function bindCloseBtn() {
    close.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.stopVideo();
    });
  }
  ;
  function closeOverlay() {
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      player.stopVideo();
    });
  }
  closeOverlay();
  let player;
  function createPlayer(url) {
    player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });
    overlay.style.display = 'block';
  }
  ;
  function init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    bindTriggers();
    bindCloseBtn();
  }
  ;
  try {
    init();
    createPlayer();
    bindTriggers();
    closeOverlay();
  } catch (error) {}
};
/* harmony default export */ __webpack_exports__["default"] = (playVideo);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, prevArrow, nextArrow) => {
  const slides = document.querySelectorAll(slidesSelector);
  const sliderWrapper = document.querySelector(sliderWrapperSelector);
  const slidesField = document.querySelector(slidesFieldSelector);
  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);
  const width = window.getComputedStyle(sliderWrapper).width;
  const dotsArr = [];
  let slideIndex = 1;
  let offset = 0;
  slidesField.style.width = 100 * slides.length + '%';
  slides.forEach(slide => {
    slide.style.width = width;
  });
  const dots = document.createElement('ol');
  dots.classList.add('promo__slider-dots');
  sliderWrapper.append(dots);
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('promo__slider-dot');
    dots.append(dot);
    if (i == 0) {
      dot.classList.add('promo__slider-dot--active');
    }
    dotsArr.push(dot);
  }
  function changeClassDot() {
    dotsArr.forEach(dot => dot.classList.remove('promo__slider-dot--active'));
    dotsArr[slideIndex - 1].classList.add('promo__slider-dot--active');
  }
  ;
  next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    changeClassDot();
  });
  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    changeClassDot();
  });
  dotsArr.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = +width.slice(0, width.length - 2) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;
      changeClassDot();
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/sliderTwo.js":
/*!*************************************!*\
  !*** ./src/js/modules/sliderTwo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliderTwo = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, nextArrow) => {
  const slides = document.querySelectorAll(slidesSelector);
  const sliderWrapper = document.querySelector(sliderWrapperSelector);
  const slidesField = document.querySelector(slidesFieldSelector);
  const next = document.querySelector(nextArrow);
  const exclusiveWidth = window.getComputedStyle(sliderWrapper).width;
  let exclusiveSlideIndex = 1;
  let exclusiveOffset = 1399;
  slidesField.style.width = 100 * slides.length + '%';
  function changeClassSlide() {
    slides.forEach(slide => slide.classList.remove('exclusive-card--active'));
    slides[exclusiveSlideIndex].classList.add('exclusive-card--active');
  }
  ;
  changeClassSlide(exclusiveSlideIndex);
  next.addEventListener('click', () => {
    if (exclusiveSlideIndex === slides.length - 1) {
      exclusiveSlideIndex = 0;
    } else {
      exclusiveSlideIndex++;
    }
    if (exclusiveOffset >= +exclusiveWidth.slice(0, exclusiveWidth.length - 2) * (slides.length - 1)) {
      exclusiveOffset = 0;
    } else {
      exclusiveOffset = exclusiveSlideIndex * +exclusiveWidth.slice(0, exclusiveWidth.length - 2);
    }
    slidesField.style.transform = `translateX(-${exclusiveOffset / slides.length}px)`;
    changeClassSlide(exclusiveSlideIndex);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (sliderTwo);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map