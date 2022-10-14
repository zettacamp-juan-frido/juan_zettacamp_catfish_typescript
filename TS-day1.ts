function TS(Learning: string, num1: number, num2, check: boolean) {
  if (check) {
    console.log(Learning + " " + num1 + " " + num2);
  } else {
    return "We use Typescript so check your code again!!!";
  }
}

let LS = "Learning Typescript is different than Javascript";
const number1 = 9;
let number2: number = 19;
const CK = true;

TS(LS, number1, number2, CK);
