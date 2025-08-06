type PlatformPrice = {
  platformName: string;
  menuName: string;
  brandName: string;
  price: number;
  discountInfo: string;
};

type Props = {
  item: PlatformPrice;
  isLowest: boolean; // 가장 저렴한지 여부를 받아옵니다.
};

export default function PlatformPriceCard({ item, isLowest }: Props) {
  return (
    // isLowest가 true이면 배경색을 다르게 설정합니다.
    <div
      className={`flex items-center gap-7 p-5 rounded-lg ${
        isLowest ? "bg-pink-50" : "bg-white"
      }`}
    >
      {/* 플랫폼 로고 & 이름 */}
      <div className="flex flex-col items-center justify-center gap-1.5 w-14">
        <div className="w-[55px] h-[55px] bg-gray-200 rounded-xl" />
        <span className="text-black text-sm font-semibold">
          {item.platformName}
        </span>
      </div>

      {/* 가격 정보 */}
      <div className="flex flex-col items-start gap-1.5 flex-grow">
        <span className="text-zinc-600 text-sm font-medium">
          {item.menuName} • {item.brandName}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-stone-900 text-lg font-semibold">
            {item.price.toLocaleString()}원
          </span>
          {isLowest && (
            <div className="px-1.5 py-0.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-md">
              <span className="text-white text-[10px] font-bold">
                가장 저렴해요!
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-red-400 text-sm font-semibold">할인</span>
          <span className="text-zinc-600 text-sm font-medium">
            {item.discountInfo}
          </span>
        </div>
      </div>
    </div>
  );
}
