import PageHeader from "../components/PageHeader";
import BrandCard from "../components/BrandCard";

// 임시 데이터 (나중에 API로 대체)
const brandList = [
  {
    id: 1,
    name: "교촌치킨",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 2,
    name: "BBQ",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 3,
    name: "BHC",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 4,
    name: "페리카나",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 5,
    name: "푸라닭",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 6,
    name: "호식이두마리치킨",
    price: 20000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
];

export default function BrandListPage() {
  return (
    <div className="bg-stone-50">
      <PageHeader title="인기 브랜드" />

      {/* 브랜드 카드 그리드 */}
      <div className="p-5 grid grid-cols-2 gap-x-5 gap-y-8">
        {brandList.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
