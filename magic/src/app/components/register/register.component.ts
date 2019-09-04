import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { Human } from '../../beans/human'
import { NgModel } from '@angular/forms';

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

  constructor(private registerService: RegisterService) { }

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
          this.newUser = new Human();
        }
        console.log("recieved new user:" + this.newUser.first);
      }
    );
    this.newUser.username = "";
    this.newUser.password = "";
    this.newUser.first = "";
    this.newUser.last = "";
  }

}
