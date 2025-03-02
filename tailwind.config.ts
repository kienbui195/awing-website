import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        md: "4rem",
        lg: "5rem",
        xl: "4.375rem",
        "2xl": "9.375rem",
        "3xl": "15rem",
      },
    },
		screens: {
      xs: "480px",
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
		
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
				neutral900: "#0F0F0F",
        neutral800: "#1C1C1C",
        neutral700: "#3A3A40",
        neutral600: "#696A6D",
        neutral500: "#8B8B92",
        neutral400: "#A1A1A8",
        neutral300: "#D2D2D4",
        neutral100: "#F2F2F2",
        neutral50: "#F6F6F6",
        neutral0: "#FFFFFF",
        "brand-color": "#E2000F",
        "secondary-color": "#1E2138",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			container: {
        center: true,
        padding: {
          DEFAULT: "100px", // Padding mặc định (áp dụng cho màn hình lớn 1920px)
          xl: "100px", // Giữ 100px padding cho màn lớn hơn 1440px
          lg: "70px", // Khi về 1440px, padding sẽ là 70px
        },
        screens: {
          xl: "1720px", // Giới hạn max-width ở 1720px cho màn 1920px trở lên
          "2xl": "1720px",
        },
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
