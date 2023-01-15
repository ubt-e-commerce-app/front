import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  
  // Todos
  // Create product in service
  // Update product in service
  // Form
  // On submit, if id, call updatte : crate

}
