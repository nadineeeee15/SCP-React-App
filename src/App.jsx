import { useState } from 'react';
import NavMenu from './components/NavMenu';
import HomePage from './components/HomePage';
import SCPPage from './components/SCPPage';
import scpData from './data/scpData.json';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const currentSCP = activePage !== 'Home'
    ? scpData.find(s => s.id === activePage)
    : null;

  return (
    <div className="app" data-testid="app">
      <NavMenu activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        {activePage === 'Home' ? (
          <HomePage onNavigate={setActivePage} />
        ) : (
          <SCPPage scp={currentSCP} />
        )}
      </main>
    </div>
  );
}

export default App;
