webpackJsonp([0],{

/***/ 636:
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
var router_1 = __webpack_require__(93);
var lazy_component_1 = __webpack_require__(637);
var routes = [
    { path: '', component: lazy_component_1.LazyComponent },
];
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [],
        declarations: [lazy_component_1.LazyComponent],
        providers: []
    })
], LazyModule);
exports.LazyModule = LazyModule;


/***/ }),

/***/ 637:
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
var LazyComponent = (function () {
    function LazyComponent() {
        log_1.Log.info('LazyComponent.constructor');
    }
    LazyComponent.prototype.ngOnInit = function () { };
    return LazyComponent;
}());
LazyComponent = __decorate([
    core_1.Component({
        selector: 'lazy',
        template: __webpack_require__(638),
        styles: [__webpack_require__(639)]
    }),
    __metadata("design:paramtypes", [])
], LazyComponent);
exports.LazyComponent = LazyComponent;
log_1.Log.info('lazy.component.ts loaded');


/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<div class=\"seed-component\">\r\n    <h2>Lazy component</h2>\r\n    <p>\r\n        Angular4 component packed in a separate bundle loaded on demand.\r\n    </p>\r\n<div>";

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "div.seed-component{\r\n    background: lightyellow;    \r\n}"

/***/ })

});
//# sourceMappingURL=lazy.chunk.js.map