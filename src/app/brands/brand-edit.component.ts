import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from '../models/brand.model';
import { BrandsService } from '../services/brands.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  brand: IBrand = {};
  brandId?: number;

  constructor(
    private _bradService: BrandsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.brandId = Number(this.route.snapshot.paramMap.get('id'));
    this.getBrand();
  }

  getBrand(): void {
    if (this.brandId) {
      this._bradService.getBrand(this.brandId)
        .subscribe(response => this.brand = response.data);
    }
  }

  onSubmit(): void {
    console.log(this.brand);
    if (this.brandId) {
      console.log('update');
      this._bradService.updateBrand(this.brand)
        .subscribe(res => {
          this.router.navigate(['/brands']);
        })
    }
    else {
      this._bradService.createBrand(this.brand)
        .subscribe(response => {
          this.router.navigate(['/brands']);
        });

    }
  }
}
