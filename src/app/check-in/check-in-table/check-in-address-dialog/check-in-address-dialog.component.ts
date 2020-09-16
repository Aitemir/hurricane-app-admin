import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-check-in-address-dialog',
  templateUrl: './check-in-address-dialog.component.html',
  styleUrls: ['./check-in-address-dialog.component.scss']
})
export class CheckInAddressDialogComponent implements OnInit {

  groupId: number;
  address: string; 

  constructor(public dialogRef: MatDialogRef<CheckInAddressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.groupId = this.data.groupId;
    this.address = this.data.address;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
