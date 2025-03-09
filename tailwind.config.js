/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
	extend: {
		fontFamily: {
		  inter: ['Inter', 'sans-serif'],
		},
		screens:{
			'xsm': '480px',
			'mlg':'920px'
		}
	  },
  },
  plugins: [import("tailwindcss-animate")],
}

