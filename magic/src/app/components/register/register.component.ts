import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service'
import { Human } from '../../beans/human'

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
    this.registerService.register(this.newUser).subscribe();
  }

}
