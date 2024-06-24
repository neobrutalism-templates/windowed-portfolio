import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        main: '#a388ee',
        mainAccent: '#9e66ff', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)',

        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',

        // dark mode
        darkBg: '#1D1F27',
        darkText: '#eeefe9',
        darkBorder: '#000',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        light: '4px 4px 0px 0px #000',
        dark: '4px 4px 0px 0px #000',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
    },
    screens: {
      smallHeight: { raw: '(max-height: 550px)' },
      w800: { max: '800px' },
      w700: { max: '700px' },
      w600: { max: '600px' },
      w500: { max: '500px' },
      w450: { max: '450px' },
      w400: { max: '400px' },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
