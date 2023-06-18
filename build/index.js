/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
/* harmony import */ var _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MobileMenu */ "./src/modules/MobileMenu.js");
/* harmony import */ var _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/HeroSlider */ "./src/modules/HeroSlider.js");
/* harmony import */ var _modules_GoogleMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/GoogleMap */ "./src/modules/GoogleMap.js");
/* harmony import */ var _modules_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Search */ "./src/modules/Search.js");


// Our modules / classes





// Instantiate a new object using our modules/classes
const mobileMenu = new _modules_MobileMenu__WEBPACK_IMPORTED_MODULE_1__["default"]();
const heroSlider = new _modules_HeroSlider__WEBPACK_IMPORTED_MODULE_2__["default"]();
const googleMap = new _modules_GoogleMap__WEBPACK_IMPORTED_MODULE_3__["default"]();
const search = new _modules_Search__WEBPACK_IMPORTED_MODULE_4__["default"]();

/***/ }),

/***/ "./src/modules/GoogleMap.js":
/*!**********************************!*\
  !*** ./src/modules/GoogleMap.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class GMap {
  constructor() {
    document.querySelectorAll(".acf-map").forEach(el => {
      this.new_map(el);
    });
  }
  new_map($el) {
    var $markers = $el.querySelectorAll(".marker");
    var args = {
      zoom: 16,
      center: new google.maps.LatLng(0, 0),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($el, args);
    map.markers = [];
    var that = this;

    // add markers
    $markers.forEach(function (x) {
      that.add_marker(x, map);
    });

    // center map
    this.center_map(map);
  } // end new_map

  add_marker($marker, map) {
    var latlng = new google.maps.LatLng($marker.getAttribute("data-lat"), $marker.getAttribute("data-lng"));
    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
    map.markers.push(marker);

    // if marker contains HTML, add it to an infoWindow
    if ($marker.innerHTML) {
      // create info window
      var infowindow = new google.maps.InfoWindow({
        content: $marker.innerHTML
      });

      // show info window when marker is clicked
      google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    }
  } // end add_marker

  center_map(map) {
    var bounds = new google.maps.LatLngBounds();

    // loop through all markers and create bounds
    map.markers.forEach(function (marker) {
      var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(latlng);
    });

    // only 1 marker?
    if (map.markers.length == 1) {
      // set center of map
      map.setCenter(bounds.getCenter());
      map.setZoom(16);
    } else {
      // fit to bounds
      map.fitBounds(bounds);
    }
  } // end center_map
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GMap);

/***/ }),

/***/ "./src/modules/HeroSlider.js":
/*!***********************************!*\
  !*** ./src/modules/HeroSlider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ "./node_modules/@glidejs/glide/dist/glide.esm.js");

class HeroSlider {
  constructor() {
    if (document.querySelector(".hero-slider")) {
      // count how many slides there are
      const dotCount = document.querySelectorAll(".hero-slider__slide").length;

      // Generate the HTML for the navigation dots
      let dotHTML = "";
      for (let i = 0; i < dotCount; i++) {
        dotHTML += `<button class="slider__bullet glide__bullet" data-glide-dir="=${i}"></button>`;
      }

      // Add the dots HTML to the DOM
      document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend", dotHTML);

      // Actually initialize the glide / slider script
      var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__["default"](".hero-slider", {
        type: "carousel",
        perView: 1,
        autoplay: 3000
      });
      glide.mount();
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSlider);

/***/ }),

/***/ "./src/modules/MobileMenu.js":
/*!***********************************!*\
  !*** ./src/modules/MobileMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class MobileMenu {
  constructor() {
    this.menu = document.querySelector(".site-header__menu");
    this.openButton = document.querySelector(".site-header__menu-trigger");
    this.events();
  }
  events() {
    this.openButton.addEventListener("click", () => this.openMenu());
  }
  openMenu() {
    this.openButton.classList.toggle("fa-bars");
    this.openButton.classList.toggle("fa-window-close");
    this.menu.classList.toggle("site-header__menu--active");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/modules/Search.js":
/*!*******************************!*\
  !*** ./src/modules/Search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

class Search {
  //1. Describe the object
  constructor() {
    //get open icon element
    this.openBtn = document.querySelector("#js-search-trigger");

    //get close icon element
    this.closeBtn = document.querySelector(".search-overlay__close");

    //get the parent overlay class
    this.searchOverlay = document.querySelector(".search-overlay");
    /* eslint-disable */
    console.log(...oo_oo(`36dee3e_0`, this.searchOverlay.classList));

    //get search input field
    this.searchInputField = document.querySelector("#search-term");
    /* eslint-disable */
    console.log(...oo_oo(`36dee3e_1`, this.searchInputField.value));

    //get result div container
    this.resultDiv = document.querySelector(".search-overlay__results");
    /* eslint-disable */
    console.log(...oo_oo(`36dee3e_2`, this.resultDiv));

    //get your events here
    this.events();
    this.previousValue;
    //key state varianble
    this.isOpenOverlay = false;
    //state for timeout
    this.timerHistory;
    //spinner state
    this.isSpinner = false;
  }

  //2. events
  // your add listener events that listens for each of the elements in constructor
  events() {
    this.openBtn.addEventListener("click", this.openOverlay.bind(this));
    this.closeBtn.addEventListener("click", this.closeOverlay.bind(this));
    document.addEventListener("keydown", this.keyPressDispatcher.bind(this));
    //tiimer event
    this.searchInputField.addEventListener("keyup", this.typingLogic.bind(this));
  }

  //3. methods
  typingLogic() {
    if (this.searchInputField.value != this.previousValue) {
      clearTimeout(this.timerHistory);
      if (this.searchInputField.value) {
        // add spinner as soon as typing is done, the conditional prevents the spinner from running more than once as the user is manaed. This is done by creating a state to indicate when the spinner has loaded once.
        if (!this.isSpinner) {
          // add spinner as soon as typing is done
          this.resultDiv.innerHTML = "<div class='spinner-loader'> </div>";
          this.isSpinner = true;
        }
        this.timerHistory = setTimeout(this.getResults.bind(this), 2000);
      } else {
        this.resultDiv.innerHTML = "";
        this.isSpinner = false;
      }
    }
    /* eslint-disable */
    console.log(...oo_oo(`36dee3e_3`, this.searchInputField.value));
    this.previousValue = this.searchInputField.value;
  }
  getResults() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default().getJSON('http://localhost/nonsoandre/wp-json/wp/v2/posts?search=' + this.searchInputField.value, data => {
      this.resultDiv.innerHTML = `
                <h2 class='search-overlay__section-title'> General Information </h2>
                
                    ${data.length ? "<ul class='link-list min-list'>" : "<h3> No information matches your search</h3>"}
                    ${data.map(item => `<li><a href='${item.link}'>${item.title.rendered}</a><li>`).join('')}
                    ${data.length ? "</ul>" : ""}
            `;
    });
    //add the search result html structure,
    this.isSpinner = false;
  }
  keyPressDispatcher(e) {
    // function to open or close search area on keypress for S and esc keys
    if (e.keyCode == 83 && this.isOpenOverlay == false && !jquery__WEBPACK_IMPORTED_MODULE_0___default()("input, textarea").is(':focus')) {
      this.openOverlay();
    }
    if (e.keyCode == 27 && this.isOpenOverlay) {
      //for esc key
      this.closeOverlay();
    }
  }
  openOverlay() {
    this.searchOverlay.classList.add("search-overlay--active");
    document.querySelector("body").classList.add("body-no-scroll");

    // set state
    this.isOpenOverlay = true;
  }
  closeOverlay() {
    // console.log(this.searchOverlay.classList);
    // console.log(this.searchOverlay);
    this.searchOverlay.classList.remove("search-overlay--active");
    document.querySelector("body").classList.remove("body-no-scroll");

    // set state 
    this.isOpenOverlay = false;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1ed426=_0x5557;(function(_0x2df77c,_0x31fa60){var _0x35ee17=_0x5557,_0x2bc637=_0x2df77c();while(!![]){try{var _0x2a9880=parseInt(_0x35ee17(0xd9))/0x1*(parseInt(_0x35ee17(0x6a))/0x2)+parseInt(_0x35ee17(0x77))/0x3*(-parseInt(_0x35ee17(0x109))/0x4)+parseInt(_0x35ee17(0x125))/0x5+-parseInt(_0x35ee17(0xae))/0x6*(-parseInt(_0x35ee17(0x103))/0x7)+parseInt(_0x35ee17(0xcf))/0x8+-parseInt(_0x35ee17(0x68))/0x9+parseInt(_0x35ee17(0x145))/0xa*(-parseInt(_0x35ee17(0xa0))/0xb);if(_0x2a9880===_0x31fa60)break;else _0x2bc637['push'](_0x2bc637['shift']());}catch(_0x551c01){_0x2bc637['push'](_0x2bc637['shift']());}}}(_0x5485,0x975f6));var ue=Object[_0x1ed426(0x13d)],te=Object[_0x1ed426(0x122)],he=Object['getOwnPropertyDescriptor'],le=Object[_0x1ed426(0xb7)],fe=Object[_0x1ed426(0xe7)],_e=Object[_0x1ed426(0xf2)][_0x1ed426(0x13f)],pe=(_0x5d2aae,_0x4d4034,_0x5cbc9f,_0x5f3c69)=>{var _0x59dc4a=_0x1ed426;if(_0x4d4034&&typeof _0x4d4034==_0x59dc4a(0x133)||typeof _0x4d4034==_0x59dc4a(0x83)){for(let _0x3c1fbd of le(_0x4d4034))!_e['call'](_0x5d2aae,_0x3c1fbd)&&_0x3c1fbd!==_0x5cbc9f&&te(_0x5d2aae,_0x3c1fbd,{'get':()=>_0x4d4034[_0x3c1fbd],'enumerable':!(_0x5f3c69=he(_0x4d4034,_0x3c1fbd))||_0x5f3c69[_0x59dc4a(0xaf)]});}return _0x5d2aae;},ne=(_0x125e9c,_0x2e16dc,_0x409a60)=>(_0x409a60=_0x125e9c!=null?ue(fe(_0x125e9c)):{},pe(_0x2e16dc||!_0x125e9c||!_0x125e9c['__es'+'Module']?te(_0x409a60,_0x1ed426(0x135),{'value':_0x125e9c,'enumerable':!0x0}):_0x409a60,_0x125e9c)),Q=class{constructor(_0x4d7177,_0x3dd83e,_0x129188,_0x50ff3c){var _0x277e04=_0x1ed426;this[_0x277e04(0xe8)]=_0x4d7177,this[_0x277e04(0xeb)]=_0x3dd83e,this[_0x277e04(0x148)]=_0x129188,this[_0x277e04(0xf8)]=_0x50ff3c,this[_0x277e04(0xbd)]=!0x0,this[_0x277e04(0xbf)]=!0x0,this[_0x277e04(0xa9)]=!0x1,this[_0x277e04(0x11d)]=!0x1,this['_inBrowser']=!!this[_0x277e04(0xe8)][_0x277e04(0xfb)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x277e04(0x66)]=this[_0x277e04(0xcb)]?_0x277e04(0xb6):_0x277e04(0x12f);}async[_0x1ed426(0xbb)](){var _0x749e9=_0x1ed426;if(this[_0x749e9(0x90)])return this['_WebSocketClass'];let _0x48d988;if(this[_0x749e9(0xcb)])_0x48d988=this[_0x749e9(0xe8)][_0x749e9(0xfb)];else{if(this[_0x749e9(0xe8)][_0x749e9(0xe1)]?.[_0x749e9(0x126)])_0x48d988=this[_0x749e9(0xe8)][_0x749e9(0xe1)]?.['_WebSocket'];else try{let _0x329e31=await import(_0x749e9(0xcc));_0x48d988=(await import((await import(_0x749e9(0x10f)))[_0x749e9(0x86)](_0x329e31[_0x749e9(0xb5)](this[_0x749e9(0xf8)],_0x749e9(0x98)))[_0x749e9(0x67)]()))[_0x749e9(0x135)];}catch{try{_0x48d988=require(require(_0x749e9(0xcc))['join'](this[_0x749e9(0xf8)],'ws'));}catch{throw new Error(_0x749e9(0x13a));}}}return this[_0x749e9(0x90)]=_0x48d988,_0x48d988;}[_0x1ed426(0x74)](){var _0x26cda9=_0x1ed426;this['_connecting']||this[_0x26cda9(0xa9)]||this[_0x26cda9(0x120)]>=this['_maxConnectAttemptCount']||(this[_0x26cda9(0xbf)]=!0x1,this[_0x26cda9(0x11d)]=!0x0,this['_connectAttemptCount']++,this[_0x26cda9(0x137)]=new Promise((_0x3ef0cb,_0xecaa3a)=>{var _0x1435a8=_0x26cda9;this['getWebSocketClass']()['then'](_0xd4b86c=>{var _0x55a43f=_0x5557;let _0x4b030b=new _0xd4b86c(_0x55a43f(0x85)+this[_0x55a43f(0xeb)]+':'+this[_0x55a43f(0x148)]);_0x4b030b[_0x55a43f(0xf3)]=()=>{var _0x4e87fc=_0x55a43f;this['_allowedToSend']=!0x1,this[_0x4e87fc(0x12e)](_0x4b030b),this[_0x4e87fc(0x9e)](),_0xecaa3a(new Error(_0x4e87fc(0x104)));},_0x4b030b[_0x55a43f(0xa8)]=()=>{var _0x25e12b=_0x55a43f;this['_inBrowser']||_0x4b030b[_0x25e12b(0xda)]&&_0x4b030b[_0x25e12b(0xda)][_0x25e12b(0x8e)]&&_0x4b030b[_0x25e12b(0xda)][_0x25e12b(0x8e)](),_0x3ef0cb(_0x4b030b);},_0x4b030b[_0x55a43f(0x147)]=()=>{var _0x2ad264=_0x55a43f;this[_0x2ad264(0xbf)]=!0x0,this[_0x2ad264(0x12e)](_0x4b030b),this[_0x2ad264(0x9e)]();},_0x4b030b['onmessage']=_0x2bdc2b=>{var _0x67103e=_0x55a43f;try{_0x2bdc2b&&_0x2bdc2b[_0x67103e(0x140)]&&this[_0x67103e(0xcb)]&&JSON['parse'](_0x2bdc2b['data'])['method']===_0x67103e(0x144)&&this[_0x67103e(0xe8)]['location'][_0x67103e(0x144)]();}catch{}};})[_0x1435a8(0x132)](_0x2aee2b=>(this[_0x1435a8(0xa9)]=!0x0,this[_0x1435a8(0x11d)]=!0x1,this[_0x1435a8(0xbf)]=!0x1,this[_0x1435a8(0xbd)]=!0x0,this[_0x1435a8(0x120)]=0x0,_0x2aee2b))[_0x1435a8(0xe0)](_0x5ca00c=>(this[_0x1435a8(0xa9)]=!0x1,this[_0x1435a8(0x11d)]=!0x1,_0xecaa3a(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x5ca00c&&_0x5ca00c[_0x1435a8(0xcd)])))));}));}[_0x1ed426(0x12e)](_0x1c40b9){var _0x42b9fa=_0x1ed426;this[_0x42b9fa(0xa9)]=!0x1,this['_connecting']=!0x1;try{_0x1c40b9[_0x42b9fa(0x147)]=null,_0x1c40b9['onerror']=null,_0x1c40b9['onopen']=null;}catch{}try{_0x1c40b9[_0x42b9fa(0x97)]<0x2&&_0x1c40b9['close']();}catch{}}[_0x1ed426(0x9e)](){var _0x4bcc9c=_0x1ed426;clearTimeout(this['_reconnectTimeout']),!(this[_0x4bcc9c(0x120)]>=this[_0x4bcc9c(0x93)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x33cce4=_0x4bcc9c;this[_0x33cce4(0xa9)]||this[_0x33cce4(0x11d)]||(this['_connectToHostNow'](),this[_0x33cce4(0x137)]?.[_0x33cce4(0xe0)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x4bcc9c(0xc9)][_0x4bcc9c(0x8e)]&&this[_0x4bcc9c(0xc9)][_0x4bcc9c(0x8e)]());}async[_0x1ed426(0xa6)](_0x17aac4){var _0x4a2fc0=_0x1ed426;try{if(!this[_0x4a2fc0(0xbd)])return;this['_allowedToConnectOnSend']&&this[_0x4a2fc0(0x74)](),(await this[_0x4a2fc0(0x137)])[_0x4a2fc0(0xa6)](JSON[_0x4a2fc0(0x8d)](_0x17aac4));}catch(_0x537f04){console[_0x4a2fc0(0xff)](this[_0x4a2fc0(0x66)]+':\\x20'+(_0x537f04&&_0x537f04[_0x4a2fc0(0xcd)])),this[_0x4a2fc0(0xbd)]=!0x1,this[_0x4a2fc0(0x9e)]();}}};function _0x5557(_0x5b5e19,_0x45edb1){var _0x5485a6=_0x5485();return _0x5557=function(_0x5557ef,_0x1bf23f){_0x5557ef=_0x5557ef-0x64;var _0xdc8cbb=_0x5485a6[_0x5557ef];return _0xdc8cbb;},_0x5557(_0x5b5e19,_0x45edb1);}function V(_0x19af1e,_0x17f227,_0x19de75,_0x2a9439,_0xdd5c3){var _0x576801=_0x1ed426;let _0x3eb5ef=_0x19de75[_0x576801(0xc7)](',')[_0x576801(0x75)](_0x32d7ab=>{var _0x19172b=_0x576801;try{_0x19af1e[_0x19172b(0x7b)]||((_0xdd5c3==='next.js'||_0xdd5c3===_0x19172b(0x12c)||_0xdd5c3===_0x19172b(0x72))&&(_0xdd5c3+=_0x19af1e[_0x19172b(0xe1)]?.[_0x19172b(0xe6)]?.[_0x19172b(0x123)]?_0x19172b(0x128):_0x19172b(0x73)),_0x19af1e[_0x19172b(0x7b)]={'id':+new Date(),'tool':_0xdd5c3});let _0x583223=new Q(_0x19af1e,_0x17f227,_0x32d7ab,_0x2a9439);return _0x583223[_0x19172b(0xa6)]['bind'](_0x583223);}catch(_0x6e73ec){return console[_0x19172b(0xff)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x6e73ec&&_0x6e73ec['message']),()=>{};}});return _0x2c819c=>_0x3eb5ef[_0x576801(0xea)](_0x37ecd0=>_0x37ecd0(_0x2c819c));}function H(_0x195c1d){var _0x249439=_0x1ed426;let _0x10a01e=function(_0x58030f,_0x211a5a){return _0x211a5a-_0x58030f;},_0x22aa73;if(_0x195c1d['performance'])_0x22aa73=function(){var _0x14e5b5=_0x5557;return _0x195c1d['performance'][_0x14e5b5(0xb9)]();};else{if(_0x195c1d['process']&&_0x195c1d[_0x249439(0xe1)][_0x249439(0x95)])_0x22aa73=function(){var _0x2f2767=_0x249439;return _0x195c1d['process'][_0x2f2767(0x95)]();},_0x10a01e=function(_0x5d0218,_0x17c760){return 0x3e8*(_0x17c760[0x0]-_0x5d0218[0x0])+(_0x17c760[0x1]-_0x5d0218[0x1])/0xf4240;};else try{let {performance:_0x109dae}=require(_0x249439(0xaa));_0x22aa73=function(){var _0x4fbbff=_0x249439;return _0x109dae[_0x4fbbff(0xb9)]();};}catch{_0x22aa73=function(){return+new Date();};}}return{'elapsed':_0x10a01e,'timeStamp':_0x22aa73,'now':()=>Date['now']()};}function X(_0x1812b0,_0x390250,_0x451cf6){var _0xe03a72=_0x1ed426;if(_0x1812b0[_0xe03a72(0xd7)]!==void 0x0)return _0x1812b0[_0xe03a72(0xd7)];let _0x2c94a8=_0x1812b0[_0xe03a72(0xe1)]?.[_0xe03a72(0xe6)]?.[_0xe03a72(0x123)];return _0x2c94a8&&_0x451cf6==='nuxt'?_0x1812b0[_0xe03a72(0xd7)]=!0x1:_0x1812b0[_0xe03a72(0xd7)]=_0x2c94a8||!_0x390250||_0x1812b0[_0xe03a72(0x100)]?.['hostname']&&_0x390250[_0xe03a72(0x12a)](_0x1812b0[_0xe03a72(0x100)][_0xe03a72(0x12b)]),_0x1812b0['_consoleNinjaAllowedToStart'];}function _0x5485(){var _0xdea311=['boolean',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"NonsoAndre\",\"172.18.192.1\"],'_getOwnPropertyDescriptor','_setNodeQueryPath','_addProperty','send','setter','onopen','_connected','perf_hooks','_additionalMetadata','_setNodeExpandableState','_isNegativeZero','2106qSDgEG','enumerable','_objectToString','count','length','Buffer','test','join','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','getOwnPropertyNames','_isSet','now','_setNodeLabel','getWebSocketClass','_addObjectProperty','_allowedToSend','allStrLength','_allowedToConnectOnSend','_p_','console','stack','valueOf','push','_isPrimitiveWrapperType','_setNodePermissions','split','hits','_reconnectTimeout','symbol','_inBrowser','path','message','undefined','8325936WCEUUA','_p_name','pop','sort','_type','Map','127.0.0.1','index','_consoleNinjaAllowedToStart','cappedProps','3qKAdVq','_socket','strLength','_setNodeExpressionPath','_addLoadNode','toLowerCase','isExpressionToEvaluate','catch','process','stackTraceLimit','_property','_isArray','get','versions','getPrototypeOf','global','trace','forEach','host','Set','_hasSymbolPropertyOnItsPath','_numberRegExp','unshift','reduceLimits','props','prototype','onerror','sortProps','log','_blacklistedProperty','Error','nodeModules','serialize','_keyStrRegExp','WebSocket','_isUndefined','error','POSITIVE_INFINITY','warn','location','expId','autoExpandPropertyCount','6160xtqdWF','logger\\x20websocket\\x20error','_propertyName','String','_dateToString','getter','3324vShAdb','name','[object\\x20BigInt]','disabledLog','_hasSetOnItsPath','_HTMLAllCollection','url','depth','_addFunctionsNode','NEGATIVE_INFINITY','substr','timeStamp','_getOwnPropertySymbols',\"c:\\\\Users\\\\USER\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.139\\\\node_modules\",'argumentResolutionError','match','noFunctions','getOwnPropertyDescriptor','type','autoExpandPreviousObjects','_connecting','unknown','1686998397673','_connectAttemptCount','time','defineProperty','node','webpack','4097960dTBlWx','_WebSocket','expressionsToEvaluate','\\x20server','totalStrLength','includes','hostname','remix','date','_disposeWebsocket','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','number','set','then','object','autoExpand','default','replace','_ws','value','_isMap','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_cleanNode','indexOf','create','root_exp','hasOwnProperty','data','_isPrimitiveType','nan','_processTreeNodeResult','reload','20TABgNe','slice','onclose','port','_sortProps','_regExpToString','_sendErrorMessage','toString','2976966AIvFkw','resolveGetters','208842zdOoOY','disabledTrace','_Symbol','call','array','elements','_console_ninja','negativeInfinity','astro','\\x20browser','_connectToHostNow','map','isArray','969RtnCbp','[object\\x20Date]','getOwnPropertySymbols','current','_console_ninja_session','level','autoExpandMaxDepth','root_exp_id','capped','parent','_setNodeId','string','function','HTMLAllCollection','ws://','pathToFileURL','_treeNodePropertiesBeforeFullValue','_hasMapOnItsPath','[object\\x20Array]','_quotedRegExp','Boolean','concat','stringify','unref','_capIfString','_WebSocketClass','_p_length','elapsed','_maxConnectAttemptCount','_undefined','hrtime','timeEnd','readyState','ws/index.js','bigint','null','constructor','autoExpandLimit','[object\\x20Set]','_attemptToReconnectShortly','_treeNodePropertiesAfterFullValue','6947974HGqvFH'];_0x5485=function(){return _0xdea311;};return _0x5485();}((_0x30e6bf,_0x3696a3,_0x2f0892,_0x47e51d,_0x193daa,_0x2eb7a6,_0x59e728,_0x186ef9,_0x5f1192)=>{var _0x1892f5=_0x1ed426;if(_0x30e6bf[_0x1892f5(0x70)])return _0x30e6bf[_0x1892f5(0x70)];if(!X(_0x30e6bf,_0x186ef9,_0x193daa))return _0x30e6bf[_0x1892f5(0x70)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x30e6bf[_0x1892f5(0x70)];let _0x141561={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x334b86={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x32d687=H(_0x30e6bf),_0x464df2=_0x32d687[_0x1892f5(0x92)],_0x955419=_0x32d687[_0x1892f5(0x114)],_0x4d82ec=_0x32d687[_0x1892f5(0xb9)],_0x5cdd6a={'hits':{},'ts':{}},_0x561be0=_0x184cbe=>{_0x5cdd6a['ts'][_0x184cbe]=_0x955419();},_0x446363=(_0x830af1,_0x2bf391)=>{var _0x20eba1=_0x1892f5;let _0x2061a0=_0x5cdd6a['ts'][_0x2bf391];if(delete _0x5cdd6a['ts'][_0x2bf391],_0x2061a0){let _0x5cba31=_0x464df2(_0x2061a0,_0x955419());_0x23146b(_0x50854a(_0x20eba1(0x121),_0x830af1,_0x4d82ec(),_0x4a86bd,[_0x5cba31],_0x2bf391));}},_0x3c68de=_0x366b41=>_0x184603=>{var _0x109e19=_0x1892f5;try{_0x561be0(_0x184603),_0x366b41(_0x184603);}finally{_0x30e6bf[_0x109e19(0xc1)]['time']=_0x366b41;}},_0x5ba274=_0x264f53=>_0x449b97=>{var _0x28c1f9=_0x1892f5;try{let [_0x2ce02d,_0x4cbd8b]=_0x449b97[_0x28c1f9(0xc7)](':logPointId:');_0x446363(_0x4cbd8b,_0x2ce02d),_0x264f53(_0x2ce02d);}finally{_0x30e6bf['console'][_0x28c1f9(0x96)]=_0x264f53;}};_0x30e6bf[_0x1892f5(0x70)]={'consoleLog':(_0x5649ce,_0x35bd23)=>{var _0x5ef5d3=_0x1892f5;_0x30e6bf['console']['log'][_0x5ef5d3(0x10a)]!==_0x5ef5d3(0x10c)&&_0x23146b(_0x50854a('log',_0x5649ce,_0x4d82ec(),_0x4a86bd,_0x35bd23));},'consoleTrace':(_0x5d9809,_0x199e8f)=>{var _0x1365ee=_0x1892f5;_0x30e6bf[_0x1365ee(0xc1)][_0x1365ee(0xf5)][_0x1365ee(0x10a)]!==_0x1365ee(0x6b)&&_0x23146b(_0x50854a('trace',_0x5d9809,_0x4d82ec(),_0x4a86bd,_0x199e8f));},'consoleTime':()=>{var _0x1cdd8c=_0x1892f5;_0x30e6bf[_0x1cdd8c(0xc1)][_0x1cdd8c(0x121)]=_0x3c68de(_0x30e6bf[_0x1cdd8c(0xc1)][_0x1cdd8c(0x121)]);},'consoleTimeEnd':()=>{var _0x32c919=_0x1892f5;_0x30e6bf[_0x32c919(0xc1)][_0x32c919(0x96)]=_0x5ba274(_0x30e6bf['console'][_0x32c919(0x96)]);},'autoLog':(_0x3c3147,_0x2970b5)=>{_0x23146b(_0x50854a('log',_0x2970b5,_0x4d82ec(),_0x4a86bd,[_0x3c3147]));},'autoTrace':(_0x5b03b3,_0x1364f6)=>{_0x23146b(_0x50854a('trace',_0x1364f6,_0x4d82ec(),_0x4a86bd,[_0x5b03b3]));},'autoTime':(_0x22968c,_0x1f834b,_0x10a4f3)=>{_0x561be0(_0x10a4f3);},'autoTimeEnd':(_0x194ff5,_0x1b9499,_0x4f4a5d)=>{_0x446363(_0x1b9499,_0x4f4a5d);}};let _0x23146b=V(_0x30e6bf,_0x3696a3,_0x2f0892,_0x47e51d,_0x193daa),_0x4a86bd=_0x30e6bf[_0x1892f5(0x7b)];class _0x15a26f{constructor(){var _0x56ba21=_0x1892f5;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x56ba21(0xee)]=/^(0|[1-9][0-9]*)$/,this[_0x56ba21(0x8a)]=/'([^\\\\']|\\\\')*'/,this[_0x56ba21(0x94)]=_0x30e6bf[_0x56ba21(0xce)],this[_0x56ba21(0x10e)]=_0x30e6bf[_0x56ba21(0x84)],this[_0x56ba21(0xa3)]=Object[_0x56ba21(0x11a)],this['_getOwnPropertyNames']=Object['getOwnPropertyNames'],this[_0x56ba21(0x6c)]=_0x30e6bf['Symbol'],this[_0x56ba21(0x65)]=RegExp[_0x56ba21(0xf2)][_0x56ba21(0x67)],this[_0x56ba21(0x107)]=Date['prototype'][_0x56ba21(0x67)];}[_0x1892f5(0xf9)](_0x29b3a1,_0x479ad9,_0x97e05e,_0x3908f4){var _0x1a8813=_0x1892f5,_0x516ef6=this,_0x5f4688=_0x97e05e[_0x1a8813(0x134)];function _0x5be622(_0x1369f6,_0x514c18,_0x5dda00){var _0x3f8329=_0x1a8813;_0x514c18[_0x3f8329(0x11b)]=_0x3f8329(0x11e),_0x514c18[_0x3f8329(0xfd)]=_0x1369f6[_0x3f8329(0xcd)],_0x3b571e=_0x5dda00[_0x3f8329(0x123)][_0x3f8329(0x7a)],_0x5dda00[_0x3f8329(0x123)][_0x3f8329(0x7a)]=_0x514c18,_0x516ef6[_0x3f8329(0x87)](_0x514c18,_0x5dda00);}if(_0x479ad9&&_0x479ad9[_0x1a8813(0x117)])_0x5be622(_0x479ad9,_0x29b3a1,_0x97e05e);else try{_0x97e05e[_0x1a8813(0x7c)]++,_0x97e05e[_0x1a8813(0x134)]&&_0x97e05e[_0x1a8813(0x11c)][_0x1a8813(0xc4)](_0x479ad9);var _0x31438e,_0x93f11f,_0x392498,_0xe06a5b,_0x2ecee1=[],_0x1e3407=[],_0x2db596,_0x3813ac=this['_type'](_0x479ad9),_0x52be5a=_0x3813ac===_0x1a8813(0x6e),_0x55c66f=!0x1,_0x3e6f2f=_0x3813ac===_0x1a8813(0x83),_0x1e9ddf=this[_0x1a8813(0x141)](_0x3813ac),_0x252c23=this[_0x1a8813(0xc5)](_0x3813ac),_0xc6a6f4=_0x1e9ddf||_0x252c23,_0x3b72bf={},_0x3d5579=0x0,_0x10a14d=!0x1,_0x3b571e,_0x8e907d=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x97e05e[_0x1a8813(0x110)]){if(_0x52be5a){if(_0x93f11f=_0x479ad9[_0x1a8813(0xb2)],_0x93f11f>_0x97e05e[_0x1a8813(0x6f)]){for(_0x392498=0x0,_0xe06a5b=_0x97e05e['elements'],_0x31438e=_0x392498;_0x31438e<_0xe06a5b;_0x31438e++)_0x1e3407['push'](_0x516ef6[_0x1a8813(0xa5)](_0x2ecee1,_0x479ad9,_0x3813ac,_0x31438e,_0x97e05e));_0x29b3a1['cappedElements']=!0x0;}else{for(_0x392498=0x0,_0xe06a5b=_0x93f11f,_0x31438e=_0x392498;_0x31438e<_0xe06a5b;_0x31438e++)_0x1e3407[_0x1a8813(0xc4)](_0x516ef6[_0x1a8813(0xa5)](_0x2ecee1,_0x479ad9,_0x3813ac,_0x31438e,_0x97e05e));}_0x97e05e[_0x1a8813(0x102)]+=_0x1e3407[_0x1a8813(0xb2)];}if(!(_0x3813ac===_0x1a8813(0x9a)||_0x3813ac===_0x1a8813(0xce))&&!_0x1e9ddf&&_0x3813ac!==_0x1a8813(0x106)&&_0x3813ac!==_0x1a8813(0xb3)&&_0x3813ac!==_0x1a8813(0x99)){var _0x2150db=_0x3908f4[_0x1a8813(0xf1)]||_0x97e05e[_0x1a8813(0xf1)];if(this[_0x1a8813(0xb8)](_0x479ad9)?(_0x31438e=0x0,_0x479ad9[_0x1a8813(0xea)](function(_0x44d8e5){var _0x15304d=_0x1a8813;if(_0x3d5579++,_0x97e05e[_0x15304d(0x102)]++,_0x3d5579>_0x2150db){_0x10a14d=!0x0;return;}if(!_0x97e05e['isExpressionToEvaluate']&&_0x97e05e[_0x15304d(0x134)]&&_0x97e05e[_0x15304d(0x102)]>_0x97e05e[_0x15304d(0x9c)]){_0x10a14d=!0x0;return;}_0x1e3407['push'](_0x516ef6[_0x15304d(0xa5)](_0x2ecee1,_0x479ad9,_0x15304d(0xec),_0x31438e++,_0x97e05e,function(_0x419a5f){return function(){return _0x419a5f;};}(_0x44d8e5)));})):this['_isMap'](_0x479ad9)&&_0x479ad9[_0x1a8813(0xea)](function(_0x1129e4,_0x227f2b){var _0x9b912c=_0x1a8813;if(_0x3d5579++,_0x97e05e[_0x9b912c(0x102)]++,_0x3d5579>_0x2150db){_0x10a14d=!0x0;return;}if(!_0x97e05e[_0x9b912c(0xdf)]&&_0x97e05e['autoExpand']&&_0x97e05e[_0x9b912c(0x102)]>_0x97e05e[_0x9b912c(0x9c)]){_0x10a14d=!0x0;return;}var _0x323c2c=_0x227f2b[_0x9b912c(0x67)]();_0x323c2c[_0x9b912c(0xb2)]>0x64&&(_0x323c2c=_0x323c2c[_0x9b912c(0x146)](0x0,0x64)+'...'),_0x1e3407[_0x9b912c(0xc4)](_0x516ef6[_0x9b912c(0xa5)](_0x2ecee1,_0x479ad9,'Map',_0x323c2c,_0x97e05e,function(_0x452140){return function(){return _0x452140;};}(_0x1129e4)));}),!_0x55c66f){try{for(_0x2db596 in _0x479ad9)if(!(_0x52be5a&&_0x8e907d[_0x1a8813(0xb4)](_0x2db596))&&!this[_0x1a8813(0xf6)](_0x479ad9,_0x2db596,_0x97e05e)){if(_0x3d5579++,_0x97e05e[_0x1a8813(0x102)]++,_0x3d5579>_0x2150db){_0x10a14d=!0x0;break;}if(!_0x97e05e['isExpressionToEvaluate']&&_0x97e05e[_0x1a8813(0x134)]&&_0x97e05e[_0x1a8813(0x102)]>_0x97e05e[_0x1a8813(0x9c)]){_0x10a14d=!0x0;break;}_0x1e3407[_0x1a8813(0xc4)](_0x516ef6[_0x1a8813(0xbc)](_0x2ecee1,_0x3b72bf,_0x479ad9,_0x3813ac,_0x2db596,_0x97e05e));}}catch{}if(_0x3b72bf[_0x1a8813(0x91)]=!0x0,_0x3e6f2f&&(_0x3b72bf[_0x1a8813(0xd0)]=!0x0),!_0x10a14d){var _0x26a35d=[][_0x1a8813(0x8c)](this['_getOwnPropertyNames'](_0x479ad9))[_0x1a8813(0x8c)](this['_getOwnPropertySymbols'](_0x479ad9));for(_0x31438e=0x0,_0x93f11f=_0x26a35d[_0x1a8813(0xb2)];_0x31438e<_0x93f11f;_0x31438e++)if(_0x2db596=_0x26a35d[_0x31438e],!(_0x52be5a&&_0x8e907d['test'](_0x2db596[_0x1a8813(0x67)]()))&&!this[_0x1a8813(0xf6)](_0x479ad9,_0x2db596,_0x97e05e)&&!_0x3b72bf[_0x1a8813(0xc0)+_0x2db596[_0x1a8813(0x67)]()]){if(_0x3d5579++,_0x97e05e[_0x1a8813(0x102)]++,_0x3d5579>_0x2150db){_0x10a14d=!0x0;break;}if(!_0x97e05e[_0x1a8813(0xdf)]&&_0x97e05e[_0x1a8813(0x134)]&&_0x97e05e[_0x1a8813(0x102)]>_0x97e05e[_0x1a8813(0x9c)]){_0x10a14d=!0x0;break;}_0x1e3407[_0x1a8813(0xc4)](_0x516ef6[_0x1a8813(0xbc)](_0x2ecee1,_0x3b72bf,_0x479ad9,_0x3813ac,_0x2db596,_0x97e05e));}}}}}if(_0x29b3a1[_0x1a8813(0x11b)]=_0x3813ac,_0xc6a6f4?(_0x29b3a1[_0x1a8813(0x138)]=_0x479ad9[_0x1a8813(0xc3)](),this[_0x1a8813(0x8f)](_0x3813ac,_0x29b3a1,_0x97e05e,_0x3908f4)):_0x3813ac===_0x1a8813(0x12d)?_0x29b3a1[_0x1a8813(0x138)]=this[_0x1a8813(0x107)][_0x1a8813(0x6d)](_0x479ad9):_0x3813ac==='bigint'?_0x29b3a1[_0x1a8813(0x138)]=_0x479ad9[_0x1a8813(0x67)]():_0x3813ac==='RegExp'?_0x29b3a1[_0x1a8813(0x138)]=this[_0x1a8813(0x65)]['call'](_0x479ad9):_0x3813ac===_0x1a8813(0xca)&&this[_0x1a8813(0x6c)]?_0x29b3a1[_0x1a8813(0x138)]=this['_Symbol'][_0x1a8813(0xf2)][_0x1a8813(0x67)][_0x1a8813(0x6d)](_0x479ad9):!_0x97e05e[_0x1a8813(0x110)]&&!(_0x3813ac===_0x1a8813(0x9a)||_0x3813ac==='undefined')&&(delete _0x29b3a1[_0x1a8813(0x138)],_0x29b3a1['capped']=!0x0),_0x10a14d&&(_0x29b3a1[_0x1a8813(0xd8)]=!0x0),_0x3b571e=_0x97e05e[_0x1a8813(0x123)][_0x1a8813(0x7a)],_0x97e05e[_0x1a8813(0x123)][_0x1a8813(0x7a)]=_0x29b3a1,this[_0x1a8813(0x87)](_0x29b3a1,_0x97e05e),_0x1e3407[_0x1a8813(0xb2)]){for(_0x31438e=0x0,_0x93f11f=_0x1e3407[_0x1a8813(0xb2)];_0x31438e<_0x93f11f;_0x31438e++)_0x1e3407[_0x31438e](_0x31438e);}_0x2ecee1[_0x1a8813(0xb2)]&&(_0x29b3a1['props']=_0x2ecee1);}catch(_0x90501d){_0x5be622(_0x90501d,_0x29b3a1,_0x97e05e);}return this['_additionalMetadata'](_0x479ad9,_0x29b3a1),this['_treeNodePropertiesAfterFullValue'](_0x29b3a1,_0x97e05e),_0x97e05e[_0x1a8813(0x123)]['current']=_0x3b571e,_0x97e05e[_0x1a8813(0x7c)]--,_0x97e05e['autoExpand']=_0x5f4688,_0x97e05e[_0x1a8813(0x134)]&&_0x97e05e[_0x1a8813(0x11c)][_0x1a8813(0xd1)](),_0x29b3a1;}[_0x1892f5(0x115)](_0x2a0a12){var _0x1a4a97=_0x1892f5;return Object[_0x1a4a97(0x79)]?Object[_0x1a4a97(0x79)](_0x2a0a12):[];}['_isSet'](_0x42ccb0){var _0x376b60=_0x1892f5;return!!(_0x42ccb0&&_0x30e6bf[_0x376b60(0xec)]&&this[_0x376b60(0xb0)](_0x42ccb0)===_0x376b60(0x9d)&&_0x42ccb0[_0x376b60(0xea)]);}[_0x1892f5(0xf6)](_0x1a6e9d,_0x55d0e0,_0x46ff1d){var _0x493ce8=_0x1892f5;return _0x46ff1d[_0x493ce8(0x119)]?typeof _0x1a6e9d[_0x55d0e0]==_0x493ce8(0x83):!0x1;}[_0x1892f5(0xd3)](_0x94cc1b){var _0x5ebfd9=_0x1892f5,_0x12489d='';return _0x12489d=typeof _0x94cc1b,_0x12489d===_0x5ebfd9(0x133)?this['_objectToString'](_0x94cc1b)===_0x5ebfd9(0x89)?_0x12489d=_0x5ebfd9(0x6e):this[_0x5ebfd9(0xb0)](_0x94cc1b)===_0x5ebfd9(0x78)?_0x12489d=_0x5ebfd9(0x12d):this[_0x5ebfd9(0xb0)](_0x94cc1b)===_0x5ebfd9(0x10b)?_0x12489d='bigint':_0x94cc1b===null?_0x12489d='null':_0x94cc1b[_0x5ebfd9(0x9b)]&&(_0x12489d=_0x94cc1b[_0x5ebfd9(0x9b)][_0x5ebfd9(0x10a)]||_0x12489d):_0x12489d==='undefined'&&this[_0x5ebfd9(0x10e)]&&_0x94cc1b instanceof this[_0x5ebfd9(0x10e)]&&(_0x12489d=_0x5ebfd9(0x84)),_0x12489d;}[_0x1892f5(0xb0)](_0x1920cf){var _0x181de1=_0x1892f5;return Object[_0x181de1(0xf2)][_0x181de1(0x67)][_0x181de1(0x6d)](_0x1920cf);}[_0x1892f5(0x141)](_0x53ea47){var _0x328656=_0x1892f5;return _0x53ea47===_0x328656(0xa1)||_0x53ea47==='string'||_0x53ea47===_0x328656(0x130);}['_isPrimitiveWrapperType'](_0xba19bd){var _0xbab4e=_0x1892f5;return _0xba19bd===_0xbab4e(0x8b)||_0xba19bd===_0xbab4e(0x106)||_0xba19bd==='Number';}['_addProperty'](_0x476b65,_0x3aa00,_0x48f94e,_0x5e2c55,_0x2613dc,_0x58b487){var _0x5054a4=this;return function(_0x49e167){var _0x31e079=_0x5557,_0x1efb48=_0x2613dc[_0x31e079(0x123)][_0x31e079(0x7a)],_0x2fe26f=_0x2613dc[_0x31e079(0x123)]['index'],_0x2bb444=_0x2613dc[_0x31e079(0x123)][_0x31e079(0x80)];_0x2613dc[_0x31e079(0x123)]['parent']=_0x1efb48,_0x2613dc[_0x31e079(0x123)][_0x31e079(0xd6)]=typeof _0x5e2c55=='number'?_0x5e2c55:_0x49e167,_0x476b65['push'](_0x5054a4[_0x31e079(0xe3)](_0x3aa00,_0x48f94e,_0x5e2c55,_0x2613dc,_0x58b487)),_0x2613dc[_0x31e079(0x123)][_0x31e079(0x80)]=_0x2bb444,_0x2613dc[_0x31e079(0x123)][_0x31e079(0xd6)]=_0x2fe26f;};}[_0x1892f5(0xbc)](_0x282227,_0x576ac4,_0x4d9985,_0x107336,_0x135ade,_0x261f71,_0x365985){var _0x4da769=_0x1892f5,_0x35815a=this;return _0x576ac4['_p_'+_0x135ade[_0x4da769(0x67)]()]=!0x0,function(_0x50e9b2){var _0x988599=_0x4da769,_0x568df8=_0x261f71['node'][_0x988599(0x7a)],_0x19a641=_0x261f71['node'][_0x988599(0xd6)],_0xe78202=_0x261f71[_0x988599(0x123)]['parent'];_0x261f71[_0x988599(0x123)]['parent']=_0x568df8,_0x261f71[_0x988599(0x123)]['index']=_0x50e9b2,_0x282227[_0x988599(0xc4)](_0x35815a[_0x988599(0xe3)](_0x4d9985,_0x107336,_0x135ade,_0x261f71,_0x365985)),_0x261f71[_0x988599(0x123)][_0x988599(0x80)]=_0xe78202,_0x261f71[_0x988599(0x123)][_0x988599(0xd6)]=_0x19a641;};}[_0x1892f5(0xe3)](_0x4817e4,_0x26d9b7,_0x56d694,_0x334452,_0x391ebd){var _0x569be0=_0x1892f5,_0x24a194=this;_0x391ebd||(_0x391ebd=function(_0x46cd54,_0x1bebc4){return _0x46cd54[_0x1bebc4];});var _0x139aea=_0x56d694[_0x569be0(0x67)](),_0x284ba3=_0x334452[_0x569be0(0x127)]||{},_0x2812c6=_0x334452[_0x569be0(0x110)],_0x5c588b=_0x334452[_0x569be0(0xdf)];try{var _0xeec8d4=this[_0x569be0(0x139)](_0x4817e4),_0x577b17=_0x139aea;_0xeec8d4&&_0x577b17[0x0]==='\\x27'&&(_0x577b17=_0x577b17['substr'](0x1,_0x577b17[_0x569be0(0xb2)]-0x2));var _0x24408d=_0x334452['expressionsToEvaluate']=_0x284ba3[_0x569be0(0xc0)+_0x577b17];_0x24408d&&(_0x334452['depth']=_0x334452[_0x569be0(0x110)]+0x1),_0x334452['isExpressionToEvaluate']=!!_0x24408d;var _0x113987=typeof _0x56d694=='symbol',_0x3da92c={'name':_0x113987||_0xeec8d4?_0x139aea:this[_0x569be0(0x105)](_0x139aea)};if(_0x113987&&(_0x3da92c[_0x569be0(0xca)]=!0x0),!(_0x26d9b7===_0x569be0(0x6e)||_0x26d9b7===_0x569be0(0xf7))){var _0x2247b8=this[_0x569be0(0xa3)](_0x4817e4,_0x56d694);if(_0x2247b8&&(_0x2247b8[_0x569be0(0x131)]&&(_0x3da92c[_0x569be0(0xa7)]=!0x0),_0x2247b8[_0x569be0(0xe5)]&&!_0x24408d&&!_0x334452[_0x569be0(0x69)]))return _0x3da92c[_0x569be0(0x108)]=!0x0,this[_0x569be0(0x143)](_0x3da92c,_0x334452),_0x3da92c;}var _0x488ac2;try{_0x488ac2=_0x391ebd(_0x4817e4,_0x56d694);}catch(_0x309798){return _0x3da92c={'name':_0x139aea,'type':_0x569be0(0x11e),'error':_0x309798[_0x569be0(0xcd)]},this[_0x569be0(0x143)](_0x3da92c,_0x334452),_0x3da92c;}var _0x69bd5a=this[_0x569be0(0xd3)](_0x488ac2),_0x5fb8f6=this['_isPrimitiveType'](_0x69bd5a);if(_0x3da92c['type']=_0x69bd5a,_0x5fb8f6)this[_0x569be0(0x143)](_0x3da92c,_0x334452,_0x488ac2,function(){var _0x361b33=_0x569be0;_0x3da92c['value']=_0x488ac2['valueOf'](),!_0x24408d&&_0x24a194[_0x361b33(0x8f)](_0x69bd5a,_0x3da92c,_0x334452,{});});else{var _0x392f62=_0x334452[_0x569be0(0x134)]&&_0x334452[_0x569be0(0x7c)]<_0x334452[_0x569be0(0x7d)]&&_0x334452['autoExpandPreviousObjects'][_0x569be0(0x13c)](_0x488ac2)<0x0&&_0x69bd5a!=='function'&&_0x334452[_0x569be0(0x102)]<_0x334452['autoExpandLimit'];_0x392f62||_0x334452[_0x569be0(0x7c)]<_0x2812c6||_0x24408d?(this[_0x569be0(0xf9)](_0x3da92c,_0x488ac2,_0x334452,_0x24408d||{}),this[_0x569be0(0xab)](_0x488ac2,_0x3da92c)):this[_0x569be0(0x143)](_0x3da92c,_0x334452,_0x488ac2,function(){var _0x11708b=_0x569be0;_0x69bd5a===_0x11708b(0x9a)||_0x69bd5a===_0x11708b(0xce)||(delete _0x3da92c[_0x11708b(0x138)],_0x3da92c[_0x11708b(0x7f)]=!0x0);});}return _0x3da92c;}finally{_0x334452[_0x569be0(0x127)]=_0x284ba3,_0x334452[_0x569be0(0x110)]=_0x2812c6,_0x334452[_0x569be0(0xdf)]=_0x5c588b;}}['_capIfString'](_0x45d868,_0xbbd9d,_0x59cce0,_0x2ebb70){var _0xc2a268=_0x1892f5,_0x311fc2=_0x2ebb70[_0xc2a268(0xdb)]||_0x59cce0[_0xc2a268(0xdb)];if((_0x45d868===_0xc2a268(0x82)||_0x45d868===_0xc2a268(0x106))&&_0xbbd9d[_0xc2a268(0x138)]){let _0x155986=_0xbbd9d[_0xc2a268(0x138)][_0xc2a268(0xb2)];_0x59cce0[_0xc2a268(0xbe)]+=_0x155986,_0x59cce0['allStrLength']>_0x59cce0['totalStrLength']?(_0xbbd9d['capped']='',delete _0xbbd9d[_0xc2a268(0x138)]):_0x155986>_0x311fc2&&(_0xbbd9d[_0xc2a268(0x7f)]=_0xbbd9d['value']['substr'](0x0,_0x311fc2),delete _0xbbd9d[_0xc2a268(0x138)]);}}[_0x1892f5(0x139)](_0x68ab2d){var _0x2239b6=_0x1892f5;return!!(_0x68ab2d&&_0x30e6bf[_0x2239b6(0xd4)]&&this[_0x2239b6(0xb0)](_0x68ab2d)==='[object\\x20Map]'&&_0x68ab2d[_0x2239b6(0xea)]);}[_0x1892f5(0x105)](_0x2f4cc3){var _0x2869cb=_0x1892f5;if(_0x2f4cc3['match'](/^\\d+$/))return _0x2f4cc3;var _0x19daf4;try{_0x19daf4=JSON[_0x2869cb(0x8d)](''+_0x2f4cc3);}catch{_0x19daf4='\\x22'+this[_0x2869cb(0xb0)](_0x2f4cc3)+'\\x22';}return _0x19daf4[_0x2869cb(0x118)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x19daf4=_0x19daf4[_0x2869cb(0x113)](0x1,_0x19daf4[_0x2869cb(0xb2)]-0x2):_0x19daf4=_0x19daf4['replace'](/'/g,'\\x5c\\x27')[_0x2869cb(0x136)](/\\\\\"/g,'\\x22')[_0x2869cb(0x136)](/(^\"|\"$)/g,'\\x27'),_0x19daf4;}[_0x1892f5(0x143)](_0x39ef62,_0x29815e,_0x23ab12,_0x3ada0f){var _0x155113=_0x1892f5;this['_treeNodePropertiesBeforeFullValue'](_0x39ef62,_0x29815e),_0x3ada0f&&_0x3ada0f(),this[_0x155113(0xab)](_0x23ab12,_0x39ef62),this[_0x155113(0x9f)](_0x39ef62,_0x29815e);}['_treeNodePropertiesBeforeFullValue'](_0x47e3cb,_0x32aec9){var _0x4b53db=_0x1892f5;this[_0x4b53db(0x81)](_0x47e3cb,_0x32aec9),this[_0x4b53db(0xa4)](_0x47e3cb,_0x32aec9),this['_setNodeExpressionPath'](_0x47e3cb,_0x32aec9),this[_0x4b53db(0xc6)](_0x47e3cb,_0x32aec9);}[_0x1892f5(0x81)](_0x155aa1,_0x24c5fa){}[_0x1892f5(0xa4)](_0xc5b151,_0x56f20b){}['_setNodeLabel'](_0x17331c,_0x16dc6f){}[_0x1892f5(0xfc)](_0x2c6850){var _0x59dfa0=_0x1892f5;return _0x2c6850===this[_0x59dfa0(0x94)];}['_treeNodePropertiesAfterFullValue'](_0x13693f,_0x720c77){var _0x1ac85c=_0x1892f5;this['_setNodeLabel'](_0x13693f,_0x720c77),this[_0x1ac85c(0xac)](_0x13693f),_0x720c77[_0x1ac85c(0xf4)]&&this[_0x1ac85c(0x64)](_0x13693f),this[_0x1ac85c(0x111)](_0x13693f,_0x720c77),this[_0x1ac85c(0xdd)](_0x13693f,_0x720c77),this[_0x1ac85c(0x13b)](_0x13693f);}[_0x1892f5(0xab)](_0x3a3afb,_0x42bb3b){var _0x182f65=_0x1892f5;try{_0x3a3afb&&typeof _0x3a3afb[_0x182f65(0xb2)]==_0x182f65(0x130)&&(_0x42bb3b[_0x182f65(0xb2)]=_0x3a3afb[_0x182f65(0xb2)]);}catch{}if(_0x42bb3b[_0x182f65(0x11b)]===_0x182f65(0x130)||_0x42bb3b[_0x182f65(0x11b)]==='Number'){if(isNaN(_0x42bb3b[_0x182f65(0x138)]))_0x42bb3b[_0x182f65(0x142)]=!0x0,delete _0x42bb3b[_0x182f65(0x138)];else switch(_0x42bb3b[_0x182f65(0x138)]){case Number[_0x182f65(0xfe)]:_0x42bb3b['positiveInfinity']=!0x0,delete _0x42bb3b[_0x182f65(0x138)];break;case Number[_0x182f65(0x112)]:_0x42bb3b[_0x182f65(0x71)]=!0x0,delete _0x42bb3b['value'];break;case 0x0:this[_0x182f65(0xad)](_0x42bb3b[_0x182f65(0x138)])&&(_0x42bb3b['negativeZero']=!0x0);break;}}else _0x42bb3b[_0x182f65(0x11b)]===_0x182f65(0x83)&&typeof _0x3a3afb['name']==_0x182f65(0x82)&&_0x3a3afb[_0x182f65(0x10a)]&&_0x42bb3b[_0x182f65(0x10a)]&&_0x3a3afb[_0x182f65(0x10a)]!==_0x42bb3b[_0x182f65(0x10a)]&&(_0x42bb3b['funcName']=_0x3a3afb['name']);}[_0x1892f5(0xad)](_0x548bcf){var _0x1e885d=_0x1892f5;return 0x1/_0x548bcf===Number[_0x1e885d(0x112)];}['_sortProps'](_0x2d4d92){var _0x3d169c=_0x1892f5;!_0x2d4d92['props']||!_0x2d4d92[_0x3d169c(0xf1)][_0x3d169c(0xb2)]||_0x2d4d92[_0x3d169c(0x11b)]===_0x3d169c(0x6e)||_0x2d4d92['type']==='Map'||_0x2d4d92[_0x3d169c(0x11b)]===_0x3d169c(0xec)||_0x2d4d92['props'][_0x3d169c(0xd2)](function(_0x4a79f8,_0x20d663){var _0x7a6cc3=_0x3d169c,_0x76b4cb=_0x4a79f8[_0x7a6cc3(0x10a)][_0x7a6cc3(0xde)](),_0x4d7d49=_0x20d663[_0x7a6cc3(0x10a)][_0x7a6cc3(0xde)]();return _0x76b4cb<_0x4d7d49?-0x1:_0x76b4cb>_0x4d7d49?0x1:0x0;});}[_0x1892f5(0x111)](_0x5a48e3,_0x25996e){var _0x1e322f=_0x1892f5;if(!(_0x25996e[_0x1e322f(0x119)]||!_0x5a48e3[_0x1e322f(0xf1)]||!_0x5a48e3[_0x1e322f(0xf1)][_0x1e322f(0xb2)])){for(var _0x4832ea=[],_0x1cf51b=[],_0x4c9ed6=0x0,_0x5dd1f5=_0x5a48e3[_0x1e322f(0xf1)]['length'];_0x4c9ed6<_0x5dd1f5;_0x4c9ed6++){var _0xb07c7d=_0x5a48e3[_0x1e322f(0xf1)][_0x4c9ed6];_0xb07c7d[_0x1e322f(0x11b)]==='function'?_0x4832ea[_0x1e322f(0xc4)](_0xb07c7d):_0x1cf51b[_0x1e322f(0xc4)](_0xb07c7d);}if(!(!_0x1cf51b[_0x1e322f(0xb2)]||_0x4832ea[_0x1e322f(0xb2)]<=0x1)){_0x5a48e3[_0x1e322f(0xf1)]=_0x1cf51b;var _0x456c5c={'functionsNode':!0x0,'props':_0x4832ea};this[_0x1e322f(0x81)](_0x456c5c,_0x25996e),this[_0x1e322f(0xba)](_0x456c5c,_0x25996e),this[_0x1e322f(0xac)](_0x456c5c),this[_0x1e322f(0xc6)](_0x456c5c,_0x25996e),_0x456c5c['id']+='\\x20f',_0x5a48e3[_0x1e322f(0xf1)][_0x1e322f(0xef)](_0x456c5c);}}}['_addLoadNode'](_0x2cfbc9,_0x5e9d5f){}['_setNodeExpandableState'](_0x435695){}[_0x1892f5(0xe4)](_0x46d04b){var _0x27e676=_0x1892f5;return Array[_0x27e676(0x76)](_0x46d04b)||typeof _0x46d04b=='object'&&this[_0x27e676(0xb0)](_0x46d04b)===_0x27e676(0x89);}[_0x1892f5(0xc6)](_0x150cbc,_0x19e593){}['_cleanNode'](_0x1975a1){var _0x3650ab=_0x1892f5;delete _0x1975a1[_0x3650ab(0xed)],delete _0x1975a1[_0x3650ab(0x10d)],delete _0x1975a1[_0x3650ab(0x88)];}[_0x1892f5(0xdc)](_0x2a90fe,_0x22fa45){}['_propertyAccessor'](_0x4586d6){var _0x526fa2=_0x1892f5;return _0x4586d6?_0x4586d6['match'](this['_numberRegExp'])?'['+_0x4586d6+']':_0x4586d6[_0x526fa2(0x118)](this[_0x526fa2(0xfa)])?'.'+_0x4586d6:_0x4586d6[_0x526fa2(0x118)](this[_0x526fa2(0x8a)])?'['+_0x4586d6+']':'[\\x27'+_0x4586d6+'\\x27]':'';}}let _0x2b1ebd=new _0x15a26f();function _0x50854a(_0x2e8e1a,_0x1612fe,_0x56bfd1,_0x233627,_0x2614ed,_0x4365a2){var _0x781126=_0x1892f5;let _0x372102,_0x3649c1;try{_0x3649c1=_0x955419(),_0x372102=_0x5cdd6a[_0x1612fe],!_0x372102||_0x3649c1-_0x372102['ts']>0x1f4&&_0x372102[_0x781126(0xb1)]&&_0x372102['time']/_0x372102['count']<0x64?(_0x5cdd6a[_0x1612fe]=_0x372102={'count':0x0,'time':0x0,'ts':_0x3649c1},_0x5cdd6a[_0x781126(0xc8)]={}):_0x3649c1-_0x5cdd6a[_0x781126(0xc8)]['ts']>0x32&&_0x5cdd6a[_0x781126(0xc8)][_0x781126(0xb1)]&&_0x5cdd6a['hits'][_0x781126(0x121)]/_0x5cdd6a['hits'][_0x781126(0xb1)]<0x64&&(_0x5cdd6a['hits']={});let _0x511c95=[],_0x598b94=_0x372102[_0x781126(0xf0)]||_0x5cdd6a[_0x781126(0xc8)][_0x781126(0xf0)]?_0x334b86:_0x141561,_0x56d8e3=_0xec0ed4=>{var _0x2aecff=_0x781126;let _0x4135b8={};return _0x4135b8[_0x2aecff(0xf1)]=_0xec0ed4['props'],_0x4135b8[_0x2aecff(0x6f)]=_0xec0ed4[_0x2aecff(0x6f)],_0x4135b8[_0x2aecff(0xdb)]=_0xec0ed4[_0x2aecff(0xdb)],_0x4135b8['totalStrLength']=_0xec0ed4[_0x2aecff(0x129)],_0x4135b8[_0x2aecff(0x9c)]=_0xec0ed4[_0x2aecff(0x9c)],_0x4135b8[_0x2aecff(0x7d)]=_0xec0ed4[_0x2aecff(0x7d)],_0x4135b8[_0x2aecff(0xf4)]=!0x1,_0x4135b8[_0x2aecff(0x119)]=!_0x5f1192,_0x4135b8['depth']=0x1,_0x4135b8[_0x2aecff(0x7c)]=0x0,_0x4135b8[_0x2aecff(0x101)]=_0x2aecff(0x7e),_0x4135b8['rootExpression']=_0x2aecff(0x13e),_0x4135b8[_0x2aecff(0x134)]=!0x0,_0x4135b8[_0x2aecff(0x11c)]=[],_0x4135b8[_0x2aecff(0x102)]=0x0,_0x4135b8[_0x2aecff(0x69)]=!0x0,_0x4135b8[_0x2aecff(0xbe)]=0x0,_0x4135b8[_0x2aecff(0x123)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4135b8;};for(var _0x209485=0x0;_0x209485<_0x2614ed[_0x781126(0xb2)];_0x209485++)_0x511c95[_0x781126(0xc4)](_0x2b1ebd['serialize']({'timeNode':_0x2e8e1a==='time'||void 0x0},_0x2614ed[_0x209485],_0x56d8e3(_0x598b94),{}));if(_0x2e8e1a===_0x781126(0xe9)){let _0x456a0e=Error[_0x781126(0xe2)];try{Error[_0x781126(0xe2)]=0x1/0x0,_0x511c95[_0x781126(0xc4)](_0x2b1ebd[_0x781126(0xf9)]({'stackNode':!0x0},new Error()[_0x781126(0xc2)],_0x56d8e3(_0x598b94),{'strLength':0x1/0x0}));}finally{Error[_0x781126(0xe2)]=_0x456a0e;}}return{'method':_0x781126(0xf5),'version':_0x2eb7a6,'args':[{'ts':_0x56bfd1,'session':_0x233627,'args':_0x511c95,'id':_0x1612fe,'context':_0x4365a2}]};}catch(_0x5d55dd){return{'method':_0x781126(0xf5),'version':_0x2eb7a6,'args':[{'ts':_0x56bfd1,'session':_0x233627,'args':[{'type':_0x781126(0x11e),'error':_0x5d55dd&&_0x5d55dd[_0x781126(0xcd)]}],'id':_0x1612fe,'context':_0x4365a2}]};}finally{try{if(_0x372102&&_0x3649c1){let _0x1cee0a=_0x955419();_0x372102[_0x781126(0xb1)]++,_0x372102[_0x781126(0x121)]+=_0x464df2(_0x3649c1,_0x1cee0a),_0x372102['ts']=_0x1cee0a,_0x5cdd6a[_0x781126(0xc8)]['count']++,_0x5cdd6a[_0x781126(0xc8)]['time']+=_0x464df2(_0x3649c1,_0x1cee0a),_0x5cdd6a['hits']['ts']=_0x1cee0a,(_0x372102[_0x781126(0xb1)]>0x32||_0x372102[_0x781126(0x121)]>0x64)&&(_0x372102['reduceLimits']=!0x0),(_0x5cdd6a[_0x781126(0xc8)][_0x781126(0xb1)]>0x3e8||_0x5cdd6a[_0x781126(0xc8)][_0x781126(0x121)]>0x12c)&&(_0x5cdd6a[_0x781126(0xc8)]['reduceLimits']=!0x0);}}catch{}}}return _0x30e6bf[_0x1892f5(0x70)];})(globalThis,_0x1ed426(0xd5),'64057',_0x1ed426(0x116),_0x1ed426(0x124),'1.0.0',_0x1ed426(0x11f),_0x1ed426(0xa2),'');");
  } catch (e) {}
}
;
function oo_oo(i, ...v) {
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i, ...v) {
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = window["jQuery"];

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Glide)
/* harmony export */ });
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

var defaults = {
  /**
   * Type of the movement.
   *
   * Available types:
   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
   * `carousel` - Changes slides without starting over when it reaches the first or last slide.
   *
   * @type {String}
   */
  type: 'slider',

  /**
   * Start at specific slide number defined with zero-based index.
   *
   * @type {Number}
   */
  startAt: 0,

  /**
   * A number of slides visible on the single viewport.
   *
   * @type {Number}
   */
  perView: 1,

  /**
   * Focus currently active slide at a specified position in the track.
   *
   * Available inputs:
   * `center` - Current slide will be always focused at the center of a track.
   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
   *
   * @type {String|Number}
   */
  focusAt: 0,

  /**
   * A size of the gap added between slides.
   *
   * @type {Number}
   */
  gap: 10,

  /**
   * Change slides after a specified interval. Use `false` for turning off autoplay.
   *
   * @type {Number|Boolean}
   */
  autoplay: false,

  /**
   * Stop autoplay on mouseover event.
   *
   * @type {Boolean}
   */
  hoverpause: true,

  /**
   * Allow for changing slides with left and right keyboard arrows.
   *
   * @type {Boolean}
   */
  keyboard: true,

  /**
   * Stop running `perView` number of slides from the end. Use this
   * option if you don't want to have an empty space after
   * a slider. Works only with `slider` type and a
   * non-centered `focusAt` setting.
   *
   * @type {Boolean}
   */
  bound: false,

  /**
   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
   *
   * @type {Number|Boolean}
   */
  swipeThreshold: 80,

  /**
   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
   *
   * @type {Number|Boolean}
   */
  dragThreshold: 120,

  /**
   * A number of slides moved on single swipe.
   *
   * Available types:
   * `` - Moves slider by one slide per swipe
   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
   *
   * @type {String}
   */
  perSwipe: '',

  /**
   * Moving distance ratio of the slides on a swiping and dragging.
   *
   * @type {Number}
   */
  touchRatio: 0.5,

  /**
   * Angle required to activate slides moving on swiping or dragging.
   *
   * @type {Number}
   */
  touchAngle: 45,

  /**
   * Duration of the animation in milliseconds.
   *
   * @type {Number}
   */
  animationDuration: 400,

  /**
   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
   *
   * @type {Boolean}
   */
  rewind: true,

  /**
   * Duration of the rewinding animation of the `slider` type in milliseconds.
   *
   * @type {Number}
   */
  rewindDuration: 800,

  /**
   * Easing function for the animation.
   *
   * @type {String}
   */
  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',

  /**
   * Wait for the animation to finish until the next user input can be processed
   *
   * @type {boolean}
   */
  waitForTransition: true,

  /**
   * Throttle costly events at most once per every wait milliseconds.
   *
   * @type {Number}
   */
  throttle: 10,

  /**
   * Moving direction mode.
   *
   * Available inputs:
   * - 'ltr' - left to right movement,
   * - 'rtl' - right to left movement.
   *
   * @type {String}
   */
  direction: 'ltr',

  /**
   * The distance value of the next and previous viewports which
   * have to peek in the current view. Accepts number and
   * pixels as a string. Left and right peeking can be
   * set up separately with a directions object.
   *
   * For example:
   * `100` - Peek 100px on the both sides.
   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
   *
   * @type {Number|String|Object}
   */
  peek: 0,

  /**
   * Defines how many clones of current viewport will be generated.
   *
   * @type {Number}
   */
  cloningRatio: 1,

  /**
   * Collection of options applied at specified media breakpoints.
   * For example: display two slides per view under 800px.
   * `{
   *   '800px': {
   *     perView: 2
   *   }
   * }`
   */
  breakpoints: {},

  /**
   * Collection of internally used HTML classes.
   *
   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
   * @type {Object}
   */
  classes: {
    swipeable: 'glide--swipeable',
    dragging: 'glide--dragging',
    direction: {
      ltr: 'glide--ltr',
      rtl: 'glide--rtl'
    },
    type: {
      slider: 'glide--slider',
      carousel: 'glide--carousel'
    },
    slide: {
      clone: 'glide__slide--clone',
      active: 'glide__slide--active'
    },
    arrow: {
      disabled: 'glide__arrow--disabled'
    },
    nav: {
      active: 'glide__bullet--active'
    }
  }
};

/**
 * Outputs warning message to the bowser console.
 *
 * @param  {String} msg
 * @return {Void}
 */
function warn(msg) {
  console.error("[Glide warn]: ".concat(msg));
}

/**
 * Converts value entered as number
 * or string to integer value.
 *
 * @param {String} value
 * @returns {Number}
 */
function toInt(value) {
  return parseInt(value);
}
/**
 * Converts value entered as number
 * or string to flat value.
 *
 * @param {String} value
 * @returns {Number}
 */

function toFloat(value) {
  return parseFloat(value);
}
/**
 * Indicates whether the specified value is a string.
 *
 * @param  {*}   value
 * @return {Boolean}
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Indicates whether the specified value is an object.
 *
 * @param  {*} value
 * @return {Boolean}
 *
 * @see https://github.com/jashkenas/underscore
 */

function isObject(value) {
  var type = _typeof(value);

  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators
}
/**
 * Indicates whether the specified value is a function.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Indicates whether the specified value is undefined.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Indicates whether the specified value is an array.
 *
 * @param  {*} value
 * @return {Boolean}
 */

function isArray(value) {
  return value.constructor === Array;
}

/**
 * Creates and initializes specified collection of extensions.
 * Each extension receives access to instance of glide and rest of components.
 *
 * @param {Object} glide
 * @param {Object} extensions
 *
 * @returns {Object}
 */

function mount(glide, extensions, events) {
  var components = {};

  for (var name in extensions) {
    if (isFunction(extensions[name])) {
      components[name] = extensions[name](glide, components, events);
    } else {
      warn('Extension must be a function');
    }
  }

  for (var _name in components) {
    if (isFunction(components[_name].mount)) {
      components[_name].mount();
    }
  }

  return components;
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
function define(obj, prop, definition) {
  Object.defineProperty(obj, prop, definition);
}
/**
 * Sorts aphabetically object keys.
 *
 * @param  {Object} obj
 * @return {Object}
 */

function sortKeys(obj) {
  return Object.keys(obj).sort().reduce(function (r, k) {
    r[k] = obj[k];
    return r[k], r;
  }, {});
}
/**
 * Merges passed settings object with default options.
 *
 * @param  {Object} defaults
 * @param  {Object} settings
 * @return {Object}
 */

function mergeOptions(defaults, settings) {
  var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we
  // have to do it manually for every nested object
  // in options. Although it does not look smart,
  // it's smaller and faster than some fancy
  // merging deep-merge algorithm script.

  if (settings.hasOwnProperty('classes')) {
    options.classes = Object.assign({}, defaults.classes, settings.classes);

    if (settings.classes.hasOwnProperty('direction')) {
      options.classes.direction = Object.assign({}, defaults.classes.direction, settings.classes.direction);
    }

    if (settings.classes.hasOwnProperty('type')) {
      options.classes.type = Object.assign({}, defaults.classes.type, settings.classes.type);
    }

    if (settings.classes.hasOwnProperty('slide')) {
      options.classes.slide = Object.assign({}, defaults.classes.slide, settings.classes.slide);
    }

    if (settings.classes.hasOwnProperty('arrow')) {
      options.classes.arrow = Object.assign({}, defaults.classes.arrow, settings.classes.arrow);
    }

    if (settings.classes.hasOwnProperty('nav')) {
      options.classes.nav = Object.assign({}, defaults.classes.nav, settings.classes.nav);
    }
  }

  if (settings.hasOwnProperty('breakpoints')) {
    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);
  }

  return options;
}

var EventsBus = /*#__PURE__*/function () {
  /**
   * Construct a EventBus instance.
   *
   * @param {Object} events
   */
  function EventsBus() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBus);

    this.events = events;
    this.hop = events.hasOwnProperty;
  }
  /**
   * Adds listener to the specifed event.
   *
   * @param {String|Array} event
   * @param {Function} handler
   */


  _createClass(EventsBus, [{
    key: "on",
    value: function on(event, handler) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.on(event[i], handler);
        }

        return;
      } // Create the event's object if not yet created


      if (!this.hop.call(this.events, event)) {
        this.events[event] = [];
      } // Add the handler to queue


      var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event

      return {
        remove: function remove() {
          delete this.events[event][index];
        }
      };
    }
    /**
     * Runs registered handlers for specified event.
     *
     * @param {String|Array} event
     * @param {Object=} context
     */

  }, {
    key: "emit",
    value: function emit(event, context) {
      if (isArray(event)) {
        for (var i = 0; i < event.length; i++) {
          this.emit(event[i], context);
        }

        return;
      } // If the event doesn't exist, or there's no handlers in queue, just leave


      if (!this.hop.call(this.events, event)) {
        return;
      } // Cycle through events queue, fire!


      this.events[event].forEach(function (item) {
        item(context || {});
      });
    }
  }]);

  return EventsBus;
}();

var Glide$1 = /*#__PURE__*/function () {
  /**
   * Construct glide.
   *
   * @param  {String} selector
   * @param  {Object} options
   */
  function Glide(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Glide);

    this._c = {};
    this._t = [];
    this._e = new EventsBus();
    this.disabled = false;
    this.selector = selector;
    this.settings = mergeOptions(defaults, options);
    this.index = this.settings.startAt;
  }
  /**
   * Initializes glide.
   *
   * @param {Object} extensions Collection of extensions to initialize.
   * @return {Glide}
   */


  _createClass(Glide, [{
    key: "mount",
    value: function mount$1() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._e.emit('mount.before');

      if (isObject(extensions)) {
        this._c = mount(this, extensions, this._e);
      } else {
        warn('You need to provide a object on `mount()`');
      }

      this._e.emit('mount.after');

      return this;
    }
    /**
     * Collects an instance `translate` transformers.
     *
     * @param  {Array} transformers Collection of transformers.
     * @return {Void}
     */

  }, {
    key: "mutate",
    value: function mutate() {
      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (isArray(transformers)) {
        this._t = transformers;
      } else {
        warn('You need to provide a array on `mutate()`');
      }

      return this;
    }
    /**
     * Updates glide with specified settings.
     *
     * @param {Object} settings
     * @return {Glide}
     */

  }, {
    key: "update",
    value: function update() {
      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.settings = mergeOptions(this.settings, settings);

      if (settings.hasOwnProperty('startAt')) {
        this.index = settings.startAt;
      }

      this._e.emit('update');

      return this;
    }
    /**
     * Change slide with specified pattern. A pattern must be in the special format:
     * `>` - Move one forward
     * `<` - Move one backward
     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
     * `>>` - Rewinds to end (last slide)
     * `<<` - Rewinds to start (first slide)
     * `|>` - Move one viewport forward
     * `|<` - Move one viewport backward
     *
     * @param {String} pattern
     * @return {Glide}
     */

  }, {
    key: "go",
    value: function go(pattern) {
      this._c.Run.make(pattern);

      return this;
    }
    /**
     * Move track by specified distance.
     *
     * @param {String} distance
     * @return {Glide}
     */

  }, {
    key: "move",
    value: function move(distance) {
      this._c.Transition.disable();

      this._c.Move.make(distance);

      return this;
    }
    /**
     * Destroy instance and revert all changes done by this._c.
     *
     * @return {Glide}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._e.emit('destroy');

      return this;
    }
    /**
     * Start instance autoplaying.
     *
     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Glide}
     */

  }, {
    key: "play",
    value: function play() {
      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (interval) {
        this.settings.autoplay = interval;
      }

      this._e.emit('play');

      return this;
    }
    /**
     * Stop instance autoplaying.
     *
     * @return {Glide}
     */

  }, {
    key: "pause",
    value: function pause() {
      this._e.emit('pause');

      return this;
    }
    /**
     * Sets glide into a idle status.
     *
     * @return {Glide}
     */

  }, {
    key: "disable",
    value: function disable() {
      this.disabled = true;
      return this;
    }
    /**
     * Sets glide into a active status.
     *
     * @return {Glide}
     */

  }, {
    key: "enable",
    value: function enable() {
      this.disabled = false;
      return this;
    }
    /**
     * Adds cuutom event listener with handler.
     *
     * @param  {String|Array} event
     * @param  {Function} handler
     * @return {Glide}
     */

  }, {
    key: "on",
    value: function on(event, handler) {
      this._e.on(event, handler);

      return this;
    }
    /**
     * Checks if glide is a precised type.
     *
     * @param  {String} name
     * @return {Boolean}
     */

  }, {
    key: "isType",
    value: function isType(name) {
      return this.settings.type === name;
    }
    /**
     * Gets value of the core options.
     *
     * @return {Object}
     */

  }, {
    key: "settings",
    get: function get() {
      return this._o;
    }
    /**
     * Sets value of the core options.
     *
     * @param  {Object} o
     * @return {Void}
     */
    ,
    set: function set(o) {
      if (isObject(o)) {
        this._o = o;
      } else {
        warn('Options must be an `object` instance.');
      }
    }
    /**
     * Gets current index of the slider.
     *
     * @return {Object}
     */

  }, {
    key: "index",
    get: function get() {
      return this._i;
    }
    /**
     * Sets current index a slider.
     *
     * @return {Object}
     */
    ,
    set: function set(i) {
      this._i = toInt(i);
    }
    /**
     * Gets type name of the slider.
     *
     * @return {String}
     */

  }, {
    key: "type",
    get: function get() {
      return this.settings.type;
    }
    /**
     * Gets value of the idle status.
     *
     * @return {Boolean}
     */

  }, {
    key: "disabled",
    get: function get() {
      return this._d;
    }
    /**
     * Sets value of the idle status.
     *
     * @return {Boolean}
     */
    ,
    set: function set(status) {
      this._d = !!status;
    }
  }]);

  return Glide;
}();

function Run (Glide, Components, Events) {
  var Run = {
    /**
     * Initializes autorunning of the glide.
     *
     * @return {Void}
     */
    mount: function mount() {
      this._o = false;
    },

    /**
     * Makes glides running based on the passed moving schema.
     *
     * @param {String} move
     */
    make: function make(move) {
      var _this = this;

      if (!Glide.disabled) {
        !Glide.settings.waitForTransition || Glide.disable();
        this.move = move;
        Events.emit('run.before', this.move);
        this.calculate();
        Events.emit('run', this.move);
        Components.Transition.after(function () {
          if (_this.isStart()) {
            Events.emit('run.start', _this.move);
          }

          if (_this.isEnd()) {
            Events.emit('run.end', _this.move);
          }

          if (_this.isOffset()) {
            _this._o = false;
            Events.emit('run.offset', _this.move);
          }

          Events.emit('run.after', _this.move);
          Glide.enable();
        });
      }
    },

    /**
     * Calculates current index based on defined move.
     *
     * @return {Number|Undefined}
     */
    calculate: function calculate() {
      var move = this.move,
          length = this.length;
      var steps = move.steps,
          direction = move.direction; // By default assume that size of view is equal to one slide

      var viewSize = 1; // While direction is `=` we want jump to
      // a specified index described in steps.

      if (direction === '=') {
        // Check if bound is true, 
        // as we want to avoid whitespaces.
        if (Glide.settings.bound && toInt(steps) > length) {
          Glide.index = length;
          return;
        }

        Glide.index = steps;
        return;
      } // When pattern is equal to `>>` we want
      // fast forward to the last slide.


      if (direction === '>' && steps === '>') {
        Glide.index = length;
        return;
      } // When pattern is equal to `<<` we want
      // fast forward to the first slide.


      if (direction === '<' && steps === '<') {
        Glide.index = 0;
        return;
      } // pagination movement


      if (direction === '|') {
        viewSize = Glide.settings.perView || 1;
      } // we are moving forward


      if (direction === '>' || direction === '|' && steps === '>') {
        var index = calculateForwardIndex(viewSize);

        if (index > length) {
          this._o = true;
        }

        Glide.index = normalizeForwardIndex(index, viewSize);
        return;
      } // we are moving backward


      if (direction === '<' || direction === '|' && steps === '<') {
        var _index = calculateBackwardIndex(viewSize);

        if (_index < 0) {
          this._o = true;
        }

        Glide.index = normalizeBackwardIndex(_index, viewSize);
        return;
      }

      warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
    },

    /**
     * Checks if we are on the first slide.
     *
     * @return {Boolean}
     */
    isStart: function isStart() {
      return Glide.index <= 0;
    },

    /**
     * Checks if we are on the last slide.
     *
     * @return {Boolean}
     */
    isEnd: function isEnd() {
      return Glide.index >= this.length;
    },

    /**
     * Checks if we are making a offset run.
     *
     * @param {String} direction
     * @return {Boolean}
     */
    isOffset: function isOffset() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

      if (!direction) {
        return this._o;
      }

      if (!this._o) {
        return false;
      } // did we view to the right?


      if (direction === '|>') {
        return this.move.direction === '|' && this.move.steps === '>';
      } // did we view to the left?


      if (direction === '|<') {
        return this.move.direction === '|' && this.move.steps === '<';
      }

      return this.move.direction === direction;
    },

    /**
     * Checks if bound mode is active
     *
     * @return {Boolean}
     */
    isBound: function isBound() {
      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;
    }
  };
  /**
   * Returns index value to move forward/to the right
   *
   * @param viewSize
   * @returns {Number}
   */

  function calculateForwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index + viewSize;
    }

    return index + (viewSize - index % viewSize);
  }
  /**
   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {Number}
   */


  function normalizeForwardIndex(index, viewSize) {
    var length = Run.length;

    if (index <= length) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index - (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on the last possible index value given by bound
      if (Run.isBound() && !Run.isEnd()) {
        return length;
      }

      return 0;
    }

    if (Run.isBound()) {
      return length;
    }

    return Math.floor(length / viewSize) * viewSize;
  }
  /**
   * Calculates index value to move backward/to the left
   *
   * @param viewSize
   * @returns {Number}
   */


  function calculateBackwardIndex(viewSize) {
    var index = Glide.index;

    if (Glide.isType('carousel')) {
      return index - viewSize;
    } // ensure our back navigation results in the same index as a forward navigation
    // to experience a homogeneous paging


    var view = Math.ceil(index / viewSize);
    return (view - 1) * viewSize;
  }
  /**
   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries
   *
   * @param index
   * @param length
   * @param viewSize
   * @returns {*}
   */


  function normalizeBackwardIndex(index, viewSize) {
    var length = Run.length;

    if (index >= 0) {
      return index;
    }

    if (Glide.isType('carousel')) {
      return index + (length + 1);
    }

    if (Glide.settings.rewind) {
      // bound does funny things with the length, therefor we have to be certain
      // that we are on first possible index value before we to rewind to the length given by bound
      if (Run.isBound() && Run.isStart()) {
        return length;
      }

      return Math.floor(length / viewSize) * viewSize;
    }

    return 0;
  }

  define(Run, 'move', {
    /**
     * Gets value of the move schema.
     *
     * @returns {Object}
     */
    get: function get() {
      return this._m;
    },

    /**
     * Sets value of the move schema.
     *
     * @returns {Object}
     */
    set: function set(value) {
      var step = value.substr(1);
      this._m = {
        direction: value.substr(0, 1),
        steps: step ? toInt(step) ? toInt(step) : step : 0
      };
    }
  });
  define(Run, 'length', {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;
      var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be
      // reduced by `perView` and `focusAt` settings. Running distance
      // should end before creating an empty space after instance.

      if (this.isBound()) {
        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
      }

      return length - 1;
    }
  });
  define(Run, 'offset', {
    /**
     * Gets status of the offsetting flag.
     *
     * @return {Boolean}
     */
    get: function get() {
      return this._o;
    }
  });
  return Run;
}

/**
 * Returns a current time.
 *
 * @return {Number}
 */
function now() {
  return new Date().getTime();
}

/**
 * Returns a function, that, when invoked, will only be triggered
 * at most once during a given window of time.
 *
 * @param {Function} func
 * @param {Number} wait
 * @param {Object=} options
 * @return {Function}
 *
 * @see https://github.com/jashkenas/underscore
 */

function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function later() {
    previous = options.leading === false ? 0 : now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function throttled() {
    var at = now();
    if (!previous && options.leading === false) previous = at;
    var remaining = wait - (at - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = at;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

var MARGIN_TYPE = {
  ltr: ['marginLeft', 'marginRight'],
  rtl: ['marginRight', 'marginLeft']
};
function Gaps (Glide, Components, Events) {
  var Gaps = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function apply(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        var direction = Components.Direction.value;

        if (i !== 0) {
          style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][0]] = '';
        }

        if (i !== slides.length - 1) {
          style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
        } else {
          style[MARGIN_TYPE[direction][1]] = '';
        }
      }
    },

    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function remove(slides) {
      for (var i = 0, len = slides.length; i < len; i++) {
        var style = slides[i].style;
        style.marginLeft = '';
        style.marginRight = '';
      }
    }
  };
  define(Gaps, 'value', {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function get() {
      return toInt(Glide.settings.gap);
    }
  });
  define(Gaps, 'grow', {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function get() {
      return Gaps.value * Components.Sizes.length;
    }
  });
  define(Gaps, 'reductor', {
    /**
     * Gets reduction value caused by gaps.
     * Used to subtract width of the slides.
     *
     * @returns {Number}
     */
    get: function get() {
      var perView = Glide.settings.perView;
      return Gaps.value * (perView - 1) / perView;
    }
  });
  /**
   * Apply calculated gaps:
   * - after building, so slides (including clones) will receive proper margins
   * - on updating via API, to recalculate gaps with new options
   */

  Events.on(['build.after', 'update'], throttle(function () {
    Gaps.apply(Components.Html.wrapper.children);
  }, 30));
  /**
   * Remove gaps:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Gaps.remove(Components.Html.wrapper.children);
  });
  return Gaps;
}

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
function siblings(node) {
  if (node && node.parentNode) {
    var n = node.parentNode.firstChild;
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== node) {
        matched.push(n);
      }
    }

    return matched;
  }

  return [];
}
/**
 * Checks if passed node exist and is a valid element.
 *
 * @param  {Element} node
 * @return {Boolean}
 */

function exist(node) {
  if (node && node instanceof window.HTMLElement) {
    return true;
  }

  return false;
}
/**
 * Coerces a NodeList to an Array.
 *
 * @param  {NodeList} nodeList
 * @return {Array}
 */

function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}

var TRACK_SELECTOR = '[data-glide-el="track"]';
function Html (Glide, Components, Events) {
  var Html = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function mount() {
      this.root = Glide.selector;
      this.track = this.root.querySelector(TRACK_SELECTOR);
      this.collectSlides();
    },

    /**
     * Collect slides
     */
    collectSlides: function collectSlides() {
      this.slides = toArray(this.wrapper.children).filter(function (slide) {
        return !slide.classList.contains(Glide.settings.classes.slide.clone);
      });
    }
  };
  define(Html, 'root', {
    /**
     * Gets node of the glide main element.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._r;
    },

    /**
     * Sets node of the glide main element.
     *
     * @return {Object}
     */
    set: function set(r) {
      if (isString(r)) {
        r = document.querySelector(r);
      }

      if (exist(r)) {
        Html._r = r;
      } else {
        warn('Root element must be a existing Html node');
      }
    }
  });
  define(Html, 'track', {
    /**
     * Gets node of the glide track with slides.
     *
     * @return {Object}
     */
    get: function get() {
      return Html._t;
    },

    /**
     * Sets node of the glide track with slides.
     *
     * @return {Object}
     */
    set: function set(t) {
      if (exist(t)) {
        Html._t = t;
      } else {
        warn("Could not find track element. Please use ".concat(TRACK_SELECTOR, " attribute."));
      }
    }
  });
  define(Html, 'wrapper', {
    /**
     * Gets node of the slides wrapper.
     *
     * @return {Object}
     */
    get: function get() {
      return Html.track.children[0];
    }
  });
  /**
   * Add/remove/reorder dynamic slides
   */

  Events.on('update', function () {
    Html.collectSlides();
  });
  return Html;
}

function Peek (Glide, Components, Events) {
  var Peek = {
    /**
     * Setups how much to peek based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.peek;
    }
  };
  define(Peek, 'value', {
    /**
     * Gets value of the peek.
     *
     * @returns {Number|Object}
     */
    get: function get() {
      return Peek._v;
    },

    /**
     * Sets value of the peek.
     *
     * @param {Number|Object} value
     * @return {Void}
     */
    set: function set(value) {
      if (isObject(value)) {
        value.before = toInt(value.before);
        value.after = toInt(value.after);
      } else {
        value = toInt(value);
      }

      Peek._v = value;
    }
  });
  define(Peek, 'reductor', {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function get() {
      var value = Peek.value;
      var perView = Glide.settings.perView;

      if (isObject(value)) {
        return value.before / perView + value.after / perView;
      }

      return value * 2 / perView;
    }
  });
  /**
   * Recalculate peeking sizes on:
   * - when resizing window to update to proper percents
   */

  Events.on(['resize', 'update'], function () {
    Peek.mount();
  });
  return Peek;
}

function Move (Glide, Components, Events) {
  var Move = {
    /**
     * Constructs move component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      this._o = 0;
    },

    /**
     * Calculates a movement value based on passed offset and currently active index.
     *
     * @param  {Number} offset
     * @return {Void}
     */
    make: function make() {
      var _this = this;

      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.offset = offset;
      Events.emit('move', {
        movement: this.value
      });
      Components.Transition.after(function () {
        Events.emit('move.after', {
          movement: _this.value
        });
      });
    }
  };
  define(Move, 'offset', {
    /**
     * Gets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    get: function get() {
      return Move._o;
    },

    /**
     * Sets an offset value used to modify current translate.
     *
     * @return {Object}
     */
    set: function set(value) {
      Move._o = !isUndefined(value) ? toInt(value) : 0;
    }
  });
  define(Move, 'translate', {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Sizes.slideWidth * Glide.index;
    }
  });
  define(Move, 'value', {
    /**
     * Gets an actual movement value corrected by offset.
     *
     * @return {Number}
     */
    get: function get() {
      var offset = this.offset;
      var translate = this.translate;

      if (Components.Direction.is('rtl')) {
        return translate + offset;
      }

      return translate - offset;
    }
  });
  /**
   * Make movement to proper slide on:
   * - before build, so glide will start at `startAt` index
   * - on each standard run to move to newly calculated index
   */

  Events.on(['build.before', 'run'], function () {
    Move.make();
  });
  return Move;
}

function Sizes (Glide, Components, Events) {
  var Sizes = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function setupSlides() {
      var width = "".concat(this.slideWidth, "px");
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = width;
      }
    },

    /**
     * Setups dimensions of slides wrapper.
     *
     * @return {Void}
     */
    setupWrapper: function setupWrapper() {
      Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
    },

    /**
     * Removes applied styles from HTML elements.
     *
     * @returns {Void}
     */
    remove: function remove() {
      var slides = Components.Html.slides;

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.width = '';
      }

      Components.Html.wrapper.style.width = '';
    }
  };
  define(Sizes, 'length', {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.slides.length;
    }
  });
  define(Sizes, 'width', {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function get() {
      return Components.Html.track.offsetWidth;
    }
  });
  define(Sizes, 'wrapperSize', {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;
    }
  });
  define(Sizes, 'slideWidth', {
    /**
     * Gets width value of a single slide.
     *
     * @return {Number}
     */
    get: function get() {
      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
    }
  });
  /**
   * Apply calculated glide's dimensions:
   * - before building, so other dimensions (e.g. translate) will be calculated propertly
   * - when resizing window to recalculate sildes dimensions
   * - on updating via API, to calculate dimensions based on new options
   */

  Events.on(['build.before', 'resize', 'update'], function () {
    Sizes.setupSlides();
    Sizes.setupWrapper();
  });
  /**
   * Remove calculated glide's dimensions:
   * - on destoting to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Sizes.remove();
  });
  return Sizes;
}

function Build (Glide, Components, Events) {
  var Build = {
    /**
     * Init glide building. Adds classes, sets
     * dimensions and setups initial state.
     *
     * @return {Void}
     */
    mount: function mount() {
      Events.emit('build.before');
      this.typeClass();
      this.activeClass();
      Events.emit('build.after');
    },

    /**
     * Adds `type` class to the glide element.
     *
     * @return {Void}
     */
    typeClass: function typeClass() {
      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    activeClass: function activeClass() {
      var classes = Glide.settings.classes;
      var slide = Components.Html.slides[Glide.index];

      if (slide) {
        slide.classList.add(classes.slide.active);
        siblings(slide).forEach(function (sibling) {
          sibling.classList.remove(classes.slide.active);
        });
      }
    },

    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function removeClasses() {
      var _Glide$settings$class = Glide.settings.classes,
          type = _Glide$settings$class.type,
          slide = _Glide$settings$class.slide;
      Components.Html.root.classList.remove(type[Glide.settings.type]);
      Components.Html.slides.forEach(function (sibling) {
        sibling.classList.remove(slide.active);
      });
    }
  };
  /**
   * Clear building classes:
   * - on destroying to bring HTML to its initial state
   * - on updating to remove classes before remounting component
   */

  Events.on(['destroy', 'update'], function () {
    Build.removeClasses();
  });
  /**
   * Remount component:
   * - on resizing of the window to calculate new dimensions
   * - on updating settings via API
   */

  Events.on(['resize', 'update'], function () {
    Build.mount();
  });
  /**
   * Swap active class of current slide:
   * - after each move to the new index
   */

  Events.on('move.after', function () {
    Build.activeClass();
  });
  return Build;
}

function Clones (Glide, Components, Events) {
  var Clones = {
    /**
     * Create pattern map and collect slides to be cloned.
     */
    mount: function mount() {
      this.items = [];

      if (Glide.isType('carousel')) {
        this.items = this.collect();
      }
    },

    /**
     * Collect clones with pattern.
     *
     * @return {[]}
     */
    collect: function collect() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var slides = Components.Html.slides;
      var _Glide$settings = Glide.settings,
          perView = _Glide$settings.perView,
          classes = _Glide$settings.classes,
          cloningRatio = _Glide$settings.cloningRatio;

      if (slides.length !== 0) {
        var peekIncrementer = +!!Glide.settings.peek;
        var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
        var append = slides.slice(0, cloneCount).reverse();
        var prepend = slides.slice(cloneCount * -1);

        for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
          for (var i = 0; i < append.length; i++) {
            var clone = append[i].cloneNode(true);
            clone.classList.add(classes.slide.clone);
            items.push(clone);
          }

          for (var _i = 0; _i < prepend.length; _i++) {
            var _clone = prepend[_i].cloneNode(true);

            _clone.classList.add(classes.slide.clone);

            items.unshift(_clone);
          }
        }
      }

      return items;
    },

    /**
     * Append cloned slides with generated pattern.
     *
     * @return {Void}
     */
    append: function append() {
      var items = this.items;
      var _Components$Html = Components.Html,
          wrapper = _Components$Html.wrapper,
          slides = _Components$Html.slides;
      var half = Math.floor(items.length / 2);
      var prepend = items.slice(0, half).reverse();
      var append = items.slice(half * -1).reverse();
      var width = "".concat(Components.Sizes.slideWidth, "px");

      for (var i = 0; i < append.length; i++) {
        wrapper.appendChild(append[i]);
      }

      for (var _i2 = 0; _i2 < prepend.length; _i2++) {
        wrapper.insertBefore(prepend[_i2], slides[0]);
      }

      for (var _i3 = 0; _i3 < items.length; _i3++) {
        items[_i3].style.width = width;
      }
    },

    /**
     * Remove all cloned slides.
     *
     * @return {Void}
     */
    remove: function remove() {
      var items = this.items;

      for (var i = 0; i < items.length; i++) {
        Components.Html.wrapper.removeChild(items[i]);
      }
    }
  };
  define(Clones, 'grow', {
    /**
     * Gets additional dimensions value caused by clones.
     *
     * @return {Number}
     */
    get: function get() {
      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;
    }
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('update', function () {
    Clones.remove();
    Clones.mount();
    Clones.append();
  });
  /**
   * Append additional slide's clones:
   * - while glide's type is `carousel`
   */

  Events.on('build.before', function () {
    if (Glide.isType('carousel')) {
      Clones.append();
    }
  });
  /**
   * Remove clones HTMLElements:
   * - on destroying, to bring HTML to its initial state
   */

  Events.on('destroy', function () {
    Clones.remove();
  });
  return Clones;
}

var EventsBinder = /*#__PURE__*/function () {
  /**
   * Construct a EventsBinder instance.
   */
  function EventsBinder() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventsBinder);

    this.listeners = listeners;
  }
  /**
   * Adds events listeners to arrows HTML elements.
   *
   * @param  {String|Array} events
   * @param  {Element|Window|Document} el
   * @param  {Function} closure
   * @param  {Boolean|Object} capture
   * @return {Void}
   */


  _createClass(EventsBinder, [{
    key: "on",
    value: function on(events, el, closure) {
      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        this.listeners[events[i]] = closure;
        el.addEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */

  }, {
    key: "off",
    value: function off(events, el) {
      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (isString(events)) {
        events = [events];
      }

      for (var i = 0; i < events.length; i++) {
        el.removeEventListener(events[i], this.listeners[events[i]], capture);
      }
    }
    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      delete this.listeners;
    }
  }]);

  return EventsBinder;
}();

function Resize (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Resize = {
    /**
     * Initializes window bindings.
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `rezsize` listener to the window.
     * It's a costly event, so we are debouncing it.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('resize', window, throttle(function () {
        Events.emit('resize');
      }, Glide.settings.throttle));
    },

    /**
     * Unbinds listeners from the window.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('resize', window);
    }
  };
  /**
   * Remove bindings from window:
   * - on destroying, to remove added EventListener
   */

  Events.on('destroy', function () {
    Resize.unbind();
    Binder.destroy();
  });
  return Resize;
}

var VALID_DIRECTIONS = ['ltr', 'rtl'];
var FLIPED_MOVEMENTS = {
  '>': '<',
  '<': '>',
  '=': '='
};
function Direction (Glide, Components, Events) {
  var Direction = {
    /**
     * Setups gap value based on settings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.value = Glide.settings.direction;
    },

    /**
     * Resolves pattern based on direction value
     *
     * @param {String} pattern
     * @returns {String}
     */
    resolve: function resolve(pattern) {
      var token = pattern.slice(0, 1);

      if (this.is('rtl')) {
        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
      }

      return pattern;
    },

    /**
     * Checks value of direction mode.
     *
     * @param {String} direction
     * @returns {Boolean}
     */
    is: function is(direction) {
      return this.value === direction;
    },

    /**
     * Applies direction class to the root HTML element.
     *
     * @return {Void}
     */
    addClass: function addClass() {
      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);
    },

    /**
     * Removes direction class from the root HTML element.
     *
     * @return {Void}
     */
    removeClass: function removeClass() {
      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);
    }
  };
  define(Direction, 'value', {
    /**
     * Gets value of the direction.
     *
     * @returns {Number}
     */
    get: function get() {
      return Direction._v;
    },

    /**
     * Sets value of the direction.
     *
     * @param {String} value
     * @return {Void}
     */
    set: function set(value) {
      if (VALID_DIRECTIONS.indexOf(value) > -1) {
        Direction._v = value;
      } else {
        warn('Direction value must be `ltr` or `rtl`');
      }
    }
  });
  /**
   * Clear direction class:
   * - on destroy to bring HTML to its initial state
   * - on update to remove class before reappling bellow
   */

  Events.on(['destroy', 'update'], function () {
    Direction.removeClass();
  });
  /**
   * Remount component:
   * - on update to reflect changes in direction value
   */

  Events.on('update', function () {
    Direction.mount();
  });
  /**
   * Apply direction class:
   * - before building to apply class for the first time
   * - on updating to reapply direction class that may changed
   */

  Events.on(['build.before', 'update'], function () {
    Direction.addClass();
  });
  return Direction;
}

/**
 * Reflects value of glide movement.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Rtl (Glide, Components) {
  return {
    /**
     * Negates the passed translate if glide is in RTL option.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Components.Direction.is('rtl')) {
        return -translate;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `gap` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Gap (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with number in the `gap` settings.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
      return translate + Components.Gaps.value * multiplier;
    }
  };
}

/**
 * Updates glide movement with width of additional clones width.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Grow (Glide, Components) {
  return {
    /**
     * Adds to the passed translate width of the half of clones.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      return translate + Components.Clones.grow / 2;
    }
  };
}

/**
 * Updates glide movement with a `peek` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function Peeking (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with a `peek` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      if (Glide.settings.focusAt >= 0) {
        var peek = Components.Peek.value;

        if (isObject(peek)) {
          return translate - peek.before;
        }

        return translate - peek;
      }

      return translate;
    }
  };
}

/**
 * Updates glide movement with a `focusAt` settings.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */
function Focusing (Glide, Components) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function modify(translate) {
      var gap = Components.Gaps.value;
      var width = Components.Sizes.width;
      var focusAt = Glide.settings.focusAt;
      var slideWidth = Components.Sizes.slideWidth;

      if (focusAt === 'center') {
        return translate - (width / 2 - slideWidth / 2);
      }

      return translate - slideWidth * focusAt - gap * focusAt;
    }
  };
}

/**
 * Applies diffrent transformers on translate value.
 *
 * @param  {Object} Glide
 * @param  {Object} Components
 * @return {Object}
 */

function mutator (Glide, Components, Events) {
  /**
   * Merge instance transformers with collection of default transformers.
   * It's important that the Rtl component be last on the list,
   * so it reflects all previous transformations.
   *
   * @type {Array}
   */
  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function mutate(translate) {
      for (var i = 0; i < TRANSFORMERS.length; i++) {
        var transformer = TRANSFORMERS[i];

        if (isFunction(transformer) && isFunction(transformer().modify)) {
          translate = transformer(Glide, Components, Events).modify(translate);
        } else {
          warn('Transformer should be a function that returns an object with `modify()` method');
        }
      }

      return translate;
    }
  };
}

function Translate (Glide, Components, Events) {
  var Translate = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function set(value) {
      var transform = mutator(Glide, Components).mutate(value);
      var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
      Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15

      Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22

      Components.Html.wrapper.style.transform = translate3d;
    },

    /**
     * Removes value of translate from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transform = '';
    },

    /**
     * @return {number}
     */
    getStartIndex: function getStartIndex() {
      var length = Components.Sizes.length;
      var index = Glide.index;
      var perView = Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        return length + (index - perView);
      } // "modulo length" converts an index that equals length to zero


      return (index + perView) % length;
    },

    /**
     * @return {number}
     */
    getTravelDistance: function getTravelDistance() {
      var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;

      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {
        // reverse travel distance so that we don't have to change subtract operations
        return travelDistance * -1;
      }

      return travelDistance;
    }
  };
  /**
   * Set new translate value:
   * - on move to reflect index change
   * - on updating via API to reflect possible changes in options
   */

  Events.on('move', function (context) {
    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {
      return Translate.set(context.movement);
    }

    Components.Transition.after(function () {
      Events.emit('translate.jump');
      Translate.set(Components.Sizes.slideWidth * Glide.index);
    });
    var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
    return Translate.set(startWidth - Components.Translate.getTravelDistance());
  });
  /**
   * Remove translate:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Translate.remove();
  });
  return Translate;
}

function Transition (Glide, Components, Events) {
  /**
   * Holds inactivity status of transition.
   * When true transition is not applied.
   *
   * @type {Boolean}
   */
  var disabled = false;
  var Transition = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function compose(property) {
      var settings = Glide.settings;

      if (!disabled) {
        return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
      }

      return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
    },

    /**
     * Sets value of transition on HTML element.
     *
     * @param {String=} property
     * @return {Void}
     */
    set: function set() {
      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
      Components.Html.wrapper.style.transition = this.compose(property);
    },

    /**
     * Removes value of transition from HTML element.
     *
     * @return {Void}
     */
    remove: function remove() {
      Components.Html.wrapper.style.transition = '';
    },

    /**
     * Runs callback after animation.
     *
     * @param  {Function} callback
     * @return {Void}
     */
    after: function after(callback) {
      setTimeout(function () {
        callback();
      }, this.duration);
    },

    /**
     * Enable transition.
     *
     * @return {Void}
     */
    enable: function enable() {
      disabled = false;
      this.set();
    },

    /**
     * Disable transition.
     *
     * @return {Void}
     */
    disable: function disable() {
      disabled = true;
      this.set();
    }
  };
  define(Transition, 'duration', {
    /**
     * Gets duration of the transition based
     * on currently running animation type.
     *
     * @return {Number}
     */
    get: function get() {
      var settings = Glide.settings;

      if (Glide.isType('slider') && Components.Run.offset) {
        return settings.rewindDuration;
      }

      return settings.animationDuration;
    }
  });
  /**
   * Set transition `style` value:
   * - on each moving, because it may be cleared by offset move
   */

  Events.on('move', function () {
    Transition.set();
  });
  /**
   * Disable transition:
   * - before initial build to avoid transitioning from `0` to `startAt` index
   * - while resizing window and recalculating dimensions
   * - on jumping from offset transition at start and end edges in `carousel` type
   */

  Events.on(['build.before', 'resize', 'translate.jump'], function () {
    Transition.disable();
  });
  /**
   * Enable transition:
   * - on each running, because it may be disabled by offset move
   */

  Events.on('run', function () {
    Transition.enable();
  });
  /**
   * Remove transition:
   * - on destroying to bring markup to its inital state
   */

  Events.on('destroy', function () {
    Transition.remove();
  });
  return Transition;
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
var supportsPassive = false;

try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener('testPassive', null, opts);
  window.removeEventListener('testPassive', null, opts);
} catch (e) {}

var supportsPassive$1 = supportsPassive;

var START_EVENTS = ['touchstart', 'mousedown'];
var MOVE_EVENTS = ['touchmove', 'mousemove'];
var END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];
var MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
function Swipe (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var swipeSin = 0;
  var swipeStartX = 0;
  var swipeStartY = 0;
  var disabled = false;
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Swipe = {
    /**
     * Initializes swipe bindings.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bindSwipeStart();
    },

    /**
     * Handler for `swipestart` event. Calculates entry points of the user's tap.
     *
     * @param {Object} event
     * @return {Void}
     */
    start: function start(event) {
      if (!disabled && !Glide.disabled) {
        this.disable();
        var swipe = this.touches(event);
        swipeSin = null;
        swipeStartX = toInt(swipe.pageX);
        swipeStartY = toInt(swipe.pageY);
        this.bindSwipeMove();
        this.bindSwipeEnd();
        Events.emit('swipe.start');
      }
    },

    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function move(event) {
      if (!Glide.disabled) {
        var _Glide$settings = Glide.settings,
            touchAngle = _Glide$settings.touchAngle,
            touchRatio = _Glide$settings.touchRatio,
            classes = _Glide$settings.classes;
        var swipe = this.touches(event);
        var subExSx = toInt(swipe.pageX) - swipeStartX;
        var subEySy = toInt(swipe.pageY) - swipeStartY;
        var powEX = Math.abs(subExSx << 2);
        var powEY = Math.abs(subEySy << 2);
        var swipeHypotenuse = Math.sqrt(powEX + powEY);
        var swipeCathetus = Math.sqrt(powEY);
        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);

        if (swipeSin * 180 / Math.PI < touchAngle) {
          event.stopPropagation();
          Components.Move.make(subExSx * toFloat(touchRatio));
          Components.Html.root.classList.add(classes.dragging);
          Events.emit('swipe.move');
        } else {
          return false;
        }
      }
    },

    /**
     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
     *
     * @param {Object} event
     * @return {Void}
     */
    end: function end(event) {
      if (!Glide.disabled) {
        var _Glide$settings2 = Glide.settings,
            perSwipe = _Glide$settings2.perSwipe,
            touchAngle = _Glide$settings2.touchAngle,
            classes = _Glide$settings2.classes;
        var swipe = this.touches(event);
        var threshold = this.threshold(event);
        var swipeDistance = swipe.pageX - swipeStartX;
        var swipeDeg = swipeSin * 180 / Math.PI;
        this.enable();

        if (swipeDistance > threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
        } else {
          // While swipe don't reach distance apply previous transform.
          Components.Move.make();
        }

        Components.Html.root.classList.remove(classes.dragging);
        this.unbindSwipeMove();
        this.unbindSwipeEnd();
        Events.emit('swipe.end');
      }
    },

    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function bindSwipeStart() {
      var _this = this;

      var _Glide$settings3 = Glide.settings,
          swipeThreshold = _Glide$settings3.swipeThreshold,
          dragThreshold = _Glide$settings3.dragThreshold;

      if (swipeThreshold) {
        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }

      if (dragThreshold) {
        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {
          _this.start(event);
        }, capture);
      }
    },

    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function unbindSwipeStart() {
      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function bindSwipeMove() {
      var _this2 = this;

      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {
        _this2.move(event);
      }, Glide.settings.throttle), capture);
    },

    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function unbindSwipeMove() {
      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
    },

    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function bindSwipeEnd() {
      var _this3 = this;

      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {
        _this3.end(event);
      });
    },

    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function unbindSwipeEnd() {
      Binder.off(END_EVENTS, Components.Html.wrapper);
    },

    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function touches(event) {
      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return event;
      }

      return event.touches[0] || event.changedTouches[0];
    },

    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function threshold(event) {
      var settings = Glide.settings;

      if (MOUSE_EVENTS.indexOf(event.type) > -1) {
        return settings.dragThreshold;
      }

      return settings.swipeThreshold;
    },

    /**
     * Enables swipe event.
     *
     * @return {self}
     */
    enable: function enable() {
      disabled = false;
      Components.Transition.enable();
      return this;
    },

    /**
     * Disables swipe event.
     *
     * @return {self}
     */
    disable: function disable() {
      disabled = true;
      Components.Transition.disable();
      return this;
    }
  };
  /**
   * Add component class:
   * - after initial building
   */

  Events.on('build.after', function () {
    Components.Html.root.classList.add(Glide.settings.classes.swipeable);
  });
  /**
   * Remove swiping bindings:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Swipe.unbindSwipeStart();
    Swipe.unbindSwipeMove();
    Swipe.unbindSwipeEnd();
    Binder.destroy();
  });
  return Swipe;
}

function Images (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Images = {
    /**
     * Binds listener to glide wrapper.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.bind();
    },

    /**
     * Binds `dragstart` event on wrapper to prevent dragging images.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);
    },

    /**
     * Unbinds `dragstart` event on wrapper.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('dragstart', Components.Html.wrapper);
    },

    /**
     * Event handler. Prevents dragging.
     *
     * @return {Void}
     */
    dragstart: function dragstart(event) {
      event.preventDefault();
    }
  };
  /**
   * Remove bindings from images:
   * - on destroying, to remove added EventListeners
   */

  Events.on('destroy', function () {
    Images.unbind();
    Binder.destroy();
  });
  return Images;
}

function Anchors (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds detaching status of anchors.
   * Prevents detaching of already detached anchors.
   *
   * @private
   * @type {Boolean}
   */

  var detached = false;
  /**
   * Holds preventing status of anchors.
   * If `true` redirection after click will be disabled.
   *
   * @private
   * @type {Boolean}
   */

  var prevented = false;
  var Anchors = {
    /**
     * Setups a initial state of anchors component.
     *
     * @returns {Void}
     */
    mount: function mount() {
      /**
       * Holds collection of anchors elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._a = Components.Html.wrapper.querySelectorAll('a');
      this.bind();
    },

    /**
     * Binds events to anchors inside a track.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('click', Components.Html.wrapper, this.click);
    },

    /**
     * Unbinds events attached to anchors inside a track.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('click', Components.Html.wrapper);
    },

    /**
     * Handler for click event. Prevents clicks when glide is in `prevent` status.
     *
     * @param  {Object} event
     * @return {Void}
     */
    click: function click(event) {
      if (prevented) {
        event.stopPropagation();
        event.preventDefault();
      }
    },

    /**
     * Detaches anchors click event inside glide.
     *
     * @return {self}
     */
    detach: function detach() {
      prevented = true;

      if (!detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = false;
        }

        detached = true;
      }

      return this;
    },

    /**
     * Attaches anchors click events inside glide.
     *
     * @return {self}
     */
    attach: function attach() {
      prevented = false;

      if (detached) {
        for (var i = 0; i < this.items.length; i++) {
          this.items[i].draggable = true;
        }

        detached = false;
      }

      return this;
    }
  };
  define(Anchors, 'items', {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Anchors._a;
    }
  });
  /**
   * Detach anchors inside slides:
   * - on swiping, so they won't redirect to its `href` attributes
   */

  Events.on('swipe.move', function () {
    Anchors.detach();
  });
  /**
   * Attach anchors inside slides:
   * - after swiping and transitions ends, so they can redirect after click again
   */

  Events.on('swipe.end', function () {
    Components.Transition.after(function () {
      Anchors.attach();
    });
  });
  /**
   * Unbind anchors inside slides:
   * - on destroying, to bring anchors to its initial state
   */

  Events.on('destroy', function () {
    Anchors.attach();
    Anchors.unbind();
    Binder.destroy();
  });
  return Anchors;
}

var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\"<\"]");
var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, " [data-glide-dir*=\">\"]");
function Controls (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var capture = supportsPassive$1 ? {
    passive: true
  } : false;
  var Controls = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function mount() {
      /**
       * Collection of navigation HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */
      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
      /**
       * Collection of controls HTML elements.
       *
       * @private
       * @type {HTMLCollection}
       */

      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
      /**
       * Collection of arrow control HTML elements.
       *
       * @private
       * @type {Object}
       */

      this._arrowControls = {
        previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
        next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
      };
      this.addBindings();
    },

    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function setActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.addClass(this._n[i].children);
      }
    },

    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function removeActive() {
      for (var i = 0; i < this._n.length; i++) {
        this.removeClass(this._n[i].children);
      }
    },

    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function addClass(controls) {
      var settings = Glide.settings;
      var item = controls[Glide.index];

      if (!item) {
        return;
      }

      if (item) {
        item.classList.add(settings.classes.nav.active);
        siblings(item).forEach(function (sibling) {
          sibling.classList.remove(settings.classes.nav.active);
        });
      }
    },

    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function removeClass(controls) {
      var item = controls[Glide.index];

      if (item) {
        item.classList.remove(Glide.settings.classes.nav.active);
      }
    },

    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function setArrowState() {
      if (Glide.settings.rewind) {
        return;
      }

      var next = Controls._arrowControls.next;
      var previous = Controls._arrowControls.previous;
      this.resetArrowState(next, previous);

      if (Glide.index === 0) {
        this.disableArrow(previous);
      }

      if (Glide.index === Components.Run.length) {
        this.disableArrow(next);
      }
    },

    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function resetArrowState() {
      var settings = Glide.settings;

      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
        lists[_key] = arguments[_key];
      }

      lists.forEach(function (list) {
        toArray(list).forEach(function (element) {
          element.classList.remove(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function disableArrow() {
      var settings = Glide.settings;

      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        lists[_key2] = arguments[_key2];
      }

      lists.forEach(function (list) {
        toArray(list).forEach(function (element) {
          element.classList.add(settings.classes.arrow.disabled);
        });
      });
    },

    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function addBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.bind(this._c[i].children);
      }
    },

    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function removeBindings() {
      for (var i = 0; i < this._c.length; i++) {
        this.unbind(this._c[i].children);
      }
    },

    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function bind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.on('click', elements[i], this.click);
        Binder.on('touchstart', elements[i], this.click, capture);
      }
    },

    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function unbind(elements) {
      for (var i = 0; i < elements.length; i++) {
        Binder.off(['click', 'touchstart'], elements[i]);
      }
    },

    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function click(event) {
      if (!supportsPassive$1 && event.type === 'touchstart') {
        event.preventDefault();
      }

      var direction = event.currentTarget.getAttribute('data-glide-dir');
      Components.Run.make(Components.Direction.resolve(direction));
    }
  };
  define(Controls, 'items', {
    /**
     * Gets collection of the controls HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function get() {
      return Controls._c;
    }
  });
  /**
   * Swap active class of current navigation item:
   * - after mounting to set it to initial index
   * - after each move to the new index
   */

  Events.on(['mount.after', 'move.after'], function () {
    Controls.setActive();
  });
  /**
   * Add or remove disabled class of arrow elements
   */

  Events.on(['mount.after', 'run'], function () {
    Controls.setArrowState();
  });
  /**
   * Remove bindings and HTML Classes:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Controls.removeBindings();
    Controls.removeActive();
    Binder.destroy();
  });
  return Controls;
}

function Keyboard (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Keyboard = {
    /**
     * Binds keyboard events on component mount.
     *
     * @return {Void}
     */
    mount: function mount() {
      if (Glide.settings.keyboard) {
        this.bind();
      }
    },

    /**
     * Adds keyboard press events.
     *
     * @return {Void}
     */
    bind: function bind() {
      Binder.on('keyup', document, this.press);
    },

    /**
     * Removes keyboard press events.
     *
     * @return {Void}
     */
    unbind: function unbind() {
      Binder.off('keyup', document);
    },

    /**
     * Handles keyboard's arrows press and moving glide foward and backward.
     *
     * @param  {Object} event
     * @return {Void}
     */
    press: function press(event) {
      var perSwipe = Glide.settings.perSwipe;

      if (event.code === 'ArrowRight') {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
      }

      if (event.code === 'ArrowLeft') {
        Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
      }
    }
  };
  /**
   * Remove bindings from keyboard:
   * - on destroying to remove added events
   * - on updating to remove events before remounting
   */

  Events.on(['destroy', 'update'], function () {
    Keyboard.unbind();
  });
  /**
   * Remount component
   * - on updating to reflect potential changes in settings
   */

  Events.on('update', function () {
    Keyboard.mount();
  });
  /**
   * Destroy binder:
   * - on destroying to remove listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Keyboard;
}

function Autoplay (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  var Autoplay = {
    /**
     * Initializes autoplaying and events.
     *
     * @return {Void}
     */
    mount: function mount() {
      this.enable();
      this.start();

      if (Glide.settings.hoverpause) {
        this.bind();
      }
    },

    /**
     * Enables autoplaying
     *
     * @returns {Void}
     */
    enable: function enable() {
      this._e = true;
    },

    /**
     * Disables autoplaying.
     *
     * @returns {Void}
     */
    disable: function disable() {
      this._e = false;
    },

    /**
     * Starts autoplaying in configured interval.
     *
     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
     * @return {Void}
     */
    start: function start() {
      var _this = this;

      if (!this._e) {
        return;
      }

      this.enable();

      if (Glide.settings.autoplay) {
        if (isUndefined(this._i)) {
          this._i = setInterval(function () {
            _this.stop();

            Components.Run.make('>');

            _this.start();

            Events.emit('autoplay');
          }, this.time);
        }
      }
    },

    /**
     * Stops autorunning of the glide.
     *
     * @return {Void}
     */
    stop: function stop() {
      this._i = clearInterval(this._i);
    },

    /**
     * Stops autoplaying while mouse is over glide's area.
     *
     * @return {Void}
     */
    bind: function bind() {
      var _this2 = this;

      Binder.on('mouseover', Components.Html.root, function () {
        if (_this2._e) {
          _this2.stop();
        }
      });
      Binder.on('mouseout', Components.Html.root, function () {
        if (_this2._e) {
          _this2.start();
        }
      });
    },

    /**
     * Unbind mouseover events.
     *
     * @returns {Void}
     */
    unbind: function unbind() {
      Binder.off(['mouseover', 'mouseout'], Components.Html.root);
    }
  };
  define(Autoplay, 'time', {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function get() {
      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');

      if (autoplay) {
        return toInt(autoplay);
      }

      return toInt(Glide.settings.autoplay);
    }
  });
  /**
   * Stop autoplaying and unbind events:
   * - on destroying, to clear defined interval
   * - on updating via API to reset interval that may changed
   */

  Events.on(['destroy', 'update'], function () {
    Autoplay.unbind();
  });
  /**
   * Stop autoplaying:
   * - before each run, to restart autoplaying
   * - on pausing via API
   * - on destroying, to clear defined interval
   * - while starting a swipe
   * - on updating via API to reset interval that may changed
   */

  Events.on(['run.before', 'swipe.start', 'update'], function () {
    Autoplay.stop();
  });
  Events.on(['pause', 'destroy'], function () {
    Autoplay.disable();
    Autoplay.stop();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['run.after', 'swipe.end'], function () {
    Autoplay.start();
  });
  /**
   * Start autoplaying:
   * - after each run, to restart autoplaying
   * - on playing via API
   * - while ending a swipe
   */

  Events.on(['play'], function () {
    Autoplay.enable();
    Autoplay.start();
  });
  /**
   * Remount autoplaying:
   * - on updating via API to reset interval that may changed
   */

  Events.on('update', function () {
    Autoplay.mount();
  });
  /**
   * Destroy a binder:
   * - on destroying glide instance to clearup listeners
   */

  Events.on('destroy', function () {
    Binder.destroy();
  });
  return Autoplay;
}

/**
 * Sorts keys of breakpoint object so they will be ordered from lower to bigger.
 *
 * @param {Object} points
 * @returns {Object}
 */

function sortBreakpoints(points) {
  if (isObject(points)) {
    return sortKeys(points);
  } else {
    warn("Breakpoints option must be an object");
  }

  return {};
}

function Breakpoints (Glide, Components, Events) {
  /**
   * Instance of the binder for DOM Events.
   *
   * @type {EventsBinder}
   */
  var Binder = new EventsBinder();
  /**
   * Holds reference to settings.
   *
   * @type {Object}
   */

  var settings = Glide.settings;
  /**
   * Holds reference to breakpoints object in settings. Sorts breakpoints
   * from smaller to larger. It is required in order to proper
   * matching currently active breakpoint settings.
   *
   * @type {Object}
   */

  var points = sortBreakpoints(settings.breakpoints);
  /**
   * Cache initial settings before overwritting.
   *
   * @type {Object}
   */

  var defaults = Object.assign({}, settings);
  var Breakpoints = {
    /**
     * Matches settings for currectly matching media breakpoint.
     *
     * @param {Object} points
     * @returns {Object}
     */
    match: function match(points) {
      if (typeof window.matchMedia !== 'undefined') {
        for (var point in points) {
          if (points.hasOwnProperty(point)) {
            if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
              return points[point];
            }
          }
        }
      }

      return defaults;
    }
  };
  /**
   * Overwrite instance settings with currently matching breakpoint settings.
   * This happens right after component initialization.
   */

  Object.assign(settings, Breakpoints.match(points));
  /**
   * Update glide with settings of matched brekpoint:
   * - window resize to update slider
   */

  Binder.on('resize', window, throttle(function () {
    Glide.settings = mergeOptions(settings, Breakpoints.match(points));
  }, Glide.settings.throttle));
  /**
   * Resort and update default settings:
   * - on reinit via API, so breakpoint matching will be performed with options
   */

  Events.on('update', function () {
    points = sortBreakpoints(points);
    defaults = Object.assign({}, settings);
  });
  /**
   * Unbind resize listener:
   * - on destroying, to bring markup to its initial state
   */

  Events.on('destroy', function () {
    Binder.off('resize', window);
  });
  return Breakpoints;
}

var COMPONENTS = {
  // Required
  Html: Html,
  Translate: Translate,
  Transition: Transition,
  Direction: Direction,
  Peek: Peek,
  Sizes: Sizes,
  Gaps: Gaps,
  Move: Move,
  Clones: Clones,
  Resize: Resize,
  Build: Build,
  Run: Run,
  // Optional
  Swipe: Swipe,
  Images: Images,
  Anchors: Anchors,
  Controls: Controls,
  Keyboard: Keyboard,
  Autoplay: Autoplay,
  Breakpoints: Breakpoints
};

var Glide = /*#__PURE__*/function (_Core) {
  _inherits(Glide, _Core);

  var _super = _createSuper(Glide);

  function Glide() {
    _classCallCheck(this, Glide);

    return _super.apply(this, arguments);
  }

  _createClass(Glide, [{
    key: "mount",
    value: function mount() {
      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _get(_getPrototypeOf(Glide.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
    }
  }]);

  return Glide;
}(Glide$1);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkfictional_university_theme"] = globalThis["webpackChunkfictional_university_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map