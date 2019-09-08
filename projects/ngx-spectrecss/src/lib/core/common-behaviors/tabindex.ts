import { coerceNumberValue } from '../coercion';
import { Constructor } from './constructor';
import { CanDisable } from './disabled';

/**
 * @ignore
 */
export interface HasTabIndex {
  /**
   * Tabindex of the component.
   */
  tabindex: number;
}

/**
 * @ignore
 */
export type HasTabIndexCtor = Constructor<HasTabIndex>;

/**
 * Mixin that add a `tabIndex` property to a directive.
 */
export function mixinTabIndex<T extends Constructor<CanDisable>>(base: T, defaultTabIndex = 0) : HasTabIndexCtor & T {
  return class extends base {
    private _tabindex: number = defaultTabIndex;

    get tabindex(): number { return this.disabled ? -1 : this._tabindex; }
    set tabindex(value: number) { this._tabindex = coerceNumberValue(value, defaultTabIndex); }

    constructor(...args: any[]) { super(...args); }
  };
}
