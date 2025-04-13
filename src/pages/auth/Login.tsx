import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };
  return <div className="min-h-screen bg-gray-950 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">
              Sign in to access your CHRONOS account
            </p>
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
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" checked={formData.rememberMe} onChange={e => setFormData({
                  ...formData,
                  rememberMe: e.target.checked
                })} className="form-checkbox text-gold-500 rounded border-gray-600 focus:ring-gold-500" />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me
                  </span>
                </label>
                <Link to="/auth/forgot-password" className="text-sm text-gold-500 hover:text-gold-400 transition-colors duration-300">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="w-full py-3 bg-gold-500 text-gray-900 rounded-lg hover:bg-gold-600 transition-colors duration-300 font-medium" style={{
              backgroundColor: '#D4AF37'
            }}>
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link to="/auth/signup" className="text-gold-500 hover:text-gold-400 transition-colors duration-300">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Login;