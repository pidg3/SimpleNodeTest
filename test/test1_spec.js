import { expect } from 'chai'
import 'babel-polyfill'

import names from '../data/names';
import people from '../data/people';

/*
Modify the contents of 'app/test1.js' and implement the functions: filterNames, objectFilter, compoundObjectFilter

filterNames - should take an array of strings and a search string.
It should return an array of names that start with the search string

objectFilter - should take an array of objects, a key, and a search string
It should return an array of objects that have a key that is equal to the search string

compoundObjectFilter - should take an array of objects, a string with multiple keys separated by "."s and a search string.
It should return an array of objects that have a key that equals the search string
*/

import {filterNames, objectFilter, compoundObjectFilter} from '../app/test1';

describe('Array filtering', () => {
  it('can filter a list of strings that start with a string', () => {
    const startsWithJ = filterNames(names, 'J');
    expect(startsWithJ.length, 'Expected 1 person to have a name that starts with J').to.equal(1);
    expect(startsWithJ[0]).to.equal('Jim');

    const startsWithBarn = filterNames(names, 'Barn');
    expect(startsWithBarn.length, 'Expected 2 people to have a name that starts with Barn').to.equal(2);
    expect(startsWithBarn[0]).to.equal('Barnaby');
    expect(startsWithBarn[1]).to.equal('Barny');

    const noResults = filterNames(names, 'Mr. Biggins');
    expect(noResults.length, 'Expected no results').to.equal(0);
  });

  it('can filter a list of objects by the value of a key', () => {
    const males = objectFilter(people, 'sex', 'male');
    expect(males.length, 'Males').to.equal(4);

    const females = objectFilter(people, 'sex', 'female');
    expect(females.length, 'Females').to.equal(2);
  });

  it('can filter a list of objects by the value of a compound key', () => {
    const london = compoundObjectFilter(people, 'address.town', 'London');
    expect(london.length, 'Males').to.equal(3);

    const edinburgh = compoundObjectFilter(people, 'address.town', 'Edinburgh');
    expect(edinburgh.length, 'Males').to.equal(2);
  });
});
