import { Component, OnInit } from '@angular/core';
import { BackpackItem } from '../shared/backpack';
import { BackpackService } from '../shared/backpack.service';

@Component({
  selector: 'app-item-shelf',
  templateUrl: './item-shelf.component.html',
  styleUrls: ['./item-shelf.component.css']
})
export class ItemShelfComponent implements OnInit {
  displayColumns: string[] = ['name', 'description', 'rarity', 'shelfPrice', 'stock']
  bItems: BackpackItem[];
  searchText: string;
  constructor(private backpackService: BackpackService) { }

  ngOnInit() {
    this.backpackService.getBackpackItemsByOwnerID(1).subscribe( (bItems) => {
      this.bItems = bItems;
      this.bItems.sort((a, b) => (a.itemID.name > b.itemID.name) ? 1 : -1);
    });
  }

}
