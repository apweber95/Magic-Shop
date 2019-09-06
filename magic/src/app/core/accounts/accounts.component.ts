import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/shared/human';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  public accounts: Human[];
  selectedRow : Human;
  setClickedRow : Function;
  private human: Human;
  public changingHuman: Human;
  loggedHuman: Human;
  constructor(private accountsService: AccountsService, private loginService: LoginService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe( accounts => this.accounts = accounts);
    this.setClickedRow = function(index){
      this.selectedRow = index;
      console.log(this.loggedHuman.roleID);
    console.log(this.selectedRow);
    console.log(this.loggedHuman.roleID);
    }

  }

toFired(h: Human){
  this.loggedHuman = this.loginService.getHuman();

  if(this.setClickedRow && this.loggedHuman.roleID == 2){
  this.changingHuman = this.selectedRow;
  this.accountsService.updateHuman(this.changingHuman).subscribe( human => this.human = human);

  h.roleID = h.roleID + 1;
  }
}
toPromoted(h: Human){
  this.loggedHuman = this.loginService.getHuman();
  if(this.setClickedRow && this.loggedHuman.roleID == 3){
  console.log(this.loggedHuman);
  this.changingHuman = this.selectedRow;
  this.accountsService.updateHuman(this.changingHuman).subscribe( human => this.human = human);

  h.roleID = h.roleID - 1;
  }
 

}
  

}
