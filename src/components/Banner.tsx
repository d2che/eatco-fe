// src/components/Banner.tsx

// 1. 프로젝트에 저장한 이미지를 import로 불러옵니다.
import bannerImage from "../assets/images/banner.png"; // 파일 이름은 저장한 이름과 같아야 합니다.

export default function Banner() {
  return (
    <section>
      <img
        className="w-full h-48 object-cover"
        // 2. src에 import한 이미지 변수를 넣어줍니다.
        src={bannerImage}
        alt="당신의 치킨을 최저가로! 잇코노미 배너" // 이미지 내용을 설명하는 대체 텍스트
      />
    </section>
  );
}
