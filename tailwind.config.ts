import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      iransans: ['IRANSans', 'serif'],
    },
    extend: {
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#DE866A',
        bodyBackGround: '#E6E6E6',
        peach: '#E2A08C',
        darkPeach: '#CC9380',
        darkerPeach: '#955845',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        menuAppearContainer: {
          '0%': { left: '100%' },
          '100%': { left: '0%' },
        },
        menuAppearContent: {
          '0%': { display: 'none', top: '100%' },
          '49%': { display: 'none', opacity: '0', top: '100%' },
          '100%': { opacity: '1', top: '0%', display: 'block' },
        },
      },
      animation: {
        appear: 'appear 0.2s linear forwards',
        menuAppearContainer: 'menuAppearContainer 0.5s linear forwards',
        menuAppearContent: 'menuAppearContent 1s linear forwards',
      },
    },
  },
  plugins: [],
};
export default config;
