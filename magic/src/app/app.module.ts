import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { ItemService } from './items/shared/item.service';
import { UrlService } from './shared/url.service';
import { RegisterService } from './services/register.service';
import { ItemShelfComponent } from './items/item-shelf/item-shelf.component';
import { ItemComponent } from './items/item/item.component';
import { RegisterComponent } from './components/register/register.component';
import { BackpackComponent } from './items/backpack/backpack.component';
import { CartComponent } from './items/cart/cart.component';
import { CartService } from './items/shared/cart.service';
import { BackpackService } from './items/shared/backpack.service';
import { StealthComponent } from './stats/stealth/stealth.component';
import { StealthDialogComponent } from './stats/stealth-dialog/stealth-dialog.component';
import { PerceptionComponent } from './stats/perception/perception.component';
import { StealthService } from './stats/shared/stealth.service';
import { AccountsComponent } from './core/accounts/accounts.component';
import { AccountsService } from './shared/accounts.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ItemsCatalogComponent } from './components/items-catalog/items-catalog.component';
import { PerceptionService } from './stats/shared/perception.service';
import { AdventureBoardComponent } from './components/adventure-board/adventure-board.component';
import { BlankComponent } from './components/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    LoginComponent,
    NavBarComponent,
    ItemShelfComponent,
    RegisterComponent,
    BackpackComponent,
    CartComponent,
    StealthComponent,
    StealthDialogComponent,
    PerceptionComponent,
    AccountsComponent,
    SnackbarComponent,
    ItemsCatalogComponent,
    AdventureBoardComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    StealthComponent,
    StealthDialogComponent
  ],
  providers: [
    ItemService,
    UrlService,
    CartService,
    RegisterService,
    BackpackService,
    StealthService,
    StealthComponent,
    PerceptionService,
    StealthDialogComponent,
    AccountsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
