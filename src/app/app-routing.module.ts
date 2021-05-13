import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout/checkout.component';
import {IndexComponent} from './index/index.component';
import {BookdetailComponent} from './bookdetail/bookdetail.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'book/:id', component: BookdetailComponent },
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
