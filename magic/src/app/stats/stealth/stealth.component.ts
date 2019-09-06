import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StealthService } from '../shared/stealth.service';
import { PerceptionService } from '../shared/perception.service';
import { StealthDialogComponent } from '../stealth-dialog/stealth-dialog.component';
import { LoginService } from '../../shared/login.service';
import { Human } from '../../shared/human';
import { HumanService } from '../../shared/human.service';

@Component({
  selector: 'app-stealth',
  templateUrl: './stealth.component.html',
  styleUrls: ['./stealth.component.css']
})
export class StealthComponent {
  stealth: number;
  res: number;
  perception: number;
  human: Human;
  constructor(
    private humanService: HumanService,
    private stealthService: StealthService,
    private loginService: LoginService,
    private perceptionService: PerceptionService,
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    this.human = this.loginService.getHuman();
    this.stealth = this.stealthService.getStealth(this.human.stealth);

    let stealthP = Math.round(this.stealth/40*100)
    let dialogRef = this.dialog.open(StealthDialogComponent, {
      width: '500px',
      data: {stealth: stealthP}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.perception = this.perceptionService.getPerception(10);
        if(this.stealth > this.perception) {
          console.log("You have successfully stolen");
          
        } else {
	  console.log("STOP THIEF");
	  this.human.roleID = 4;
	  this.humanService.updateHuman(this.human);
	}
      } else {
	dialogRef = null;
      }
    });
  }

}
