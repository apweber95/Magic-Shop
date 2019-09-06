import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from '../beans/human';
import { UrlService } from '../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private url: string = this.urlService.getUrl();

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  public quest(human: Human, difficulty: number): Observable<Human>  {
    const body = JSON.stringify(human);
    return this.http.post(this.url+'quest/' + difficulty, body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }
}
