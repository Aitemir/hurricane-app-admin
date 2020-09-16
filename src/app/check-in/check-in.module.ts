import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckInTableComponent } from './check-in-table/check-in-table.component';
import { CheckInActionDialogComponent } from './check-in-table/check-in-action-dialog/check-in-action-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CheckInAddressDialogComponent } from './check-in-table/check-in-address-dialog/check-in-address-dialog.component';
import {MatChipsModule} from '@angular/material/chips';
import { RemoveGroupDialogComponent } from './check-in-table/remove-group-dialog/remove-group-dialog.component';
import { CheckInWarningDialogComponent } from './check-in-table/check-in-warning-dialog/check-in-warning-dialog.component';

@NgModule({
  declarations: [CheckInTableComponent, CheckInActionDialogComponent, CheckInAddressDialogComponent, RemoveGroupDialogComponent, CheckInWarningDialogComponent], 
  imports: [
    CommonModule,
    CheckInRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatChipsModule
  ],
  exports: [],
  providers: []
})
export class CheckInModule { }