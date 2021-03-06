import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  bericht: string;
  titel: string;
}

@Component({
  selector: 'app-dialog-melding',
  templateUrl: './dialog-melding.component.html',
  styleUrls: ['./dialog-melding.component.scss']
})
export class DialogMeldingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogMeldingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

  ngOnInit()
  {
    this.dialogRef.updateSize('30%', '20%');
    this.changePosition();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePosition()
  {
    this.dialogRef.updatePosition({top: '5%', left: '35%'});
  }

}
