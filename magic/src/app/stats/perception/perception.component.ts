import { Component, OnInit } from '@angular/core';
import { PerceptionService } from '../shared/perception.service';

@Component({
  selector: 'app-perception',
  templateUrl: './perception.component.html',
  styleUrls: ['./perception.component.css']
})
export class PerceptionComponent implements OnInit {
  perception: number;
  constructor(private perceptionService: PerceptionService) { }

  ngOnInit() {
    
  }

  rollPerception(): void {
    this.perception = this.perceptionService.getPerception(10);
  }

}
