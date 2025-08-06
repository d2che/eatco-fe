import PageHeader from "../components/PageHeader";
import MenuItem from "../components/MenuItem";

// 임시 데이터 (나중에 이 부분은 API로 받아오게 됩니다)
const menuData = {
  brandName: "교촌치킨",
  categories: [
    {
      name: "신메뉴",
      items: [
        {
          id: 1,
          name: "허니갈릭한마리",
          price: 22000,
          imageUrl: "https://placehold.co/96x80",
        },
        {
          id: 2,
          name: "허니갈릭싱글윙",
          price: 22000,
          imageUrl: "https://placehold.co/96x80",
        },
        {
          id: 3,
          name: "허니갈릭윙박스",
          price: 22000,
          imageUrl: "https://placehold.co/96x80",
        },
      ],
    },
    {
      name: "허니시리즈",
      items: [
        {
          id: 4,
          name: "허니콤보",
          price: 23000,
          imageUrl: "https://placehold.co/96x80",
        },
        {
          id: 5,
          name: "허니오리지날",
          price: 20000,
          imageUrl: "https://placehold.co/96x80",
        },
      ],
    },
  ],
};

export default function MenuPage() {
  return (
    <div className="bg-stone-50">
      <PageHeader title={menuData.brandName} />

      <main className="p-5 flex flex-col gap-8">
        {menuData.categories.map((category) => (
          <section key={category.name}>
            <h2 className="text-stone-900 text-xl font-bold mb-4">
              {category.name}
            </h2>
            <div className="flex flex-col gap-6">
              {category.items.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
