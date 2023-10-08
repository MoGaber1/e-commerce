import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandsComponent } from './brands/brands.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule , HttpInterceptor } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPricePipe } from './pipes/custom-price.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddheaderInterceptor } from './addheader.interceptor copy';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CustomPricePipe,
    SearchPipe,
    CheckoutComponent,
    CategoriesSliderComponent,
    ProductsComponent,
    ForgotpasswordComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:AddheaderInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
