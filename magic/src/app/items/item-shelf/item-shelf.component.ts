import { Component, OnInit } from '@angular/core';
import { BackpackItem } from '../shared/backpack';
import { BackpackService } from '../shared/backpack.service';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart';
import { LoginService } from '../../shared/login.service';
import { RestockService } from '../../services/restock.service';
import { Human } from '../../beans/human';
import { SnackbarService } from '../../services/snackbar.service';

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
  cItem: CartItem;

  isWorker: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private backpackService: BackpackService, 
    private loginService: LoginService, 
    private restockService: RestockService,
    private snackbar: SnackbarService,
    private cartService: CartService,
    ) { }

  ngOnInit() {
    let loggedUser: Human = this.loginService.getHuman();
    if (loggedUser && loggedUser.roleID <= 2) {
      this.isWorker = true;
      if (loggedUser.roleID == 1) {
        this.isAdmin = true;
      }
    }

    this.backpackService.getBackpackItemsByOwnerID(1).subscribe( (bItems) => {
      this.bItems = bItems;
      this.bItems.sort((a, b) => (a.itemID.name > b.itemID.name) ? 1 : -1);
    });
  }

  addToCart(bp: BackpackItem){
    this.loggedHuman = this.loginService.getHuman();
    this.cartItem.ownerID = this.loggedHuman;
    this.cartItem.itemID = bp.itemID;
    
    this.cartService.addCartItem(this.cartItem).subscribe( cItem => {
      this.cItem = cItem;
      console.log(this.cItem);
    });
    
    this.snackbar.show("Added to Cart");
  }

  enableButton(){
    if(this.loginService.getHuman()){
      return true;
    }
  }
  
  restock(backpackItemId: number) {
    console.log("BackpackItemId: " + backpackItemId);
    this.restockService.restock(backpackItemId).subscribe(
      resp => {
        console.log("Item restocked: " + resp);
        this.snackbar.show("Order Placed");
      }
    );
  }
}
