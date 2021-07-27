const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ["./src/**/*.css", "./**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
			borderRadius: {
                none: "0",
                sm: ".125rem",
                default: ".25rem",
                default: "4px",
                md: "0.375rem",
                lg: ".65rem",
                full: "9999px",
                large: "25px"
            }
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
	],
};
