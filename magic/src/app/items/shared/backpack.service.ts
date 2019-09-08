import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackpackItem } from './backpack';
import { map } from 'rxjs/operators';
import { UrlService } from '../../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class BackpackService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  getBackpackItemsByOwnerID(id: number): Observable<BackpackItem[]> {
    const url: string = this.appUrl + 'backpack/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as BackpackItem[]));
  }

  updateBackPack(backpack: BackpackItem): Observable<BackpackItem>{
    const body = JSON.stringify(backpack);
    return this.http.put(this.appUrl+"backpack/"+ backpack.backpackID, body, {headers: this.headers, withCredentials: true}).pipe(
      map(resp => resp as BackpackItem));  
  }

  addItemToBackpack(backpack: BackpackItem): Observable<BackpackItem>{
    const body = JSON.stringify(backpack);
    return this.http.post(this.appUrl +'backpack', body, {headers: this.headers, withCredentials: true}).pipe(map(resp=> resp as BackpackItem));
  }

}
