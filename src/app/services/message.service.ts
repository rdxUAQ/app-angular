import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string = 'This is a message frome message service';

  constructor() { }

  public getMessage():string{

    return this.message;
    
  }
}
