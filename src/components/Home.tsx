import React, { useState, useEffect } from 'react';
import { SCHOOL_INFO } from '../constants';
import carouselImages from 'virtual:carousel-images';

// Slides come from public/school_carousel — add or remove files there to change them.
const images = carouselImages.map((file) => `${import.meta.env.BASE_URL}school_carousel/${encodeURIComponent(file)}`);

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="carousel-section">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Slide ${index + 1}`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              position: 'absolute',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }} 
          />
        ))}
        <div className="carousel-overlay">
          <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="G.N.R logo" className="carousel-logo" />
          <h2 className="carousel-title">{SCHOOL_INFO.name}</h2>
          <p style={{ fontSize: '1.2rem', margin: 0, fontWeight: 600 }}>{SCHOOL_INFO.welcomeText}</p>
        </div>
      </section>

      

      {/* Robotics Section */}
      <section className="container section-padding-container flex-row">
        <div className="flex-1-400">
          <img 
            src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Robotic Technology and Arduino" 
            className="img-rounded-shadow"
          />
        </div>
        <div className="flex-1-500">
          <h2>Robotic Technology & Future</h2>
          <p className="text-lead">
            GNR Institutions have introduced robotics technology for students, offering an exciting opportunity to learn new and innovative skills. Through hands-on activities and smart tools, students are now exploring coding, robotics, and problem-solving in a fun and engaging way.
          </p>
          <p className="text-lead">
            Today, robotics is widely used in education to make learning more interactive and practical. Students can build and program robots, which helps them understand real-world applications of science and math. It also improves their creativity, teamwork, and logical thinking. This new learning experience sparks curiosity and builds a strong foundation for future success in the digital and tech-driven world.
          </p>
        </div>
      </section>

      {/* IIT & NEET Foundation Section */}
      <section className="section-bg-light section-padding">
        <div className="container flex-row flex-row-reverse">
          <div className="flex-1-400">
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Foundation Classes" 
              className="img-rounded-shadow"
            />
          </div>
          <div className="flex-1-500">
            <h2>IIT & NEET Foundation Classes</h2>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>Build a strong Base for a Bright Future!</h3>
            <p className="text-lead">
              Join our specially designed foundation program for students of classes 6 to 9. We focus on strengthening core concepts in Maths, Physics, Chemistry, and Biology. Preparing students for competitive exams like IIT-JEE, NEET, and Olympiads.
            </p>
            
            <div className="flex-row" style={{ gap: '2rem', marginTop: '1.5rem', alignItems: 'flex-start' }}>
              <div className="flex-1-200">
                <h4 style={{ color: 'var(--tertiary-color)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>Key Features</h4>
                <ul className="text-lead" style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>Expert faculty with Proven Track Record</li>
                  <li>Syllabus designed as per IIT-JEE mains and advanced</li>
                  <li>Covers 60–70% IIT syllabus</li>
                  <li>Concept-Based Learning Approach</li>
                  <li>Exams conducted in IIT-JEE/NEET paper pattern</li>
                  <li>Trains students to get below 500 or 1000 Rank</li>
                </ul>
              </div>
              <div className="flex-1-200">
                <h4 style={{ color: 'var(--tertiary-color)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>Helps to develop:</h4>
                <ul className="text-lead" style={{ paddingLeft: '20px', margin: 0 }}>
                  <li>Analytical skills</li>
                  <li>Logical thinking skills</li>
                  <li>Application skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="container section-padding-container flex-row" style={{ marginTop: '2rem' }}>
        <div className="flex-1-400" style={{ textAlign: 'center' }}>
          <img 
            src={`${import.meta.env.BASE_URL}assets/chairman.png`} 
            alt="Dr. Y. HALA RAJU - Chairman" 
            className="img-rounded-shadow"
            style={{ maxWidth: '350px', border: '7px solid var(--secondary-color)', borderRadius: '50%', aspectRatio: '1/1', objectFit: 'cover' }}
            onError={(e) => {
              // Fallback placeholder if image is not uploaded yet
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/350x350?text=Chairman+Image';
            }}
          />
        </div>
        <div className="flex-1-500">
          <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Dr. Y. HALA RAJU</h2>
          <h3 style={{ fontSize: '1.3rem', marginTop: 0, color: 'var(--text-light)' }}>Chairman ( GNR Group of Institutions )</h3>
          <p className="text-lead" style={{ fontSize: '1.15rem' }}>
            <strong>Qualifications:</strong> M.A ( Telugu & Sociology ), B.Ed.<br/>
          </p><p className="text-lead" style={{ fontSize: '1.15rem' }}>
            <strong>Mobile:</strong> 98489 12605<br/>
          </p>
        </div>
      </section>

      {/* Competitive Exam Coaching Section */}
      <section className="container section-padding-container text-center">
        <h2>Competitive Exam Coaching</h2>
        <p className="section-subtitle">
          We provide specialized and rigorous coaching to help our students excel in top-tier competitive examinations and secure admissions into prestigious institutions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          {['Olympiad', 'Rukmapur Sainik School', 'Navodaya', 'Ekalavya Residential Model', 'Gurukula'].map((exam, i) => (
            <div key={i} className="exam-pill">
              {exam}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
