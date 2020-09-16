import { Component, OnInit } from '@angular/core';
import { Shelter } from '../shared/shelter.model';
import { AdminHttpService } from 'src/app/shared/admin-http.service';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {

  error: string;
  isLoadingResults = true; 
  shelters: Shelter[] = [];

  constructor(private _adminHttpService: AdminHttpService,
    private _adminService: AdminService) { }

  ngOnInit(): void {
    const sheltersObservable = this._adminHttpService.getAllShelters();
    sheltersObservable.subscribe((data: Shelter[])=> {
      this.isLoadingResults = false;
      console.log(data);  
      this.shelters = data;
    }, error => { 
      console.log(error);
      this.error = error; 
    }); 
  }
  
  setShelter(i){
    this._adminService.setShelter(this.shelters[i]);
  }
}