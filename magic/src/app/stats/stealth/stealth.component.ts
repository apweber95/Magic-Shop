import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StealthService } from '../shared/stealth.service';
import { PerceptionService } from '../shared/perception.service';
import { StealthDialogComponent } from '../stealth-dialog/stealth-dialog.component';
import { LoginService } from '../../shared/login.service';
import { CartService } from '../../items/shared/cart.service';
import { CartItem } from '../../items/shared/cart';
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
  cart: CartItem[];
  constructor(
    private humanService: HumanService,
    private stealthService: StealthService,
    private loginService: LoginService,
    private perceptionService: PerceptionService,
    private cartService: CartService,
    public dialog: MatDialog
  ) { }

  openDialog(): number {
    this.human = this.loginService.getHuman();
    this.stealth = this.stealthService.getStealth(this.human.stealth);
    this.cartService.returnCartByUserID(this.human.userID).subscribe( resp => {
      this.cart = resp });

    let stealthP = Math.round(this.stealth/40*100)
    let dialogRef = this.dialog.open(StealthDialogComponent, {
      data: {stealth: stealthP},
      panelClass: 'cust-modal'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.perception = this.perceptionService.getPerception(10);
        if(this.stealth > this.perception) {
	  console.log("You have successfully stolen");
	  this.res = 1
        } else {
	  console.log("STOP THIEF");
	  this.human.roleID = 4;

	  this.humanService.updateHuman(this.human).subscribe( resp => {
	    this.human = resp });
	  this.res = 0
	}
      } else {
	dialogRef = null;
      }
      });
    return this.res;
  }

}
