import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockIcon, MailIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, validate credentials against admin users
    if (formData.email === 'admin@chronos.com' && formData.password === 'admin123') {
      // Set admin authentication token/state
      navigate('/admin/dashboard');
    }
  };
  return <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Portal</h1>
          <p className="text-gray-400">Sign in to manage CHRONOS platform</p>
        </div>
        <div className="bg-gray-900 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <input type="email" id="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" required />
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} id="password" value={formData.password} onChange={e => setFormData({
                ...formData,
                password: e.target.value
              })} className="w-full pl-10 pr-12 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-gold-500 outline-none" required />
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-gold-500 text-gray-900 rounded-lg hover:bg-gold-600 transition-colors duration-300 font-medium" style={{
            backgroundColor: '#D4AF37'
          }}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>;
};
export default AdminLogin;