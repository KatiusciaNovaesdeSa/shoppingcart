import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {HttpServiceService} from '../http-service.service';
import { Book} from '../book';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  id;
  sub;
  books:Book[];
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private http:HttpServiceService){
   }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
       this.id = params.get('id'); 
       this.getProductsByCategory(this.id);   
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  getProductsByCategory(obj){
    let request ={
      "category":obj
    }
    var url = 'product/getProductsByCategory';
    console.log("URL is " + url);
   this.http.postRequestWithToken(url,request).subscribe(data=>{
      this.books = data
      if(this.books.length == 0){
        alert("No Product is found..");
      }
      else {
        console.log(this.books);
      }
   },error=>{
     alert("Error in product Get "+error);
   })
  }

}
