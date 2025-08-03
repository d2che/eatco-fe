// src/components/Header.tsx

// 1. 일반 React 컴포넌트처럼 불러옵니다.
import SearchIcon from "./icons/SearchIcon";

export default function Header() {
  return (
    <header className="p-5 space-y-4 bg-white shadow-sm rounded-b-xl">
      {/* ... 로고 등 ... */}
      <div className="flex items-baseline gap-2">
        <h1 className="text-2xl text-red-500 font-bold">eatconomy</h1>
        <span className="text-stone-800 font-semibold">잇코노미</span>
      </div>

      <div className="relative">
        <input
          type="text"
          className="w-full h-10 px-4 pr-12 bg-white rounded-lg border-2 border-red-400 focus:outline-none"
          placeholder="어떤 메뉴의 가격이 궁금하세요?"
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
          {/* 2. 이제 이 SearchIcon은 진짜 React 컴포넌트입니다. */}
          <SearchIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
