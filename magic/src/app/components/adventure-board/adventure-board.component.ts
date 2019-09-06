import { Component, OnInit } from '@angular/core';
import { SnackbarService} from '../../services/snackbar.service';
import { LoginService } from '../../shared/login.service';
import { Human } from '../../beans/human';
import { QuestService } from '../../services/quest.service';
import { UrlService } from '../../shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-adventure-board',
  templateUrl: './adventure-board.component.html',
  styleUrls: ['./adventure-board.component.css']
})
export class AdventureBoardComponent implements OnInit {

  url = this.urlService.getUrl();
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private snackbarService: SnackbarService,
    private loginService: LoginService,
    private questService: QuestService, 
    private urlService: UrlService,
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  quest(rate: number): Observable<Human> {
    let human: Human = this.loginService.getHuman();
    const body = JSON.stringify(human);
    return this.http.post(this.url+"humans/", body, {headers: this.headers, withCredentials: true}).pipe(map(resp => resp as Human));
  }

}
