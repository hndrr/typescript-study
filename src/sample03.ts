function sum(a: number, b: number): number {
  return a * b;
}

//allow_function
const sum2 = (a: number, b: number): number => a * b;

let answer: number = sum2(6, 2);
console.log(answer);
