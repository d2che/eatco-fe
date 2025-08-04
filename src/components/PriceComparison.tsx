import { useHorizontalSwipe } from "../hooks/useHorizontalSwipe"; // 1. 커스텀 훅 불러오기

// 나중에 API로 받아올 데이터의 임시 형태입니다.
const comparisonItems = [
  {
    name: "뿌링클",
    imageUrl: "https://placehold.co/200x120",
    prices: [
      { platform: "쿠팡이츠", price: 19500 },
      { platform: "배달의민족", price: 20500 },
      { platform: "땡겨요", price: 21000 },
    ],
  },
  {
    name: "후라이드",
    imageUrl: "https://placehold.co/200x120",
    prices: [
      { platform: "쿠팡이츠", price: 19500 },
      { platform: "배달의민족", price: 20500 },
      { platform: "땡겨요", price: 21000 },
    ],
  },
  {
    name: "후라이드",
    imageUrl: "https://placehold.co/200x120",
    prices: [
      { platform: "쿠팡이츠", price: 19500 },
      { platform: "배달의민족", price: 20500 },
      { platform: "땡겨요", price: 21000 },
    ],
  },
  {
    name: "후라이드",
    imageUrl: "https://placehold.co/200x120",
    prices: [
      { platform: "쿠팡이츠", price: 19500 },
      { platform: "배달의민족", price: 20500 },
      { platform: "땡겨요", price: 21000 },
    ],
  },
  {
    name: "후라이드",
    imageUrl: "https://placehold.co/200x120",
    prices: [
      { platform: "쿠팡이츠", price: 19500 },
      { platform: "배달의민족", price: 20500 },
      { platform: "땡겨요", price: 21000 },
    ],
  },
];

// 가격을 표시하는 한 줄(Row) UI를 위한 작은 컴포넌트입니다.
const PriceRow = ({
  platform,
  price,
  isLowest,
}: {
  platform: string;
  price: number;
  isLowest: boolean;
}) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-1.5">
      <div className="w-5 h-5 rounded-md bg-gray-200" />{" "}
      {/* 플랫폼 로고가 들어갈 자리 */}
      <span className="text-zinc-600 text-xs font-medium">{platform}</span>
    </div>
    <div className="flex items-baseline gap-1">
      <span
        className={`font-bold ${
          isLowest ? "text-red-500 text-base" : "text-stone-800 text-sm"
        }`}
      >
        {price.toLocaleString()}
      </span>
      <span className="text-zinc-600 text-xs">원</span>
    </div>
  </div>
);

// 가격 비교 카드 UI 컴포넌트입니다.
const ComparisonCard = ({ item }: { item: (typeof comparisonItems)[0] }) => {
  const lowestPrice = Math.min(...item.prices.map((p) => p.price));

  return (
    <div className="w-[200px] h-[278px] flex-shrink-0 flex flex-col shadow-lg rounded-lg overflow-hidden">
      {/* 메뉴 이름 부분 */}
      <div className="py-2 text-center bg-gradient-to-l from-orange-400 to-red-400">
        <h3 className="text-white text-base font-bold">{item.name}</h3>
      </div>

      {/* 카드 본문 (이미지 + 가격 정보) */}
      <div className="bg-white p-3.5 flex flex-col flex-grow">
        {/* 이미지 Placeholder */}
        <div
          className="w-full h-28 bg-zinc-300 rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />

        {/* 가격 정보 영역 */}
        <div className="flex flex-col gap-3 mt-auto pt-4">
          {item.prices.map((p) => (
            <PriceRow
              key={p.platform}
              {...p}
              isLowest={p.price === lowestPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 최종적으로 내보낼(export) 가격 비교 섹션 컴포넌트입니다.
export default function PriceComparison() {
  const swipeRef = useHorizontalSwipe();
  return (
    <section className="pt-[30px] space-y-4 overflow-hidden">
      <h2 className="text-stone-900 text-xl font-bold px-[20px]">가격비교</h2>
      <div
        ref={swipeRef}
        className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {comparisonItems.map((item) => (
          <div className="snap-center">
            {/* 스크롤 시 카드 중앙에 멈추도록 snap-center 추가 흠 필요할까? */}
            <ComparisonCard key={item.name} item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
