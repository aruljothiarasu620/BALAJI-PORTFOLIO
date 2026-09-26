/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        studio: {
          darkest: '#07080B',
          bg: '#0A0C11',
          surface: '#10131B',
          card: '#151924',
          subcard: '#1B2030',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
          muted: '#94A3B8',
          accent: '#00D4FF',
          violet: '#8B5CF6',
          amber: '#F59E0B',
          emerald: '#10B981',
          rose: '#F43F5E',
        },
        // Kept for backward compatibility with components
        nle: {
          darkest: '#07080B',
          bg: '#0A0C11',
          panel: '#10131B',
          subpanel: '#151924',
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(255, 255, 255, 0.16)',
          textMuted: '#94A3B8',
          cyan: '#00D4FF',
          purple: '#8B5CF6',
          orange: '#F97316',
          record: '#EF4444',
          green: '#10B981',
          trackV1: '#1E293B',
          trackV2: '#312E81',
          trackV3: '#4C1D95',
          trackA1: '#064E3B',
          trackA2: '#134E4A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      }
    },
  },
  plugins: [],
}
