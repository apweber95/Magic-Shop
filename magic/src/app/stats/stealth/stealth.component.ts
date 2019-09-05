import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private humanService: HumanService,
    public dialog: MatDialog,
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

  openDialog(): void {
    const dialogRef = this.dialog.open(StealthDialog, {
      width: '250px',
      data: {stealth: this.stealth}
    });
  }

}

@Component({
  selector: 'stealth-dialog',
  templateUrl: './stealth.component.html'
})
export class StealthDialog {

  constructor(
    public dialogRef: MatDialogRef<StealthDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNeinClick(): void {
    this.dialogRef.close();
  }

}
