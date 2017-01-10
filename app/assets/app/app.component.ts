import { Component }          from '@angular/core';

@Component({
//  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  `,
  styleUrls: ['assets/app/app.component.css'],
})
export class AppComponent {
  public title = 'First Steps';
}
