import { Component, OnInit } from '@angular/core';
import { BackpackService } from '../shared/backpack.service';
import { BackpackItem } from '../shared/backpack';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-backpack',
  templateUrl: './backpack.component.html',
  styleUrls: ['./backpack.component.css']
})
export class BackpackComponent implements OnInit {
  backpackItems: BackpackItem[];

  constructor(
    private backpackService: BackpackService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if(id){
      this.backpackService.getBackpackItemsByOwnerID(id).subscribe( resp => {
        this.backpackItems = resp;
        this.backpackItems.sort((a, b) => (a.backpackID > b.backpackID) ? 1 : -1)
        console.log(this.backpackItems);
      });
    }
  }

}
