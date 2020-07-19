import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-name-detail',
  templateUrl: './name-detail.component.html',
  styleUrls: ['./name-detail.component.css']
})
export class NameDetailComponent implements OnInit {
  public employeeId;
  public employeeName;
  constructor(private _activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  this._activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  let id=parseInt(params.get('id'))
  this.employeeId=id
  })
}
  onBack(){
    let backId=this.employeeId-1;
    this.router.navigate(['/employee',backId])
  }
  onNext(){
    let nextId=this.employeeId+1;
    this.router.navigate(['/employee',nextId])
  }
  goBack(){
    let selectedid=this.employeeId?this.employeeId:null;
    this.router.navigate(['/employee',{id:selectedid}])
  }
}
