import React from "react";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-bg-page pb-12">
        <div className="max-w-7xl mx-auto md:px-8 pt-6 space-y-8">
          {children}
        </div>
      </main>
    </div>
  );
}
