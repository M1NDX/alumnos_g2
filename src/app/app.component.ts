import { Component, OnInit } from '@angular/core';

// APP.COMPONENT.TS
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  entrada = 'Pérez';

  constructor() { }

  ngOnInit() {

  }

  activar(): boolean {
    return this.entrada.length > 3;
  }

}
