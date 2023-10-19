import React, { useEffect } from 'react';
import './App.css';
import Autorization from './pages/Autorization';
import Header from './components/header/Header';
import ChatBot from './components/ChatBot/ChatBot';
import "./components/ChatBot/ChatBot"


function App() {
  useEffect(() => {

  })

  return (

    <div className="App">
      {/* <Header></Header> */}
      {/* <Autorization></Autorization> */}
      <ChatBot />
    </div>
  );
}

export default App;
