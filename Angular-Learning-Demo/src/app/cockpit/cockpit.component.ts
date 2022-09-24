import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({ serverName: serverName.value, serverContent: this.serverContentInput.nativeElement.value });
  }

  onAddBluePrint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({ blueprintName: serverName.value, blueprintContent: this.serverContentInput.nativeElement.value })
  }
}
