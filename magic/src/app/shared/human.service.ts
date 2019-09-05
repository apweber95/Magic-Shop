import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from './human'

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  url = 'http://localhost:8080/MagicShop';

  constructor(private http: HttpClient) { }

  public getHumanByID(id: number): Observable<Human> {

    return this.http.get(this.url + '/humans/' +id, {withCredentials: true}).pipe(map(resp=> resp as Human));
  }

  public createHuman(human: Human):  Observable<Human> {
    const body = JSON.stringify(human);
    return this.http.post(this.url+"/humans/", body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }

  public updateHuman(human: Human): Observable<Human> {
    const body = JSON.stringify(human);
    return this.http.put(this.url+'/humans/' + human.userID, body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }
}
