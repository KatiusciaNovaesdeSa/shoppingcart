import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HttpServiceService } from '../http-service.service';
var CartServiceService = /** @class */ (function () {
    function CartServiceService(http) {
        this.http = http;
        this.cartServiceEvent = new BehaviorSubject({});
        this.cartQty = 0;
        this.cartObj = [];
        this.getCartDetailsByUser();
    }
    CartServiceService.prototype.getCartDetailsByUser = function () {
        var _this = this;
        this.http.postRequestWithToken("addtocart/getCartsByUserId", {}).subscribe(function (data) {
            //alert("Error while fetching the cart Details");
            _this.cartObj = data;
            _this.cartQty = data.length;
            _this.cartTotalPrice = _this.getTotalAmounOfTheCart();
            console.log(_this.cartObj);
            _this.cartServiceEvent.next({ "status": "completed" }); //emitter
        }, function (error) {
            // alert("Error while fetching the cart Details");
        });
    };
    CartServiceService.prototype.addCart = function (obj) {
        var _this = this;
        //this.cartServiceEvent.next({"status":"completed"})//emitter
        var userId = this.http.getLoginDataByKey("user_id");
        var request = {
            "userId": userId,
            "productId": obj.productId,
            "qty": obj.qty,
            "price": obj.price
        };
        this.http.postRequestWithToken("addtocart/addProduct", request).subscribe(function (data) {
            _this.getCartDetailsByUser();
        }, function (error) {
            //if the products is already in cart
            //  alert("Error in AddCart API "+error.message);
        });
    };
    CartServiceService.prototype.getCartOBj = function () {
        return this.cartObj;
    };
    CartServiceService.prototype.getTotalAmounOfTheCart = function () {
        var obj = this.cartObj;
        var totalPrice = 0;
        for (var o in obj) {
            totalPrice = totalPrice + parseFloat(obj[o].price);
        }
        return totalPrice.toFixed(2);
    };
    CartServiceService.prototype.getQty = function () {
        return this.cartQty;
    };
    CartServiceService.prototype.removeCart = function (cartId) {
        var _this = this;
        /*
          var request = {
              "productId":"dummy_val",
              "cartId":cartId,
          }
          */
        var userId = this.http.getLoginDataByKey("user_id");
        var request = {
            "userId": userId,
            "cartId": cartId
        };
        this.http.postRequestWithToken("addtocart/removeProductFromCart", request).subscribe(function (data) {
            _this.getCartDetailsByUser();
        }, function (error) {
            //   alert("Error while fetching the cart Details");
        });
    };
    CartServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpServiceService])
    ], CartServiceService);
    return CartServiceService;
}());
export { CartServiceService };
//# sourceMappingURL=cart-service.service.js.map