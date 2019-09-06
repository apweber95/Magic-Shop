import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../beans/item'
import { ItemCatalogService } from '../../services/item-catalog.service';
import { SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-items-catalog',
  templateUrl: './items-catalog.component.html',
  styleUrls: ['./items-catalog.component.css']
})
export class ItemsCatalogComponent implements OnInit {
  items: Item[];

  constructor(
    private itemCatalogService: ItemCatalogService,
    private route: ActivatedRoute,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
      this.itemCatalogService.getItems().subscribe( 
        resp => {
          this.items = resp;
          this.items.sort((a, b) => (a.name > b.name) ? 1 : -1);
      });
    }

  addItem(itemId: number) {
    this.itemCatalogService.addItemToCatalog(itemId).subscribe();
  }

  removeItem(itemId: number) {
    this.itemCatalogService.removeItemFromCatalog(itemId).subscribe();
  }

}
