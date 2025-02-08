import { Component, ViewChild } from '@angular/core';
import { SonComponent } from "./son/son.component";

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [SonComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {



  public messageFather: string = 'This is a message from father comp';
  public messageFromSon : string = '';
  
  @ViewChild(SonComponent) sonComp!: SonComponent;

  recieveNotifycation(message: string) {

    this.messageFromSon = message;

  }

  changeMessageSon() {

    this.sonComp.changemessageVC('Updated from father');

  }

}
