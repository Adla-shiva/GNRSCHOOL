import React from 'react';
import { CONTACT_INFO, SCHOOL_INFO } from '../constants';

const ContactUs: React.FC = () => {
  return (
    <section className="container section-padding-container">
      <h2>Contact Us</h2>
      <div className="flex-row" style={{ marginTop: '1rem', alignItems: 'flex-start' }}>
        <div className="flex-1-300">
          <h3>Get in Touch</h3>
          <p className="text-lead">We would love to hear from you. Please fill out the form below or use our contact details.</p>
          <form className="form-group">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Your Message" rows={5} className="form-input"></textarea>
            <button type="button" className="btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
          </form>
        </div>
        <div className="flex-1-300">
          <h3>Contact Information</h3>
          <p className="text-lead"><strong>Email:</strong> {CONTACT_INFO.email}</p>
          <p className="text-lead"><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
          
          <h4 style={{ color: 'var(--tertiary-color)', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Our Campuses</h4>
          {SCHOOL_INFO.schools.map((school, index) => (
            <div key={index} style={{ marginBottom: '1rem' }}>
              <p className="text-lead text-bold" style={{ margin: '0 0 5px 0' }}>{school.name}</p>
              <p className="text-lead" style={{ margin: 0 }}>{school.address}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
