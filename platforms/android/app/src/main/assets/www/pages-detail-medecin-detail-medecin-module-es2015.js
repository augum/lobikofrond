(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-medecin-detail-medecin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/detail-medecin/detail-medecin.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/detail-medecin/detail-medecin.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"danger\">\n      <ion-buttons slot=\"end\">\n          <ion-back-button (click)=\"retour()\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding\"  *ngIf=\"data\">\n  <ion-card >\n      <ion-card-header>\n          <ion-card-title>\n              {{ data.nom }}\n          </ion-card-title>\n          <ion-card-subtitle>\n              {{ data.prenom }}\n          </ion-card-subtitle>\n          <ion-card-subtitle>\n              {{ data.hopital }}\n          </ion-card-subtitle>\n          <ion-card-subtitle>\n            CNOM(CNOCD):  {{ data.cnom }}\n          </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content >\n        <ion-item>\n            <ion-label>Spécialité:</ion-label>\n          {{data.specialite}}\n        </ion-item>\n        <ion-label>Contact:</ion-label>\n          <ion-item>\n              <div  slot=\"end\">\n                  <ion-button color=\"success\" (click)=\"appelleRMed(data.telephone)\">\n                      <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                  </ion-button>\n                  <ion-button color=\"success\"(click)=\"sendSms()\">\n                      <ion-icon slot=\"end\" name=\"mail\"></ion-icon>\n                  </ion-button>\n\n                  <a href=\"https://api.whatsapp.com/send?phone={{data.telephone}}\">\n                    <ion-button color=\"success\"><ion-icon slot=\"end\" name=\"logo-whatsapp\"></ion-icon></ion-button>\n                  </a>\n\n              </div>\n          </ion-item>\n           Email: <a>{{ data.mail }}</a>\n           <p *ngIf=\"networkStatus && networkStatus.connected == true\">Visite:{{data.nbrV}}</p>\n          <p *ngIf=\"networkStatus && networkStatus.connected == true\">Appel:{{data.nbrA}}</p>\n      </ion-card-content>\n  </ion-card>\n  <ion-grid *ngIf=\"isSms==true\">\n    <ion-row>\n       <ion-col size=\"9\"><ion-textarea type=\"text\" [(ngModel)]=\"Sms\" placeholder=\"Votre message ici\"></ion-textarea></ion-col>\n        <ion-col size=\"3\">\n          <ion-button shape=\"full\" (click)=\"smsMed(data.telephone)\">\n              <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\n          </ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-grid >\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/detail-medecin/detail-medecin.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-medecin/detail-medecin.module.ts ***!
  \***************************************************************/
/*! exports provided: DetailMedecinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMedecinPageModule", function() { return DetailMedecinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detail_medecin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-medecin.page */ "./src/app/pages/detail-medecin/detail-medecin.page.ts");







const routes = [
    {
        path: '',
        component: _detail_medecin_page__WEBPACK_IMPORTED_MODULE_6__["DetailMedecinPage"]
    }
];
let DetailMedecinPageModule = class DetailMedecinPageModule {
};
DetailMedecinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detail_medecin_page__WEBPACK_IMPORTED_MODULE_6__["DetailMedecinPage"]]
    })
], DetailMedecinPageModule);



/***/ }),

/***/ "./src/app/pages/detail-medecin/detail-medecin.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/detail-medecin/detail-medecin.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC1tZWRlY2luL2RldGFpbC1tZWRlY2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/detail-medecin/detail-medecin.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/detail-medecin/detail-medecin.page.ts ***!
  \*************************************************************/
/*! exports provided: DetailMedecinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMedecinPage", function() { return DetailMedecinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_medecin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/medecin.service */ "./src/app/services/medecin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let DetailMedecinPage = class DetailMedecinPage {
    constructor(sms, router, route, callNumber, medecinService, toastctrl) {
        this.sms = sms;
        this.router = router;
        this.route = route;
        this.callNumber = callNumber;
        this.medecinService = medecinService;
        this.toastctrl = toastctrl;
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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
        });
    }
    retour() {
        this.router.navigateByUrl('/list');
    }
    appelleRMed(telephone) {
        console.log(telephone);
        this.updateMed();
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
    updateMed() {
        console.log(this.data._id);
        this.data.nbrA = this.data.nbrA + 1;
        this.medecinService.updateMed(this.data._id, this.data)
            .subscribe(res => {
        });
    }
};
DetailMedecinPage.ctorParameters = () => [
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_4__["SMS"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _services_medecin_service__WEBPACK_IMPORTED_MODULE_1__["MedecinService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
DetailMedecinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detail-medecin',
        template: __webpack_require__(/*! raw-loader!./detail-medecin.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/detail-medecin/detail-medecin.page.html"),
        styles: [__webpack_require__(/*! ./detail-medecin.page.scss */ "./src/app/pages/detail-medecin/detail-medecin.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_4__["SMS"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
        _services_medecin_service__WEBPACK_IMPORTED_MODULE_1__["MedecinService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
], DetailMedecinPage);



/***/ })

}]);
//# sourceMappingURL=pages-detail-medecin-detail-medecin-module-es2015.js.map