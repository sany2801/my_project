import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import Logo from './components/Logo/Logo';
// import Button from './components/Button/Button';
import Form from './components/adminForm/form';
import Map from './components/map/map';
import Menu from './components/menu/menu';
import AutorizationPage from './layouts/AutorizationPage';
import Addrestaran from './layouts/addrestaran';
import AdminPanel from './layouts/adminPanel';
import UserPanel from './layouts/UserPanel.js';
import AddOrder from './layouts/addOrder.js';
function App() {
  return (
  <Routes >
    <Route path='/' element={<AutorizationPage/>}/>
    <Route path='/admin' element={<AdminPanel/>}/>
    <Route path='/addrestaran' element={<Addrestaran/>}/>
    <Route path='/userpanel' element={<UserPanel/>}/>
    <Route path='/addOrder' element={<AddOrder/>}/>
  </Routes>

  
    );
}

export default App;
