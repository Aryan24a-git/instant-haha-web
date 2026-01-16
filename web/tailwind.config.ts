import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "neo-yellow": "#FFD700",
                "neo-pink": "#FF69B4",
                "neo-blue": "#007BFF",
                "neo-black": "#000000",
                "neo-green": "#39FF14",
                "neo-purple": "#8A2BE2",
            },
            boxShadow: {
                neo: "5px 5px 0px 0px #000000",
                "neo-sm": "3px 3px 0px 0px #000000",
                "neo-lg": "8px 8px 0px 0px #000000",
            },
            fontFamily: {
                baloo: ["var(--font-baloo)"],
                bungee: ["var(--font-bungee)"],
            },
        },
    },
    plugins: [],
};
export default config;
