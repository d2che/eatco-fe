import React from "react";
import PageHeader from "../components/PageHeader";
import BrandCard from "../components/BrandCard";

// App.tsx에 있던 '가성비 브랜드' 임시 데이터를 가져옵니다.
const valueBrands = [
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 2,
    name: "한솥도시락",
    price: 4500,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 3,
    name: "이삭토스트",
    price: 3500,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 4,
    name: "빽다방",
    price: 2000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 5,
    name: "역전우동",
    price: 5500,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
  {
    id: 6,
    name: "메가커피",
    price: 2000,
    tag: "최저가",
    imageUrl: "https://placehold.co/160x128",
  },
];

export default function ValueBrandListPage() {
  // 1. 데이터를 가격(price) 오름차순으로 정렬합니다.
  const sortedBrands = [...valueBrands].sort((a, b) => a.price - b.price);

  return (
    <div className="bg-stone-50">
      <PageHeader title="가성비 브랜드" />

      {/* 브랜드 카드 그리드 */}
      <div className="p-5 grid grid-cols-2 gap-x-5 gap-y-8">
        {/* 2. 정렬된 데이터를 화면에 그립니다. */}
        {sortedBrands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}
