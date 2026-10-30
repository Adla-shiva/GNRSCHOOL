import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Admissions from './components/Admissions';
import Campus from './components/Campus';
import ContactUs from './components/ContactUs';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import { ROUTES, tabFromPath } from './routes';

function App() {
  const [activeTab, setCurrentTab] = useState(() => tabFromPath(window.location.pathname));

  const setActiveTab = (tab: string) => {
    const path = ROUTES[tab] ?? ROUTES.home;
    if (window.location.pathname !== path) window.history.pushState(null, '', path);
    setCurrentTab(tab);
  };

  // Keep the page in sync with the browser's back/forward buttons.
  useEffect(() => {
    const onPopState = () => setCurrentTab(tabFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

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
      case 'gallery':
        return <Gallery />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsConditions />;
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
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
