import React from "react";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-center py-6 bg-gray-900">
          Dashboard
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="#overview"
                className="block py-2 px-4 rounded hover:bg-gray-700  no-underline"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#complaints"
                className="block py-2 px-4 rounded hover:bg-gray-700 no-underline"
              >
                Complaints
              </a>
            </li>
            <li>
              <a
                href="#user-management"
                className="block py-2 px-4 rounded hover:bg-gray-700 no-underline"
              >
                User Management
              </a>
            </li>
            <li>
              <a
                href="#report"
                className="block py-2 px-4 rounded hover:bg-gray-700 no-underline"
              >
                Report
              </a>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="text-center text-sm text-gray-400 py-4">
          &copy; 2025 Dashboard, Inc.
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Select an option from the sidebar to get started.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
