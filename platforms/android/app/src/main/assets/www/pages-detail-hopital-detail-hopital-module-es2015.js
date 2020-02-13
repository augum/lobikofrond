(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-hopital-detail-hopital-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-hopital/detail-hopital.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-hopital/detail-hopital.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"danger\">\n        <ion-buttons slot=\"end\">\n            <ion-back-button (click)=\"retour()\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Infos sur {{data.nom}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"padding\" *ngIf=\"data\" >\n    <ion-card >\n        <ion-card-header>\n            <ion-card-title>\n                {{ data.nom }}\n            </ion-card-title>\n            <ion-card-subtitle>\n\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content >\n            <ion-label>Adresse:</ion-label>\n            <ion-item>\n                {{data.adresse}}\n            </ion-item>\n            <ion-label>Services organisés</ion-label>\n              <ion-card>\n                <ion-card-content>\n                    {{data.service}}\n               </ion-card-content>\n              </ion-card>\n            <ion-item>\n              Contact:\n                <div  slot=\"end\">\n                    <ion-button color=\"success\" (click)=\"appelleRMed(data.telephone)\">\n                        <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                    </ion-button>\n                    <ion-button color=\"success\"(click)=\"sendSms()\">\n                        <ion-icon slot=\"end\" name=\"mail\"></ion-icon>\n                    </ion-button>\n                </div>\n            </ion-item>\n           Email: <a>{{ data.mail }}</a>\n        </ion-card-content>\n    </ion-card>\n    <ion-grid *ngIf=\"isSms==true\">\n      <ion-row>\n         <ion-col size=\"9\"><ion-textarea type=\"text\" [(ngModel)]=\"Sms\" placeholder=\"Votre message ici\"></ion-textarea></ion-col>\n          <ion-col size=\"3\">\n            <ion-button shape=\"full\" (click)=\"smsMed(data.telephone)\">\n                <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n            </ion-button>\n          </ion-col>\n      </ion-row>\n    </ion-grid >\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail-hopital/detail-hopital.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-hopital/detail-hopital.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailHopitalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHopitalPageModule", function() { return DetailHopitalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_hopital_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-hopital.page */ "./src/app/pages/detail-hopital/detail-hopital.page.ts");







const routes = [
    {
        path: '',
        component: _detail_hopital_page__WEBPACK_IMPORTED_MODULE_6__["DetailHopitalPage"]
    }
];
let DetailHopitalPageModule = class DetailHopitalPageModule {
};
DetailHopitalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_hopital_page__WEBPACK_IMPORTED_MODULE_6__["DetailHopitalPage"]]
    })
], DetailHopitalPageModule);



/***/ }),

/***/ "./src/app/pages/detail-hopital/detail-hopital.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-hopital/detail-hopital.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1ob3BpdGFsL2RldGFpbC1ob3BpdGFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/detail-hopital/detail-hopital.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-hopital/detail-hopital.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailHopitalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailHopitalPage", function() { return DetailHopitalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");







let DetailHopitalPage = class DetailHopitalPage {
    constructor(router, route, callNumber, toastctrl, sms) {
        this.router = router;
        this.route = route;
        this.callNumber = callNumber;
        this.toastctrl = toastctrl;
        this.sms = sms;
        this.Sms = "";
        this.isSms = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.special) {
                this.data = JSON.parse(params.special);
                console.log(this.data);
            }
        });
    }
    ngOnInit() {
    }
    retour() {
        this.router.navigateByUrl('/hopital');
    }
    appelleRMed(telephone) {
        console.log(telephone);
        this.callNumber.callNumber(telephone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    sendSms() {
        this.isSms = true;
    }
    smsMed(telephone) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                console.log(telephone);
                console.log(this.Sms);
                this.sms.send(telephone, this.Sms);
                const toast = yield this.toastctrl.create({
                    header: 'Succès',
                    message: 'Message envoyé ',
                    color: 'success',
                    position: 'bottom',
                    duration: 3000
                });
                this.Sms = "";
                toast.present();
            }
            catch (error) {
                const toast = yield this.toastctrl.create({
                    header: 'Erreur',
                    message: 'Echec envoie',
                    color: 'danger',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
            this.isSms = false;
        });
    }
};
DetailHopitalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] }
];
DetailHopitalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-hopital',
        template: __webpack_require__(/*! raw-loader!./detail-hopital.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-hopital/detail-hopital.page.html"),
        styles: [__webpack_require__(/*! ./detail-hopital.page.scss */ "./src/app/pages/detail-hopital/detail-hopital.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"]])
], DetailHopitalPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-hopital-detail-hopital-module-es2015.js.map