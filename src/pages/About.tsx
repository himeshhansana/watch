import watch1 from '../assets/watch1.jpg';
import watch2 from '../assets/watch2.jpg';
import aboutmain from '../assets/aboutmain.jpg';
import man1 from '../assets/man1.jpg';
import man2 from '../assets/man2.jpg';
import man3 from '../assets/man3.jpg';

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
  image: man1
}, {
  name: 'Elena Rodriguez',
  role: 'Design Director',
  image: man2
}, {
  name: 'James Chen',
  role: 'Technical Director',
  image: man3
}];
const About = () => {
  return <div className="min-h-screen bg-gray-950">
    {/* Hero Section */}
    <section className="relative h-[60vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img src={aboutmain} alt="Watchmaking craftsmanship" className="object-cover w-full h-full opacity-30" />
      </div>
      <div className="container relative px-4 mx-auto">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">Our Story</h1>
        <p className="max-w-2xl text-xl text-gray-300">
          Since 1895, CHRONOS has been crafting exceptional timepieces that
          combine traditional watchmaking with modern innovation.
        </p>
      </div>
    </section>
    {/* Heritage Section */}
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Our Heritage</h2>
            <p className="mb-6 leading-relaxed text-gray-300">
              For over a century, CHRONOS has been dedicated to the art of
              fine watchmaking. Our timepieces are more than just instruments
              for measuring time – they are expressions of excellence,
              innovation, and timeless elegance.
            </p>
            <p className="mb-8 leading-relaxed text-gray-300">
              Each watch is meticulously crafted by our master watchmakers,
              combining traditional techniques with cutting-edge technology to
              create pieces of exceptional quality and precision.
            </p>
            <Link to="/products" className="inline-flex items-center transition-colors duration-300 text-gold-500 hover:text-gold-400">
              Discover our collections
              <ArrowRightIcon size={20} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={watch1} alt="Heritage watch" className="rounded-lg" />
            <img src={watch2} alt="Modern watch" className="mt-8 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
    {/* Timeline Section */}
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Journey</h2>
        <div className="space-y-12">
          {timeline.map((item, index) => <div key={index} className="flex flex-col items-start md:flex-row">
            <div className="md:w-1/4">
              <span className="text-2xl font-bold text-gold-500">
                {item.year}
              </span>
            </div>
            <div className="mt-4 md:w-3/4 md:mt-0">
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>
    {/* Team Section */}
    <section className="py-20 bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member, index) => <div key={index} className="text-center">
            <div className="relative mb-6 group">
              <div className="overflow-hidden rounded-full aspect-square">
                <img src={member.image} alt={member.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
            <p className="text-gold-500">{member.role}</p>
          </div>)}
        </div>
      </div>
    </section>
  </div>;
};
export default About;