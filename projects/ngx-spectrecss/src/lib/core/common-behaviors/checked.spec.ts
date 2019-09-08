import { mixinChecked } from './checked';

describe('MixinChecked', () => {
  it('should add a property `checked` to an existing class', () => {
    class EmptyClass { }

    let classWithChecked = mixinChecked(EmptyClass);
    let instance = new classWithChecked();

    instance.checked = true;

    expect(instance.checked).toBe(true, 'Expected to have a `checked` property');
  });
});
