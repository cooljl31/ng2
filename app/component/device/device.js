var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var search_1 = require('../search/search');
var Device = (function () {
    function Device(http, searchComponents) {
        var _this = this;
        this.searchComponents = searchComponents;
        this.devices = [];
        http.get('./devices.json').toRx().map(function (res) { return res.json(); }).subscribe(function (res) { return _this.devices = res; });
    }
    Device.prototype.onInit = function () {
        this.searchbox1 = this.searchComponents.first;
    };
    Device = __decorate([
        angular2_1.Component({
            selector: 'devices'
        }),
        angular2_1.View({
            templateUrl: './app/component/device/device.html',
            directives: [angular2_1.NgFor, search_1.Search]
        }),
        __param(1, angular2_1.ViewQuery(search_1.Search)), 
        __metadata('design:paramtypes', [http_1.Http, angular2_1.QueryList])
    ], Device);
    return Device;
})();
exports.Device = Device;
//# sourceMappingURL=device.js.map