import Header from "./components/Header"; // Header 컴포넌트를 가져옵니다.
import Banner from "./components/Banner"; // Banner 컴포넌트를 가져옵니다.
import PriceComparison from "./components/PriceComparison";

function App() {
  return (
    <div className="w-full max-w-[390px] mx-auto min-h-screen bg-white font-pretendard">
      <Header />

      <main className="overflow-hidden">
        <Banner />
        <PriceComparison />
      </main>
    </div>
  );
}

export default App;
