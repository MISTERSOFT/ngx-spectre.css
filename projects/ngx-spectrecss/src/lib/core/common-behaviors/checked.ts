import { Constructor } from './constructor';

/**
 * @ignore
 */
export interface CanChecked {
  /**
   * Whether the component is checked.
   */
  checked: boolean;
}

/**
 * @ignore
 */
export type CanCheckedCtor = Constructor<CanChecked>;

/**
 * Mixin that add a `checked` property to a directive.
 */
export function mixinChecked<T extends Constructor<{}>>(baseClass: T): CanCheckedCtor & T {
  return class extends baseClass {
    private _checked: boolean = false;

    get checked() { return this._checked; }
    set checked(value: boolean) { this._checked = value; }

    constructor(...args: any[]) { super(...args); }
  };
}
