import React from 'react';

const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="section-bg-light section-padding">
      <div className="container">
        <h2>2026 Admissions</h2>
        <h3>Now Open for Registration!</h3>
        <p className="text-lead">
          We are currently accepting applications for the upcoming academic year. We offer quality education 
          from <strong>Nursery to X standard</strong> in <strong>English Medium</strong>.
        </p>
        <div style={{ margin: '20px 0' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Why Choose Us?</h4>
          <ul className="text-lead" style={{ paddingLeft: '20px' }}>
            <li>Day-cum-Residential facilities</li>
            <li>IIT & NEET Foundation Classes</li>
            <li>Competitive Exam Coaching (Olympiad, Navodaya, etc.)</li>
            <li>Robotics Technology & Future-ready skills</li>
            <li>Spoken English Programs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
