function TS(Learning, num1, num2, check) {
    if (check) {
        var LS = Learning;
        var number1 = num1;
        var number2 = num2;
        var Typescript = LS + number1 + number2;
        return Typescript;
    }
    else {
        console.log({
            "type of argument Learning": typeof Learning,
            "type of argument Number1": typeof num1,
            "type of argument Number2": typeof num2
        });
    }
}
var CK = true;
var ts = TS("Learning Typescript is different than Javascript", 9, 19, CK);
console.log(ts);
