import React from 'react';
import { CONTACT_INFO, SCHOOL_INFO } from '../constants';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer>
      <div className="container footer-container">
        
        <div className="footer-col">
          <h4 className="footer-heading">{SCHOOL_INFO.name}</h4>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <p>Email: {CONTACT_INFO.email}</p>
          <p>Phone: {CONTACT_INFO.phone}</p>
        </div>

        <div className="footer-col footer-col-wide">
          <h4 className="footer-heading">Our Campuses</h4>
          {SCHOOL_INFO.schools.map((school, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: 'var(--secondary-color)' }}>{school.name}</p>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{school.address}</p>
            </div>
          ))}
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Legal</h4>
          <ul className="footer-list">
            <li><button onClick={() => setActiveTab('privacy')} className="footer-link">Privacy Policy</button></li>
            <li><button onClick={() => setActiveTab('terms')} className="footer-link">Terms &amp; Conditions</button></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
