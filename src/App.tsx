import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrandListPage from "./pages/BrandListPage";
import ValueBrandListPage from "./pages/ValueBrandListPage";

function App() {
  return (
    <div className="w-full max-w-[390px] mx-auto min-h-screen bg-white font-pretendard">
      <Routes>
        {/* path="/" : 기본 주소일 경우 HomePage 컴포넌트를 보여줍니다. */}
        <Route path="/" element={<HomePage />} />
        <Route path="/brands/popular" element={<BrandListPage />} />
        <Route path="/brands/value" element={<ValueBrandListPage />} />
      </Routes>
    </div>
  );
}

export default App;
