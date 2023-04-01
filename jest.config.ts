import type { Config } from "jest";

const config: Config = {
  automock: false,
  clearMocks: true,
  collectCoverageFrom: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "!./**/index.{js,ts}",
    "!./**/helpers/**",
    "!./**/interfaces/**",
    "!./**/types/**",
    "!./**/*.d.ts",
  ],
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
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test/jest.setup.ts", "jest-extended/all"],
  testEnvironment: "jsdom",
};

export default config;
