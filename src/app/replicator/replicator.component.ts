import { Component } from '@angular/core';

@Component({
  selector: 'app-replicator',
  standalone: true,
  imports: [],
  templateUrl: './replicator.component.html',
  styleUrl: './replicator.component.css'
})
export class ReplicatorComponent {


  message: string = '';

  updateText($event: Event) 
  {

    const inputElmnt = $event.target as HTMLInputElement;
    this.message = inputElmnt.value;

  }

  

}
