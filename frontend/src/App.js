import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Skole from './components/Skole';
import Navbar from './components/Navbar';
import DataingeniørSide from './components/sider/DataingeniørSide';
import LærerSide from './components/sider/LærerSide';
import MusikkSide from './components/sider/MusikkSide';
import ØkonomSide from './components/sider/ØkonomSide';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Skole />} />
          <Route path="/dataingeior" element={<DataingeniørSide />} />
          <Route path="/lærer" element={<LærerSide />} />
          <Route path="/musikk" element={<MusikkSide />} />
          <Route path="/økonom" element={<ØkonomSide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
