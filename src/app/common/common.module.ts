import { NgModule } from '@angular/core';
import * as ng_common from '@angular/common';
import { NumberComponent } from './number/number.component';




const EXPORTED_MODULES = [
  ng_common.CommonModule
];

const EXPORTED_DECLARATIONS = [
  NumberComponent
];







@NgModule({
  imports: [
    ...EXPORTED_MODULES
  ],
  exports: [
    ...EXPORTED_MODULES,
    ...EXPORTED_DECLARATIONS
  ],
  declarations: [
    ...EXPORTED_DECLARATIONS
  ]
})
export class CommonModule { }
