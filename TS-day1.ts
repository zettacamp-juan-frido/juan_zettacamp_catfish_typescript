function TS(Learning: string, num1: number, num2, check: boolean) {
  if (check) {
    let LS = Learning;
    const number1 = num1;
    let number2: number = num2;
    const Typescript = LS + number1 + number2;
    return Typescript;
  } else {
    console.log({
      "type of argument Learning": typeof Learning,
      "type of argument Number1": typeof num1,
      "type of argument Number2": typeof num2,
    });
  }
}

const CK = true;
let ts = TS("Learning Typescript is different than Javascript", 9, 19, CK);
console.log(ts);
