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
var angular2_1 = require('angular2/angular2');
var user_model_1 = require('./model/user-model');
var UserLogout = (function () {
    function UserLogout(user) {
        this.user = user;
    }
    UserLogout = __decorate([
        angular2_1.Component({
            selector: 'user-logout'
        }),
        angular2_1.View({
            template: "\n\t{{user.name}}\n\t<button [hidden]=\"!user.isLogged()\" (click)=\"user.logout()\">Logout</button>\n\t",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [user_model_1.UserModel])
    ], UserLogout);
    return UserLogout;
})();
exports.UserLogout = UserLogout;