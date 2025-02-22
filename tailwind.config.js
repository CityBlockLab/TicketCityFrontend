// tailwind.config.js
module.exports = {
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
          orbitron: ['Orbitron', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          roboto: ['Roboto', 'sans-serif'],
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