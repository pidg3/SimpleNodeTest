import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test8.js' and write a function that will add all the numbers from 0 to 100.

You must not use the + operator.
This includes ++ and +=
*/

describe('0-100 addition', () => {
  it('Sum numbers 0 to 100', () => {
    let test8 = require('../app/test8').default
    expect(test8()).to.equal(5050);
  })
});
