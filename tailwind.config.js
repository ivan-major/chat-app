module.exports = {
    content: [
        './src/**/*.{html,ts,vue}',
    ],
    safelist: [
        { pattern: /size-\d+/ }
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};