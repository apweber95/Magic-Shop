import { Item } from './item';
import { Human } from 'src/app/beans/human';

export class BackpackItem {
    backpackID: number;
    ownerID: Human;
    itemID: Item;
    stock: number;
}