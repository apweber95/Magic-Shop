import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './items/item/item.component';
import { ItemService } from './items/shared/item.service';
import { UrlService } from './shared/url.service';
import { ItemShelfComponent } from './items/item-shelf/item-shelf.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemShelfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ItemService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
