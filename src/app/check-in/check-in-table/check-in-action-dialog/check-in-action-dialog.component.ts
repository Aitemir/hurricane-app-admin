import { Component, OnInit, Inject } from '@angular/core';
import { Evacuee } from 'src/app/shared/evacuee.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { AdminHttpService } from 'src/app/shared/admin-http.service';
import { Group } from 'src/app/shared/group.model';

@Component({
  selector: 'app-check-in-action-dialog',
  templateUrl: './check-in-action-dialog.component.html',
  styleUrls: ['./check-in-action-dialog.component.scss']
})
export class CheckInActionDialogComponent implements OnInit {

  uncheck = false; 
  isLoadingResults = true; 
  evacuees: Evacuee[] = [];
  //groupId: number;
  group: Group;
  error;
  displayedColumns: string[] = ['evacueeId', 'firstName', 'lastName', 'covidSymptoms'];
  dataSource = new MatTableDataSource<Evacuee>(this.evacuees);
  selection = new SelectionModel<any>(true, []);
  pageSize = 10;
  constructor(private _adminHttpService: AdminHttpService,
    public dialogRef: MatDialogRef<CheckInActionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.group = <Group>{};
    this.group.groupId = this.data.groupId;
    this.group.checkedIn = this.data.checkedIn;
    console.log(this.group);
    const evacueeObservable = this._adminHttpService.getEvacuees(this.group.groupId);
    evacueeObservable.subscribe((data: Evacuee[])=> {
      this.isLoadingResults = false;
      this.evacuees = data;
      this.loadData();
      if (this.group.checkedIn == 'Y') {this.uncheck = true}
    }, error => {
      console.log(error);
      this.error = error;
    });
  }

  loadData() {
    this.dataSource = new MatTableDataSource<Evacuee>(this.evacuees);
  }

  checkIn() {
    const checkInObservable = this._adminHttpService.checkIn(this.group)
    checkInObservable.subscribe((res)=> {
        this.dialogRef.close(true);
    }, 
    (error) => {
      this.dialogRef.close(error);
    });
  }

  unCheckIn() {
    const unCheckInObservable = this._adminHttpService.unCheckIn(this.group)
    unCheckInObservable.subscribe((res)=> {
        this.dialogRef.close(true);
    }, 
    (error) => {
      this.dialogRef.close(error);
    });
  }
}