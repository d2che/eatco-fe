import Logo from "./icons/Logo"; // 1. 새로 만든 Logo 컴포넌트를 불러옵니다.
import SearchIcon from "./icons/SearchIcon";

export default function Header() {
  return (
    <header className="p-5 space-y-4 bg-white shadow-sm rounded-b-xl">
      {/* 로고 영역 */}
      <div className="flex items-center gap-2">
        {/* 2. 기존 h1 태그 대신 Logo 컴포넌트를 사용합니다. */}
        <Logo />
        <span className="text-stone-800 font-bold">잇코노미</span>
      </div>

      {/* 검색창 영역 */}
      <div className="relative">
        <input
          type="text"
          className="w-full h-10 px-4 pr-12 bg-white rounded-lg border-2 border-red-400 focus:outline-none"
          placeholder="어떤 메뉴의 가격이 궁금하세요?"
        />
        <div className="absolute top-0 right-0 h-full flex items-center pr-3 pointer-events-none">
          <SearchIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}
