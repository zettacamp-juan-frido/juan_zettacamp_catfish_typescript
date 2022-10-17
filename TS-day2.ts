type caseType = "case1" | "case2";

const TS: {
  case1: [number, string, string, string];
  case2: string[];
} = {
  case1: [1, "data", "3", "result"],
  case2: ["Bejo", "has", "4", "sport", "car"],
};

// console.log(TS.case1.join(" "));

// console.log(TS.case2.join(" "));

function Case(type: caseType) {
  let result;
  if (type === "case1") {
    result = TS.case1.join(" ");
  } else {
    result = TS.case2.join(" ");
  }
  return result;
}

let case1Type = Case("case1");
console.log(case1Type);

let case2Type = Case("case2");
console.log(case2Type);
