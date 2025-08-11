/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base
        background: '#FFFFFF',
        white: '#FFFFFF',
        black: '#000000',
        border: 'hsl(var(--border))',
        foreground: 'hsl(var(--foreground))',

        // Text
        text: {
          50: '#F9F9FC',
          100: '#F0F1F3',
          200: '#E0E2E7',
          300: '#C2C6CE',
          400: '#B3B5C6',
          500: '#858D9D',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
          900: '#1F2937'
        },

        // Brand Primary - Seaweed
        primary: {
          50: '#F3F7F5',
          100: '#E3ECE6',
          200: '#C1D7C9',
          300: '#A1C3AD',
          400: '#7DAC8E',
          500: '#5B9471',
          600: '#3B7B54',
          700: '#2F6243',
          800: '#234A32',
          900: '#163423',
          DEFAULT: '#3B7B54',
          foreground: '#FFFFFF'
        },

        // Error
        error: {
          50: '#FEECEC',
          100: '#FCD6D6',
          200: '#F9B5B5',
          300: '#F48F8F',
          400: '#EE6C6C',
          500: '#E65050',
          600: '#D62F2F',
          700: '#B82020',
          800: '#921919',
          900: '#6F1313',
          DEFAULT: '#E65050'
        },

        // Warning
        warning: {
          50: '#FFFBEA',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
          DEFAULT: '#F79009'
        },

        // Success
        success: {
          50: '#E8F8F0',
          100: '#CFF0E0',
          200: '#9FE1C0',
          300: '#6FD3A1',
          400: '#3FC582',
          500: '#15B26B',
          600: '#0F8E56',
          700: '#0B6B41',
          800: '#07492B',
          900: '#032617',
          DEFAULT: '#15B26B'
        },

        // Secondary - Almond
        almond: {
          50: '#FFF9F2',
          100: '#FEF0DC',
          200: '#FDE2B9',
          300: '#FBCB87',
          400: '#F6B15E',
          500: '#E98E39',
          600: '#CA6C24',
          700: '#A1511B',
          800: '#773917',
          900: '#562B12',
          DEFAULT: '#E98E39'
        },

        // Light Blue
        lightblue: {
          50: '#F3F8FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8CC5FF',
          400: '#5FAEFF',
          500: '#338FFF',
          600: '#1D6FD6',
          700: '#1553A3',
          800: '#0F3871',
          900: '#082141',
          DEFAULT: '#338FFF'
        },

        // Dark Jungle Green
        jungle: {
          50: '#F2F8F3',
          100: '#DAEDE0',
          200: '#B5DBC0',
          300: '#8EC9A0',
          400: '#69B880',
          500: '#4FAE6B',
          600: '#3E8A54',
          700: '#2D663E',
          800: '#1D4328',
          900: '#0D2112',
          DEFAULT: '#4FAE6B'
        },

        // Gray Neutral
        grayneutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          DEFAULT: '#6B7280'
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
        body1: ['16px', { lineHeight: '160%', fontWeight: '500' }],
        body2: [
          '14px',
          { lineHeight: '120%', letterSpacing: '-0.02em', fontWeight: '500' }
        ],
        tagline: ['12px', { lineHeight: '120%', fontWeight: '500' }]
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
