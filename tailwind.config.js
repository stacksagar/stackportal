module.exports = {
  mode: '',
  // purge: [
  //   './pages/**/*.{js,ts,jsx,tsx}',
  //   './src/**/*.{js,ts,jsx,tsx}',
  //   './components/**/*.{js,ts,jsx,tsx}',
  // ],

  darkMode: 'class', // or 'media' or 'class'

  theme: {
    extend: {
      keyframes: {
        'slide-in-fwd-bottom': {
          '0%': {
            transform: 'translateZ(-1400px) translateY(800px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateZ(0) translateY(0)',
            opacity: 1,
          },
        },

        'focus-in-contract': {
          ' 0% ': {
            'letter-spacing': '1em',
            filter: 'blur(12px)',
            opacity: 0,
          },
          '100%': {
            filter: ' blur(0px)',
            opacity: 1,
          },
        },
      },

      animation: {
        'spin-slow': 'spin 11s linear infinite',
        'focus-in-contract':
          'focus-in-contract 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-fwd-bottom':
          'slide-in-fwd-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },

      screens: {
        screen_295: '295px',
        screen_400: '400px',
        screen_500: '500px',
        screen_600: '600px',
        screen_640: '640px',
        screen_650: '650px',
        screen_768: '768px',
        screen_900: '900px',
        screen_1000: '1000px',
        screen_1100: '1100px',
        screen_1200: '1200px',
      },

      spacing: {
        header_height: '60px',
        pixel_59: '59px',
        screen_minus_header: 'calc(100vh - 60px)',
        screen_minus_header_dbl: 'calc(100vh - 120px)',
        pixel_300: '300px',
        pixel_320: '320px',
        pixel_350: '350px',
        pixel_360: '360px',
        pixel_375: '375px',
        pixel_450: '450px',
        pixel_550: '550px',
        pixel_600: '600px',
        pixel_650: '650px',
        pixel_700: '700px',
        pixel_750: '750px',
        pixel_850: '850px',
        pixel_900: '900px',
        pixel_1000: '1000px',
        pixel_1100: '1100px',
        pixel_1200: '1200px',
        pixel_1300: '1300px',
      },

      minHeight: {
        screen_minus_header: 'calc(100vh - 60px)',
      },

      colors: {
        dark: '#151f33',
        dark1: '#1b1e32',
        dark2: '#1a1d34',
        dark3: '#181a27',
        dark4: '#141628',
        dark5: '#101010',
      },
    },
  },

  variants: {
    extend: {
      padding: ['hover', 'group-hover'],
      dark: ['screens'],
      screens: ['dark'],
    },
  },

  plugins: [],
};
