import { useState, useEffect } from 'react';

/**
 * Item 등록/수정 폼 컴포넌트
 * initialData가 있으면 수정 모드, 없으면 등록 모드
 */
function ItemForm({ initialData = null, onSubmit, onCancel }) {
  const [form, setForm] = useState({ name: '', description: '', price: 0 });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        description: initialData.description || '',
        price: initialData.price,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'price' ? Number(value) : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{initialData ? '아이템 수정' : '아이템 등록'}</h3>

      <label>이름 *</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="이름을 입력하세요"
        style={styles.input}
      />

      <label>설명</label>
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="설명을 입력하세요"
        style={styles.input}
      />

      <label>가격 *</label>
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        min={0}
        required
        style={styles.input}
      />

      <div style={styles.buttonRow}>
        <button type="submit" style={styles.primaryBtn}>
          {initialData ? '수정' : '등록'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} style={styles.secondaryBtn}>
            취소
          </button>
        )}
      </div>
    </form>
  );
}

const styles = {
  form: { display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400, padding: 16, border: '1px solid #ddd', borderRadius: 8 },
  input: { padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4, fontSize: 14 },
  buttonRow: { display: 'flex', gap: 8, marginTop: 8 },
  primaryBtn: { padding: '8px 20px', backgroundColor: '#3b82f6', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' },
  secondaryBtn: { padding: '8px 20px', backgroundColor: '#e5e7eb', border: 'none', borderRadius: 4, cursor: 'pointer' },
};

export default ItemForm;
