(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mi-tchat-tchat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mi/tchat/tchat.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mi/tchat/tchat.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color='primary'>\n      <ion-buttons slot=\"start\" >\n          <ion-menu-button ></ion-menu-button>\n        </ion-buttons>\n    <ion-title>tchat</ion-title>\n    <ion-buttons slot='end'>\n      <ion-button color='light' (click)=\"logout()\" >\n        <ion-icon name='log-out' slot='icon-only'></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n    <ion-button shape='round' color='primary'>\n       <ion-icon slot='start' name='logo-facebook'></ion-icon>\n       connexion avec facebook\n    </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/mi/tchat/tchat.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/mi/tchat/tchat.module.ts ***!
  \************************************************/
/*! exports provided: TchatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TchatPageModule", function() { return TchatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tchat.page */ "./src/app/pages/mi/tchat/tchat.page.ts");







var routes = [
    {
        path: '',
        component: _tchat_page__WEBPACK_IMPORTED_MODULE_6__["TchatPage"]
    }
];
var TchatPageModule = /** @class */ (function () {
    function TchatPageModule() {
    }
    TchatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tchat_page__WEBPACK_IMPORTED_MODULE_6__["TchatPage"]]
        })
    ], TchatPageModule);
    return TchatPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mi/tchat/tchat.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/mi/tchat/tchat.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pL3RjaGF0L3RjaGF0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/mi/tchat/tchat.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/mi/tchat/tchat.page.ts ***!
  \**********************************************/
/*! exports provided: TchatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TchatPage", function() { return TchatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TchatPage = /** @class */ (function () {
    function TchatPage() {
    }
    TchatPage.prototype.ngOnInit = function () {
    };
    TchatPage.prototype.logout = function () {
    };
    TchatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tchat',
            template: __webpack_require__(/*! raw-loader!./tchat.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mi/tchat/tchat.page.html"),
            styles: [__webpack_require__(/*! ./tchat.page.scss */ "./src/app/pages/mi/tchat/tchat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TchatPage);
    return TchatPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mi-tchat-tchat-module-es5.js.map