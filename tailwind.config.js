/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  darkMode: 'class',
  content: [
    "./**/*.html",
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'amarelo': {
        100: '#FFFBEB',
        200: '#E6D220',
        300: '#A69C41',
        400: '#666241',
      },
      'azul': {
        100: '#ECFEFF',
        200: '#20C5E6',
        300: '#3D9FB3',
        400: '#457680',
      },
      'rosa': {
        100: '#FDF2F8',
        200: '#E62072',
        300: '#A6416B',
        400: '#664151',
      },
      'cinza': {
        100: '#F9FAFB',
        200: '#D1D5DB',
        300: '#9CA3AF',
      },
      'preto':
      {
        100: '#404040',
        200: '#39494C',
        300: '#1F2937',
        400: '#111827',
        500: '#27272A',
        600: '#18181B',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
}

