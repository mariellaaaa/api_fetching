import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Sport } from './components/pages/Sport';
import { SportNews } from './components/pages/SportNews';
import { F1 } from './components/pages/F1';
import { Futtball } from './components/pages/Futtball';
import { Handball } from './components/pages/Handball';
import { Deschtennis } from './components/pages/Deschtennis';
import { Volleyball } from './components/pages/Volleyball';
import  LiveArena  from './components/pages/LiveArena';
import { Cyclissem } from './components/pages/Cyclissem';
import { AutoMotoSport } from './components/pages/AutoMotoSport';
import { Esport } from './components/pages/Esport';
import { WeiderSportaarten } from './components/pages/WeiderSportaarten';


function App() {
  return (
    <Router>
      <Navbar />
      <div className='main'>
        <Routes>
            <Route path='/sport' element={<Sport />} />
            <Route path='/sport/news' element={<SportNews />} />
            <Route path='/sport/live-arena' element={<LiveArena />} />
            <Route path='/sport/f1' element={<F1 />} />
            <Route path='/sport/futtball' element={<Futtball />} />
            <Route path='/sport/handball' element={<Handball />} />
            <Route path='/sport/deschtennis' element={<Deschtennis />} />
            <Route path='/sport/volleyball' element={<Volleyball />} />
            <Route path='/sport/cyclissem' element={<Cyclissem />} />
            <Route path='/sport/auto-moto-sport' element={<AutoMotoSport />} />
            <Route path='/sport/e-sport' element={<Esport />} />
            <Route path='/sport/weider-sportaarten' element={<WeiderSportaarten />} />
          </Routes>
      </div>
    </Router>
    
  );
}

export default App;
