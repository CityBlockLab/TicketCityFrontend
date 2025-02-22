/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#090014',
        searchBg: '#393141',
        borderStroke: '#3A3A3A', 
        textGray: '#A5A5A5',
        textWhite: '#FFFFFF',
        primary: '#FF8A00', 
        secondary: '#FFD5A4',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        exo: ['"Exo 2"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'small': ['14px', '20px'],
        'regular': ['16px', '25px'],
        'medium': ['18px', '25px'],
        'large': ['28px', '42px'],
        'xlarge': ['46px', '55.2px'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        wider: '0.05em',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(128.92deg, #FFD5A4 0.66%, #FF8A00 110.05%)',
      },
      boxShadow: {
        'button-inset': '1px 1px 10px 0px #FFFFFF40 inset',
      },
    },
  },
  plugins: [],
};