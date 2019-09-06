import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart';
import { map } from 'rxjs/operators';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  addCartItem(cartItem: CartItem): Observable<CartItem> {
    const body = JSON.stringify(cartItem);
    const url: string = this.appUrl + '/cart';
    return this.http.post(url, body, {headers: this.headers, withCredentials: true}).pipe(
      map(resp => resp as CartItem)
    );
  }

  returnCartByUserID(id: number): Observable<CartItem[]> {
    const url: string = this.appUrl + '/cart/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as CartItem[])
    );
  }

  deleteCartItem(cartItem: CartItem): Observable<void>{
    const url: string = this.appUrl + '/cart/' + cartItem.cartItemID;
    return this.http.delete(url, {withCredentials: true}).pipe(
      map(resp => null)
    );
    //TODO: add the items back into store front
  }

  updateCartItem(cartItem: CartItem): Observable<CartItem>{
    const body = JSON.stringify(cartItem);
    return this.http.put(this.appUrl+"cart/"+ cartItem.cartItemID, body, {headers: this.headers, withCredentials: true}).pipe(
      map(resp => resp as CartItem));
  }
}
