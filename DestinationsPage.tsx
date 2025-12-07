import { MapPin, Sun, Mountain, Waves, TreePine, Navigation } from 'lucide-react';
import { useState } from 'react';

export function DestinationsPage() {
  const [selectedType, setSelectedType] = useState('all');

  const destinationTypes = [
    { id: 'all', label: 'All Destinations', icon: Navigation },
    { id: 'beach', label: 'Beaches', icon: Waves },
    { id: 'mountain', label: 'Mountains', icon: Mountain },
    { id: 'cultural', label: 'Cultural', icon: Sun },
    { id: 'nature', label: 'Nature', icon: TreePine },
  ];

  const destinations = [
    {
      id: 1,
      name: 'Goa',
      type: 'beach',
      image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMGluZGlhfGVufDF8fHx8MTc2NTA5MzI4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Sun, sand, and Portuguese heritage on the western coast',
      highlights: ['Pristine beaches', 'Water sports', 'Nightlife', 'Colonial architecture'],
      bestTime: 'November to February',
      rating: 4.7,
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      type: 'nature',
      image: 'https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDkzMjgwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Serene waterways, houseboats, and lush green landscapes',
      highlights: ['Houseboat stays', 'Ayurvedic treatments', 'Tea plantations', 'Wildlife'],
      bestTime: 'September to March',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Rajasthan',
      type: 'cultural',
      image: 'https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NjUxMjg4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Land of kings with majestic palaces and desert landscapes',
      highlights: ['Historic forts', 'Desert safaris', 'Royal heritage', 'Vibrant culture'],
      bestTime: 'October to March',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Himalayas',
      type: 'mountain',
      image: 'https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMGluZGlhfGVufDF8fHx8MTc2NTEyODgyNXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Majestic peaks, spiritual retreats, and adventure activities',
      highlights: ['Trekking', 'Buddhist monasteries', 'Snow sports', 'Mountain views'],
      bestTime: 'April to June, September to November',
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Varanasi',
      type: 'cultural',
      image: 'https://images.unsplash.com/photo-1717070882156-108ae2c5c343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY2ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ancient spiritual city on the banks of the Ganges River',
      highlights: ['Ganga Aarti', 'Ancient temples', 'Boat rides', 'Spiritual experiences'],
      bestTime: 'October to March',
      rating: 4.6,
    },
    {
      id: 6,
      name: 'Hampi',
      type: 'cultural',
      image: 'https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1waSUyMHJ1aW5zJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'UNESCO World Heritage Site with ancient temple ruins',
      highlights: ['Ancient ruins', 'Rock climbing', 'Temple architecture', 'Sunset points'],
      bestTime: 'November to February',
      rating: 4.8,
    },
  ];

  const filteredDestinations = destinations.filter(
    dest => selectedType === 'all' || dest.type === selectedType
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Explore India's Destinations</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            From pristine beaches to snow-capped mountains, discover the diverse landscapes 
            and experiences that await you across India.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white shadow-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {destinationTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                  selectedType === type.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <type.icon className="size-5" />
                {type.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl text-white mb-1">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-400'}>
                          ★
                        </span>
                      ))}
                      <span className="text-white text-sm ml-2">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm text-gray-900 capitalize">
                    {destination.type}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{destination.description}</p>

                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-2">Highlights:</div>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 mb-4 text-sm">
                    <Sun className="size-4" />
                    <span>Best: {destination.bestTime}</span>
                  </div>

                  <button className="w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
                    Plan Your Visit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-8 text-center">Travel Tips for India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-orange-sm rounded-xl p-6 border border-white/20">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-xl mb-3">Getting Around</h3>
              <p className="text-blue-100">
                India has extensive rail and road networks. Book trains in advance and use trusted transport services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Sun className="size-6" />
              </div>
              <h3 className="text-xl mb-3">Best Season</h3>
              <p className="text-orange-100">
                October to March offers pleasant weather for most regions. Plan according to your destination.
              </p>
            </div>
            <div className="bg-white/10 backdrop-orange-sm rounded-xl p-6 border border-white/20">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <Navigation className="size-6" />
              </div>
              <h3 className="text-xl mb-3">Local Experience</h3>
              <p className="text-orange-100">
                Interact with locals, try street food, and immerse yourself in the culture for an authentic experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us help you plan the perfect itinerary for your Indian adventure
          </p>
          <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors">
            Create Your Itinerary
          </button>
        </div>
      </section>
    </div>
  );
}