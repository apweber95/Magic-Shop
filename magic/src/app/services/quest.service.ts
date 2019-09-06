import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from '../beans/human';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor() { }
}
