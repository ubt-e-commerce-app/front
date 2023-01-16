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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProductEditComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/edit', component: ProductEditComponent},
      {path: 'products/edit/:id', component: ProductEditComponent},
      {
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: 'users', component: UsersComponent},
      {path: '', redirectTo: 'HomeComponent', pathMatch: 'full'}
      // {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
