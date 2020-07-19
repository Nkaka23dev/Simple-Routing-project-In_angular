import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from './../emp-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees=[];
  public selectedId;
  constructor(private _empService:EmpServiceService,
    private router:Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this._empService.getEmployee().subscribe(data=>this.employees=data)
  this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  let id=parseInt(params.get('id'))
  this.selectedId=id;
  })
  }

  Onselect(employee){
  this.router.navigate(['/employee',employee.id]) 
  }

  isSelected(employee){
  return employee.id===this.selectedId;
  }

}
