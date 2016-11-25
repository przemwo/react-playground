import expect from 'expect';
import * as index from './index';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
  it('counter', () => {
    expect(
      index.counter(0, { type: 'INCREMENT' })
    ).toEqual(1);
    expect(
      index.counter(1, { type: 'INCREMENT' })
    ).toEqual(2);
    expect(
      index.counter(1, { type: 'DECREMENT' })
    ).toEqual(0);
    expect(
      index.counter(1, { type: 'UNKNOWN_ACTION' })
    ).toEqual(1);
    expect(
      index.counter(undefined, {})
    ).toEqual(0);
  });
  console.log('Passed!!!');
});
