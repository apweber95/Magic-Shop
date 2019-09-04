import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import {BackpackComponent} from './items/backpack/backpack.component';
import {CartComponent} from './items/cart/cart.component';
import {ItemShelfComponent } from './items/item-shelf/item-shelf.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'backpack',
    component: ItemShelfComponent
  },
  {
    path: 'backpack/:id',
    component: BackpackComponent
  },
  
  {
    path: 'cart/:id',
    component: CartComponent
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
