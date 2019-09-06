import { Component, OnInit } from '@angular/core';
import { SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-adventure-board',
  templateUrl: './adventure-board.component.html',
  styleUrls: ['./adventure-board.component.css']
})
export class AdventureBoardComponent implements OnInit {

  constructor(
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
  }

}
