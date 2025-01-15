import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-inline',
  standalone: true,
  imports: [],
  template: `
    <h1>{{titleCompInline}}</h1>
    <p>
      comp-inline works! <br>
      with bigger font
    </p>
  `,

  styles: `
  h1{
    color: blue;
  }
  p{
    font-size: 20px;
  }

  `
})
export class CompInlineComponent {
  titleCompInline = 'Title compponent inline';

}
