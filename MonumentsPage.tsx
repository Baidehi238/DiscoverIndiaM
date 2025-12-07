import { Search, MapPin, Clock, Star } from 'lucide-react';
import { useState } from 'react';

interface MonumentsPageProps {
  onNavigate: (page: string, monumentId?: string) => void;
}

export function MonumentsPage({ onNavigate }: MonumentsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Monuments' },
    { id: 'temples', label: 'Temples' },
    { id: 'forts', label: 'Forts & Palaces' },
    { id: 'unesco', label: 'UNESCO Sites' },
    { id: 'ancient', label: 'Ancient Ruins' },
  ];

  const monuments = [
    {
      id: 'taj-mahal',
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      category: 'unesco',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc2NTA1MjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      visitTime: '2-3 hours',
      description: 'An ivory-white marble mausoleum and symbol of eternal love',
    },
    {
      id: 'temple',
      name: 'Meenakshi Temple',
      location: 'Madurai, Tamil Nadu',
      category: 'temples',
      image: 'https://images.unsplash.com/photo-1685944775296-78ca263e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2NTEyODgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      visitTime: '1-2 hours',
      description: 'Ancient Dravidian temple with stunning architecture',
    },
    {
      id: 'rajasthan-palace',
      name: 'City Palace',
      location: 'Jaipur, Rajasthan',
      category: 'forts',
      image: 'https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NjUxMjg4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.7,
      visitTime: '2-3 hours',
      description: 'Royal palace complex showcasing Rajput and Mughal architecture',
    },
    {
      id: 'hampi',
      name: 'Hampi',
      location: 'Karnataka',
      category: 'ancient',
      image: 'https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1waSUyMHJ1aW5zJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      visitTime: 'Full day',
      description: 'Ancient ruins of the Vijayanagara Empire',
    },
    {
      id: 'india-gate',
      name: 'India Gate',
      location: 'Delhi',
      category: 'unesco',
      image: 'https://images.unsplash.com/photo-1688781298681-ae1f2d470b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGdhdGUlMjBkZWxoaXxlbnwxfHx8fDE3NjUxMjg4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.6,
      visitTime: '30-60 min',
      description: 'War memorial and iconic landmark of Delhi',
    },
    {
      id: 'varanasi',
      name: 'Varanasi Ghats',
      location: 'Varanasi, Uttar Pradesh',
      category: 'temples',
      image: 'https://images.unsplash.com/photo-1717070882156-108ae2c5c343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY2ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      visitTime: '2-3 hours',
      description: 'Sacred riverside steps and ancient spiritual center',
    },
  ];

  const filteredMonuments = monuments.filter((monument) => {
    const matchesSearch = monument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         monument.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || monument.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">India's Heritage Monuments</h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Explore architectural wonders that have stood the test of time, 
            each telling a unique story of India's glorious past.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search monuments by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Monuments Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-gray-600">
            Showing {filteredMonuments.length} monument{filteredMonuments.length !== 1 ? 's' : ''}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMonuments.map((monument) => (
              <div
                key={monument.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => onNavigate('monument-detail', monument.id)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="size-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{monument.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl text-gray-900 mb-2">{monument.name}</h3>
                  
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="size-4" />
                    <span className="text-sm">{monument.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {monument.description}
                  </p>

                  <div className="flex items-center gap-1 text-orange-600 mb-4">
                    <Clock className="size-4" />
                    <span className="text-sm">Visit duration: {monument.visitTime}</span>
                  </div>

                  <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
                    Explore Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMonuments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">No monuments found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}