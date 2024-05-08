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
        bg: '#e3dff2',
      },
      borderRadius: {
        base: '0px',
      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
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
