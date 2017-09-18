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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
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



var AppComponent = (function () {
    function AppComponent(auth, db) {
        this.auth = auth;
        this.db = db;
        this.title = 'lsl';
        this.user = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthState().subscribe(function (user) { return _this.user = user; });
        this.topics = this.db.list('/topics');
    };
    AppComponent.prototype.loginWithGoogle = function () {
        this.auth.loginWithGoogle();
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.auth.isLoggedIn();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lsl-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__send_story_send_story_component__ = __webpack_require__("../../../../../src/app/send-story/send-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__story_so_far_story_so_far_component__ = __webpack_require__("../../../../../src/app/story-so-far/story-so-far.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nominate_nominate_component__ = __webpack_require__("../../../../../src/app/nominate/nominate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
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









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_16__send_story_send_story_component__["a" /* SendStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_17__story_so_far_story_so_far_component__["a" /* StorySoFarComponent */],
            __WEBPACK_IMPORTED_MODULE_18__nominate_nominate_component__["a" /* NominateComponent */],
            __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase, 'inspiration-only-dev'),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__shared_auth_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__send_story_send_story_component__ = __webpack_require__("../../../../../src/app/send-story/send-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__story_so_far_story_so_far_component__ = __webpack_require__("../../../../../src/app/story-so-far/story-so-far.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nominate_nominate_component__ = __webpack_require__("../../../../../src/app/nominate/nominate.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*  import {  } from '';  */



/* components */






var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'send-story', component: __WEBPACK_IMPORTED_MODULE_6__send_story_send_story_component__["a" /* SendStoryComponent */] },
    { path: 'story-so-far', component: __WEBPACK_IMPORTED_MODULE_7__story_so_far_story_so_far_component__["a" /* StorySoFarComponent */] },
    { path: 'nominate', component: __WEBPACK_IMPORTED_MODULE_8__nominate_nominate_component__["a" /* NominateComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true }), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p class=\"copyright\">\n  &copy; 2017, The High Order of The OctoMoose\n</p>\n<p class=\"octomoose\">\n\t<sup>}}</sup>8<sup>{{</sup>\n</p>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
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
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">LOGIN</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Welcome back. Please login to continue.</h4>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputPassword1\">Password</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" routerLink=\"/send-story\">LOGIN WITH EMAIL</button>\n\t\t\t\t\t\t\t<button (click)=\"loginWithGoogle()\" class=\"btn btn-success\">OR LOGIN UP WITH GOOGLE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>  <!-- end of form -->\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md\">\n\t<button \n\t\tclass=\"navbar-toggler navbar-toggler-right\"\n\t\ttype=\"button\" \n\t\tdata-toggle=\"collapse\" \n\t\tdata-target=\"#navbarNav\" \n\t\taria-controls=\"navbarNav\" \n\t\taria-expanded=\"false\" \n\t\taria-label=\"Toggle navigation\">\n\t\t<span class=\"navbar-toggler-icon\"></span>\n\t</button>\n\t<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\t\t<a class=\"navbar-brand float-left\" routerLink=\"/welcome\"><sup>}}</sup>8<sup>{{</sup></a>\n\t\t<ul class=\"navbar-nav justify-content-end\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/welcome\">WELCOME</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/signup\">SIGNUP</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">LOGIN</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
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

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/nominate/nominate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nominate/nominate.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">NOMINATE</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Thanks you for participating and contributing to the story.</h4>\n\t\t\t\t\t<p class=\"card-text\">Please nominate the next writer to pick up where you left off.</p>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t\t<input type=\"firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t\t<input type=\"lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"personalMessage\">Personal Message</label>\n\t\t\t\t\t\t\t<input type=\"textarea\" class=\"form-control\" id=\"personalMessage\" placeholder=\"Personal message...\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" routerLink=\"/story-so-far\">NOMINATE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>  <!-- end of form -->\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/nominate/nominate.component.ts":
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
        selector: 'lsl-nominate',
        template: __webpack_require__("../../../../../src/app/nominate/nominate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nominate/nominate.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NominateComponent);

//# sourceMappingURL=nominate.component.js.map

/***/ }),

/***/ "../../../../../src/app/send-story/send-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/send-story/send-story.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t\t\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">CONTRIBUTE</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Instructions:</h4>\n\t\t\t\t\t<ol class=\"card-text\">\n\t\t\t\t\t\t<li><a routerLink=\"/story-so-far\">Read the story so far</a></li>\n\t\t\t\t\t\t<li>Compose your story in your editor of choice.</li>\n\t\t\t\t\t\t<li>Paste your copy into the text area below.</li>\n\t\t\t\t\t\t<li>Click 'Contribute to Story' to save your story.</li>\n\t\t\t\t\t\t<li>Nominate the next person to contriubute.</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\t\t\n\t</div> <!-- end of row -->\n\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t\t\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">ADD TO THE STORY</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\"><span class=\"author\">AUTHOR:</span> Billy Bob Joe Bubba Sue</h4>\n\t\t\t\t\t<div class=\"card-text\">\n\t\t\t\t\t\t<textarea name=\"contribute\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Paste your story here...\"></textarea>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\" routerLink=\"/nominate\">CONTRIBUTE TO STORY</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\t\t\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n"

/***/ }),

/***/ "../../../../../src/app/send-story/send-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendStoryComponent; });
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

var SendStoryComponent = (function () {
    function SendStoryComponent() {
    }
    SendStoryComponent.prototype.ngOnInit = function () {
    };
    return SendStoryComponent;
}());
SendStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lsl-send-story',
        template: __webpack_require__("../../../../../src/app/send-story/send-story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/send-story/send-story.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SendStoryComponent);

//# sourceMappingURL=send-story.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
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
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.currentUser == null) {
            return false;
        }
        return true;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<h1 class=\"card-header\">SIGNUP</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h4 class=\"card-title\">Thanks you for signing up and participating.</h4>\n\t\t\t\t\t<p class=\"card-text\">Sign up by setting and email and password or with you google account.</p>\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"firstName\">First Name</label>\n\t\t\t\t\t\t\t<input type=\"firstName\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"lastName\">Last Name</label>\n\t\t\t\t\t\t\t<input type=\"lastName\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">Email address</label>\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n\t\t\t\t\t\t\t<small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<label for=\"exampleInputPassword1\">Password</label>\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"buttons\">\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" routerLink=\"/send-story\">SIGNUP WITH EMAIL</button>\n\t\t\t\t\t\t\t<button (click)=\"loginWithGoogle()\" class=\"btn btn-success\">OR SIGN UP WITH GOOGLE</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>  <!-- end of form -->\n\t\t\t\t</div> <!-- end of card block -->\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/story-so-far/story-so-far.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}\n\n.card-text {\n\tpadding: 25px;\n}\n\n.card-footer {\n\tbackground-color: #2c333a;\n\tpadding-bottom: 25px;\n}\n\n.writtenBy {\n\tcolor: white;\n}\n\n.pages { \n\tpadding-bottom: 15px;\n\tmargin-bottom: 0px; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story-so-far/story-so-far.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t\t<p class=\"card-text\">Echo park chambray biodiesel, 3 wolf moon tilde blog readymade banjo direct trade seitan pinterest 90's shoreditch bicycle rights skateboard. Mumblecore pour-over stumptown +1 organic ugh plaid. Viral hexagon brunch lo-fi iceland banh mi ethical fashion axe four loko you probably haven't heard of them salvia normcore. Seitan keytar post-ironic etsy quinoa. Seitan tbh drinking vinegar heirloom single-origin coffee pickled leggings chicharrones typewriter sriracha. Unicorn direct trade cloud bread, narwhal semiotics health goth pop-up blue bottle copper mug. Cred cliche biodiesel, single-origin coffee meggings kitsch freegan chartreuse schlitz sriracha bicycle rights ennui. Jean shorts normcore everyday carry narwhal flannel synth mixtape. Bushwick craft beer hell of retro letterpress stumptown live-edge marfa woke health goth kinfolk la croix street art cronut. Actually edison bulb hammock, kitsch gentrify quinoa green juice farm-to-table bitters trust fund plaid. Whatever chicharrones pinterest, fixie af cornhole keffiyeh chartreuse biodiesel slow-carb brunch. Viral synth ramps, la croix small batch vape mumblecore. Live-edge taiyaki sriracha photo booth migas post-ironic iPhone umami VHS chillwave blue bottle cred.</p>\n\n\t\t\t\t\t\t<p class=\"card-text\">Cloud bread marfa +1, franzen artisan bespoke salvia deep v tbh flannel subway tile. Keffiyeh put a bird on it raw denim, salvia iceland flexitarian fingerstache waistcoat four loko crucifix four dollar toast hella typewriter. Franzen affogato hella austin selfies bicycle rights. Hell of pabst hashtag green juice mlkshk farm-to-table. Readymade food truck direct trade, vape hella photo booth meh swag aesthetic. Chambray activated charcoal man braid photo booth messenger bag. Brooklyn actually pug put a bird on it snackwave kitsch, paleo wolf polaroid knausgaard blog. Cardigan pour-over ramps literally, taxidermy wayfarers polaroid everyday carry scenester. Truffaut coloring book meh, pickled celiac gluten-free messenger bag echo park blog lo-fi ugh. Try-hard wolf locavore VHS, shabby chic bespoke cronut roof party lomo. Narwhal schlitz kitsch tumeric readymade blog aesthetic hot chicken fam vegan. PBR&#38;B cornhole hella, gluten-free vice literally hoodie prism single-origin coffee enamel pin leggings live-edge microdosing mustache roof party. Fashion axe succulents chartreuse hexagon. Lyft subway tile tousled hell of, dreamcatcher beard craft beer coloring book.</p>\n\n\t\t\t\t\t\t<p class=\"card-text\">Hot chicken DIY bespoke affogato +1, banjo tumeric gentrify flexitarian retro echo park poke kinfolk butcher. Wolf jianbing mustache, glossier ethical freegan locavore bushwick PBR&#38;B gentrify actually art party. Lumbersexual tousled vice forage kickstarter trust fund humblebrag green juice artisan echo park hell of tattooed craft beer. Actually coloring book kickstarter air plant pok pok tofu polaroid. Knausgaard poke small batch ugh 90's hella. Helvetica photo booth disrupt knausgaard lomo yr. 8-bit pok pok palo santo +1 organic pickled craft beer fam lumbersexual. Fashion axe palo santo fanny pack activated charcoal. VHS bitters ennui fingerstache kombucha, church-key adaptogen portland pop-up copper mug poutine twee tilde hashtag vegan.</p>\n\n\t\t\t\t\t\t<p class=\"card-text\">Air plant snackwave pickled poke, four dollar toast letterpress banjo migas umami. Synth fixie XOXO narwhal small batch iceland beard hella. Lyft heirloom pitchfork fixie, tousled 3 wolf moon glossier. Iceland fixie chia unicorn pabst single-origin coffee heirloom cold-pressed. Truffaut mustache meh intelligentsia, put a bird on it pitchfork blue bottle tbh venmo swag everyday carry try-hard. Swag cold-pressed kickstarter keytar meh. Activated charcoal twee taiyaki, farm-to-table gastropub blue bottle wolf fingerstache pabst. Lyft glossier asymmetrical XOXO ethical blue bottle af trust fund edison bulb. Freegan live-edge migas green juice.</p>\n\n\t\t\t\t\t\t<p class=\"card-text\">Snackwave poke lyft forage next level. Mustache sustainable bushwick cloud bread tumblr coloring book forage banjo. Four dollar toast pabst prism fashion axe, la croix paleo authentic occupy cray mumblecore next level offal live-edge. Narwhal viral forage tote bag DIY. Hoodie neutra tacos, quinoa taiyaki ethical jean shorts. 8-bit snackwave intelligentsia pop-up post-ironic. Fanny pack 8-bit cardigan fixie live-edge. IPhone snackwave mixtape, tote bag listicle seitan deep v. Irony knausgaard meditation shaman, sriracha put a bird on it aesthetic 8-bit intelligentsia dreamcatcher godard kale chips activated charcoal yuccie trust fund. Ennui pickled lomo aesthetic. Biodiesel scenester dreamcatcher pop-up vexillologist selfies knausgaard. Sartorial whatever truffaut farm-to-table health goth raclette, meh hot chicken jianbing tousled vaporware coloring book XOXO.</p>\n\t\t\t\t\t</div> <!-- end of card block -->\n\t\t\t\t\t<div class=\"card-footer text-centered text-muted\">\n\t\t\t\t\t\t<h6 class=\"writtenBy\"><span class=\"author\">AUTHOR:</span> Billy Bob Joe Bubba Sue</h6>\n\t\t\t\t\t\t<button class=\"btn btn-warning\" routerLink=\"/send-story\">EDIT</button>\n\t\t\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/send-story\">CONTRIBUTE TO STORY</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- PAGINATION -->\t\t\t\n\t\t\t\t\t<nav class=\"pages\" aria-label=\"Page navigation example\">\t\t\t\t\n\t\t\t\t\t\t<ul class=\"pagination justify-content-center\">\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"page-item\">\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\t\t\t\t\t\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">1</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">2</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">3</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t<a class=\"page-link\" href=\"#\">Next</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\t\t\t\n\t\t\t\t\t</nav>\n\t\t\t\t</div> <!-- end of card -->\n\n\t\t</div> <!-- end of col 8 -->\n\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->\n"

/***/ }),

/***/ "../../../../../src/app/story-so-far/story-so-far.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorySoFarComponent; });
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

var StorySoFarComponent = (function () {
    function StorySoFarComponent() {
    }
    StorySoFarComponent.prototype.ngOnInit = function () {
    };
    return StorySoFarComponent;
}());
StorySoFarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lsl-story-so-far',
        template: __webpack_require__("../../../../../src/app/story-so-far/story-so-far.component.html"),
        styles: [__webpack_require__("../../../../../src/app/story-so-far/story-so-far.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StorySoFarComponent);

//# sourceMappingURL=story-so-far.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n\tborder-color: #2c333a;\n\tbackground-color: #f0f2f4;\n}\n\n.card-header {\n\tbackground-color: #2c333a;\n\tcolor: #FFA500;\n}\n\n.card-footer {\n\tbackground-color: #2c333a;\n\tpadding-bottom: 25px;\n}\n\n#footerTitle {\n\t\tcolor: #f0f2f4;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\n\t\t<div class=\"col-8\">\n\t\t\t<div class=\"card\">\n\n\t\t\t\t<h1 class=\"card-header\">WELCOME</h1>\n\t\t\t\t<div class=\"card-block\">\n\t\t\t\t\t<h3 class=\"card-title\">Inspiration Only by <span class=\"highOrder\">The High Order of The OctoMoose</span> allows creatives to collaborate on creating original stories, with each participant able to influnce the direction the story takes next.</h3>\n\n\t\t\t\t\t<h3 class=\"card-title\">HOW DOES IT WORK?</h3>\n\t\t\t\t\t<p class=\"card-text\">Participants are nominated by their peers to participate. Each participant is responsible for the next step in the story. Once a participant has their contribution saved, they nominate the next participant.</p>\n\n\t\t\t\t\t<p class=\"card-text\">We fascilitate collabortation between writers on the generation of original stories.</p>\n\t\t\t\t</div> <!-- end card block -->\n\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<h3 class=\"card-title\"><span id=\"footerTitle\">ARE YOU UP FOR IT?</span></h3>\n\t\t\t\t\t<button class=\"btn btn-success\" routerLink=\"/signup\">YES, SIGN ME UP</button>\n\t\t\t\t\t<button class=\"btn btn-danger\" routerLink=\"/nominate\">NO, THANK YOU</button>\n\t\t\t\t</div> <!-- end of card footer -->\n\n\t\t\t</div> <!-- end of card -->\n\t\t</div> <!-- end of col 8 -->\n\t\t\n\t\t<div class=\"col-2\"></div> <!-- WHITESPACE -->\n\t</div> <!-- end of row -->\n</div> <!-- end of container -->"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
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
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

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
    firebase: {
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