import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(router, cartService, http) {
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.cartObj = [];
        this.pay_type = "cash_on_delivery";
        this.delivery_address = "";
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCartDetailsByUser();
        //below function will be triggerd from when removing and qty  is changing..
        this.cartService.cartServiceEvent.subscribe(function (data) {
            _this.cartObj = _this.cartService.getCartOBj();
            _this.cartTotalPrice = _this.cartService.cartTotalPrice;
        });
    };
    CheckoutComponent.prototype.qtyChange = function (qty, cartObj) {
        var _this = this;
        var request = {
            "cartId": cartObj.id,
            "qty": qty,
            "price": (cartObj.price) * (qty)
        };
        this.http.postRequestWithToken("api/addtocart/updateQtyForCart", request).subscribe(function (data) {
            _this.cartService.getCartDetailsByUser(); //for updating in the application..
        }, function (error) {
            alert("Error while fetching the cart Details");
        });
    };
    CheckoutComponent.prototype.getCartDetailsByUser = function () {
        var _this = this;
        this.http.postRequestWithToken("api/addtocart/getCartsByUserId", {}).subscribe(function (data) {
            _this.cartObj = data;
            _this.cartTotalPrice = _this.getTotalAmounOfTheCart();
        }, function (error) {
            alert("Error while fetching the cart Details");
        });
    };
    CheckoutComponent.prototype.getTotalAmounOfTheCart = function () {
        var obj = this.cartObj;
        var totalPrice = 0;
        for (var o in obj) {
            totalPrice = totalPrice + parseFloat(obj[o].price);
        }
        return totalPrice.toFixed(2);
    };
    CheckoutComponent.prototype.removeCartById = function (cartObj) {
        //if(confirm("Are you sure want to delete..?")){
        var id = cartObj.id;
        console.log("About to be deleted" + id);
        this.cartService.removeCart(id);
        //}    
    };
    CheckoutComponent.prototype.checkoutCart = function () {
        var _this = this;
        if (this.delivery_address == "") {
            alert("Delivery address should not be empty");
            return;
        }
        if (this.pay_type == "cash_on_delivery") {
            var request = {
                "total_price": this.cartTotalPrice,
                "pay_type": "COD",
                "deliveryAddress": this.delivery_address
            };
            this.http.postRequestWithToken("api/order/checkout_order", request).subscribe(function (data) {
                alert("checkout process completed.Your Order is processed..");
                _this.cartService.getCartDetailsByUser();
                _this.router.navigate(['']);
            }, function (error) {
                alert("Error while fetching the cart Details");
            });
        }
        else {
            alert("Payment Integration is not yet completed.");
        }
    };
    CheckoutComponent = __decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        }),
        __metadata("design:paramtypes", [Router, CartServiceService, HttpServiceService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map