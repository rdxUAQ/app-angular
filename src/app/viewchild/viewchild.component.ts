import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {


  @ViewChild('referenceInpt') inptElmnt!: ElementRef;

  changeText() {

    this.inptElmnt.nativeElement.value='Changed: new text';
    
  }

}
