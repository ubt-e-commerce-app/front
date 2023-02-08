import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle = 'Product Detail';
  product: IProduct | undefined;
  // product: IProduct[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    // this.productService.getProductById(id).subscribe(product => {
    //   this.product = product;
    // });
    this.product = {
      "id": 1,
      "brandName": 'hp',
      "brandShortName": '',
      "name": "Hp ProBook",
      "code": "Probook-770",
      "releaseDate": "March 18, 2022",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, fuga. Itaque, provident.",
      "price": 700,
      "starRating": 4.2,
      "imgUrl": ""
    };
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
