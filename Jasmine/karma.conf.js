module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["./customMatcher.js", "*.js", "*.spec.js"],
    plugins: ["karma-jasmine", "karma-chrome-launcher", "karma-coverage"],
    preprocessors: {
      "*.js": "coverage",
    },
    reporters: ["dots", "coverage"],
    colors: true,
    singleRun: true,
    browsers: ["ChromeHeadless"],
    coverageReporter: {
      type: "html",
      dir: "coverage/",
    },
  });
};
