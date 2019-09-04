import { Item } from './item';
import { Human } from 'src/app/beans/human';

export class CartItem {
    cartItemID: number;
    ownerID: Human;
    itemID: Item;
    amount: number;
}