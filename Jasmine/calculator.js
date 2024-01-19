// Custom Error...........
class ArithmeticError extends Error {
  constructor(message) {
    super(message);
    this.name = "ArithmeticError";
  }
}

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = "BadRequestError";
  }
}

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(n) {
    return (this.result += n);
  }

  subtract(n) {
    return (this.result -= n);
  }

  multiply(n) {
    return (this.result *= n);
  }

  divide(n) {
    if (n === 0) throw new ArithmeticError("Number can not be Zero!");
    return (this.result /= n);
  }
}

Object.defineProperty(Calculator.prototype, "version", {
  get: () => {
    return fetch(
      "https://gist.githubusercontent.com/ho-ssain/13e3be4a79e42abe04fe2d1334148698/raw/5677ad0d4081917537eee94338b145cc2dd6d95d/versions.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((jd) => {
        return jd.version;
      });
  },
  configurable: true,
  enumerable: true,
});
