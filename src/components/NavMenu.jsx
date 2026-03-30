import { useState } from 'react';
import './NavMenu.css';

const navItems = ['Home', 'SCP-002', 'SCP-003', 'SCP-004', 'SCP-005', 'SCP-006'];

// Manages the mobile menu state to ensure responsive functionality.
function NavMenu({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
//Handles seamless SPA navigation and closes the mobile menu.
  const handleNavigate = (item) => {
    onNavigate(item);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" data-testid="navbar">
      <div className="logo" onClick={() => handleNavigate('Home')} data-testid="logo">
        <span className="logo-icon">☣</span>
        <div className="logo-text">
          <span className="logo-main">SCP FOUNDATION</span>
          <span className="logo-sub">Secure · Contain · Protect</span>
        </div>
      </div>

      {/* Desktop nav */}
      <ul className="nav-links" data-testid="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <button
              className={'nav-btn ' + (activePage === item ? 'active' : '')}
              onClick={() => handleNavigate(item)}
              data-testid={'nav-' + item}
              aria-current={activePage === item ? 'page' : undefined}
            >
              {item}
              {activePage === item && <span className="active-indicator" />}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-clearance">LEVEL 5 ACCESS</div>

      {/* Hamburger button, mobile only */}
      <button
        className={'hamburger ' + (menuOpen ? 'open' : '')}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        data-testid="hamburger"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile dropdown menu */}
      <div className={'mobile-menu ' + (menuOpen ? 'mobile-menu-open' : '')}>
        {navItems.map((item) => (
          <button
            key={item}
            className={'mobile-nav-btn ' + (activePage === item ? 'active' : '')}
            onClick={() => handleNavigate(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavMenu;