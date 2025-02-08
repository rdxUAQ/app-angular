import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {


  @Input() message!: string;

  @Output() notifyFather = new EventEmitter<string>();
  
  public messageVC: string = 'Message from son component';

  sendMessage() {
    //emmite event with a message 
    this.notifyFather.emit('message to father from son component')
    }

  public changemessageVC(newMessageVC: string){
    this.messageVC = newMessageVC;
  }


}
