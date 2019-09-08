import { Constructor } from './constructor';

/**
 * @ignore
 */
export interface CanDisable {
  /**
   * Whether the component is disabled
   */
  disabled: boolean;
}

/**
 * @ignore
 */
export type CanDisableCtor = Constructor<CanDisable>;

/**
 * Mixin that add a `disabled` property to a directive.
 */
export function mixinDisabled<T extends Constructor<{}>>(baseClass: T): CanDisableCtor & T {
  return class extends baseClass {
    private _disabled: boolean = false;

    get disabled() { return this._disabled; }
    set disabled(value: boolean) { this._disabled = value; }

    constructor(...args: any[]) { super(...args); }
  };
}
