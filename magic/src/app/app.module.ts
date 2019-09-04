import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ItemService } from './items/shared/item.service';
import { UrlService } from './shared/url.service';
import { ItemShelfComponent } from './items/item-shelf/item-shelf.component';
import { ItemComponent } from './items/item/item.component';
import { RegisterComponent } from './components/register/register.component';
import { BackpackComponent } from './items/backpack/backpack.component';
import { CartComponent } from './items/cart/cart.component';
import { CartService } from './items/shared/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LoginComponent,
    NavBarComponent,
    ItemShelfComponent,
    RegisterComponent,
    BackpackComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    ItemService,
    UrlService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
