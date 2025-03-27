import jsRules from './config/js.rules.config.js'
import vueRules from './config/vue.rules.config.js'
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'

export default defineConfigWithVueTs(
    js.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        ignores: ['.vue/', '**/node_modules/', '.git/']
    },
    {
        name: 'IM-config',
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            ...jsRules,
            ...vueRules
        }
    },
    // Disabled layouts, pages
    {
        files: ['src/pages/**/*.vue', 'src/layouts/*.vue'],
        rules: {
            'vue/multi-word-component-names': 'off',
        }
    }
)