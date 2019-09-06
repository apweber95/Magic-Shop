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

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private stealthComponent: StealthComponent,
    private loginService: LoginService,
    private humanService: HumanService,
    private backpackService: BackpackService,
    private snackbarService: SnackbarService
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

  buyItems(){
    var amount = 0;
    this.loggedHuman = this.loginService.getHuman();
    this.humanService.getHumanByID(1).subscribe(
      resp => {
        this.owner = resp;
      }
    );
    
    
    for(let c of this.cartItems){
      amount += c.itemID.shelfPrice;
      c.ownerID = this.emptyHuman;

      this.backpackService.addItemBackpack(c.itemID.itemID, c.amount, this.loggedHuman.userID).subscribe();
      this.backpackService.removeItemBackpack().subscribe(c.itemID.itemID, c.amount,this.owner.userID).subscribe();
      this.cartService.updateCartItem(c).subscribe();
    }

   
    
    this.loggedHuman.gold -= amount;
    //user gets banned if they go to far in debt
    if(this.loggedHuman.gold < -100){
      this.loggedHuman.roleID = 4;
      this.humanService.updateHuman(this.loggedHuman).subscribe();
    }
    //update the gold amount
    this.humanService.updateHuman(this.loggedHuman).subscribe();


  }

}


