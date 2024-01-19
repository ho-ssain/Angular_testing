//Suite (group of tests/specs)

describe("calculator.js", () => {
  //...............................
  describe("calculator", () => {
    let calculator;
    let calculator2;
    beforeEach(() => {
      // execute before execution of each spec in the suite
      calculator = new Calculator();
      calculator2 = new Calculator();
    });

    afterEach(() => {
      // execute after execution of each spec in the suite
    });

    describe("add", () => {
      it("should add two numbers", () => {
        calculator.add(5);
        expect(calculator.result).toBe(5);
      });
    });

    describe("subtract", () => {
      it("should subtract two numbers", () => {
        calculator.result = 30;
        expect(calculator.subtract(10)).toBe(20);
      });
    });

    describe("multiply", () => {
      it("should multiply two numbers", () => {
        calculator.result = 10;
        expect(calculator.multiply(3)).toBe(30);
      });
      // toBeNaN
      it("does not handle NaN for multiply", () => {
        calculator.result = 10;
        calculator.multiply("a");
        expect(calculator.result).toBeNaN();
      });
    });

    describe("division", () => {
      it("should divide two numbers", () => {
        calculator.result = 10;
        expect(calculator.divide(2)).toBe(5);
        expect(3).toBe(3);
      });
      //toThrow
      it("it should throw an error when divide by Zero!", () => {
        calculator.result = 10;
        expect(() => calculator.divide(0)).toThrow(
          new Error("Number can not be Zero!")
        );
      });
      // toThrowError
      it("should throw an error with message when divide by Zero!", () => {
        calculator.result = 10;
        expect(() => calculator.divide(0)).toThrowError(
          ArithmeticError,
          "Number can not be Zero!"
        );
      });
    });

    describe("get version", () => {
      it("fetches version from external source", () => [
        calculator.version.then((v) => {
          expect(v).toBe("0.8");
        }),
      ]);
    });
    it("should initialized the total", () => {
      expect(calculator.result).toBe(0);
    });

    // To Equal MAtcher
    it("should initialized the constructor", () => {
      // calculator1.result = 34;

      // expect(calculator1).toBe(calculator2);
      expect(calculator).toBeTruthy();
      expect(calculator).toEqual(calculator2);
    });

    //not matcher
    it("should have unique calculator object.", () => {
      expect(calculator).not.toBe(calculator2);
    });

    // toBeDefined
    it("should have common methods", () => {
      expect(calculator.add).not.toBeUndefined();
      expect(calculator.subtract).toBeDefined();
    });

    // toBeNull
    it("can override total value", () => {
      calculator.result = null;
      expect(calculator.result).toBeNull();
    });

    // toContain
    it("toContain", () => {
      let arr = [1, 2, 3, 4, 5];
      expect(arr).toContain(3);

      expect(calculator.constructor.name).toContain("Calc");
    });

    //toMatch
    it("should return result as type number", () => {
      calculator.result = 10;
      expect(calculator.result).toMatch(/-?\d+/);
    });

    // anything
    it("should return the result as value", () => {
      calculator.result = 10;
      expect(calculator.result).toEqual(jasmine.anything());
      // expect(null).toEqual(jasmine.anything());
      // expect(undefined).toEqual(jasmine.anything());
    });

    // any

    it("should be an instance", () => {
      jasmine.addMatchers(customMatcher);
      calculator.result = 10;
      expect(calculator).toEqual(jasmine.any(Object));
      expect(calculator.result).toEqual(jasmine.any(Number));
      expect(calculator.result).not.toBeCalculator();
    });

    // ObjectContaining
    // StringContaining

    it("should contain result as key", () => {
      calculator.result = 10;
      expect(calculator).toEqual(
        jasmine.objectContaining({
          result: 10,
        })
      );

      expect(typeof calculator.result).toEqual(jasmine.stringContaining("mbe"));
    });
  });

  //................................
});
