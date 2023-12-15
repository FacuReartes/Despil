import React from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Body from './components/Body';
import ContextProvider from './Context/ContextProvider';
import Total from './components/Total';
import Perfiles from './components/Perfiles';

// habilitar el typescript

function App() {
  return (
    <ContextProvider>
      <div className='bg-[#155263] h-screen w-screen'>
        <Header/>
        <Perfiles/>
        <Inputs/>
        <Body/>
        <Total/>
      </div>
    </ContextProvider>
  );
}

export default App;
