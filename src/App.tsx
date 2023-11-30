import React from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className='bg-[#155263] h-screen w-screen'>
      <Header/>
      <Inputs/>
    </div>
  );
}

export default App;
