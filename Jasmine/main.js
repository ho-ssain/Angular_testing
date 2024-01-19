function calculate(value) {
  const inputValue = value;
  const regExp = /\+|\-|\*|\//gm;
  const numberValue = inputValue.split(regExp);

  const n1 = +numberValue[0];
  const n2 = +numberValue[1];

  // console.log(n1, n2);

  const operator = inputValue.match(regExp)?.[0];

  if (isNaN(n1) || isNaN(n2) || operator === null) {
    updateResult("Expression not recognized!");
    return;
  }

  const calculator = new Calculator();
  calculator.add(n1);
  let result;

  switch (operator) {
    case "+":
      calculator.add(n2);
      result = calculator.result;
      break;
    case "-":
      calculator.subtract(n2);
      result = calculator.result;
      break;
    case "*":
      calculator.multiply(n2);
      result = calculator.result;
      break;
    case "/":
      calculator.divide(n2);
      result = calculator.result;
      break;
  }

  updateResult(result);
}

function updateResult(result) {
  const element = document.getElementById("result");
  if (element) {
    element.innerText = result;
  }
}

function showVersion() {
  const calculator = new Calculator();
  const element = document.getElementById("version");
  // debugger;
  if (element) {
    calculator.version.then((v) => {
      element.innerText = v;
    });
  }
}

document.getElementById("input") &&
  document.getElementById("input").addEventListener("change", (event) => {
    calculate(event.target.value);
  });
