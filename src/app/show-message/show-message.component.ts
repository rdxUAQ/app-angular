import { Component } from '@angular/core';

@Component({
  selector: 'app-show-message',
  standalone: true,
  imports: [],
  templateUrl: './show-message.component.html',
  styleUrl: './show-message.component.css'
})
export class ShowMessageComponent {

  mensaje: string = '';

  resetMessage() {
   this.mensaje = '';
  }

  showMessage(){
    this.mensaje = 'You have clicked the button';
  }

}
