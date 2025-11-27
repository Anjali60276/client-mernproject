import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminRouter from './Modules/Admin/AdminRouter/AdminRouter';
import UserRouter from './Modules/User/UserRouter/UserRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
