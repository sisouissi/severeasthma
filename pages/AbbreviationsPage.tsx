
import React from 'react';
import { Abbreviation } from '../types';
import { SvgDocumentText } from '../components/Icons';

const abbreviations: Abbreviation[] = [
  { term: 'ABPA', definition: 'Allergic bronchopulmonary aspergillosis' },
  { term: 'ACQ', definition: 'Asthma Control Questionnaire' },
  { term: 'AERD', definition: 'Aspirin-exacerbated respiratory disease' },
  { term: 'ICS', definition: 'Inhaled corticosteroid' },
  { term: 'LABA', definition: 'Long-acting beta₂ agonist' },
  { term: 'LAMA', definition: 'Long-acting muscarinic antagonist' },
  { term: 'LTRA', definition: 'Leukotriene receptor antagonist' },
  { term: 'OCS', definition: 'Oral corticosteroids' },
  { term: 'SABA', definition: 'Short-acting beta₂ agonist' },
  { term: 'FeNO', definition: 'Fractional concentration of exhaled nitric oxide' },
  // Add more abbreviations as needed
];

const AbbreviationsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <SvgDocumentText className="h-8 w-8 mr-3 text-sky-400" />
        <h1 className="text-3xl font-bold text-sky-300">Abbreviations (GINA 2024)</h1>
      </div>
      
      <p className="text-slate-300">
        List of abbreviations commonly used in the GINA guide and this application.
      </p>

      <div className="bg-slate-800/50 backdrop-blur-md shadow-lg rounded-lg p-6">
        <ul className="space-y-4">
          {abbreviations.map((abbr, index) => (
            <li key={index} className="p-3 bg-slate-700/50 rounded-md shadow">
              <span className="font-semibold text-sky-300">{abbr.term}:</span>
              <span className="ml-2 text-slate-200">{abbr.definition}</span>
            </li>
          ))}
        </ul>
      </div>
       <p className="text-xs text-slate-400 mt-4">
        This list is not exhaustive. For the complete list, please refer to the official GINA guide.
      </p>
    </div>
  );
};

export default AbbreviationsPage;
