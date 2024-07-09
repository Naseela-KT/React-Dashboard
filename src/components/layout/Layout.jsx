/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Layout.css"; 
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar closed by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="d-flex h-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="d-flex flex-column flex-grow-1">
        {/* Navbar */}
        <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-grow-1 overflow-auto p-4 mt-5 pt-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
