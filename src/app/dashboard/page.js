'use client'
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { BarChart, ShoppingCart, Users, Settings, LayoutDashboard, Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
//   const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
//   const [authenticated, setAuthenticated] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [adminName, setAdminName] = useState("Admin");
  const [storeName, setStoreName] = useState("My Store");


  if (!authenticated) {
    return <div className="flex h-screen items-center justify-center text-xl font-bold">Access Denied</div>;
  }

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 70, 100, 90],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900"> 
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} className="h-full bg-white shadow-xl transition-all duration-300 z-10 p-2 rounded-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className={`text-lg font-bold transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>{storeName}</h2>
          <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-md hover:bg-gray-200">
            <MenuIcon />
          </button>
        </div>
        <Menu>
          <MenuItem icon={<LayoutDashboard />} onClick={() => setActiveSection("dashboard")}>Dashboard</MenuItem>
          <MenuItem icon={<ShoppingCart />} onClick={() => setActiveSection("orders")}>Orders</MenuItem>
          <MenuItem icon={<Users />} onClick={() => setActiveSection("users")}>Users</MenuItem>
          <MenuItem icon={<BarChart />} onClick={() => setActiveSection("analytics")}>Analytics</MenuItem>
          <MenuItem icon={<Settings />} onClick={() => setActiveSection("settings")}>Settings</MenuItem>
        </Menu>
      </Sidebar>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 p-8 bg-white shadow-lg rounded-lg"
      >
        {activeSection === "dashboard" && (
          <>
            <h1 className="text-3xl font-bold">E-Commerce Dashboard</h1>
            <p className="mt-2 text-gray-600">Welcome to your store analytics and management panel.</p>
          </>
        )}

        {activeSection === "orders" && (
          <>
            <h1 className="text-3xl font-bold">Orders</h1>
            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">Recent Orders</h2>
              <ul className="mt-2 border rounded-lg p-4 shadow-md bg-gray-50">
                {orders.filter(order => order.name.toLowerCase().includes(search.toLowerCase())).map(order => (
                  <li key={order.id} className="p-2 border-b last:border-0">{order.name}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {activeSection === "analytics" && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <Bar data={data} />
          </div>
        )}

        {activeSection === "settings" && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <label className="block text-lg font-medium">Admin Name</label>
            <input 
              type="text" 
              value={adminName} 
              onChange={(e) => setAdminName(e.target.value)} 
              className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <label className="block text-lg font-medium mt-4">Store Name</label>
            <input 
              type="text" 
              value={storeName} 
              onChange={(e) => setStoreName(e.target.value)} 
              className="w-full p-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
