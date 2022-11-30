import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './guest/components/about/about.component';
import { BlogComponent } from './guest/components/blog/blog.component';
import { ContactComponent } from './guest/components/contact/contact.component';
import { FaqsComponent } from './guest/components/faqs/faqs.component';
import { HomeComponent } from './guest/components/home/home.component';
import { ShopComponent } from './guest/components/shop/shop.component';
import { MyThreejsComponent } from './my-threejs/my-threejs.component';
import { LoginComponent } from './user/components/login/login.component';
import { SignupComponent } from './user/components/signup/signup.component';
const routes: Routes = [
  { path: 'threejs', component: MyThreejsComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
