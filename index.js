import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import yml from 'eslint-plugin-yml';
import html from '@html-eslint/eslint-plugin';
import jsdoc from 'eslint-plugin-jsdoc';
import imports from 'eslint-plugin-import';
import vueParser from 'vue-eslint-parser';

export default [
    ...ts.configs.recommended,
    ...yml.configs['flat/recommended'].map((config) => ({
        ...config,
        name: 'yaml/recommended'
    })),
    ...vue.configs['flat/recommended'].map(config => ({
        ...config,
        files: ['**/*.vue'],
    })),
    {
        name: 'js/recommended',
        ...js.configs.recommended,
    },
    {
        name: 'import/recommended',
        ...imports.flatConfigs.recommended,
    },
    {
        name: 'import/typescript',
        ...imports.flatConfigs.typescript,
    },
    {
        name: 'html/recommended',
        ...html.configs['flat/recommended'],
        files: ['**/*.html'],
    },
    {
        name: 'jsdoc/recommended',
        ...jsdoc.configs['flat/recommended'],
    },
    {
        name: 'mylisterhub/base',
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            'indent': ['error', 4],
            'max-len': ['warn', { 'code': 200 }],
            'object-curly-spacing': ['error', 'always'],
            'operator-linebreak': ['error', 'before'],
            'camelcase': ['error', {
                'ignoreDestructuring': true,
                'ignoreImports': true,
                'ignoreGlobals': true,
                'properties': 'never'
            }],
            'space-before-function-paren': ['error', {
                'anonymous': 'always',
                'asyncArrow': 'always',
                'named': 'never'
            }],
            'sort-imports': ['error', {
                'ignoreCase': true,
                'ignoreDeclarationSort': true
            }],
            'new-cap': 'off',
            'guard-for-in': 'off',
            'no-extend-native': 'off',
            'func-call-spacing': 'off',
            'no-prototype-builtins': 'off',
            'no-redeclare': 'off',
        },
    },
    {
        name: 'mylisterhub/vue',
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: '@typescript-eslint/parser'
            },
            globals: {
                defineOptions: 'readonly',
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly'
            }
        },
        rules: {
            'vue/script-indent': ['error', 4],
            'vue/html-indent': ['error', 4],
            'vue/html-comment-indent': ['error', 4],
            'vue/max-attributes-per-line': ['error', {
                'singleline': {
                    'max': 10
                },
                'multiline': {
                    'max': 1
                }
            }],
            'vue/attributes-order': ['warn', {
                'order': [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'TWO_WAY_BINDING',
                    ['GLOBAL', 'UNIQUE'],
                    'SLOT',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                'alphabetical': false
            }],
            'vue/no-v-html': 'off',
            'vue/singleline-html-element-content-newline': 'off',
        },
    },
    {
        name: 'mylisterhub/import',
        rules: {
            'import/order': ['error', {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    'sibling',
                    'parent',
                    'index'
                ],
                pathGroups: [
                    { pattern: '@/**', group: 'internal' },
                    { pattern: '~/**', group: 'internal' },
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }],
            'import/default': 'off',
        },
    },
    {
        name: 'mylisterhub/typescript',
        rules: {
            '@typescript-eslint/no-redeclare': 'error',
        },
    },
    {
        name: 'mylisterhub/jsdoc',
        rules: {
            "jsdoc/tag-lines": "off",
            "jsdoc/require-returns": "off",
            "jsdoc/require-jsdoc": "off",
            "jsdoc/require-param-description": "off",
            "jsdoc/require-returns-description": "off",
        },
    },
];
