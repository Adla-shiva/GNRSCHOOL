import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="container" style={{ padding: '2rem 20px' }}>
      <div className="flex-row" style={{ marginBottom: '4rem' }}>
        <div className="flex-1-500">
          <h2>About Our Institutions</h2>
          <p className="text-lead">
            At Our School we are dedicated to nurturing young minds with a perfect blend of academics, values, and innovation. 
            We offer quality education from Nursery to X standard with both day and residential options. Our modern teaching 
            methods make learning engaging and effective. 
          </p>
          <p className="text-lead">
            The school also provides exclusive IIT Foundation and competitive exam coaching. At Our School, we prepare 
            students to succeed in school and beyond.
          </p>
        </div>
        <div className="flex-1-400">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Students learning" 
            className="img-rounded-shadow"
          />
        </div>
      </div>

      <div className="flex-row flex-row-reverse">
        <div className="flex-1-500">
          <h2>Spoken English Skills</h2>
          <p className="text-lead">
            Adding a spoken English program in schools helps kids build confidence and communicate better in real-life situations.
          </p>
        </div>
        <div className="flex-1-400">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Students communicating" 
            className="img-rounded-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
