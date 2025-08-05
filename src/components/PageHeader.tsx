// src/components/PageHeader.tsx
import { useNavigate } from "react-router-dom";

// 뒤로가기 아이콘
const BackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2L8 11.6L16 22"
      stroke="#1E1E1E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PageHeader({ title }: { title: string }) {
  const navigate = useNavigate();

  // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <header className="relative flex justify-center items-center h-20 bg-white shadow-sm">
      <button onClick={handleBackClick} className="absolute left-4">
        <BackIcon />
      </button>
      <h1 className="text-stone-900 text-xl font-bold">{title}</h1>
    </header>
  );
}
