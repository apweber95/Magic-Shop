import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackpackItem } from './backpack';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackpackService {
  private appUrl = 'http://localhost:8080/MagicShop';

  constructor(
    private http: HttpClient
  ) { }

  getBackpackItemsByOwnerID(id: number): Observable<BackpackItem[]> {
    const url: string = this.appUrl + '/backpack/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as BackpackItem[])
    );
  }
}
