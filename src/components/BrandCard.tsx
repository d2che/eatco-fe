// src/components/BrandCard.tsx

type Brand = {
  id: number;
  name: string;
  price: number;
  tag: string;
  imageUrl: string;
};

export default function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <img
        src={brand.imageUrl}
        alt={brand.name}
        className="w-full h-32 bg-zinc-300 rounded-lg object-cover"
      />
      <div className="flex flex-col items-start gap-1">
        <div className="text-stone-900 text-base font-bold">{brand.name}</div>
        <div className="flex items-center gap-1.5">
          <div className="px-1 py-0.5 bg-pink-100 rounded-md">
            <span className="text-red-400 text-[10px] font-medium">
              {brand.tag}
            </span>
          </div>
          <div className="flex items-baseline">
            <span className="text-stone-900 text-xl font-bold">
              {brand.price.toLocaleString()}
            </span>
            <span className="text-zinc-600 text-sm font-medium">원</span>
          </div>
        </div>
      </div>
    </div>
  );
}
