import { mixinDisabled } from './disabled';

describe('MixinDisabled', () => {
  it('should add a property `disabled` to an existing class', () => {
    class EmptyClass { }

    let classWithDisabled = mixinDisabled(EmptyClass);
    let instance = new classWithDisabled();

    instance.disabled = true;

    expect(instance.disabled).toBe(true, 'Expected to have a `disabled` property');
  });
});
