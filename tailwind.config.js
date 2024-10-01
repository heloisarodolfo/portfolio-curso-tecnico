/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: "var(--azul)",
        "azul-claro": "var(--azul-claro)",
        branco: "var(--branco)",
        preto: "var(--preto)",
        customBlueRoyal: '#0017E8',
        customBlue: '#0166FF',
        },
      fontFamily: {
        'custom': ['Nunito', 'sans-serif'],
        'custom-righteous': ['Righteous', 'sans-serif'],
      },
      fontSize: {
        '2x1': '3rem',
        '1x1': '1.55rem',
      },
    },
  },
  plugins: [],
}

