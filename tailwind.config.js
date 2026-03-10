/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: '#121212',
                charcoalLight: '#1f1f1f',
                gold: '#D4AF37',
                bronze: '#CD7F32',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Cinzel', 'serif'],
            },
            animation: {
                'draw': 'draw 2s ease-in-out forwards',
                'fade-in': 'fadeIn 1.5s ease-out forwards',
            },
            keyframes: {
                draw: {
                    '0%': { strokeDasharray: '0, 1000' },
                    '100%': { strokeDasharray: '1000, 0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
}
