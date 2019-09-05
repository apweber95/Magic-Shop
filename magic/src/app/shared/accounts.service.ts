import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Human } from './human';
import { map } from 'rxjs/operators';
import { UrlService } from 'src/app/shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private appUrl = this.url.getUrl() + 'humans';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private url: UrlService,private http: HttpClient) { }

  public getAccounts(): Observable<Human[]> {
    return this.http.get(this.appUrl, {withCredentials: true} ).pipe(
      map( resp => resp as Human[])
    );
  }
}
