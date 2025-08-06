import PageHeader from "../components/PageHeader";
import PlatformPriceCard from "../components/PlatformPriceCard";

// 임시 데이터 (나중에 이 부분은 API로 받아오게 됩니다)
const detailData = {
  menuName: "뿌링클",
  brandName: "BHC",
  imageUrl: "https://placehold.co/390x192",
  platformPrices: [
    {
      platformName: "우버이츠",
      price: 21000,
      discountInfo: "첫 주문 2,000원 할인",
    },
    { platformName: "배달의민족", price: 21000, discountInfo: "쿠폰할인 5%" },
    { platformName: "요기요", price: 21000, discountInfo: "할인 없음" },
    { platformName: "쿠팡이츠", price: 21000, discountInfo: "할인 없음" },
  ],
};

export default function PriceDetailPage() {
  // 가장 낮은 가격을 미리 계산합니다.
  const lowestPrice = Math.min(
    ...detailData.platformPrices.map((p) => p.price)
  );

  return (
    <div className="bg-zinc-100 min-h-screen">
      <PageHeader title={detailData.menuName} />

      <main>
        <img
          src={detailData.imageUrl}
          alt={detailData.menuName}
          className="w-full h-48 object-cover bg-zinc-300"
        />

        <div className="p-5 flex flex-col gap-2.5">
          {detailData.platformPrices.map((p) => (
            <PlatformPriceCard
              key={p.platformName}
              item={{
                ...p,
                menuName: detailData.menuName,
                brandName: detailData.brandName,
              }}
              isLowest={p.price === lowestPrice}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
