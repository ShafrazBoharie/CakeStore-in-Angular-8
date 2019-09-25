import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { AboutComponent } from './body/about/about.component';
import { ContactComponent } from './body/contact/contact.component';
import { ProductListComponent } from './body/Product/product-list/product-list.component';



export const appRoutes:Routes=[
    { path:'home', component : HomeComponent},
    { path:'about', component : AboutComponent},
    {path:'contact', component:ContactComponent},
    {path: 'productList', component:ProductListComponent},
    { path:'', redirectTo:'/home', pathMatch:'full'}

]