import ItemPage from './pages/ItemPage';

/**
 * 앱 루트 컴포넌트
 * 라우팅이 필요하면 react-router-dom을 추가하세요.
 * npm install react-router-dom
 *
 * 예시:
 * import { BrowserRouter, Routes, Route } from 'react-router-dom';
 * <BrowserRouter>
 *   <Routes>
 *     <Route path="/" element={<ItemPage />} />
 *     <Route path="/users" element={<UserPage />} />
 *   </Routes>
 * </BrowserRouter>
 */
function App() {
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 Sample App</h1>
      </header>
      <main>
        <ItemPage />
      </main>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: '#1e293b',
    color: '#fff',
    padding: '12px 24px',
  },
  title: {
    margin: 0,
    fontSize: 20,
  },
};

export default App;
