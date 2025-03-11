import {Routes, Route} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

function App() {

  // FAFBFF
  return (
    <div className="App" style={{backgroundColor: '#FAFBFF', height: '100vh'}}>
      <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/join" element={<JoinPage />}></Route>
      </Routes>
    </div>
  );
}

export default App
