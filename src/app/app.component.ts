import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { StandaloneComponentComponent } from './standalone-component/standalone-component.component';
import { CompInlineComponent } from "./comp-inline/comp-inline.component";
import { InterpolationCompComponent } from "./interpolation-comp/interpolation-comp.component";
import { FatherComponent } from "./father/father.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, StandaloneComponentComponent, CompInlineComponent, InterpolationCompComponent, FatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HELLO WORLD ANGULAR';
}
