import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    feedbackType: 'general',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        feedbackType: 'general',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@incredibleindia.gov.in',
      description: 'Send us your queries anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '1800-111-363 (Toll Free)',
      description: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Ministry of Tourism, India',
      description: 'Transport Bhawan, New Delhi',
    },
  ];

  const feedbackCategories = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'feedback', label: 'Website Feedback' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'suggestion', label: 'Suggestion' },
    { value: 'tourism', label: 'Tourism Information' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-4">Get in Touch</h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            We're here to help you plan your perfect journey to India. 
            Share your questions, feedback, or suggestions with us.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="size-6 text-orange-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="size-6 text-orange-500" />
                <h2 className="text-3xl text-gray-900">Send Us a Message</h2>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="size-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="size-8 text-green-600" />
                  </div>
                  <h3 className="text-xl text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedbackType" className="block text-gray-700 mb-2">
                      Type of Inquiry *
                    </label>
                    <select
                      id="feedbackType"
                      name="feedbackType"
                      required
                      value={formData.feedbackType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      {feedbackCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="size-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* FAQ Preview */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-gray-900 mb-2">Do I need a visa to visit India?</h4>
                    <p className="text-gray-600 text-sm">
                      Most visitors require a visa. India offers e-Visa facility for citizens of many countries.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-gray-900 mb-2">What's the best time to visit?</h4>
                    <p className="text-gray-600 text-sm">
                      October to March is ideal for most regions, with pleasant weather across the country.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="text-gray-900 mb-2">Is India safe for tourists?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, millions of tourists visit safely each year. Follow standard travel precautions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="size-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24-48 hours</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-gray-600 text-sm">
                    For urgent matters, please call our toll-free number. Our customer service team 
                    is available Monday through Friday, 9:00 AM to 6:00 PM IST.
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl mb-4">Follow Us</h3>
                <p className="mb-6 text-orange-100">
                  Stay updated with the latest tourism news, travel tips, and destination highlights.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors border border-white/30">
                    Facebook
                  </button>
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors border border-white/30">
                    Twitter
                  </button>
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors border border-white/30">
                    Instagram
                  </button>
                  <button className="px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-colors border border-white/30">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}