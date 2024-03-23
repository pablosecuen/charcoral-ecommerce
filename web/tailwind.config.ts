import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   "./node_modules/flowbite-react/lib/**/*.js",
         "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'briquetas': "url('../../public/assets/briquetas.png')",
        'sponsor': "url('../../public/assets/separador1920.jpg')",
        'sponsor2': "url('../../public/assets/Recurso22.png')",
        'nosotros': "url('../../public/assets/Recurso 1.webp')",
        'sponsor3': "url('../../public/assets/Recurso 5.webp')",
        'productos': "url('../../public/assets/Recurso 9.webp')",
        'distribucion': "url('../../public/assets/Recurso 8.webp')",
        'contacto': "url('../../public/assets/Recurso 7.webp')",
                   'revendedores': "url('../../public/assets/Recurso 32.webp')",

      },
        keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: "0.2" },
          '20%': { opacity: "1" },
          '100% ': { opacity: "0.2" }
        },
        'pulse-with-scale-slow': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1.00)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(0.98)',
          },
        },
        'pulse-with-scale-fast': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '50%': {
            opacity: '0.95',
            transform: 'scale(0.95)',
          },
        },
      },
          animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-with-scale-slow': 'pulse-with-scale-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'pulse-with-scale-fast': 'pulse-with-scale-fast 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
   
      },
    },
  },
  plugins: [ require('flowbite/plugin' ), nextui()],
};
export default config;
