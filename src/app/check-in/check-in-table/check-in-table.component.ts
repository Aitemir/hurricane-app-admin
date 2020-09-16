import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EvacueeGroup } from 'src/app/shared/evacuee-group.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CheckInActionDialogComponent } from './check-in-action-dialog/check-in-action-dialog.component';
import { AdminHttpService } from 'src/app/shared/admin-http.service';
import { Shelter } from 'src/app/shared/shelter.model';
import { AdminService } from 'src/app/shared/admin.service';
import { CheckInAddressDialogComponent } from './check-in-address-dialog/check-in-address-dialog.component';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { CheckInWarningDialogComponent } from './check-in-warning-dialog/check-in-warning-dialog.component';

@Component({
  selector: 'app-check-in-table',
  templateUrl: './check-in-table.component.html',
  styleUrls: ['./check-in-table.component.scss']
})
export class CheckInTableComponent implements OnInit {

  isLoadingResults = true; 
  error: string;
  evacueeGroups: EvacueeGroup[] = [];
  shelter: Shelter;
  registered: number;
  checkedIn: number;
  isolated: number;
  displayedColumns: string[] = ['groupId', 'name', 'registrationDate', 
  'checkedIn', 'arrivalDate', 'address', 'action', 'delete'];
  dataSource: MatTableDataSource<EvacueeGroup>;
  pageSize = 10;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  
  constructor(private _adminHttpService: AdminHttpService,
    private _adminService: AdminService,
    public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.shelter = <Shelter>{};
    try {
      let shelter = this._adminService.getShelter();
      this.shelter.shelterId = shelter.shelterId
      this.shelter.shelterName = shelter.shelterName;
      this.shelter.address = shelter.address;
    }
    catch {
      this.openWarningDialog('It looks like you have not chosen your shelter. Please go back and select one from the menu');
    }
    if (this.shelter.shelterId != undefined) {
      const shelterInfoObservable = this._adminHttpService.getShelterInfo(this.shelter.shelterId);
      shelterInfoObservable.subscribe((data: any)=> {
        this.shelter.shelterStatus = data.shelterStatus
        this.shelter.maxCapacity = data.maxCapacity;
        this.registered = data.registered;
        this.checkedIn = data.checkedIn;
        this.isolated = data.isolated;
      }, error => {
        this.error = error;
      });
      const evacueeGroupObservable = this._adminHttpService.getShelterGroup(this.shelter.shelterId);
      evacueeGroupObservable.subscribe((data: EvacueeGroup[])=> {
        this.isLoadingResults = false;
        this.evacueeGroups = data;
        this.loadData();
      }, error => {
        this.error = error;
      });
    }
  }

  loadData() {
    this.dataSource = new MatTableDataSource<EvacueeGroup>(this.evacueeGroups);
    this.dataSource.sort = this.sort; 
    this.dataSource.paginator = this.paginator;
  }

  refresh() {
    this.isLoadingResults = true;
    const shelterInfoObservable = this._adminHttpService.getShelterInfo(this.shelter.shelterId);
      shelterInfoObservable.subscribe((data: any)=> {
        this.shelter.shelterStatus = data.shelterStatus
        this.shelter.maxCapacity = data.maxCapacity;
        this.registered = data.registered;
        this.checkedIn = data.checkedIn;
        this.isolated = data.isolated;
      }, error => {
        this.error = error;
    });
    const evacueeGroupObservable = this._adminHttpService.getShelterGroup(this.shelter.shelterId);
    this.error = null;  
    evacueeGroupObservable.subscribe((data: EvacueeGroup[])=> {
        this.isLoadingResults = false;
        this.evacueeGroups = data;
        this.loadData();
      }, error => {
        this.error = error;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openWarningDialog(message: String): void {
    const dialogRef = this.dialog.open(CheckInWarningDialogComponent, {
      width: '450px',
      height: '225px',
      data: {message: message}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openAddressDialog(groupId: number, address: string){
    const dialogRef = this.dialog.open(CheckInAddressDialogComponent, {
      width: '450px',
      height: '225px',
      data: {groupId: groupId, address: address}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openCheckInActionDialog(groupId: number, checkedIn: string){
    const dialogRef = this.dialog.open(CheckInActionDialogComponent, {
      width: '480px',
      data: {groupId: groupId, checkedIn: checkedIn}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) { 
        this.refresh() 
      } 
      else { 
        this.error = result       
      }
    }); 
  }

  openRemoveDialog(groupId: number){
    const dialogRef = this.dialog.open(RemoveGroupDialogComponent, {
      width: '480px',
      data: {groupId: groupId}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) { 
        this.refresh() 
      } 
      else { 
        this.error = result       
      }
    }); 
  }
}