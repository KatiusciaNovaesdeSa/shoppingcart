import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { CartServiceService } from '../service/cart-service.service';
import { Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, cartService, http) {
        var _this = this;
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.isOpenLoginDialog = false;
        this.currentDropDownMenu = "";
        this.dialogType = "login";
        this.mainDialogType = "";
        this.isLogin = false;
        this.mobile = "123456789";
        this.password = "test";
        this.cartObj = [];
        this.cart_qty = 0;
        this.cartTotalPrice = 0;
        this.register = { "name": "", "email": "", "mobile": "", "password": "", "re_password": "" };
        this.welcomeUsername = "";
        var request = {};
        this.http.postRequest("api/status", request).subscribe(function (data) {
            console.log("test", data);
        }, function (error) {
            alert("Server connection error " + error);
        });
        if (this.http.isLogin()) {
            this.isLogin = true;
            this.welcomeUsername = this.http.getLoginDataByKey("name");
        }
        if (this.http.isLogin()) {
            this.isLogin = true;
            this.welcomeUsername = this.http.getLoginDataByKey("name");
        }
        this.cartService.cartServiceEvent.subscribe(function (data) {
            _this.cart_qty = _this.cartService.getQty();
        });
    }
    HeaderComponent.prototype.logout = function () {
        this.http.logout();
        this.isLogin = false;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.loginUserCheck = function () {
        var _this = this;
        if (this.mobile == "") {
            alert("Name should not be empty");
            return;
        }
        if (this.password == "") {
            alert("Password should not be empty");
            return;
        }
        var request = {
            "mobile": this.mobile,
            "password": this.password
        };
        this.http.postRequest('api/login/user', request).subscribe(function (data) {
            if (data.hasOwnProperty("token")) {
                _this.http.setLoginToken(data['token']);
                _this.http.setLoginData(data);
                _this.welcomeUsername = _this.http.getLoginDataByKey("name");
                _this.isLogin = true;
                _this.isOpenLoginDialog = false;
            }
        }, function (error) {
            alert("Eror in login " + error);
        });
    };
    HeaderComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.register.name == "") {
            alert("Name should not be empty");
            return;
        }
        if (this.register.email == "") {
            alert("Email should not be empty");
            return;
        }
        if (this.register.password == "") {
            alert("password should not be empty");
            return;
        }
        if (this.register.password != this.register.re_password) {
            alert("password and rePassword should be same");
            return;
        }
        if (this.register.mobile == "") {
            alert("Mobile should not be empty");
            return;
        }
        var request = {
            "user_name": this.register.name,
            "email": this.register.email,
            "password": this.register.password,
            "mobile": this.register.mobile
        };
        this.http.postRequest('api/signup/user', request).subscribe(function (data) {
            alert("Register successfully..");
            console.log(data);
            _this.dialogType = "login";
        }, function (error) {
            alert("Error in login " + error);
        });
    };
    HeaderComponent.prototype.checkout_btn = function () {
        this.router.navigate(['checkout']);
    };
    HeaderComponent.prototype.openCheckoutModel = function () {
        this.cartObj = this.cartService.getCartOBj();
        this.cartTotalPrice = this.cartService.cartTotalPrice;
        this.mainDialogType = "checkout";
    };
    HeaderComponent.prototype.openDialog = function () {
        this.mainDialogType = "login";
    };
    HeaderComponent.prototype.dialogTypeInside = function (type) {
        if (this.dialogType != type)
            this.dialogType = type;
    };
    HeaderComponent.prototype.closeDialog = function () {
        this.mainDialogType = "";
    };
    HeaderComponent.prototype.curentDropDown = function (currentDropdownMenuName) {
        if (this.currentDropDownMenu == currentDropdownMenuName) {
            this.currentDropDownMenu = "";
        }
        else {
            this.currentDropDownMenu = currentDropdownMenuName;
        }
    };
    HeaderComponent.prototype.getProductsByCategory = function (obj) {
        var _this = this;
        var request = {
            "category": obj
        };
        var url = 'product/getProductsByCategory';
        console.log("URL is " + url);
        this.http.postRequestWithToken(url, request).subscribe(function (data) {
            _this.productsList = data;
            if (_this.productsList.length == 0) {
                alert("No Product is found..");
            }
            else {
                console.log(_this.productsList);
            }
        }, function (error) {
            alert("Error in product Get " + error);
        });
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        __metadata("design:paramtypes", [Router, CartServiceService,
            HttpServiceService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map