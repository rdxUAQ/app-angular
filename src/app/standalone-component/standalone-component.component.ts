import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-component',
  standalone: true,
  imports: [],
  templateUrl: './standalone-component.component.html',
  styleUrl: './standalone-component.component.css'
})
export class StandaloneComponentComponent {

  titleSA = 'standalone-component works!'

}
