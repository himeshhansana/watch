import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  return <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Luxury watch store interior" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We're here to assist you with any questions about our timepieces or
            services.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPinIcon size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Visit Our Boutique
                    </h3>
                    <p className="text-gray-400">
                      123 Luxury Avenue
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Call Us</h3>
                    <p className="text-gray-400">
                      +1 (555) 123-4567
                      <br />
                      Monday - Saturday: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon size={24} className="text-gold-500 mr-4 mt-1" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email Us</h3>
                    <p className="text-gray-400">
                      info@chronos.com
                      <br />
                      support@chronos.com
                    </p>
                  </div>
                </div>
              </div>
              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      What are your shipping options?
                    </h3>
                    <p className="text-gray-400">
                      We offer worldwide shipping with insurance and tracking.
                      Express delivery is available for most locations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Do you offer watch servicing?
                    </h3>
                    <p className="text-gray-400">
                      Yes, we provide comprehensive servicing for all our
                      timepieces at our certified service centers.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      What is your return policy?
                    </h3>
                    <p className="text-gray-400">
                      We offer a 30-day return policy for unworn items in
                      original condition with all documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" value={formData.subject} onChange={e => setFormData({
                  ...formData,
                  subject: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={6} className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none resize-none" required></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-gold-500 text-gray-900 rounded-lg hover:bg-gold-600 transition-colors duration-300 flex items-center justify-center font-medium">
                  <SendIcon size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;