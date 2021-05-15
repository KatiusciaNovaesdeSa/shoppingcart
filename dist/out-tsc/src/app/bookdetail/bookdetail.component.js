import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';
import { HttpServiceService } from '../http-service.service';
var BookdetailComponent = /** @class */ (function () {
    function BookdetailComponent(_Activatedroute, _router, http, cartService) {
        this._Activatedroute = _Activatedroute;
        this._router = _router;
        this.http = http;
        this.cartService = cartService;
    }
    BookdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._Activatedroute.paramMap.subscribe(function (params) {
            console.log(params);
            _this.id = params.get('id');
            _this.getProductsByCategory(_this.id);
        });
    };
    BookdetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BookdetailComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "category": obj
        };
        var url = 'product/getProductsByCategory';
        console.log("URL is " + url);
        this.http.postRequestWithToken(url, request).subscribe(function (data) {
            _this.books = data;
            if (_this.books.length == 0) {
                alert("No Product is found..");
            }
            else {
                console.log(_this.books);
            }
        }, function (error) {
            alert("Error in product Get " + error);
        });
    };
    BookdetailComponent.prototype.addToCart = function (productId, productPrice) {
        var cartObj = {
            "productId": productId,
            "qty": "1",
            "price": productPrice
        };
        this.cartService.addCart(cartObj);
    };
    BookdetailComponent = __decorate([
        Component({
            selector: 'app-bookdetail',
            templateUrl: './bookdetail.component.html',
            styleUrls: ['./bookdetail.component.css']
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            HttpServiceService,
            CartServiceService])
    ], BookdetailComponent);
    return BookdetailComponent;
}());
export { BookdetailComponent };
//# sourceMappingURL=bookdetail.component.js.map