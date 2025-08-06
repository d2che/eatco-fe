type MenuItemData = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export default function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <div className="flex items-center gap-3.5">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-24 h-20 rounded-lg object-cover bg-zinc-300"
      />
      <div className="flex flex-col gap-2.5">
        <span className="text-stone-900 text-sm font-semibold">
          {item.name}
        </span>
        <span className="text-zinc-600 text-sm font-medium">
          {item.price.toLocaleString()}원
        </span>
      </div>
    </div>
  );
}
