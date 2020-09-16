import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInTableComponent } from './check-in-table/check-in-table.component';


const routes: Routes = [
  {
    path: '',
    component: CheckInTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
