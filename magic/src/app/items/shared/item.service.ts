import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './item';
import { UrlService } from 'src/app/shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private appUrl = this.url.getUrl() + 'shop';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private url: UrlService, private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get(this.appUrl, {withCredentials: true} ).pipe(
      map( resp => resp as Item[])
    );
  }

  getItem(id: number): Observable<Item> {
    const url: string = this.appUrl + '/' + id;
    return this.http.get(url, {withCredentials: true} ).pipe(
      map(resp => resp as Item)
    );
  }

  getItemByRarity(rarity: string): Observable<Item[]> {
    const url: string = this.appUrl + '/' + rarity;
    return this.http.get(url, {withCredentials: true} ).pipe(
      map(resp => resp as Item[])
    );
  }
}
