import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greetings-twb',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './greetings-twb.component.html',
  styleUrl: './greetings-twb.component.css'
})
export class GreetingsTwbComponent {
  greeting: string = 'This is a greeting: HI!!'

}
