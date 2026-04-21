import api from './client';

/**
 * Item API
 * 팀 과제에서 본인의 도메인 API로 교체하세요.
 * ex) userApi.js, productApi.js 등
 */

export const itemApi = {
  // 전체 조회
  getAll: () => api.get('/items'),

  // 단건 조회
  getById: (id) => api.get(`/items/${id}`),

  // 생성
  create: (data) => api.post('/items', data),

  // 수정
  update: (id, data) => api.put(`/items/${id}`, data),

  // 삭제
  delete: (id) => api.delete(`/items/${id}`),
};
