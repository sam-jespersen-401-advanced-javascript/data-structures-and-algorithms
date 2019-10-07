const { validateBrackets } = require('../challenges/multiBracketValidation/multi-bracket-validation');

describe('validates mutliple brackets', () => {
  it('validates balanced brackets', () => {

    expect(validateBrackets('{}')).toBeTruthy();
    expect(validateBrackets('{}(){}')).toBeTruthy();
    expect(validateBrackets('()[[Extra Characters]]')).toBeTruthy();
    expect(validateBrackets('(){}[[]]')).toBeTruthy();
    expect(validateBrackets('{}{Code}[Fellows](())')).toBeTruthy();

  });

  it('does not validate unbalanced brackets', () => {
    expect(validateBrackets('[({}]')).toBeFalsy();
    expect(validateBrackets('(](')).toBeFalsy();
    expect(validateBrackets('{(})')).toBeFalsy();
    expect(validateBrackets('{')).toBeFalsy();
    expect(validateBrackets(')')).toBeFalsy();
    expect(validateBrackets('[}')).toBeFalsy();
    expect(validateBrackets('[[sdsdds])')).toBeFalsy();
  });
});