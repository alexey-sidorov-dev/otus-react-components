import type { Config } from "jest";

const config: Config = {
  automock: false,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["html", "text", "json"],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test/jest.setup.ts", "jest-extended/all"],
  testEnvironment: "jsdom",
};

export default config;
