
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../types';
import { SvgHome, SvgBeaker, SvgDocumentText, SvgFlowChart, SvgAcademicCap } from './Icons';

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/', icon: SvgHome },
  { label: 'Decision Tree', path: '/decision/start', icon: SvgFlowChart },
  { label: 'Abbreviations', path: '/abbreviations', icon: SvgDocumentText },
  { label: 'Medications', path: '/medications', icon: SvgBeaker },
  { label: 'GINA Definitions', path: '/decision/ginaDefinitions', icon: SvgAcademicCap } // Example of a specific info node
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-slate-800/70 backdrop-blur-md p-4 space-y-2 hidden md:block shadow-xl">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              {/* FIX: Refactored NavLink to use children-as-function to correctly apply conditional styles to the icon */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ease-in-out hover:bg-sky-700/50 group ${
                    isActive ? 'bg-sky-600 text-white shadow-md' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`h-5 w-5 transition-colors duration-200 ease-in-out ${ 
                      isActive ? 'text-white' : 'text-sky-400 group-hover:text-white'
                    }`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
