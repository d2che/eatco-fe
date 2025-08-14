const API_BASE_URL = 'http://localhost:3000';

// GET /main API를 호출하는 함수
export const fetchMainData = async () => {
  const response = await fetch(`${API_BASE_URL}/main`);
  if (!response.ok) {
    throw new Error('네트워크 응답에 문제가 있습니다.');
  }
  return response.json();
};

// GET /brands?category={category} API를 호출하는 함수
export const fetchBrandsByCategory = async (category: string) => {
  const response = await fetch(`${API_BASE_URL}/brands?category=${category}`);
  if (!response.ok) {
    throw new Error('네트워크 응답에 문제가 있습니다.');
  }
  return response.json();
};

// 앞으로 여기에 fetchBrands, fetchMenus 등 다른 API 호출 함수들을 추가하면 됩니다.
