import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Header */}
      <Header setIsOpen={setIsOpen} />

      {/* CONTENT */}
      <main
        className="
          pt-20 p-6
          md:ml-64
        "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
