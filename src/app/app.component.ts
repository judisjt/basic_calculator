import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result = 0;
  total = [];
  a = 0;
  b = 0;
  addToCalculation(value) {
    this.result += value;
  }
  enterButton() {
    this.total.push(this.result);
    if (this.total.length === 2) {
      this.result = Number(this.total[0]) + Number(this.total[1]);
      this.total = [];
      this.total.push(this.result);
  }
  }
  deleteKey() {
    this.result = 0;
  }
  eraseKey() {
    this.total = [];
  }
}
