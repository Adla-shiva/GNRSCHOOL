import React, { useState } from 'react';
import { SCHOOL_INFO } from '../constants';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['home', 'aboutus', 'admissions', 'campus', 'contactus', 'gallery'];
  const [menuOpen, setMenuOpen] = useState(false);

  const selectTab = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <h1 className="header-title" onClick={() => selectTab('home')}>
          <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="" className="header-logo" />
          {SCHOOL_INFO.name}
        </h1>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav id="main-nav" className={menuOpen ? 'open' : ''}>
          <ul>
            {tabs.map((tab) => (
              <li key={tab}>
                <button 
                  onClick={() => selectTab(tab)}
                  className={`nav-button ${activeTab === tab ? 'active' : 'inactive'}`}
                >
                  {tab === 'aboutus' ? 'About Us' : tab === 'contactus' ? 'Contact Us' : tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
