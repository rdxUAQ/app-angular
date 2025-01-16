import { Component } from '@angular/core';

@Component({
  selector: 'app-encap-tsjs',
  standalone: true,
  imports: [],
  templateUrl: './encap-tsjs.component.html',
  styleUrl: './encap-tsjs.component.css'
})
export class EncapTsjsComponent {

  private title: string = 'Title encap ts js';

  get getTitle(){
    return this.title;
  }

  getTitleJs(){
    return this.title;
  }

}
