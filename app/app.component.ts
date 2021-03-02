import { Component } from '@angular/core';

export interface Card {
  title:string
  text:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle:boolean = true

  cards: Card[] = [
    {
      title: 'Idk',
      text: 'lorem'
    },
    {
      title: 'Title',
      text: 'lorem2'
    },
    {
      title: 'Title',
      text: 'lorem2'
    },
    {
      title: 'IdkTitle',
      text: 'lorem3'
    }
  ]

  onToggle() {
    this.toggle = !this.toggle
  }
}
