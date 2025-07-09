
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-center p-4 text-xs text-slate-400 border-t border-slate-700">
     
      Based on the recommendations of{' '}
      <a 
        href="https://ginasthma.org/wp-content/uploads/2024/11/GINA-Severe-Asthma-Guide-2024-WEB-WMS.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sky-400 hover:text-sky-300 underline"
      >
        GINA Guide Difficult-to-treat & Severe Asthma in adolescent and adult patients
      </a>
      <br />
      <a href="https://ginasthma.org" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline">
        Visit ginasthma.org
      </a>
    </footer>
  );
};

export default Footer;
