module.exports = {
  displayName: "jest-coverage",
  globals: {
    "ts-jest": {
      skipBabel: true,
    },
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageDirectory: "./coverage",
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ["text", "json"],
};
