module.exports = wallaby => {
  return {
    files: ["tsconfig.json", "src/**/!(*.test).ts", { pattern: "package.json", instrument: false }],
    tests: ["src/**/*.test.ts"],
    env: {
      type: "node",
    },
    testFramework: "jest",
  }
}
