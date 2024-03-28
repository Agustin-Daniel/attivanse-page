import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      sm: '480px',
      "530": '530px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'blue': '#2970EC',
      'white': '#FFFFFF',
      'lightwhite': '#FFFFFFC4',
      'black': '#0D0E12',
      'lightblack': '#101217',
      'gray': '#171A21',
      'grayline': '#707070',
      'coldgray': '#A6D0DD',
      'transparent': 'transparent',
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 3s linear',
      },
      backgroundImage: {
          'header-img-1920': "url('/img/header-1920.png')",
          'header-img-768': "url('/img/header-768.png')",
          'header-img-480': "url('/img/header-480.webp')",
          'contact-mobile': "url('/img/contact-mobile.png')",
          'contact-deskop': "url('/img/contact-deskop.png')",
          'logo-cyan': "url('/img/logo-xyan.png')",
          'icon': 'linear-gradient(141deg, #2970EC 38.52%, #141D2E 95.64%);'
      },
      gridTemplateColumns: {
        'min-min-content': 'min-content min-content',
      },
      gridTemplateRows: {
        'fr-fr-content': '1fr 1fr',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config