import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test4.js' and write a function that will add all the numbers from 0 to 100.

You must not use the + operator.
This includes ++ and +=
*/

describe('0-100 addition', () => {
  it('Sum numbers 0 to 100', () => {
    let add0to100 = require('../app/test4').default
    expect(add0to100()).to.equal(5050);
  })
});
