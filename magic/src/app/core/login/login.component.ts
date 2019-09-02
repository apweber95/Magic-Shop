import { Component, OnInit } from '@angular/core';
import { HumanService } from 'src/app/shared/human.service';
import { Human } from 'src/app/shared/human';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedHuman: Human = new Human();

  username: string = "";
  password: string = "";

  constructor(private humanService: HumanService) { }

  ngOnInit() {

  }

  login(){
    this.loggedHuman.username = this.username;    
    this.loggedHuman.password = this.password;
    this.humanService.login(this.loggedHuman).subscribe(
      resp => {
        this.loggedHuman = resp;
        if(this.loggedHuman == null){
          this.loggedHuman = new Human();
        }
        console.log("recieved user:" + this.loggedHuman.first);
      
      }
    );
    this.username = "";
    this.password = "";
  }

  logout(){

  }

}
