(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbarModification {\n\tmargin-bottom: 2px;\n\tbackground: rgb(0, 0, 0); /* Fallback color */\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n\n.main {\n\twidth: 100%;\n\tborder: 2px solid green;\n\tmargin: 2px solid green;\n\theight: 80px;\n\tbackground-color: coral;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbarModification\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\" href=\"#\">SiteName</a>\n\t\t</div>\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li><a href=\"#\" (click)=\"disableOtherComp('home3')\" >Page 2</a></li>\n\t\t\t<li><a href=\"#\" (click)=\"disableOtherComp('home1')\" >Home</a></li>\n\t\t\t<li><a href=\"#\" (click)=\"disableOtherComp('home2')\" >Page 1</a></li>\n\t\t\t<!-- <li class=\"active\"><a href=\"#\" (click)=\"disableOtherComp('home3')\" >Page 2</a></li> -->\n\t\t</ul>\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\tSign Up</a></li>\n\t\t\t<li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span>\n\t\t\t\t\tLogin</a></li>\n\t\t</ul>\n\t</div>\n</nav>\n\n<!-- click by home -->\n<div class=\"container-fluid\" *ngIf=\"isSearch\"> \n\t<app-search></app-search>\n</div>\n\n<!-- click by page1 -->\n<div class=\"container-fluid main\" *ngIf=\"isProduct\">\n\t<app-product></app-product>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isSearch = false;
        this.isProduct = false;
    }
    AppComponent.prototype.disableOtherComp = function (name) {
        if (name == "home1") {
            this.isSearch = true;
            this.isProduct = false;
        }
        if (name == "home2") {
            this.isProduct = true;
            this.isSearch = false;
        }
        if (name == "home3") {
            this.isProduct = false;
            this.isSearch = false;
        }
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>product works!</p>\n\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () { };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The sidebar menu */\n.sidebar {\n    height: 100%; /* 100% Full-height */\n    width: 0; /* 0 width - change this with JavaScript */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Stay on top */\n    top: 64px;\n    left: 0;\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 60px; /* Place content 60px from the top */\n    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */\n    /* background-color: #111; Black */\n    background: rgb(0, 0, 0); /* Fallback color */\n\tbackground: rgba(0, 0, 0, 0.5);\n}\n/* The sidebar links */\n.sidebar a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #818181;\n    display: block;\n    transition: 0.3s;\n}\n/* When you mouse over the navigation links, change their color */\n.sidebar a:hover {\n    color: #f1f1f1;\n}\n/* Position and style the close button (top right corner) */\n.sidebar .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n/* The button used to open the sidebar */\n.openbtn {\n    font-size: 20px;\n    cursor: pointer;\n    background-color: #111;\n    color: white;\n    padding: 10px 15px;\n    border: none;\n}\n.openbtn:hover {\n    background-color: #444;\n}\n/* Style page content - use this if you want to push the page content to the right when you open the side navigation */\n#main {\n\t/* background-color: blue;\n    transition: margin-left .5s; If you want a transition effect */\n    transition: margin-left 0px; /* If you want a transition effect */\n    padding: 20px;\n}\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidebar {padding-top: 15px;}\n    .sidebar a {font-size: 18px;}\n}"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"mySidebar\" class=\"sidebar\">\n\t<a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\"\n\t\tnclick=\"closeNav()\">&times;</a> <a href=\"#\"\n\t\t(click)=\"enableBot('alprbot')\">ALPRBot</a> <a href=\"#\"\n\t\t(click)=\"enableBot('odbot')\">ODBot</a>\n</div>\n\n<div id=\"main\">\n\t<button class=\"openbtn\" (click)=\"openNav()\" onclick=\"openNav()\">\n\t\t&#9776; All Bot</button>\n\t<div *ngIf=\"isGenral\">\n\t\t<h2>Collapsed Sidebar</h2>\n\t\t<p>Content...</p>\n\t</div>\n\n\t<div *ngIf=\"isAlprbot\">\n\t\t<h1>{{title}}!</h1>\n\t\t<ng-container> <input type=\"file\" id=\"file\" multiple\n\t\t\t(change)=\"getFileDetails($event)\">\n\t\t<button (click)=\"uploadFiles()\">Upload</button>\n\t\t</ng-container>\n\t</div>\n\n\t<div *ngIf=\"isOdbot\">\n\t\t<h1>{{title}}!</h1>\n\t\t<ng-container> <input type=\"file\" id=\"file\" multiple\n\t\t\t(change)=\"getFileDetails($event)\">\n\t\t<button (click)=\"uploadFiles()\">Upload</button>\n\t\t</ng-container>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = 'http://localhost:60505/api/fileupload/';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(httpService) {
        this.httpService = httpService;
        this.title = 'Upload Multiple Files in Angular 4';
        this.myFiles = [];
        this.sMsg = '';
        this.isGenral = true;
        this.isAlprbot = false;
        this.isOdbot = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    SearchComponent.prototype.openNav = function () {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    };
    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    SearchComponent.prototype.closeNav = function () {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    SearchComponent.prototype.getFileDetails = function (e) {
        //console.log (e.target.files);
        for (var i = 0; i < e.target.files.length; i++) {
            this.myFiles.push(e.target.files[i]);
        }
    };
    SearchComponent.prototype.uploadFiles = function () {
        var _this = this;
        var frmData = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) {
            frmData.append("fileUpload", this.myFiles[i]);
        }
        this.httpService.post('http://localhost:60505/api/fileupload/', frmData).subscribe(function (data) {
            // SHOW A MESSAGE RECEIVED FROM THE WEB API.
            _this.sMsg = data;
            console.log(_this.sMsg);
        }, function (err) {
            console.log(err.message); // SHOW ERRORS IF ANY.
        });
    };
    SearchComponent.prototype.enableBot = function (name) {
        if (name == 'alprbot') {
            this.isAlprbot = true;
            this.isOdbot = false;
            this.isGenral = false;
        }
        if (name == 'odbot') {
            this.isOdbot = true;
            this.isAlprbot = false;
            this.isGenral = false;
        }
    };
    ;
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/opsmx/lalit/pers/webPro/angular/app4/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map