import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-for',
  standalone: true,
  imports: [],
  templateUrl: './comp-for.component.html',
  styleUrl: './comp-for.component.css'
})
export class CompForComponent {

  public tasks : string[] = [];

  public addTasks(task : string){

    if(task.trim().length > 0){
      
      this.tasks.push(task);

    }

    

  }

}
