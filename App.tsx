import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { MonumentsPage } from './components/MonumentsPage';
import { MonumentDetail } from './components/MonumentDetail';
import { CulturePage } from './components/CulturePage';
import { DestinationsPage } from './components/DestinationsPage';
import { ContactPage } from './components/ContactPage';
import { PlanVisitPage } from './components/PlanVisitPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMonumentId, setSelectedMonumentId] = useState<string | undefined>();

  const handleNavigate = (page: string, monumentId?: string) => {
    setCurrentPage(page);
    if (monumentId) {
      setSelectedMonumentId(monumentId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'monuments':
        return <MonumentsPage onNavigate={handleNavigate} />;
      case 'monument-detail':
        return <MonumentDetail monumentId={selectedMonumentId} onNavigate={handleNavigate} />;
      case 'culture':
        return <CulturePage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'contact':
        return <ContactPage />;
      case 'plan':
        return <PlanVisitPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">Discover India</span>
              </div>
              <p className="text-gray-400">
                Discover the rich heritage, vibrant culture, and breathtaking destinations of India.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => handleNavigate('home')} className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('monuments')} className="text-gray-400 hover:text-white transition-colors">
                    Monuments
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('culture')} className="text-gray-400 hover:text-white transition-colors">
                    Culture
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigate('destinations')} className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Travel Guide</li>
                <li className="hover:text-white transition-colors cursor-pointer">Visa Information</li>
                <li className="hover:text-white transition-colors cursor-pointer">Safety Tips</li>
                <li className="hover:text-white transition-colors cursor-pointer">FAQs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ministry of Tourism</li>
                <li>New Delhi, India</li>
                <li>Toll Free: 1800-111-363</li>
                <li>info@incredibleindia.gov.in</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Incredible India Tourism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}