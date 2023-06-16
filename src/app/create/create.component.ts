import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
emplist:Employee[]=[
  {
  EmpName:"Siva",
  Dept:"Developing",
  Age:21,
  Salary:6000
  },
  {
    EmpName:"Karthi",
    Dept:"Developing",
    Age:20,
    Salary:6000
    },
    {
      EmpName:"Arun",
      Dept:"Developing",
      Age:20,
      Salary:6000
      },
      {
        EmpName:"Srikanth",
        Dept:"Developing",
        Age:20,
        Salary:6000
        },
        {
          EmpName:"Vignesh",
          Dept:"Developing",
          Age:20,
          Salary:6000
          },     
]
}
interface Employee{
  EmpName:string|any;
  Dept:string|any;
  Age:number|any;
  Salary:number|any;

}
