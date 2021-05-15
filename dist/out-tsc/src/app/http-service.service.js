import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
var httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
        this.url = "http://localhost:8080/";
    }
    HttpServiceService.prototype.postRequest = function (url, param) {
        return this.http.post(this.url + url, param, httpOptions)
            .pipe(catchError(this.handleError.bind(this)) // then handle the error
        );
    };
    HttpServiceService.prototype.postRequestWithToken = function (url, param) {
        var httpOptionsWithToken = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getLoginToken()
            })
        };
        param['userId'] = "1";
        return this.http.post(this.url + url, param, httpOptionsWithToken)
            .pipe(catchError(this.handleError.bind(this)) // then handle the error
        );
    };
    HttpServiceService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            return throwError("Something went wrong..while connecting with server");
        }
    };
    HttpServiceService.prototype.setLoginData = function (data) {
        localStorage.setItem("login_data", JSON.stringify(data.user_profile_details));
    };
    HttpServiceService.prototype.getLoginDataByKey = function (key) {
        var data = JSON.parse(localStorage.getItem("login_data"));
        if (data.hasOwnProperty(key)) {
            return data[key];
        }
        return null;
    };
    HttpServiceService.prototype.setLoginToken = function (token) {
        if (token != "")
            localStorage.setItem("token", token);
    };
    HttpServiceService.prototype.getLoginToken = function () {
        return localStorage.getItem("token");
    };
    HttpServiceService.prototype.logout = function () {
        localStorage.setItem("token", "");
    };
    HttpServiceService.prototype.isLogin = function () {
        try {
            console.log("login token ", this.getLoginToken());
            if (this.getLoginToken() != "" && this.getLoginToken().length > 10) {
                return true;
            }
        }
        catch (e) {
        }
        return false;
    };
    HttpServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpServiceService);
    return HttpServiceService;
}());
export { HttpServiceService };
//# sourceMappingURL=http-service.service.js.map