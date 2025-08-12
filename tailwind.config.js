/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        background: '#FBFBFB',
        white: '#FFFFFF',
        black: '#181818',
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',

        // Text
        text: {
          50: '#F9F9FB',
          100: '#EDEEF2',
          200: '#DEE0E7',
          300: '#CACCD7',
          400: '#B3B5C6',
          500: '#9FA0B5',
          600: '#8A89A2',
          700: '#76768C',
          800: '#626172',
          900: '#52515E',
          950: '#302F37'
        },

        // Brand Primary - Seaweed
        primary: {
          50: '#F2F5F0',
          100: '#E3E8DF',
          200: '#CAD4C2',
          300: '#A9B89E',
          400: '#8B9E7D',
          500: '#6D8260',
          600: '#54664A',
          700: '#4B5A43',
          800: '#384133',
          900: '#32392E',
          950: '#181D16'
        },

        // Error
        error: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FFCDC9',
          300: '#FDAAA4',
          400: '#F97970',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
          950: '#50160C'
        },

        // Warning
        warning: {
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          950: '#4E1D09'
        },

        // Success
        success: {
          50: '#F6FEF9',
          100: '#DCFAE6',
          200: '#ABEFC6',
          300: '#75E0A7',
          400: '#47DC89',
          500: '#17B26A',
          600: '#079455',
          700: '#067647',
          800: '#085D3A',
          900: '#074D31',
          950: '#053321'
        },

        // Secondary - Almond
        secondary: {
          50: '#FBF7F1',
          100: '#F6EDDE',
          200: '#F0DFC8',
          300: '#E1BC90',
          400: '#D39A64',
          500: '#CA8145',
          600: '#BC6C3A',
          700: '#9C5532',
          800: '#7E452E',
          900: '#663A28',
          950: '#663A28'
        },

        // Light Blue
        lightblue: {
          50: '#F9F9FF',
          100: '#E9E9FE',
          200: '#D6D6FE',
          300: '#B8B5FD',
          400: '#948BFA',
          500: '#715CF6',
          600: '#5E3AED',
          700: '#4F28D9',
          800: '#4221B6',
          900: '#381D95',
          950: '#201065'
        },

        // Dark Jungle Green
        jungle: {
          50: '#F3F9EC',
          100: '#E4F0D7',
          200: '#CAE3B3',
          300: '#A9D086',
          400: '#89BC5F',
          500: '#6BA141',
          600: '#527F31',
          700: '#3F6229',
          800: '#364F25',
          900: '#2F4423',
          950: '#1E3114'
        },

        // Gray Neutral
        grayneutral: {
          50: '#F7F7F7',
          100: '#E7E7E980',
          200: '#DDDDE0',
          300: '#C6C6CA',
          400: '#A9AAB1',
          500: '#95949D',
          600: '#84838D',
          700: '#78767F',
          800: '#64636A',
          900: '#535256',
          950: '#343437'
        }
      },
      fontFamily: {
        poppins: ['"FZ Poppins"', 'sans-serif']
      },
      fontSize: {
        h1: [
          '40px',
          { lineHeight: '120%', letterSpacing: '0.005em', fontWeight: '500' }
        ],
        h2: [
          '36px',
          { lineHeight: '120%', letterSpacing: '0.005em', fontWeight: '500' }
        ],
        h3: [
          '32px',
          { lineHeight: '120%', letterSpacing: '0.005em', fontWeight: '500' }
        ],
        h4: ['24px', { lineHeight: '120%', fontWeight: '500' }],
        h5: ['20px', { lineHeight: '140%', fontWeight: '500' }],
        subtitle1: ['20px', { lineHeight: '120%', fontWeight: '500' }],
        subtitle2: ['18px', { lineHeight: '160%', fontWeight: '500' }],
        subtitle3: ['16px', { lineHeight: '160%', fontWeight: '500' }],
        body1: ['16px', { lineHeight: '160%', fontWeight: '400' }],
        'body2-medium': [
          '14px',
          { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }
        ],
        'body2-regular': [
          '14px',
          { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '400' }
        ],
        'tagline-regular': ['12px', { lineHeight: '120%', fontWeight: '400' }],
        'tagline-semibold': ['12px', { lineHeight: '120%', fontWeight: '500' }]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
