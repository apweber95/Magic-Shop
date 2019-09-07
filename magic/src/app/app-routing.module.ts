import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import {BackpackComponent} from './items/backpack/backpack.component';
import {CartComponent} from './items/cart/cart.component';
import {ItemShelfComponent } from './items/item-shelf/item-shelf.component';
import { AccountsComponent } from './core/accounts/accounts.component';
import { ItemsCatalogComponent } from './components/items-catalog/items-catalog.component';
import { AdventureBoardComponent } from './components/adventure-board/adventure-board.component';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: BlankComponent
  },
  {
    path: 'register',
    component: BlankComponent
  },
  {
    path: 'home',
    component: ItemShelfComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'backpack/:id',
    component: BackpackComponent
  },
  {
    path: 'itemsCatalog',
    component: ItemsCatalogComponent
  },
  {
    path: 'cart/:id',
    component: CartComponent
  },
  {
    path: 'adventureBoard',
    component: AdventureBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// {
//   path: 'books/edit',
//   component: EditBookComponent
// },
// {
//   path: 'books/edit/:id',
//   component: EditBookComponent
// },
// {
//   path: 'books/:bob',
//   component: BookComponent
// },
// {
//   path: 'books',
//   component: BookShelfComponent
// },
// {
//   path: 'purch/:id',
//   component: PurchaseComponent
// },
// {
//   path: 'purch',
//   component: CartComponent
// },
// {
//   path: 'genres',
//   component: GenreComponent
// },
// {
//   path: 'authors',
//   component: AuthorListComponent
// }
