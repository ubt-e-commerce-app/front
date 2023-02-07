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

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter: ', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  constructor(private productService: ProductsService) {
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.name.toLocaleLowerCase().includes(filterBy))
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // this.sub = this.productService.getProducts().subscribe({
    //   next: response => {
    //     this.products = response.data,
    //       this.filteredProducts = this.products;
    //   },
    //   error: err => this.errorMessage = err
    // });
    // this.listFilter = 'cart'

    this.sub = this.productService.getProducts()
      .subscribe(response => this.products = response.data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
