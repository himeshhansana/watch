import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
const timeline = [{
  year: '1895',
  title: 'The Beginning',
  description: 'Founded in Switzerland by master watchmaker James Chronos.'
}, {
  year: '1925',
  title: 'First Chronograph',
  description: 'Launch of our first chronograph movement, setting new standards in precision.'
}, {
  year: '1950',
  title: 'International Expansion',
  description: 'Opened boutiques in Paris, London, and New York.'
}, {
  year: '1975',
  title: 'Innovation Era',
  description: 'Pioneered the use of new materials in luxury watchmaking.'
}, {
  year: '2000',
  title: 'Modern Evolution',
  description: 'Introduced smart manufacturing while maintaining traditional craftsmanship.'
}, {
  year: 'Today',
  title: 'Continuing Legacy',
  description: 'Leading the industry in innovation while preserving our heritage.'
}];
const team = [{
  name: 'Robert Maxwell',
  role: 'Master Watchmaker',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'Elena Rodriguez',
  role: 'Design Director',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  name: 'James Chen',
  role: 'Technical Director',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}];
const About = () => {
  return <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" alt="Watchmaking craftsmanship" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Since 1895, CHRONOS has been crafting exceptional timepieces that
            combine traditional watchmaking with modern innovation.
          </p>
        </div>
      </section>
      {/* Heritage Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                For over a century, CHRONOS has been dedicated to the art of
                fine watchmaking. Our timepieces are more than just instruments
                for measuring time – they are expressions of excellence,
                innovation, and timeless elegance.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Each watch is meticulously crafted by our master watchmakers,
                combining traditional techniques with cutting-edge technology to
                create pieces of exceptional quality and precision.
              </p>
              <Link to="/products" className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors duration-300">
                Discover our collections
                <ArrowRightIcon size={20} className="ml-2" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Heritage watch" className="rounded-lg" />
              <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Modern watch" className="rounded-lg mt-8" />
            </div>
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, index) => <div key={index} className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/4">
                  <span className="text-gold-500 text-2xl font-bold">
                    {item.year}
                  </span>
                </div>
                <div className="md:w-3/4 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => <div key={index} className="text-center">
                <div className="mb-6 relative group">
                  <div className="aspect-square rounded-full overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gold-500">{member.role}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
};
export default About;