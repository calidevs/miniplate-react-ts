/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
  moduleNameMapper: {
    // if your using tsconfig.paths thers is no harm in telling jest
    "@components/(.*)$": "<rootDir>/src/components/",
    "@/(.*)$": "<rootDir>/src/",

    // mocking assests and styling
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/mocks/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/tests/mocks/styleMock.ts",
    /* mock models and services folder */
    "(assets|models|services)": "<rootDir>/tests/mocks/fileMock.ts",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["<rootDir>"],
};
