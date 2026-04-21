import axios from 'axios';

/**
 * Axios 기본 설정
 * baseURL은 package.json proxy 또는 환경변수로 관리
 */
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (토큰 등 공통 헤더 추가 시 활용)
api.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 응답 인터셉터 (공통 에러 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || '서버 오류가 발생했습니다.';
    alert(message);
    return Promise.reject(error);
  }
);

export default api;
