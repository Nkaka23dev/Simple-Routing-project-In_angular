import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NameDetailComponent } from './name-detail/name-detail.component';
const routes: Routes = [
  {path:'',redirectTo:'/employee',pathMatch:'full'},
  {path:'employee',component:EmployeeComponent},
  {path:'employee/:id',component:NameDetailComponent},
  {path:'employee/:name',component:NameDetailComponent},
  {path:'employee_detail',component:EmployeeDetailComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,
                                EmployeeDetailComponent,
                                NameDetailComponent]


