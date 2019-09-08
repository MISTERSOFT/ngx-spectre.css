import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CanCheckedCtor, CanDisableCtor, HasTabIndexCtor, mixinChecked, mixinDisabled, mixinTabIndex } from '../core/common-behaviors';

/**
 * @ignore
 *
 * Boilerplate for applying mixins to SpeButton.
 */
class SpeButtonBase {
  constructor() {}
}

/**
 * Class with applied mixins.
 */
const _SpeButtonMixinBase: CanDisableCtor & CanCheckedCtor & HasTabIndexCtor
  & typeof SpeButtonBase = mixinTabIndex(mixinDisabled(mixinChecked(SpeButtonBase)));

@Component({
  selector: `button[spe-btn], a[spe-btn], input[spe-btn]`,
  exportAs: 'speBtn',
  host: {
    '[attr.disabled]': 'disabled || null',
    '[class.disabled]': 'disabled',
    '[attr.tabindex]': 'tabindex',
    '[class.active]': 'checked',
    '(click)': '_onClick()'
  },
  templateUrl: 'button.html',
  inputs: ['checked', 'disabled', 'tabindex'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeButtonComponent extends _SpeButtonMixinBase {
  constructor() {
    super();
  }

  _onClick() {
    if (this.disabled) return;
    this.toggle();
  }

  toggle() {
    this.checked = !this.checked;
  }
}

