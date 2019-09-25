import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavComponent } from './header/nav/nav.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { ContentService } from './Services/content.service';
import { ProductListComponent } from './body/Product/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
