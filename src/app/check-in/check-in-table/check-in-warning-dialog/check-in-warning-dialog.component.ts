import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-in-warning-dialog',
  templateUrl: './check-in-warning-dialog.component.html',
  styleUrls: ['./check-in-warning-dialog.component.scss']
})
export class CheckInWarningDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CheckInWarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      dialogRef.disableClose = true;
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}