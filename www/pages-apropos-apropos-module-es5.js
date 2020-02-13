(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-apropos-apropos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/apropos/apropos.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/apropos/apropos.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color='primary'>\n      <ion-back-button slot=\"start\"></ion-back-button>\n      <ion-title>Congo Lobiko</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n        <ion-card >\n                <ion-card-header>\n                    <ion-card-title>\n                       Contact\n                    </ion-card-title>\n                    <ion-card-subtitle>\n\n                    </ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content >\n                     <ion-item>\n                        <p>Téléphone: +243 904168454</p>\n                      </ion-item>\n                      <ion-item>\n                         <p>Email: lobikocongo@gmail.com</p>\n                       </ion-item>\n                       <ion-item>\n                          <p>web: http://congo-network.com/</p>\n                        </ion-item>\n                </ion-card-content>\n            </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/apropos/apropos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/apropos/apropos.module.ts ***!
  \*************************************************/
/*! exports provided: AproposPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AproposPageModule", function() { return AproposPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _apropos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apropos.page */ "./src/app/pages/apropos/apropos.page.ts");







var routes = [
    {
        path: '',
        component: _apropos_page__WEBPACK_IMPORTED_MODULE_6__["AproposPage"]
    }
];
var AproposPageModule = /** @class */ (function () {
    function AproposPageModule() {
    }
    AproposPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_apropos_page__WEBPACK_IMPORTED_MODULE_6__["AproposPage"]]
        })
    ], AproposPageModule);
    return AproposPageModule;
}());



/***/ }),

/***/ "./src/app/pages/apropos/apropos.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/apropos/apropos.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fwcm9wb3MvYXByb3Bvcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/apropos/apropos.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/apropos/apropos.page.ts ***!
  \***********************************************/
/*! exports provided: AproposPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AproposPage", function() { return AproposPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AproposPage = /** @class */ (function () {
    function AproposPage() {
    }
    AproposPage.prototype.ngOnInit = function () {
    };
    AproposPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apropos',
            template: __webpack_require__(/*! raw-loader!./apropos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/apropos/apropos.page.html"),
            styles: [__webpack_require__(/*! ./apropos.page.scss */ "./src/app/pages/apropos/apropos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AproposPage);
    return AproposPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-apropos-apropos-module-es5.js.map