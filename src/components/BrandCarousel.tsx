// import { useHorizontalSwipe } from "../hooks/useHorizontalSwipe"; // PC 스와이프 훅

// 이 컴포넌트가 받을 데이터의 타입을 미리 정의합니다.
type Brand = {
  id: number;
  name: string;
  price: number;
  discount: string;
  imageUrl: string;
};

type Props = {
  tag: string;
  title: string;
  brands: Brand[];
};

// 브랜드 카드 UI를 위한 작은 컴포넌트
const BrandCard = ({ brand }: { brand: Brand }) => (
  <div className="flex-shrink-0 w-28 text-center space-y-1">
    <img
      src={brand.imageUrl}
      alt={brand.name}
      className="w-full h-28 rounded-lg bg-gray-200 object-cover"
    />
    <div className="font-bold text-stone-900 text-sm truncate">
      {brand.name}
    </div>
    <div className="font-bold text-red-500 text-sm">
      {brand.price.toLocaleString()}원
    </div>
    <div className="text-xs text-red-500 bg-pink-100 rounded-md py-0.5 px-1 font-medium truncate">
      {brand.discount}
    </div>
  </div>
);

// 태그, 제목, 브랜드 목록 데이터를 props로 받는 재사용 가능한 캐러셀 컴포넌트
export default function BrandCarousel({ tag, title, brands }: Props) {
  // const swipeRef = useHorizontalSwipe();

  return (
    <section className="p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 bg-red-400 text-white text-xs font-bold rounded-md">
            {tag}
          </span>
          <h2 className="text-stone-900 text-xl font-bold">{title}</h2>
        </div>
        <button className="flex items-center text-neutral-400 text-xs font-medium">
          더보기
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17L14 12.2L10 7"
              stroke="#999999"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div
        // ref={swipeRef}
        className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
      >
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </section>
  );
}
