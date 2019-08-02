import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogconfirm',
  templateUrl: './dialogconfirm.component.html',
  styleUrls: ['./dialogconfirm.component.scss']
})
export class DialogconfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

}
