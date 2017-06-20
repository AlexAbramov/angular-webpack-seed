webpackJsonp([2],{

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var platform_browser_1 = __webpack_require__(58);
var http_1 = __webpack_require__(123);
var router_1 = __webpack_require__(93);
var core_module_1 = __webpack_require__(204);
var app_component_1 = __webpack_require__(203);
var snappy_component_1 = __webpack_require__(206);
var about_component_1 = __webpack_require__(202);
var log_component_1 = __webpack_require__(205);
var routes = [
    { path: 'snappy', component: snappy_component_1.SnappyComponent },
    { path: '', redirectTo: 'snappy', pathMatch: 'full' },
    { path: 'lazy', loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(0).then((function (require) { resolve(__webpack_require__(636)['LazyModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
    { path: 'about', component: about_component_1.AboutComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            core_module_1.CoreModule,
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [
            app_component_1.AppComponent, snappy_component_1.SnappyComponent, about_component_1.AboutComponent, log_component_1.LogComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var log_1 = __webpack_require__(71);
var AboutComponent = (function () {
    function AboutComponent() {
        this.ver = {};
        log_1.Log.info('AboutComponent.constructor');
        this.ver.ng = "4.2.3";
        this.ver.webpack = "2.4.1";
    }
    AboutComponent.prototype.ngOnInit = function () { };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        template: __webpack_require__(360),
        styles: [__webpack_require__(365)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
log_1.Log.info('about.component.ts loaded');


/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var log_1 = __webpack_require__(71);
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular4 with Webpack';
        this.text = '';
        log_1.Log.info('AppComponent.constructor');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__(361),
        styles: [__webpack_require__(366)],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
log_1.Log.info('app.component.ts loaded');


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [],
        declarations: [],
        providers: []
    })
], CoreModule);
exports.CoreModule = CoreModule;


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var log_1 = __webpack_require__(71);
var LogComponent = (function () {
    function LogComponent() {
        log_1.Log.info('LogComponent.constructor');
    }
    Object.defineProperty(LogComponent.prototype, "messages", {
        get: function () { return log_1.Log.messages; },
        enumerable: true,
        configurable: true
    });
    return LogComponent;
}());
LogComponent = __decorate([
    core_1.Component({
        selector: 'log',
        template: __webpack_require__(362),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [])
], LogComponent);
exports.LogComponent = LogComponent;
log_1.Log.info('log.component.ts loaded');


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(15);
var log_1 = __webpack_require__(71);
var SnappyComponent = (function () {
    function SnappyComponent() {
        log_1.Log.info('SnappyComponent.constructor');
    }
    SnappyComponent.prototype.ngOnInit = function () { };
    return SnappyComponent;
}());
SnappyComponent = __decorate([
    core_1.Component({
        selector: 'snappy',
        template: __webpack_require__(363),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [])
], SnappyComponent);
exports.SnappyComponent = SnappyComponent;
log_1.Log.info('snappy.component.ts loaded');


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(197);
var platform_browser_dynamic_1 = __webpack_require__(92);
var core_1 = __webpack_require__(15);
var app_module_1 = __webpack_require__(194);
if (false) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 360:
/***/ (function(module, exports) {

module.exports = "<div class=\"seed-component\">\r\n    <h2>About</h2>\r\n    <p>\r\n        Angular4 lazy loading sample using WebPack.\r\n    </p>    \r\n    <p>\r\n        Angular: {{ver.ng}}<br>\r\n        WebPack: {{ver.webpack}}<br>\r\n    </p>    \r\n</div>";

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <h1>App component</h1>\r\n    <nav>\r\n        <span>Navigation:</span>\r\n        <a routerLink=\"/snappy\" routerLinkActive=\"active\">Snappy</a>\r\n        <a routerLink=\"/lazy\" routerLinkActive=\"active\">Lazy</a>\r\n        <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n    </nav>\r\n    <table style=\"width: 100%;\">\r\n        <tr>\r\n            <td>\r\n                <router-outlet></router-outlet>\r\n            </td>\r\n            <td style=\"width:300px;\">\r\n                <log></log>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n</main>\r\n<footer>\r\n    <a href=\"https://github.com/AlexAbramov/angular-webpack-seed\" target=\"_blank\">GitHub</a>\r\n</footer>";

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

module.exports = "<div class=\"seed-component\">\r\n    <h2>Log</h2>\r\n    <ul style=\"height: 300px; overflow-y: auto\">\r\n        <li *ngFor=\"let msg of messages\">\r\n            {{ msg }}\r\n        </li>\r\n    </ul>\r\n</div>";

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

module.exports = "<div class=\"seed-component\">\r\n    <h2>Snappy component</h2>\r\n    <p>\r\n        Regular Angular4 component packed in the application bundle.\r\n    </p>\r\n</div>";

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "div.seed-component{\r\n    background: white;\r\n}"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "main{ \r\n    background: lightblue;\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n\r\na{\r\n    margin-left: 10px;\r\n}\r\n\r\nfooter > a{\r\n    color: gray;\r\n    margin-left: 10px;\r\n}\r\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "div.seed-component{\r\n    background: white;\r\n}"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "div.seed-component{\r\n    background: lightgreen;    \r\n}"

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Log = (function () {
    function Log() {
    }
    Log.info = function (message) {
        this.messages.push(message);
        console.info(message);
    };
    return Log;
}());
Log.messages = [];
exports.Log = Log;


/***/ })

},[207]);
//# sourceMappingURL=app.js.map