import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../shared/backpack.service';
import { BackpackItem } from '../shared/backpack';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/item';
import { HumanService } from 'src/app/shared/human.service';
import { Human } from 'src/app/shared/human';
import { LoginService } from 'src/app/shared/login.service';
import { SnackbarService} from '../../services/snackbar.service';


@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {
  backpackItems: BackpackItem[];
  loggedHuman: Human = this.loginService.getHuman();
  owner: Human;
  
  constructor(
    private backpackService: BackpackService,
    private route: ActivatedRoute,
    private humanService: HumanService,
    //we need login service becuase if we use the gold in the backpackItems and there are no backpack items, then we can't show them the gold that they have
    private loginService: LoginService,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.backpackService.getBackpackItemsByOwnerID(id).subscribe( resp => {
        this.backpackItems = resp;
        this.backpackItems.sort((a, b) => (a.backpackID > b.backpackID) ? 1 : -1);
        this.sellPrice();
        if (this.backpackItems.length <= 0) {
          this.snackbarService.show("Your backpack is empty");
        }
      });
    }

    this.loggedHuman = this.loginService.getHuman();
    this.humanService.getHumanByID(1).subscribe(
      resp => {
        this.owner = resp;
      }
    );
  }

  sellPrice(){
    for(let i =0; i <this.backpackItems.length; i++){
      this.backpackItems[i].itemID.shelfPrice = Math.floor(this.backpackItems[i].itemID.shelfPrice / (1.3));
    }
  } 

  sellItem(backID: number){
    var amount = 0;
    
    
    for(let i =0; i <this.backpackItems.length; i++){
      if(this.backpackItems[i].backpackID === backID){
        this.backpackItems[i].ownerID = this.owner;
        amount = this.backpackItems[i].itemID.shelfPrice;
       this.backpackService.updateBackPack(this.backpackItems[i]).subscribe();
        break;
      }
    }
    this.owner.gold += amount;
    this.loggedHuman.gold -= amount;
    this.humanService.updateHuman(this.owner).subscribe();
    this.humanService.updateHuman(this.loggedHuman).subscribe();
    this.ngOnInit();
  }


}