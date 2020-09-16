import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminHttpService } from 'src/app/shared/admin-http.service';

@Component({
  selector: 'app-remove-group-dialog',
  templateUrl: './remove-group-dialog.component.html',
  styleUrls: ['./remove-group-dialog.component.scss']
})
export class RemoveGroupDialogComponent implements OnInit {

  groupId: number;

  constructor(private _adminHttpService: AdminHttpService,
    public dialogRef: MatDialogRef<RemoveGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.groupId = this.data.groupId;
  }

  removeGroup() {
    const removeGroupObservable = this._adminHttpService.removeGroup(this.groupId)
    removeGroupObservable.subscribe((res)=> {
        this.dialogRef.close(true);
    }, 
    (error) => {
      this.dialogRef.close(error);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
