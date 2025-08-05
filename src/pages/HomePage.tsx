import Header from "../components/Header";
import Banner from "../components/Banner";
import PriceComparison from "../components/PriceComparison";
import BrandCarousel from "../components/BrandCarousel";

// '인기 브랜드' 섹션에 사용할 8개의 임시 데이터
const popularBrands = [
  {
    id: 1,
    name: "BHC",
    price: 19000,
    discount: "최대 3,000원 할인",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "BHC",
    price: 19000,
    discount: "최대 3,000원 할인",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "BHC",
    price: 19000,
    discount: "최대 3,000원 할인",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "BHC",
    price: 19000,
    discount: "최대 3,000원 할인",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "BHC",
    price: 19000,
    discount: "최대 3,000원 할인",
    imageUrl: "https://placehold.co/112x112",
  },
];

// '가성비 브랜드' 섹션에 사용할 8개의 임시 데이터
const valueBrands = [
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 1,
    name: "피자스쿨",
    price: 9900,
    discount: "가성비의 왕",
    imageUrl: "https://placehold.co/112x112",
  },

  // ... (나머지 valueBrands 데이터)
];

// App() 함수는 지우고, HomePage 컴포넌트만 남깁니다.
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Banner />
        <PriceComparison />
        <BrandCarousel
          tag="지금뜨는"
          title="인기 브랜드"
          brands={popularBrands}
          moreLink="/brands/popular" // '인기 브랜드' 페이지 링크
        />
        <BrandCarousel
          tag="착한가격"
          title="가성비 브랜드"
          brands={valueBrands}
          moreLink="/brands/value" // '가성비 브랜드' 페이지 링크
        />
      </main>
    </>
  );
}
