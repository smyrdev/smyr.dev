import typography from '@tailwindcss/typography';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
			},
			fontFamily: {
				display: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
			},
			textColor: {
				default: "var(--color-text)",
				offset: "var(--color-text-offset)",
				muted: "var(--color-text-muted)",
				nav: "var(--color-text-nav)",
				invert: "var(--color-invert-text)",
			},
			backgroundColor: {
				default: "var(--color-background)",
				offset: "var(--color-background-offset)",
				invert: "var(--color-invert-bg)",
			},
			borderColor: {
				default: "var(--color-border)",
			},
		}
	},
	plugins: [
		typography
	],
}
