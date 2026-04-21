import { useState, useEffect, useCallback } from 'react';
import { itemApi } from '../api/itemApi';

/**
 * Item CRUD 커스텀 훅
 * 팀 과제에서 본인의 도메인 훅으로 교체하세요.
 */
export function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await itemApi.getAll();
      setItems(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const create = async (formData) => {
    await itemApi.create(formData);
    await fetchAll();
  };

  const update = async (id, formData) => {
    await itemApi.update(id, formData);
    await fetchAll();
  };

  const remove = async (id) => {
    await itemApi.delete(id);
    await fetchAll();
  };

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return { items, loading, error, create, update, remove, refetch: fetchAll };
}
