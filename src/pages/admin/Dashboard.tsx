import React from 'react';
import { UsersIcon, ShoppingBagIcon, DollarSignIcon, PackageIcon, TrendingUpIcon, UserPlusIcon, ShoppingCartIcon } from 'lucide-react';
const stats = {
  totalRevenue: 245999,
  totalOrders: 182,
  totalUsers: 543,
  totalProducts: 76,
  recentSales: [{
    id: 1,
    product: 'Chronomaster Elite',
    amount: 4999,
    date: '2023-12-01'
  }, {
    id: 2,
    product: 'Royal Gold Limited',
    amount: 12999,
    date: '2023-12-01'
  }, {
    id: 3,
    product: 'Aqua Diver Pro',
    amount: 3499,
    date: '2023-11-30'
  }, {
    id: 4,
    product: 'Heritage Automatic',
    amount: 5999,
    date: '2023-11-30'
  }],
  newUsers: [{
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    joined: '2023-12-01'
  }, {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    joined: '2023-12-01'
  }, {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    joined: '2023-11-30'
  }],
  popularProducts: [{
    id: 1,
    name: 'Chronomaster Elite',
    sales: 24,
    stock: 18
  }, {
    id: 2,
    name: 'Royal Gold Limited',
    sales: 18,
    stock: 5
  }, {
    id: 3,
    name: 'Aqua Diver Pro',
    sales: 16,
    stock: 12
  }]
};
const Dashboard = () => {
  return <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gold-500/10 p-3 rounded-lg">
              <DollarSignIcon className="text-gold-500" size={24} />
            </div>
            <TrendingUpIcon className="text-green-500" size={24} />
          </div>
          <p className="text-gray-400 text-sm">Total Revenue</p>
          <h3 className="text-2xl font-bold">
            ${stats.totalRevenue.toLocaleString()}
          </h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gold-500/10 p-3 rounded-lg">
              <ShoppingBagIcon className="text-gold-500" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm">Total Orders</p>
          <h3 className="text-2xl font-bold">{stats.totalOrders}</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gold-500/10 p-3 rounded-lg">
              <UsersIcon className="text-gold-500" size={24} />
            </div>
            <UserPlusIcon className="text-green-500" size={24} />
          </div>
          <p className="text-gray-400 text-sm">Total Users</p>
          <h3 className="text-2xl font-bold">{stats.totalUsers}</h3>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gold-500/10 p-3 rounded-lg">
              <PackageIcon className="text-gold-500" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm">Total Products</p>
          <h3 className="text-2xl font-bold">{stats.totalProducts}</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Sales */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Sales</h2>
          <div className="space-y-4">
            {stats.recentSales.map(sale => <div key={sale.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium">{sale.product}</h3>
                  <p className="text-sm text-gray-400">{sale.date}</p>
                </div>
                <p className="font-bold">${sale.amount.toLocaleString()}</p>
              </div>)}
          </div>
        </div>
        {/* New Users */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">New Users</h2>
          <div className="space-y-4">
            {stats.newUsers.map(user => <div key={user.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
                <p className="text-sm text-gray-400">{user.joined}</p>
              </div>)}
          </div>
        </div>
        {/* Popular Products */}
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Popular Products</h2>
          <div className="space-y-4">
            {stats.popularProducts.map(product => <div key={product.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.sales} sales</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Stock</p>
                  <p className={`text-sm ${product.stock < 10 ? 'text-red-500' : 'text-green-500'}`}>
                    {product.stock} units
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default Dashboard;