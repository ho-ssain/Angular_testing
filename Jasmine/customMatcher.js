const customMatcher = {
  toBeCalculator: () => {
    return {
      compare: (actual, expected) => {
        const result = {
          pass: false,
          message: "",
        };
        actual instanceof Calculator
          ? (result.pass = true)
          : (result.pass = false);
        result.message = "Expected Calculator instance";
        return result;
      },
    };
  },
};
