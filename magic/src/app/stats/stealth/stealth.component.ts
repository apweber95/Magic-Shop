import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StealthService } from '../shared/stealth.service';
import { PerceptionService } from '../shared/perception.service';
import { StealthDialogComponent } from '../stealth-dialog/stealth-dialog.component';
import { LoginService } from '../../shared/login.service';
import { Human } from '../../shared/human';

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
    private stealthService: StealthService,
    private loginService: LoginService,
    private perceptionService: PerceptionService,
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    this.human = this.loginService.getHuman();
    this.stealth = this.stealthService.getStealth(this.human.stealth);
    let dialogRef = this.dialog.open(StealthDialogComponent, {
      width: '500px',
      data: {stealth: this.stealth}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.perception = this.perceptionService.getPerception(10);
        if(this.stealth > this.perception) {
          console.log("You have successfully stolen");
          this.res = 1;
        } else {
          console.log("STOP THIEF");
	  this.res = 0;
	}
      } else {
	dialogRef = null;
      }
    });
  }

}
