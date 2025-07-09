
import React from 'react';
import { SvgLungs } from './Icons'; // Assuming you have an Icons.tsx

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg p-4 h-16 flex items-center justify-between text-white">
      <div className="flex items-center">
        <SvgLungs className="h-8 w-8 mr-3 text-sky-400" />
        <div>
          <h1 className="text-xl font-bold tracking-tight">Severe Asthma Decision Support</h1>
          <p className="text-xs text-sky-300">Developed by Dr Zouhair Souissi</p>
        </div>
      </div>
      <div className="text-sm text-gray-300">
        Based on GINA 2024
      </div>
    </header>
  );
};

export default Header;
