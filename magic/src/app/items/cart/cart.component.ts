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
      });
    }
  }

  openDialog(): void {
    this.stealthComponent.openDialog();
  }

  removeAllFromCart(c: CartItem){
    // this.cartService.addCartItem(this.cartItem).subscribe( resp => {
    //   console.log("Added to cart: ", resp);
    //   this.snackbar.show("Added to Cart");
    // });
    this.snackbar.show("Removed all " + c.itemID.name + " from your cart.");
  }

  removeOneFromCart(c: CartItem){
    this.snackbar.show("Removed one " + c.itemID.name + " from your cart.");
  }

}


