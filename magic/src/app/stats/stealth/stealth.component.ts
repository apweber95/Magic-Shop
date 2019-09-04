import { Component, OnInit } from '@angular/core';
import { StealthService } from '../shared/stealth.service';
import { HumanService } from '../../shared/human.service';
import { Human } from '../../shared/human';

@Component({
  selector: 'app-stealth',
  templateUrl: './stealth.component.html',
  styleUrls: ['./stealth.component.css']
})
export class StealthComponent implements OnInit {
  stealth: number;
  human: Human;
  constructor(
    private stealthService: StealthService,
    private humanService: HumanService
  ) { }

  ngOnInit() { }

  getHum(): void {
    this.human = this.humanService.getHuman();
  }

  rollStats() {
    if(this.human != null) {
      this.stealth = this.stealthService.getStealth(this.human.stealth);
    } else {
      console.log("nothing");
    }
  }

}
