import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MaterialTestComponent } from './material-test';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MD_BUTTON_DIRECTIVES,
    MdIcon,
    MaterialTestComponent
  ],
  providers: [MdIconRegistry],
  template: `
    <div><app-material-test></app-material-test></div>
  `
})
export class AppComponent {
  title = 'app works!';
}
