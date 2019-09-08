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

  percentages: number[] = new Array();

  constructor(
    private snackbarService: SnackbarService,
    private questService: QuestService,
    private loginService: LoginService,
    private navBar: NavBarComponent
  ) { }

  ngOnInit() {
    let difficulties: number[] = [1, 2, 3, 5, 8, 13];
    let luck: number = this.loginService.getHuman().luck;
    let multipliers: number[] = [.05, .15, .25, .35, .45, .55, .65, .75, .85, .95];
    let dcResults: number[] = new Array();
    let playerResults: number[] = new Array();
    let percentage: number = 0;

    for (let i=0; i< difficulties.length; i++) {
      for (let j=0; j<multipliers.length; j++) {
        dcResults.push(difficulties[i] * multipliers[j] * 2);
        playerResults.push(multipliers[j] * luck);
      }
      for (let k=0; k<dcResults.length; k++) {
        for (let l=0; l<playerResults.length; l++) {
          if (playerResults[l] >= dcResults[k]) {
            percentage = percentage + .01
          }
        }
      }
      this.percentages.push(Math.round(percentage * 100) / 100);
      percentage = 0;
      dcResults = new Array();
      playerResults = new Array();
    }
    console.log(this.percentages);
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
