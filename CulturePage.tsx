import { Music, Utensils, Calendar, Sparkles } from 'lucide-react';

export function CulturePage() {
  const culturalAspects = [
    {
      title: 'Festivals',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1720593446840-b2a993a2c005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY1MTI4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'From Diwali to Holi, experience the vibrant celebrations that color India throughout the year',
      items: ['Diwali - Festival of Lights', 'Holi - Festival of Colors', 'Durga Puja - Goddess Worship', 'Eid - Islamic Celebration'],
    },
    {
      title: 'Classical Arts',
      icon: Music,
      image: 'https://images.unsplash.com/photo-1651512186979-737021ace442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBkYW5jZXxlbnwxfHx8fDE3NjUxMjg4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ancient dance forms and music traditions that have been perfected over thousands of years',
      items: ['Bharatanatyam Dance', 'Kathak Dance', 'Classical Music', 'Traditional Theater'],
    },
    {
      title: 'Cuisine',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1656497119922-068c6a5e1193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwc3BpY2VzfGVufDF8fHx8MTc2NTEyODgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'A culinary journey through diverse regional flavors, spices, and cooking traditions',
      items: ['North Indian Curries', 'South Indian Delicacies', 'Street Food Culture', 'Traditional Sweets'],
    },
    {
      title: 'Traditions',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1717070882156-108ae2c5c343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJhbmFzaSUyMGdoYXRzJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY2ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Time-honored customs and spiritual practices that define the essence of Indian culture',
      items: ['Yoga & Meditation', 'Ayurveda', 'Temple Rituals', 'Wedding Ceremonies'],
    },
  ];

  const languages = [
    'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati', 'Kannada', 
    'Malayalam', 'Odia', 'Punjabi', 'Assamese', 'Maithili', 'Sanskrit'
  ];

  const artForms = [
    { name: 'Madhubani Painting', region: 'Bihar' },
    { name: 'Warli Art', region: 'Maharashtra' },
    { name: 'Pattachitra', region: 'Odisha' },
    { name: 'Tanjore Painting', region: 'Tamil Nadu' },
    { name: 'Kalamkari', region: 'Andhra Pradesh' },
    { name: 'Phad Painting', region: 'Rajasthan' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1720593446840-b2a993a2c005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJlJTIwZmVzdGl2YWx8ZW58MXx8fHwxNzY1MTI4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-pink-900/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl mb-4">Celebrating India's Diversity</h1>
            <p className="text-xl text-gray-200">
              Experience the rich tapestry of traditions, arts, and customs that make India truly incredible
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Cultural Treasures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the multifaceted cultural heritage that has evolved over 5000 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalAspects.map((aspect, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={aspect.image}
                    alt={aspect.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      <aspect.icon className="size-6" />
                    </div>
                    <h3 className="text-3xl">{aspect.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{aspect.description}</p>
                  <div className="space-y-2">
                    {aspect.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="size-1.5 rounded-full bg-orange-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Art Forms */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Traditional Art Forms</h2>
            <p className="text-xl text-gray-600">
              Each region has its unique artistic expression passed down through generations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artForms.map((art, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="size-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="size-6 text-white" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{art.name}</h3>
                <p className="text-gray-600">{art.region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl mb-4">Experience Indian Culture</h2>
            <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
              Immerse yourself in festivals, taste authentic cuisine, and witness timeless traditions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors">
                Attend a Festival
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors border border-white/30">
                Cooking Classes
              </button>
              <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors border border-white/30">
                Art Workshops
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
