(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ambulance-ambulance-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ambulance/ambulance.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ambulance/ambulance.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar [color]=\"networkStatus && networkStatus.connected ?'primary':'danger'\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-buttons slot=\"end\" >\n          <ion-menu-button ><ion-icon name=\"more\"></ion-icon></ion-menu-button>\n        </ion-buttons>\n      <ion-title > {{title}} </ion-title>\n      </ion-toolbar>\n      <ion-toolbar color=\"primary\" *ngIf=\"networkStatus && networkStatus.connected == true\">\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"creerHopital()\" *ngIf=\"buttonPlus==0\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"danger\" shape=\"round\" slot=\"start\" (click)=\"retour()\" *ngIf=\"buttonPlus==1\">\n                 <ion-icon name=\"arrow-round-back\"></ion-icon>\n            </ion-button>\n        </ion-toolbar>\n</ion-header>\n<ion-content>\n<div  *ngIf=\"networkStatus && networkStatus.connected == true\">\n  <div *ngIf=\"listHopitaux==0\">\n    <ion-segment [(ngModel)]='selectedView'>\n      <ion-segment-button value='proche' (click)=\" afficherHopP()\">\n        <ion-label>Proche de moi</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value='Autres'>\n          <ion-label>Autres</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"selectedView\" >\n        <div *ngSwitchCase=\"'proche'\">\n            <ion-card *ngFor=\"let ambulance of ambulancesP\">\n                <ion-card-header>\n                    <ion-card-title>\n                      {{ambulance.nom}}\n                    </ion-card-title>\n               </ion-card-header>\n\n               <ion-card-content>\n                 <ion-item>\n                    {{ambulance.adresse}}\n                 </ion-item>\n                 <ion-item>\n                    Appeler\n                      <div  slot=\"end\">\n                          <ion-button color=\"success\" (click)=\"appelleR(ambulance.telephone)\">\n                              <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                          </ion-button>\n                      </div>\n                  </ion-item>\n               </ion-card-content>\n             </ion-card>\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Chargement...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </div>\n        <div *ngSwitchCase=\"'Autres'\">\n            <ion-toolbar color=\"secondary\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col size=\"9\" size-sm>\n                          <ion-searchbar animated=\"true\" [(ngModel)]=\"kw\"  showCancelButton placeholder=\"Ville\"></ion-searchbar>\n                      </ion-col>\n                      <ion-col size=\"3\" size-sm>\n                          <ion-button shape=\"round\"  (click)=\"afficherHop(kw)\"><ion-icon name=\"search\"></ion-icon></ion-button>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-toolbar>\n          <ion-card *ngFor=\"let ambulance of ambulances\" >\n            <ion-card-header>\n                <ion-card-title>\n                  {{ambulance.nom}}\n                </ion-card-title>\n           </ion-card-header>\n\n           <ion-card-content>\n             <ion-item>\n                {{ambulance.adresse}}\n             </ion-item>\n             <ion-item>\n                Appeler\n                  <div  slot=\"end\">\n                      <ion-button color=\"success\" (click)=\"appelleR(ambulance.telephone)\">\n                          <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                      </ion-button>\n                  </div>\n              </ion-item>\n           </ion-card-content>\n         </ion-card>\n         <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n                    loadingSpinner=\"bubbles\"\n                    loadingText=\"Chargement...\">\n            </ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n        </div>\n    </div>\n  </div>\n  <div *ngIf=\"listHopitaux==1\">\n       <ion-item>\n          <ion-label position=\"floating\" >Nom:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"ambulance.nom\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Téléphone:</ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"ambulance.telephone\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\" >Adresse :</ion-label>\n          <ion-textarea [(ngModel)]=\"ambulance.adresse\" ></ion-textarea>\n        </ion-item>\n    <ion-button expand=\"block\" fill=\"outline\"(click)=\"enregistrer(ambulance)\">Enregistrer</ion-button>\n  </div>\n  </div>\n  <div *ngIf=\"networkStatus && networkStatus.connected == false\" >\n    <ion-card *ngFor=\"let ambulance of ambulancesP\">\n        <ion-card-header>\n            <ion-card-title>\n              {{ambulance.nom}}\n            </ion-card-title>\n       </ion-card-header>\n\n       <ion-card-content>\n         <ion-item>\n            {{ambulance.adresse}}\n         </ion-item>\n         <ion-item>\n            Appeler\n              <div  slot=\"end\">\n                  <ion-button color=\"success\" (click)=\"appelleR(ambulance.telephone)\">\n                      <ion-icon slot=\"end\" name=\"call\"></ion-icon>\n                  </ion-button>\n              </div>\n          </ion-item>\n       </ion-card-content>\n     </ion-card>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ambulance/ambulance.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/ambulance/ambulance.module.ts ***!
  \*****************************************************/
/*! exports provided: AmbulancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbulancePageModule", function() { return AmbulancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ambulance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ambulance.page */ "./src/app/pages/ambulance/ambulance.page.ts");







var routes = [
    {
        path: '',
        component: _ambulance_page__WEBPACK_IMPORTED_MODULE_6__["AmbulancePage"]
    }
];
var AmbulancePageModule = /** @class */ (function () {
    function AmbulancePageModule() {
    }
    AmbulancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ambulance_page__WEBPACK_IMPORTED_MODULE_6__["AmbulancePage"]]
        })
    ], AmbulancePageModule);
    return AmbulancePageModule;
}());



/***/ }),

/***/ "./src/app/pages/ambulance/ambulance.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/ambulance/ambulance.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FtYnVsYW5jZS9hbWJ1bGFuY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ambulance/ambulance.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/ambulance/ambulance.page.ts ***!
  \***************************************************/
/*! exports provided: AmbulancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbulancePage", function() { return AmbulancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _services_ambulance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/ambulance.service */ "./src/app/services/ambulance.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");









var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_8__["Plugins"].Network;
var AmbulancePage = /** @class */ (function () {
    function AmbulancePage(router, ambulanceservice, geolocation, toastctrl, geocoder, callNumber) {
        this.router = router;
        this.ambulanceservice = ambulanceservice;
        this.geolocation = geolocation;
        this.toastctrl = toastctrl;
        this.geocoder = geocoder;
        this.callNumber = callNumber;
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Ambulance';
        this.kw = "";
        this.localite = "";
        this.ambulance = {};
    }
    AmbulancePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.networkListener = Network.addListener('networkStatusChange', function (status) {
                            console.log("network status change", status);
                            _this.networkStatus = status;
                        });
                        _a = this;
                        return [4 /*yield*/, Network.getStatus()];
                    case 1:
                        _a.networkStatus = _b.sent();
                        if (this.networkStatus.connected == false) {
                            this.ambulancesP = [
                                { nom: 'Ambulance Hopital Saint Joseph', telephone: '+243854878767', ville: 'Kinshasa', adresse: '14 ème rue Limete residentiel', localite: 'Limete' }
                            ];
                        }
                        else if (this.networkStatus.connected == true) {
                            this.afficherHopP();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AmbulancePage.prototype.afficherHopP = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var options = {
                useLocale: true,
                maxResults: 1
            };
            _this.geocoder.reverseGeocode(latitude, longitude, options).
                then(function (results) {
                var localite = results[0].subLocality;
                _this.ambulanceservice.getAmbulanceP(localite)
                    .subscribe(function (data) {
                    _this.ambulancesP = data;
                }, function (err) {
                    console.log(err);
                });
            });
        }).catch(function (error) {
            console.log('Erreur pour la localisation probleme internet', error);
        });
    };
    AmbulancePage.prototype.afficherHop = function (kw) {
        var _this = this;
        this.ambulanceservice.getAmbulance(kw)
            .subscribe(function (data) {
            _this.ambulances = data;
        }, function (err) {
            console.log(err);
        });
    };
    AmbulancePage.prototype.creerHopital = function () {
        this.listHopitaux = 1;
        this.buttonPlus = 1;
        this.title = 'Création ambulance';
    };
    AmbulancePage.prototype.retour = function () {
        this.listHopitaux = 0;
        this.buttonPlus = 0;
        this.title = 'Ambulances';
    };
    AmbulancePage.prototype.loadData = function (event) {
        var _this = this;
        setTimeout(function () {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (_this.ambulances.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    };
    AmbulancePage.prototype.enregistrer = function (ambulance) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(ambulance);
                this.geolocation.getCurrentPosition().then(function (position) {
                    ambulance.latitude = position.coords.latitude;
                    ambulance.longitude = position.coords.longitude;
                    var options = {
                        useLocale: true,
                        maxResults: 1
                    };
                    _this.geocoder.reverseGeocode(ambulance.latitude, ambulance.longitude, options).
                        then(function (results) {
                        ambulance.localite = results[0].subLocality;
                        ambulance.ville = results[0].administrativeArea;
                        _this.ambulanceservice.enregistrerMed(ambulance)
                            .subscribe(function (res) {
                            _this.ambulance = res;
                            console.log(ambulance);
                            _this.retour();
                            _this.retour();
                        });
                    });
                }).catch(function (error) {
                    console.log('Erreur pour la localisation probleme internet', error);
                });
                return [2 /*return*/];
            });
        });
    };
    AmbulancePage.prototype.appelleR = function (telephone) {
        console.log(telephone);
        this.callNumber.callNumber(telephone, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    AmbulancePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_ambulance_service__WEBPACK_IMPORTED_MODULE_2__["AmbulanceService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"] }
    ]; };
    AmbulancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-ambulance',
            template: __webpack_require__(/*! raw-loader!./ambulance.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ambulance/ambulance.page.html"),
            styles: [__webpack_require__(/*! ./ambulance.page.scss */ "./src/app/pages/ambulance/ambulance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_ambulance_service__WEBPACK_IMPORTED_MODULE_2__["AmbulanceService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_7__["NativeGeocoder"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_1__["CallNumber"]])
    ], AmbulancePage);
    return AmbulancePage;
}());



/***/ }),

/***/ "./src/app/services/ambulance.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/ambulance.service.ts ***!
  \***********************************************/
/*! exports provided: AmbulanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbulanceService", function() { return AmbulanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AmbulanceService = /** @class */ (function () {
    function AmbulanceService(httpclient) {
        this.httpclient = httpclient;
        this.host = "http://41.242.128.107:780";
    }
    AmbulanceService.prototype.getAmbulance = function (kw) {
        return this.httpclient.get(this.host + "/ambulance?kw=" + kw);
    };
    AmbulanceService.prototype.getAmbulanceP = function (kw) {
        return this.httpclient.get(this.host + "/ambulancep?kw=" + kw);
    };
    AmbulanceService.prototype.enregistrerMed = function (ambulance) {
        return this.httpclient.post(this.host + "/ambulance", ambulance);
    };
    AmbulanceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AmbulanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AmbulanceService);
    return AmbulanceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ambulance-ambulance-module-es5.js.map