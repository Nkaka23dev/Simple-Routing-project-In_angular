import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmploye';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  public _url:string="assets/data/data.json"
  constructor(private http:HttpClient) { }

  getEmployee() :Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url)
  }
}
