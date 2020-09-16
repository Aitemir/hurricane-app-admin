import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckInTableComponent } from './check-in/check-in-table/check-in-table.component';
import { CheckInModule } from './check-in/check-in.module';
import { ShelterComponent } from './shelter/shelter.component';


const routes: Routes = [
  {
    path: 'check-in',
    loadChildren: ()=> CheckInModule
  },
  {
    path: '',
    component: ShelterComponent,
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }