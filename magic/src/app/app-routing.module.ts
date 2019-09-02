import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './core/login/login.component'



const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    component: LoginComponent
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
