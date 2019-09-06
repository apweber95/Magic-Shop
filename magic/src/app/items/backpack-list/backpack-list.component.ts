import { Component, OnInit } from '@angular/core';
import { SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-backpack-list',
  templateUrl: './backpack-list.component.html',
  styleUrls: ['./backpack-list.component.css']
})
export class BackpackListComponent implements OnInit {

  constructor(
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
  }

}
