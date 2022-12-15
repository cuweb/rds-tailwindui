module.exports = {
    presets: [
        require('./tailwind.theme.js'),
    ],
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/**/**/*.{js,jsx,ts,tsx}',
        './src/**/**/**/*.{js,jsx,ts,tsx}'
    ],
};