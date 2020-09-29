import { MockError } from './mock-error';

describe('MockError', () => {
  it('should create an instance', () => {
    expect(new MockError()).toBeTruthy();
  });
});
