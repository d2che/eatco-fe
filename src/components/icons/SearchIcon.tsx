// src/components/icons/SearchIcon.tsx

import React from "react";

// SVG에 className 같은 props를 전달하기 위한 타입 설정
type SVGProps = React.SVGProps<SVGSVGElement>;

const SearchIcon = (props: SVGProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // 이 부분이 중요합니다! className 등을 받을 수 있게 해줍니다.
  >
    <circle cx="11" cy="11" r="7" stroke="#EF4444" strokeWidth="2" />
    <path
      d="M16 16L20 20"
      stroke="#EF4444"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SearchIcon;
