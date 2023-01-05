import { Component, OnInit, Pipe } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List'
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'cart';
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Hp ProBook",
      "productCode": "Probook-770",
      "releaseDate": "March 18, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 700,
      "starRating": 4.2,
      "imgUrl": "assets/images/hp.jpg"
    },
    {
      "productId": 2,
      "productName": "Dell XPS",
      "productCode": "Xps-13",
      "releaseDate": "April 22, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 1300,
      "starRating": 4.6,
      "imgUrl": "assets/images/dell.jpg"
    },
    {
      "productId": 3,
      "productName": "Apple MacbookPro",
      "productCode": "MacbookPro-14",
      "releaseDate": "September 24, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 1300,
      "starRating": 4.6,
      "imgUrl": "assets/images/apple.jpg"
    },
    {
      "productId": 2,
      "productName": "Dell XPS",
      "productCode": "Xps-13",
      "releaseDate": "April 22, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 1300,
      "starRating": 4.6,
      "imgUrl": "assets/images/dell.jpg"
    },
  ]

  toggleImage():void {
    this.showImage = !this.showImage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
