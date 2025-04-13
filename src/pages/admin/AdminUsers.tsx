import React from 'react';

const AdminUsersDashboard = () => {
  // Sample data
  const stats = [
    { title: 'Total Users', value: '1,248' },
    { title: 'Active Today', value: '342' },
    { title: 'New This Week', value: '187' },
    { title: 'Admin Users', value: '24' }
  ];

  const recentUsers = [
    { name: 'Sarah Williams', email: 'sarah@example.com', role: 'Admin', joined: '2023-12-02' },
    { name: 'Robert Chen', email: 'robert@example.com', role: 'Editor', joined: '2023-12-01' },
    { name: 'Emily Parker', email: 'emily@example.com', role: 'User', joined: '2023-11-30' }
  ];

  const userActions = [
    { action: 'Account Created', user: 'David Miller', time: '2 hours ago' },
    { action: 'Role Changed', user: 'Lisa Wong', time: '5 hours ago' },
    { action: 'Password Reset', user: 'Admin', time: 'Yesterday' }
  ];

  return (
    <div className="max-w-6xl min-h-screen p-6 mx-auto text-gray-100 bg-gray-900 dashboard-container">
      <h1 className="mb-6 text-2xl font-bold text-white">Users Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 transition-colors bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:border-blue-500">
            <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Users */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-white">Recent Users</h2>
          <div className="space-y-4">
            {recentUsers.map((user, index) => (
              <div key={index} className="pb-4 border-b border-gray-700 last:border-b-0 last:pb-0">
                <h3 className="font-medium text-white">{user.name}</h3>
                <p className="text-sm text-gray-400">{user.email}</p>
                <div className="flex justify-between mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${
                    user.role === 'Admin' 
                      ? 'bg-purple-900 text-purple-300' 
                      : user.role === 'Editor' 
                        ? 'bg-blue-900 text-blue-300' 
                        : 'bg-gray-700 text-gray-300'
                  }`}>
                    {user.role}
                  </span>
                  <span className="text-xs text-gray-500">{user.joined}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm font-medium text-blue-400 hover:text-blue-300">
            View All Users →
          </button>
        </div>

        {/* Recent Actions */}
        <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-white">Recent Actions</h2>
          <div className="space-y-4">
            {userActions.map((action, index) => (
              <div key={index} className="pb-4 border-b border-gray-700 last:border-b-0 last:pb-0">
                <div className="flex justify-between">
                  <span className="font-medium text-white">{action.action}</span>
                  <span className="text-xs text-gray-500">{action.time}</span>
                </div>
                <p className="mt-1 text-sm text-gray-400">{action.user}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 text-sm font-medium text-blue-400 hover:text-blue-300">
            View Activity Log →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUsersDashboard;