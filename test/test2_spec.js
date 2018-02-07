import { expect } from 'chai'
import 'babel-polyfill'

import names from '../data/names';
import people from '../data/people';

/*
Modify the contents of 'app/test2.js' and implement the functions: capitalise, extractValue, extractCompoundValue

capitalise - should take an array of strings
It should return a new array with the strings capitalised

extractValue - should take an array of objects and a key
It should return an array of values for the key

extractCompoundValue - should take an array of objects, a string with multiple keys separated by "."s
It should return an array of values for the compound key
*/
import {capitalise, extractValue, extractCompoundValue} from '../app/test2';

describe('Array mapping', () => {
  it('should capitalise string', () => {
    const capitalised = capitalise(names);
    expect(capitalised.length, 'Should have the same number of elements as source array').to.equal(names.length);
    expect(capitalised[0]).to.equal('JIM');
    expect(capitalised[1]).to.equal('BOB');
    expect(capitalised[2]).to.equal('ARTHUR');
  });

  it('should return a value from an object', () => {
    const sexes = extractValue(people, 'sex');
    expect(sexes.length, 'Should have the same number of elements as source array').to.equal(people.length);
    people.forEach((person, index) => {
      expect(sexes[index]).to.equal(person.sex);
    });
  });

  it('should return a value from a compound key', () => {
    const towns = extractCompoundValue(people, 'address.town');
    expect(towns.length, 'Should have the same number of elements as source array').to.equal(people.length);
    people.forEach((person, index) => {
      expect(towns[index]).to.equal(person.address.town);
    });
  })
});
