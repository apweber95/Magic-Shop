import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoginService } from 'src/app/shared/login.service';
import { Human } from 'src/app/shared/human';
import { SnackbarService} from '../../services/snackbar.service';
import { RegisterService } from 'src/app/services/register.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedHuman: Human = new Human();
  isAdmin: boolean = false;

  showNav: boolean = true;
  showLogin: boolean = false;
  showRegister: boolean = false;

  username: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  failed: boolean = false;

  constructor(
    private router: Router, 
    private loginService: LoginService,
    private snackbarService: SnackbarService, 
    private registerService: RegisterService
  ) { }
  
  ngOnInit() {

  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    console.log('Back button pressed');
    this.redirectHome();
  }

  redirectLogin(){
    this.getInfo();
    if(this.loggedHuman){
      this.redirectHome();
    }
    else{
      this.showNav = false;
      this.showLogin = true;
      this.showRegister = false;
      this.router.navigate(['/login']);
    }
  }

  redirectLogout() {
    this.isAdmin = false;
    this.loginService.logout();
    this.redirectHome();
  }

  redirectHome(){
    this.getInfo();
    if (this.loggedHuman) {
      console.log("Human Detected in redirect");
    } else {
      console.log("no human detected in redirect");
    }
    this.router.navigate(['/home']);
  }

  redirectSignup(){
    this.getInfo();
    if(this.loggedHuman){
      this.redirectHome();
    }
    else{
      this.showNav = false;
      this.showLogin = false;
      this.showRegister = true;
      this.router.navigate(['/register']);
    }
    
  }

  redirectBackpack(){
    this.getInfo();
    if(this.loggedHuman){
      this.router.navigate(['/backpack/' + this.loggedHuman.userID]);
    }
    else{
      this.redirectHome();
    }
  }

  redirectCart(){
    this.getInfo();
    if(this.loggedHuman){
      this.router.navigate(['/cart/' + this.loggedHuman.userID]);
    } else {
      this.redirectHome();
    }
  }

  redirectAccounts(){
    this.getInfo();
    this.loggedHuman = this.loginService.getHuman();
    if(this.loggedHuman){
      this.router.navigate(['/accounts']);
    } else {
      this.redirectHome();
    }
  }

  redirectItemsCatalog() {
    this.getInfo();
    if (this.loggedHuman && this.loggedHuman.userID == 1) {
      this.router.navigate(['/itemsCatalog']);
    } else {
      this.redirectHome();
    }
  }

  redirectAdventure() {
    this.getInfo();
    if (this.loggedHuman) {
      this.router.navigate(['/adventureBoard']);
    } else {
      this.redirectHome();
    }
    
  }

  getInfo() {
    this.showNav = true;
    this.showLogin = false;
    this.showRegister = false;
    this.loggedHuman = this.loginService.getHuman();
    if (this.loggedHuman && this.loggedHuman.userID == 1) {
      this.isAdmin = true;
    }
  }

  login(){
    let human: Human = new Human();
    human.username = this.username;    
    human.password = this.password;
    this.loggedHuman = human;
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
    if (this.loggedHuman) {
      console.log("Logged Human Detected: " + this.loggedHuman);
      this.ngOnInit();
      this.redirectHome();
    } else {
      console.log("There was no logged: " + this.loggedHuman);
      this.loggedHuman = this.loginService.getHuman();
      console.log("after the call: " + this.loggedHuman);
      this.successfulLogin();
    }
    
  }

  private register() {
    let human: Human = new Human();
    human.username = this.username;    
    human.password = this.password;
    this.loggedHuman = human;
    this.loggedHuman.username = this.username;
    this.loggedHuman.password = this.password;
    this.loggedHuman.first = this.firstName;
    this.loggedHuman.last = this.lastName;
    this.registerService.register(this.loggedHuman).subscribe(
      resp => {
        this.loggedHuman = resp;
        if(this.loggedHuman == null){
          this.failedSignUp();
        } else {
          this.successfulSignUp();
        }
      }
    );
    this.username = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }

  successfulSignUp() {
    this.loginService.login(this.loggedHuman).subscribe(
      resp => {
        this.loggedHuman = resp;
        if(this.loggedHuman == null){
          this.failedSignUp();
        }
        else{
          this.failed = false;
          this.redirectHome();
          this.snackbarService.show("New Account Created!");
        }
      }
    );
  }

  failedSignUp(){
    this.failed = true;
    this.loggedHuman = new Human();
    this.snackbarService.show("Username Unavailable");
  }

}