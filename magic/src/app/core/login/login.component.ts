import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/login.service';
import { Human } from 'src/app/shared/human';
import { NgModel } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loggedHuman: Human = new Human();

  username: string = "";
  password: string = "";
  failed: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { }

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
          this.failed = false;
          console.log("recieved user:" + this.loggedHuman.userID);
          this.router.navigate(['']);
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

  logout(){

  }

}
