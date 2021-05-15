import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AboutComponent } from './about/about.component';
var routes = [
    { path: '', component: IndexComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'book/:id', component: BookdetailComponent },
    { path: 'about', component: AboutComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map