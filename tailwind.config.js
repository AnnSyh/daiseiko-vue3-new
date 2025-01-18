/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/*.{html,js,jsx,vue}",
		'./src/**/*.{html,js,jsx,vue}', 

	],
	theme: {
		extend: {
		  screens: {
			'sm': '480px',
			'md': '768px',
			'lg': '976px',
			'xl': '1344px',
			'2xl':'remove',
		  },
		},
	  },
	  plugins: [],
	}

