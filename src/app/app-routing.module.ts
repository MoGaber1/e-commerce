import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  // {path:'home' ,component:HomeComponent},
  // {path:'products',component:ProductsComponent},
  // {path:'categories',component:CategoriesComponent},
  // {path:'cart',component:CartComponent},
  // {path:'checkout',component:CheckoutComponent},
  // {path:'productDetails/:id',component:ProductDetailsComponent},
  // {path:'brands',component:BrandsComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},

  // {path:'**',component:NotfoundComponent}


  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent},
  {path:'products',canActivate:[authGuard],component:ProductsComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'checkout',canActivate:[authGuard],component:CheckoutComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword',component:ForgotpasswordComponent},

  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
