/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Background Colors
        'off-white': '#FAFAFA',
        'glass': 'rgba(255, 255, 255, 0.65)',
        'glass-nav': 'rgba(255, 255, 255, 0.8)',
        
        // Main Colors
        'soft-slate': '#64748B',
        'steel-blue': '#334155',
        'pale-sage': '#94A3B8',
        
        // Accent Colors
        'deep-purple': '#6366F1',
        'light-purple': '#818CF8',
        'system-gray': '#E2E8F0',
        
        // Legacy colors (keeping for backward compatibility)
        black: '#000000',
        charcoal: '#333333',
        darkgray: '#666666',
        gold: '#FFD700',
        emerald: '#00FFA3',
        softwhite: '#F5F5F5',
      },
      backgroundImage: {
        'grain': "url('data:image/png;base64,data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEWIiIiIiIiIiIiIiIiIiIiIiIhh4uDGAAAABnRSTlMAMDAwMDCXjpLYAAAAMElEQVQ4y2NgGAWjYBSMAkwQyMLACAdMDKMKRhWMKhhVMKpgVMGoggEXjIJRMApwAQAqogX5GkdvjwAAAABJRU5ErkJggg==')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

