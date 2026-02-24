// tailwind config

// export const theme = {
//   extend: {
//     colors: {
//       glams: {
//         pink: '#E91E63', //logo pink
//         blush: '#FDF2F5', //Soft background for sections
//         gold: '#C'
//       }
//     }
//   }
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        glams: {
          pink: "#E91E63",
          blush: "#FDF2F5",
          gold: "#C5A059",
          charcoal: "#1A1A1A",
          butter: "#FFFDF5",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
