import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test10.js' and implement a function that returns the 1st input parameter
divided by the 2nd input parameter.

The function should throw an Error if:
  * The input parameters are not 2 numbers
  * The denominator (the second parameter) is zero
  * The result is not a whole number (i.e. the result 4 would be good, but 4.3 would be bad)

NOTE: Use the error variables defined at the top of test/test10.js for the correct error messages needed to pass the tests.
*/

import division, { numberErrMsg, denominatorErrMsg, resultErrMsg } from '../app/test10.js';

describe('Validation', () => {
  it('Throws error if first argument is string', () => {
    expect(() => division('i-am-a-string', 4)).to.throw(Error, numberErrMsg);
  });
  it('Throws error if second argument is undefined', () => {
    expect(() => division(50)).to.throw(Error, numberErrMsg);
  });
  it('Throws error if first argument is null', () => {
    expect(() => division(null, 50)).to.throw(Error, numberErrMsg);
  });
  it('Throws error if second argument is 0', () => {
    expect(() => division(12, 0)).to.throw(Error, denominatorErrMsg);
  });
  it('Throws error if result is not a whole number', () => {
    expect(() => division(12, 5)).to.throw(Error, resultErrMsg);
    expect(() => division(200, 17)).to.throw(Error, resultErrMsg);
  });
  it('Returns correct value if validation passes', () => {
    expect(() => division(12, 4)).to.not.throw();
    expect(division(12, 4)).to.equal(3);
    expect(division(16, 4)).to.equal(4);
    expect(division(1024, 64)).to.equal(16);
  });
});
