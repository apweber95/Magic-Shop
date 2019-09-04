import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private static readonly MON_URL = 'http://localhost:8080/MagicShop/';
  constructor() { }
  public getUrl(): string {
    return UrlService.MON_URL;
  }
}
