import { Component, OnInit } from '@angular/core';
import { BackpackItem } from '../shared/backpack';
import { BackpackService } from '../shared/backpack.service';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart';
import { Human } from 'src/app/shared/human';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-item-shelf',
  templateUrl: './item-shelf.component.html',
  styleUrls: ['./item-shelf.component.css']
})
export class ItemShelfComponent implements OnInit {
  displayColumns: string[] = ['name', 'description', 'rarity', 'shelfPrice', 'stock']
  bItems: BackpackItem[];
  searchText: string;
  public cartItem: CartItem = new CartItem();
  loggedHuman: Human;

  constructor(
    private backpackService: BackpackService,
    private cartService: CartService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.backpackService.getBackpackItemsByOwnerID(1).subscribe( (bItems) => {
      this.bItems = bItems;
      this.bItems.sort((a, b) => (a.backpackID > b.backpackID) ? 1 : -1);
    });
  }

  addToCart(bp: BackpackItem){
    this.loggedHuman = this.loginService.getHuman();
    //TODO
    // this.cartItem.cartItemID = 
    this.cartItem.ownerID = this.loggedHuman;
    this.cartItem.itemID = bp.itemID;
    this.cartItem.amount = 1;
    console.log(this.cartItem);
  }

  enableButton(){
    if(this.loginService.getHuman()){
      return true;
    }
  }
}
