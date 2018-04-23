import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test3.js' and write a function that will extend String so you can call "thisisastring".reverse()

The extension must return the string passed in, but in reverse order.
*/

describe('String reverse', () => {
  it('reverse string woopwoop', () => {
    let stringReverse = require('../app/test3').default
    expect(stringReverse("woopwoop")).to.equal("poowpoow");
  })

  it('palindrome, just for fun', () => {
    let stringReverse = require('../app/test3').default
    expect(stringReverse("kayak")).to.equal("kayak");
  })
});
