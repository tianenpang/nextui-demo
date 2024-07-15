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
      'custom-2xl': '1536px',
      'custom-lg': '1024px',
      'custom-md': '768px',
      'custom-sm': '640px',
      'custom-xl': '1280px'
    }
  }
};

export default withTV(config);
