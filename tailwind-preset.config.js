module.exports = {
  theme: {
    extend: {
      colors: {
        // Nature-inspired palette
        moss: '#4a5d23',
        fern: '#7cb342',
        sage: '#9ccc65',
        bamboo: '#c5e1a5',
        earth: '#5d4037',
        clay: '#8d6e63',
        sand: '#d7ccc8',
        sky: '#81c784',
        ocean: '#4db6ac',
        coral: '#ff8a65',
        sunset: '#ffb74d',

        // Semantic colors
        background: '#f1f8e9',
        surface: '#ffffff',
        primary: '#7cb342',
        secondary: '#4db6ac',
        accent: '#ff8a65',
        text: '#2e2e2e',
        'text-muted': '#616161',
        border: '#c5e1a5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        organic: '0.75rem 1.25rem 0.5rem 1rem',
        leaf: '50% 0 50% 0',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      animation: {
        grow: 'grow 0.3s ease-out',
        sway: 'sway 3s ease-in-out infinite',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
