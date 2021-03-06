import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Human } from '../beans/human';
import { map } from 'rxjs/operators';
import { UrlService } from '../shared/url.service'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private urlService: UrlService) { }

  public register(newUser: Human) {

    console.log("Registering a New Account");

    //randomize newUser stats
    newUser.gold = Math.floor(Math.random() * 100);
    newUser.roleID = 3;
    newUser.luck = Math.floor(Math.random() * 20);
    newUser.stealth = Math.floor(Math.random() * 20);
    newUser.perception = Math.floor(Math.random() * 20);

    console.log(newUser);

    const body = JSON.stringify(newUser);
    return this.http.post(this.urlService.getUrl() + 'register/',
    body, {headers: this.headers, withCredentials: true} ).pipe (
      map( resp => resp as Human)
    );
  }

}
