import { NgModule } from '@angular/core';
import { SpeButtonComponent } from './button';
import { SpeButtonGroupComponent } from './button-group';

export { SpeButtonComponent } from './button';
export { SpeButtonGroupComponent } from './button-group';

@NgModule({
  declarations: [
    SpeButtonComponent,
    SpeButtonGroupComponent,
  ],
  imports: [],
  exports: [
    SpeButtonComponent,
    SpeButtonGroupComponent,
  ],
})
export class SpeButtonModule { }
