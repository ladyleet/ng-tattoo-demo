/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MaterialTestComponent } from './material-test.component';

describe('Component: MaterialTest', () => {
  it('should create an instance', () => {
    let component = new MaterialTestComponent();
    expect(component).toBeTruthy();
  });
});
