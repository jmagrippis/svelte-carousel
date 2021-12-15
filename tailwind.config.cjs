const colors = require('tailwindcss/colors')

const withOpacityValue =
  (varName) =>
  ({opacityValue}) =>
    opacityValue === undefined
      ? `hsl(
  var(--${varName}-hue),
  var(--${varName}-saturation),
  var(--${varName}-lightness)
)`
      : `hsla(
  var(--${varName}-hue),
  var(--${varName}-saturation),
  var(--${varName}-lightness),
  ${opacityValue}
)`

module.exports = {
  content: ['./src/**/*.{svelte,css}'],
  theme: {
    colors: {
      primary: withOpacityValue('primary-color'),
      secondary: withOpacityValue('secondary-color'),
      background: withOpacityValue('background-color'),
      text: withOpacityValue('text-color'),
      white: withOpacityValue('white-color'),
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  plugins: [],
}
