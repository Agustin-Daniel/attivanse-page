import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      'blue': '#2970EC',
      'white': '#FFFFFF',
      'black': '#0D0E12',
      'gray': '#171A21',
      'grayline': '#707070',
      'coldgray': '#A6D0DD',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      backgroundImage: {
          'header-img-1920': "url('/img/header-1920.png')",
          'header-img-768': "url('/img/header-768.png')",
          'icon': 'linear-gradient(141deg, #2970EC 38.52%, #141D2E 95.64%);'
      },
      gridTemplateColumns: {
        'metodologia-card': '1fr min-content 1fr',
      }
    },
  },
  plugins: [],
}
export default config