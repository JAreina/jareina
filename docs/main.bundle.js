webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_proyectos_proyectos_component__ = __webpack_require__("../../../../../src/app/components/proyectos/proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cv_cv_component__ = __webpack_require__("../../../../../src/app/components/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_proyectos_realizados_proyectos_realizados_component__ = __webpack_require__("../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_slider_proyectos_slider_proyectos_component__ = __webpack_require__("../../../../../src/app/components/slider-proyectos/slider-proyectos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'slider/:id',
        component: __WEBPACK_IMPORTED_MODULE_6__components_slider_proyectos_slider_proyectos_component__["a" /* SliderProyectosComponent */],
    },
    {
        path: 'proyectosrealizados',
        component: __WEBPACK_IMPORTED_MODULE_5__components_proyectos_realizados_proyectos_realizados_component__["a" /* ProyectosRealizadosComponent */],
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: 'cv',
        component: __WEBPACK_IMPORTED_MODULE_3__components_cv_cv_component__["a" /* CvComponent */],
    },
    {
        path: 'proyectos',
        component: __WEBPACK_IMPORTED_MODULE_2__components_proyectos_proyectos_component__["a" /* ProyectosComponent */],
    },
    {
        path: 'proyectos/nasa',
        component: __WEBPACK_IMPORTED_MODULE_2__components_proyectos_proyectos_component__["a" /* ProyectosComponent */],
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,body{\n    background-color: black;\n}\n.row.laCabecera{\n    box-shadow: 1px 6px 3px rgba(0, 0, 0, 0.822);\n}\n.cambia{\n    overflow-x: hidden;\n}\n\nimg{\n    width:90px;\n    cursor:pointer;\n}\n\n.header{\n    background-color:rgba(3, 7, 6, 0.82);\n    position: fixed;\n    top:0;\n    width:100%;\n    z-index:9999;\n}\n\n\nh1,h6{\n    text-align: center;\n    font-family: 'Volkhov', serif;\n}\nsection{\n    margin-top:54px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"container-fluid header\">\n  <header >\n      \n    <div class=\"row laCabecera\" >\n           <div class=\"col-md-4 col-lg-4 col-xs-6\">\n            <!--<h1 [ngStyle]=\"bcrc.coloor\" routerLink=\"home\" (click)=\"submitEvent()\" >\n              {{title}}\n              <h6>web development</h6>\n              </h1>-->\n             <img src=\"assets/img/JAreina-transparente-blanco.png\" alt=\"logo\" routerLink=\"home\" (click)=\"submitEvent()\">\n           </div>\n  <!--menu-->\n\n    <app-menu></app-menu>\n  \n\n  \n  \n  \n  </div>\n \n  </header>\n</div>\n  \n  <section class=\"cambia\">\n              <div class=\"container-fluid\">\n                 <div class=\"row\">\n             \n                    <router-outlet></router-outlet>\n                </div>\n              </div>\n  </section>\n  \n  \n  <app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_background_color_random_component__ = __webpack_require__("../../../../../src/app/util/background-color-random.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_proyectos_proyecto_proyecto_component__ = __webpack_require__("../../../../../src/app/components/proyectos/proyecto/proyecto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_google_analytics_service__ = __webpack_require__("../../../../../src/app/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(bcrc, satinizer, proyecto, router, googleAnalyticsEventsService) {
        this.bcrc = bcrc;
        this.satinizer = satinizer;
        this.proyecto = proyecto;
        this.router = router;
        this.googleAnalyticsEventsService = googleAnalyticsEventsService;
        this.title = 'JAreina';
        //google-analytics
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
        this.seguridadUrl();
    }
    AppComponent.prototype.submitEvent = function () {
        this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
    };
    //seguridad de la url de cada proyecto.component iframe
    AppComponent.prototype.seguridadUrl = function () {
        for (var i = 0; i < this.proyecto.datos.length; i++) {
            // console.log(this.proyecto.datos[i].pageProyecto)
            if (this.proyecto.datos[i].pageProyecto) {
                this.proyecto.urlPage = this.satinizer.bypassSecurityTrustResourceUrl(this.proyecto.datos[i].pageProyecto);
                this.proyecto.datos[i].pageProyecto = this.proyecto.urlPage;
            }
            if (this.proyecto.datos[i].urlVideo) {
                this.proyecto.urlPage = this.satinizer.bypassSecurityTrustResourceUrl(this.proyecto.datos[i].urlVideo);
                this.proyecto.datos[i].urlVideo = this.proyecto.urlPage;
            }
            //console.log(this.proyecto.urlPage)
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__util_background_color_random_component__["a" /* BackgroundColorRandomComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_proyectos_proyecto_proyecto_component__["a" /* ProyectoComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_background_color_random_component__["a" /* BackgroundColorRandomComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_background_color_random_component__["a" /* BackgroundColorRandomComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__components_proyectos_proyecto_proyecto_component__["a" /* ProyectoComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_proyectos_proyecto_proyecto_component__["a" /* ProyectoComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__service_google_analytics_service__["a" /* GoogleAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_google_analytics_service__["a" /* GoogleAnalyticsService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_menu_menu_component__ = __webpack_require__("../../../../../src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cv_cv_component__ = __webpack_require__("../../../../../src/app/components/cv/cv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_proyectos_proyectos_component__ = __webpack_require__("../../../../../src/app/components/proyectos/proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_proyectos_proyecto_proyecto_component__ = __webpack_require__("../../../../../src/app/components/proyectos/proyecto/proyecto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_google_analytics_service__ = __webpack_require__("../../../../../src/app/service/google-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_slider_slider_component__ = __webpack_require__("../../../../../src/app/components/home/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_slider_proyectos_slider_proyectos_component__ = __webpack_require__("../../../../../src/app/components/slider-proyectos/slider-proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_proyectos_realizados_proyectos_realizados_component__ = __webpack_require__("../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_cv_cv_component__["a" /* CvComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_proyectos_proyectos_component__["a" /* ProyectosComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_proyectos_proyecto_proyecto_component__["a" /* ProyectoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_slider_proyectos_slider_proyectos_component__["a" /* SliderProyectosComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_proyectos_realizados_proyectos_realizados_component__["a" /* ProyectosRealizadosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__service_google_analytics_service__["a" /* GoogleAnalyticsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\n\n   height: 640px;\n}\n.linkedin{\n    \n     height: inherit;\n     font-family: 'Anton', sans-serif;\n}\n.in {\n    height: inherit;\n    background-color: #006f8a;\n   \n    \n}\n.in a{\n    color:#ffbc49;\n    text-decoration: none;\n}\n.in a:hover, p:hover{\n    color:rgba(4, 103, 121, 0.6);\n}\n.out span{\n       position: relative;\n       top:7%;\n       font-size: 20em;\n       margin-bottom: 90px;\n}\n.in a {\n    position: relative;\n    top:9%;\n}\n.in a span{\n    position: relative;\n    top:-8%;\n    font-size: 20em;\n    margin-bottom: 90px;\n}\n.out{\n    height: inherit;\n    background-color: #ffbc49;\n    color:#006f8a;\n    \n}\n\np{\n    font-size: 1em;\n position: relative;\n top:70px;\n color: #ffbc49;\n}\n\n\n\n@media (max-width:460px){\n    .container-fluid{\n        height: 375px;\n    }\n    .in a span,.out span{\n        font-size: 10em;\n    }\n    p{\n        font-size: 1em;\n     position: relative;\n     top:40px;\n     color: #ffbc49;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \" >\n<div class=\"row linkedin\">\n  \n  <div class=\"col-xs-12 col-md-6 in text-center \">\n      <p>Linked</p>\n    <a class=\"\" href=\"http://www.linkedin.com/in/jareina\" target=\"_blank\" ><span >IN</span></a>\n    \n</div>\n  \n<div class=\"col-xs-12 col-md-6  out text-center\">\n  <span>OUT</span> \n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/cv/cv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CvComponent; });
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

var CvComponent = (function () {
    function CvComponent() {
        window.scrollTo(0, 0);
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    return CvComponent;
}());
CvComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cv',
        template: __webpack_require__("../../../../../src/app/components/cv/cv.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/cv/cv.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CvComponent);

//# sourceMappingURL=cv.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\n    margin-bottom: 0;\n     overflow-x:hidden;\n}\nimg{\n    width: 90px;\n   \n}\n\nfooter{\n    background-color:rgba(3, 7, 6, 0.82);\n    color:#fff;\n    height: auto;\n    \n    font-size: .7em;\n}\n\n.logoFooter{\n    background-color: rgba(17, 14, 14, 0.308);\n}\n\n.centro,.izquierda,.derecha{\n    \n    box-sizing: content-box;\n    padding:1%;\n    text-align: center;\n}\n.jareina{\n    font-size: .9em;\n   \n}\ni,a{\n    color:rgba(73, 133, 115, 0.82);\n    margin-top:10px;\n    text-decoration: none;\n}\na:hover i,\ndiv a:hover {\n    color:#ffbc49;\n}\n\n.jareina {\n    background-color:rgba(24, 22, 22, 0.911);\n   \n    color:rgba(73, 133, 115, 0.82);\n    font-size: 1.1em;\n}\n\nul {\n    list-style: none;\n    margin-top: 15px\n}\nul li {\n    margin-bottom:10px;\n}\nul li a{\n    \n    text-decoration: none;\n}\n\n.hecho{\n    width:1%;\n}\nul li:hover a{\n    color:#ffbc49;\n}\n@media(max-width: 768px)  { \n        footer{\n            height: 170px;\n        }\n        .jareina {\n            \n            padding:8%;\n            text-align: center;\n        }\n        ul li a{\n            margin-left: 40%;\n            \n        }\n        .hecho{\n            width:8%;\n        }\n        \n}\n@media(max-width: 800px) { \n    footer{\n        height: 350px;\n    }\n  \n \n}\n\n@media(max-width: 660px) { \n    footer{\n        height: 350px;\n    }\n  \n\n    i{\n     \n        text-align:center;\n    }\n    ul li a {\n        text-align: center;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n<footer>\n<div class=\"container-fluid\">\n<div class=\"row\">\n    <div class=\"col-xs-12 logoFooter  \">     <img  src=\"assets/img/JAreina-transparente.png\" alt=\"logo\" >  </div>\n  </div>\n\n    <div class=\"row\">\n  <div class=\"col-xs-12 col-md-4  izquierda pull-right\">      \n    <div class=\"col-xs-6 col-md-12\">\n    <a href=\"https://github.com/JAreina\" target=\"_blank\" ><i class=\"fa fa-github fa-lg\"></i>&nbsp;  Github</a>\n</div> \n<div class=\"col-xs-6 col-md-12\">\n  <a href=\"https://gitlab.com/JAreina\" target=\"_blank\" ><i class=\"fa fa-gitlab fa-lg\"></i>&nbsp;  Gitlab</a>\n</div> \n<div class=\"col-xs-6 col-md-12\">\n  <a href=\"https://bitbucket.com/JAreina\" target=\"_blank\" ><i class=\"fa fa-bitbucket fa-lg\"></i>&nbsp;  Bitbucket</a>\n</div>\n    <div class=\"col-xs-6 col-md-12\">\n     <a href=\"http://www.linkedin.com/in/jareina\" target=\"_blank\" ><i class=\"fa fa-linkedin fa-lg\"></i>&nbsp;   Linkedin </a>\n</div>\n\n         </div>\n\n         \n         \n            <div class=\"col-xs-12  col-md-4 pull-left\">\n                \n                    <ul class=\"col-md-12  col-xs-12 \">\n                        <li class=\"col-md-12 col-xs-12\"> <a routerLink=\"/home\"> Home</a> </li>\n                          <li class=\"col-md-12 col-xs-12\"> <a routerLink=\"/cv\" > CV</a> </li>\n                          <li class=\"col-md-12 col-xs-12\" ><a routerLink=\"/proyectos\" > Porfolio</a></li>\n                          <li class=\"col-md-12 col-xs-12\" ><a routerLink=\"/proyectosrealizados\" > Proyectos</a></li>\n                      </ul>\n    \n              \n                \n               </div>\n\n\n    </div>\n  </div> \n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-12 jareina text-right\">\n          <span>  MMXVII-{{anio.getFullYear()}} &nbsp;   Hecho en Madrid con <img  class=\"hecho\" src=\"assets/img/angular.png\" > por JAreina</span>\n          \n             \n        \n        </div>\n    </div>\n      </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
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
        this.anio = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/datosHome.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cabeceraInicio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return seccionCambio; });
var cabeceraInicio = ["YA HAS ENCONTRADO", "AL DESARROLLADOR WEB", "QUE NECESITA TU PROYECTO"];
var seccionCambio = { "titulo": "Porque el cambio es la constante. ",
    "subtitulo": "Y ante el cambio:",
    "capacidades": ["Poseo la capacidad de adaptación a cada realidad", "Tengo la disposición para el trabajo en equipo", "Dispongo de la capacidad para el auto-aprendizaje"]
};
//# sourceMappingURL=datosHome.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home{\n    background:rgb(239, 243, 248);\n    \n    overflow-x: hidden;\n    box-sizing: content-box;\n}\n\n.foto_codigo {\n    margin: 10 auto;\n    margin-top:10px;\n    background: url(" + __webpack_require__("../../../../../src/assets/codigo3.png") + ");\n   background-size: cover;\n    width: 300px;\n    height: 300px;\n    border-radius: 150px;\n    box-shadow: 6px 5px 6px rgb(15, 30, 32);\n}\n\n.titulo{\n    background-color:#0A5C6E;\n     color:#FFFFFF;\n     font-weight: 400;\n     \n     padding:49px;\n     font-family: 'Anton', sans-serif;\n     font-size: .8em;\n}\n\n.bloqueTitular{\n    margin-top:50px;\n    \n    border-radius:2px 2px 2px;\n    border-bottom: 2px solid rgb(8, 9, 15);\n}\n.slider{\n    width: 100%;\n}\n\n.seccionCambio{\n    height: 350px;\n    background-color: #ffbc49;\n\n}\n\n.tituloCambio{\n   padding:40px;\n    font-weight: bolder;\n\n}\n.capacidades{\n    padding:45px;\n}\n@media (max-width:520px){\n    \n    .titulo{\n        height: 450px;\n    }\n    .seccionCambio{\n        margin-top: -20px;\n        height: 750px;\n        background-color: #ffbc49;\n    \n    }\n   }\n@media (max-width:760px){\n     \n     .titulo{\n         height: 550px;\n     }\n     .seccionCambio{\n        height: 850px;\n        background-color: #ffbc49;\n    \n    }\n    }\n    @media (max-width:860px){\n        \n        .titulo{\n            height: 550px;\n        }\n        .seccionCambio{\n            height: 850px;\n            background-color: #ffbc49;\n        \n        }\n\n\n       }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid home animated fadeIn\">\n    <div class=\"row titulo\">\n\n        <div class=\"col-md-6 bloqueTitular\">\n            <h1 class=\"col-md-12 titular text-right\" *ngFor=\"let texto of cabecera\">{{texto}}</h1>\n\n        </div>\n\n        <div class=\"foto_codigo hidden-xs col-md-6 \">\n\n        </div>\n\n    </div>\n\n    <app-slider class=\"slider\"></app-slider>\n\n</div>\n\n<div class=\"container-fluid cambio\">\n\n    <div class=\"row\">\n        <section class=\"seccionCambio\">\n            <div class=\"col-md-12\">\n                <h2 class=\"text-center tituloCambio\">{{seccionCambio.titulo}} {{seccionCambio.subtitulo}}</h2>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-md-4 text-center capacidades\" *ngFor=\"let capacidad of seccionCambio.capacidades;let i = index\">\n                    <div class=\"col-md-12 text-center\">\n                        <div [ngSwitch]=\"i\">\n                            <div class=\"block1\" *ngSwitchCase=\"0\">\n                                <i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i>\n\n                            </div>\n\n\n                            <div class=\"block2\" *ngSwitchCase=\"1\"><i class=\"fa fa-users fa-3x fa-fw\" aria-hidden=\"true\"></i></div>\n                            <div class=\"block3\" *ngSwitchDefault>\n\n                                <i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n\n                            </div>\n                        </div>\n\n\n                        <p>{{capacidad}}</p>\n                    </div>\n\n                </div>\n\n            </div>\n        </section>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datosHome__ = __webpack_require__("../../../../../src/app/components/home/datosHome.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.cabecera = __WEBPACK_IMPORTED_MODULE_1__datosHome__["a" /* cabeceraInicio */];
        this.seccionCambio = __WEBPACK_IMPORTED_MODULE_1__datosHome__["b" /* seccionCambio */];
        window.scrollTo(0, 0);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/slider/datos-slider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return datosTituloSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosSlider; });
var datosTituloSlider = [
    "Porque mis conocimientos en tecnologías web harán realidad tus ideas.", "Conocimientos que están siempre en constante suma."
];
// cambiar totalIds en slider.compoent.ts    al añadir uno nuevo
var datosSlider = [
    {
        id: 1,
        nombre: "Angular",
        descripcion: [
            "Experiencia desde Abril de 2017.",
            "Creación de componentes, decoradores,data binding, enrutamiento, services, módulos..."
        ],
        urlLogo: "./assets/img/logo-angular.png"
    },
    {
        id: 2,
        nombre: "Java",
        descripcion: [
            "Experiencia desde Octubre de 2015. Aprendí a programar con este lenguaje. ",
            "Aplicaciones de escritorio, así como aplicaciones web"
        ],
        urlLogo: "./assets/img/logo-java.png"
    },
    {
        id: 3,
        nombre: "JavaScript",
        descripcion: [
            "Mi experiencia empieza en Mayo de 2015 en el uso de este lenguaje.",
            "Imprescindible para dar funcionalidad a una página web."
        ],
        urlLogo: "./assets/img/logo-js.png"
    },
    {
        id: 4,
        nombre: "Html 5",
        descripcion: [
            "Empecé a aprender HTML5 en Enero de 2015. ",
            "La estructura básica, la raíz que sustenta el resto."
        ],
        urlLogo: "./assets/img/logo-html5.png"
    },
    {
        id: 5,
        nombre: "Css 3",
        descripcion: [
            "Comencé a estudiar CSS 3 en Marzo de 2015",
            "Imprescindible para animaciones, para crear un buen diseño."
        ],
        urlLogo: "./assets/img/logo-css3.png"
    },
    {
        id: 6,
        nombre: "TypeScript",
        descripcion: [
            "Mi experiencia empieza en Typescript en Abril de 2017, junto con Angular",
            "Sabiendo Java es relativamente sencillo adaptarse a este lenguaje"
        ],
        urlLogo: "./assets/img/logo-ts.png"
    },
    {
        id: 7,
        nombre: "Sql",
        descripcion: [
            "Experiencia desde 2015,  en el lenguaje para el acceso a bases de datos relacionales."
        ],
        urlLogo: "./assets/img/logo-sql.png"
    },
    {
        id: 8,
        nombre: "Git",
        descripcion: [
            "Manejo de git, software de control de versiones para los proyectos"
        ],
        urlLogo: "./assets/img/logo-git.png"
    },
    {
        id: 9,
        nombre: "Mysql",
        descripcion: ["Mysql. Creación de bases de datos y Administración"],
        urlLogo: "./assets/img/logo-mysql.png"
    },
    {
        id: 10,
        nombre: "Shell Scripting",
        descripcion: ["Programación de línea de comandos bash. Linux."],
        urlLogo: "./assets/img/logo-bash.png"
    },
    {
        id: 11,
        nombre: "Node",
        descripcion: ["Programación Javascript en el lado del servidor"],
        urlLogo: "./assets/img/node.png"
    }
];
//# sourceMappingURL=datos-slider.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/slider/slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2{\n    font-size: 1.6em;\n    font-weight: bolder;\n}\n.numConocimiento{\n    width: 25px;\n    height: 25px;\n    border-radius: 50% 50%;\n    font-family: 'Anton', sans-serif;\n    font-size: .8em;\n    text-align: center;\n    border: 1px solid #0A5C6E;\n    color:#0A5C6E;\n    margin-bottom: 5px;\n    box-shadow: 1px 1px 1px rgb(130, 175, 185);\n    padding: .1%;\n}\n.fondo{\nmargin:0 auto;\n    width:100px;\n    height: 100px;\n    background-size: cover;\n    box-sizing: content-box;\n \n    cursor: pointer;\n  \n}\n.texto{\n    margin:0 auto;\n    margin-bottom: 23px;\n}\n.conocimientos{\n  \n    height: 475px;\n    background-color:transparent;\n}\n.tituloConocimiento{\n    padding:10px;\n}\n.diapositiva{\n    margin-top:15px;\n}\n@media (max-width:390px){\n  \n    .numConocimiento{\n    position: relative;\n    left: -3%;\n }\n   h2{\n        font-size: 1.2em;\n        margin-bottom: 15px;\n        font-weight: bolder;\n    }\n \n    .conocimientos{\n        height: 550px;\n    }\n   }\n   @media (max-width:1390px){\n    .numConocimiento{\n           margin-left: 49%;\n    }\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-12 conocimientos\">\n    <h2 class=\"text-center tituloConocimiento\"\n      *ngFor=\"let t of titulo\"\n    \n    \n    \n    >{{t}}</h2>\n    <div class=\"numConocimiento \" >{{ idActual? idActual+1: \"1\" }}</div>     \n      <div class=\"caja-fondo\">\n        <section class=\"fondo animated  fadeIn\"[style.backgroundImage]=\"fondo\"\n        (mouseenter)=\"pararIntervalo()\"\n        (mouseleave)=\"reanudarIntervalor()\">\n\n        </section>\n\n      </div>\n     \n              <section class=\"text-center texto animated fadeIn\" *ngFor=\"let conocimiento of conocimientos\">\n                  \n                <h2>{{conocimiento.nombre}}</h2>\n         <p>{{conocimiento.descripcion[0]}}</p>\n         <p>{{conocimiento.descripcion[1]}}</p>\n              </section>\n          \n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_slider__ = __webpack_require__("../../../../../src/app/components/home/slider/datos-slider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = (function () {
    function SliderComponent() {
        this.titulo = __WEBPACK_IMPORTED_MODULE_1__datos_slider__["b" /* datosTituloSlider */];
        this.datosSlider = __WEBPACK_IMPORTED_MODULE_1__datos_slider__["a" /* datosSlider */];
        this.totalIds = 11;
        this.slider();
    }
    SliderComponent.prototype.ngOnInit = function () { };
    SliderComponent.prototype.slider = function () {
        var _this = this;
        this.finInterval = setInterval(function () {
            var num = 0;
            if (num === _this.idActual) {
                _this.idActual = Math.floor(Math.random() * _this.totalIds);
                num = _this.idActual;
            }
            else {
                _this.idActual = Math.floor(Math.random() * _this.totalIds);
            }
            _this.url = __WEBPACK_IMPORTED_MODULE_1__datos_slider__["a" /* datosSlider */][_this.idActual].urlLogo;
            _this.fondo = "url( " + _this.url + ")";
            for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__datos_slider__["a" /* datosSlider */].length; i++) {
                _this.conocimientos = [];
                _this.conocimientos.push(__WEBPACK_IMPORTED_MODULE_1__datos_slider__["a" /* datosSlider */][_this.idActual]);
            }
        }, 2700);
    };
    SliderComponent.prototype.pararIntervalo = function () {
        clearInterval(this.finInterval);
    };
    SliderComponent.prototype.reanudarIntervalor = function () {
        this.slider();
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-slider",
        template: __webpack_require__("../../../../../src/app/components/home/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/slider/slider.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*menu */\n.menuNavegacion{\n    \n    width: 100%;\n    \n    z-index: 1000;\n  }\n  .row.navegacion{\n    \n    width: 100%;\n    position: absolute;\n    top:100%;\n    left:50%;\n      z-index: 1000;\n     \n  }\n  .menuNavegacion ul {\n    width: 100%;\n    height: auto;\n    border : 1px solid rgba(0, 0, 0, 0.822);\n   \n    \n    top:1px;\n    background-color: rgba(0, 0, 0, 0.822);\n  }\n  .menuNavegacion ul li {\n     list-style-type: none;\n     \n     padding:10px;\n     \n  \n  }\n  .menuNavegacion ul li:hover{\n    border-right: 21px solid #ffbc49;\n  \n  }\n  .menuNavegacion ul li a{\n    text-decoration: none;\n   color: #006f8a;\n    display: block;\n  }\n  \n  .menuNavegacion ul li:hover a{\n    color:#ffbc49;\n    \n  }\n\n\ni.fa.fa-bars{\n  margin-top:10px;\n\n  color:rgba(255, 255, 255, 0.84);\n  font-size:1.5em; \n  text-align: right;\n}\n\n\n@media (max-width:360px) {\n  .row.navegacion{\n  \n    position: absolute;\n    top:0%;\n    left:0%;\n      \n  }\n  i.fa.fa-bars{\n    \n    margin-top:10px;\n     \n    color:#006f8a;\n    font-size:1.5em; \n    text-align: right;\n  }\n}\n@media (max-width:682px) {\n  .row.navegacion{\n  \n    position: absolute;\n    top:0%;\n    left:0%;\n      \n  }\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<i (mouseenter)=\"mostrarMenu()\" class=\"fa fa-bars fa-2x text-right col-xs-6 {{iconoMenu}}\"></i>\n\n<div class=\"row navegacion \" (mouseleave)=\"ocultarMenu()\">\n    <div class=\"col-xs-12 col-md-4 col-md-offset-4 \">\n        <nav class=\"menuNavegacion {{menu}}\">\n            <ul>\n                <li> <a routerLink=\"/home\" (click)=\"ocultarMenu()\"><i class=\"fa fa-home fa-1x\"></i> Inicio</a> </li>\n                <li> <a routerLink=\"/cv\" (click)=\"ocultarMenu()\"><i class=\"fa fa-graduation-cap fa-1x\"></i> CV</a> </li>\n                <li><a routerLink=\"/proyectos\" (click)=\"ocultarMenu()\"><i class=\"fa fa-flag fa-1x\"></i> Porfolio actividades</a></li>\n                <li><a routerLink=\"/proyectosrealizados\" (click)=\"ocultarMenu()\"><i class=\"fa fa-flag fa-1x\"></i> Proyectos realizados</a></li>\n            </ul>\n        </nav>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
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

var MenuComponent = (function () {
    function MenuComponent() {
        this.menu = "hidden";
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.mostrarMenu = function () {
        this.iconoMenu = "hidden";
        this.menu = "";
    };
    MenuComponent.prototype.ocultarMenu = function () {
        this.iconoMenu = "";
        this.menu = "hidden";
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proyectos-realizados/datosProyectos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return datosProyectos; });
var datos = {
    "titulo": "Proyectos realizados",
    "subtitulo": "Porque cada proyecto es siempre un apasionante principio de:",
    "de": ["colaboración",
        "búsqueda",
        "aprendizaje",
        "hallazgos",
        "resultados"]
};
var datosProyectos = [
    {
        "id": "0",
        "logo": "assets/img/1.png",
        "nombreProyecto": "FincasWeb",
        "descripcionProyecto": "Administración de comunidades. "
    },
    {
        "id": "1",
        "logo": "assets/img/hermandad-fotos/1.png",
        "nombreProyecto": "Gestión de recibos e impresión",
        "descripcionProyecto": "Aplicacion de escritorio"
    },
    {
        "id": "2",
        "logo": "assets/img/escrito-index.png",
        "url": "https://escrito-jareina.herokuapp.com",
        "nombreProyecto": "Escrito",
        "descripcionProyecto": "Libros de notas"
    }
];
//# sourceMappingURL=datosProyectos.js.map

/***/ }),

/***/ "../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".proyectosRealizados{\n   \n    background-color: rgb(246, 246, 246);\n}\n\n.cabeceraProyectos{\n    background-color: #006f8a;\n    color:#fff;\n    padding:10px;\n    height: 280px;\n    font-family: 'Anton', sans-serif;\n    \n}\n.de{\n    margin-left: 33px;\n     margin-top:66px;\n     color:#ffbc49;\n}\n\n.boton{\n    margin-bottom:4%;\n    background-color: #ffbc49;\n    color:#006f8a;\n}\n.boton:hover{\n    background-color:#006f8a;\n    color:#ffbc49;\n}\n\n.caja{\n\n    height: 400px;\n    border-radius: 8px;\n    box-shadow: 5px 6px 7px rgb(212, 212, 212);\n    background-color:rgb(255, 249, 248);\n    margin:12px 6px;\n}\n\n.caja:hover{\n    box-shadow: 0px 0px 0px rgb(212, 212, 212);\n    background-color:rgb(255, 255, 255);\n}\n\n.descripcion{\n     padding:10px;\n    text-align: center;\n}\n@media (max-width:321px) {\n    .cabeceraProyectos{\n        \n        padding: 9px;\n       \n    }\n    .de{\n        margin-top:5px;\n        margin-left: 0px;\n        font-size: 1em;\n        \n    }\n    .caja{\n        padding: 20px;\n        height: 400px;\n    }\n    .boton{\n        margin-top:14%;\n        margin-bottom:24%;\n}}\n\n@media (max-width:460px) {\n    .cabeceraProyectos{\n    \n        height: 600px;\n    }\n    .de{\n        margin-top:10px;\n        margin-left: 0px;\n        \n    }\n    .caja{\n        padding: 20px;\n        height: 400px;\n    }\n    .boton{\n        margin-top:14%;\n        margin-bottom:24%;\n}}\n\n@media (max-width:990px) {\n \n    .cabeceraProyectos{\n    \n        height: 440px;\n    }\n    .de{\n        margin-top:10px;\n        margin-left: 0px;\n        \n    }\n    .caja{\n        height: 500px;\n    }\n  \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<section class=\"proyectosRealizados animated fadeIn\">\n<div class=\"col-md-12 text-center cabeceraProyectos\">\n<h1>{{cabecera.titulo}}</h1>\n<h2>{{cabecera.subtitulo}}</h2>\n<div *ngFor=\"let s of cabecera.de\">\n\n\n    <div class=\"col-xs-12 col-md-2 text-center de\">\n            <span>{{s}}</span>\n\n    </div>\n    \n</div>\n</div>\n\n<div  *ngIf=\"datos.length>0\" class=\"proyecto animated fadeIn\">\n    <div class=\"col-md-3 caja \" *ngFor=\"let dato of datos\">\n            <h2 class=\"cabeceraProyecto text-center\">\n                    {{dato.nombreProyecto}}</h2>\n                    <div class=\"descripcion \">\n                            {{dato.descripcionProyecto}}\n                           \n                            </div>\n           \n            <a *ngIf=\"!dato.url\" class=\"btn btn-info col-xs-4 col-xs-offset-4 boton\" \n            [routerLink]=\"['/slider',dato.id]\">VER</a> \n            <a *ngIf=\"dato.url\" class=\"btn btn-info col-xs-4 col-xs-offset-4 boton\" \n            [href]=\"[dato.url]\" target=\"a_blank\">VER</a> \n            \n             \n                    <div class=\"col-xs-12\">\n                            <img [src]=\"dato.logo\" \n                            class=\"img-responsive\" alt=\"logo\">\n                    </div>\n                   \n                 \n                \n            \n            \n                \n  \n          </div>\n          \n        </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosRealizadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datosProyectos__ = __webpack_require__("../../../../../src/app/components/proyectos-realizados/datosProyectos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_proyectos_slider_proyectos_component__ = __webpack_require__("../../../../../src/app/components/slider-proyectos/slider-proyectos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProyectosRealizadosComponent = (function () {
    function ProyectosRealizadosComponent(r, slider) {
        this.r = r;
        this.slider = slider;
        this.cabecera = __WEBPACK_IMPORTED_MODULE_1__datosProyectos__["a" /* datos */];
        this.datos = __WEBPACK_IMPORTED_MODULE_1__datosProyectos__["b" /* datosProyectos */];
    }
    ProyectosRealizadosComponent.prototype.ngOnInit = function () {
    };
    return ProyectosRealizadosComponent;
}());
ProyectosRealizadosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proyectos',
        template: __webpack_require__("../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proyectos-realizados/proyectos-realizados.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__slider_proyectos_slider_proyectos_component__["a" /* SliderProyectosComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__slider_proyectos_slider_proyectos_component__["a" /* SliderProyectosComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__slider_proyectos_slider_proyectos_component__["a" /* SliderProyectosComponent */]) === "function" && _b || Object])
], ProyectosRealizadosComponent);

var _a, _b;
//# sourceMappingURL=proyectos-realizados.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyecto/proyecto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid .row{\n \n    box-sizing: content-box;\n}\n.proyecto{\n    margin-left:47px;\n}\n.cajaProyecto{\n    \n    height: 250px;\n    box-sizing: border-box;\n   margin:10px 20px;\n  \n    border-radius: 8px;\n    box-shadow: 5px 6px 7px rgb(212, 212, 212);\n    background-color:rgb(250, 250, 250);\n    \n}\n.cajaProyecto:hover{\n\n    background-color: #f9fbfc;\n    \n}\n.cajaProyecto:hover div.descripcion{\n    color:#006f8a;\n}\n.cabeceraProyecto{\n\n    color:#ffbc49;\n}\nimg{\n    width: 10%;\n}\n.marco{\n    margin-top:50px;\n}\niframe.pagina{\n    width:100%;\n    height: 590px;\n    border:none;\n    margin-top:20px;\n\n}\n\n\n\n.descripcion,.titulo{\n    box-sizing: content-box;\n    padding:12px;\n}\n\na.btn.btn-info{\n    background-color:#006f8a;\n    border:2px dotted #ffbc49;\n    color:#fff;\n    padding:10px;\n}\na.btn.btn-info:hover{\n    border:2px solid #ffbc49;\n    background-color:#006f8a;\n    color:white;\n}\n\n.video-responsive {\n    \n        position: relative;\n      padding-bottom: 36.25%;/*  16/9 ratio */\n       margin-top: 49px;\n        padding-top: 70px; /* IE6 workaround*/\n        height: 0;\n        overflow: hidden;\n        }\n        \n        .video-responsive iframe,\n        .video-responsive object,\n        .video-responsive embed {\n        position: absolute;\n        top: 0;\n        left: 0;\n   \n      \n        }\n@media (max-width: 420px) { \n    img{\n        width:10%;\n    }\n    .video-responsive iframe,\n    .video-responsive object,\n    .video-responsive embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    }\n    .cabeceraProyecto{\n        font-size: 1em;\n    }\n    .cajaProyecto{\n       \n        height: 300px;\n        box-sizing: border-box;\n        margin-top:12px ;\n        margin-right:0px;\n        margin-left: -20%;\n    }\n }\n    \n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyecto/proyecto.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div  *ngIf=\"datos.length>0\" class=\"proyecto animated fadeIn\">\n  <div class=\"col-md-5 cajaProyecto \" *ngFor=\"let dato of datos\">\n       \n          \n          \n              <h2 class=\"cabeceraProyecto\"><img [src]=\"dato.logo\" \n                class=\"img-responsive\" alt=\"logo\">\n                 {{dato.nombreProyecto}}</h2>\n              \n          \n          \n              <div class=\"descripcion\">\n              {{dato.descripcionProyecto}}\n             \n              </div>\n              <a class=\"btn btn-info\" \n              [href]=\"dato.urlProyecto\" \n              target=\"_blank\">Código</a> \n            \n              <a *ngIf=\"dato.pageProyecto\"  class=\"btn btn-info\" \n              [href]=\"dato.pageProyecto\" \n              target=\"_blank\">Ver página</a> \n               \n              <a *ngIf=\"dato.urlVideo\"  class=\"btn btn-info\" \n              [href]=\"dato.urlVideo\" \n              target=\"_blank\">Ver vídeo</a> \n\n        </div>\n      </div>\n\n<!--  para proyecto detalle \n      <div class=\"col-md-12 col-xs-12 marco\" *ngIf=\"dato.tipoMedia === 'pagina'\">\n        \n          \n            <iframe *ngIf=\"dato.pageProyecto\" [src]=\"dato.pageProyecto\" class=\"pagina animated fadeIn\">\n              <p>Your browser does not support iframes.</p>\n            </iframe>\n          </div>\n\n          <div class=\"col-md-10 col-md-offset-3 col-xs-12 video-responsive\" *ngIf=\"dato.tipoMedia === 'video'\">  \n            <iframe *ngIf=\"dato.urlVideo\" width=\"660\" height=\"415\"\n             [src]=\"dato.urlVideo\" \n             frameborder=\"0\" allowfullscreen></iframe>\n\n      </div>-->\n  \n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyecto/proyecto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_datosProyectos__ = __webpack_require__("../../../../../src/app/datos/datosProyectos.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProyectoComponent = (function () {
    function ProyectoComponent() {
        this.datos = __WEBPACK_IMPORTED_MODULE_1__datos_datosProyectos__["a" /* datosProyectos */];
    }
    return ProyectoComponent;
}());
ProyectoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proyecto',
        template: __webpack_require__("../../../../../src/app/components/proyectos/proyecto/proyecto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proyectos/proyecto/proyecto.component.css")]
    })
], ProyectoComponent);

//# sourceMappingURL=proyecto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyectos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cabecera{\n    background-color: #ffbc49;\n}\nh1{\n    text-align: center;\n}\n.porfolio{\n    margin-bottom: 20px;\n}\n@media (max-width:420px){\n    h1{\n        font-size: 1em;\n      \n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyectos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-12 cabecera\">\n     <h1 >{{titulo}}</h1>\n  \n  </div>\n  </div>\n  <div class=\"container porfolio\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-xs-12\">\n        <app-proyecto></app-proyecto>\n      </div>\n    </div>\n  </div>\n\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/proyectos/proyectos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProyectosComponent; });
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

var ProyectosComponent = (function () {
    function ProyectosComponent() {
        this.titulo = "Porfolio de actividades";
        window.scrollTo(0, 0);
    }
    ProyectosComponent.prototype.ngOnInit = function () {
    };
    return ProyectosComponent;
}());
ProyectosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-proyectos',
        template: __webpack_require__("../../../../../src/app/components/proyectos/proyectos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/proyectos/proyectos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProyectosComponent);

//# sourceMappingURL=proyectos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider-proyectos/datos-slider-proyectos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosProyectosSlider; });
var datosProyectosSlider = [[
        {
            "tituloProyecto": "FINCASWeB"
        },
        {
            "id": 0,
            "nombre": "Página principal",
            "descripcion": [""],
            "urlLogo": "./assets/img/1.png"
        },
        {
            "id": 1,
            "nombre": "Acceso de clientes y administradores",
            "descripcion": [""],
            "urlLogo": "./assets/img/2.png"
        },
        {
            "id": 2,
            "nombre": "Página de solicitud de presupuesto",
            "descripcion": [""],
            "urlLogo": "./assets/img/3.png"
        },
        {
            "id": 3,
            "nombre": "Página de situación geográfica",
            "descripcion": [""],
            "urlLogo": "./assets/img/4.png"
        },
        {
            "id": 4,
            "nombre": "Página principal del cliente",
            "descripcion": [""],
            "urlLogo": "./assets/img/5.png"
        },
        {
            "id": 5,
            "nombre": "Página de documentos del cliente",
            "descripcion": [""],
            "urlLogo": "./assets/img/6.png"
        },
        {
            "id": 6,
            "nombre": "Detalle de buscar documento del cliente",
            "descripcion": [""],
            "urlLogo": "./assets/img/7.png"
        },
        {
            "id": 7,
            "nombre": "Panel del administrador",
            "descripcion": [""],
            "urlLogo": "./assets/img/8.png"
        },
        {
            "id": 8,
            "nombre": "Formulario de altas de comunidades del admistrador",
            "descripcion": [""],
            "urlLogo": "./assets/img/9.png"
        },
        {
            "id": 9,
            "nombre": "Formulario de altas de propiedades de los clientes",
            "descripcion": [""],
            "urlLogo": "./assets/img/10.png"
        },
        {
            "id": 10,
            "nombre": "Formulario de creación de contraseñas para los clientes",
            "descripcion": [""],
            "urlLogo": "./assets/img/11.png"
        },
        {
            "id": 11,
            "nombre": "Mensajes de los clientes",
            "descripcion": [""],
            "urlLogo": "./assets/img/12.png"
        },
        {
            "id": 12,
            "nombre": "Formulario de respuesta de mensajes",
            "descripcion": [""],
            "urlLogo": "./assets/img/13.png"
        },
        {
            "id": 13,
            "nombre": "Gestión de la contabilidad por el admistrador",
            "descripcion": ["Subir informe pdf de los ingresos mensuales"],
            "urlLogo": "./assets/img/14.png"
        },
        {
            "id": 14,
            "nombre": "Borrar informe trimestral de ingresos por el administrador",
            "descripcion": [""],
            "urlLogo": "./assets/img/15.png"
        },
        {
            "id": 14,
            "nombre": "Formulario de solicitud de presupuesto",
            "descripcion": [""],
            "urlLogo": "./assets/img/16.png"
        },
        {
            "id": 15,
            "nombre": "Tabla de los nuevos presupuestos recibidos por el administrador",
            "descripcion": [""],
            "urlLogo": "./assets/img/17.png"
        },
        {
            "id": 16,
            "nombre": "Subir el presupuesto en pdf y enviar correo al usuario",
            "descripcion": [""],
            "urlLogo": "./assets/img/18.png"
        }
    ],
    [
        {
            "tituloProyecto": "APLICACIÓN DE ESCRITORIO GESTIÓN RECIBOS"
        },
        {
            "id": 0,
            "nombre": "Ventana principal",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/1.png"
        },
        {
            "id": 1,
            "nombre": "Ventana de altas",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/2.png"
        },
        {
            "id": 2,
            "nombre": "Ventana borrar",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/3.png"
        },
        {
            "id": 3,
            "nombre": "Ventana para imprimir",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/4.png"
        },
        {
            "id": 4,
            "nombre": "Imprimiendo listado",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/5.png"
        },
        {
            "id": 5,
            "nombre": "Listado impreso",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/6.png"
        },
        {
            "id": 6,
            "nombre": "Imprimiendo recibos",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/7.png"
        },
        {
            "id": 7,
            "nombre": "Recibos impresos",
            "descripcion": [""],
            "urlLogo": "./assets/img/hermandad-fotos/8.png"
        }
    ]
];
//# sourceMappingURL=datos-slider-proyectos.js.map

/***/ }),

/***/ "../../../../../src/app/components/slider-proyectos/slider-proyectos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.titu{\n    position:relative;\n    text-align: center;\n    z-index: 1000;\n    top:70px;\n   left: -40%;\n    color:#ffbc49;\n}\n.fondo{\n    box-sizing: content-box;\n    background-color:#006f8a;\n    height: 400px;\n    background-size: contain;\n   background-position: center;\n   background-repeat: no-repeat;\n    \n\n    cursor: pointer;\n    \n}\n.texto{\n    background-color: #ffbc49;\n    height: 150px;\n    \n}\n\n.botonVolver a{\n    margin-top:70px;\n    margin-left: 4.5%;\n    \n    background-color: #ffbc49;\n    color:#006f8a;\n    position: relative;\n    top:230px;\n    \n    border:none;\n   \n\n\n}\n\n.botonVolver a:hover{\n    background-color:#006f8a;\n    color:#ffbc49;\n}\n\n@media  (max-width:360px) {\n    .botonVolver a{\n        position: relative;\n        top:230px;\n        left: 25%;\n    }\n    .texto{\n        \n        height: 50px;\n        \n    }\n    .titu{\n        position:relative;\n        z-index: 1000;\n        top:20px;\n        left:0%;\n        text-align: center;\n       \n        color:#ffbc49;\n    }\n    .botonVolver a{\n        \n        margin-left: -1%;\n}\n}\n\n@media  (max-width:712px) {\n    .botonVolver a{\n        position: relative;\n        top:230px;\n        left: 25%;\n    }\n    .texto{\n        \n        height: 160px;\n        \n    }\n    .titu{\n        position:relative;\n        z-index: 1000;\n        top:20px;\n        left:0%;\n        text-align: center;\n       \n        color:#ffbc49;\n    }\n}\n\n@media  (max-width:992px) {\n    .botonVolver a{\n        position: relative;\n        top:230px;\n        left: 2%;\n    }\n    .texto{\n        \n        height: 160px;\n        \n    }\n    .titu{\n        position:relative;\n        z-index: 1000;\n        top:300px;\n        left:0%;\n        text-align: left;\n       \n        color:#ffbc49;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/slider-proyectos/slider-proyectos.component.html":
/***/ (function(module, exports) {

module.exports = "\n    \n   \n              <section id=\"proyecto\" class=\"fondo col-xs-11  {{animacion}} col-md-12 \" [style.backgroundImage]=\"fondo\"\n             >\n             <h1 class=\" titu col-xs-12\">{{titulo}}</h1>       \n              <div class=\"col-xs 12 botonVolver \">\n                <a class=\"btn btn-info \" \n                [routerLink]=\"['/proyectosrealizados']\"\n                (mouseenter)=\"pararIntervalo()\"\n                (mouseleave)=\"reanudarIntervalor()\"\n                \n                >Volver a Proyectos realizados</a> \n     \n\n</div>\n              </section>\n              <section class=\"col-xs-12 col-md-12 text-center texto\" >\n                       <h2>{{nombre}}</h2>\n        \n         <p>{{descripcion}}</p>\n              </section>\n                  \n       \n                       \n   \n  "

/***/ }),

/***/ "../../../../../src/app/components/slider-proyectos/slider-proyectos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderProyectosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datos_slider_proyectos__ = __webpack_require__("../../../../../src/app/components/slider-proyectos/datos-slider-proyectos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderProyectosComponent = (function () {
    function SliderProyectosComponent(r) {
        this.r = r;
        this.proyectos = __WEBPACK_IMPORTED_MODULE_1__datos_slider_proyectos__["a" /* datosProyectosSlider */];
        this.titulo = "";
        //window.setTimeout(()=> //this.cambiarUrlBackground(),1000);
        window.scrollTo(0, 0);
    }
    SliderProyectosComponent.prototype.slider = function (id) {
        this.cambiarUrlBackground(id);
    };
    SliderProyectosComponent.prototype.ngOnDestroy = function () {
        this.pararIntervalo();
    };
    SliderProyectosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.r.params.subscribe(function (params) {
            _this.num = parseInt(params['id']);
        });
        this.slider(this.num);
    };
    SliderProyectosComponent.prototype.cambiarUrlBackground = function (id) {
        var _this = this;
        for (var i = 0; i <= this.proyectos.length; i++) {
            if (id == i) {
                this.proyecto = this.proyectos[i];
                this.totalIds = this.proyecto.length;
                this.titulo = this.proyecto[i].tituloProyecto;
                //da undefined  resolver
                if (this.num == 1)
                    this.titulo = "Gestión de Recibos";
            }
        }
        this.finInterval = setInterval(function () {
            _this.animacion = "animated fadeIn";
            _this.idActual = Math.floor(Math.random() * _this.totalIds);
            if (_this.idActual != 0) {
                _this.url = _this.proyecto[_this.idActual].urlLogo;
                _this.fondo = "url( " + _this.url + ")";
                _this.nombre =
                    _this.url = _this.proyecto[_this.idActual].nombre;
                _this.descripcion =
                    _this.url = _this.proyecto[_this.idActual].descripcion;
                for (var i = 0; i < _this.proyecto.length; i++) {
                    _this.proyectoAux = [];
                    _this.proyectoAux.push(_this.proyecto[_this.idActual]);
                }
            }
        }, 1300);
    };
    SliderProyectosComponent.prototype.pararIntervalo = function () {
        clearInterval(this.finInterval);
    };
    SliderProyectosComponent.prototype.reanudarIntervalor = function () {
        this.cambiarUrlBackground(this.num);
    };
    return SliderProyectosComponent;
}());
SliderProyectosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-slider-proyectos",
        template: __webpack_require__("../../../../../src/app/components/slider-proyectos/slider-proyectos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/slider-proyectos/slider-proyectos.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SliderProyectosComponent);

var _a;
//# sourceMappingURL=slider-proyectos.component.js.map

/***/ }),

/***/ "../../../../../src/app/datos/datosProyectos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return datosProyectos; });
var datosProyectos = [
    {
        "id": 1,
        "logo": "assets/img/angular.png",
        "nombreProyecto": "Service HTTP-API-NASA",
        "descripcionProyecto": "  Ejemplo de servicio HTTP con conexión a la API de la NASA",
        "urlProyecto": "https://github.com/JAreina/Angular2-ServiceHTTP-API-NASA",
        "pageProyecto": "https://jareina.github.io/Angular2-ServiceHTTP-API-NASA/",
        "tipoMedia": "pagina",
        "urlVideo": ""
    },
    {
        "id": 2,
        "logo": "assets/img/angular.png",
        "nombreProyecto": "App-FrutaFruit-v2",
        "descripcionProyecto": "  Ejemplo de aplicacion utilizando Auth0 y un servidor Express",
        "urlProyecto": "https://github.com/JAreina/app-FrutaFruit-Angular2-v2",
        "pageProyecto": "",
        "tipoMedia": "video",
        "urlVideo": "https://www.youtube.com/embed/tjyIqIOivVM"
    },
    {
        "id": 3,
        "logo": "assets/img/js.png",
        "nombreProyecto": "Luz Visible",
        "descripcionProyecto": " Mezcla de rojo, verde y azul consiguiendo luz blanca",
        "urlProyecto": "https://github.com/JAreina/luzVisible",
        "pageProyecto": "https://jareina.github.io/luzVisible",
        "tipoMedia": "pagina",
        "urlVideo": ""
    },
    {
        "id": 4,
        "logo": "assets/img/angular.png",
        "nombreProyecto": "Cronos",
        "descripcionProyecto": "Ejemplo de uso de @ViewChild. El componente padre utiliza métodos y propiedades de los componentes hijos",
        "urlProyecto": "https://github.com/JAreina/cronos",
        "pageProyecto": "https://jareina.github.io/cronos",
        "tipoMedia": "pagina",
        "urlVideo": ""
    },
    {
        "id": 5,
        "logo": "assets/img/angular.png",
        "nombreProyecto": "Background-image Slider",
        "descripcionProyecto": "Ejemplo de un simple slider, que utiliza setTimeout() para hacer cambios textos y fotografías",
        "urlProyecto": "https://github.com/JAreina/background-image-slider",
        "pageProyecto": "https://jareina.github.io/background-image-slider",
        "tipoMedia": "pagina",
        "urlVideo": ""
    }
];
//# sourceMappingURL=datosProyectos.js.map

/***/ }),

/***/ "../../../../../src/app/service/google-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAnalyticsService; });
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

var GoogleAnalyticsService = (function () {
    function GoogleAnalyticsService() {
    }
    GoogleAnalyticsService.prototype.emitEvent = function (eventCategory, eventAction, eventLabel, eventValue) {
        if (eventLabel === void 0) { eventLabel = null; }
        if (eventValue === void 0) { eventValue = null; }
        ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    };
    return GoogleAnalyticsService;
}());
GoogleAnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GoogleAnalyticsService);

//# sourceMappingURL=google-analytics.service.js.map

/***/ }),

/***/ "../../../../../src/app/util/background-color-random.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundColorRandomComponent; });
var BackgroundColorRandomComponent = (function () {
    function BackgroundColorRandomComponent() {
        this.coloor = {};
        this.setBackgroundColor();
    }
    BackgroundColorRandomComponent.prototype.setBackgroundColor = function () {
        var i = 0;
        var cont = 0;
        var resultado;
        var opacity = new Number((Math.random() * 1).toFixed(2));
        if (opacity === 0.00) {
            opacity = 0.5;
        }
        //console.log(opacity)
        resultado = "rgba(" + Math.floor(Math.random() * 255) + ",\n                                      255,\n                                        " + Math.floor(Math.random() * 255) + ",\n                                        " + opacity + "  ";
        this.coloor = { 'color': resultado };
        // console.log(this.coloor);
    };
    return BackgroundColorRandomComponent;
}());

//# sourceMappingURL=background-color-random.component.js.map

/***/ }),

/***/ "../../../../../src/assets/codigo3.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "codigo3.69b7983010980adfbe67.png";

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
    production: false
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map