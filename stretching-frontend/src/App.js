import React from 'react';
import Header from './components/Header';
import './App.css';
import Map from './components/Map';
import LocationList from './components/LocationList';

function App() {
  return (
    <div className="App">
        <Header />
        <Map className='map'></Map>
        <h2 className='position'>추천 장소</h2>
        <LocationList />
    </div>
  );
}

export default App;
