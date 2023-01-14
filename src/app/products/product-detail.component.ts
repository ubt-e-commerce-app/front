import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductsService } from './products.service';

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
    this.productService.getProducts().subscribe();
  }

  onBack(){
    this.router.navigate(['/products']);
  }
}
