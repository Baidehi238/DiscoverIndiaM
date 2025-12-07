import { ArrowLeft, MapPin, Clock, Calendar, Star, Camera, Ticket, Info, Box } from 'lucide-react';
import { useState } from 'react';

interface MonumentDetailProps {
  monumentId?: string;
  onNavigate: (page: string) => void;
}

export function MonumentDetail({ monumentId, onNavigate }: MonumentDetailProps) {
  const [activeTab, setActiveTab] = useState<'info' | '3d'>('info');

  const monumentData: Record<string, any> = {
    'taj-mahal': {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMGluZGlhfGVufDF8fHx8MTc2NTA1MjM0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      built: '1631-1653',
      architect: 'Ustad Ahmad Lahori',
      designation: 'UNESCO World Heritage Site',
      description: 'The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan, to house the tomb of his beloved wife, Mumtaz Mahal. The monument is considered the finest example of Mughal architecture, combining elements from Persian, Islamic, and Indian architectural styles.',
      highlights: [
        'Stunning white marble facade that changes color with sunlight',
        'Perfect symmetry and intricate calligraphy',
        'Beautiful Mughal gardens surrounding the monument',
        'Reflection pools creating mirror images',
      ],
      timings: 'Sunrise to Sunset (Closed on Fridays)',
      entryFee: '₹50 for Indians, ₹1100 for Foreigners',
      bestTime: 'October to March (early morning for sunrise view)',
      nearbyAttractions: ['Agra Fort', 'Fatehpur Sikri', 'Itmad-ud-Daulah'],
    },
    'temple': {
      name: 'Meenakshi Temple',
      location: 'Madurai, Tamil Nadu',
      image: 'https://images.unsplash.com/photo-1685944775296-78ca263e51a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRlbXBsZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2NTEyODgyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      built: '6th century (rebuilt 1623-1655)',
      architect: 'Various dynasties',
      designation: 'Ancient Hindu Temple',
      description: 'The Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai. Dedicated to Goddess Meenakshi and Lord Sundareswarar, this temple is a prominent example of Dravidian architecture with towering gopurams adorned with thousands of colorful sculptures.',
      highlights: [
        '14 magnificent gopurams (gateway towers)',
        'Hall of thousand pillars with intricate carvings',
        'Golden lotus tank for ritual bathing',
        'Spectacular evening ceremony with processions',
      ],
      timings: '5:00 AM to 12:30 PM, 4:00 PM to 9:30 PM',
      entryFee: 'Free (special darshan tickets available)',
      bestTime: 'October to March',
      nearbyAttractions: ['Thirumalai Nayakkar Palace', 'Gandhi Museum', 'Alagar Temple'],
    },
    'hampi': {
      name: 'Hampi',
      location: 'Karnataka',
      image: 'https://images.unsplash.com/photo-1736228077374-4071eee51781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1waSUyMHJ1aW5zJTIwaW5kaWF8ZW58MXx8fHwxNzY1MDY3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.9,
      built: '14th-16th century',
      architect: 'Vijayanagara Empire',
      designation: 'UNESCO World Heritage Site',
      description: 'Hampi is an ancient village featuring ruins of the city of Vijayanagara, the former capital of the Vijayanagara Empire. The site comprises over 1,600 surviving remains, including temples, forts, royal complexes, and ancient market streets spread over 4,100 hectares.',
      highlights: [
        'Virupaksha Temple with 50m high gopuram',
        'Stone chariot at Vittala Temple complex',
        'Ancient bazaar streets and aquaduct systems',
        'Stunning boulder-strewn landscape',
      ],
      timings: 'Sunrise to Sunset (individual monument timings vary)',
      entryFee: '₹40 for Indians, ₹600 for Foreigners',
      bestTime: 'November to February',
      nearbyAttractions: ['Tungabhadra River', 'Daroji Bear Sanctuary', 'Anegundi Village'],
    },
  };

  const monument = monumentData[monumentId || 'taj-mahal'] || monumentData['taj-mahal'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate('monuments')}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="size-5" />
            Back to Monuments
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[500px]">
        <img
          src={monument.image}
          alt={monument.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2 text-orange-300">
              <Star className="size-5 fill-orange-300" />
              <span className="text-xl">{monument.rating} / 5.0</span>
              <span className="ml-4 px-3 py-1 bg-orange-500 rounded-full text-sm text-white">
                {monument.designation}
              </span>
            </div>
            <h1 className="text-5xl text-white mb-2">{monument.name}</h1>
            <p className="flex items-center gap-2 text-xl text-gray-200">
              <MapPin className="size-6" />
              {monument.location}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-4 px-4 flex items-center gap-2 transition-colors ${
              activeTab === 'info'
                ? 'border-b-2 border-orange-400 text-orange-400'
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            <Info className="size-5" />
            Information
          </button>
          <button
            onClick={() => setActiveTab('3d')}
            className={`pb-4 px-4 flex items-center gap-2 transition-colors ${
              activeTab === '3d'
                ? 'border-b-2 border-orange-400 text-orange-400'
                : 'text-gray-600 hover:text-orange-400'
            }`}
          >
            <Box className="size-5" />
            3D View
          </button>
        </div>

        {activeTab === 'info' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <section className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {monument.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="size-5 text-orange-500" />
                    <div>
                      <div className="text-sm text-gray-500">Built</div>
                      <div className="text-gray-900">{monument.built}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="size-5 text-orange-500" />
                    <div>
                      <div className="text-sm text-gray-500">Architect</div>
                      <div className="text-gray-900">{monument.architect}</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Highlights */}
              <section className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl text-gray-900 mb-6">Highlights</h2>
                <div className="space-y-3">
                  {monument.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="size-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="size-2 rounded-full bg-orange-500" />
                      </div>
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Nearby Attractions */}
              <section className="bg-white rounded-xl p-8 shadow-md">
                <h2 className="text-3xl text-gray-900 mb-4">Nearby Attractions</h2>
                <div className="flex flex-wrap gap-2">
                  {monument.nearbyAttractions.map((attraction: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full border border-orange-200"
                    >
                      {attraction}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Visit Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-md sticky top-24 space-y-6">
                <h3 className="text-2xl text-gray-900">Visit Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="size-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Timings</div>
                      <div className="text-gray-900">{monument.timings}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="size-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Entry Fee</div>
                      <div className="text-gray-900">{monument.entryFee}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="size-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Best Time to Visit</div>
                      <div className="text-gray-900">{monument.bestTime}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="size-5 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Tips</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Carry water and wear comfortable shoes</li>
                        <li>• Photography allowed (restrictions may apply)</li>
                        <li>• Hire a guide for detailed history</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button className="w-full py-3 bg-orange-300 hover:bg-orange-400 text-white rounded-lg transition-colors">
                  Book Tickets Online
                </button>

                <button
                  onClick={() => onNavigate('plan')}
                  className="w-full py-3 border-2 border-orange-300 text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                >
                  Add to Trip Planner
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="text-center py-20">
              <Box className="size-20 mx-auto mb-6 text-orange-300" />
              <h3 className="text-3xl text-gray-900 mb-4">3D Model Viewer</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore the monument in an immersive 3D experience. Rotate, zoom, and view from any angle.
              </p>
              
              {/* 3D MODEL PLACEHOLDER - ADD YOUR .GLB FILE HERE */}
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-dashed border-orange-200 rounded-xl p-12 max-w-4xl mx-auto">
                <div className="text-gray-500 space-y-4">
                  <p className="text-lg">
                    Add 3D model here
                  </p>
                  <p className="text-sm">
                    Instructions: Import your .glb 3D model file and initialize the 3D viewer component here.
                  </p>
                  <div className="mt-6 bg-white/60 rounded-lg p-6 text-left max-w-xl mx-auto">
                    <code className="text-sm text-gray-700">
                      {`// Example code structure:
// import { Canvas } from '@react-three/fiber'
// import { useGLTF, OrbitControls } from '@react-three/drei'
//
// function Model() {
//   const { scene } = useGLTF('/models/${monumentId || 'monument'}.glb')
//   return <primitive object={scene} />
// }
//
// <Canvas>
//   <ambientLight intensity={0.5} />
//   <pointLight position={[10, 10, 10]} />
//   <Model />
//   <OrbitControls />
// </Canvas>`}
                    </code>
                  </div>
                </div>
              </div>
              {/* END 3D MODEL PLACEHOLDER */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}