/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      "header-pattern": "url('/header_bg.jpg')",
      "offer-pattern": "url('/offer_count_bg.png')",
      "landing-image": "url('/slider_bg.jpg')",
      "landing-slider": "url('/landing-slider.jpg')",
      "area-bg": "url('/area_bg.jpg')",
      "btn-overlay": "url('/btn_overlay.png')",
      "rate-section-bg": "url('/game_manage_bg.jpg')",
    },

    fontWeight: {
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    extend: {
      boxShadow: {
        "4xl":
          "0px 3px 7px 0px rgba(128, 18, 40, 0.2),inset 0px 3px 7px 0px rgba(56, 17, 33, 0.4)",
      },
      colors: {
        "menu-nav": "#1c1121",
        "area-gray": "#c8c8c8",
        "area-sale-bg": "rgba(23, 13, 28, 0.929)",
        "rateSection-bg-color": "#1b1024",
      },
    },
  },
  plugins: [],
};
