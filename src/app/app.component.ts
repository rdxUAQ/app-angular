import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';
import { CompInlineComponent } from "./comp-inline/comp-inline.component";
import { InterpolationCompComponent } from "./interpolation-comp/interpolation-comp.component";
import { EncapTsjsComponent } from "./encap-tsjs/encap-tsjs.component";
import { ShowMessageComponent } from "./show-message/show-message.component";
import { ReplicatorComponent } from "./replicator/replicator.component";
import { GreetingsTwbComponent } from "./greetings-twb/greetings-twb.component";
import { CompIfComponent } from "./comp-if/comp-if.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { CompForComponent } from "./comp-for/comp-for.component";
import { FatherComponent } from "./father/father.component";
import { ViewchildComponent } from "./viewchild/viewchild.component";
import { MessageService } from './services/message.service';
import { UsersListObservableComponent } from "./users-list-observable/users-list-observable.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, StandaloneComponentComponent, CompInlineComponent, InterpolationCompComponent, EncapTsjsComponent, ShowMessageComponent, ReplicatorComponent, GreetingsTwbComponent, CompIfComponent, AddTaskComponent, CompForComponent, FatherComponent, ViewchildComponent, UsersListObservableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Services Observable Users';

  public message!: string;

  private _messageService : MessageService;

  constructor(messageService : MessageService){

    this._messageService = messageService;

    this.message = this._messageService.getMessage();
  }
}
