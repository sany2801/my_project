import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Logo from './components/Logo/Logo';
// import Button from './components/Button/Button';
import Form from './components/adminForm/form';
import Map from './components/map/map';
import Menu from './components/menu/menu';
import AutorizationPage from './layouts/AutorizationPage';
import Addrestaran from './pages/addrestaran';
import AdminPanel from './layouts/adminPanel';
function App() {
  return (
  <Routes >
    <Route path='/' element={<AutorizationPage/>}/>
    <Route path='/admin' element={<AdminPanel/>}/>
    <Route path='/addrestaran' element={<Addrestaran/>}/>
  </Routes>

  
    );
}

export default App;
