import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from './../emp-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public title='Here is employees with their details'
  public employees=[];
  constructor(private _myEmployee:EmpServiceService) { }

  ngOnInit(): void {

  this._myEmployee.getEmployee().subscribe(data=>this.employees=data)
    
  }
 
}
