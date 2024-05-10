const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7C30DD",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width="1443" height="953" viewBox="0 0 1443 953" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.781738" y1="51.5398" x2="1442.5" y2="51.5399" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="164.174" x2="1442.5" y2="164.174" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="276.808" x2="1442.5" y2="276.809" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="389.443" x2="1442.5" y2="389.443" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="502.077" x2="1442.5" y2="502.077" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="614.711" x2="1442.5" y2="614.711" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="727.346" x2="1442.5" y2="727.346" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="839.98" x2="1442.5" y2="839.98" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.781738" y1="952.614" x2="1442.5" y2="952.614" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="0.48138" y1="908.862" x2="0.48142" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="111.383" y1="908.862" x2="111.383" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="222.284" y1="908.862" x2="222.284" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="333.186" y1="908.862" x2="333.186" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="444.087" y1="908.862" x2="444.087" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="554.989" y1="908.862" x2="554.989" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="665.89" y1="908.862" x2="665.89" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="776.792" y1="908.862" x2="776.792" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="887.693" y1="908.862" x2="887.693" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="998.595" y1="908.862" x2="998.595" y2="0.341736" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="1109.5" y1="908.862" x2="1109.5" y2="0.341614" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="1220.4" y1="908.862" x2="1220.4" y2="0.341614" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="1331.3" y1="908.862" x2="1331.3" y2="0.341614" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <line x1="1442.2" y1="908.862" x2="1442.2" y2="0.341614" stroke="white" stroke-opacity="0.09" stroke-width="0.600716"/>
              <path d="M111.414 165.891L111.414 192.969" stroke="url(#paint0_linear_15_824)" stroke-width="1.00119"/>
              <path d="M123.428 179.43L99.3993 179.43" stroke="url(#paint1_linear_15_824)" stroke-width="1.00119"/>
              <rect opacity="0.47" x="333.679" y="165.476" width="109.13" height="110.131" fill="white" fill-opacity="0.07" stroke="#37393A" stroke-width="1.00119"/>
              <rect opacity="0.47" x="888.34" y="53.342" width="110.131" height="110.131" fill="white" fill-opacity="0.07" stroke="#37393A" stroke-width="1.00119"/>
              <rect opacity="0.47" x="1220.74" y="277.609" width="110.131" height="111.133" fill="white" fill-opacity="0.07" stroke="#37393A" stroke-width="1.00119"/>
              <path d="M1220.24 166.455L1220.24 193.533" stroke="url(#paint2_linear_15_824)" stroke-width="1.00119"/>
              <path d="M1232.25 179.994L1208.22 179.994" stroke="url(#paint3_linear_15_824)" stroke-width="1.00119"/>
              <path d="M1330.37 915.605L1330.37 942.682" stroke="url(#paint4_linear_15_824)" stroke-width="1.00119"/>
              <path d="M1342.38 929.143L1318.35 929.143" stroke="url(#paint5_linear_15_824)" stroke-width="1.00119"/>
              <path d="M111.414 165.891L111.414 192.969" stroke="url(#paint6_linear_15_824)" stroke-width="1.00119"/>
              <path d="M123.428 179.43L99.3993 179.43" stroke="url(#paint7_linear_15_824)" stroke-width="1.00119"/>
              <defs>
              <linearGradient id="paint0_linear_15_824" x1="111.414" y1="192.969" x2="111.414" y2="165.891" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C34124" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="#F99A85"/>
              <stop offset="1" stop-color="#C34124" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint1_linear_15_824" x1="99.3993" y1="179.43" x2="123.428" y2="179.43" gradientUnits="userSpaceOnUse">
              <stop stop-color="#C34124" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="#F99A85"/>
              <stop offset="1" stop-color="#C34124" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint2_linear_15_824" x1="1220.24" y1="193.533" x2="1220.24" y2="166.455" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint3_linear_15_824" x1="1208.22" y1="179.994" x2="1232.25" y2="179.994" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint4_linear_15_824" x1="1330.37" y1="942.682" x2="1330.37" y2="915.605" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint5_linear_15_824" x1="1318.35" y1="929.143" x2="1342.38" y2="929.143" gradientUnits="userSpaceOnUse">
              <stop stop-color="white" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint6_linear_15_824" x1="111.414" y1="192.969" x2="111.414" y2="165.891" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DDFB24" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="#DDFB24"/>
              <stop offset="1" stop-color="#DDFB24" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="paint7_linear_15_824" x1="99.3993" y1="179.43" x2="123.428" y2="179.43" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DDFB24" stop-opacity="0"/>
              <stop offset="0.50284" stop-color="#DDFB24"/>
              <stop offset="1" stop-color="#DDFB24" stop-opacity="0"/>
              </linearGradient>
              </defs>
              </svg>
              `
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} 

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
