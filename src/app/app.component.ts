import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-yapen-searchbar></app-yapen-searchbar>
    <app-yapen-roomlist></app-yapen-roomlist>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
