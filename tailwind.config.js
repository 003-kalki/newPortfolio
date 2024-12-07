/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGrey:"#0a0a0a",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        // Add a circular dot pattern
        'dot-pattern': `
          radial-gradient(circle, #444444, 1px, transparent 1px)`,
          'hero-gradient': 'linear-gradient(270.3deg, rgba(84, 212, 228, 1) 0.2%, rgba(68, 36, 164, 1) 100%)',
      },
      backgroundSize: {
        // Adjust the spacing between dots
        'dots-spacing': '20px 20px',
      },
     
      animation: {
        bgChange: 'bgChange 5s ease-in-out infinite', // Animation settings
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    
  ],
};

