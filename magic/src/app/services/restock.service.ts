import { Injectable } from '@angular/core';
import { UrlService } from '../shared/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestockService {

  constructor(
    private urlService: UrlService,
    private http: HttpClient
  ) { }

  restock(backpackItemId: number) {
    const url: string = this.urlService.getUrl() + 'restock/' + backpackItemId;
    return this.http.put(url, {withCredentials: true}).pipe(
      map(resp => resp)
    );
  }
}
