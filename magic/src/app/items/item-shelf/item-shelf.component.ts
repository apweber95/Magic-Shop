import { Component, OnInit } from '@angular/core';
import { BackpackItem } from '../shared/backpack';
import { BackpackService } from '../shared/backpack.service';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart';
import { LoginService } from '../../shared/login.service';
import { Human } from '../../beans/human';
import { SnackbarService } from '../../services/snackbar.service';
import { HumanService } from '../../shared/human.service';

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
  storeGold: number = 0;
  cItem: CartItem;

  isWorker: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private backpackService: BackpackService, 
    private loginService: LoginService,
    private snackbar: SnackbarService,
    private cartService: CartService,
    private humanService: HumanService
    ) { }

  ngOnInit() {
    let loggedUser: Human = this.loginService.getHuman();
    if (loggedUser && loggedUser.roleID <= 2) {
      this.isWorker = true;
      if (loggedUser.roleID == 1) {
        this.isAdmin = true;
        this.storeGold = loggedUser.gold;
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
    
    this.cartService.addCartItem(this.cartItem).subscribe( resp => {
      console.log("Added to cart: ", resp);
      this.snackbar.show("Added to Cart");
    });

    bp.stock = bp.stock - 1;

    this.backpackService.updateBackPack(bp).subscribe( resp => {
      console.log("Reduced item stock by one: ", resp);
    });
  }

  enableButton(stock: number){
    if(stock <= 0){
      return false;
    }
    if(this.loginService.getHuman()){
      return true;
    }
  }

  restock(bp: BackpackItem){
    bp.stock = bp.stock + 1;

    this.backpackService.updateBackPack(bp).subscribe( resp => {
      console.log("Increased item stock by one: ", resp);
      this.snackbar.show("Item added");
    })

    let admin: Human = new Human();
    this.humanService.getHumanByID(1).subscribe( resp => {
      admin = resp;
      admin.gold = admin.gold - Math.floor(bp.itemID.shelfPrice / (1.3));
      this.humanService.updateHuman(admin).subscribe();
    })
  }
}
