import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'stealth-dialog',
  templateUrl: 'stealth-dialog.component.html',
  styleUrls: ['./stealth-dialog.component.css']
})
export class StealthDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<StealthDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
