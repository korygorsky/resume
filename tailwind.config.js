const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
            },
            fontSize: {
                xxs: '.625rem',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
