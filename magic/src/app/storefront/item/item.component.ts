import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/item';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('item');
    if (id) {
      this.itemService.getItem(id).subscribe(
        item => {
	  this.item = item;
	}
      );
    }
  }

}
