/**
 * Item 목록 테이블 컴포넌트
 */
function ItemList({ items, onEdit, onDelete }) {
  if (items.length === 0) {
    return <p style={{ color: '#888' }}>등록된 아이템이 없습니다.</p>;
  }

  return (
    <table style={styles.table}>
      <thead>
        <tr style={styles.headerRow}>
          <th style={styles.th}>ID</th>
          <th style={styles.th}>이름</th>
          <th style={styles.th}>설명</th>
          <th style={styles.th}>가격</th>
          <th style={styles.th}>관리</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} style={styles.row}>
            <td style={styles.td}>{item.id}</td>
            <td style={styles.td}>{item.name}</td>
            <td style={styles.td}>{item.description || '-'}</td>
            <td style={styles.td}>{item.price.toLocaleString()}원</td>
            <td style={styles.td}>
              <button onClick={() => onEdit(item)} style={styles.editBtn}>수정</button>
              <button onClick={() => onDelete(item.id)} style={styles.deleteBtn}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const styles = {
  table: { width: '100%', borderCollapse: 'collapse', marginTop: 16 },
  headerRow: { backgroundColor: '#f3f4f6' },
  row: { borderBottom: '1px solid #e5e7eb' },
  th: { padding: '10px 12px', textAlign: 'left', fontWeight: 600, fontSize: 14 },
  td: { padding: '10px 12px', fontSize: 14 },
  editBtn: { marginRight: 6, padding: '4px 12px', backgroundColor: '#f59e0b', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' },
  deleteBtn: { padding: '4px 12px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' },
};

export default ItemList;
