(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-banquedesang-banquedesang-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/banquedesang/banquedesang.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/banquedesang/banquedesang.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar [color]=\"networkStatus && networkStatus.connected ?'primary':'danger'\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-buttons slot=\"end\" >\n          <ion-menu-button ><ion-icon name=\"more\"></ion-icon></ion-menu-button>\n        </ion-buttons>\n        <ion-title >{{title}}</ion-title>\n      </ion-toolbar>\n      <ion-toolbar color=\"primary\" *ngIf=\"networkStatus && networkStatus.connected == true\">\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"creerHopital()\" *ngIf=\"buttonPlus==0\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"retour()\" *ngIf=\"buttonPlus==1\">\n                 <ion-icon name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n        </ion-toolbar>\n</ion-header>\n<ion-content>\n<div  *ngIf=\"networkStatus && networkStatus.connected == true\">\n  <div *ngIf=\"listHopitaux==0\">\n    <ion-segment [(ngModel)]='selectedView'>\n      <ion-segment-button value='proche' (click)=\" afficherHopP()\">\n        <ion-label>Proche de moi</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value='Autres'>\n          <ion-label>Autres</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"selectedView\" >\n        <div *ngSwitchCase=\"'proche'\">\n            <ion-card *ngFor=\"let banque of banqueSangsP\">\n                <ion-card-header>\n                    <ion-card-title>\n                      {{banque.nom}}\n                    </ion-card-title>\n               </ion-card-header>\n\n               <ion-card-content>\n                 <ion-item>\n                    {{banque.adresse}}\n                 </ion-item>\n                 <ion-item>\n                    Appeler\n                      <div  slot=\"end\">\n                          <ion-button color=\"success\" (click)=\"appelleR(banque.telephone)\">\n                              <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                          </ion-button>\n                      </div>\n                  </ion-item>\n               </ion-card-content>\n             </ion-card>\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Chargement...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </div>\n        <div *ngSwitchCase=\"'Autres'\">\n            <ion-toolbar color=\"secondary\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"9\" size-sm>\n                          <ion-searchbar animated=\"true\" [(ngModel)]=\"kw\"  showCancelButton placeholder=\"Ville\"></ion-searchbar>\n                      </ion-col>\n                      <ion-col size=\"3\" size-sm>\n                          <ion-button shape=\"round\"  (click)=\"afficherHop(kw)\"><ion-icon name=\"search\"></ion-icon></ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-toolbar>\n          <ion-card *ngFor=\"let banque of banqueSangs\" >\n            <ion-card-header>\n                <ion-card-title>\n                  {{banque.nom}}\n                </ion-card-title>\n           </ion-card-header>\n\n           <ion-card-content>\n             <ion-item>\n                {{banque.adresse}}\n             </ion-item>\n             <ion-item>\n                Appeler\n                  <div  slot=\"end\">\n                      <ion-button color=\"success\" (click)=\"appelleR(banque.telephone)\">\n                          <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                      </ion-button>\n                  </div>\n              </ion-item>\n           </ion-card-content>\n         </ion-card>\n         <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Chargement...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </div>\n    </div>\n  </div>\n  <div *ngIf=\"listHopitaux==1\">\n       <ion-item>\n          <ion-label position=\"floating\" >Nom:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"bs.nom\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Téléphone:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"bs.telephone\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Adresse :</ion-label>\n          <ion-textarea [(ngModel)]=\"bs.adresse\" ></ion-textarea>\n        </ion-item>\n    <ion-button expand=\"block\" fill=\"outline\"(click)=\"enregistrer(bs)\">Enregistrer</ion-button>\n  </div>\n</div>\n<div *ngIf=\"networkStatus && networkStatus.connected == false\" >\n  <ion-card *ngFor=\"let banque of banqueSangsP\">\n      <ion-card-header>\n          <ion-card-title>\n            {{banque.nom}}\n          </ion-card-title>\n     </ion-card-header>\n\n     <ion-card-content>\n       <ion-item>\n          {{banque.adresse}}\n       </ion-item>\n       <ion-item>\n          Appeler\n            <div  slot=\"end\">\n                <ion-button color=\"success\" (click)=\"appelleR(banque.telephone)\">\n                    <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                </ion-button>\n            </div>\n        </ion-item>\n     </ion-card-content>\n   </ion-card>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/banquedesang/banquedesang.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/banquedesang/banquedesang.module.ts ***!
  \***********************************************************/
/*! exports provided: BanquedesangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanquedesangPageModule", function() { return BanquedesangPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _banquedesang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banquedesang.page */ "./src/app/pages/banquedesang/banquedesang.page.ts");







const routes = [
    {
        path: '',
        component: _banquedesang_page__WEBPACK_IMPORTED_MODULE_6__["BanquedesangPage"]
    }
];
let BanquedesangPageModule = class BanquedesangPageModule {
};
BanquedesangPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_banquedesang_page__WEBPACK_IMPORTED_MODULE_6__["BanquedesangPage"]]
    })
], BanquedesangPageModule);



/***/ }),

/***/ "./src/app/pages/banquedesang/banquedesang.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/banquedesang/banquedesang.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhbnF1ZWRlc2FuZy9iYW5xdWVkZXNhbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/banquedesang/banquedesang.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/banquedesang/banquedesang.page.ts ***!
  \*********************************************************/
/*! exports provided: BanquedesangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanquedesangPage", function() { return BanquedesangPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_banquedesang_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/banquedesang.service */ "./src/app/services/banquedesang.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"];
let BanquedesangPage = class BanquedesangPage {
    constructor(router, bsservice, geolocation, toastctrl, geocoder, callNumber) {
        this.router = router;
        this.bsservice = bsservice;
        this.geolocation = geolocation;
        this.toastctrl = toastctrl;
        this.geocoder = geocoder;
        this.callNumber = callNumber;
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Banque de sang';
        this.kw = "";
        this.localite = "";
        this.bs = {};
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
            if (this.networkStatus.connected == false) {
                this.banqueSangsP = [
                    { nom: 'Banque de sang Hopital saint Joseph ', telephone: '+243854878767', ville: 'Kinshasa', adresse: '14 ème rue Limete residentiel', localite: 'Limete' }
                ];
            }
            else if (this.networkStatus.connected == true) {
                this.afficherHopP();
            }
        });
    }
    afficherHopP() {
        this.geolocation.getCurrentPosition().then((position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            var options = {
                useLocale: true,
                maxResults: 1
            };
            this.geocoder.reverseGeocode(latitude, longitude, options).
                then((results) => {
                var localite = results[0].subLocality;
                this.bsservice.getbsP(localite)
                    .subscribe(data => {
                    this.banqueSangsP = data;
                }, err => {
                    console.log(err);
                });
            });
        }).catch((error) => {
            console.log('Erreur pour la localisation probleme internet', error);
        });
    }
    afficherHop(kw) {
        this.bsservice.getbs(kw)
            .subscribe(data => {
            this.banqueSangs = data;
        }, err => {
            console.log(err);
        });
    }
    creerHopital() {
        this.listHopitaux = 1;
        this.buttonPlus = 1;
        this.title = 'Création BS';
    }
    retour() {
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Banque de sang';
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.banqueSangs.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    enregistrer(bs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(bs);
            this.geolocation.getCurrentPosition().then((position) => {
                bs.latitude = position.coords.latitude;
                bs.longitude = position.coords.longitude;
                var options = {
                    useLocale: true,
                    maxResults: 1
                };
                this.geocoder.reverseGeocode(bs.latitude, bs.longitude, options).
                    then((results) => {
                    bs.localite = results[0].subLocality;
                    bs.ville = results[0].administrativeArea;
                    this.bsservice.enregistrerMed(bs)
                        .subscribe(res => {
                        this.bs = res;
                        console.log(bs);
                        this.retour();
                        this.retour();
                    });
                });
            }).catch((error) => {
                console.log('Erreur pour la localisation probleme internet', error);
            });
        });
    }
    appelleR(telephone) {
        console.log(telephone);
        this.callNumber.callNumber(telephone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
};
BanquedesangPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_banquedesang_service__WEBPACK_IMPORTED_MODULE_1__["BanquedesangService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] }
];
BanquedesangPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-banquedesang',
        template: __webpack_require__(/*! raw-loader!./banquedesang.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/banquedesang/banquedesang.page.html"),
        styles: [__webpack_require__(/*! ./banquedesang.page.scss */ "./src/app/pages/banquedesang/banquedesang.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_banquedesang_service__WEBPACK_IMPORTED_MODULE_1__["BanquedesangService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]])
], BanquedesangPage);



/***/ }),

/***/ "./src/app/services/banquedesang.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/banquedesang.service.ts ***!
  \**************************************************/
/*! exports provided: BanquedesangService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BanquedesangService", function() { return BanquedesangService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BanquedesangService = class BanquedesangService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.host = "http://41.242.128.107:780";
    }
    getbs(kw) {
        return this.httpclient.get(this.host + "/banque?kw=" + kw);
    }
    getbsP(kw) {
        return this.httpclient.get(this.host + "/banquep?kw=" + kw);
    }
    enregistrerMed(bs) {
        return this.httpclient.post(this.host + "/banque", bs);
    }
};
BanquedesangService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BanquedesangService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], BanquedesangService);



/***/ })

}]);
//# sourceMappingURL=pages-banquedesang-banquedesang-module-es2015.js.map