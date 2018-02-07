import { expect } from 'chai'
import 'babel-polyfill'

/*
Modify the contents of 'app/test6.js' and add 3 new classes - English, French and Spanish that extend the Greeting class.

Override the "sayHello" method to say hello in the correct language
*/

import {English, French, Spanish} from '../app/test6';

describe('Classes', () => {
  it('can speak', () => {
    const english = new English('Chris');
    expect(english.sayHello()).to.equal('Hello Chris');

    const french = new French('Chris');
    expect(french.sayHello()).to.equal('Bonjour Chris');

    const spanish = new Spanish('Chris');
    expect(spanish.sayHello()).to.equal('Hola Chris');
  });
});
