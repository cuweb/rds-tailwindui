module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        backgroundImage: {
            'cu-waves-red': "url('/assets/cu-waves-red.svg')",
            'cu-waves-white-20': "url('/assets/cu-waves-white-20.svg')",
        },
        colors: {
          'cu-red': {
            DEFAULT: '#E91C24',
            50: '#FDE9E9',
            100: '#FBD6D7',
            200: '#F7B1B4',
            300: '#F48C90',
            400: '#F0666C',
            500: '#ED4148',
            600: '#E91C24',
            700: '#BB1219',
            800: '#880D12',
            900: '#55080B',
          },
          'cu-black': {
            DEFAULT: '#000000',
            50: '#F2F2F2',
            100: '#e6e6e6',
            200: '#cccccc',
            300: '#b3b3b3',
            400: '#999999',
            500: '#808080',
            600: '#666666',
            700: '#4d4d4d',
            800: '#333333',
            900: '#191919',
          },
        },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
