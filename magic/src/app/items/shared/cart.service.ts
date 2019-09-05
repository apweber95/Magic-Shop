import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './cart';
import { map } from 'rxjs/operators';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private appUrl = this.urlService.getUrl();

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  // addCartItem(cartItem: CartItem): Observable<CartItem> {
    //TODO
  // }

  returnCartByUserID(id: number): Observable<CartItem[]> {
    const url: string = this.appUrl + '/cart/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as CartItem[])
    );
  }
}
