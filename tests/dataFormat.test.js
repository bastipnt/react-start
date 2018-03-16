import { toDay, toWeekDay, toMonth } from '../src/utils/dateFormat';

const date = new Date('2017-10-04T00:00:00');

describe('toDay', () => {
  it('should return 2-digit day', () => {
    expect(toDay(date)).toBe('04');
  });
});

describe('toWeekDay', () => {
  it('should return the long weekday', () => {
    expect(toWeekDay(date)).toBe('Wednesday');
  });
});

describe('toMonth', () => {
  it('should return the long month', () => {
    expect(toMonth(date)).toBe('October');
  });
});
