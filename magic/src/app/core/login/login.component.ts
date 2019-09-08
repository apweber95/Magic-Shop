import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Human } from 'src/app/shared/human';
import { NgModel } from '@angular/forms';
import {Router} from "@angular/router"
import {NavBarComponent} from 'src/app/core/nav-bar/nav-bar.component'
import { SnackbarService} from '../../services/snackbar.service';

@Component({
  providers:[NavBarComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loggedHuman: Human = new Human();

  username: string = "";
  password: string = "";
  failed: boolean = false;

  constructor(
    private loginService: LoginService, 
    private router: Router, 
    private nav: NavBarComponent,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {

  }

  login(){
    
    this.loggedHuman.username = this.username;    
    this.loggedHuman.password = this.password;
    this.loginService.login(this.loggedHuman).subscribe(
      resp => {
        this.loggedHuman = resp;
        if(this.loggedHuman == null){
          this.failedLogin();
        }
        else{
          this.successfulLogin();
        }
      }
    );
    this.username = "";
    this.password = "";
  }

  failedLogin(){
    this.failed = true;
    this.loggedHuman = new Human();
  }

  successfulLogin() {
    this.failed = false;

    if (this.nav.loggedHuman) {
      console.log("Logged Human Detected: " + this.nav.loggedHuman);
      this.nav.ngOnInit();
      this.nav.redirectHome();
    } else {
      console.log("There was no logged: " + this.nav.loggedHuman);
      this.nav.loggedHuman = this.loginService.getHuman();
      console.log("after the call: " + this.nav.loggedHuman);
      this.successfulLogin();
    }
    
  }

}
