export default {
    'vue/multi-word-component-names': ['error', {
        ignores: ['app', 'error']
    }],
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-duplicate-attributes': ['error', {
        allowCoexistClass: false,
        allowCoexistStyle: false
    }],        
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-spacing': ['error', { 
        selfClosingTag: 'always' 
    }],
    'vue/html-indent': ['error', 4],
    'vue/max-attributes-per-line': ['error', {
        singleline: 3
    }],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/no-v-html': 'off',
    'vue/block-order': ['error', {
        order: ['template', 'script', 'style']
    }],
    'vue/block-tag-newline': ['error', {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0
    }],
    'vue/component-api-style': ['error',
        ['script-setup']
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { 
        registeredComponentsOnly: false 
    }],
    'vue/enforce-style-attribute': ['error', { 
        allow: ['scoped', 'plain']
    }],
    'vue/new-line-between-multi-line-property': ['error', {
        minLineOfMultilineProperty: 2
    }],
    'vue/no-boolean-default': ['error', 'no-default'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-ref-object-reactivity-loss': 'warn',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-root-v-if': 'off',
    'vue/no-setup-props-reactivity-loss': 'off',
    'vue/no-unused-emit-declarations': 'error',
    'vue/no-unused-properties': 'warn',
    'vue/no-unused-refs': 'warn',
    'vue/no-use-v-else-with-v-for': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': 'warn',
    'vue/padding-line-between-tags': ['error', [{ 
        blankLine: 'never', 
        prev: '*', 
        next: '*' 
    }]],
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/require-macro-variable-name': 'error',
    'vue/script-indent': ['error', 4],
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-on-handler-style': 'off',
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/array-element-newline': ['error', 'consistent'],
    'arrow-spacing': ['error', { 
        before: true, 
        after: true 
    }],
    'vue/block-spacing': ['error', 'always'],
    'vue/brace-style': ['error', '1tbs', { 
        allowSingleLine: true
    }],
    // 'vue/camelcase': ['warn', { ignoreDestructuring: true }],
    'vue/comma-dangle': ['error', 'never'],
    'vue/comma-spacing': ['error', { 
        before: false, 
        after: true
    }],
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/eqeqeq': 'warn',
    'vue/func-call-spacing': ['error', 'never'],
    'vue/key-spacing': ['error', { afterColon: true }],
    'vue/keyword-spacing': ['error', { after: true }],
    'vue/no-console': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-extra-parens': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/prefer-template': 'warn',
    'vue/quote-props': ['error', 'as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/template-curly-spacing': ['error', 'always'],
    'nuxt/prefer-import-meta': 'off'
}