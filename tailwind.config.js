/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screens: {
      'lg': '570px',
    },
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      veryDarkBlueText: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",

      opacity0: "hsl(0, 0%, 0%, 0%)"
    },
    spacing: {
      "448px": "448px",
      "288px": "288px",
      "256px": "256px",
      "128px": "128px",
      "64px": "64px",
      "56px": "56px",
      "40px": "40px",
      "32px": "32px",
      "16px": "16px",
      "8px": "8px",
      "6px": "6px"
    },
    fontWeight: {
      "800": "800",
      "600": "600",
      "300": "300"
    },
    fontFamily: {
      'nunito': ['Nunito','sans-serif']
    },
    fontSize: {
      "32px": "32px",
      "24px": "24px",
      "16px": "16px",
      "14px": "14px"
    }
  },
  plugins: [],
}

