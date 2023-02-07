import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductEditComponent } from './products/product-edit.component';
import { UsersComponent } from './users/users.component';
import { CustomersComponent } from './customers/customers.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandEditComponent } from './brands/brand-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    HomeComponent,
    CustomersComponent,
    UsersComponent,
    PageNotFoundComponent,
    ProductEditComponent,
    BrandsComponent,
    BrandEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/edit', component: ProductEditComponent },
      { path: 'products/edit/:id', component: ProductEditComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'brands', component: BrandsComponent },
      { path: 'brands/edit', component: BrandEditComponent },
      { path: 'brands/edit/:id', component: BrandEditComponent },
      { path: 'users', component: UsersComponent },
      { path: 'customers', component: CustomersComponent },
      { path: '', redirectTo: 'HomeComponent', pathMatch: 'full' }
      // {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
