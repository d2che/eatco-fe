// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // 이제 'Noto Sans KR'이 아닌, 실제 'Pretendard' 폰트를 직접 사용합니다.
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
