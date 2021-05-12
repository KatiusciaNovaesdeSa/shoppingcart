export class Book {
    constructor(id:number, author: string, categoryId: string,
           name:string, price: string) {
        this.id=id;
        this.author=author;
        this.categoryId=categoryId;
        this.name= name;
        this.price = price;
    }
 
    id:number ;
    author: string ;
    categoryId: string;
    name: string;
    price:string;
}
/*
author: "Rebecca Zamolo"

categoryId: "1"

id: 1

name: "The Game Master"

price: "10.99"
*/