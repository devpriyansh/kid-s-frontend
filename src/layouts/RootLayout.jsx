import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const RootLayout = () => {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden relative">
      <Navbar />
      <main className="flex-1 w-full relative z-0 overflow-hidden p-4 md:p-6 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;