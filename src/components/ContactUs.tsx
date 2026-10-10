import React, { useState } from 'react';
import { CONTACT_INFO, GOOGLE_FORM, SCHOOL_INFO } from '../constants';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const ContactUs: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    body.append(GOOGLE_FORM.fields.name, String(data.get('name') ?? ''));
    body.append(GOOGLE_FORM.fields.email, String(data.get('email') ?? ''));
    body.append(GOOGLE_FORM.fields.message, String(data.get('message') ?? ''));

    setStatus('sending');
    try {
      // Google Forms doesn't send CORS headers, so the response is opaque;
      // a resolved fetch means the request reached Google.
      await fetch(GOOGLE_FORM.actionUrl, { method: 'POST', mode: 'no-cors', body });
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="container section-padding-container">
      <h2>Contact Us</h2>
      <div className="flex-row" style={{ marginTop: '1rem', alignItems: 'flex-start' }}>
        <div className="flex-1-300">
          <h3>Get in Touch</h3>
          <p className="text-lead">We would love to hear from you. Please fill out the form below or use our contact details.</p>
          <form className="form-group" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="form-input" required />
            <input type="email" name="email" placeholder="Your Email" className="form-input" required />
            <textarea name="message" placeholder="Your Message" rows={5} className="form-input" required></textarea>
            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="text-lead" role="status">Thank you! Your message has been sent.</p>}
            {status === 'error' && <p className="text-lead" role="alert">Sorry, something went wrong. Please try again or contact us by phone.</p>}
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
