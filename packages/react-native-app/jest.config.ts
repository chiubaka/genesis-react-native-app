export default {
  displayName: "react-native-app",
  preset: "react-native",
  resolver: "@nx/jest/plugins/resolver",
  setupFilesAfterEnv: ["<rootDir>/test/setup/setup.ts"],
  moduleNameMapper: {
    "\\.svg$": "@nx/react-native/plugins/jest/svg-mock",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "html", "json"],
  coverageDirectory: "../../reports/coverage/packages/react-native-app",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        addFileAttribute: "true",
        classNameTemplate: "{suitename}",
        outputDirectory: "reports/junit",
        outputName: "react-native-app.xml",
      },
    ],
  ],
};
