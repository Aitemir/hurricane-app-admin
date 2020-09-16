import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Shelter } from './shelter.model';

const SHELTER_STORAGE_KEY = 'shelter';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  setShelter(shelter: Shelter) {
    this.storeShelter(shelter);
  }

  public getShelter(): Shelter {
    let shelter = this.storage.get(SHELTER_STORAGE_KEY);
    return shelter;
  }

  public storeShelter(shelter: Shelter): void {  
    this.storage.set(SHELTER_STORAGE_KEY, shelter);
  }
}
