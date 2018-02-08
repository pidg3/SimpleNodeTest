import { expect } from 'chai'
import 'babel-polyfill'

import names from '../data/names';
import people from '../data/people';

/*
Modify the contents of 'app/test5.js' and implement the functions: groupBySex

groupBySex - should take an array of people
It should return a new object with keys for the value of sex and values containing array of people with that sex

groupByYearThenSex - should take an array of people
It should return a new object with keys that are the year the person was born which should have values with keys
for the sex which should have values that are arrays of people born that year with that sex.

e.g.

{ '1971': { male: [ [Object], [Object] ], female: [ [Object] ] },
  '1972': { male: [ [Object], [Object] ], female: [ [Object] ] } }

*/
import {groupBySex, groupByYearThenSex} from '../app/test5';

describe('Array reducing', () => {
  it('should group people by sex', () => {
    const sexGroups = groupBySex(people);
    expect(Object.keys(sexGroups).length).to.equal(2);
    expect(sexGroups['male']).to.not.be.undefined;
    expect(sexGroups['male'].length).to.equal(4);
    expect(sexGroups['female']).to.not.be.undefined;
    expect(sexGroups['female'].length).to.equal(2);
  });

  it('should group people by year and then by sex', () => {
    const yearSexGroups = groupByYearThenSex(people);
    expect(Object.keys(yearSexGroups).length).to.equal(2);
    expect(yearSexGroups['1971']).to.not.be.undefined;
    expect(yearSexGroups['1971']['male'].length).to.equal(2);
    expect(yearSexGroups['1971']['female'].length).to.equal(1);
    expect(yearSexGroups['1972']).to.not.be.undefined;
    expect(yearSexGroups['1972']['male'].length).to.equal(2);
    expect(yearSexGroups['1972']['female'].length).to.equal(1);
  })
});
