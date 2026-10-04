import React from 'react';
import { SCHOOL_INFO } from '../constants';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const tabs = ['home', 'aboutus', 'admissions', 'campus', 'contactus'];

  return (
    <header>
      <div className="container">
        <h1 className="header-title" onClick={() => setActiveTab('home')}>
          {SCHOOL_INFO.name}
        </h1>
        <nav>
          <ul>
            {tabs.map((tab) => (
              <li key={tab}>
                <button 
                  onClick={() => setActiveTab(tab)}
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
