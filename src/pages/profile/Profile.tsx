import man3 from '../assets/man3.jpg';

import React, { useState } from 'react';
import { UserIcon, ClockIcon, HeartIcon, MapPinIcon, CreditCardIcon, BellIcon, LogOutIcon, ChevronRightIcon, SunIcon, MoonIcon, BarChart3Icon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
  joined: 'January 2023',
  stats: {
    totalOrders: 12,
    wishlistItems: 5,
    reviews: 8,
    savedAddresses: 2
  },
  preferences: {
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    currency: 'USD',
    language: 'English'
  }
};
const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const {
    theme,
    toggleTheme
  } = useTheme();
  const getActivityColor = (value: number) => {
    if (value > 10) return 'bg-green-500';
    if (value > 5) return 'bg-yellow-500';
    return 'bg-gray-500';
  };
  return <div className={`min-h-screen pt-24 transition-colors duration-300 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-950'}`}>
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className={`rounded-lg p-6 transition-colors duration-300 ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-900'}`}>
              <div className="flex justify-end mb-4">
                <button onClick={toggleTheme} className={`p-2 rounded-full transition-colors duration-300 ${theme === 'light' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-gray-800 text-gray-200 hover:bg-gray-700'}`}>
                  {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
                </button>
              </div>
              <div className="mb-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-gold-500">
                  <img src={user.avatar} alt={user.name} className="object-cover w-full h-full" />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Member since {user.joined}
                </p>
              </div>
              <div className="mb-6">
                <h3 className={`text-sm font-medium mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                  Activity Overview
                </h3>
                <div className="space-y-2">
                  {Object.entries(user.stats).map(([key, value]) => <div key={key} className="flex items-center justify-between">
                      <span className={`text-sm capitalize ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium">
                          {value}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${getActivityColor(value)}`} />
                      </div>
                    </div>)}
                </div>
              </div>
              <nav className="space-y-2">
                {[{
                id: 'overview',
                icon: UserIcon,
                label: 'Overview'
              }, {
                id: 'orders',
                icon: ClockIcon,
                label: 'Orders'
              }, {
                id: 'wishlist',
                icon: HeartIcon,
                label: 'Wishlist'
              }, {
                id: 'addresses',
                icon: MapPinIcon,
                label: 'Addresses'
              }, {
                id: 'payment',
                icon: CreditCardIcon,
                label: 'Payment Methods'
              }, {
                id: 'notifications',
                icon: BellIcon,
                label: 'Notifications'
              }].map(item => <button key={item.id} onClick={() => setActiveTab(item.id)} className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${activeTab === item.id ? 'bg-gold-500 text-gray-900' : theme === 'light' ? 'text-gray-600 hover:bg-gray-100' : 'text-gray-400 hover:bg-gray-800'}`}>
                    <span className="flex items-center">
                      <item.icon size={18} className="mr-3" />
                      {item.label}
                    </span>
                    <ChevronRightIcon size={18} />
                  </button>)}
                <button className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-300 text-red-500 ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'}`}>
                  <span className="flex items-center">
                    <LogOutIcon size={18} className="mr-3" />
                    Sign Out
                  </span>
                  <ChevronRightIcon size={18} />
                </button>
              </nav>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className={`rounded-lg p-6 transition-colors duration-300 ${theme === 'light' ? 'bg-white shadow-sm' : 'bg-gray-900'}`}>
              {activeTab === 'overview' && <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Account Overview</h2>
                    <button className={`px-4 py-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                      Edit Profile
                    </button>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={`block text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Full Name
                        </label>
                        <input type="text" value={user.name} className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-gray-50 focus:bg-white border border-gray-200' : 'bg-gray-800 focus:bg-gray-700'} focus:ring-2 focus:ring-gold-500 outline-none`} />
                      </div>
                      <div className="space-y-2">
                        <label className={`block text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                          Email Address
                        </label>
                        <input type="email" value={user.email} className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-gray-50 focus:bg-white border border-gray-200' : 'bg-gray-800 focus:bg-gray-700'} focus:ring-2 focus:ring-gold-500 outline-none`} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                      Preferences
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
                        <h4 className="mb-3 font-medium">Notifications</h4>
                        {Object.entries(user.preferences.notifications).map(([key, value]) => <div key={key} className="flex items-center justify-between mb-2">
                              <span className="capitalize">{key}</span>
                              <button className={`w-12 h-6 rounded-full transition-colors duration-300 ${value ? 'bg-gold-500' : theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
                                <div className={`w-4 h-4 rounded-full transition-transform duration-300 transform ${value ? 'translate-x-7 bg-white' : 'translate-x-1 bg-gray-400'}`} />
                              </button>
                            </div>)}
                      </div>
                      <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
                        <h4 className="mb-3 font-medium">Regional</h4>
                        <div className="space-y-4">
                          <div>
                            <label className={`block text-sm mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                              Currency
                            </label>
                            <select className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-700'}`}>
                              <option value="USD">USD ($)</option>
                              <option value="EUR">EUR (€)</option>
                              <option value="GBP">GBP (£)</option>
                            </select>
                          </div>
                          <div>
                            <label className={`block text-sm mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                              Language
                            </label>
                            <select className={`w-full px-4 py-2 rounded-lg transition-colors duration-300 ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-gray-700'}`}>
                              <option value="en">English</option>
                              <option value="es">Spanish</option>
                              <option value="fr">French</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Profile;