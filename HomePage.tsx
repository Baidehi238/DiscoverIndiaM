import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, monumentId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredMonuments = [
    {
      id: 'taj-mahal',
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc2NTA1MjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A symbol of eternal love',
    },
    {
      id: 'temple',
      name: 'Ancient Temples',
      location: 'South India',
      image: 'https://images.unsplash.com/photo-1685944775296-78ca263e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2NTEyODgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Sacred architectural marvels',
    },
    {
      id: 'hampi',
      name: 'Hampi Ruins',
      location: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1waSUyMHJ1aW5zJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ancient city of wonders',
    },
  ];

  const stats = [
    { icon: MapPin, value: '40+', label: 'UNESCO Sites' },
    { icon: Calendar, value: '5000+', label: 'Years of History' },
    { icon: Users, value: '1.4B', label: 'Diverse Culture' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-500 to-white">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1724382981275-f144e3a12cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWphc3RoYW4lMjBwYWxhY2UlMjBpbmRpYXxlbnwxfHx8fDE3NjUxMjg4MjN8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Discover the Heart of India
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the timeless beauty, rich heritage, and vibrant culture of incredible India
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('monuments')}
                className="px-8 py-3 bg-orange-500 hover:bg-orange-300 text-white rounded-md transition-colors"
              >
                Explore Monuments
              </button>
              <button
                onClick={() => onNavigate('plan')}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-md transition-colors border border-white/30"
              >
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="size-12 mx-auto mb-4 text-orange-400" />
                <div className="text-4xl text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Monuments */}
      <section className="py-16 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Featured Heritage Sites</h2>
            <p className="text-xl text-gray-00">
              Discover the magnificent monuments that define India's rich history
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMonuments.map((monument) => (
              <div
                key={monument.id}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => onNavigate('monument-detail', monument.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={monument.image}
                    alt={monument.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl mb-1">{monument.name}</h3>
                    <p className="flex items-center gap-1 text-sm text-gray-200">
                      <MapPin className="size-4" />
                      {monument.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{monument.description}</p>
                  <button className="text-orange-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Explore More
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('monuments')}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
            >
              View All Monuments
            </button>
          </div>
        </div>
      </section>

      {/* Experience India */}
      <section className="py-16 bg-gradient-to-br from-orange-400 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Experience the Magic of India</h2>
              <p className="text-xl mb-8 text-orange-100">
                From the snow-capped Himalayas to tropical beaches, from ancient temples 
                to modern cities, India offers a journey like no other.
              </p>
              <div className="space-y-4">
                <button
                  onClick={() => onNavigate('culture')}
                  className="w-full md:w-auto px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Explore Culture
                </button>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="w-full md:w-auto px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors border border-white/30 ml-0 md:ml-4"
                >
                  Top Destinations
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1720593446840-b2a993a2c005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY1MTI4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian Festival"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1651512186979-737021ace442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBkYW5jZXxlbnwxfHx8fDE3NjUxMjg4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian Dance"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1656497119922-068c6a5e1193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwc3BpY2VzfGVufDF8fHx8MTc2NTEyODgyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Indian Cuisine"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1676718912572-b3ebcff192e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YSUyMG1vdW50YWlucyUyMGluZGlhfGVufDF8fHx8MTc2NTEyODgyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Himalayas"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}