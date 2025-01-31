import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-if',
  standalone: true,
  imports: [],
  templateUrl: './comp-if.component.html',
  styleUrl: './comp-if.component.css'
})
export class CompIfComponent {

  isAuth : boolean = false;

  alternateAuth(){

    this.isAuth = true;
    
  }
}
