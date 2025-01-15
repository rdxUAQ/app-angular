import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-interpolation-comp',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-comp.component.html',
  styleUrl: './interpolation-comp.component.css'
})
export class InterpolationCompComponent {
  title: string = 'This is a title for app-interpolation-comp';
  user ={
    name: 'user1',
    lastName: 'lastName1',
    age: 35
  }

  greetings(){
    return `Hi, ${this.user.name} this is a fucntion result`;
  }

}
