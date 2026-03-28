import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  employees=[
    {id:1,name:'john',role:'devloper'},
    {id:2,name:'Jne',role:'Manager'}
  ];
  getEmployees(){
    return this.employees
  }
  getEmployee(id:number){
     return this.employees.find((emp) =>emp.id===id);
  }
  addEmployee(emp:any){
    this.employees.push(emp)
  }
  updateEmployee(updateEmp:any){
    const index=this.employees.findIndex(emp=>emp.id==updateEmp);
         if(index!==-1){
          this.employees[index]={...updateEmp}
         }
  }
  deleteEmployee(id :number){
    this.employees=this.employees.filter(e=>e.id !==id);
  }
  searchEmployees(term:string){
   return this.employees.filter(e=>
    e.name.toLowerCase().includes(term.toLowerCase()) || e.role.toLowerCase().includes(term.toLowerCase())
   );
  }

}
