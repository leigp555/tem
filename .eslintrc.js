module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
        "vue/setup-compiler-macros":true
    },
    'extends': [
        'airbnb-base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    "parser": "vue-eslint-parser",
    'parserOptions': {
        'ecmaVersion': 'latest',
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module'
    },
    'plugins': [
        'vue',
        '@typescript-eslint'
    ],
    'rules': {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'import/no-extraneous-dependencies': 'off',
        'vue/no-multiple-template-root': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 是否使用 console
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 是否使用 debugger
        'vue/comment-directive': 0,
        'comma-style': ['error', 'last'], // 逗号风格，换行时在行首还是行尾
        "vue/max-attributes-per-line": 'off',
        "vue/html-self-closing":'off',
        "no-param-reassign":'off',
        "vue/multi-word-component-names":'off',
    }
};
