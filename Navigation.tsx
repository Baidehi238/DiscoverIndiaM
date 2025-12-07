import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'monuments', label: 'Monuments' },
    { id: 'culture', label: 'Culture' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl text-gray-900 hover:text-orange-500 transition-colors"
          >
            Discover India
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? 'text-orange-400'
                    : 'text-gray-700 hover:text-orange-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('plan')}
              className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-white rounded-md transition-colors"
            >
              Plan Your Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  currentPage === item.id
                    ? 'text-orange-400'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('plan');
                setMobileMenuOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors"
            >
              Plan Your Visit
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}