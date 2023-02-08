import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List'
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  private _listFilter = '';

  constructor(private productService: ProductsService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    const filteredProducts = this.products.filter((product: IProduct) => {
      return product.name.toLocaleLowerCase().includes(filterBy);
    })

    return filteredProducts;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts()
      .subscribe(response => {
        this.products = response.data;
        this.filteredProducts = this.products;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
