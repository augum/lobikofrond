(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar >\n        <ion-buttons slot=\"start\" >\n            <img src=\"/assets/img/logo.png\">\n          </ion-buttons>\n      <ion-title *ngIf=\"networkStatus\" [color]=\"networkStatus && networkStatus.connected ?'primary':'danger'\">{{networkStatus.connected ?'Online':'Offline'}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content >\n    <p><img src=\"/assets/img/homeText.svg\" ></p>\n    <img src=\"/assets/img/trouve.svg\" >\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button  (click)=\" medecin()\" class=\"homecard\" fill=\"outline\">\n            <img src=\"/assets/img/medecin.png\">\n          </ion-button>\n\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button class=\"homered\" fill=\"outline\" routerLink=\"/hopital\" >\n            <img src=\"/assets/img/phar.png\">\n          </ion-button>\n        </ion-col>\n       <ion-col size=\"4\">\n           <ion-button class=\"homephar\" fill=\"outline\" routerLink=\"/pharmacie\">\n             <ion-icon name=\"thumbs-up\"></ion-icon>\n           </ion-button>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\" >\n          <ion-button  routerLink=\"/ambulance\" class=\"homecard\" fill=\"outline\" >\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\" >\n          <ion-button  fill=\"outline\" class=\"homered\" routerLink=\"/banquedesang\">\n            <ion-icon name=\"thumbs-up\"></ion-icon>\n          </ion-button>\n        </ion-col>\n       <ion-col size=\"4\">\n           <ion-button class=\"homephar\" fill=\"outline\" color=\"primary\" (click)=\"sharing()\" >\n             <ion-icon name=\"share\"></ion-icon>\n           </ion-button>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  <ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" routerLink=\"/apropos\" ><ion-icon name=\"information-circle\"></ion-icon></ion-button>\n        </ion-col>\n        <ion-col size=\"4\" *ngFor=\"let l of likes\" >\n          <ion-button shape=\"round\" fill=\"outline\" (click)=\"jaime(l)\" color=\"primary\"><ion-icon name=\"thumbs-up\"></ion-icon></ion-button>\n        </ion-col>\n       <ion-col size=\"4\">\n           <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" (click)=\"sharing()\" >\n             <ion-icon name=\"share\"></ion-icon>\n           </ion-button>\n       </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  </ion-footer>\n"

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

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400&display=swap\");\n.avatar {\n  position: absolute;\n  width: 114px;\n  height: 138px;\n  left: 32px;\n  top: 377px;\n  background: #576DB3;\n  border-radius: 20px;\n}\n.vector {\n  position: absolute;\n  left: 10.96%;\n  right: 10.96%;\n  top: 0%;\n  bottom: 0%;\n  background: #FFFFFF;\n}\n.medecinTxt {\n  position: absolute;\n  width: 72px;\n  height: 18px;\n  left: 53px;\n  top: 483px;\n  font-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 18px;\n  /* identical to box height */\n  color: #FFFFFF;\n}\n.titre {\n  position: absolute;\n  width: 275px;\n  height: 72px;\n  left: 20px;\n  top: 88px;\n  font-family: Montserrat Bold;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 36px;\n  color: #132569;\n}\n.apropos {\n  position: absolute;\n  width: 60px;\n  height: 14px;\n  left: 106px;\n  top: 607px;\n  ont-family: \"Montserrat\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 14px;\n  /* identical to box height */\n  color: #000000;\n}\n.rectangle {\n  position: absolute;\n  width: 136px;\n  height: 50px;\n  left: 42px;\n  top: 589px;\n  background: #FFFFFF;\n  border: 1px solid #C4C4C4;\n  box-sizing: border-box;\n  border-radius: 18px;\n}\n.homecard {\n  width: 85px;\n  height: 118px;\n  background: #576DB3;\n  border-radius: 10px;\n}\n.homered {\n  width: 85px;\n  height: 118px;\n  background: #C92325;\n  border-radius: 10px;\n}\n.homephar {\n  width: 85px;\n  height: 118px;\n  background: #051C9A;\n  border-radius: 10px;\n}\n.comp {\n  position: absolute;\n  left: 53.07%;\n  right: 26.42%;\n  top: 53.41%;\n  bottom: 0.3%;\n  background: #FFFFFF;\n}\n.cap1 {\n  left: 0.05%;\n  right: 46.24%;\n  top: 33.6%;\n  bottom: 0%;\n  background: #FFFFFF;\n}\n.cap2 {\n  position: absolute;\n  left: 33.19%;\n  right: 0.06%;\n  top: 0%;\n  bottom: 45.86%;\n  background: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9IOlxcRm9udEVuZEFwcFxcbG9iaWtveWFjb25nb0JpZW4xMFxcbWFrdWxvYmlrby9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsc0ZBQUE7QUFDUjtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBQTtBREVBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7QUNBQTtBREVBO0VBQ0Usa0JBQUE7RUFDRixXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBRUEscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFHQSxjQUFBO0FDRkE7QURJQTtFQUNFLGtCQUFBO0VBQ0YsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUNIQTtBREtBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FDSEE7QURLQTtFQUNFLGtCQUFBO0VBQ0YsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUVBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDSEE7QURLQTtFQUVDLFdBQUE7RUFDQSxhQUFBO0VBR0QsbUJBQUE7RUFDQSxtQkFBQTtBQ0xBO0FET0E7RUFFQyxXQUFBO0VBQ0EsYUFBQTtFQUdELG1CQUFBO0VBQ0EsbUJBQUE7QUNQQTtBRFNBO0VBRUMsV0FBQTtFQUNBLGFBQUE7RUFHRCxtQkFBQTtFQUNBLG1CQUFBO0FDVEE7QURXQTtFQUNFLGtCQUFBO0VBQ0YsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1CQUFBO0FDVEE7QURXQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtBQ1RBO0FEV0E7RUFDRSxrQkFBQTtFQUNGLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtBQ1RBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwJmRpc3BsYXk9c3dhcCcpO1xuLmF2YXRhcntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMTRweDtcbmhlaWdodDogMTM4cHg7XG5sZWZ0OiAzMnB4O1xudG9wOiAzNzdweDtcblxuYmFja2dyb3VuZDogIzU3NkRCMztcbmJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4udmVjdG9ye1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogMTAuOTYlO1xucmlnaHQ6IDEwLjk2JTtcbnRvcDogMCU7XG5ib3R0b206IDAlO1xuXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLm1lZGVjaW5UeHR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiA3MnB4O1xuaGVpZ2h0OiAxOHB4O1xubGVmdDogNTNweDtcbnRvcDogNDgzcHg7XG5cbmZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtc2l6ZTogMThweDtcbmxpbmUtaGVpZ2h0OiAxOHB4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuXG5jb2xvcjogI0ZGRkZGRjtcbn1cbi50aXRyZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xud2lkdGg6IDI3NXB4O1xuaGVpZ2h0OiA3MnB4O1xubGVmdDogMjBweDtcbnRvcDogODhweDtcblxuZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgQm9sZDtcbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuZm9udC1zaXplOiAzNnB4O1xubGluZS1oZWlnaHQ6IDM2cHg7XG5cbmNvbG9yOiAjMTMyNTY5O1xufVxuLmFwcm9wb3N7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG53aWR0aDogNjBweDtcbmhlaWdodDogMTRweDtcbmxlZnQ6IDEwNnB4O1xudG9wOiA2MDdweDtcblxub250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTRweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5jb2xvcjogIzAwMDAwMDtcbn1cbi5yZWN0YW5nbGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbndpZHRoOiAxMzZweDtcbmhlaWdodDogNTBweDtcbmxlZnQ6IDQycHg7XG50b3A6IDU4OXB4O1xuXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuYm9yZGVyOiAxcHggc29saWQgI0M0QzRDNDtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5ib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuLmhvbWVjYXJke1xuLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gd2lkdGg6IDg1cHg7XG4gaGVpZ2h0OiAxMThweDtcbi8vbGVmdDogMzJweDtcbi8vdG9wOiAzNzdweDtcbmJhY2tncm91bmQ6ICM1NzZEQjM7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmhvbWVyZWR7XG4gLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gd2lkdGg6IDg1cHg7XG4gaGVpZ2h0OiAxMThweDtcbi8vbGVmdDogMTYwcHg7XG4vL3RvcDogMzc3cHg7XG5iYWNrZ3JvdW5kOiAjQzkyMzI1O1xuYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ob21lcGhhcntcbiAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiB3aWR0aDogODVweDtcbiBoZWlnaHQ6IDExOHB4O1xuLy9sZWZ0OiAxNjBweDtcbi8vdG9wOiAzNzdweDtcbmJhY2tncm91bmQ6ICMwNTFDOUE7XG5ib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvbXB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmxlZnQ6IDUzLjA3JTtcbnJpZ2h0OiAyNi40MiU7XG50b3A6IDUzLjQxJTtcbmJvdHRvbTogMC4zJTtcblxuYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi5jYXAxe1xubGVmdDogMC4wNSU7XG5yaWdodDogNDYuMjQlO1xudG9wOiAzMy42JTtcbmJvdHRvbTogMCU7XG5cbmJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4uY2FwMntcbiAgcG9zaXRpb246IGFic29sdXRlO1xubGVmdDogMzMuMTklO1xucmlnaHQ6IDAuMDYlO1xudG9wOiAwJTtcbmJvdHRvbTogNDUuODYlO1xuXG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwJmRpc3BsYXk9c3dhcFwiKTtcbi5hdmF0YXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMTRweDtcbiAgaGVpZ2h0OiAxMzhweDtcbiAgbGVmdDogMzJweDtcbiAgdG9wOiAzNzdweDtcbiAgYmFja2dyb3VuZDogIzU3NkRCMztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLnZlY3RvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTAuOTYlO1xuICByaWdodDogMTAuOTYlO1xuICB0b3A6IDAlO1xuICBib3R0b206IDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4ubWVkZWNpblR4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogMThweDtcbiAgbGVmdDogNTNweDtcbiAgdG9wOiA0ODNweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdHJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjc1cHg7XG4gIGhlaWdodDogNzJweDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiA4OHB4O1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCBCb2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogIzEzMjU2OTtcbn1cblxuLmFwcm9wb3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGxlZnQ6IDEwNnB4O1xuICB0b3A6IDYwN3B4O1xuICBvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5yZWN0YW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMzZweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZWZ0OiA0MnB4O1xuICB0b3A6IDU4OXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQzRDNEM0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuXG4uaG9tZWNhcmQge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiAxMThweDtcbiAgYmFja2dyb3VuZDogIzU3NkRCMztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhvbWVyZWQge1xuICB3aWR0aDogODVweDtcbiAgaGVpZ2h0OiAxMThweDtcbiAgYmFja2dyb3VuZDogI0M5MjMyNTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmhvbWVwaGFyIHtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogMTE4cHg7XG4gIGJhY2tncm91bmQ6ICMwNTFDOUE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb21wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1My4wNyU7XG4gIHJpZ2h0OiAyNi40MiU7XG4gIHRvcDogNTMuNDElO1xuICBib3R0b206IDAuMyU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5jYXAxIHtcbiAgbGVmdDogMC4wNSU7XG4gIHJpZ2h0OiA0Ni4yNCU7XG4gIHRvcDogMzMuNiU7XG4gIGJvdHRvbTogMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cbi5jYXAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMy4xOSU7XG4gIHJpZ2h0OiAwLjA2JTtcbiAgdG9wOiAwJTtcbiAgYm90dG9tOiA0NS44NiU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59Il19 */"

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








const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let HomePage = class HomePage {
    constructor(platform, route, socialSharing, likeService, toastctrl) {
        this.platform = platform;
        this.route = route;
        this.socialSharing = socialSharing;
        this.likeService = likeService;
        this.toastctrl = toastctrl;
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
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
        });
    }
    medecin() {
        console.log("ok");
        this.route.navigate(['list']);
    }
    sharing() {
        this.socialSharing.share('', '', '', 'https//lobiko.com');
    }
    like() {
        this.likeService.afficherlike()
            .subscribe(data => {
            this.likes = data;
        });
    }
    jaime(like) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(like._id);
            like.like = like.like + 1;
            this.likeService.updatelike(like._id, like)
                .subscribe(res => {
            });
            const toast = yield this.toastctrl.create({
                header: 'Succès',
                message: 'Merci de votre confiance',
                color: 'success',
                position: 'bottom',
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
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
        _services_like_service__WEBPACK_IMPORTED_MODULE_1__["LikeService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map