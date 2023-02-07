import { Component, OnInit } from '@angular/core';
import { IBrand } from '../models/brand.model';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  brand: IBrand = {};

  constructor(private _bradService: BrandsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.brand);
    this._bradService.createBrand(this.brand)
      .subscribe(response => console.log(response));
  }
}
