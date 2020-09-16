import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError, of } from 'rxjs';
import { map, tap, catchError, timeout } from 'rxjs/operators'; // experiment
import { EvacueeGroup } from '../shared/evacuee-group.model';
import { Evacuee } from '../shared/evacuee.model';
import { Shelter } from './shelter.model';
import { Group } from './group.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(private http: HttpClient) { }

  private serviceUrl = `http://172.16.22.128:5000`;

  getAllShelters(): Observable<Shelter[]> {
    return this.http.get<Shelter[]>(this.serviceUrl + '/api/all-shelters').pipe(
      timeout(5000),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  getShelterGroup(shelterId: number): Observable<EvacueeGroup[]> {
    return this.http.get<EvacueeGroup[]>(this.serviceUrl + `/api/shelter-group/${shelterId}`).pipe(
      timeout(3500),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  getShelterInfo(shelterId: number): Observable<any> {
    return this.http.get<any>(this.serviceUrl + `/api/shelter-info/${shelterId}`).pipe(
      timeout(3500),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  getEvacueeGroup(): Observable<EvacueeGroup[]> {
    return this.http.get<EvacueeGroup[]>(this.serviceUrl + '/api/groups').pipe(
      timeout(3500),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  getEvacuees(groupId: number): Observable<Evacuee[]> {
    return this.http.get<Evacuee[]>(this.serviceUrl + `/api/groups/${groupId}`).pipe(
      timeout(3500),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  checkIn(group: Group): Observable<any> {
    return this.http.put<number>(this.serviceUrl + '/api/group', group, httpOptions) 
    .pipe(
      timeout(3500),
      map((data: any) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred inserting an evacuee group.'); 
        })
      ); 
  }

  unCheckIn(group: Group): Observable<any> {
    return this.http.put<number>(this.serviceUrl + '/api/uncheck-group', group, httpOptions) 
    .pipe(
      timeout(3500),
      map((data: any) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred inserting an evacuee group.'); 
        })
      ); 
  }

  removeGroup(groupId: number): Observable<any> {
    return this.http.put<number>(this.serviceUrl + `/api/remove-group/${groupId}`, httpOptions) 
    .pipe(
      timeout(3500),
      map((data: any) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError('An error occurred inserting an evacuee group.'); 
        })
      ); 
  }

}