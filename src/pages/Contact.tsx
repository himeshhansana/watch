import contactimg from '../assets/contactimg.jpg';

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
        <img src={contactimg} alt="Luxury watch store interior" className="object-cover w-full h-full opacity-30" />
      </div>
      <div className="container relative px-4 mx-auto">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Contact Us</h1>
        <p className="max-w-2xl text-xl text-gray-300">
          We're here to assist you with any questions about our timepieces or
          services.
        </p>
      </div>
    </section>
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPinIcon size={24} className="mt-1 mr-4 text-gold-500" />
                <div>
                  <h3 className="mb-2 text-xl font-medium">
                    Visit Our Boutique
                  </h3>
                  <p className="text-gray-400">
                    14/2 Ds Senanayaka Road
                    <br />
                    Kandy Town,
                    <br />
                    Sri Lanaka.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={24} className="mt-1 mr-4 text-gold-500" />
                <div>
                  <h3 className="mb-2 text-xl font-medium">Call Us</h3>
                  <p className="text-gray-400">
                    +94 (74) 025 9085
                    <br />
                    Monday - Saturday: 10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon size={24} className="mt-1 mr-4 text-gold-500" />
                <div>
                  <h3 className="mb-2 text-xl font-medium">Email Us</h3>
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
              <h2 className="mb-8 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl font-medium">
                    What are your shipping options?
                  </h3>
                  <p className="text-gray-400">
                    We offer worldwide shipping with insurance and tracking.
                    Express delivery is available for most locations.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium">
                    Do you offer watch servicing?
                  </h3>
                  <p className="text-gray-400">
                    Yes, we provide comprehensive servicing for all our
                    timepieces at our certified service centers.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium">
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
          <div className="p-8 bg-gray-900 rounded-lg">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input type="text" id="name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-gold-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                  ...formData,
                  email: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-gold-500" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input type="text" id="subject" value={formData.subject} onChange={e => setFormData({
                  ...formData,
                  subject: e.target.value
                })} className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-gold-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea id="message" value={formData.message} onChange={e => setFormData({
                  ...formData,
                  message: e.target.value
                })} rows={6} className="w-full px-4 py-2 bg-gray-800 rounded-lg outline-none resize-none focus:ring-2 focus:ring-gold-500" required></textarea>
              </div>
              <button type="submit" className="flex items-center justify-center w-full py-3 font-medium text-gray-900 transition-colors duration-300 rounded-lg bg-gold-500 hover:bg-gold-600">
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