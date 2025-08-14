import { useQuery } from '@tanstack/react-query'; // 1. useQuery 훅을 import 합니다.
import { fetchMainData } from '../api'; // 2. api.ts에서 만든 API 호출 함수를 import 합니다.
import Header from '../components/Header';
import Banner from '../components/Banner';
import PriceComparison from '../components/PriceComparison';
import BrandCarousel from '../components/BrandCarousel';

// API 응답 데이터의 타입을 정의합니다. (기존과 동일)
type Brand = {
  id: number;
  name: string;
  logoUrl: string;
  cheapestMenuPrice: number;
  maxDiscount: number;
};

// 백엔드 API 응답 전체에 대한 타입을 정의합니다.
type MainData = {
  popularBrands: Brand[];
  lowCostBrands: Brand[];
  // popularMenus도 있지만 일단 여기서는 사용하지 않습니다.
};


export default function HomePage() {
  // 3. useQuery 훅 한 줄로 API 데이터를 가져옵니다.
  // useState와 useEffect가 이 한 줄로 대체됩니다.
  const { data, isLoading, isError } = useQuery<MainData>({
    queryKey: ['mainData'], // 이 데이터의 고유한 이름표입니다.
    queryFn: fetchMainData,  // 데이터를 가져올 때 실행할 함수입니다.
  });

  // 4. 로딩 중일 때 보여줄 화면입니다.
  if (isLoading) {
    return <div>로딩 중입니다...</div>;
  }

  // 5. 에러가 발생했을 때 보여줄 화면입니다.
  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

    // 데이터가 아직 도착하지 않은 예외적인 경우를 처리합니다.
  if (!data) {
    return null; // 또는 <></> (빈 화면)을 반환합니다.
  }

  // 6. API 데이터를 BrandCarousel 컴포넌트에 맞게 가공합니다.
  const popularBrandsData = data.popularBrands.map(brand => ({
    id: brand.id,
    name: brand.name,
    price: brand.cheapestMenuPrice,
    discount: `최대 ${brand.maxDiscount.toLocaleString()}원 할인`,
    imageUrl: brand.logoUrl,
  }));

  const lowCostBrandsData = data.lowCostBrands.map(brand => ({
    id: brand.id,
    name: brand.name,
    price: brand.cheapestMenuPrice,
    discount: `최대 ${brand.maxDiscount.toLocaleString()}원 할인`,
    imageUrl: brand.logoUrl,
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
          brands={popularBrandsData}
          moreLink="/brands/popular"
        />
        <BrandCarousel
          tag="착한가격"
          title="가성비 브랜드"
          brands={lowCostBrandsData}
          moreLink="/brands/low-cost" // 링크 주소를 low-cost로 수정
        />
      </main>
    </>
  );
}
