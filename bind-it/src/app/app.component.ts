import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { timeInterval, TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bind-it';
  count: number = 0;
  startInterval: any;
  oddNumberArray: Array<number> = [];
  evenNumberArray: Array<number> = [];
  // oddNumberValue:number;
  // evenNumberValue:number;
  buttonPressed: boolean = false;

  ngOnInit(): void {

  }
  onStartButtonPressed(count: number) {
    console.log(count);
    if (count % 2 == 0) {
      this.evenNumberArray.push(count);
    } else {
      this.oddNumberArray.push(count);
    }
  }
  onButtonPressed(): void {
    if (this.buttonPressed) {
      this.buttonPressed = false;
    } else {
      this.buttonPressed = true;
    }
  }

}
