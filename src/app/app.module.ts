import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeInventoryComponent } from './home-inventory/home-inventory.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { CustomersComponent } from './customers/customers.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeInventoryComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'invoices', component: InvoiceListComponent },
      { path: 'customers', component: CustomersComponent }
    ] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeInventoryComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsComponent,
    InvoiceListComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
