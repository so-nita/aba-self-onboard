export default {
    darkMode: ["class"], // This enables dark mode
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
      borderColor:{
        'primary' : '#00467F',
      },
      fontFamily: {
        inter: ["Inter", 'sans-serif'],
        roboto: ["Roboto", 'sans-serif'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundColor: {
        'light': '#e6ecf8',
        'light-hover': '#d7e0f4', //'#c3d1ef',
        // 'light': '#dfe4f3',
        'dark': '#101829',
        // Light Theme
        'primary': '#00467F', // #334155
        'primary-hover': '#0062b3',
        'secondary' : '#6b7280',
        'dark-gray' : '#3c3e44',
        // Dark Theme
        'dark-primary' : '#0f111a',
        'dark-primary-hover': '#0062b3',
        'dark-secondary': '#181f38',
      },
      textColor:{
        'light': '#F7F7F8',
        'gray': '#6b7280',
        'light-gray' : '#7e8490',
        'dark-gray': '#2c2e32',
        'dark' : '#101829',
        'success': '#8bdab9',
        'success-hover': '#6fa790',
        'primary': '#00467F',
        'primary-hover': '#0062b3',
        'secondary' : '#000046',
        // Dark Them
        'dark-primary': '#e6ecf8',
        'dark-primary-hover': '#101829',
        'dark-secondary': '#e6ecf8',
        'dark-active': '#e6ecf8',
      }
  	}
  },
  plugins: [],
}
