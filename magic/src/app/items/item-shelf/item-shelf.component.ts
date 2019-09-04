import { Component, OnInit } from '@angular/core';
import { BackpackItem } from '../shared/backpack';
import { BackpackService } from '../shared/backpack.service';
import { LoginService } from '../../shared/login.service';
import { RestockService } from '../../services/restock.service';

@Component({
  selector: 'app-item-shelf',
  templateUrl: './item-shelf.component.html',
  styleUrls: ['./item-shelf.component.css']
})
export class ItemShelfComponent implements OnInit {
  displayColumns: string[] = ['name', 'description', 'rarity', 'shelfPrice', 'stock']
  bItems: BackpackItem[];
  searchText: string;

  isWorker: boolean = false;

  constructor(
    private backpackService: BackpackService, 
    private loginService: LoginService, 
    private restockService: RestockService
    ) { }

  ngOnInit() {
    console.log(this.loginService.getHuman());
    if (this.loginService.getHuman() && this.loginService.getHuman().roleID <= 2) {
      this.isWorker = true;
    }
    this.backpackService.getBackpackItemsByOwnerID(1).subscribe( (bItems) => {
      this.bItems = bItems;
      this.bItems.sort((a, b) => (a.backpackID > b.backpackID) ? 1 : -1);
    });
  }

  restock(backpackItemId: number) {
    console.log("BackpackItemId: " + backpackItemId);
    this.restockService.restock(backpackItemId).subscribe(
      resp => {
        console.log("Item restocked: " + resp);
      }
    );
  }

  addToCart(){
    console.log("addToCart works");
  }
}
