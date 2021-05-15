import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'book-store';
        this.http.postRequest("api/status", {}).subscribe(function (data) {
            console.log("test", data);
        }, function (error) {
            alert("Server connection error " + error);
        });
    }
    AppComponent.prototype.openCheckoutModel = function () {
        alert("open checkout model");
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [HttpServiceService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map