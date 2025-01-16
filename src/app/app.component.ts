import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';
import { CompInlineComponent } from "./comp-inline/comp-inline.component";
import { InterpolationCompComponent } from "./interpolation-comp/interpolation-comp.component";
import { EncapTsjsComponent } from "./encap-tsjs/encap-tsjs.component";
import { ShowMessageComponent } from "./show-message/show-message.component";
import { ReplicatorComponent } from "./replicator/replicator.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, StandaloneComponentComponent, CompInlineComponent, InterpolationCompComponent, EncapTsjsComponent, ShowMessageComponent, ReplicatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HELLO WORLD ANGULAR';
}
