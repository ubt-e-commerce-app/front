import { Component, OnInit, Pipe } from '@angular/core';
import { ProductsService } from '../products-service';
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
  // listFilter = 'cart';

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
    this.productService = productService;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy))
  }
  

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void { 
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    // this.listFilter = 'cart'
  }

  onRatingClicked(message: string):void {
    this.pageTitle = 'Product List: ' + message;
  }
}
