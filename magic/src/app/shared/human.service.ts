import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from './human'
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url = this.urlService.getUrl();

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  public getHumanByID(id: number): Observable<Human> {

    return this.http.get(this.url + 'humans/' +id, {withCredentials: true}).pipe(map(resp=> resp as Human));
  }

  public createHuman(human: Human):  Observable<Human> {
    const body = JSON.stringify(human);
    return this.http.post(this.url+"humans/", body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }

  public updateHuman(human: Human): Observable<Human> {
    const body = JSON.stringify(human);
    return this.http.put(this.url+'humans/' + human.userID, body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }
}
