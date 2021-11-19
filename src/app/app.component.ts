import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Eaglex';
  count = 0;

  plus() {
    this.count++;
    return this.count;
  }

  minus() {
    this.count--;
    return this.count;
  }
}
