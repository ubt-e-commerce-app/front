import { Component, OnInit } from '@angular/core';
import { IBrand } from '../models/brand.model';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  pageTitle = 'Brands Page';
  brands: IBrand[] = [];

  constructor(private brandService: BrandsService) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(res => this.brands = res.data);
  }

  edit() {
    console.log('Clicked edit');
  }

  delete(brandId: number) {
    let confirmed = confirm("Confirm to delete!")
    if (confirmed) {
      this.brandService.deleteBrand(brandId)
        .subscribe(res => {
          // this.brands = this.brands.filter(x => x.id !== brandId);
          this.brandService.getBrands()
            .subscribe(res => this.brands = res.data);
        });
    }
  }

}
