import { Component, OnInit } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MdInput } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';
import { MD_RADIO_DIRECTIVES } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import {MdUniqueSelectionDispatcher} from "@angular2-material/core/core";



@Component({
  moduleId: module.id,
  selector: 'app-material-test',
  templateUrl: 'material-test.component.html',
  styleUrls: ['material-test.component.css'],
  providers: [MdUniqueSelectionDispatcher],
  directives: [
    MD_CARD_DIRECTIVES,
    MdCheckbox,
    MD_GRID_LIST_DIRECTIVES,
    MdInput,
    MD_LIST_DIRECTIVES,
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    MD_RADIO_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_SLIDE_TOGGLE_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdIcon,
    MD_BUTTON_DIRECTIVES
  ],
  template: `
  <div>
    <h1>Example Material Design Components</h1>
  </div>
  <div>
    <h2>Button Example</h2>
    <button md-raised-button color='primary'>this is a magical button</button>
  </div>

  <div>
    <h2>Icon Example</h2>
    <button md-raised-button color='primary'><md-icon>home</md-icon></button>
  </div>

  <div>
    <h2>Card Example</h2>
    <div>
      <md-card>
        basic card
      </md-card>
    </div>
  </div>

  <div>
    <h2>Grid List Example</h2>
    <md-grid-list cols="4" [style.background]="'lightblue'">
      <md-grid-tile>One</md-grid-tile>
      <md-grid-tile>Two</md-grid-tile>
      <md-grid-tile>Three</md-grid-tile>
      <md-grid-tile>Four</md-grid-tile>
    </md-grid-list>
  </div>

  <div>
    <h2>Input Example</h2>
      <md-card>
        <md-input placeholder="Character count (100 max)" maxLength="100" class="demo-full-width"
            value="Hello world. How are you?"
            #characterCountHintExample>
            <md-hint align="end">{{characterCountHintExample.characterCount}} / 100</md-hint>
        </md-input>
      </md-card>
  </div>

  <div>
    <h2>List Example</h2>
      <md-card>
        <md-list>
          <md-list-item> Pepper </md-list-item>
          <md-list-item> Salt </md-list-item>
          <md-list-item> Paprika </md-list-item>
        </md-list>
      </md-card>
  </div>

  <div>
    <h2>Progress Bar Example</h2>
      <md-progress-bar mode="indeterminate" color="primary"></md-progress-bar>
  </div>

  <div>
    <h2>Progress Circle Example</h2>
    <md-progress-circle mode="indeterminate" color="warn"></md-progress-circle>
  </div>

  <div>
    <h2>Tabs Example</h2>
    <md-tab-group>
      <md-tab>
        <template md-tab-label>One</template>
        <template md-tab-content>
          <h1>Some tab content</h1>
          <p>...</p>
        </template>
      </md-tab>
      <md-tab>
        <template md-tab-label>Two</template>
        <template md-tab-content>
          <h1>Some more tab content</h1>
          <p>...</p>
        </template>
      </md-tab>
    </md-tab-group>
  </div>

  <div>
    <h2>Toolbar Example</h2>
    <md-toolbar>
      <span>First Row</span>

      <md-toolbar-row>
        <span>Second Row</span>
      </md-toolbar-row>

      <md-toolbar-row>
        <span>Third Row</span>
      </md-toolbar-row>
    </md-toolbar>
  </div>

  <div>
    <h2>Checkbox Example</h2>
        <md-checkbox [checked]="true">I come before my label</md-checkbox>
  </div>

  <div>
    <h2>Slide Toggle Example</h2>
      <md-slide-toggle [checked]="isChecked">
        Input Binding
      </md-slide-toggle>
  </div>

  <div>
    <h2>Radio Example</h2>
    <md-radio-group>
      <md-radio-button value="option_1">1</md-radio-button>
      <md-radio-button value="option_2">2</md-radio-button>
    </md-radio-group>
  </div>
  `
})
export class MaterialTestComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
