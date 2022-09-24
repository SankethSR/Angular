import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, timeInterval } from 'rxjs';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  @Output() startButtonPressed = new EventEmitter<number>();
  interval:any;
  count:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onStartButtonPressed() {
    this.interval = interval(1000)
      .pipe(timeInterval())
      .subscribe(()=> {
        this.startButtonPressed.emit(this.count++);
      }) 
  }
  onStopButtonPressed() {
    this.interval.unsubscribe();
  }
}
