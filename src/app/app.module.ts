import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyThreejsComponent } from './my-threejs/my-threejs.component';
import { HomeComponent } from './guest/components/home/home.component';
import { AboutComponent } from './guest/components/about/about.component';
import { ContactComponent } from './guest/components/contact/contact.component';
import { FaqsComponent } from './guest/components/faqs/faqs.component';
import { ShopComponent } from './guest/components/shop/shop.component';
import { LoginComponent } from './user/components/login/login.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { CartComponent } from './user/components/cart/cart.component';
import { HeaderComponent } from './guest/shared/component/header/header.component';
import { BlogComponent } from './guest/components/blog/blog.component';
import { FilterPipe } from './guest/shared/filter.pipe';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './guest/shared/component/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MyThreejsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqsComponent,
    ShopComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    HeaderComponent,
    BlogComponent,
    FilterPipe,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
