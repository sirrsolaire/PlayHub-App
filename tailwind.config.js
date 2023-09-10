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
      "features-bg": "url('/features_bg.jpg')",
      "latest-news-bg": "url('/latest-news-bg.jpg')",
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
        divider: "0px 2px 0px 0px rgba(17, 8, 23, 0.004)",
        latest:
          "0px 4px 5.58px 0.42px rgba(0, 0, 0, 0.13),inset 0px 1px 16px 0px rgba(228, 161, 1, 0.17)",
        article: "0px 5px 12.09px 0.91px rgba(0, 0, 0, 0.34)",
        articleShadow: "0px 7px 7.44px 0.56px rgba(18, 18, 18, 0.16)",
      },
      colors: {
        "menu-nav": "#1c1121",
        "area-gray": "#c8c8c8",
        "area-sale-bg": "rgba(23, 13, 28, 0.929)",
        "rateSection-bg-color": "#1b1024",
        "news-bg-color": "rgb(29, 18, 39)",
        "news-divider-color": "rgb(39, 26, 48)",
        "news-tag-color": "#3a3042",
        "latest-bg": "rgb(32, 19, 43)",
        "article-bg": "rgb(27, 16, 36)",
        "article-text": "#9b9b9b",
      },
    },
  },
  plugins: [],
};
