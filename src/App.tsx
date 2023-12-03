import React from 'react';
import './App.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Body from './components/Body';
import GastoContextProvider from './gastoContext/gastoContextProvider';
import Total from './components/Total';

function App() {
  return (
    <GastoContextProvider>
      <div className='bg-[#155263] h-screen w-screen'>
        <Header/>
        <Inputs/>
        <Body/>
        <Total/>
      </div>
    </GastoContextProvider>
  );
}

export default App;
