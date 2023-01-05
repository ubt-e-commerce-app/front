import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Product List'
  products: any[] = [
    {
      "productId": 2,
      "productName": "Hp-ProBook",
      "productCode": "Hp-ProBook-1214",
      "releaseDate": "March 18, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 700.00,
      "starRating": 4.2,
      "imgUrl": "assets/images/hp.jpg"
    },
    {
      "productId": 2,
      "productName": "Dell XPS",
      "productCode": "Dell-Xps-13",
      "releaseDate": "April 22, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 1300.00,
      "starRating": 4.6,
      "imgUrl": "assets/images/dell.jpg"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
