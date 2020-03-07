(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\r\n  <header class=\"header\">\r\n    <img class=\"logo\" src=\"/assets/img/logo.png\">\r\n    <span [class]=\"networkStatus && networkStatus.connected ?'status':'statusoff'\">\r\n    </span>\r\n  </header>\r\n\r\n  <section class=\"section\">\r\n    <div class=\"content-text\">\r\n      <h2>La santé à votre\r\n        Proximité. </h2>\r\n      <span>\r\n        Trouvez un Médecin spécialiste, un Hôpital,\r\n        une Pharmacie ou une Banque de sang\r\n      </span>\r\n    </div>\r\n    <div class=\"search\">\r\n      <svg class=\"search-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n        xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z\"\r\n          stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n        <path d=\"M21 21L16.65 16.65\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n      </svg>\r\n      <input type=\"text\" name=\"search\" placeholder=\"Faites une recherche\">\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"text\">\r\n        <p>Sélectionnez\r\n          une option</p>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"card\" *ngFor=\"let category of categories; let i = index\"\r\n          [ngStyle]=\"{'background-color':category.bg}\">\r\n          <img [src]='category.icon' routerLink=\"{{category.url}}\">\r\n          <span>{{category.name}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap\");\n.app {\n  background: white;\n  left: 0;\n  right: 0;\n}\n.app .header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 12px;\n}\n.app .header .logo {\n  width: 63px;\n  height: 38px;\n  margin-left: -16px;\n}\n.app .header .status {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-color: green;\n  border-radius: 50%;\n}\n.app .header .statusoff {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  background-color: red;\n  border-radius: 50%;\n}\n.app .section {\n  padding: 10px;\n}\n.app .section .content-text {\n  padding-bottom: 24px;\n}\n.app .section .content-text h2 {\n  font-family: Nexa Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 36px;\n  color: #132569;\n}\n.app .section .content-text span {\n  font-family: Nexa Light;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 14px;\n  color: #000000;\n}\n.app .section .search input {\n  width: 319px;\n  height: 41px;\n  left: 25px;\n  top: 230px;\n  background: #E5E5E5;\n  border-radius: 50px;\n  border: none;\n}\n.app .section .search input::-webkit-input-placeholder {\n  font-family: Nexa Light;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 14px;\n  color: #686767;\n  padding-left: 46px;\n}\n.app .section .search input::-moz-placeholder {\n  font-family: Nexa Light;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 14px;\n  color: #686767;\n  padding-left: 46px;\n}\n.app .section .search input::-ms-input-placeholder {\n  font-family: Nexa Light;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 14px;\n  color: #686767;\n  padding-left: 46px;\n}\n.app .section .search input::placeholder {\n  font-family: Nexa Light;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 18px;\n  line-height: 14px;\n  color: #686767;\n  padding-left: 46px;\n}\n.app .section .search input.TextInput {\n  padding-left: 10px;\n}\n.app .section .search .search-icon {\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  margin-top: 6px;\n  margin-left: 12px;\n}\n.app .section .card .text {\n  width: 132px;\n  height: 36px;\n  margin-top: 36px;\n}\n.app .section .card .text p {\n  padding-left: 10px;\n  font-family: Nexa Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  color: #132569;\n}\n.app .section .card .card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  overflow: scroll;\n  margin-top: 24px;\n  padding-bottom: 5px;\n}\n.app .section .card .card-content::-webkit-scrollbar {\n  background: transparent;\n}\n.app .section .card .card-content .card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  min-width: 114px;\n  max-width: 114px;\n  height: 138px;\n  margin: 0 15px;\n  border-radius: 20px;\n}\n.app .section .card .card-content .card span {\n  font-family: Nexa Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  color: #FFFFFF;\n  padding-top: 20px;\n}\n.app .section .card .card-content .card img {\n  padding-top: 8px;\n}\n.app .footer {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 12px 30px;\n}\n.app .footer .about {\n  width: 136px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #FFFFFF;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n.app .footer .about img {\n  width: 40px;\n  height: 38px;\n}\n.app .footer .about span {\n  font-family: Nexa Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #000000;\n}\n.app .footer .shared {\n  width: 136px;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background: #FFFFFF;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n.app .footer .shared img {\n  width: 20px;\n  height: 20px;\n}\n.app .footer .shared span {\n  font-family: Nexa Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  color: #000000;\n  padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9IOlxcRm9udEVuZEFwcFxcbG9iaWtveWFjb25nb0JpZW4xMFxcbWFrdWxvYmlrby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsc0ZBQUE7QUFFUjtFQUNFLGlCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjtBREVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGFBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FOO0FER0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0ROO0FER0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0ROO0FES0U7RUFDRSxhQUFBO0FDSEo7QURLSTtFQUNFLG9CQUFBO0FDSE47QURLTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIUjtBRE1NO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FEU007RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNQUjtBRFVNO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUlI7QURDTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEQ007RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNSUjtBRENNO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDUlI7QURXTTtFQUNFLGtCQUFBO0FDVFI7QURZTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGVNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2JSO0FEZ0JNO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDZFI7QURrQk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2hCUjtBRGtCUTtFQUNFLHVCQUFBO0FDaEJWO0FEbUJRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUdBLG1CQUFBO0FDbkJWO0FEcUJVO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbkJaO0FEc0JVO0VBQ0UsZ0JBQUE7QUNwQlo7QUQyQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUN6Qko7QUQyQkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUN6Qk47QUQyQk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ3pCUjtBRDRCTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUMxQlI7QUQ4Qkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUM1Qk47QUQ4Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQzVCUjtBRCtCTTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQzdCUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5hcHAge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG5cclxuICAgIC5sb2dvIHtcclxuICAgICAgd2lkdGg6IDYzcHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0dXMge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAuc3RhdHVzb2ZmIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMTVweDtcclxuICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgLmNvbnRlbnQtdGV4dCB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG5cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOZXhhIEJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICBjb2xvcjogIzEzMjU2OTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE5leGEgTGlnaHQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzE5cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgIGxlZnQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiAyMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOZXhhIExpZ2h0O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjb2xvcjogIzY4Njc2NztcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0LlRleHRJbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VhcmNoLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQge1xyXG4gICAgICAudGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDEzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dCBwIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE5leGEgQm9sZDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTMyNTY5O1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDExNHB4O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMTRweDtcclxuICAgICAgICAgIGhlaWdodDogMTM4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgIC8vIGxlZnQ6IDMycHg7XHJcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjNTc2REIzO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IE5leGEgQm9sZDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG5cclxuICAgIC5hYm91dCB7XHJcbiAgICAgIHdpZHRoOiAxMzZweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0M0QzRDNDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LWZhbWlseTogTmV4YSBCb2xkO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2hhcmVkIHtcclxuICAgICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBOZXhhIEJvbGQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCZkaXNwbGF5PXN3YXBcIik7XG4uYXBwIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmFwcCAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMnB4O1xufVxuLmFwcCAuaGVhZGVyIC5sb2dvIHtcbiAgd2lkdGg6IDYzcHg7XG4gIGhlaWdodDogMzhweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuLmFwcCAuaGVhZGVyIC5zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXBwIC5oZWFkZXIgLnN0YXR1c29mZiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYXBwIC5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5hcHAgLnNlY3Rpb24gLmNvbnRlbnQtdGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuLmFwcCAuc2VjdGlvbiAuY29udGVudC10ZXh0IGgyIHtcbiAgZm9udC1mYW1pbHk6IE5leGEgQm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBsaW5lLWhlaWdodDogMzZweDtcbiAgY29sb3I6ICMxMzI1Njk7XG59XG4uYXBwIC5zZWN0aW9uIC5jb250ZW50LXRleHQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBOZXhhIExpZ2h0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmFwcCAuc2VjdGlvbiAuc2VhcmNoIGlucHV0IHtcbiAgd2lkdGg6IDMxOXB4O1xuICBoZWlnaHQ6IDQxcHg7XG4gIGxlZnQ6IDI1cHg7XG4gIHRvcDogMjMwcHg7XG4gIGJhY2tncm91bmQ6ICNFNUU1RTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5hcHAgLnNlY3Rpb24gLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogTmV4YSBMaWdodDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzY4Njc2NztcbiAgcGFkZGluZy1sZWZ0OiA0NnB4O1xufVxuLmFwcCAuc2VjdGlvbiAuc2VhcmNoIGlucHV0LlRleHRJbnB1dCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5hcHAgLnNlY3Rpb24gLnNlYXJjaCAuc2VhcmNoLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uYXBwIC5zZWN0aW9uIC5jYXJkIC50ZXh0IHtcbiAgd2lkdGg6IDEzMnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi10b3A6IDM2cHg7XG59XG4uYXBwIC5zZWN0aW9uIC5jYXJkIC50ZXh0IHAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBOZXhhIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGNvbG9yOiAjMTMyNTY5O1xufVxuLmFwcCAuc2VjdGlvbiAuY2FyZCAuY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5hcHAgLnNlY3Rpb24gLmNhcmQgLmNhcmQtY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5hcHAgLnNlY3Rpb24gLmNhcmQgLmNhcmQtY29udGVudCAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTE0cHg7XG4gIG1heC13aWR0aDogMTE0cHg7XG4gIGhlaWdodDogMTM4cHg7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmFwcCAuc2VjdGlvbiAuY2FyZCAuY2FyZC1jb250ZW50IC5jYXJkIHNwYW4ge1xuICBmb250LWZhbWlseTogTmV4YSBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uYXBwIC5zZWN0aW9uIC5jYXJkIC5jYXJkLWNvbnRlbnQgLmNhcmQgaW1nIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5hcHAgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTJweCAzMHB4O1xufVxuLmFwcCAuZm9vdGVyIC5hYm91dCB7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M0QzRDNDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbi5hcHAgLmZvb3RlciAuYWJvdXQgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzhweDtcbn1cbi5hcHAgLmZvb3RlciAuYWJvdXQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBOZXhhIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmFwcCAuZm9vdGVyIC5zaGFyZWQge1xuICB3aWR0aDogMTM2cHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNEM0QzQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG4uYXBwIC5mb290ZXIgLnNoYXJlZCBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLmFwcCAuZm9vdGVyIC5zaGFyZWQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBOZXhhIEJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_like_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/like.service */ "./src/app/services/like.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../categories */ "./src/categories.ts");









const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let HomePage = class HomePage {
    constructor(platform, route, socialSharing, likeService, toastctrl) {
        this.platform = platform;
        this.route = route;
        this.socialSharing = socialSharing;
        this.likeService = likeService;
        this.toastctrl = toastctrl;
        this.categories = _categories__WEBPACK_IMPORTED_MODULE_7__["default"];
        this.subscribe = this.platform.backButton.subscribeWithPriority(666666, () => {
            if (this.constructor.name == "HomePage") {
                if (window.confirm("Voulez vous fermer l'application")) {
                    navigator["app"].exitApp();
                }
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.like();
            this.networkListener = Network.addListener("networkStatusChange", status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
            console.log(this.categories, "jjjjjjj");
        });
    }
    medecin() {
        console.log("ok");
        this.route.navigate(["list"]);
    }
    sharing() {
        this.socialSharing.share("", "", "", "https//lobiko.com");
    }
    like() {
        this.likeService.afficherlike().subscribe(data => {
            this.likes = data;
        });
    }
    jaime(like) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(like._id);
            like.like = like.like + 1;
            this.likeService.updatelike(like._id, like).subscribe(res => { });
            const toast = yield this.toastctrl.create({
                header: "Succès",
                message: "Merci de votre confiance",
                color: "success",
                position: "bottom",
                duration: 3000
            });
            toast.present();
        });
    }
    apropos() {
        window.confirm("Contact:Téléphone: +243 904168454 Email: lobikocongo@gmail.com");
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _services_like_service__WEBPACK_IMPORTED_MODULE_1__["LikeService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-home",
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
        _services_like_service__WEBPACK_IMPORTED_MODULE_1__["LikeService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HomePage);



/***/ }),

/***/ "./src/categories.ts":
/*!***************************!*\
  !*** ./src/categories.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        name: "Médecin",
        icon: "/assets/icon/medecin.svg",
        bg: "#576DB3",
        url: "/list"
    },
    {
        name: "Hôpital",
        icon: "/assets/icon/hopital.svg",
        bg: "#C92325",
        url: "/hopital"
    },
    {
        name: "Pharmacie",
        icon: "/assets/icon/pharmacy.svg",
        bg: "#051C9A",
        url: "/pharmacie"
    },
    {
        name: "Ambulance",
        icon: "/assets/icon/ambulance.svg",
        bg: "#085084",
        url: "/ambulance"
    },
    {
        name: "B. de Sang",
        icon: "/assets/icon/blood.svg",
        bg: "#FF0000",
        url: "/banquedesang"
    }
]);


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map