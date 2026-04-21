import { useState } from 'react';
import { useItems } from '../hooks/useItems';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

/**
 * Item 메인 페이지
 * 목록 조회 + 등록/수정/삭제를 한 페이지에서 처리
 */
function ItemPage() {
  const { items, loading, error, create, update, remove } = useItems();
  const [editTarget, setEditTarget] = useState(null); // null: 등록 모드 / item: 수정 모드
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (item) => {
    setEditTarget(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await remove(id);
    }
  };

  const handleSubmit = async (formData) => {
    if (editTarget) {
      await update(editTarget.id, formData);
    } else {
      await create(formData);
    }
    setShowForm(false);
    setEditTarget(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditTarget(null);
  };

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p style={{ color: 'red' }}>오류가 발생했습니다.</p>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>아이템 관리</h2>
        {!showForm && (
          <button onClick={() => setShowForm(true)} style={styles.addBtn}>
            + 등록
          </button>
        )}
      </div>

      {showForm && (
        <ItemForm
          initialData={editTarget}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}

      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

const styles = {
  container: { padding: 24, maxWidth: 900, margin: '0 auto' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  addBtn: { padding: '8px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontWeight: 600 },
};

export default ItemPage;
