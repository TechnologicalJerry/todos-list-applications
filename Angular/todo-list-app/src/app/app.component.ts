import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list-app';
  constructor() {
    setTimeout(() => {
      this.title = "The Todo list is running";

    }, 3000);
  }
}
