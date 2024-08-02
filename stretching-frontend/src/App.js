import React from 'react';
import Header from './components/Header';
import './App.css';
import Map from './components/Map';
import Positions from './components/Positions';
import WellnessMapScript from './components/WellnessMapScript';
import WellnessPositions from './components/WellnessPositions';
import HealingContent from './components/HealingContent';

function App() {
  return (
    <div className="App">
        <Header />
        <Map className='map'></Map>
        <h2 className='position'>추천 힐링 스팟</h2>
        <Positions />
        <HealingContent></HealingContent>
        <WellnessMapScript></WellnessMapScript>
        <h2 className='position'>추천 웰니스 프로그램</h2>
        <WellnessPositions></WellnessPositions>
        
    </div>
  );
}

export default App;
