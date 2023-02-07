import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand, ICreateBrandResponse, IGetBrandResponse, IGetBrandsResponse } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private baseUrl = 'https://localhost:7221/api/Brand'

  constructor(private http: HttpClient) { }

  getBrands(): Observable<IGetBrandsResponse> {
    return this.http.get<IGetBrandsResponse>(this.baseUrl + '/GetBrands');
  }

  getBrand(id: number) {
    return this.http.get<IGetBrandResponse>(`${this.baseUrl}/${id}`)
  }

  createBrand(brand: IBrand) {
    return this.http.post<ICreateBrandResponse>(`${this.baseUrl}/Insert`, brand);
  }

  updateBrand(brand: IBrand) {
    return this.http.put<IBrand>(`${this.baseUrl}/${brand.id}`, brand);
  }

  deleteBrand(id: number) {
    return this.http.delete
  }
}
