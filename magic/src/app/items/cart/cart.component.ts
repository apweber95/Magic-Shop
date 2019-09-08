import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart';
import { ActivatedRoute } from '@angular/router';
import { StealthComponent } from '../../stats/stealth/stealth.component';
import { LoginService } from 'src/app/shared/login.service';
import { Human } from 'src/app/shared/human';
import { HumanService } from 'src/app/shared/human.service';
import { BackpackService } from '../shared/backpack.service';
import { SnackbarService} from '../../services/snackbar.service';
import { BackpackItem } from '../shared/backpack';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];
  loggedHuman: Human;
  emptyHuman: Human;
  owner: Human;
  backpackItem: BackpackItem;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private stealthComponent: StealthComponent,
    private loginService: LoginService,
    private humanService: HumanService,
    private backpackService: BackpackService,
    private snackbarService: SnackbarService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.cartService.returnCartByUserID(id).subscribe( resp => {
        this.cartItems = resp;
        this.cartItems.sort((a, b) => (a.itemID.name > b.itemID.name) ? 1 : -1);
        if (this.cartItems.length <= 0) {
          this.snackbar.show( "Your cart is empty");
        }
      });
    }
    this.humanService.getHumanByID(1).subscribe(
      resp => {
        this.owner = resp;
      }
    );
  }

  openDialog(): void {
    this.stealthComponent.openDialog();
  }

  buyItems(){
    var amount = 0;
    this.loggedHuman = this.loginService.getHuman();
   
    for(var i =0; i < this.cartItems.length; i ++){
    
      amount += this.cartItems[i].itemID.shelfPrice;
      this.backpackItem = {
        backpackID: 1,
        itemID: this.cartItems[i].itemID,
        ownerID: this.loggedHuman,
        stock: this.cartItems[i].amount
      }
      this.backpackService.addItemToBackpack(this.backpackItem).subscribe();
      this.removeAllFromCart(this.cartItems[i]);
    }

   
    
    this.loggedHuman.gold -= amount;
    this.owner.gold += amount;
    //user gets banned if they go to far in debt
    if(this.loggedHuman.gold < -100){
      this.loggedHuman.roleID = 4;
      this.humanService.updateHuman(this.loggedHuman).subscribe();
      //redirect to banned page
    }
    //update the gold amount
    this.humanService.updateHuman(this.loggedHuman).subscribe();
    this.humanService.updateHuman(this.owner).subscribe();
  }

  removeAllFromCart(cartItem: CartItem){
    this.cartService.deleteCartItem(cartItem).subscribe( () => {
      this.snackbar.show("Removed all " + cartItem.itemID.name + " from your cart.");
      this.ngOnInit();
    });
  }

  removeOneFromCart(cartItem: CartItem){
    if(cartItem.amount == 1){
      this.removeAllFromCart(cartItem);
    }
    else{
      cartItem.amount = cartItem.amount - 1;
      this.cartService.updateCartItem(cartItem).subscribe( resp => {
        this.snackbar.show("Removed one " + cartItem.itemID.name + " from your cart.");
      });
    }
  }

}


