import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { HeaderComponent } from './components/home/header/header.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { FeaturedProductsComponent } from './components/home/featured-products/featured-products.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HomeComponent } from './pages/home/home.component';
import { BreadcrumbHeroComponent } from './components/shop/breadcrumb-hero/breadcrumb-hero.component';
import { ShopDetailComponent } from './pages/shop/shop-detail/shop-detail.component';
import { ShopingCartComponent } from './pages/shop/shoping-cart/shoping-cart.component';


import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/home/slider/slider.component';
import { LikesComponent } from './components/likes/likes.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HeroComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    FooterComponent,
    ShopComponent,
    HomeComponent,
    BreadcrumbHeroComponent,
    ShopDetailComponent,
    ShopingCartComponent,
    SliderComponent,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
