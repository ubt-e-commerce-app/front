import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = '/assets/api'
  private productUrl = '/assets/api/products.json';


  constructor(private http: HttpClient) { }

  // get all => /api/products
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl + '/products.json').pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // get by id => /api/products/{id}
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.baseUrl + '/' + id).pipe(
      tap(data => console.log('Get by id', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}
