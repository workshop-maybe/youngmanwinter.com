/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "starlite": "url('/starlite.jpeg')",
      },
      backgroundOpacity: ['active'],
      fontFamily: {
        sans: ['var(--font-advent-pro)'],
        mono: ['var(--font-katibeh)'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {

    }
  }
};
