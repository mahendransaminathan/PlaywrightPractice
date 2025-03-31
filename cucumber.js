module.exports = {
  default: {
    require: ["tests/steps/**/*.js"],  // Load step definitions
    format: ["html:cucumber-report.html"],  // Generate HTML report
    publishQuiet: true,
    paths: ["tests/features/**/*.feature"]  // Load feature files
  }
};
