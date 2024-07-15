import type { Config } from 'tailwindcss';

import { withTV } from 'tailwind-variants/transformer';
import DefaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...DefaultTheme.fontFamily.sans]
      }
    },
    screens: {
      '2xl': '2000px',
      '3xl': '2400px',
      '560': '560px',
      '750': '750px',
      'archive-mobile': '450px',
      lg: '1200px',
      md: '900px',
      'navigation-desktop': '1000px',
      'navigation-mobile': '500px',
      sm: '640px',
      'team-mobile': '450px',
      xl: '1600px',
      xs: '340px'
    }
  }
};

export default withTV(config);
