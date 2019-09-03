import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from 'src/app/shared/url.service';
import { Observable } from 'rxjs';
import { BackpackItem } from './backpack';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackpackService {
  private appUrl = this.urlService.getUrl() + 'backpack';

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  getBackpackItemsByOwnerID(id: number): Observable<BackpackItem[]> {
    const url: string = this.appUrl + '/' + id;
    return this.http.get(url, {withCredentials: true}).pipe(
      map(resp => resp as BackpackItem[])
    );
  }
}
