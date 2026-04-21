# React Sample

팀 과제용 React 샘플 프로젝트입니다.  
기본 CRUD UI 구조를 제공하며, 각자 맡은 도메인에 맞게 커스텀하여 개발하세요.

## 기술 스택
- React 18
- Axios (HTTP 클라이언트)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start

# 빌드
npm run build
```

> Spring Boot 서버(`localhost:8080`)가 먼저 실행 중이어야 합니다.

## 프로젝트 구조

```
src/
├── api/
│   ├── client.js        # Axios 기본 설정 (인터셉터)
│   └── itemApi.js       # Item API 함수 모음
├── hooks/
│   └── useItems.js      # CRUD 커스텀 훅
├── components/
│   ├── ItemForm.jsx     # 등록/수정 폼
│   └── ItemList.jsx     # 목록 테이블
├── pages/
│   └── ItemPage.jsx     # 메인 페이지
├── App.js               # 루트 컴포넌트
└── index.js             # 진입점
```

## 커스텀 가이드

1. `api/itemApi.js` → 본인의 도메인 API 함수로 교체
2. `hooks/useItems.js` → 커스텀 훅 수정
3. `components/` → Form, List 컴포넌트 필드 수정
4. `pages/` → 페이지 로직 수정
5. `App.js` → 라우팅 추가 시 react-router-dom 설치 후 수정

## 라우팅 추가

```bash
npm install react-router-dom
```

```jsx
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 환경변수 설정

```bash
cp .env.example .env
# .env 파일에서 API 주소 수정
```
