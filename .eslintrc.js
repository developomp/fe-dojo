module.exports = {
    root: true,

    parser: "@typescript-eslint/parser",

    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:prettier/recommended",
        "next/core-web-vitals",
    ],

    plugins: ["import", "simple-import-sort", "@typescript-eslint"],

    rules: {
        // https://github.com/lydell/eslint-plugin-simple-import-sort
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",

        // https://github.com/import-js/eslint-plugin-import
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-anonymous-default-export": "off",
        "import/no-duplicates": "error",

        // https://github.com/typescript-eslint/typescript-eslint
        "@typescript-eslint/no-non-null-assertion": "off", // https://typescript-eslint.io/rules/no-non-null-assertion
        "@typescript-eslint/consistent-type-imports": "error", // https://typescript-eslint.io/rules/consistent-type-imports
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
    },
}
