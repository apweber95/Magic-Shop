import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerceptionService {

  constructor() { }

  getPerception(st: number): number {
    return st + Math.floor((Math.random() * 30) +1);
  }

}
