import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { HttpServiceService } from '../http-service.service';
var IndexComponent = /** @class */ (function () {
    function IndexComponent(cartService, http) {
        this.cartService = cartService;
        this.http = http;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.postRequestWithToken("api/product/getAllCategory", {}).subscribe(function (data) {
            _this.categoryList = data;
            if (_this.categoryList.length > 1)
                _this.getProductsByCategory(data[0]);
        }, function (error) {
            //  alert("Server connection error "+error)
        });
    };
    IndexComponent.prototype.addCart = function (cartProductObj) {
        var cartObj = {
            "productId": cartProductObj.id,
            "qty": "1",
            "price": cartProductObj.price
        };
        this.cartService.addCart(cartObj);
    };
    IndexComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "cat_id": obj.id
        };
        this.http.postRequestWithToken('product/getProductsByCategory/' + obj.id, request).subscribe(function (data) {
            _this.productsList = data;
            if (_this.productsList.length == 0) {
                alert("No Product is found..");
            }
        }, function (error) {
            alert("Error in product Get " + error);
        });
    };
    IndexComponent = __decorate([
        Component({
            selector: 'app-index',
            templateUrl: './index.component.html',
            styleUrls: ['./index.component.css']
        }),
        __metadata("design:paramtypes", [CartServiceService, HttpServiceService])
    ], IndexComponent);
    return IndexComponent;
}());
export { IndexComponent };
//# sourceMappingURL=index.component.js.map