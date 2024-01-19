describe("main.js", () => {
  describe("calculate()", () => {
    it("validate expression if the 1st number is invalid!", () => {
      spyOn(window, "updateResult").and.stub();
      calculate("a+3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized!"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("validate expression if the 2nd number is invalid!", () => {
      spyOn(window, "updateResult"); // and.stub us the default one and can be omitted!
      calculate("3+a");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized!"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("validate expression if the operation is invalid!", () => {
      spyOn(window, "updateResult");
      calculate("a_3");
      expect(window.updateResult).toHaveBeenCalled();
      expect(window.updateResult).toHaveBeenCalledWith(
        "Expression not recognized!"
      );
      expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    it("Calls add", () => {
      spyOn(Calculator.prototype, "add");
      calculate("3+2");
      expect(Calculator.prototype.add).toHaveBeenCalled();
      expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
    });

    it("Calls subtract", () => {
      const spy = spyOn(Calculator.prototype, "subtract");
      calculate("3-2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("Calls multiply", () => {
      const spy = spyOn(Calculator.prototype, "multiply");
      calculate("3*2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("Calls divide", () => {
      const spy = spyOn(Calculator.prototype, "divide");
      calculate("3/2");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(2);
    });

    it("Calls updateResult (example for callThrough)", () => {
      const spy1 = spyOn(window, "updateResult");
      const spy2 = spyOn(Calculator.prototype, "multiply").and.callThrough();
      calculate("3*3");
      expect(spy1).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledWith(9);
    });

    xit("Calls updateResult (example for callFake)", () => {
      const spy1 = spyOn(window, "updateResult");
      const spy2 = spyOn(Calculator.prototype, "multiply").and.callFake(
        function () {
          return "Fake Call!";
        }
      );
      calculate("3*3");
      expect(spy1).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledWith("Fake Call!");
    });

    xit("Calls updateResult (example for returnValue)", () => {
      const spy1 = spyOn(window, "updateResult");
      const spy2 = spyOn(Calculator.prototype, "multiply").and.returnValue(
        "returns a value!"
      );
      calculate("3*3");
      expect(spy1).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalled();
      expect(spy1).toHaveBeenCalledWith("Fake Call!");
    });
  });

  describe("updateResult()", () => {
    let element;

    beforeAll(() => {
      element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
    });

    afterAll(() => {
      document.body.removeChild(element);
    });

    it("add results to the DOM element", () => {
      updateResult("5");
      expect(element.innerText).toBe("5");
    });
  });

  xdescribe("showVersion()", () => {
    it("should call the showVersion method", () => {
      spyOn(document, "getElementById").and.returnValue({
        innerText: null,
      });
      // debugger;
      const spy = spyOnProperty(
        Calculator.prototype,
        "version",
        "get"
      ).and.returnValue("0.8");
      showVersion();
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(1);
      // expect(spy).toHaveBeenCalledWith(1);
      expect(spy()).toEqual("0.7");
    });
  });
});
