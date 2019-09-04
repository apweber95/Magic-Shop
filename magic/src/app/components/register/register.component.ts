import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { Human } from '../../beans/human'
import { NgModel } from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public newUser: Human = new Human();

  username: string = "";
  password: string = "";
  firstName: string = "";
  lastName: string = "";

  failed: boolean = false;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {
    let signUpButton = document.getElementById("register_submit");
    signUpButton.addEventListener("click", (e: Event) => this.register()); 
  }

  private register() {
    this.newUser.username = this.username;
    this.newUser.password = this.password;
    this.newUser.first = this.firstName;
    this.newUser.last = this.lastName;
    this.registerService.register(this.newUser).subscribe(
      resp => {
        this.newUser = resp;
        if(this.newUser == null){
          this.failedSignUp();
        } else {
          this.failed = false;
          console.log("recieved new user:" + this.newUser.first);
          this.router.navigate(['login']);
        }
      }
    );
    this.newUser.username = "";
    this.newUser.password = "";
    this.newUser.first = "";
    this.newUser.last = "";
  }

  failedSignUp(){
    this.failed = true;
    this.newUser = new Human();
  }

}
