const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");

module.exports = {
    "preset": "ts-jest",
    "testMatch": [
        "**/__tests__/**/*.test.ts"
    ],
    "moduleNameMapper": pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/../" } ),
    "globals": {
        "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.json",
            "diagnostics": {
                "warnOnly": true
            }
        }
    }
};
