// src/components/Layout.js
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-light p-3"
        style={{ width: "220px", minHeight: "100vh", borderRight: "1px solid #ccc" }}
      >
        <h4>Principal Menu</h4>
        <ul className="list-unstyled mt-4">
          <li className="mb-2">
            <a href="/PrincipalDashboard" className="text-decoration-none">🏠 Dashboard</a>
          </li>
          <li className="mb-2">
            <a href="/students" className="text-decoration-none">🧑‍🎓 Students</a>
          </li>
          <li className="mb-2">
            <a href="/teachers" className="text-decoration-none">🧑‍🏫 Teachers</a>
          </li>
          <li className="mb-2">
            <a href="/assignments" className="text-decoration-none">📝 Assignments</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">{children}</div>
    </div>
  );
}