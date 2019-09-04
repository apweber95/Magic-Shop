import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackpackItem } from './backpack';
import { map } from 'rxjs/operators';
import { UrlService } from '../../shared/url.service'

@Injectable({
  providedIn: 'root'
})
export class BackpackService {

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  getBackpackItemsByOwnerID(id: number): Observable<BackpackItem[]> {
    const url: string = this.urlService.getUrl() + 'backpack/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as BackpackItem[])
    );
  }
}
