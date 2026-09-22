export function sum (a, b) {

  return a + b;

}

export class Counter {

  constructor (start) {

    this.value = start;

  }

  increment () {

    this.value += 1;

    return this.value;

  }

}

const numbers = [1, 2, 3];
const doubled = numbers.map((number) => number * 2);

export default doubled;
