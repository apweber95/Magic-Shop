import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItem } from '../shared/cart';
import { ActivatedRoute } from '@angular/router';
import { StealthComponent } from '../../stats/stealth/stealth.component';
import { SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private stealthComponent: StealthComponent,
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
  }

  openDialog(): void {
    this.stealthComponent.openDialog();
  }

  removeAllFromCart(cartItem: CartItem){
    this.cartService.deleteCartItem(cartItem).subscribe( () => {
      this.snackbar.show("Removed all " + cartItem.itemID.name + " from your cart.");
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


