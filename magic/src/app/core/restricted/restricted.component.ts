import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { Human } from 'src/app/shared/human';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  loggedHuman: Human;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loggedHuman = this.loginService.getHuman();
    
  }

}
