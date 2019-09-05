import { Component, OnInit } from '@angular/core';
import { Human } from 'src/app/shared/human';
import { AccountsService } from 'src/app/shared/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  public accounts: Human[];
  constructor(private accountsService: AccountsService) { }

  ngOnInit() {
    this.accountsService.getAccounts().subscribe( accounts => this.accounts = accounts);
  }

}
