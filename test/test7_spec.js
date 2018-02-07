import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test7.js' and write a function that will extend String so you can call "String".reverse()

The extension must return the string passed in, but in reverse order.
*/

describe('String reverse', () => {
  it('reverse string woopwoop', () => {
    let test7 = require('../app/test7').default
    expect(test7("woopwoop")).to.equal("poowpoow");
  })

  it('palindrome, just for fun', () => {
    let test7 = require('../app/test7').default
    expect(test7("kayak")).to.equal("kayak");
  })
});
