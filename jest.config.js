module.exports = {
  "transform": {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  "testRegex": "(.test)\\.(ts|tsx)$",
  "testPathIgnorePatterns": [
    "/node_modules/"
  ],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "json",
    "ts",
    "tsx"
  ]
}
