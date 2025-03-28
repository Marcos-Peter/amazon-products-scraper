import pluginJs from '@eslint/js';
import securityPlugin from 'eslint-plugin-security';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    securityPlugin.configs.recommended,
    {
        files: ['**/*.ts'],
    },
    {
        languageOptions: { globals: globals.node },
    },
    {
        rules: {
            'func-style': ['error', 'expression'],
            'no-restricted-syntax': ['off', 'ForOfStatement'],
            'no-console': ['warn'],
            'prefer-template': 'error',
            quotes: ['error', 'single', { avoidEscape: true }],
        },
    },
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        },
    },
    pluginJs.configs.recommended,
    ...tsPlugin.configs.recommended,
];
