// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { inject } from 'aurelia-dependency-injection';
import { default as structure } from './structure';
import { bindable } from 'aurelia-framework';

@inject(structure)
export class index {
  @bindable selectedItem: any;
  navigationStrategy: any;
  structure: any;
  profile: any;
  constructor(structure: any) {
    this.navigationStrategy = 'left-compact';
    this.structure = structure;

    this.profile = {
      userName: 'Jane Doe'
    };
  }
  clickHam(click_id: any) {
    console.log('Ham!' , click_id);
  }
  selectedItemChanged(item: any) {}
}
