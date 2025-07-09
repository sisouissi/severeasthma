
import React from 'react';
import { Link } from 'react-router-dom';
import { SvgFlowChart, SvgInformationCircle } from '../components/Icons';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <SvgInformationCircle className="h-24 w-24 text-sky-400 mx-auto mb-6 animate-pulse" />
      <h1 className="text-4xl font-bold text-sky-300 mb-4">Welcome!</h1>
      <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
        This application is a decision support tool for the management of difficult-to-treat and severe asthma,
        in accordance with the GINA 2024 guide recommendations.
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4">
        <Link
          to="/decision/start"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <SvgFlowChart className="h-5 w-5 mr-2" />
          Start the Decision Tree
        </Link>
        <p className="text-sm text-slate-400 mt-6">
          This tool is intended for health professionals. It does not replace clinical judgment.
        </p>
      </div>
       <div className="mt-12 p-6 bg-slate-800/50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold text-sky-400 mb-3">About this tool</h2>
        <p className="text-slate-300 text-left space-y-2">
          <span>Purpose: To provide structured and interactive access to the GINA 2024 guidelines for severe asthma.</span><br/>
          <span>Developer: Dr Zouhair Souissi.</span><br/>
          <span>Main Source: GINA Guide "Difficult-to-treat & Severe Asthma in adolescent and adult patients" (V5.0 November 2024).</span>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
