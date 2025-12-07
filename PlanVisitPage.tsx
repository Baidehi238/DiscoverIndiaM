import { Calendar, MapPin, Users, Clock, Plus, Trash2, Download, Check } from 'lucide-react';
import { useState } from 'react';

interface TripItem {
  id: number;
  destination: string;
  days: number;
  activities: string[];
}

export function PlanVisitPage() {
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [tripItems, setTripItems] = useState<TripItem[]>([]);
  const [currentDestination, setCurrentDestination] = useState('');
  const [currentDays, setCurrentDays] = useState(1);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const popularDestinations = [
    'Taj Mahal, Agra',
    'Jaipur, Rajasthan',
    'Kerala Backwaters',
    'Goa Beaches',
    'Varanasi',
    'Delhi',
    'Mumbai',
    'Udaipur',
    'Hampi',
    'Rishikesh',
  ];

  const activityOptions = [
    'Sightseeing',
    'Photography',
    'Temple Visit',
    'Museum Tour',
    'Shopping',
    'Food Tour',
    'Adventure Sports',
    'Wildlife Safari',
    'Beach Activities',
    'Yoga & Meditation',
    'Cultural Show',
    'Heritage Walk',
  ];

  const addDestination = () => {
    if (currentDestination && currentDays > 0) {
      const newItem: TripItem = {
        id: Date.now(),
        destination: currentDestination,
        days: currentDays,
        activities: [...selectedActivities],
      };
      setTripItems([...tripItems, newItem]);
      setCurrentDestination('');
      setCurrentDays(1);
      setSelectedActivities([]);
    }
  };

  const removeDestination = (id: number) => {
    setTripItems(tripItems.filter(item => item.id !== id));
  };

  const toggleActivity = (activity: string) => {
    if (selectedActivities.includes(activity)) {
      setSelectedActivities(selectedActivities.filter(a => a !== activity));
    } else {
      setSelectedActivities([...selectedActivities, activity]);
    }
  };

  const totalDays = tripItems.reduce((sum, item) => sum + item.days, 0);

  const downloadItinerary = () => {
    alert('Itinerary download functionality would be implemented here. Your trip plan would be saved as a PDF.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Plan Your Perfect Journey</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Create a personalized itinerary for your Indian adventure. 
            Choose your destinations, activities, and let the magic unfold.
          </p>
        </div>
      </section>

      {/* Trip Planner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Input Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Info */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl text-gray-900 mb-6">Trip Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Trip Name</label>
                    <input
                      type="text"
                      value={tripName}
                      onChange={(e) => setTripName(e.target.value)}
                      placeholder="e.g., Golden Triangle Tour"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2 flex items-center gap-2">
                        <Calendar className="size-4" />
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 flex items-center gap-2">
                        <Users className="size-4" />
                        Number of Travelers
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Add Destination */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl text-gray-900 mb-6">Add Destination</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Select Destination</label>
                    <select
                      value={currentDestination}
                      onChange={(e) => setCurrentDestination(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Choose a destination...</option>
                      {popularDestinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 flex items-center gap-2">
                      <Clock className="size-4" />
                      Number of Days
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={currentDays}
                      onChange={(e) => setCurrentDays(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Activities</label>
                    <div className="flex flex-wrap gap-2">
                      {activityOptions.map((activity) => (
                        <button
                          key={activity}
                          type="button"
                          onClick={() => toggleActivity(activity)}
                          className={`px-4 py-2 rounded-lg transition-all ${
                            selectedActivities.includes(activity)
                              ? 'bg-purple-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {selectedActivities.includes(activity) && (
                            <Check className="size-4 inline mr-1" />
                          )}
                          {activity}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={addDestination}
                    disabled={!currentDestination}
                    className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="size-5" />
                    Add to Itinerary
                  </button>
                </div>
              </div>

              {/* Itinerary List */}
              {tripItems.length > 0 && (
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-2xl text-gray-900 mb-6">Your Itinerary</h2>
                  
                  <div className="space-y-4">
                    {tripItems.map((item, index) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="size-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                {index + 1}
                              </span>
                              <h3 className="text-xl text-gray-900">{item.destination}</h3>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="size-4" />
                              <span>{item.days} day{item.days > 1 ? 's' : ''}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => removeDestination(item.id)}
                            className="text-red-500 hover:text-red-700 p-2"
                          >
                            <Trash2 className="size-5" />
                          </button>
                        </div>

                        {item.activities.length > 0 && (
                          <div>
                            <div className="text-sm text-gray-500 mb-2">Planned Activities:</div>
                            <div className="flex flex-wrap gap-2">
                              {item.activities.map((activity) => (
                                <span
                                  key={activity}
                                  className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                                >
                                  {activity}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-24 space-y-6">
                <h3 className="text-2xl text-gray-900">Trip Summary</h3>

                {tripName && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Trip Name</div>
                    <div className="text-gray-900">{tripName}</div>
                  </div>
                )}

                {startDate && (
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Start Date</div>
                    <div className="text-gray-900">{new Date(startDate).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</div>
                  </div>
                )}

                <div>
                  <div className="text-sm text-gray-500 mb-1">Travelers</div>
                  <div className="text-gray-900">{travelers} {travelers === 1 ? 'person' : 'people'}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Destinations</div>
                  <div className="text-gray-900">{tripItems.length} location{tripItems.length !== 1 ? 's' : ''}</div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Total Duration</div>
                  <div className="text-2xl text-purple-600">{totalDays} days</div>
                </div>

                {tripItems.length > 0 && (
                  <>
                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-500 mb-3">Destinations:</div>
                      <div className="space-y-2">
                        {tripItems.map((item) => (
                          <div key={item.id} className="flex items-start gap-2 text-sm">
                            <MapPin className="size-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-gray-900">{item.destination}</div>
                              <div className="text-gray-500">{item.days} day{item.days > 1 ? 's' : ''}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={downloadItinerary}
                      className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="size-5" />
                      Download Itinerary
                    </button>
                  </>
                )}

                {tripItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <MapPin className="size-12 mx-auto mb-3 text-gray-300" />
                    <p>Add destinations to build your itinerary</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white mb-8 text-center">Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl mb-3">Best Routes</h3>
              <p className="text-purple-100">
                Plan your route geographically to minimize travel time between destinations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl mb-3">Seasonal Considerations</h3>
              <p className="text-purple-100">
                Check weather conditions and festivals for each destination during your travel dates.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white border border-white/20">
              <h3 className="text-xl mb-3">Local Experiences</h3>
              <p className="text-purple-100">
                Include authentic local experiences and cultural activities in your itinerary.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}