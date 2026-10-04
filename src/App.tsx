import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Admissions from './components/Admissions';
import Campus from './components/Campus';
import ContactUs from './components/ContactUs';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'aboutus':
        return <AboutUs />;
      case 'admissions':
        return <Admissions />;
      case 'campus':
        return <Campus />;
      case 'contactus':
        return <ContactUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="app-main">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
