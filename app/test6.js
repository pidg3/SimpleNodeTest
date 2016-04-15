class Greeting {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    throw new Error('I don\'t know how to speak!')
  }
}

// Add your new classes here
export class English extends Greeting {

}

export class French extends Greeting {

}

export class Spanish extends Greeting {

}
