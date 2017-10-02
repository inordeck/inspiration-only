webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  import {  } from '';  */

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Inspiration Only';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lsl-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_auth_core_module__ = __webpack_require__("../../../../../src/app/shared/auth/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ui_components_nav_nav_component__ = __webpack_require__("../../../../../src/app/ui-components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ui_components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/ui-components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ui_components_signup_signup_component__ = __webpack_require__("../../../../../src/app/ui-components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_components_send_story_send_story_component__ = __webpack_require__("../../../../../src/app/ui-components/send-story/send-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ui_components_nominate_nominate_component__ = __webpack_require__("../../../../../src/app/ui-components/nominate/nominate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ui_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/ui-components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__volumes_volume_one_volume_one_component__ = __webpack_require__("../../../../../src/app/volumes/volume-one/volume-one.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  import {  } from '';  */




/*  ANGULAR FIRE 2 */




/* NG BOOTSTRAP */

/* SERVICES */


/* ROUTING */

/* COMPONENTS */








var firebaseConfig = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebaseConfig;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ui_components_welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ui_components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ui_components_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__ui_components_send_story_send_story_component__["a" /* SendStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_17__ui_components_nominate_nominate_component__["a" /* NominateComponent */],
            __WEBPACK_IMPORTED_MODULE_18__ui_components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__volumes_volume_one_volume_one_component__["a" /* VolumeOneComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_auth_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_auth_auth_service__["a" /* AuthService */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_story_story_service__ = __webpack_require__("../../../../../src/app/shared/story/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/ui-components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_components_signup_signup_component__ = __webpack_require__("../../../../../src/app/ui-components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_components_send_story_send_story_component__ = __webpack_require__("../../../../../src/app/ui-components/send-story/send-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ui_components_nominate_nominate_component__ = __webpack_require__("../../../../../src/app/ui-components/nominate/nominate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__volumes_volume_one_volume_one_component__ = __webpack_require__("../../../../../src/app/volumes/volume-one/volume-one.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  import {  } from '';  */



/* services */


/* components */





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__ui_components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_5__ui_components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__ui_components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'send-story', component: __WEBPACK_IMPORTED_MODULE_7__ui_components_send_story_send_story_component__["a" /* SendStoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'nominate', component: __WEBPACK_IMPORTED_MODULE_8__ui_components_nominate_nominate_component__["a" /* NominateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'volume-one', component: __WEBPACK_IMPORTED_MODULE_9__volumes_volume_one_volume_one_component__["a" /* VolumeOneComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: true }), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__shared_auth_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_4__shared_story_story_service__["a" /* StoryService */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */





var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservble", {
        // returns current user observable
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // return current user id
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
            _this.router.navigate(['/send-story']);
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
            _this.router.navigate(['/send-story']);
            console.log('logged in');
            console.log(_this.authState.displayName);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  import {  } from '';  */



var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/story/story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */




var StoryService = (function () {
    function StoryService(db, router, afAuth) {
        var _this = this;
        this.db = db;
        this.router = router;
        this.afAuth = afAuth;
        this.basePath = '/volume-one';
        this.story = null; // single story entry
        this.stories = null; // list of story entries
        this.stories = db.list('/volume-one');
        this.afAuth.authState.subscribe(function (user) {
            if (user)
                _this.userId = user.uid;
        });
    }
    /* return single story entry */
    StoryService.prototype.getStory = function (key) {
        var storyPath = this.basePath + "/" + key;
        this.story = this.db.object(storyPath);
        return this.story;
    };
    /* return multiple story entries */
    StoryService.prototype.getStoryList = function (query) {
        if (query === void 0) { query = {}; }
        if (!this.userId)
            return;
        this.stories = this.db.list("volume-one/");
        return this.stories;
    };
    /* create new story */
    StoryService.prototype.createStory = function (story) {
        var _this = this;
        story.userId = this.userId;
        this.stories.push(story)
            .catch(function (error) { return _this.handleError(error); });
        this.router.navigate(['/volume-one']);
    };
    /* update story */
    StoryService.prototype.updateStory = function (key, value) {
        var _this = this;
        this.stories.update(key, value)
            .catch(function (error) { return _this.handleError(error); });
    };
    /* delete a story */
    StoryService.prototype.deleteStory = function (key) {
        var _this = this;
        this.stories.remove(key)
            .catch(function (error) { return _this.handleError(error); });
    };
    /* default error handling */
    StoryService.prototype.handleError = function (error) {
        console.log(error);
    };
    return StoryService;
}());
StoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], StoryService);

var _a, _b, _c;
//# sourceMappingURL=story.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/story/story.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story; });
var Story = (function () {
    function Story() {
        this.timeStamp = new Date();
    }
    return Story;
}());

//# sourceMappingURL=story.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p class=\"copyright\">\n  &copy; 2017, The High Order of The OctoMoose\n</p>\n<p class=\"octomoose\">\n\t<sup>}}</sup>8<sup>{{</sup>\n</p>"

/***/ }),

/***/ "../../../../../src/app/ui-components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/ui-components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md\">\n\t<button \n\t\tclass=\"navbar-toggler navbar-toggler-right\"\n\t\ttype=\"button\" \n\t\tdata-toggle=\"collapse\" \n\t\tdata-target=\"#navbarNav\" \n\t\taria-controls=\"navbarNav\" \n\t\taria-expanded=\"false\" \n\t\taria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t\t<a class=\"navbar-brand float-left\" routerLink=\"/welcome\"><sup>}}</sup>8<sup>{{</sup></a>\n\t\t<ul class=\"navbar-nav justify-content-end\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/welcome\">WELCOME</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/signup\">SIGNUP</a>\n\t\t\t</li>\n<!-- \t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">LOGIN</a>\n\t\t\t</li> -->\n\n\t\t\t<div *ngIf=\"isLoggedIn\">\n \t\t\t\t<ul class=\"nav navbar-nav navbar-right border-left\">\n \t\t\t\t\t<li><a (click)=\"logout()\">Logout</a></li>\n \t\t\t\t</ul>\n \t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n \t\t\t\t\t<li><a>{{afAuth.displayName}}</a></li>\n \t\t\t\t</ul>\n \t\t\t</div>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/ui-components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(auth) {
        this.auth = auth;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/ui-components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/nominate/nominate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/nominate/nominate.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">NOMINATE</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Thanks you for participating and contributing to the story.</h4>\n\t\t\t\t\t<p class=\"card-text\">Please nominate the next writer to pick up where you left off.</p>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t\t<input type=\"firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t\t<input type=\"lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"personalMessage\">Personal Message</label>\n\t\t\t\t\t\t\t<input type=\"textarea\" class=\"form-control\" id=\"personalMessage\" placeholder=\"Personal message...\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" routerLink=\"/story-so-far\">NOMINATE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>  <!-- end of form -->\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/nominate/nominate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NominateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NominateComponent = (function () {
    function NominateComponent() {
    }
    NominateComponent.prototype.ngOnInit = function () {
    };
    return NominateComponent;
}());
NominateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nominate',
        template: __webpack_require__("../../../../../src/app/ui-components/nominate/nominate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/nominate/nominate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NominateComponent);

//# sourceMappingURL=nominate.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/send-story/send-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/send-story/send-story.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t\t\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">CONTRIBUTE</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Instructions:</h4>\n\t\t\t\t\t<ol class=\"card-text\">\n\t\t\t\t\t\t<li><a routerLink=\"/volume-one\">Read the story so far</a></li>\n\t\t\t\t\t\t<li>Compose your story in your editor of choice.</li>\n\t\t\t\t\t\t<li>Paste your copy into the text area below.</li>\n\t\t\t\t\t\t<li>Click 'Contribute to Story' to save your story.</li>\n\t\t\t\t\t\t<li>Nominate the next person to contriubute.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\t\t\n\t</div> <!-- end of row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t\t\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">ADD TO THE STORY</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<!-- <div *ngIf=\"authState\">\n\t\t\t\t\t\t<h4 class=\"card-title\"><span class=\"author\">AUTHOR:</span> {{displayName}}</h4>\n\t\t\t\t\t</div> -->\n\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t<textarea [(ngModel)]=\"story.text\" name=\"contribute\" cols=\"30\" rows=\"10\" placeholder=\"Paste your story here...\"></textarea>\n\t\t\t\t\t\t<button class=\"btn btn-success\" id=\"create\" (click)='createStory()'>CONTRIBUTE TO STORY</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\t\t\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/send-story/send-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_story_story__ = __webpack_require__("../../../../../src/app/shared/story/story.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__ = __webpack_require__("../../../../../src/app/shared/story/story.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */



var SendStoryComponent = (function () {
    function SendStoryComponent(storyService) {
        this.storyService = storyService;
        this.story = new __WEBPACK_IMPORTED_MODULE_1__shared_story_story__["a" /* Story */]();
    }
    SendStoryComponent.prototype.ngOnInit = function () {
    };
    SendStoryComponent.prototype.createStory = function () {
        this.storyService.createStory(this.story);
        this.story = new __WEBPACK_IMPORTED_MODULE_1__shared_story_story__["a" /* Story */]();
    };
    return SendStoryComponent;
}());
SendStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-send-story',
        template: __webpack_require__("../../../../../src/app/ui-components/send-story/send-story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/send-story/send-story.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__["a" /* StoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__["a" /* StoryService */]) === "function" && _a || Object])
], SendStoryComponent);

var _a;
//# sourceMappingURL=send-story.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\n\n<form [formGroup]=\"userForm\"  *ngIf=\"newUser\"  (ngSubmit)=\"signup()\">\n\n  <h3>New User Signup</h3>\n  <p class=\"button is-small\" (click)=\"toggleForm()\">Already Registered?</p>\n  <hr>\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" class=\"input\"\n         formControlName=\"email\" required >\n\n  <div *ngIf=\"formErrors.email\" class=\"notification is-danger\">\n    {{ formErrors.email }}\n  </div>\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"input\"\n         formControlName=\"password\" required >\n\n  <div *ngIf=\"formErrors.password\" class=\"notification is-danger\">\n    {{ formErrors.password }}\n  </div>\n\n  <div *ngIf=\"userForm.valid\" class=\"notification is-success\">Form is valid</div>\n  <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n\n\n\n</form>\n\n\n<form [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"login()\">\n\n  <h3>Existing User Login</h3>\n  <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User?</p>\n  <hr>\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" class=\"input\"\n         formControlName=\"email\" required >\n\n  <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n    {{ formErrors.email }}\n  </div>\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"input\"\n         formControlName=\"password\" required >\n\n  <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n    {{ formErrors.password }}\n  </div>\n\n  <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n  <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n  <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n  <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n\n</form>\n\n\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/ui-components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */


/* services */

var SignupComponent = (function () {
    function SignupComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            }
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    SignupComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    SignupComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password'])
            .then;
    };
    SignupComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    SignupComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    SignupComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email
                ]
            ],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    SignupComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/ui-components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui-components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}\n\n.card-footer {\n\tbackground-color: #2c333a;\n\tpadding-bottom: 25px;\n}\n\n#footerTitle {\n\t\tcolor: #f0f2f4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui-components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\n\t\t\t\t<h1 class=\"card-header\">WELCOME</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h3 class=\"card-title\">Inspiration Only by <span class=\"highOrder\">The High Order of The OctoMoose</span> allows creatives to collaborate on creating original stories, with each participant able to influnce the direction the story takes next.</h3>\n\n\t\t\t\t\t<h3 class=\"card-title\">HOW DOES IT WORK?</h3>\n\t\t\t\t\t<p class=\"card-text\">Participants are nominated by their peers to participate. Each participant is responsible for the next step in the story. Once a participant has their contribution saved, they nominate the next participant.</p>\n\n\t\t\t\t\t<p class=\"card-text\">We fascilitate collabortation between writers on the generation of original stories.</p>\n\t\t\t\t</div> <!-- end card block -->\n\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<h3 class=\"card-title\"><span id=\"footerTitle\">ARE YOU UP FOR IT?</span></h3>\n\t\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/signup\">YES, SIGN ME UP</button>\n\t\t\t\t\t<button class=\"btn btn-danger\" routerLink=\"/nominate\">NO, THANK YOU</button>\n\t\t\t\t</div> <!-- end of card footer -->\n\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\t\t\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->"

/***/ }),

/***/ "../../../../../src/app/ui-components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/ui-components/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui-components/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/volumes/volume-one/volume-one.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/volumes/volume-one/volume-one.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<div *ngFor=\"let story of stories | async\" class=\"card-text\">\n\t\t\t\t\t\t\t<p>{{story.text}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> <!-- end of card block -->\n\n\t\t\t\t\t<!-- PAGINATION -->\t\t\t\n\t\t\t\t\t<!-- <nav class=\"pages\" aria-label=\"Page navigation example\">\t\t\t\t\n\t\t\t\t\t\t<ul class=\"pagination justify-content-center\">\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"page-item\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">1</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">2</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">3</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\t\t\t\n\t\t\t\t\t</nav> -->\n\n\t\t\t\t\t<!-- CREDITS -->\n\t\t\t\t\t<div class=\"card-footer text-centered text-muted\">\n\t\t\t\t\t\t<!-- <h6 class=\"writtenBy\"><span class=\"author\">AUTHOR:</span> {{authState.displayName}}</h6> -->\n\t\t\t\t\t\t<!-- <button class=\"btn btn-warning\" routerLink=\"/send-story\">EDIT</button> -->\n\t\t\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/send-story\">CONTRIBUTE TO STORY</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div> <!-- end of card -->\n\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n"

/***/ }),

/***/ "../../../../../src/app/volumes/volume-one/volume-one.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VolumeOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__ = __webpack_require__("../../../../../src/app/shared/story/story.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*  import {  } from '';  */

/* services */


var VolumeOneComponent = (function () {
    function VolumeOneComponent(storyService, authService) {
        this.storyService = storyService;
        this.authService = authService;
    }
    VolumeOneComponent.prototype.ngOnInit = function () {
        this.stories = this.storyService.getStoryList({ limitToLast: 1 });
    };
    return VolumeOneComponent;
}());
VolumeOneComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'volume-one',
        template: __webpack_require__("../../../../../src/app/volumes/volume-one/volume-one.component.html"),
        styles: [__webpack_require__("../../../../../src/app/volumes/volume-one/volume-one.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__["a" /* StoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_story_story_service__["a" /* StoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], VolumeOneComponent);

var _a, _b;
//# sourceMappingURL=volume-one.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    /* inspiration-only-dev */
    firebaseConfig: {
        apiKey: "AIzaSyAThHz_1KKcFf4cqFVBOea2WnzJsssrFNA",
        authDomain: "inspiration-only-dev.firebaseapp.com",
        databaseURL: "https://inspiration-only-dev.firebaseio.com",
        projectId: "inspiration-only-dev",
        storageBucket: "inspiration-only-dev.appspot.com",
        messagingSenderId: "543066602535"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map