(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"border\" >\r\n  <ion-toolbar>\r\n    <ion-back-button slot=\"start\"></ion-back-button>\r\n        <img src=\"/assets/img/logo.png\">\r\n        <img src=\"/assets/img/tmed.svg\" >\r\n  </ion-toolbar>\r\n   <ion-toolbar *ngIf=\"networkStatus && networkStatus.connected == true\" >\r\n      <ion-button color=\"danger\"  horizontal=\"end\" shape=\"round\"  slot=\"start\" (click)=\"creermed()\" *ngIf=\"buttonPlus==0\">\r\n          <ion-icon name=\"person-add\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"danger\"  horizontal=\"end\" shape=\"round\"  slot=\"start\" (click)=\"retour()\" *ngIf=\"buttonPlus==1\">\r\n          <ion-icon name=\"arrow-round-back\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"networkStatus && networkStatus.connected == true\">\r\n      <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"9\" size-sm >\r\n                <ion-searchbar class=\"recherchebar\"  animated=\"true\" [(ngModel)]=\"kw\"  showCancelButton placeholder=\"Specialité\"></ion-searchbar>\r\n            </ion-col>\r\n            <ion-col size=\"3\" size-sm>\r\n                <ion-button shape=\"round\"  (click)=\"afficherMed(kw)\"><ion-icon name=\"search\"></ion-icon></ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content >\r\n <ion-list *ngIf=\"listMed==0\">\r\n  <ion-grid>\r\n       <ion-row *ngIf=\"medecins\">\r\n         <ion-col *ngFor=\"let medecin of medecins\">\r\n           <ion-item class=\"item\" (click)=\"DetailMed(medecin)\">\r\n             <ion-avatar (click)=\"DetailMed(medecin)\" slot=\"start\">\r\n                <img src=\"/assets/img/med.jpg\">\r\n             </ion-avatar>\r\n             <ion-label>\r\n             <h3>DR.{{medecin.nom}}</h3>\r\n            </ion-label>\r\n            <ion-icon name=\"eye\" slot=\"end\" (click)=\"DetailMed(medecin)\"></ion-icon>\r\n          </ion-item>\r\n\r\n         </ion-col>\r\n       </ion-row>\r\n       <ion-row *ngIf=\"!medecins\">\r\n         <ion-col>\r\n\r\n          <div class=\"ion-padding custom-skeleton\">\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\r\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n          </div>\r\n\r\n              <ion-list>\r\n                <ion-list-header>\r\n                  <ion-skeleton-text animated style=\"width: 20%\"></ion-skeleton-text>\r\n                </ion-list-header>\r\n                <ion-item>\r\n                  <ion-avatar slot=\"start\">\r\n                    <ion-skeleton-text animated></ion-skeleton-text>\r\n                  </ion-avatar>\r\n                  <ion-label>\r\n                    <h3>\r\n                      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n                    </h3>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                    </p>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n                    </p>\r\n                  </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-thumbnail slot=\"start\">\r\n                    <ion-skeleton-text animated></ion-skeleton-text>\r\n                  </ion-thumbnail>\r\n                  <ion-label>\r\n                    <h3>\r\n                      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n                    </h3>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                    </p>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n                    </p>\r\n                  </ion-label>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\r\n                  <ion-label>\r\n                    <h3>\r\n                      <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\r\n                    </h3>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n                    </p>\r\n                    <p>\r\n                      <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n                    </p>\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n         </ion-col>\r\n       </ion-row>\r\n     </ion-grid>\r\n     <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n       <ion-infinite-scroll-content\r\n               loadingSpinner=\"bubbles\"\r\n               loadingText=\"Chargement...\">\r\n       </ion-infinite-scroll-content>\r\n     </ion-infinite-scroll>\r\n   </ion-list>\r\n\r\n  <div *ngIf=\"listMed==1\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Nom:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.nom\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Prenom:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.prenom\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Postnom:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.postnom\" ></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Téléphone:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.telephone\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Email:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.mail\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Adresse du travail:</ion-label>\r\n      <ion-textarea [(ngModel)]=\"medM.adresse\" ></ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >Où travaillez-vous</ion-label>\r\n      <ion-textarea [(ngModel)]=\"medM.hopital\" ></ion-textarea>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Spécialité</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.specialite\" ></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\" >CNOM:</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"medM.cnom\" ></ion-input>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" fill=\"outline\"(click)=\"enregistrer(medM)\">Enregistrer</ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n<ion-toolbar>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" routerLink=\"/apropos\" ><ion-icon name=\"information-circle\"></ion-icon></ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"4\" *ngFor=\"let l of likes\" >\r\n        <ion-button shape=\"round\" fill=\"outline\" (click)=\"jaime(l)\" color=\"primary\"><ion-icon name=\"thumbs-up\"></ion-icon></ion-button>\r\n      </ion-col>\r\n     <ion-col size=\"4\">\r\n         <ion-button shape=\"round\" fill=\"outline\" color=\"primary\" (click)=\"sharing()\" >\r\n           <ion-icon name=\"share\"></ion-icon>\r\n         </ion-button>\r\n     </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgc {\n  background: #c92325;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5;\n  height: 100%;\n}\n\n.recherchebar {\n  background: #E5E5E5;\n  border-radius: 50px;\n}\n\n.item {\n  background: #E5E5E5;\n  border-radius: 10px;\n}\n\n.border {\n  background: #FFFFFF;\n  border-radius: 20px;\n}\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9IOlxcRm9udEVuZEFwcFxcbG9iaWtveWFjb25nb0JpZW4xMFxcbWFrdWxvYmlrby9zcmNcXGFwcFxcbGlzdFxcbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0VBOztBREFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0lBOztBREZBO0VBQ0UsaUJBQUE7QUNLRjs7QURGQTtFQUNFLGtCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnY3tcbiAgYmFja2dyb3VuZDojYzkyMzI1O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDowO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA1O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ucmVjaGVyY2hlYmFye1xuYmFja2dyb3VuZDogI0U1RTVFNTtcbmJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uaXRlbXtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5ib3JkZXJ7XG5iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuIiwiLmJnYyB7XG4gIGJhY2tncm91bmQ6ICNjOTIzMjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogNTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVjaGVyY2hlYmFyIHtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_medecin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/medecin.service */ "./src/app/services/medecin.service.ts");
/* harmony import */ var _services_like_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/like.service */ "./src/app/services/like.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");







const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];


let ListPage = class ListPage {
    constructor(platform, route, medecinService, toastctrl, socialSharing, likeService) {
        this.platform = platform;
        this.route = route;
        this.medecinService = medecinService;
        this.toastctrl = toastctrl;
        this.socialSharing = socialSharing;
        this.likeService = likeService;
        this.listMed = 0;
        this.buttonPlus = 0;
        this.title = 'Médecins';
        this.kw = "";
        this.medM = {};
        /*this.subscribe = this.platform.backButton(async ()=>{
           if(this.constructor.name =="ListPage"){
             this.router.navigate(['home']);
           }
        })*/
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /*this.afficherMed(this.kw);
            this.networkListener= Network.addListener('networkStatusChange',status =>{
             console.log("network status change",status);
             this.networkStatus = status;
            });
         
            this.networkStatus = await Network.getStatus();
            console.log(this.networkStatus);*/
            this.like();
            this.offline();
        });
    }
    offline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkListener = Network.addListener('networkStatusChange', status => {
                console.log("network status change", status);
                this.networkStatus = status;
            });
            this.networkStatus = yield Network.getStatus();
            if (this.networkStatus.connected == false) {
                this.medecins = [
                    { nom: 'KADIATA', prenom: 'DIDIER', postnom: 'MUELA', telephone: '+243822245084', mail: 'kadimuela@gmail.com', adresse: '14ème rue Limete residentiel', hopital: 'Hopital Saint Joseph', specialite: 'Odonto-Stomatologie(Dentiste)', cnom: '00244' },
                    { nom: 'LUMBU', prenom: 'DAMIEN', postnom: 'MALUNDAMA', telephone: '+243990132012', mail: 'damienlumbu@outlook.fr', adresse: '14ème rue Limete residentiel', hopital: 'Hopital Saint Joseph, CUK', specialite: 'ORL', cnom: '12462' }
                ];
            }
            else if (this.networkStatus.connected == true) {
                this.afficherMed(this.kw);
            }
        });
    }
    afficherMed(kw) {
        this.medecinService.affichermed(kw)
            .subscribe(data => {
            this.medecins = data;
        }, err => {
            console.log(err);
        });
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.medecins.length == 1000) {
                event.target.disabled = true;
            }
        }, 500);
    }
    creermed() {
        this.listMed = 1;
        this.buttonPlus = 1;
        this.title = 'Création du médecin';
    }
    enregistrer(medecinModels) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(medecinModels);
            try {
                this.medecinService.enregistrerMed(medecinModels)
                    .subscribe(res => {
                    this.medM = res;
                });
                const toast = yield this.toastctrl.create({
                    header: 'Succès',
                    message: 'Enregistrement effectué ',
                    color: 'success',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
            catch (error) {
                const toast = yield this.toastctrl.create({
                    header: 'Erreur',
                    message: 'Echec enregistrement',
                    color: 'danger',
                    position: 'bottom',
                    duration: 3000
                });
                toast.present();
            }
            this.retour();
        });
    }
    retour() {
        this.buttonPlus = 0;
        this.listMed = 0;
        this.title = 'Liste des medecins';
        this.afficherMed(this.kw);
    }
    DetailMed(medecin) {
        console.log(medecin._id);
        medecin.nbrV = medecin.nbrV + 1;
        this.medecinService.updateMed(medecin._id, medecin)
            .subscribe(res => {
        });
        let navigationExtras = {
            queryParams: {
                special: JSON.stringify(medecin)
            }
        };
        this.route.navigate(['detail-medecin'], navigationExtras);
    }
    updateMed(medecin) {
        console.log(this.medecins._id);
        this.medecins.nbrV = this.medecins.nbrV + 1;
        this.medecinService.updateMed(this.medecins._id, this.medecins)
            .subscribe(res => {
        });
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
};
ListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_medecin_service__WEBPACK_IMPORTED_MODULE_3__["MedecinService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] },
    { type: _services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_medecin_service__WEBPACK_IMPORTED_MODULE_3__["MedecinService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"], _services_like_service__WEBPACK_IMPORTED_MODULE_4__["LikeService"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map