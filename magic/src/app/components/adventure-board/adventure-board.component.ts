import { Component, OnInit } from '@angular/core';
import { SnackbarService} from '../../services/snackbar.service';
import { QuestService } from '../../services/quest.service';
import { LoginService } from '../../shared/login.service';
import { Human } from '../../beans/human';
import {NavBarComponent} from 'src/app/core/nav-bar/nav-bar.component'

@Component({
  providers:[NavBarComponent],
  selector: 'app-adventure-board',
  templateUrl: './adventure-board.component.html',
  styleUrls: ['./adventure-board.component.css']
})
export class AdventureBoardComponent implements OnInit {

  constructor(
    private snackbarService: SnackbarService,
    private questService: QuestService,
    private loginService: LoginService,
    private navBar: NavBarComponent
  ) { }

  ngOnInit() {
  }

  quest(difficulty: number) {
    this.snackbarService.show("Your quest begins!");
    let human: Human = this.loginService.getHuman();
    this.questService.quest(human, difficulty).subscribe(
      resp => {
        human = resp;
        if (human.roleID == 5) {
          this.snackbarService.show("You have perished.");
          this.navBar.redirectLogout();
        } else {
          this.snackbarService.show("You return victorious!");
        }
      }
    );
  }


}
