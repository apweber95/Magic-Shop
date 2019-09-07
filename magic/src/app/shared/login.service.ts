import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from './human'
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  url = this.urlService.getUrl();
  human: Human;

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public login(human: Human){
    if(human.username && human.password){
      const body = JSON.stringify(human);
      return this.http.post(this.url + "login/", body, {headers: this.headers, withCredentials: true}).pipe(
        map( resp => {
          const user: Human = resp as Human;
          if (user) {
            this.human = user;
          }
          return user;
        })
      );
    }
    else{
      return this.http.get(this.url+"login/", {withCredentials: true}).pipe(map(resp => resp as Human))
    }
  }

  logout() {
    this.human = null;
  }

  getHuman(): Human{
    return this.human;
  }
}
