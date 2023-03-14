module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
	"\\.(css|less|scss)$": "identity-obj-proxy",
  }
}