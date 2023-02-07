import { Component, OnInit } from '@angular/core';
import { IBrand } from '../models/brand.model';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: IBrand[] = [];

  constructor(private brandService: BrandsService) { }

  ngOnInit(): void {
    this.brandService.getBrands()
      .subscribe(res => this.brands = res.data);
  }

}
