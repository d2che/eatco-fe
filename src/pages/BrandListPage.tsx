import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchBrandsByCategory } from '../api';
import Header from '../components/Header';
import BrandList from '../components/BrandList';
import Tag from '../components/Tag';

// API 응답 데이터 타입을 정의합니다.
type Brand = {
  id: number;
  name: string;
  logoUrl: string;
  cheapestMenuPrice: number;
  maxDiscount: number;
};

export default function BrandListPage() {
  // URL에서 category 값을 가져옵니다. (예: 'popular' 또는 'low-cost')
  const { category } = useParams<{ category: string }>();

  // 페이지 제목과 태그를 동적으로 설정하기 위한 정보
  const pageInfo = {
    popular: { tag: '지금뜨는', title: '인기 브랜드' },
    'low-cost': { tag: '착한가격', title: '가성비 브랜드' },
  };
  const currentInfo = category ? pageInfo[category as keyof typeof pageInfo] : null;

  // useQuery로 카테고리별 브랜드 목록 데이터를 가져옵니다.
  const { data, isLoading, isError } = useQuery<Brand[]>({
    queryKey: ['brands', category],
    queryFn: () => fetchBrandsByCategory(category!),
    enabled: !!category,
  });

  if (isLoading) {
    return <div>로딩 중입니다...</div>;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }
  
  if (!data) {
    return null;
  }

  // API 데이터를 BrandList 컴포넌트에 맞게 가공합니다.
  const brandListData = data.map(brand => ({
    id: brand.id,
    name: brand.name,
    price: brand.cheapestMenuPrice,
    discount: `최대 ${brand.maxDiscount.toLocaleString()}원 할인`,
    imageUrl: brand.logoUrl,
  }));

  return (
    <>
      <Header />
      <main className="px-4 py-6">
        <div className="flex items-center space-x-2">
          {currentInfo && (
            <>
              <Tag>{currentInfo.tag}</Tag>
              <h1 className="text-xl font-bold">{currentInfo.title}</h1>
            </>
          )}
        </div>
        <BrandList brands={brandListData} />
      </main>
    </>
  );
}
