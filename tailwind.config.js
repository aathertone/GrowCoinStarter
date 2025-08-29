// In tailwind.config.js, you would add:
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0fff4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
      },
    },
    keyframes: {
      'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'pulse-slow': {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.02)', opacity: '0.8' },
      },
      'spin-slow-reverse': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-360deg)' },
      },
    },
    animation: {
      'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'spin-slow-reverse': 'spin-slow-reverse 60s linear infinite',
    },
  },
},