(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pharmacie-pharmacie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pharmacie/pharmacie.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pharmacie/pharmacie.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"networkStatus && networkStatus.connected ?'primary':'danger'\">\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-buttons slot=\"end\" >\n      <ion-menu-button ><ion-icon name=\"more\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{title}}</ion-title>\n  </ion-toolbar>\n    <ion-toolbar color=\"primary\" *ngIf=\"networkStatus && networkStatus.connected == true\">\n          <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"creerPharmacie()\" *ngIf=\"buttonPlus==0\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-button>\n          <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"retour()\" *ngIf=\"buttonPlus==1\">\n               <ion-icon name=\"arrow-round-back\"></ion-icon>\n          </ion-button>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"networkStatus && networkStatus.connected == true\" >\n    <div *ngIf=\"listPharmacie==0\">\n      <ion-segment [(ngModel)]='selectedView'>\n        <ion-segment-button value='proche' (click)=\"afficherPhar()\">\n          <ion-label>Proche de moi</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value='Autres'>\n            <ion-label>Autres</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div [ngSwitch]=\"selectedView\" >\n          <div *ngSwitchCase=\"'proche'\">\n              <ion-card *ngFor=\"let pharmacie of pharmaciesP\">\n                  <ion-card-header>\n                      <ion-card-title>\n                        {{pharmacie.nom}}\n                      </ion-card-title>\n                 </ion-card-header>\n\n                 <ion-card-content>\n                   <ion-item>\n                      {{pharmacie.adresse}}\n                   </ion-item>\n                   <ion-item>\n                      Appeler\n                        <div  slot=\"end\">\n                            <ion-button color=\"success\" (click)=\"appelleR(pharmacie.telephone)\">\n                                <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                            </ion-button>\n                        </div>\n                    </ion-item>\n                 </ion-card-content>\n               </ion-card>\n            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n              <ion-infinite-scroll-content\n                      loadingSpinner=\"bubbles\"\n                      loadingText=\"Chargement...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </div>\n          <div *ngSwitchCase=\"'Autres'\">\n              <ion-toolbar color=\"secondary\">\n                  <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"9\" size-sm>\n                            <ion-searchbar animated=\"true\" [(ngModel)]=\"kw\"  showCancelButton placeholder=\"Ville\"></ion-searchbar>\n                        </ion-col>\n                        <ion-col size=\"3\" size-sm>\n                            <ion-button shape=\"round\"  (click)=\"afficherPharmacieV(kw)\"><ion-icon name=\"search\"></ion-icon></ion-button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-toolbar>\n            <ion-card *ngFor=\"let pharmacie of pharmacies\">\n              <ion-card-header>\n                  <ion-card-title>\n                    {{pharmacie.nom}}\n                  </ion-card-title>\n             </ion-card-header>\n\n             <ion-card-content>\n               <ion-item>\n                  {{pharmacie.adresse}}\n               </ion-item>\n               <ion-item>\n                  Appeler\n                    <div  slot=\"end\">\n                        <ion-button color=\"success\" (click)=\"appelleR(pharmacie.telephone)\">\n                            <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                        </ion-button>\n                    </div>\n                </ion-item>\n             </ion-card-content>\n           </ion-card>\n           <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n              <ion-infinite-scroll-content\n                      loadingSpinner=\"bubbles\"\n                      loadingText=\"Chargement...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </div>\n      </div>\n    </div>\n  <div *ngIf=\"listPharmacie==1\">\n\n       <ion-item>\n          <ion-label position=\"floating\" >Nom:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"pharmacie.nom\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Téléphone:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"pharmacie.telephone\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Adresse :</ion-label>\n          <ion-textarea [(ngModel)]=\"pharmacie.adresse\" ></ion-textarea>\n        </ion-item>\n\n        <ion-button expand=\"block\" fill=\"outline\"(click)=\"enregistrer(pharmacie)\">Enregistrer</ion-button>\n  </div>\n  </div>\n  <div *ngIf=\"networkStatus && networkStatus.connected == false\" >\n    <ion-card *ngFor=\"let pharmacie of pharmaciesP\">\n        <ion-card-header>\n            <ion-card-title>\n              {{pharmacie.nom}}\n            </ion-card-title>\n       </ion-card-header>\n\n       <ion-card-content>\n         <ion-item>\n            {{pharmacie.adresse}}\n         </ion-item>\n         <ion-item>\n            Appeler\n              <div  slot=\"end\">\n                  <ion-button color=\"success\" (click)=\"appelleR(pharmacie.telephone)\">\n                      <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                  </ion-button>\n              </div>\n          </ion-item>\n       </ion-card-content>\n     </ion-card>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/pharmacie/pharmacie.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pharmacie/pharmacie.module.ts ***!
  \*****************************************************/
/*! exports provided: PharmaciePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciePageModule", function() { return PharmaciePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pharmacie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pharmacie.page */ "./src/app/pages/pharmacie/pharmacie.page.ts");







const routes = [
    {
        path: '',
        component: _pharmacie_page__WEBPACK_IMPORTED_MODULE_6__["PharmaciePage"]
    }
];
let PharmaciePageModule = class PharmaciePageModule {
};
PharmaciePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pharmacie_page__WEBPACK_IMPORTED_MODULE_6__["PharmaciePage"]]
    })
], PharmaciePageModule);



/***/ }),

/***/ "./src/app/pages/pharmacie/pharmacie.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/pharmacie/pharmacie.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BoYXJtYWNpZS9waGFybWFjaWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/pharmacie/pharmacie.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/pharmacie/pharmacie.page.ts ***!
  \***************************************************/
/*! exports provided: PharmaciePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmaciePage", function() { return PharmaciePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_pharmacie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/pharmacie.service */ "./src/app/services/pharmacie.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let PharmaciePage = class PharmaciePage {
    constructor(geolocation, geocoder, pharmacieservice, callNumber) {
        this.geolocation = geolocation;
        this.geocoder = geocoder;
        this.pharmacieservice = pharmacieservice;
        this.callNumber = callNumber;
        this.resultat = "";
        this.kw = "";
        this.listPharmacie = 0;
        this.buttonPlus = 0;
        this.title = 'Pharmacies';
        this.pharmacie = {};
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*console.log("network status change",status);
            this.networkStatus = status;
           });
        
           this.networkStatus = await Network.getStatus();
           if(this.networkStatus.connected == false){
            this.pharmaciesP =[
              {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'},
              {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'}
            ]
           }else if(this.networkStatus.connected == true){
            this.afficherPhar();
          }*/
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
            if (this.networkStatus.connected == false) {
                this.pharmaciesP = [
                /*{nom:'',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'},
                {nom:'Mwana teba phar',telephone:'0817454012',adresse:'12 guimbeo',ville:'Katakokombe',localite:'Lingwala'}*/
                ];
            }
            else if (this.networkStatus.connected == true) {
                this.afficherPhar();
            }
        });
    }
    afficherPhar() {
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
                this.pharmacieservice.getpharmacie(localite)
                    .subscribe(data => {
                    this.pharmaciesP = data;
                }, err => {
                    console.log(err);
                });
            });
        }).catch((error) => {
            console.log('Erreur pour la localisation probleme internet', error);
        });
    }
    afficherPharmacieV(kw) {
        this.pharmacieservice.getPharv(kw)
            .subscribe(data => {
            this.pharmacies = data;
        }, err => {
            console.log(err);
        });
    }
    appelleR(telephone) {
        console.log(telephone);
        this.callNumber.callNumber(telephone, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    creerPharmacie() {
        this.listPharmacie = 1;
        this.buttonPlus = 1;
        this.title = 'Création pharmacie';
    }
    retour() {
        this.listPharmacie = 0;
        this.buttonPlus = 0;
        this.title = 'Pharmacies';
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.pharmacies.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    enregistrer(pharmacie) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(pharmacie);
            this.geolocation.getCurrentPosition().then((position) => {
                pharmacie.latitude = position.coords.latitude;
                pharmacie.longitude = position.coords.longitude;
                var options = {
                    useLocale: true,
                    maxResults: 1
                };
                this.geocoder.reverseGeocode(pharmacie.latitude, pharmacie.longitude, options).
                    then((results) => {
                    pharmacie.localite = results[0].subLocality;
                    pharmacie.ville = results[0].administrativeArea;
                    this.pharmacieservice.enregistrerPhar(pharmacie)
                        .subscribe(res => {
                        this.retour();
                    });
                });
            }).catch((error) => {
                console.log('Erreur pour la localisation probleme internet', error);
            });
        });
    }
};
PharmaciePage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _services_pharmacie_service__WEBPACK_IMPORTED_MODULE_2__["PharmacieService"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"] }
];
PharmaciePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pharmacie',
        template: __webpack_require__(/*! raw-loader!./pharmacie.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pharmacie/pharmacie.page.html"),
        styles: [__webpack_require__(/*! ./pharmacie.page.scss */ "./src/app/pages/pharmacie/pharmacie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"], _services_pharmacie_service__WEBPACK_IMPORTED_MODULE_2__["PharmacieService"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"]])
], PharmaciePage);



/***/ }),

/***/ "./src/app/services/pharmacie.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/pharmacie.service.ts ***!
  \***********************************************/
/*! exports provided: PharmacieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacieService", function() { return PharmacieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PharmacieService = class PharmacieService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.host = "http://41.242.128.107:780";
    }
    //recupere la pharmacie proche
    getpharmacie(kw) {
        return this.httpclient.get(this.host + "/pharmacies?kw=" + kw);
    }
    //recupere la pharmacie dans la ville
    getPharv(kw) {
        return this.httpclient.get(this.host + "/pharmacieV?kw=" + kw);
    }
    enregistrerPhar(pharmacie) {
        return this.httpclient.post(this.host + "/pharmacies", pharmacie);
    }
};
PharmacieService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PharmacieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PharmacieService);



/***/ })

}]);
//# sourceMappingURL=pages-pharmacie-pharmacie-module-es2015.js.map