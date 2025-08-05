import Header from "./components/Header"; // Header 컴포넌트를 가져옵니다.
import Banner from "./components/Banner"; // Banner 컴포넌트를 가져옵니다.
import PriceComparison from "./components/PriceComparison";
import BrandCarousel from "./components/BrandCarousel";

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
    id: 2,
    name: "교촌치킨",
    price: 20000,
    discount: "배달팁 할인",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 3,
    name: "BBQ",
    price: 21000,
    discount: "신메뉴 출시",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 4,
    name: "굽네치킨",
    price: 18000,
    discount: "고추바사삭",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 5,
    name: "푸라닭",
    price: 19900,
    discount: "블랙알리오",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 6,
    name: "자담치킨",
    price: 20000,
    discount: "동물복지 치킨",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 7,
    name: "처갓집",
    price: 19000,
    discount: "슈프림 양념",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 8,
    name: "노랑통닭",
    price: 18000,
    discount: "알싸한 마늘치킨",
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
    id: 2,
    name: "한솥도시락",
    price: 4500,
    discount: "든든한 한끼",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 3,
    name: "이삭토스트",
    price: 3500,
    discount: "아침은 역시",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 4,
    name: "빽다방",
    price: 2000,
    discount: "앗!메리카노",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 5,
    name: "역전우동",
    price: 5500,
    discount: "따끈한 국물",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 6,
    name: "메가커피",
    price: 2000,
    discount: "빅사이즈 커피",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 7,
    name: "봉구스밥버거",
    price: 3000,
    discount: "주머니가 가벼울때",
    imageUrl: "https://placehold.co/112x112",
  },
  {
    id: 8,
    name: "홍콩반점",
    price: 6000,
    discount: "믿고 먹는 백주부",
    imageUrl: "https://placehold.co/112x112",
  },
];

function App() {
  return (
    <div className="w-full max-w-[390px] mx-auto min-h-screen bg-white font-pretendard">
      <Header />

      <main>
        <Banner />
        <PriceComparison />
        <BrandCarousel
          tag="지금뜨는"
          title="인기 브랜드"
          brands={popularBrands}
        />
        <BrandCarousel
          tag="착한가격"
          title="가성비 브랜드"
          brands={valueBrands}
        />
      </main>
    </div>
  );
}

export default App;
