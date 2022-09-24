import { Component, EventEmitter } from '@angular/core';
import { ServerModel } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  serverElements = [
    {name: 'server1', content: 'server1 content', type: 'server'}];

  constructor() {
  }

  ngOnInit(): void {
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      name: serverData.serverName,
      content: serverData.serverContent,
      type: 'server'
    });
  }

  onBluePrintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent,
      type: 'blueprint'
    });
  }

}
