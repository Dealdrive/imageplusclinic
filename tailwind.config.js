/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "heroBg-1g-1": "url('/src/assets/sliders/slider-one-lg.jpg')",
        "heroBg-sm-1": "url('/src/assets/sliders/slider-one-sm.jpg')",
        "heroBg-1g-2": "url('/src/assets/sliders/slider-two-lg.png')",
        "heroBg-sm-2": "url('/src/assets/sliders/slider-two-sm.png')",
        "heroBg-1g-3": "url('/src/assets/sliders/slider-three-lg.png')",
        "heroBg-sm-3": "url('/src/assets/sliders/slider-three-sm.png')",
        "heroBg-1g-4": "url('/src/assets/sliders/slider-four-lg.png')",
        "heroBg-sm-4": "url('/src/assets/sliders/slider-four-sm.png')",
        "heroBg-1g-5": "url('/src/assets/sliders/slider-five-lg.png')",
        "heroBg-sm-5": "url('/src/assets/sliders/slider-five-sm.png')",
        "eye-clinic": "url('/src/assets/summary/eye-clinic.jpg')",
        services: "url('/src/assets/summary/services.jpg')",
        "visit-us": "url('/src/assets/summary/visit-us.jpg')",
        milestone: "url('/src/assets/milestone/milestone.jpg')",
        "pages-heroBg": "url('/src/assets/pages-heroBg.jpg')",
      },
    },
  },
  plugins: [],
};
