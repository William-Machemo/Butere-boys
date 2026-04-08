import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">🏫 Principal</h1>
      <nav className="flex flex-col gap-4">
        <NavLink
          to="/principal"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Students
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Teachers
        </NavLink>
        <NavLink
          to="/assignments"
          className={({ isActive }) =>
            isActive ? "bg-gray-700 p-2 rounded" : "hover:bg-gray-700 p-2 rounded"
          }
        >
          Assignments
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;