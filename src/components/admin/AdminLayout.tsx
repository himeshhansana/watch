import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboardIcon, UsersIcon, ShoppingBagIcon, PackageIcon, SettingsIcon, LogOutIcon, MenuIcon, XIcon, BellIcon, UserIcon } from 'lucide-react';
const navigation = [{
  name: 'Dashboard',
  icon: LayoutDashboardIcon,
  href: '/admin/dashboard'
}, {
  name: 'Users',
  icon: UsersIcon,
  href: '/admin/users'
}, {
  name: 'Orders',
  icon: ShoppingBagIcon,
  href: '/admin/orders'
}, {
  name: 'Products',
  icon: PackageIcon,
  href: '/admin/products'
}, {
  name: 'Settings',
  icon: SettingsIcon,
  href: '/admin/settings'
}];
interface AdminLayoutProps {
  children: React.ReactNode;
}
const AdminLayout: React.FC<AdminLayoutProps> = ({
  children
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Handle logout logic here
    navigate('/admin/login');
  };
  return <div className="min-h-screen bg-gray-950">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out z-30 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
          <Link to="/admin/dashboard" className="text-xl font-bold text-gold-500">
            CHRONOS Admin
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <XIcon size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {navigation.map(item => {
            const Icon = item.icon;
            return <Link key={item.name} to={item.href} className={`flex items-center px-4 py-3 text-sm rounded-lg transition-colors duration-300 ${location.pathname === item.href ? 'bg-gold-500 text-gray-900' : 'text-gray-400 hover:bg-gray-800'}`} style={{
              backgroundColor: location.pathname === item.href ? '#D4AF37' : ''
            }}>
                  <Icon size={20} className="mr-3" />
                  {item.name}
                </Link>;
          })}
          </div>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-sm text-red-500 hover:bg-gray-800 rounded-lg transition-colors duration-300">
            <LogOutIcon size={20} className="mr-3" />
            Sign Out
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Navigation */}
        <div className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-gray-900 border-b border-gray-800 z-20">
          <div className="flex items-center justify-between h-full px-6">
            <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setSidebarOpen(true)}>
              <MenuIcon size={24} />
            </button>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white">
                <BellIcon size={20} />
              </button>
              <button className="text-gray-400 hover:text-white">
                <UserIcon size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="pt-16">{children}</div>
      </div>
    </div>;
};
export default AdminLayout;