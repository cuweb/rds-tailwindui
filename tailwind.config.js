module.exports = {
    presets: [
        require('rds-tailwind-theme'),
    ],
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './src/**/**/*.{js,jsx,ts,tsx}',
        './src/**/**/**/*.{js,jsx,ts,tsx}'
    ],
};