import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private appUrl = 'http://localhost:8080/MagicShop';

  constructor(
    private http: HttpClient
  ) { }

  getCartByUserID(id: number): Observable<CartItem[]> {
    const url: string = this.appUrl + '/cart/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as CartItem[])
    );
  }
}
