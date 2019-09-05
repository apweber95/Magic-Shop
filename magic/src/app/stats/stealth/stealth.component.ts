import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StealthService } from '../shared/stealth.service';
import { StealthDialogComponent } from '../stealth-dialog/stealth-dialog.component';
import { LoginService } from '../../shared/login.service';
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
    private loginService: LoginService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.human = this.loginService.getHuman();
    this.stealth = this.stealthService.getStealth(this.human.stealth);
    console.log(this.stealth);
  }

  openDialog(): void {
    this.human = this.loginService.getHuman();
    this.stealth = this.stealthService.getStealth(this.human.stealth);
    const dialogRef = this.dialog.open(StealthDialogComponent, {
      width: '500px',
      data: {stealth: this.stealth}
    });
  }

}
