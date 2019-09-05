import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { LoginService } from 'src/app/shared/login.service';
import { Human } from 'src/app/shared/human';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedHuman: Human;
  
  constructor(
    private router: Router, 
    private loginService: LoginService
  ) { }
  
  ngOnInit() {
  }

  redirectLogin(){
    this.loggedHuman = this.loginService.getHuman();
    if(this.loggedHuman){
      this.redirectHome();
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  redirectHome(){
    this.loggedHuman = this.loginService.getHuman();
    this.router.navigate(['/home']);
  }

  redirectSignup(){
    this.loggedHuman = this.loginService.getHuman();
    if(this.loggedHuman){
      this.redirectHome();
    }
    else{
      this.router.navigate(['/register']);
    }
    
  }

  redirectBackpack(){
    this.loggedHuman = this.loginService.getHuman();
    if(this.loggedHuman){
      this.router.navigate(['/backpack/' + this.loggedHuman.userID]);
    }
    else{
      this.router.navigate(['/home']);
    }
  }

  redirectCart(){
    this.loggedHuman = this.loginService.getHuman();
    if(this.loggedHuman){
      this.router.navigate(['/cart/' + this.loggedHuman.userID]);
    }
  }


}
