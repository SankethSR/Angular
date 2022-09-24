import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input('srvElement')
  element: { name: string; content: string; type: string; };

  constructor() {
  }

  ngOnInit(): void {
  }



}
