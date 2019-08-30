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
  url = 'http://localhost:8080/MagicShop/humans/';

  constructor(private http: HttpClient) { }

  public getHuman(id: number): Observable<Human> {
    return this.http.get(this.url + id, {withCredentials: true}).pipe(map(resp => resp as Human));
  }

  public login(human: Human){
    if(human.username && human.password){
      const body = JSON.stringify(human);
      return this.http.post(this.url, body, {headers: this.headers, withCredentials: true}).pipe(map( resp => resp as Human));
    }
    else{
      return this.http.get(this.url, {withCredentials: true}).pipe(map(resp => resp as Human))
    }
  }

  public createHuman(human: Human){
    const body = JSON.stringify(human);
    return this.http.post(this.url, body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }

  public updateHuman(human: Human){
    const body = JSON.stringify(human);
    return this.http.put(this.url+ human.id, body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }

}

// export class RangerService {
//   private headers = new HttpHeaders({'Content-Type': 'application/json'});
//   constructor(private http: HttpClient) { }

//   public getRanger(id: number): Observable<Ranger> {
//     const url = 'http://localhost:8080/CheeseRangers/rangers/' + id;
//     return this.http.get(url, {withCredentials: true}).pipe(
//       map( resp => resp as Ranger )
//     );
//   }
//   public addRanger(ranger: Ranger) {
//     const body = JSON.stringify(ranger);
//     return this.http.post('http://localhost:8080/CheeseRangers/rangers/',
//       body, {headers: this.headers, withCredentials: true} ).pipe(
//       map( resp => resp as Ranger )
//     );
//   }
//   public updateRanger(ranger: Ranger): Observable<Ranger> {
//     const url = 'http://localhost:8080/CheeseRangers/rangers/' + ranger.id;
//     const body = JSON.stringify(ranger);
//     return this.http.put(url, body, {headers: this.headers, withCredentials: true} ).pipe(
//       map( resp => resp as Ranger )
//     );
//   }
//   public deleteRanger(ranger: Ranger): Observable<void> {
//     const url = 'http://localhost:8080/CheeseRangers/rangers/' + ranger.id;
//     const body = JSON.stringify(ranger);
//     return this.http.delete(url, {headers: this.headers, withCredentials: true} ).pipe(
//       map(resp => null)
//     );
//   }
// }