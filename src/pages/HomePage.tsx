import { useState, useEffect } from "react"; // useState와 useEffect를 import 합니다.
import Header from "../components/Header";
import Banner from "../components/Banner";
import PriceComparison from "../components/PriceComparison";
import BrandCarousel from "../components/BrandCarousel";

// API 응답 데이터의 타입을 미리 정의해두면 좋습니다.
// 백엔드의 BrandSummary 스키마를 참고했습니다.
type Brand = {
  id: number;
  name: string;
  logoUrl: string; // imageUrl -> logoUrl로 변경
  cheapestMenuPrice: number; // price -> cheapestMenuPrice로 변경
  maxDiscount: number; // discount -> maxDiscount로 변경
};

export default function HomePage() {
  // API 데이터를 저장할 상태 변수들을 만듭니다. 처음에는 비어있습니다.
  const [popularBrands, setPopularBrands] = useState<Brand[]>([]);
  const [lowCostBrands, setLowCostBrands] = useState<Brand[]>([]);

  // 컴포넌트가 처음 마운트될 때 API를 호출합니다.
  useEffect(() => {
    fetch('http://localhost:3000/main')
      .then(response => response.json())
      .then(data => {
        // API로부터 받은 데이터로 상태를 업데이트합니다.
        setPopularBrands(data.popularBrands);
        setLowCostBrands(data.lowCostBrands);
      })
      .catch(error => console.error('API 호출 실패:', error));
  }, []); // []를 비워두면 이 효과는 처음에 한 번만 실행됩니다.


  // BrandCarousel에 넘겨줄 데이터를 API 데이터에 맞게 가공합니다.
  const popularBrandsData = popularBrands.map(brand => ({
    id: brand.id,
    name: brand.name,
    price: brand.cheapestMenuPrice,
    discount: `최대 ${brand.maxDiscount.toLocaleString()}원 할인`, // API 데이터를 UI에 맞게 변환
    imageUrl: brand.logoUrl
  }));

  const lowCostBrandsData = lowCostBrands.map(brand => ({
    id: brand.id,
    name: brand.name,
    price: brand.cheapestMenuPrice,
    discount: `최대 ${brand.maxDiscount.toLocaleString()}원 할인`,
    imageUrl: brand.logoUrl
  }));


  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Banner />
        <PriceComparison />
        <BrandCarousel
          tag="지금뜨는"
          title="인기 브랜드"
          brands={popularBrandsData} // 가공된 데이터를 props로 전달
          moreLink="/brands/popular"
        />
        <BrandCarousel
          tag="착한가격"
          title="가성비 브랜드"
          brands={lowCostBrandsData} // 가공된 데이터를 props로 전달
          moreLink="/brands/value"
        />
      </main>
    </>
  );
}
