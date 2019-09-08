import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { SpeButtonComponent } from './button';

@Component({
  selector: `[spe-btn-group]`,
  exportAs: 'speBtnGroup',
  templateUrl: 'button-group.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeButtonGroupComponent {
  /**
   * Buttons contained in the group.
   */
  @ContentChildren(SpeButtonComponent) _buttons: QueryList<SpeButtonComponent>;

  @Input() set disableGroup(disabled: boolean) { this._toggleDisablePropButtons(disabled); }

  private _disableGroup: boolean = false;

  constructor() { }

  /**
   * Enable all buttons of the group.
   */
  enable() {
    this._toggleDisablePropButtons(false);
  }

  /**
   * Disable all buttons of the group.
   */
  disable() {
    this._toggleDisablePropButtons(true);
  }

  /**
   * Check all buttons of the group.
   */
  checkAll() {
    this._toggleCheckPropButtons(true);
  }

  /**
   * Uncheck all buttons of the group.
   */
  uncheckAll() {
    this._toggleCheckPropButtons(false);
  }

  /**
   * Set a value to the `disabled` property of all buttons.
   *
   * @param disableGroup Boolean that enable/disable buttons.
   */
  private _toggleDisablePropButtons(disableGroup: boolean) {
    if (this._buttons.length > 0) {
      this._disableGroup = disableGroup;
      this._buttons.forEach(btn => btn.disabled = disableGroup);
    }
  }

  /**
   * Set a value to the `checked` property of all buttons.
   *
   * @param checkGroup Boolean that check/uncheck buttons.
   */
  private _toggleCheckPropButtons(checkGroup: boolean) {
    if (this._buttons.length > 0) {
      this._buttons.forEach(btn => btn.checked = checkGroup);
    }
  }
}
