import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test4.js' and implement a function that will return an array of prime numbers.

https://en.wikipedia.org/wiki/Prime_number

The function must take an number argument and generate all the prime numbers that appear BEFORE the argument.
*/

describe('Prime numbers', () => {
  it('should handle an empty argument', () => {
    let test4 = require('../app/test4').default
    expect(test4()).to.eql([]);
  })

  it('should handle an argument of 0', () => {
    let test4 = require('../app/test4').default
    expect(test4(0)).to.eql([]);
  })

  //Apparently, 1 isn't a prime number
  it('should return nothing for argument of 1', () => {
    let test4 = require('../app/test4').default
    expect(test4(1)).to.eql([]);
  })

  it('should give an empty array for 2', () => {
    let test4 = require('../app/test4').default
    expect(test4(2)).to.eql([]);
  })

  it('should handle argument of 3', () => {
    let test4 = require('../app/test4').default
    expect(test4(3)).to.eql([2]);
  })

  it('try 10 for size', () => {
    let test4 = require('../app/test4').default
    expect(test4(10)).to.eql([2,3,5,7]);
  })

  it('bumping up to 50', () => {
    let test4 = require('../app/test4').default
    expect(test4(50)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47]);
  })

  it('PUSH IT TO THE LIMIT', () => {
    let test4 = require('../app/test4').default
    expect(test4(1000)).to.eql([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997]);
  })
});
