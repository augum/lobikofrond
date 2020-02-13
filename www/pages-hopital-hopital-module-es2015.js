(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hopital-hopital-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hopital/hopital.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hopital/hopital.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar [color]=\"networkStatus && networkStatus.connected ?'primary':'danger'\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-buttons slot=\"end\" >\n          <ion-menu-button ><ion-icon name=\"more\"></ion-icon></ion-menu-button>\n        </ion-buttons>\n        <ion-title > {{title}} </ion-title>\n      </ion-toolbar>\n      <ion-toolbar color=\"primary\" *ngIf=\"networkStatus && networkStatus.connected == true\">\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"creerHopital()\" *ngIf=\"buttonPlus==0\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"retour()\" *ngIf=\"buttonPlus==1\">\n                 <ion-icon name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n        </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div  *ngIf=\"networkStatus && networkStatus.connected == true\">\n    <div *ngIf=\"listHopitaux==0\">\n      <ion-segment [(ngModel)]='selectedView'>\n        <ion-segment-button value='proche' (click)=\" afficherHopP()\">\n          <ion-label>Proche de moi</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value='Autres'>\n            <ion-label>Autres</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n      <div [ngSwitch]=\"selectedView\" >\n          <div *ngSwitchCase=\"'proche'\">\n              <ion-card *ngFor=\"let hopital of hopitauxp\" (click)=\"DetailHopital(hopital)\" >\n                  <ion-card-header>\n                      <ion-card-title>\n                        {{hopital.nom}}\n                      </ion-card-title>\n                 </ion-card-header>\n\n                 <ion-card-content>\n                   <ion-item>\n                      {{hopital.adresse}}\n                   </ion-item>\n                 </ion-card-content>\n               </ion-card>\n            <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n              <ion-infinite-scroll-content\n                      loadingSpinner=\"bubbles\"\n                      loadingText=\"Chargement...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </div>\n          <div *ngSwitchCase=\"'Autres'\">\n              <ion-toolbar color=\"secondary\">\n                  <ion-grid>\n                      <ion-row>\n                        <ion-col size=\"9\" size-sm>\n                            <ion-searchbar animated=\"true\" [(ngModel)]=\"kw\"  showCancelButton placeholder=\"Ville\"></ion-searchbar>\n                        </ion-col>\n                        <ion-col size=\"3\" size-sm>\n                            <ion-button shape=\"round\"  (click)=\"afficherHop(kw)\"><ion-icon name=\"search\"></ion-icon></ion-button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </ion-toolbar>\n            <ion-card *ngFor=\"let hopital of hopitaux\" (click)=\"DetailHopital(hopital)\" >\n              <ion-card-header>\n                  <ion-card-title>\n                    {{hopital.nom}}\n                  </ion-card-title>\n             </ion-card-header>\n\n             <ion-card-content>\n               <ion-item>\n                  {{hopital.adresse}}\n               </ion-item>\n             </ion-card-content>\n           </ion-card>\n           <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n              <ion-infinite-scroll-content\n                      loadingSpinner=\"bubbles\"\n                      loadingText=\"Chargement...\">\n              </ion-infinite-scroll-content>\n            </ion-infinite-scroll>\n          </div>\n      </div>\n    </div>\n    <div *ngIf=\"listHopitaux==1\">\n         <ion-item>\n            <ion-label position=\"floating\" >Nom:</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"hopital.nom\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\" >Téléphone:</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"hopital.telephone\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\" >Email:</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"hopital.mail\" ></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\" >Adresse :</ion-label>\n            <ion-textarea [(ngModel)]=\"hopital.adresse\" ></ion-textarea>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\" >Services organisés:</ion-label>\n            <ion-textarea [(ngModel)]=\"hopital.service\" ></ion-textarea>\n          </ion-item>\n\n               <ion-button expand=\"block\" fill=\"outline\"(click)=\"enregistrer(hopital)\">Enregistrer</ion-button>\n    </div>\n  </div>\n  <div *ngIf=\"networkStatus && networkStatus.connected == false\" >\n    <ion-card *ngFor=\"let hopital of hopitauxp\" (click)=\"DetailHopital(hopital)\" >\n        <ion-card-header>\n            <ion-card-title>\n              {{hopital.nom}}\n            </ion-card-title>\n       </ion-card-header>\n\n       <ion-card-content>\n         <ion-item>\n            {{hopital.adresse}}\n         </ion-item>\n       </ion-card-content>\n     </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/hopital/hopital.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/hopital/hopital.module.ts ***!
  \*************************************************/
/*! exports provided: HopitalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopitalPageModule", function() { return HopitalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hopital_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hopital.page */ "./src/app/pages/hopital/hopital.page.ts");







const routes = [
    {
        path: '',
        component: _hopital_page__WEBPACK_IMPORTED_MODULE_6__["HopitalPage"]
    }
];
let HopitalPageModule = class HopitalPageModule {
};
HopitalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_hopital_page__WEBPACK_IMPORTED_MODULE_6__["HopitalPage"]]
    })
], HopitalPageModule);



/***/ }),

/***/ "./src/app/pages/hopital/hopital.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/hopital/hopital.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9waXRhbC9IOlxcRm9udEVuZEFwcFxcbG9iaWtveWFjb25nb0JpZW4xMFxcbWFrdWxvYmlrby9zcmNcXGFwcFxccGFnZXNcXGhvcGl0YWxcXGhvcGl0YWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob3BpdGFsL2hvcGl0YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9waXRhbC9ob3BpdGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tYWN0aXZhdGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIi5pb24tYWN0aXZhdGFibGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/hopital/hopital.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/hopital/hopital.page.ts ***!
  \***********************************************/
/*! exports provided: HopitalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopitalPage", function() { return HopitalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_hopital_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hopital.service */ "./src/app/services/hopital.service.ts");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let HopitalPage = class HopitalPage {
    constructor(router, hopitalservice, geolocation, toastctrl, geocoder) {
        this.router = router;
        this.hopitalservice = hopitalservice;
        this.geolocation = geolocation;
        this.toastctrl = toastctrl;
        this.geocoder = geocoder;
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Hôpitaux';
        this.kw = "";
        this.localite = "";
        this.hopital = {};
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
            if (this.networkStatus.connected == false) {
                this.hopitauxp = [
                    { nom: 'Hopital Saint Joseph', telephone: '+243854878767', mail: 'hopitalsaintjosephkin@gmail.com', ville: 'Kinshasa', adresse: '14 ème rue Limete residentiel', service: 'Dispensaire,Diabetologie,Urgence,Réanimation,Soins intentifs,Pédiatrie,Néonatologie,Urgence pédiatrique,Chirurgie,Gynecologie obstrétrique,Fistula clinic,Ophtalmologie,Stomatologie(dentisterie),Imagerie médicale,Otorhinolaryngologie(ORL),Morgue,Pharmacie', localite: 'Linmete' }
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
                this.hopitalservice.getHopitalp(localite)
                    .subscribe(data => {
                    this.hopitauxp = data;
                }, err => {
                    console.log(err);
                });
            });
        }).catch((error) => {
            console.log('Erreur pour la localisation probleme internet', error);
        });
    }
    afficherHop(kw) {
        this.hopitalservice.getHopital(kw)
            .subscribe(data => {
            this.hopitaux = data;
        }, err => {
            console.log(err);
        });
    }
    creerHopital() {
        this.listHopitaux = 1;
        this.buttonPlus = 1;
        this.title = 'Création hôpital';
    }
    retour() {
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Hôpitaux';
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.hopitaux.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    enregistrer(hopital) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(hopital);
            this.geolocation.getCurrentPosition().then((position) => {
                hopital.latitude = position.coords.latitude;
                hopital.longitude = position.coords.longitude;
                var options = {
                    useLocale: true,
                    maxResults: 1
                };
                this.geocoder.reverseGeocode(hopital.latitude, hopital.longitude, options).
                    then((results) => {
                    hopital.localite = results[0].subLocality;
                    hopital.ville = results[0].administrativeArea;
                    this.hopitalservice.enregistrerMed(hopital)
                        .subscribe(res => {
                        this.hopital = res;
                        console.log(hopital);
                        this.retour();
                        hopital.nom = "";
                        hopital.telephone = "";
                        hopital.ville = "";
                        hopital.adresse = "";
                        hopital.mail = "";
                        hopital.service = "";
                        this.retour();
                    });
                });
            }).catch((error) => {
                console.log('Erreur pour la localisation probleme internet', error);
            });
        });
    }
    DetailHopital(hopital) {
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(hopital)
            }
        };
        this.router.navigate(['detail-hopital'], navigationExtras);
    }
};
HopitalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_hopital_service__WEBPACK_IMPORTED_MODULE_5__["HopitalService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"] }
];
HopitalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hopital',
        template: __webpack_require__(/*! raw-loader!./hopital.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hopital/hopital.page.html"),
        styles: [__webpack_require__(/*! ./hopital.page.scss */ "./src/app/pages/hopital/hopital.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_hopital_service__WEBPACK_IMPORTED_MODULE_5__["HopitalService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeGeocoder"]])
], HopitalPage);



/***/ }),

/***/ "./src/app/services/hopital.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/hopital.service.ts ***!
  \*********************************************/
/*! exports provided: HopitalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HopitalService", function() { return HopitalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let HopitalService = class HopitalService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.host = "http://41.242.128.107:780";
    }
    getHopital(kw) {
        return this.httpclient.get(this.host + "/hopital?kw=" + kw);
    }
    getHopitalp(kw) {
        return this.httpclient.get(this.host + "/hopitalp?kw=" + kw);
    }
    enregistrerMed(hopital) {
        return this.httpclient.post(this.host + "/hopital", hopital);
    }
};
HopitalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HopitalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HopitalService);



/***/ })

}]);
//# sourceMappingURL=pages-hopital-hopital-module-es2015.js.map