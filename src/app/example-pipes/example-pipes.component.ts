import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-example-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-pipes.component.html',
  styleUrl: './example-pipes.component.css'
})


export class ExamplePipesComponent {

  public employees = [
    { name: 'Employee 1', birthDate: new Date ('1990-01-01'), salary: 2560 },
    { name: 'Employee 2', birthDate: new Date ('1985-05-15'), salary: 3000 },
    { name: 'Employee 3', birthDate: new Date ('1992-07-20'), salary: 2800 },
    { name: 'Employee 4', birthDate: new Date ('1988-11-30'), salary: 3200 },
    { name: 'Employee 5', birthDate: new Date ('1995-03-10'), salary: 2700 }
  ];


}
