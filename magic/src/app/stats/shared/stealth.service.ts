import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StealthService {

  constructor() { }

  getStealth(st: number): number {
    return st + Math.floor((Math.random() * 20) +1);
  }
}
