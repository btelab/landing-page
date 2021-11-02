module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('~/assets/BTE_banner_1.jpg')",
        'banner-2': "url('~/assets/BTE_banner_1.jpg')",
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      keyframes: {
        'fade-in': { 
          '0%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.6',
          },
          '100%': {
            opacity: '1',
          }
        },
        'fade-out-down': { 
          '0%': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          '50%': {
            opacity: '0.6',
            transform: 'translateY(-5px)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          }
        },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-out',
        'fade-out-down': 'fade-out-down 6s ease-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  // These paths are just examples, customize them to match your project structure
  purge: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}
