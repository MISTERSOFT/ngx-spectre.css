import { NgModule } from '@angular/core';
import { SpeButtonComponent } from './button';
import { SpeButtonGroupComponent } from './button-group';

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
export class SpeButtonModule {
  // static forRoot(config: NgxSpectrecssConfig = {}): ModuleWithProviders {
  //   return {
  //     ngModule: SpeButtonModule
  //     // providers: [
  //     //   config.checkboxButtonStates || { provide: NGX_SPECTRECSS_CHECKBOX_BUTTON_STATES_CONFIG, useClass: DEFAULT_NGX_SPECTRECSS_CHECKBOX_BUTTON_STATES_CONFIG }
  //     // ]
  //   }
  // }
}
