import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../beans/item';
import { UrlService } from 'src/app/shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class ItemCatalogService {
  private appUrl = this.url.getUrl() + 'shop';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private url: UrlService, private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get(this.appUrl, {withCredentials: true} ).pipe(
      map( resp => resp as Item[])
    );
  }

  addItemToCatalog(itemId: number): Observable<Item> {
    const url: string = this.appUrl + '/' + itemId;
    return this.http.post(url, {withCredentials: true} ).pipe(
      map(resp => resp as Item)
    );
  }

  removeItemFromCatalog(itemId: number): Observable<Item> {
    const url: string = this.appUrl + '/' + itemId;
    return this.http.delete(url, {withCredentials: true} ).pipe(
      map(resp => resp as Item)
    );
  }
}
