import { Injectable } from '@angular/core';
import { HumanService } from '../../shared/human.service';
import { Human } from '../../shared/human';

@Injectable({
  providedIn: 'root'
})
export class StealthService {

  constructor() { }

  getStealth(st: number): number {
    return st + Math.floor((Math.random() * 20)+1);
  }
}
