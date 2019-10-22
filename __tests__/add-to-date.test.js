const { addToDate } = require('../challenges/addToDate/addToDate');

describe('add to date', () => {

  it('returns a date', () => {

    const date = new Date(1985, 5, 17, 0, 0, 0);
    expect(addToDate(date, '1d')).toEqual(new Date(1985, 5, 18, 0, 0, 0));
    const date2 = new Date(1999, 12, 24, 0, 0, 0);
    expect(addToDate(date2, '1w')).toEqual(new Date(1999, 12, 31, 0, 0, 0));
    const date3 = new Date(1985, 5, 17, 0, 0, 0);
    expect(addToDate(date3, '1y')).toEqual(new Date(1986, 5, 17, 0, 0, 0));
    const date4 = new Date(1999, 10, 30, 6, 6, 6);
    expect(addToDate(date4, '1M')).toEqual(new Date(1999, 11, 30, 6, 6, 6));
    const date5 = new Date(1985, 5, 17, 0, 0, 0);
    expect(addToDate(date5, '1h')).toEqual(new Date(1985, 5, 17, 1, 0, 0));
    const date6 = new Date(1999, 10, 30, 6, 6, 6);
    expect(addToDate(date6, '1m')).toEqual(new Date(1999, 10, 30, 6, 7, 6));
    const date7 = new Date(1999, 10, 30, 6, 6, 6);
    expect(addToDate(date7, '1s')).toEqual(new Date(1999, 10, 30, 6, 6, 7));
  });

  it('errors on invalid input', () => {
    const date = '12/31/1977';
    expect(() => {
      addToDate(date, '1d');
    }).toThrow();
  });
});