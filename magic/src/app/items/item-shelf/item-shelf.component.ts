import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-shelf',
  templateUrl: './item-shelf.component.html',
  styleUrls: ['./item-shelf.component.css']
})
export class ItemShelfComponent implements OnInit {
  items: Item[];
  searchText: string;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe( (items) => {
      this.items = items;
    });
  }

}
