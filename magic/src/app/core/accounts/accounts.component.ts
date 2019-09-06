import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/shared/human';
import { AccountsService } from 'src/app/shared/accounts.service';
import { LoginService } from 'src/app/shared/login.service';
import { SnackbarService} from '../../services/snackbar.service';

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

  constructor(
    private accountsService: AccountsService,
    private loginService: LoginService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe( accounts => this.accounts = accounts);
    this.setClickedRow = function(index){
      this.selectedRow = index;
      //console.log(this.loggedHuman.roleID);
    console.log(this.selectedRow);
    //console.log(this.loggedHuman.roleID);
    }

  }

toFired(){
  this.loggedHuman = this.loginService.getHuman();

  if(this.setClickedRow && this.selectedRow.roleID == 2){
  this.selectedRow.roleID = this.selectedRow.roleID + 1;
  this.accountsService.updateHuman(this.selectedRow).subscribe( human => this.human = human);

  
  }
}

toPromoted(){
  this.loggedHuman = this.loginService.getHuman();
  if(this.setClickedRow && this.selectedRow.roleID == 3){
  console.log(this.loggedHuman);
  this.selectedRow.roleID = this.selectedRow.roleID - 1;
  this.accountsService.updateHuman(this.selectedRow).subscribe( human => this.human = human);

  
  }
 

}
  

}
