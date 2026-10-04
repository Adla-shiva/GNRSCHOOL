import React from 'react';

const Campus: React.FC = () => {
  return (
    <section className="container section-padding-container">
      <h2>Campus Facilities</h2>
      <p className="text-lead">
        Experience a state-of-the-art campus designed for optimal learning and growth. 
        We prioritize providing a safe and inspiring environment for all our students.
      </p>
      <div className="grid-2-col">
        <div className="card">
          <h3>Day-cum-Residential School</h3>
          <p className="text-lead">
            Our campus offers excellent Day-cum-Residential facilities. We provide a comfortable, secure, and nurturing home away from home where students can focus on academics, build values, and form lifelong friendships.
          </p>
        </div>
        <div className="card">
          <h3>Bus Transportation</h3>
          <p className="text-lead">
            We provide safe and reliable bus transportation facilities to ensure students from various locations 
            can easily commute to our Day-cum-Residential campus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Campus;
