module.exports = {
	content: [
		"./app/**/*.{ts,tsx}",
		"./features/**/*.{ts,tsx}",
		"./shared/**/*.{ts,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				base: ["var(--font-commons)", "Arial", "sans-serif"],
				ttruns: ["var(--font-tt-runs)", "sans-serif"]
			},

		},
	},
	plugins: []
};
