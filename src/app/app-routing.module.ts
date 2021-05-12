import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {IndexComponent} from './index/index.component';
import {BookdetailComponent} from './bookdetail/bookdetail.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'book/:id', component: BookdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
